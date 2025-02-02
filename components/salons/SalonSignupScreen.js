import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig'; // Firebase Configuration Imported
import { getDatabase, ref, set } from 'firebase/database';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';

const SalonSignupScreen = ({ navigation }) => {
  const [salonName, setSalonName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [salonType, setSalonType] = useState(null);
  const [salonLogo, setSalonLogo] = useState(null);
  const [authDocument, setAuthDocument] = useState(null);

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 1 });
    if (!result.canceled) {
      setSalonLogo(result.assets[0].uri);
    } else {
      Alert.alert('Error', 'Failed to pick an image');
    }
  };

  const handleDocumentUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: ['application/pdf', 'image/*'] });
      if (!result.canceled) {
        setAuthDocument(result.uri);
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to pick a document');
    }
  };

  const handleSalonSignup = async () => {
    if (!salonName || !ownerName || !email || !phoneNumber || !address || !salonType || !salonLogo || !authDocument) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    
    try {
      // Firebase Authentication (User Sign Up)
      const userCredential = await createUserWithEmailAndPassword(auth, email, 'defaultPassword123');
      const userId = userCredential.user.uid;

      // Store Salon Data in Realtime Database
      await set(ref(db, `salons/${userId}`), {
        salonName, ownerName, email, phoneNumber, address, salonType, startTime: startTime.toISOString(), endTime: endTime.toISOString(),
        salonLogo, authDocument,
        createdAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Salon registered successfully');
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Salon Registration</Text>
      
      <TextInput placeholder="Salon Name" value={salonName} onChangeText={setSalonName} style={styles.input} />
      <TextInput placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="number-pad" style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} multiline style={styles.input} />
      
      <DropDownPicker
        open={dropDownOpen}
        setOpen={setDropDownOpen}
        items={[{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }]}
        placeholder="Select Salon Type"
        value={salonType}
        setValue={setSalonType}
        containerStyle={{ marginBottom: dropDownOpen ? 200 : 10 }}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Salon Logo</Text>
      </TouchableOpacity>
      {salonLogo && <Image source={{ uri: salonLogo }} style={styles.image} />}

      <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentUpload}>
        <Text style={styles.buttonText}>Upload Authentication Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSalonSignup}>
        <Text style={styles.buttonText}>Register Salon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
  uploadButton: { backgroundColor: '#007BFF', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15 },
  button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  image: { width: 100, height: 100, marginVertical: 10, borderRadius: 10 },
});

export default SalonSignupScreen;
