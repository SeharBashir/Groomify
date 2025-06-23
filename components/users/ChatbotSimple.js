import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatbotSimple() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([{
    id: 1,
    text: "Hello! I'm Groomify AI Assistant. I can help you with hairstyles, skincare, and makeup advice!",
    isUser: false,
    timestamp: new Date().toLocaleTimeString(),
  }]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    // Simple bot responses
    const botResponses = [
      "Thanks for your question! I'd love to help you with beauty advice.",
      "That's a great question about skincare! For the best personalized advice, I recommend consulting with a beauty professional.",
      "I can help with general beauty tips! What specific area are you interested in - skincare, makeup, or hairstyles?",
      "For detailed analysis and recommendations, please ensure the backend API is connected.",
    ];

    const botMessage = {
      id: Date.now() + 1,
      text: botResponses[Math.floor(Math.random() * botResponses.length)],
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputText("");
  };

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
        </View>

        {/* Messages */}
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageContainer,
                message.isUser ? styles.userMessage : styles.botMessage
              ]}
            >
              <Text style={[
                styles.messageText,
                message.isUser && styles.userMessageText
              ]}>
                {message.text}
              </Text>
              <Text style={[
                styles.timestamp,
                message.isUser && styles.userTimestamp
              ]}>
                {message.timestamp}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Ask me about beauty, skincare, or hairstyles..." 
            placeholderTextColor="#aaa"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity 
            style={styles.sendButton} 
            onPress={sendMessage}
          >
            <Ionicons name="send" size={24} color="#00665C" />
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
            <Image source={require("../../assets/images/home.png")} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
            <Image source={require("../../assets/images/salon.png")} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>Salon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Image source={require("../../assets/images/chatbot.png")} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>AI Chatbot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
            <Image source={require("../../assets/images/user.png")} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>Profile</Text>
          </TouchableOpacity>
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
  headerContainer: {
    backgroundColor: "#00665C",
    paddingVertical: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  headerText: { 
    color: "white", 
    fontSize: 20, 
    fontWeight: "bold",
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 15,
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
  timestamp: {
    fontSize: 11,
    color: '#666',
    marginTop: 5,
    textAlign: 'right',
  },
  userTimestamp: {
    color: '#ccc',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginBottom: 60,
  },
  input: { 
    flex: 1, 
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  sendButton: { 
    padding: 10,
    marginLeft: 10,
  },
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
});
