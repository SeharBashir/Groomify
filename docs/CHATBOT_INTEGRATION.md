# Groomify Chatbot Integration

This document explains how to set up and use the AI-powered chatbot in the Groomify React Native app.

## Features

- **Text Chat**: Natural language processing for beauty and grooming queries
- **Image Analysis**: Upload photos for AI-powered analysis including:
  - Face shape detection
  - Hair style recognition
  - Gender detection
  - Skin type analysis
  - Personalized recommendations
- **HTML Responses**: Rich formatted responses with styling
- **Real-time Messaging**: Interactive chat interface
- **Image Upload**: Camera and photo library integration

## Setup Instructions

### 1. Backend Setup (Flask)

First, ensure your Flask backend is running:

```bash
cd /path/to/groomify-chatbot
python -m venv venv
source venv/bin/activate  # On Linux/Mac
pip install -r requirements.txt
python -m spacy download en_core_web_sm
python app.py
```

The backend should be running on `http://localhost:5000`

### 2. Frontend Configuration

Update the backend URL in `/config/config.js`:

```javascript
export const CONFIG = {
  API: {
    BASE_URL: 'http://YOUR_BACKEND_URL:5000', // Change this
    // For physical device testing: 'http://192.168.1.100:5000'
    // For production: 'https://your-domain.com'
  },
};
```

### 3. Install Dependencies

The following packages are required and should be installed:

```bash
npm install react-native-render-html axios react-native-image-picker react-native-webview
```

### 4. iOS Setup (if using iOS)

For iOS, you need to add permissions to `ios/YourApp/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>This app needs access to camera to take photos for beauty analysis.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>This app needs access to photo library to select images for beauty analysis.</string>
```

### 5. Android Setup (if using Android)

For Android, add permissions to `android/app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

## API Endpoints

The chatbot integrates with these Flask backend endpoints:

### 1. Send Message
- **Endpoint**: `POST /chat/message`
- **Purpose**: Send text messages to the AI chatbot
- **Request Body**:
  ```json
  {
    "message": "What hairstyle suits me?",
    "user_id": "user123"
  }
  ```

### 2. Analyze Image
- **Endpoint**: `POST /analyze-image?user_id=user123`
- **Purpose**: Upload and analyze images for beauty recommendations
- **Request**: Multipart form data with image file

### 3. Reset Chat
- **Endpoint**: `POST /chat/reset`
- **Purpose**: Reset the conversation state
- **Request Body**:
  ```json
  {
    "user_id": "user123"
  }
  ```

## Usage

### Text Messaging
1. Users can type questions about beauty, skincare, and hairstyles
2. The AI responds with personalized advice
3. Responses can include HTML formatting for rich content

### Image Analysis
1. Users tap the image button in the chat
2. Choose between camera or photo library
3. Upload an image for AI analysis
4. Receive detailed analysis including:
   - Face shape detection
   - Hair style recognition
   - Skin type analysis
   - Personalized recommendations

### HTML Responses
The chatbot can return HTML-formatted responses for rich content display:
- Structured skincare routines
- Product recommendations
- Step-by-step guides
- Formatted analysis results

## File Structure

```
components/users/
├── Chatbot.js              # Main chatbot component
services/
├── ChatbotAPI.js           # API service for backend communication
config/
├── config.js               # Configuration file
```

## Troubleshooting

### Common Issues

1. **Network Connection Error**
   - Check if Flask backend is running
   - Verify the API URL in config.js
   - For physical device testing, use your computer's IP address

2. **Image Upload Fails**
   - Ensure proper permissions are set
   - Check image size (should be < 10MB)
   - Verify multipart form data format

3. **HTML Not Rendering**
   - Check if react-native-webview is properly installed
   - Ensure HTML content is properly formatted

### Debug Mode

To enable debug logging, add this to your ChatbotAPI.js:

```javascript
// Add request interceptor for debugging
this.api.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

this.api.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
```

## Performance Considerations

1. **Image Optimization**: Images are automatically resized to 1000x1000px
2. **Response Caching**: Consider implementing local caching for better performance
3. **Timeout Handling**: 30-second timeout for API requests
4. **Memory Management**: Large images are automatically compressed

## Security Notes

1. Always validate user inputs
2. Implement proper authentication for production
3. Use HTTPS in production
4. Sanitize HTML content before rendering
5. Implement rate limiting on the backend

## Future Enhancements

- Voice message support
- Chat history persistence
- Push notifications for responses
- Multi-language support
- Offline mode with cached responses
