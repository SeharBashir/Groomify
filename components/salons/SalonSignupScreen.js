import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Import Ionicons for eye icon
import * as DocumentPicker from 'expo-document-picker';

const SalonSignupScreen = ({ navigation }) => {
  const [salonName, setSalonName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [salonType, setSalonType] = useState(null);
  const [salonLogo, setSalonLogo] = useState(null); // To store salon logo URI
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authDocument, setAuthDocument] = useState(null);  // New field for auth document
  const [imageUploaded, setImageUploaded] = useState(false);  // Track if image is uploaded
  const [documentUploaded, setDocumentUploaded] = useState(false);  // Track if document is uploaded

  // Validate fields
  const validateFields = () => {
    if (!salonName || !ownerName || !email || !phoneNumber || !address || !salonType || !startTime || !endTime || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all mandatory fields.');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Error', 'Please provide a valid email address.');
      return false;
    }

    if (phoneNumber.length !== 11) {
      Alert.alert('Error', 'Phone number must be 11 digits.');
      return false;
    }

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    if (!password.match(passwordPattern)) {
      Alert.alert('Error', 'Password must contain at least 1 letter, 1 number, and 1 special character.');
      return false;
    }

    return true;
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (uri) => {
    const data = new FormData();
    const fileName = uri.split('/').pop(); // Get the file name from the URI
    const fileType = uri.split('.').pop(); // Get the file type from the URI
    
    data.append('file', {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    });
    data.append('upload_preset', 'your_cloudinary_preset');  // Cloudinary upload preset
    data.append('cloud_name', 'Groomify');  // Cloudinary cloud name

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/der7nytc0/image/upload', {
        method: 'POST',
        body: data,
      });
      const responseJson = await response.json();
      return responseJson.secure_url;  // Return the image URL
    } catch (error) {
      console.error('Cloudinary Upload Error:', error);
      Alert.alert('Error', 'Failed to upload image to Cloudinary');
      return null;
    }
  };

  // Handle image selection
  const handleImageUpload = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission required", "We need access to your photo library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1, // You can adjust the quality as needed
    });

    if (!result.canceled && result.assets[0]) {
      const selectedImageUri = result.assets[0].uri;
      setSalonLogo(selectedImageUri); // Set the selected image URI for preview
      setImageUploaded(true); // Set image as uploaded
    }
  };

  // Handle document upload
  const handleDocumentUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*']
    });
    if (!result.canceled) {
      setAuthDocument(result.uri);  // Set the document URI
      setDocumentUploaded(true); // Set document as uploaded
    }
  };

  // Handle salon signup
  const handleSalonSignup = async () => {
    if (!validateFields()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      
      // Upload salon logo to Cloudinary
      const uploadedSalonLogo = await uploadImageToCloudinary(salonLogo);
      
      // Save data to Firebase Realtime Database
      await set(ref(db, `salons/${userId}`), {
        salonName, ownerName, email, phoneNumber, address, salonType,
        startTime: startTime.toISOString(), endTime: endTime.toISOString(),
        salonLogo: uploadedSalonLogo || salonLogo, // Store the image URL after uploading
        createdAt: new Date().toISOString(),
        authDocument: authDocument || '', // Add auth document field
      });

      Alert.alert('Success', 'Salon registered successfully');
      navigation.navigate('SalonLoginScreen'); // Navigate to Login Screen
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Salon Registration</Text>

      <TextInput placeholder="Salon Name" value={salonName} onChangeText={setSalonName} style={styles.input} />
      <TextInput placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="number-pad" style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} multiline style={styles.input} />

      {/* Password Fields with Show/Hide Toggle */}
      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={!showPassword} 
          style={styles.passwordInput} 
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChangeText={setConfirmPassword} 
          secureTextEntry={!showConfirmPassword} 
          style={styles.passwordInput} 
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      {/* Salon Type Dropdown */}
      <DropDownPicker
        open={dropDownOpen}
        setOpen={setDropDownOpen}
        items={[{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }] }
        placeholder="Select Salon Type"
        value={salonType}
        setValue={setSalonType}
        containerStyle={{ marginBottom: dropDownOpen ? 200 : 10 }}
      />

      {/* Start Time Picker */}
      <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.input}>
        <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
      </TouchableOpacity>
      {showStartTimePicker && (
        <DateTimePicker
          value={startTime || new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowStartTimePicker(false);
            if (selectedTime) setStartTime(selectedTime);
          }}
        />
      )}

      {/* End Time Picker */}
      <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.input}>
        <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
      </TouchableOpacity>
      {showEndTimePicker && (
        <DateTimePicker
          value={endTime || new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedTime) => {
            setShowEndTimePicker(false);
            if (selectedTime) setEndTime(selectedTime);
          }}
        />
      )}

      {/* Upload Salon Logo Button */}
      <TouchableOpacity style={[styles.uploadButton, { borderColor: imageUploaded ? 'darkgreen' : 'lightgreen' }]} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Salon Logo</Text>
      </TouchableOpacity>

      {/* Image Preview */}
      {salonLogo && (
        <View style={styles.imagePreview}>
          <Image source={{ uri: salonLogo }} style={styles.image} />
          <Text style={styles.imageText}>Image Preview</Text>
        </View>
      )}

      {/* Upload Document Button */}
      <TouchableOpacity style={[styles.uploadButton, { borderColor: documentUploaded ? 'darkgreen' : 'lightgreen' }]} onPress={handleDocumentUpload}>
        <Text style={styles.buttonText}>Upload Authentication Document</Text>
      </TouchableOpacity>

      {/* Document Preview */}
      {authDocument && (
        <View style={styles.imagePreview}>
          <Text style={styles.imageText}>Document Selected: {authDocument.split('/').pop()}</Text>
        </View>
      )}

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleSalonSignup}>
        <Text style={styles.buttonText}>Register Salon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16, backgroundColor: '#fff' ,color:'black'},
  uploadButton: { backgroundColor: '#fff', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15, borderWidth: 2 },
  button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'black', fontSize: 16 },
  imagePreview: { alignItems: 'center', marginBottom: 20 },
  image: { width: 100, height: 100, resizeMode: 'contain', marginTop: 10 },
  imageText: { marginTop: 10, fontSize: 14, color: '#333' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 },
  passwordInput: { flex: 1, height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 15, fontSize: 16, backgroundColor: '#fff' },
  eyeIcon: { paddingRight: 10 },
  backButton: { fontSize: 16, color: 'blue', marginBottom: 15 },
});

export default SalonSignupScreen;
