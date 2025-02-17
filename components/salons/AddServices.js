
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, push, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const AddServices = () => {
  const navigation = useNavigation();
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [additionalCharges, setAdditionalCharges] = useState('');
  const [serviceType, setServiceType] = useState('Home Salon');
  const [serviceDescription, setServiceDescription] = useState('');
  const [images, setImages] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  // Function to pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // Function to upload image to Cloudinary and return URL
  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    data.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'service_image.jpg',
    });
    data.append('upload_preset', 'Groomify');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/der7nytc0/image/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  };

  // Function to save service to Firebase
  const saveService = async () => {
    if (!serviceName || !price || !serviceDescription) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!user) {
      Alert.alert('Error', 'User not authenticated.');
      return;
    }

    try {
      const uploadedImageUrls = await Promise.all(
        images.map((imageUri) => uploadImageToCloudinary(imageUri))
      );

      const serviceRef = push(ref(db, 'services'));
      const serviceId = serviceRef.key; // Generate unique service ID

      set(serviceRef, {
        serviceId,
        serviceName,
        price,
        additionalCharges,
        serviceType,
        serviceDescription,
        images: uploadedImageUrls,
        ownerId: user.uid,
      })
        .then(() => {
          Alert.alert('Success', 'Service added successfully!');
          setServiceName('');
          setPrice('');
          setAdditionalCharges('');
          setServiceType('Home Salon');
          setServiceDescription('');
          setImages([]);
        })
        .catch((error) => {
          Alert.alert('Error', 'Failed to add service: ' + error.message);
        });
    } catch (error) {
      Alert.alert('Error', 'Image upload failed: ' + error.message);
    }
  };
 
  

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Add New Service</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Service Name"
          value={serviceName}
          onChangeText={setServiceName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price (in Rupees)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Additional Charges</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Additional Charges"
          value={additionalCharges}
          onChangeText={setAdditionalCharges}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={serviceType}
            onValueChange={(itemValue) => setServiceType(itemValue)}
          >
            <Picker.Item label="Home Salon" value="Home Salon" />
            <Picker.Item label="In Salon" value="In Salon" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Description</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter Service Description"
          value={serviceDescription}
          onChangeText={setServiceDescription}
          multiline
        />
      </View>

      <Text style={styles.label}>Upload Images</Text>
      <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
        <Text style={styles.addImageButtonText}>+ Add Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={saveService}>
          <Text style={styles.buttonText}>Save Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EAF4F4',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 8,
    zIndex: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00665C',
    marginTop:30,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addImageButton: {
    backgroundColor: '#00665C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addImageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#00665C',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddServices;
