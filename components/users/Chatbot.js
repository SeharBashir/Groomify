

// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// export default function Chatbot() {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Upper Section with Sea Green Background */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>Groomify Chatbot</Text>
//       </View>

//       {/* Lower Section with White Background (Content Centered) */}
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>What can I help with?</Text>
//         <Text style={styles.description}>
//           Your grooming assistant! Upload an image for personalized makeup and hairstyle
//           suggestions or ask beauty and skincare queries for instant expert advice.
//         </Text>
//       </View>

//       {/* Input Field Fixed at Bottom */}
//       <View style={styles.inputContainer}>
//         <TouchableOpacity>
//           <Ionicons name="image-outline" size={24} color="gray" style={styles.icon} />
//         </TouchableOpacity>
//         <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
//         <TouchableOpacity style={styles.sendButton}>
//           <Ionicons name="send" size={24} color="gray" />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
//           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
//           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Salon</Text>
//         </TouchableOpacity>

//         {/* <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('BookingScreen')}>
//           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Booking</Text>
//         </TouchableOpacity> */}

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
//           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>AI Chatbot</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
//           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "white" },
  
//   // Upper Sea Green Section
//   headerContainer: { 
//     backgroundColor: "#00665C", 
//     paddingVertical: 60, 
//     alignItems: "center", 
//     borderBottomLeftRadius: 30, 
//     borderBottomRightRadius: 30 
//   },
//   headerText: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },

//   // Lower White Section
//   contentContainer: { flex: 1, paddingHorizontal: 40, justifyContent: "center" },
//   title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#333" },
//   description: { textAlign: "center", color: "gray", fontSize: 16, marginBottom: 20 },

//   // Input Field at Bottom
//   inputContainer: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     borderColor: "gray", 
//     borderWidth: 1, 
//     borderRadius: 10, 
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     backgroundColor: "white",
//     position: "absolute",
//     bottom: 70, // Adjusted for navbar spacing
//     left: 20,
//     right: 20
//   },
//   icon: { marginRight: 10 },
//   input: { flex: 1, height: 40, color: "black" },
//   sendButton: { padding: 10 },

//   // Bottom Navigation Bar
//   bottomNavigation: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     elevation: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   bottomNavItem: { alignItems: 'center' },
//   bottomNavIcon: { width: 24, height: 24, marginBottom: 3 },
//   bottomNavText: { fontSize: 12, color: '#333' },
// });

import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  ScrollView, 
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Conditional imports with error handling
let ChatbotAPI, CONFIG, RenderHtml, auth, db, ref, get, ImagePicker;
try {
  ChatbotAPI = require('../../services/ChatbotAPI').default;
  CONFIG = require('../../config/config').default;
  RenderHtml = require('react-native-render-html').default;
  
  // Firebase imports
  const firebaseConfig = require("../../firebaseConfig");
  auth = firebaseConfig.auth;
  db = firebaseConfig.db;
  const firebaseDatabase = require("firebase/database");
  ref = firebaseDatabase.ref;
  get = firebaseDatabase.get;
  
  // Expo Image picker imports
  ImagePicker = require('expo-image-picker');
} catch (error) {
  console.warn('Some imports failed:', error);
}

