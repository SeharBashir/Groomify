import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, set, push } from 'firebase/database'; // ✅ Imported `push` for unique key
import { db } from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const AddServices = () => {
  const navigation = useNavigation();
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');
  const [additionalCharges, setAdditionalCharges] = useState('');
  const [images, setImages] = useState([]);

  // ✅ Function to pick image from gallery
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

  // ✅ Function to save service in Firebase
  const saveService = () => {
    if (!serviceName || !price) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const serviceRef = push(ref(db, 'services')); // ✅ Generate a unique key for each service
    set(serviceRef, {
      serviceName,
      price,
      additionalCharges,
      images,
    })
      .then(() => {
        Alert.alert('Success', 'Service added successfully!');
        setServiceName('');
        setPrice('');
        setAdditionalCharges('');
        setImages([]);
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to add service: ' + error.message);
      });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Service Type</Text>

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
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  addImageButton: {
    backgroundColor: '#6200ee',
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
    backgroundColor: '#6200ee',
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
