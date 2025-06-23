import axios from 'axios';
import CONFIG from '../config/config';

class ChatbotAPI {
  constructor() {
    this.api = axios.create({
      baseURL: CONFIG.API.BASE_URL,
      timeout: CONFIG.API.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add request interceptor for debugging
    this.api.interceptors.request.use(
      (config) => {
        console.log('🚀 API Request:', {
          url: `${config.baseURL}${config.url}`,
          method: config.method,
          headers: config.headers,
        });
        return config;
      },
      (error) => {
        console.log('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Add response interceptor for debugging
    this.api.interceptors.response.use(
      (response) => {
        console.log('✅ API Response:', {
          status: response.status,
          data: response.data,
        });
        return response;
      },
      (error) => {
        console.log('❌ Response Error:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
        return Promise.reject(error);
      }
    );
  }

  /**
   * Test backend connectivity
   * @returns {Promise<boolean>} - True if backend is reachable
   */
  async testConnection() {
    try {
      const response = await this.api.get('/health');
      console.log('✅ Backend is healthy:', response.data);
      return true;
    } catch (error) {
      console.log('❌ Backend health check failed:', error.message);
      return false;
    }
  }

  /**
   * Send a text message to the chatbot
   * @param {string} message - The user's message
   * @param {string} userId - The user's ID
   * @returns {Promise} - Response from the chatbot
   */
  async sendMessage(message, userId = 'anonymous') {
    try {
      const response = await this.api.post(CONFIG.API.ENDPOINTS.CHAT_MESSAGE, {
        message: message,
        user_id: userId,
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Upload and analyze an image
   * @param {object} imageData - Image data from react-native-image-picker
   * @param {string} userId - The user's ID
   * @returns {Promise} - Analysis results
   */
  async analyzeImage(imageData, userId = 'anonymous') {
    try {
      const formData = new FormData();
      
      // Fix the image format for expo-image-picker
      formData.append('image', {
        uri: imageData.uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      console.log('Uploading image:', imageData.uri);

      const response = await axios.post(
        `${CONFIG.API.BASE_URL}${CONFIG.API.ENDPOINTS.ANALYZE_IMAGE}?user_id=${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          timeout: 60000, // 60 seconds for image upload
        }
      );
      
      return response.data;
    } catch (error) {
      console.error('Error analyzing image:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Reset the chat conversation
   * @param {string} userId - The user's ID
   * @returns {Promise} - Reset confirmation
   */
  async resetChat(userId = 'anonymous') {
    try {
      const response = await this.api.post(CONFIG.API.ENDPOINTS.CHAT_RESET, {
        user_id: userId,
      });
      return response.data;
    } catch (error) {
      console.error('Error resetting chat:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Get uploaded image URL
   * @param {string} imagePath - The image path from backend
   * @returns {string} - Full image URL
   */
  getImageUrl(imagePath) {
    return `${CONFIG.API.BASE_URL}${CONFIG.API.ENDPOINTS.UPLOADS}/${imagePath.split('/').pop()}`;
  }

  /**
   * Handle API errors
   * @param {object} error - Axios error object
   * @returns {object} - Formatted error
   */
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      return {
        message: error.response.data.error || 'Server error occurred',
        status: error.response.status,
        type: 'server_error',
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        message: 'Network error - please check your connection',
        type: 'network_error',
      };
    } else {
      // Something else happened
      return {
        message: error.message || 'An unexpected error occurred',
        type: 'unknown_error',
      };
    }
  }
}

export default new ChatbotAPI();
