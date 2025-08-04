// Configuration for the Groomify app
export const CONFIG = {
  // Backend API Configuration
  API: {
    // Environment-based URL configuration
    BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL || 'http://10.211.0.117:5000',
    // Alternative URLs for different environments:
    // Development: 'http://localhost:5000' (for simulators)
    // Android Emulator: 'http://10.0.2.2:5000'
    // Production: 'https://your-backend-domain.com'
    
    TIMEOUT: 30000, // 30 seconds
    
    ENDPOINTS: {
      CHAT_MESSAGE: '/chat/message',
      ANALYZE_IMAGE: '/analyze-image',
      CHAT_RESET: '/chat/reset',
      UPLOADS: '/uploads',
      HEALTH: '/health',
    },
  },

  // App Configuration
  APP: {
    NAME: 'Groomify',
    VERSION: '1.0.0',
    ENVIRONMENT: process.env.NODE_ENV || 'development',
  },

  // UI Configuration
  UI: {
    COLORS: {
      PRIMARY: '#00665C',
      SECONDARY: '#004D40',
      SUCCESS: '#4CAF50',
      ERROR: '#F44336',
      WARNING: '#FF9800',
      INFO: '#2196F3',
      LIGHT_GRAY: '#f0f0f0',
      DARK_GRAY: '#666',
    },
  },
};

// Validate configuration
if (!CONFIG.API.BASE_URL) {
  console.warn('⚠️ API BASE_URL not configured. Using default localhost.');
}

export default CONFIG;
