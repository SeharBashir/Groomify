import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import ChatbotAPI from '../../services/ChatbotAPI';
import CONFIG from '../../config/config';
import { Ionicons } from "@expo/vector-icons";

const NetworkDiagnostic = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const addDiagnostic = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setDiagnostics(prev => [...prev, { message, type, timestamp }]);
  };

  const runDiagnostics = async () => {
    setIsRunning(true);
    setDiagnostics([]);
    
    addDiagnostic('🔍 Starting network diagnostics...', 'info');
    addDiagnostic(`📍 Backend URL: ${CONFIG.API.BASE_URL}`, 'info');
    
    // Test 1: Basic connectivity
    addDiagnostic('🌐 Testing basic connectivity...', 'info');
    try {
      const isHealthy = await ChatbotAPI.testConnection();
      if (isHealthy) {
        addDiagnostic('✅ Backend is healthy and reachable', 'success');
      } else {
        addDiagnostic('❌ Backend health check failed', 'error');
      }
    } catch (error) {
      addDiagnostic(`❌ Connectivity test failed: ${error.message}`, 'error');
    }
    
    // Test 2: Chat API
    addDiagnostic('💬 Testing chat API...', 'info');
    try {
      const response = await ChatbotAPI.sendMessage('Hello test', 'diagnostic-user');
      addDiagnostic('✅ Chat API is working', 'success');
    } catch (error) {
      addDiagnostic(`❌ Chat API failed: ${error.message}`, 'error');
    }
    
    // Test 3: Reset API
    addDiagnostic('🔄 Testing reset API...', 'info');
    try {
      const response = await ChatbotAPI.resetChat('diagnostic-user');
      addDiagnostic('✅ Reset API is working', 'success');
    } catch (error) {
      addDiagnostic(`❌ Reset API failed: ${error.message}`, 'error');
    }
    
    addDiagnostic('🏁 Diagnostics complete', 'info');
    setIsRunning(false);
  };

  const showNetworkHelp = () => {
    Alert.alert(
      "Network Setup Help",
      `Current Backend URL: ${CONFIG.API.BASE_URL}\n\nFor development:\n• Make sure Flask backend is running\n• Use your computer's IP address instead of localhost\n• Check firewall settings\n• Ensure both devices are on the same network`,
      [{ text: "OK" }]
    );
  };

  const getMessageStyle = (type) => {
    switch (type) {
      case 'success': return styles.successMessage;
      case 'error': return styles.errorMessage;
      case 'info': return styles.infoMessage;
      default: return styles.infoMessage;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Network Diagnostics</Text>
        <TouchableOpacity onPress={showNetworkHelp} style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={24} color="#00665C" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={[styles.runButton, isRunning && styles.runButtonDisabled]}
        onPress={runDiagnostics}
        disabled={isRunning}
      >
        <Text style={styles.runButtonText}>
          {isRunning ? 'Running Diagnostics...' : 'Run Network Diagnostics'}
        </Text>
      </TouchableOpacity>

      <ScrollView style={styles.logContainer}>
        {diagnostics.map((diagnostic, index) => (
          <View key={index} style={[styles.logMessage, getMessageStyle(diagnostic.type)]}>
            <Text style={styles.timestamp}>{diagnostic.timestamp}</Text>
            <Text style={styles.message}>{diagnostic.message}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.infoPanel}>
        <Text style={styles.infoTitle}>Current Configuration:</Text>
        <Text style={styles.infoText}>Backend URL: {CONFIG.API.BASE_URL}</Text>
        <Text style={styles.infoText}>Timeout: {CONFIG.API.TIMEOUT}ms</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00665C',
  },
  helpButton: {
    padding: 8,
  },
  runButton: {
    backgroundColor: '#00665C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  runButtonDisabled: {
    backgroundColor: '#ccc',
  },
  runButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  logMessage: {
    padding: 8,
    marginBottom: 4,
    borderRadius: 4,
    borderLeftWidth: 4,
  },
  successMessage: {
    backgroundColor: '#e8f5e8',
    borderLeftColor: '#4caf50',
  },
  errorMessage: {
    backgroundColor: '#ffebee',
    borderLeftColor: '#f44336',
  },
  infoMessage: {
    backgroundColor: '#e3f2fd',
    borderLeftColor: '#2196f3',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    color: '#333',
  },
  infoPanel: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00665C',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default NetworkDiagnostic;
