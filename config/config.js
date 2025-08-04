// Configuration for the Groomify app
export const CONFIG = {
  // Backend API Configuration
  API: {
    // Change this to your actual Flask backend URL
    BASE_URL: '   http://10.211.0.117:5000', // Your local IP address
    // BASE_URL: 'http://localhost:5000', // For local development (only works in simulators)
    // BASE_URL: 'https://your-backend-domain.com', // For production
    
    TIMEOUT: 30000, // 30 seconds
    
    ENDPOINTS: {
      CHAT_MESSAGE: '/chat/message',
      ANALYZE_IMAGE: '/analyze-image',
      CHAT_RESET: '/chat/reset',
      UPLOADS: '/uploads',
    },
  },

  // App Configuration
  APP: {
    NAME: 'Groomify',
    VERSION: '1.0.0',
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

export default CONFIG;
