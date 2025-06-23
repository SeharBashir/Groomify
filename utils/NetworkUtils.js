import { Platform } from 'react-native';
import CONFIG from '../config/config';

/**
 * Network utilities for the Groomify app
 */
export class NetworkUtils {
  
  /**
   * Get the correct API URL based on platform and environment
   * @returns {string} - The API base URL
   */
  static getApiUrl() {
    // For development, you might want to use different URLs for different platforms
    if (__DEV__) {
      if (Platform.OS === 'android') {
        // Android Emulator uses 10.0.2.2 to access localhost
        return CONFIG.API.BASE_URL.replace('localhost', '10.0.2.2');
      } else if (Platform.OS === 'ios') {
        // iOS Simulator can use localhost
        return CONFIG.API.BASE_URL;
      }
    }
    
    return CONFIG.API.BASE_URL;
  }

  /**
   * Check if the backend is reachable
   * @returns {Promise<boolean>} - True if backend is reachable
   */
  static async checkBackendHealth() {
    try {
      const response = await fetch(`${this.getApiUrl()}/`, {
        method: 'GET',
        timeout: 5000,
      });
      return response.ok;
    } catch (error) {
      console.log('Backend health check failed:', error);
      return false;
    }
  }

  /**
   * Get local IP address suggestions for development
   * @returns {string[]} - Array of possible IP addresses
   */
  static getLocalIpSuggestions() {
    return [
      'http://localhost:5000',
      'http://127.0.0.1:5000',
      'http://10.0.2.2:5000', // Android emulator
      'http://192.168.1.100:5000', // Common local network
      'http://192.168.0.100:5000', // Common local network
    ];
  }

  /**
   * Test multiple endpoints to find working backend
   * @param {string[]} urls - Array of URLs to test
   * @returns {Promise<string|null>} - Working URL or null
   */
  static async findWorkingBackend(urls = null) {
    const testUrls = urls || this.getLocalIpSuggestions();
    
    for (const url of testUrls) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          timeout: 3000,
        });
        
        if (response.ok) {
          console.log(`✅ Backend found at: ${url}`);
          return url;
        }
      } catch (error) {
        console.log(`❌ Failed to connect to: ${url}`);
      }
    }
    
    return null;
  }
}

export default NetworkUtils;
