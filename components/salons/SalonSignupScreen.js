
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as DocumentPicker from 'expo-document-picker';

const SalonSignupScreen = ({ navigation, route }) => {
  const [salonName, setSalonName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [salonType, setSalonType] = useState(null);
  const [salonLogo, setSalonLogo] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authDocument, setAuthDocument] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [documentUploaded, setDocumentUploaded] = useState(false);

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

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== 'granted') {
      Alert.alert('Permission required', 'We need access to your photo library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSalonLogo(result.assets[0].uri);
      setImageUploaded(true);
      Alert.alert('Success', 'Image successfully selected.');
    } else {
      Alert.alert('Error', 'No image selected.');
    }
  };

  const handleDocumentUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
    });

    if (!result.canceled) {
      setAuthDocument(result.uri);
      setDocumentUploaded(true);
      Alert.alert('Success', 'Document successfully attached.');
    }
  };

  const handleSalonSignup = async () => {
    const role = route?.params?.role || 'salon';
    if (!validateFields()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      Alert.alert('Verification Email Sent', 'Please check your email and verify your account before logging in.');

      const userId = user.uid;

      await set(ref(db, `salons/${userId}`), {
        salonName,
        ownerName,
        email,
        phoneNumber,
        address,
        salonType,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        salonLogo: salonLogo || '',
        authDocument: authDocument || '',
        createdAt: new Date().toISOString(),
        ownerId: userId,
        role,
        isEmailVerified: false,
      });

      // Reload user after verification
      await user.reload();

      navigation.navigate('SalonLoginForm');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>Salon Registration</Text>

      <TextInput placeholder="Salon Name" value={salonName} onChangeText={setSalonName} style={styles.input} />
      <TextInput placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="number-pad" style={styles.input} />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} multiline style={styles.input} />
      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={!showPassword} 
          style={styles.passwordInput} 
        />
        <Ionicons 
          name={showPassword ? 'eye-off' : 'eye'} 
          size={20} 
          color="gray" 
          onPress={() => setShowPassword(!showPassword)} 
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChangeText={setConfirmPassword} 
          secureTextEntry={!showConfirmPassword} 
          style={styles.passwordInput} 
        />
        <Ionicons 
          name={showConfirmPassword ? 'eye-off' : 'eye'} 
          size={20} 
          color="gray" 
          onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
        />
      </View>

      <DropDownPicker
        open={dropDownOpen}
        setOpen={setDropDownOpen}
        items={[{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }] }
        placeholder="Select Salon Type"
        value={salonType}
        setValue={setSalonType}
        containerStyle={{ marginBottom: dropDownOpen ? 200 : 10 }}
      />

      <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.input}>
        <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
      </TouchableOpacity>
      {showStartTimePicker && <DateTimePicker value={startTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowStartTimePicker(false); if (selectedTime) setStartTime(selectedTime); }} />}

      <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.input}>
        <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
      </TouchableOpacity>
      {showEndTimePicker && <DateTimePicker value={endTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowEndTimePicker(false); if (selectedTime) setEndTime(selectedTime); }} />}

      {/* <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Salon Logo</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentUpload}>
        <Text style={styles.buttonText}>Upload Authentication Document</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Salon Logo</Text>
      </TouchableOpacity>

      {salonLogo && (
        <View style={styles.imagePreview}>
          <Image source={{ uri: salonLogo }} style={styles.image} />
          <Text style={styles.imageText}>Salon Logo Preview</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSalonSignup}>
        <Text style={styles.buttonText1}>Register Salon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#EAF4F4' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 25, textAlign: 'center' ,color:'#00665C'},
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16, backgroundColor: '#fff', color: 'black' },
  uploadButton: { backgroundColor: '#fff', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15, borderWidth: 2 },
  button: { backgroundColor: '#00665C', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '', fontSize: 16},
  buttonText1: { color: 'white', fontSize: 18,fontWeight:'bold' },
  imagePreview: { alignItems: 'center', marginBottom: 20 },
  image: { width: 100, height: 100, resizeMode: 'contain', marginTop: 10 },
  imageText: { marginTop: 10, fontSize: 14, color: '#333' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 15, paddingRight: 10 },
  passwordInput: { flex: 1, height: 50, fontSize: 16, backgroundColor: '#fff' },
  backIcon: { marginBottom: 15 },
});


export default SalonSignupScreen;
