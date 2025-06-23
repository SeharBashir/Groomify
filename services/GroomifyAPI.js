/**
 * Groomify API Service
 * Handles all API calls to the Flask backend chatbot server
 */

// Backend server configuration
const API_BASE_URL = 'http://127.0.0.1:5000'; // Update this to your Flask server URL
// For production, use: const API_BASE_URL = 'https://your-domain.com';

class GroomifyAPI {
  
  /**
   * Send a message to the chatbot
   * @param {string} message - User's message
   * @param {string} userId - Unique user identifier
   * @returns {Promise<Object>} - Chatbot response
   */
  static async sendMessage(message, userId = 'anonymous') {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          user_id: userId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error sending message:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Upload and analyze an image for AI recommendations
   * @param {Object} imageFile - Image file object
   * @param {string} userId - Unique user identifier
   * @returns {Promise<Object>} - Analysis results with recommendations
   */
  static async analyzeImage(imageFile, userId = 'anonymous') {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageFile.uri,
        type: imageFile.type || 'image/jpeg',
        name: imageFile.fileName || 'image.jpg'
      });

      const response = await fetch(`${API_BASE_URL}/analyze-image?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error analyzing image:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Reset chat state for a user
   * @param {string} userId - Unique user identifier
   * @returns {Promise<Object>} - Reset confirmation
   */
  static async resetChat(userId = 'anonymous') {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error) {
      console.error('Error resetting chat:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get uploaded image URL
   * @param {string} filename - Image filename
   * @returns {string} - Full image URL
   */
  static getImageUrl(filename) {
    if (!filename) return null;
    return `${API_BASE_URL}/uploads/${filename}`;
  }

  /**
   * Test API connection
   * @returns {Promise<Object>} - Connection status
   */
  static async testConnection() {
    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return {
        success: true,
        message: 'API connection successful'
      };
    } catch (error) {
      console.error('Error testing connection:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Helper method to handle network errors
   * @param {Error} error - Network error
   * @returns {Object} - Formatted error response
   */
  static handleNetworkError(error) {
    if (error.message.includes('Network request failed')) {
      return {
        success: false,
        error: 'Unable to connect to server. Please check your internet connection.'
      };
    }
    
    if (error.message.includes('timeout')) {
      return {
        success: false,
        error: 'Request timed out. Please try again.'
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    };
  }
}

export default GroomifyAPI;

/**
 * Usage Examples:
 * 
 * // Send a chat message
 * const chatResponse = await GroomifyAPI.sendMessage("What hairstyle suits me?", "user123");
 * if (chatResponse.success) {
 *   console.log(chatResponse.data.message);
 * }
 * 
 * // Analyze an image
 * const imageFile = { uri: 'file://path/to/image.jpg', type: 'image/jpeg', fileName: 'selfie.jpg' };
 * const analysisResult = await GroomifyAPI.analyzeImage(imageFile, "user123");
 * if (analysisResult.success) {
 *   console.log('Face Shape:', analysisResult.data.face_shape);
 *   console.log('Recommendations:', analysisResult.data.hairstyle_recommendations);
 * }
 * 
 * // Reset chat
 * const resetResult = await GroomifyAPI.resetChat("user123");
 * if (resetResult.success) {
 *   console.log(resetResult.data.message);
 * }
 * 
 * // Get image URL
 * const imageUrl = GroomifyAPI.getImageUrl('uploaded_image.jpg');
 */
