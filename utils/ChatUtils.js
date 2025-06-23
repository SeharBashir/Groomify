/**
 * Image Picker Utility for Groomify Chatbot
 * Handles image selection from camera or gallery
 */

import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';

class ImagePickerUtil {
  
  /**
   * Request permissions for camera and media library
   * @returns {Promise<boolean>} - Permission granted status
   */
  static async requestPermissions() {
    try {
      if (Platform.OS !== 'web') {
        // Request camera permissions
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (cameraPermission.status !== 'granted' || mediaLibraryPermission.status !== 'granted') {
          Alert.alert(
            'Permissions Required',
            'Camera and photo library permissions are needed to analyze your photos for beauty recommendations.',
            [{ text: 'OK' }]
          );
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error('Error requesting permissions:', error);
      return false;
    }
  }

  /**
   * Show image picker options (Camera or Gallery)
   * @returns {Promise<Object|null>} - Selected image or null
   */
  static async showImagePickerOptions() {
    return new Promise((resolve) => {
      Alert.alert(
        'Select Image',
        'Choose how you want to select your photo for analysis',
        [
          {
            text: 'Camera',
            onPress: async () => {
              const result = await this.pickFromCamera();
              resolve(result);
            }
          },
          {
            text: 'Gallery',
            onPress: async () => {
              const result = await this.pickFromGallery();
              resolve(result);
            }
          },
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => resolve(null)
          }
        ]
      );
    });
  }

  /**
   * Pick image from camera
   * @returns {Promise<Object|null>} - Camera image or null
   */
  static async pickFromCamera() {
    try {
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) return null;

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio for better face analysis
        quality: 0.8, // Good quality but not too large
        base64: false
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        return {
          uri: asset.uri,
          type: 'image/jpeg',
          fileName: `camera_${Date.now()}.jpg`,
          width: asset.width,
          height: asset.height
        };
      }
      return null;
    } catch (error) {
      console.error('Error picking from camera:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
      return null;
    }
  }

  /**
   * Pick image from gallery
   * @returns {Promise<Object|null>} - Gallery image or null
   */
  static async pickFromGallery() {
    try {
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) return null;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio for better face analysis
        quality: 0.8, // Good quality but not too large
        base64: false
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        return {
          uri: asset.uri,
          type: 'image/jpeg',
          fileName: `gallery_${Date.now()}.jpg`,
          width: asset.width,
          height: asset.height
        };
      }
      return null;
    } catch (error) {
      console.error('Error picking from gallery:', error);
      Alert.alert('Error', 'Failed to select photo. Please try again.');
      return null;
    }
  }

  /**
   * Validate image file
   * @param {Object} imageFile - Image file object
   * @returns {boolean} - Validation status
   */
  static validateImage(imageFile) {
    if (!imageFile || !imageFile.uri) {
      Alert.alert('Error', 'Invalid image selected.');
      return false;
    }

    // Check file size (optional - can be implemented based on backend limits)
    // if (imageFile.fileSize && imageFile.fileSize > 10 * 1024 * 1024) { // 10MB limit
    //   Alert.alert('Error', 'Image file is too large. Please select a smaller image.');
    //   return false;
    // }

    return true;
  }
}

/**
 * Chat Utility Functions
 */
class ChatUtil {
  
  /**
   * Format timestamp for chat messages
   * @param {Date} date - Date object
   * @returns {string} - Formatted time string
   */
  static formatMessageTime(date = new Date()) {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  /**
   * Generate unique message ID
   * @returns {string} - Unique message ID
   */
  static generateMessageId() {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Format analysis results for display
   * @param {Object} analysisData - Analysis results from backend
   * @returns {string} - Formatted analysis message
   */
  static formatAnalysisResults(analysisData) {
    if (!analysisData) return 'Analysis results not available.';

    let message = '🎯 **Analysis Results:**\n\n';
    
    if (analysisData.face_shape) {
      message += `👤 **Face Shape:** ${analysisData.face_shape} (${analysisData.face_confidence})\n`;
    }
    
    if (analysisData.gender) {
      message += `⚧ **Gender:** ${analysisData.gender} (${analysisData.gender_confidence})\n`;
    }
    
    if (analysisData.hair_style) {
      message += `💇 **Hair Style:** ${analysisData.hair_style} (${analysisData.hair_confidence})\n`;
    }
    
    if (analysisData.skin_type) {
      message += `🧴 **Skin Type:** ${analysisData.skin_type} (${analysisData.skin_confidence})\n`;
    }

    if (analysisData.hairstyle_recommendations && analysisData.hairstyle_recommendations.length > 0) {
      message += '\n💡 **Hairstyle Recommendations:**\n';
      analysisData.hairstyle_recommendations.forEach((rec, index) => {
        message += `${index + 1}. ${rec}\n`;
      });
    }

    if (analysisData.product_recommendations && analysisData.product_recommendations.length > 0) {
      message += '\n🛍️ **Product Recommendations:**\n';
      analysisData.product_recommendations.forEach((product, index) => {
        message += `${index + 1}. ${product.name || product}\n`;
      });
    }

    return message;
  }

  /**
   * Check if message contains HTML content
   * @param {string} message - Message text
   * @returns {boolean} - Contains HTML
   */
  static containsHTML(message) {
    return /<[a-z][\s\S]*>/i.test(message);
  }

  /**
   * Extract plain text from HTML message
   * @param {string} htmlMessage - HTML message
   * @returns {string} - Plain text
   */
  static extractPlainText(htmlMessage) {
    return htmlMessage.replace(/<[^>]*>/g, '').trim();
  }
}

/**
 * User Utility Functions
 */
class UserUtil {
  
  /**
   * Generate unique user ID from Firebase auth or create anonymous ID
   * @param {Object} firebaseUser - Firebase user object
   * @returns {string} - User ID
   */
  static getUserId(firebaseUser = null) {
    if (firebaseUser && firebaseUser.uid) {
      return firebaseUser.uid;
    }
    
    // Generate anonymous user ID
    return `anonymous_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get user display name
   * @param {Object} firebaseUser - Firebase user object
   * @returns {string} - Display name
   */
  static getDisplayName(firebaseUser = null) {
    if (firebaseUser) {
      return firebaseUser.displayName || firebaseUser.email || 'User';
    }
    return 'Guest';
  }
}

export { ImagePickerUtil, ChatUtil, UserUtil };
