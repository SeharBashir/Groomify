/**
 * Custom Hook for Groomify Chatbot
 * Manages chat state, API calls, and user interactions
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import GroomifyAPI from '../services/GroomifyAPI';
import { ImagePickerUtil, ChatUtil, UserUtil } from '../utils/ChatUtils';
import { 
  MESSAGE_TYPES, 
  CHAT_STATES, 
  DEFAULT_MESSAGES, 
  HELP_MESSAGE,
  QUICK_REPLIES 
} from '../constants/ChatConstants';
import { auth } from '../firebaseConfig';

export const useChatbot = () => {
  // Chat state
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [chatState, setChatState] = useState(CHAT_STATES.IDLE);
  const [isTyping, setIsTyping] = useState(false);
  const [userId, setUserId] = useState('anonymous');
  const [userInfo, setUserInfo] = useState(null);
  const [quickReplies, setQuickReplies] = useState(QUICK_REPLIES.GETTING_STARTED);
  
  // Refs for managing state
  const messageIdCounter = useRef(0);
  const chatScrollRef = useRef(null);
  const lastMessageRef = useRef(null);

  // Initialize chat
  useEffect(() => {
    initializeChat();
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const newUserId = UserUtil.getUserId(user);
      setUserId(newUserId);
      setUserInfo(user);
    });

    return unsubscribe;
  }, []);

  /**
   * Initialize chat with welcome message
   */
  const initializeChat = useCallback(async () => {
    try {
      setChatState(CHAT_STATES.IDLE);
      
      // Add welcome message
      const welcomeMessage = {
        id: generateMessageId(),
        type: MESSAGE_TYPES.BOT,
        text: DEFAULT_MESSAGES.WELCOME,
        timestamp: new Date(),
        isHTML: false
      };
      
      setMessages([welcomeMessage]);
      setQuickReplies(QUICK_REPLIES.GETTING_STARTED);
      
      // Test API connection
      const connectionTest = await GroomifyAPI.testConnection();
      if (!connectionTest.success) {
        addSystemMessage(DEFAULT_MESSAGES.CONNECTION_ERROR);
      }
    } catch (error) {
      console.error('Error initializing chat:', error);
      addSystemMessage(DEFAULT_MESSAGES.GENERAL_ERROR);
    }
  }, []);

  /**
   * Generate unique message ID
   */
  const generateMessageId = useCallback(() => {
    messageIdCounter.current += 1;
    return `msg_${messageIdCounter.current}_${Date.now()}`;
  }, []);

  /**
   * Add a user message to chat
   */
  const addUserMessage = useCallback((text, type = MESSAGE_TYPES.USER) => {
    const message = {
      id: generateMessageId(),
      type: type,
      text: text,
      timestamp: new Date(),
      isHTML: false
    };
    
    setMessages(prev => [...prev, message]);
    return message;
  }, [generateMessageId]);

  /**
   * Add a bot message to chat
   */
  const addBotMessage = useCallback((text, isHTML = false, analysisData = null) => {
    const message = {
      id: generateMessageId(),
      type: MESSAGE_TYPES.BOT,
      text: text,
      timestamp: new Date(),
      isHTML: isHTML,
      analysisData: analysisData
    };
    
    setMessages(prev => [...prev, message]);
    return message;
  }, [generateMessageId]);

  /**
   * Add a system message to chat
   */
  const addSystemMessage = useCallback((text) => {
    const message = {
      id: generateMessageId(),
      type: MESSAGE_TYPES.SYSTEM,
      text: text,
      timestamp: new Date(),
      isHTML: false
    };
    
    setMessages(prev => [...prev, message]);
    return message;
  }, [generateMessageId]);

  /**
   * Show typing indicator
   */
  const showTypingIndicator = useCallback(() => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 3000); // Hide after 3 seconds max
  }, []);

  /**
   * Send a text message to the chatbot
   */
  const sendMessage = useCallback(async (text = inputText.trim()) => {
    if (!text) return;

    try {
      setChatState(CHAT_STATES.SENDING);
      
      // Add user message
      addUserMessage(text);
      setInputText('');
      
      // Handle special commands
      if (text.startsWith('/')) {
        handleCommand(text);
        return;
      }
      
      // Show typing indicator
      showTypingIndicator();
      
      // Send to backend
      const response = await GroomifyAPI.sendMessage(text, userId);
      
      if (response.success) {
        const { data } = response;
        
        // Add bot response
        if (data.message) {
          const isHTML = ChatUtil.containsHTML(data.message);
          addBotMessage(data.message, isHTML, data.analysis_data);
        }
        
        // Update quick replies based on response
        updateQuickReplies(data);
        
      } else {
        addBotMessage(DEFAULT_MESSAGES.GENERAL_ERROR);
        setQuickReplies(QUICK_REPLIES.ERROR_RECOVERY);
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      addBotMessage(DEFAULT_MESSAGES.CONNECTION_ERROR);
      setQuickReplies(QUICK_REPLIES.ERROR_RECOVERY);
    } finally {
      setChatState(CHAT_STATES.IDLE);
      setIsTyping(false);
    }
  }, [inputText, userId, addUserMessage, addBotMessage, showTypingIndicator]);

  /**
   * Handle special commands
   */
  const handleCommand = useCallback((command) => {
    setChatState(CHAT_STATES.IDLE);
    
    switch (command.toLowerCase()) {
      case '/help':
        addBotMessage(HELP_MESSAGE, false);
        setQuickReplies(QUICK_REPLIES.GETTING_STARTED);
        break;
        
      case '/reset':
        resetChat();
        break;
        
      case '/analyze':
        handleImageUpload();
        break;
        
      default:
        addBotMessage("Unknown command. Type /help to see available commands.");
        break;
    }
  }, [addBotMessage]);

  /**
   * Handle image upload and analysis
   */
  const handleImageUpload = useCallback(async () => {
    try {
      setChatState(CHAT_STATES.ANALYZING);
      
      // Pick image
      const imageFile = await ImagePickerUtil.showImagePickerOptions();
      if (!imageFile) {
        setChatState(CHAT_STATES.IDLE);
        return;
      }
      
      // Add user message showing image upload
      addUserMessage('📸 Image uploaded for analysis', MESSAGE_TYPES.IMAGE);
      
      // Show analysis starting message
      addBotMessage(DEFAULT_MESSAGES.IMAGE_ANALYSIS_START);
      showTypingIndicator();
      
      // Send to backend for analysis
      const response = await GroomifyAPI.analyzeImage(imageFile, userId);
      
      if (response.success) {
        const { data } = response;
        
        // Format and display analysis results
        const formattedResults = ChatUtil.formatAnalysisResults(data);
        addBotMessage(formattedResults, false, data);
        
        // Show follow-up quick replies
        setQuickReplies(QUICK_REPLIES.AFTER_ANALYSIS);
        
      } else {
        addBotMessage(DEFAULT_MESSAGES.IMAGE_ANALYSIS_ERROR);
        setQuickReplies(QUICK_REPLIES.ERROR_RECOVERY);
      }
      
    } catch (error) {
      console.error('Error analyzing image:', error);
      addBotMessage(DEFAULT_MESSAGES.IMAGE_ANALYSIS_ERROR);
      setQuickReplies(QUICK_REPLIES.ERROR_RECOVERY);
    } finally {
      setChatState(CHAT_STATES.IDLE);
      setIsTyping(false);
    }
  }, [userId, addUserMessage, addBotMessage, showTypingIndicator]);

  /**
   * Handle quick reply button press
   */
  const handleQuickReply = useCallback(async (reply) => {
    switch (reply.action) {
      case 'send_message':
        await sendMessage(reply.message);
        break;
        
      case 'image_upload':
        await handleImageUpload();
        break;
        
      case 'reset_chat':
        await resetChat();
        break;
        
      case 'retry_last':
        const lastUserMessage = [...messages].reverse().find(msg => msg.type === MESSAGE_TYPES.USER);
        if (lastUserMessage) {
          await sendMessage(lastUserMessage.text);
        }
        break;
        
      default:
        console.warn('Unknown quick reply action:', reply.action);
        break;
    }
  }, [sendMessage, handleImageUpload, messages]);

  /**
   * Reset chat conversation
   */
  const resetChat = useCallback(async () => {
    try {
      setChatState(CHAT_STATES.SENDING);
      
      // Call backend reset
      const response = await GroomifyAPI.resetChat(userId);
      
      if (response.success) {
        // Clear messages and reset state
        setMessages([]);
        setInputText('');
        setQuickReplies(QUICK_REPLIES.GETTING_STARTED);
        
        // Add reset success message
        addBotMessage(response.data.message || DEFAULT_MESSAGES.RESET_SUCCESS);
      } else {
        addSystemMessage('Failed to reset chat. Please try again.');
      }
      
    } catch (error) {
      console.error('Error resetting chat:', error);
      addSystemMessage(DEFAULT_MESSAGES.GENERAL_ERROR);
    } finally {
      setChatState(CHAT_STATES.IDLE);
    }
  }, [userId, addBotMessage, addSystemMessage]);

  /**
   * Update quick replies based on bot response
   */
  const updateQuickReplies = useCallback((responseData) => {
    if (responseData.analysis_data) {
      setQuickReplies(QUICK_REPLIES.AFTER_ANALYSIS);
    } else if (responseData.error) {
      setQuickReplies(QUICK_REPLIES.ERROR_RECOVERY);
    } else {
      setQuickReplies(QUICK_REPLIES.GETTING_STARTED);
    }
  }, []);

  /**
   * Scroll to bottom of chat
   */
  const scrollToBottom = useCallback(() => {
    if (chatScrollRef.current) {
      setTimeout(() => {
        chatScrollRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  }, []);

  // Auto scroll when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /**
   * Get chat statistics
   */
  const getChatStats = useCallback(() => {
    return {
      totalMessages: messages.length,
      userMessages: messages.filter(msg => msg.type === MESSAGE_TYPES.USER).length,
      botMessages: messages.filter(msg => msg.type === MESSAGE_TYPES.BOT).length,
      analysisCount: messages.filter(msg => msg.analysisData).length
    };
  }, [messages]);

  return {
    // State
    messages,
    inputText,
    chatState,
    isTyping,
    userId,
    userInfo,
    quickReplies,
    
    // Actions
    setInputText,
    sendMessage,
    handleImageUpload,
    handleQuickReply,
    resetChat,
    scrollToBottom,
    
    // Refs
    chatScrollRef,
    
    // Utils
    getChatStats,
    
    // Constants
    MESSAGE_TYPES,
    CHAT_STATES
  };
};

export default useChatbot;
