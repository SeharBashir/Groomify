/**
 * Groomify Chatbot Constants
 * Configuration and constant values for the chatbot functionality
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:5000', // Update this for production
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  ENDPOINTS: {
    CHAT_MESSAGE: '/chat/message',
    ANALYZE_IMAGE: '/analyze-image',
    RESET_CHAT: '/chat/reset',
    UPLOADS: '/uploads'
  }
};

// Chat Configuration
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
  MAX_MESSAGES_HISTORY: 100,
  TYPING_INDICATOR_DELAY: 1000, // 1 second
  AUTO_SCROLL_DELAY: 300,
  MESSAGE_ANIMATION_DURATION: 300
};

// Image Configuration
export const IMAGE_CONFIG = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_FORMATS: ['jpg', 'jpeg', 'png'],
  COMPRESSION_QUALITY: 0.8,
  MAX_WIDTH: 1024,
  MAX_HEIGHT: 1024,
  ASPECT_RATIO: [1, 1] // Square for better face analysis
};

// Message Types
export const MESSAGE_TYPES = {
  USER: 'user',
  BOT: 'bot',
  SYSTEM: 'system',
  IMAGE: 'image',
  ANALYSIS: 'analysis'
};

// Chat States
export const CHAT_STATES = {
  IDLE: 'idle',
  TYPING: 'typing',
  SENDING: 'sending',
  ANALYZING: 'analyzing',
  ERROR: 'error'
};

// Default Messages
export const DEFAULT_MESSAGES = {
  WELCOME: "Hello! I'm Groomify AI Assistant. I can help you with hairstyles, skincare, and makeup advice. Click the Help button to see what I can do!",
  IMAGE_ANALYSIS_START: "🔍 Analyzing your image for personalized recommendations...",
  IMAGE_ANALYSIS_SUCCESS: "✅ Image analysis complete! Here are your personalized recommendations:",
  IMAGE_ANALYSIS_ERROR: "❌ Sorry, I couldn't analyze your image. Please try uploading a clear photo of your face.",
  CONNECTION_ERROR: "🔌 Unable to connect to server. Please check your internet connection and try again.",
  GENERAL_ERROR: "😔 Something went wrong. Please try again.",
  TYPING: "Groomify is typing...",
  RESET_SUCCESS: "Chat has been reset. How can I help you today?"
};

// Help Commands and Responses
export const HELP_COMMANDS = {
  '/help': 'Show available commands and features',
  '/reset': 'Reset the chat conversation',
  '/analyze': 'Upload an image for beauty analysis',
  '/hairstyle': 'Get hairstyle recommendations',
  '/skincare': 'Get skincare advice',
  '/makeup': 'Get makeup tips'
};

export const HELP_MESSAGE = `
🤖 **Groomify AI Assistant Help**

**What I can do:**
• 📸 Analyze your photos for face shape, skin type, and hair analysis
• 💇 Recommend hairstyles based on your features
• 🧴 Provide personalized skincare routines
• 💄 Give makeup tips and advice
• 🎯 Answer beauty and grooming questions

**How to use:**
• Type your questions naturally
• Upload a photo for personalized analysis
• Use commands like "show me hairstyles" or "skincare routine"

**Commands:**
${Object.entries(HELP_COMMANDS).map(([cmd, desc]) => `\`${cmd}\` - ${desc}`).join('\n')}

**Tips:**
• For best results, upload clear, front-facing photos
• Ask specific questions for detailed advice
• I can help with both male and female grooming needs

Ready to help you look your best! 💫
`;

// Quick Reply Buttons
export const QUICK_REPLIES = {
  GETTING_STARTED: [
    { id: 'analyze_photo', text: '📸 Analyze Photo', action: 'image_upload' },
    { id: 'hairstyle_tips', text: '💇 Hairstyle Tips', action: 'send_message', message: 'Give me hairstyle recommendations' },
    { id: 'skincare_routine', text: '🧴 Skincare Routine', action: 'send_message', message: 'I need a skincare routine' },
    { id: 'help', text: '❓ Help', action: 'send_message', message: '/help' }
  ],
  AFTER_ANALYSIS: [
    { id: 'more_hairstyles', text: '💇 More Hairstyles', action: 'send_message', message: 'Show me more hairstyle options' },
    { id: 'skincare_advice', text: '🧴 Skincare Tips', action: 'send_message', message: 'Give me skincare advice for my skin type' },
    { id: 'makeup_tips', text: '💄 Makeup Tips', action: 'send_message', message: 'What makeup would suit me?' },
    { id: 'new_analysis', text: '📸 New Photo', action: 'image_upload' }
  ],
  ERROR_RECOVERY: [
    { id: 'try_again', text: '🔄 Try Again', action: 'retry_last' },
    { id: 'reset_chat', text: '🆕 Reset Chat', action: 'reset_chat' },
    { id: 'help', text: '❓ Help', action: 'send_message', message: '/help' }
  ]
};

// Analysis Result Categories
export const ANALYSIS_CATEGORIES = {
  FACE_SHAPES: {
    'round': '⭕ Round',
    'oval': '🥚 Oval', 
    'square': '⬜ Square',
    'heart': '💖 Heart',
    'diamond': '💎 Diamond',
    'oblong': '📏 Oblong'
  },
  SKIN_TYPES: {
    'dry': '🏜️ Dry',
    'oily': '🛢️ Oily',
    'normal': '✨ Normal',
    'combination': '🔀 Combination',
    'sensitive': '🌸 Sensitive'
  },
  HAIR_TYPES: {
    'straight': '📏 Straight',
    'wavy': '🌊 Wavy',
    'curly': '🌀 Curly',
    'kinky': '🔗 Kinky',
    'dreadlocks': '🧵 Dreadlocks'
  },
  GENDERS: {
    'male': '👨 Male',
    'female': '👩 Female'
  }
};

// Color Scheme
export const COLORS = {
  PRIMARY: '#00665C',
  SECONDARY: '#004D40',
  ACCENT: '#26A69A',
  BACKGROUND: '#FFFFFF',
  SURFACE: '#F5F5F5',
  ERROR: '#F44336',
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  TEXT_PRIMARY: '#212121',
  TEXT_SECONDARY: '#757575',
  BORDER: '#E0E0E0',
  USER_MESSAGE: '#E3F2FD',
  BOT_MESSAGE: '#F1F8E9',
  SYSTEM_MESSAGE: '#FFF3E0'
};

// Animation Durations (in milliseconds)
export const ANIMATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  TYPING_DOTS: 800,
  FADE_IN: 300,
  SLIDE_IN: 250
};

// Screen Dimensions Helper
export const SCREEN = {
  PADDING: 16,
  MARGIN: 8,
  BORDER_RADIUS: 8,
  HEADER_HEIGHT: 60,
  INPUT_HEIGHT: 50,
  NAVBAR_HEIGHT: 60
};

export default {
  API_CONFIG,
  CHAT_CONFIG,
  IMAGE_CONFIG,
  MESSAGE_TYPES,
  CHAT_STATES,
  DEFAULT_MESSAGES,
  HELP_COMMANDS,
  HELP_MESSAGE,
  QUICK_REPLIES,
  ANALYSIS_CATEGORIES,
  COLORS,
  ANIMATIONS,
  SCREEN
};
