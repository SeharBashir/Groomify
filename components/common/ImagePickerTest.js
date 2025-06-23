import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerTest() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState({});

  const checkPermissions = async () => {
    try {
      const cameraPermission = await ImagePicker.getCameraPermissionsAsync();
      const libraryPermission = await ImagePicker.getMediaLibraryPermissionsAsync();
      
      setPermissionStatus({
        camera: cameraPermission.status,
        library: libraryPermission.status,
        canAskCamera: cameraPermission.canAskAgain,
        canAskLibrary: libraryPermission.canAskAgain
      });

      Alert.alert('Permissions Status', 
        `Camera: ${cameraPermission.status} (can ask: ${cameraPermission.canAskAgain})\n` +
        `Library: ${libraryPermission.status} (can ask: ${libraryPermission.canAskAgain})`
      );
    } catch (error) {
      Alert.alert('Error', `Failed to check permissions: ${error.message}`);
    }
  };

  const testCamera = async () => {
    try {
      console.log('Testing camera...');
      
      // Request permission
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      console.log('Camera permission:', permission);
      
      if (permission.status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera permission is required');
        return;
      }

      // Launch camera
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      console.log('Camera result:', result);
      
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
        Alert.alert('Success', 'Image captured successfully!');
      }
    } catch (error) {
      console.error('Camera test error:', error);
      Alert.alert('Camera Error', error.message);
    }
  };

  const testLibrary = async () => {
    try {
      console.log('Testing library...');
      
      // Request permission
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('Library permission:', permission);
      
      if (permission.status !== 'granted') {
        Alert.alert('Permission Denied', 'Photo library permission is required');
        return;
      }

      // Launch library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      console.log('Library result:', result);
      
      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
        Alert.alert('Success', 'Image selected successfully!');
      }
    } catch (error) {
      console.error('Library test error:', error);
      Alert.alert('Library Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Picker Test</Text>
      
      <TouchableOpacity style={styles.button} onPress={checkPermissions}>
        <Text style={styles.buttonText}>Check Permissions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={testCamera}>
        <Text style={styles.buttonText}>Test Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={testLibrary}>
        <Text style={styles.buttonText}>Test Photo Library</Text>
      </TouchableOpacity>

      {permissionStatus.camera && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Camera: {permissionStatus.camera}</Text>
          <Text style={styles.statusText}>Library: {permissionStatus.library}</Text>
        </View>
      )}

      {selectedImage && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageLabel}>Selected Image:</Text>
          <Image source={{ uri: selectedImage }} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00665C',
  },
  button: {
    backgroundColor: '#00665C',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    marginVertical: 2,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
});
