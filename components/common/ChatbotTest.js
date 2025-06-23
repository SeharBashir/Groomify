import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ChatbotAPI from '../services/ChatbotAPI';

// Simple test component to verify API connectivity
export default function ChatbotTest() {
  const [testResult, setTestResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setTestResult('Testing connection...');

    try {
      // Test basic message sending
      const response = await ChatbotAPI.sendMessage('Hello', 'test-user');
      setTestResult(`✅ Success: ${response.response}`);
    } catch (error) {
      setTestResult(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>
        Chatbot API Test
      </Text>
      
      <TouchableOpacity
        onPress={testConnection}
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? '#ccc' : '#00665C',
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
          {isLoading ? 'Testing...' : 'Test Connection'}
        </Text>
      </TouchableOpacity>

      {testResult ? (
        <View style={{ 
          padding: 15, 
          backgroundColor: testResult.includes('✅') ? '#e8f5e8' : '#ffe8e8',
          borderRadius: 8,
        }}>
          <Text style={{ 
            color: testResult.includes('✅') ? '#2e7d32' : '#c62828',
            fontSize: 14,
          }}>
            {testResult}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