export default function Chatbot() {
  const navigation = useNavigation();
  const [userGender, setUserGender] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("anonymous");
  const [hasError, setHasError] = useState(false);

  // Error boundary
  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error('Chatbot Error:', error, errorInfo);
      setHasError(true);
    };

    // Check if required dependencies are available
    if (!ChatbotAPI || !CONFIG) {
      console.error('Required dependencies not available');
      setHasError(true);
      return;
    }

    try {
      fetchUserData();
      initializeChat();
    } catch (error) {
      console.error('Initialization error:', error);
      setHasError(true);
    }
  }, []);

  // Fetch User Data (Gender) with error handling
  const fetchUserData = async () => {
    try {
      if (!auth || !db || !ref || !get) {
        console.warn('Firebase not available, using anonymous user');
        return;
      }

      const user = auth.currentUser;
      if (user) {
        setUserId(user.uid);
        const userRef = ref(db, "users/" + user.uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUserGender(userData.gender || "Unisex");
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Continue with anonymous user
    }
  };

  // Initialize chat with welcome message
  const initializeChat = async () => {
    try {
      if (!ChatbotAPI) {
        // Fallback message if API not available
        setMessages([{
          id: Date.now(),
          text: "Hello! I'm Groomify AI Assistant. I can help you with hairstyles, skincare, and makeup advice!",
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
          type: 'text'
        }]);
        return;
      }

      // First test connectivity
      const isConnected = await ChatbotAPI.testConnection();
      if (!isConnected) {
        setMessages([{
          id: Date.now(),
          text: `❌ Cannot connect to AI backend.\n\nPlease check:\n1. Flask backend is running\n2. Backend URL: ${CONFIG?.API?.BASE_URL || 'Not configured'}\n3. Network connectivity`,
          isUser: false,
          timestamp: new Date().toLocaleTimeString(),
          type: 'text',
          isError: true
        }]);
        return;
      }

      // If connected, reset chat
      const response = await ChatbotAPI.resetChat(userId);
      setMessages([{
        id: Date.now(),
        text: response.message || "Hello! I'm Groomify AI Assistant. I can help you with hairstyles, skincare, and makeup advice. Click the image button to upload photos for analysis!",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: 'text'
      }]);
    } catch (error) {
      console.error("Error initializing chat:", error);
      setMessages([{
        id: Date.now(),
        text: "Hello! I'm Groomify AI Assistant. I can help you with hairstyles, skincare, and makeup advice!",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: 'text'
      }]);
    }
  };

  // Handle sending text messages
  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await ChatbotAPI.sendMessage(inputText, userId);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response.response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: response.response.includes('<div') ? 'html' : 'text',
        intent: response.intent
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: error.message || "Sorry, I'm having trouble connecting. Please try again.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: 'text',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image selection
  const handleImagePicker = async () => {
    if (!ImagePicker) {
      Alert.alert("Error", "Image picker not available. Please ensure expo-image-picker is installed.");
      return;
    }

    try {
      // Debug: Check ImagePicker availability
      console.log('ImagePicker available:', !!ImagePicker);
      console.log('ImagePicker methods:', Object.keys(ImagePicker));

      Alert.alert(
        "Select Image",
        "Choose how you'd like to add an image",
        [
          { text: "Camera", onPress: () => openCamera() },
          { text: "Photo Library", onPress: () => openImageLibrary() },
          { text: "Cancel", style: "cancel" }
        ]
      );
    } catch (error) {
      console.error('Error with image picker:', error);
      Alert.alert("Error", "Failed to open image picker");
    }
  };

  const openCamera = async () => {
    try {
      // Request camera permissions
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      console.log('Camera permission status:', cameraPermission.status);
      
      if (cameraPermission.status !== 'granted') {
        Alert.alert('Permission Required', 'Camera permission is needed to take photos.');
        return;
      }

      console.log('Launching camera...');
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      console.log('Camera result:', result);
      handleImageResponse(result);
    } catch (error) {
      console.error('Camera error:', error);
      Alert.alert("Camera Error", error.message);
    }
  };

  const openImageLibrary = async () => {
    try {
      // Request media library permissions
      const libraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('Library permission status:', libraryPermission.status);
      
      if (libraryPermission.status !== 'granted') {
        Alert.alert(
          'Photo Library Permission Required', 
          'Please enable photo library permissions in your device settings to select photos.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Open Settings', onPress: () => {
              Alert.alert('Settings', 'Please go to Settings > Apps > Groomify > Permissions and enable Photos access.');
            }}
          ]
        );
        return;
      }

      console.log('Launching image library...');
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
        base64: false, // Don't include base64 to reduce memory usage
      });

      console.log('Library result:', result);
      handleImageResponse(result);
    } catch (error) {
      console.error('Image library error:', error);
      Alert.alert("Gallery Error", `Failed to open photo library: ${error.message}`);
    }
  };

  const handleImageResponse = async (response) => {
    if (response.canceled || !response.assets || response.assets.length === 0) {
      return;
    }

    const imageData = response.assets[0];
    
    // Add user image message
    const imageMessage = {
      id: Date.now(),
      text: "Image uploaded for analysis",
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
      type: 'image',
      imageUri: imageData.uri
    };

    setMessages(prev => [...prev, imageMessage]);
    setIsLoading(true);

    try {
      // Convert to format expected by backend
      const formattedImageData = {
        uri: imageData.uri,
        type: imageData.type || 'image/jpeg',
        fileName: imageData.fileName || 'image.jpg'
      };

      const analysisResult = await ChatbotAPI.analyzeImage(formattedImageData, userId);
      
      // Create analysis result message
      const analysisMessage = {
        id: Date.now() + 1,
        text: formatAnalysisResult(analysisResult),
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: 'analysis',
        analysisData: analysisResult
      };

      setMessages(prev => [...prev, analysisMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: error.message || "Sorry, I couldn't analyze the image. Please try again.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
        type: 'text',
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Format analysis results
  const formatAnalysisResult = (analysis) => {
    let result = `🎯 Analysis Results:\n\n`;
    result += `👤 Gender: ${analysis.gender} (${analysis.gender_confidence})\n`;
    result += `🔍 Face Shape: ${analysis.face_shape} (${analysis.face_confidence})\n`;
    result += `💇 Hair Style: ${analysis.hair_style} (${analysis.hair_confidence})\n`;
    result += `🧴 Skin Type: ${analysis.skin_type} (${analysis.skin_confidence})\n\n`;
    
    if (analysis.hairstyle_recommendations && analysis.hairstyle_recommendations.length > 0) {
      result += `💡 Recommended Hairstyles:\n`;
      analysis.hairstyle_recommendations.forEach((style, index) => {
        // Fix [object Object] issue
        const styleName = typeof style === 'string' ? style : (style.name || style.style || 'Unknown Style');
        result += `${index + 1}. ${styleName}\n`;
      });
      result += `\n`;
    }

    if (analysis.product_recommendations && analysis.product_recommendations.length > 0) {
      result += `🛍️ Recommended Products:\n`;
      analysis.product_recommendations.slice(0, 5).forEach((product, index) => {
        // Fix [object Object] issue
        const productName = typeof product === 'string' ? product : product.name || 'Unknown Product';
        const category = product.category ? ` - ${product.category}` : '';
        result += `${index + 1}. ${productName}${category}\n`;
      });
    }

    return result;
  };

  // Render text with bold formatting
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return (
      <Text style={[styles.messageText, styles.analysisText]}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            // Remove ** and make bold
            const boldText = part.slice(2, -2);
            return (
              <Text key={index} style={styles.boldText}>
                {boldText}
              </Text>
            );
          }
          return part;
        })}
      </Text>
    );
  };

  // Render message based on type
  const renderMessage = (message) => {
    try {
      const { width } = Dimensions.get('window');
      
      switch (message.type) {
        case 'html':
          if (RenderHtml) {
            return (
              <View style={[styles.messageContainer, styles.botMessage]}>
                <RenderHtml
                  contentWidth={width * 0.8}
                  source={{ html: message.text }}
                  systemFonts={['System']}
                  renderersProps={{
                    img: {
                      enableExperimentalPercentWidth: true,
                    },
                  }}
                  tagsStyles={{
                    body: {
                      fontSize: 14,
                      lineHeight: 20,
                      color: '#333',
                    },
                    h3: {
                      color: '#00665C',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 10,
                      marginTop: 5,
                    },
                    h4: {
                      color: '#00665C',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginBottom: 8,
                      marginTop: 10,
                    },
                    div: {
                      marginBottom: 5,
                    },
                    p: {
                      marginBottom: 5,
                      fontSize: 14,
                      lineHeight: 20,
                    },
                  }}
                />
                <Text style={styles.timestamp}>{message.timestamp}</Text>
              </View>
            );
          } else {
            // Fallback to plain text if RenderHtml not available
            return (
              <View style={[styles.messageContainer, styles.botMessage]}>
                <Text style={styles.messageText}>{message.text.replace(/<[^>]*>/g, '')}</Text>
                <Text style={styles.timestamp}>{message.timestamp}</Text>
              </View>
            );
          }
        
        case 'image':
          return (
            <View style={[styles.messageContainer, styles.userMessage]}>
              <Image source={{ uri: message.imageUri }} style={styles.messageImage} />
              <Text style={[styles.messageText, styles.userMessageText]}>{message.text}</Text>
              <Text style={[styles.timestamp, styles.userTimestamp]}>{message.timestamp}</Text>
            </View>
          );
        
        case 'analysis':
          return (
            <View style={[styles.messageContainer, styles.botMessage]}>
              {renderFormattedText(message.text)}
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          );
        
        default:
          return (
            <View style={[styles.messageContainer, message.isUser ? styles.userMessage : styles.botMessage]}>
              <Text style={[
                styles.messageText, 
                message.isUser && styles.userMessageText,
                message.isError && styles.errorText
              ]}>
                {message.text}
              </Text>
              <Text style={[styles.timestamp, message.isUser && styles.userTimestamp]}>{message.timestamp}</Text>
            </View>
          );
      }
    } catch (error) {
      console.error('Error rendering message:', error);
      return (
        <View style={[styles.messageContainer, styles.botMessage]}>
          <Text style={styles.errorText}>Error displaying message</Text>
          <Text style={styles.timestamp}>{message.timestamp}</Text>
        </View>
      );
    }
  };

  // Handle Navigation Based on Gender
  const handleHomeNavigation = () => {
    try {
      if (userGender.toLowerCase() === "male") {
        navigation.navigate("MaleHomeScreen");
      } else {
        navigation.navigate("UserHomeScreen");
      }
    } catch (error) {
      console.error("Navigation error:", error);
      navigation.goBack();
    }
  };

  // Error fallback screen
  if (hasError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="warning-outline" size={64} color="#F44336" />
          <Text style={styles.errorTitle}>Oops! Something went wrong</Text>
          <Text style={styles.errorMessage}>
            The chatbot encountered an error. This might be due to missing dependencies or network issues.
          </Text>
          <TouchableOpacity
            style={styles.errorButton}
            onPress={() => {
              setHasError(false);
              try {
                initializeChat();
              } catch (error) {
                navigation.goBack();
              }
            }}
          >
            <Text style={styles.errorButtonText}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.errorButton, styles.backButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.errorButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Groomify AI Assistant</Text>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={initializeChat}
          >
            <Ionicons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView 
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          ref={(ref) => this.scrollView = ref}
          onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
        >
          {messages.map((message) => (
            <View key={message.id}>
              {renderMessage(message)}
            </View>
          ))}
          
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#00665C" />
              <Text style={styles.loadingText}>AI is thinking...</Text>
            </View>
          )}
        </ScrollView>

        {/* Input Field */}
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleImagePicker} style={styles.imageButton}>
            <Ionicons name="image-outline" size={24} color="#00665C" />
          </TouchableOpacity>
          
          <TextInput 
            style={styles.input} 
            placeholder="Ask me about beauty, skincare, or hairstyles..." 
            placeholderTextColor="#aaa"
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={500}
            onSubmitEditing={handleSendMessage}
            returnKeyType="send"
          />
          
          <TouchableOpacity 
            style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.sendButtonDisabled]} 
            onPress={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
          >
            <Ionicons name="send" size={24} color={(!inputText.trim() || isLoading) ? "#ccc" : "#00665C"} />
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNavigation}>
          {[
            { title: "Home", image: require("../../assets/images/home.png"), route: "Home" },
            { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
            { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
            { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
          ].map((navItem, index) => (
            <TouchableOpacity
              key={index}
              style={styles.bottomNavItem}
              onPress={() => {
                if (navItem.route === "Home") {
                  handleHomeNavigation();
                } else {
                  navigation.navigate(navItem.route);
                }
              }}
            >
              <Image source={navItem.image} style={styles.bottomNavIcon} />
              <Text style={styles.bottomNavText}>{navItem.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white" 
  },

  // Header Section
  headerContainer: {
    backgroundColor: "#00665C",
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    padding: 8,
  },
  resetButton: {
    padding: 8,
  },
  headerText: { 
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },

  // Messages Section
  messagesContainer: {
    flex: 1,
    padding: 15,
    paddingBottom: 20,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: '85%',
    borderRadius: 15,
    padding: 12,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#00665C',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#333',
  },
  userMessageText: {
    color: '#fff',
  },
  analysisText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#00665C',
  },
  errorText: {
    color: '#ff4444',
    fontStyle: 'italic',
  },
  timestamp: {
    fontSize: 11,
    color: '#666',
    marginTop: 5,
    textAlign: 'right',
  },
  userTimestamp: {
    color: '#ccc',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },

  // Loading
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  loadingText: {
    marginLeft: 10,
    color: '#666',
    fontStyle: 'italic',
  },

  // Input Section
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    marginBottom: 60, // Space for bottom navigation
  },
  imageButton: {
    padding: 10,
    marginRight: 10,
  },
  input: { 
    flex: 1, 
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    fontSize: 16,
    color: "black",
    backgroundColor: "#f9f9f9",
  },
  sendButton: { 
    padding: 10,
    marginLeft: 10,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },

  // Bottom Navigation Bar
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#004D40",
    paddingVertical: 10,
  },
  bottomNavItem: { 
    alignItems: "center", 
    flex: 1 
  },
  bottomNavIcon: { 
    width: 24, 
    height: 24, 
    tintColor: "#fff" 
  },
  bottomNavText: { 
    fontSize: 10, 
    fontWeight: "bold", 
    color: "#fff" 
  },

  // Error Screen Styles
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F44336',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  errorButton: {
    backgroundColor: '#00665C',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    minWidth: 120,
  },
  backButton: {
    backgroundColor: '#666',
  },
  errorButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
