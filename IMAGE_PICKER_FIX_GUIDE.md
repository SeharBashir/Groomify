# Image Picker Fix Guide

## Issues Fixed:

### 1. HTML Rendering Warnings
- **Problem**: `react-native-render-html` showing defaultProps warnings with React 18+
- **Solution**: Updated RenderHtml component to use the newer API with `systemFonts` and `renderersProps` instead of deprecated `baseStyle`

### 2. Camera/Gallery Not Opening
- **Problem**: Permission handling and configuration issues
- **Solutions Applied**:
  - Added proper permissions to `app.json`
  - Enhanced permission request handling with detailed error messages
  - Added debug logging to help troubleshoot issues
  - Created test component for debugging

## What was Changed:

### 1. Updated `app.json`:
```json
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "This app needs access to camera...",
        "NSPhotoLibraryUsageDescription": "This app needs access to photo library..."
      }
    },
    "android": {
      "permissions": [
        "android.permission.CAMERA",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.READ_MEDIA_IMAGES"
      ]
    },
    "plugins": [
      ["expo-image-picker", {
        "photosPermission": "The app accesses your photos...",
        "cameraPermission": "The app accesses your camera..."
      }]
    ]
  }
}
```

### 2. Enhanced Permission Handling in `Chatbot.js`:
- Added detailed permission checking
- Better error messages and user guidance
- Debug logging for troubleshooting

### 3. Fixed HTML Rendering:
- Updated `react-native-render-html` usage to avoid warnings
- Added proper styling with `tagsStyles`
- Used `systemFonts` for better compatibility

## Testing Steps:

### 1. Test Image Picker:
- Use the `ImagePickerTest` component to debug permission issues
- Navigate to this component to test camera and gallery functionality

### 2. After Changes:
1. Stop the development server
2. Run `npx expo start --clear` to clear cache
3. Test on physical device (permissions don't work properly in simulator)

### 3. Permission Troubleshooting:
- If permissions are denied, user needs to manually enable them in device settings
- The app will guide users to the settings page

## Device Settings:
### Android:
Settings > Apps > Groomify > Permissions > Enable Camera and Storage

### iOS:
Settings > Privacy & Security > Camera/Photos > Enable for Groomify

## Important Notes:
- **Always test on physical device** - camera/gallery don't work properly in simulators
- **Permissions need user interaction** - they must be requested when user tries to use the feature
- **After app.json changes** - you may need to rebuild the app for changes to take effect

## Debug Steps:
1. Check console logs for permission status
2. Use `ImagePickerTest` component for isolated testing
3. Verify permissions are enabled in device settings
4. Test both camera and photo library separately
