
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { auth, db } from '../../firebaseConfig';
// import { getDatabase, ref, set } from 'firebase/database';
// import * as ImagePicker from 'expo-image-picker';
// import DropDownPicker from 'react-native-dropdown-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as DocumentPicker from 'expo-document-picker';


// const SalonSignupScreen = ({ navigation, route }) => {
//   const [salonName, setSalonName] = useState('');
//   const [ownerName, setOwnerName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [salonType, setSalonType] = useState(null);
//   const [salonLogo, setSalonLogo] = useState(null);
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
 
  
//   const [startTime, setStartTime] = useState(new Date());
//   const [endTime, setEndTime] = useState(new Date());
//   const [showStartTimePicker, setShowStartTimePicker] = useState(false);
//   const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  

//   const [dropDownOpen, setDropDownOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [authDocument, setAuthDocument] = useState(null);
//   const [imageUploaded, setImageUploaded] = useState(false);
//   const [documentUploaded, setDocumentUploaded] = useState(false);

//   const validateFields = () => {
//     if (!salonName || !ownerName || !email || !phoneNumber || !address || !salonType || !startTime || !endTime || !password || !confirmPassword) {
//       Alert.alert('Error', 'Please fill all mandatory fields.');
//       return false;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return false;
//     }

//     if (!email.includes('@') || !email.includes('.')) {
//       Alert.alert('Error', 'Please provide a valid email address.');
//       return false;
//     }

//     if (phoneNumber.length !== 11) {
//       Alert.alert('Error', 'Phone number must be 11 digits.');
//       return false;
//     }

//     const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
//     if (!password.match(passwordPattern)) {
//       Alert.alert('Error', 'Password must contain at least 1 letter, 1 number, and 1 special character.');
//       return false;
//     }

//     return true;
//   };

//   const handleImageUpload = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.status !== 'granted') {
//       Alert.alert('Permission required', 'We need access to your photo library.');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled && result.assets && result.assets.length > 0) {
//       setSalonLogo(result.assets[0].uri);
//       setImageUploaded(true);
//       Alert.alert('Success', 'Image successfully selected.');
//     } else {
//       Alert.alert('Error', 'No image selected.');
//     }
//   };

//   const handleDocumentUpload = async () => {
//     const result = await DocumentPicker.getDocumentAsync({
//       type: ['application/pdf', 'image/*'],
//     });

//     if (!result.canceled) {
//       setAuthDocument(result.uri);
//       setDocumentUploaded(true);
//       Alert.alert('Success', 'Document successfully attached.');
//     }
//   };

//   const handleSalonSignup = async () => {
//     const role = route?.params?.role || 'salon';
//     if (!validateFields()) return;

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Send verification email
//       await sendEmailVerification(user);
//       Alert.alert('Verification Email Sent', 'Please check your email and verify your account before logging in.');

//       const userId = user.uid;

//       await set(ref(db, `salons/${userId}`), {
//         salonName,
//         ownerName,
//         email,
//         phoneNumber,
//         address,
//         salonType,
//         startTime: startTime.toISOString(),
//         endTime: endTime.toISOString(),
//         salonLogo: salonLogo || '',
//         authDocument: authDocument || '',
//         createdAt: new Date().toISOString(),
//         ownerId: userId,
//         role,
//         isEmailVerified: false,
//       });

//       // Reload user after verification
//       await user.reload();

//       navigation.navigate('SalonLoginForm');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <KeyboardAvoidingView  style={{ flex: 1 }}>
//     <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled"  nestedScrollEnabled={true}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
//       </TouchableOpacity>

//       <Text style={styles.title}>Salon Registration</Text>

//       <TextInput placeholder="Salon Name" value={salonName} onChangeText={setSalonName} style={styles.input} />
//       <TextInput placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} style={styles.input} />
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
//       <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="number-pad" style={styles.input} />
//       <TextInput placeholder="Address" value={address} onChangeText={setAddress} multiline style={styles.input} />
//       <View style={styles.passwordContainer}>
//         <TextInput 
//           placeholder="Password" 
//           value={password} 
//           onChangeText={setPassword} 
//           secureTextEntry={!showPassword} 
//           style={styles.passwordInput} 
//         />
//         <Ionicons 
//           name={showPassword ? 'eye-off' : 'eye'} 
//           size={20} 
//           color="gray" 
//           onPress={() => setShowPassword(!showPassword)} 
//         />
//       </View>

//       <View style={styles.passwordContainer}>
//         <TextInput 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChangeText={setConfirmPassword} 
//           secureTextEntry={!showConfirmPassword} 
//           style={styles.passwordInput} 
//         />
//         <Ionicons 
//           name={showConfirmPassword ? 'eye-off' : 'eye'} 
//           size={20} 
//           color="gray" 
//           onPress={() => setShowConfirmPassword(!showConfirmPassword)} 
//         />
//       </View>

//       <View style={styles.dropdownContainer}>
//   <Text style={styles.label}>Select Salon Type</Text>
//   <View style={styles.optionsContainer}>
//     <TouchableOpacity 
//       style={[styles.optionButton, salonType === 'Male' && styles.selectedOption]} 
//       onPress={() => setSalonType('Male')}
//     >
//       <Text style={[styles.optionText, salonType === 'Male' && styles.selectedText]}>Male</Text>
//     </TouchableOpacity>
    
//     <TouchableOpacity 
//       style={[styles.optionButton, salonType === 'Female' && styles.selectedOption]} 
//       onPress={() => setSalonType('Female')}
//     >
//       <Text style={[styles.optionText, salonType === 'Female' && styles.selectedText]}>Female</Text>
//     </TouchableOpacity>
//   </View>
// </View>





//       <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.input}>
//         <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
//       </TouchableOpacity>
//       {showStartTimePicker && <DateTimePicker value={startTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowStartTimePicker(false); if (selectedTime) setStartTime(selectedTime); }} />}

//       <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.input}>
//         <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
//       </TouchableOpacity>
//       {showEndTimePicker && <DateTimePicker value={endTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowEndTimePicker(false); if (selectedTime) setEndTime(selectedTime); }} />}

//       {/* <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
//         <Text style={styles.buttonText}>Upload Salon Logo</Text>
//       </TouchableOpacity> */}

//       <TouchableOpacity style={styles.uploadButton} onPress={handleDocumentUpload}>
//         <Text style={styles.buttonText}>Upload Authentication Document</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
//         <Text style={styles.buttonText}>Upload Salon Logo</Text>
//       </TouchableOpacity>

//       {salonLogo && (
//         <View style={styles.imagePreview}>
//           <Image source={{ uri: salonLogo }} style={styles.image} />
//           <Text style={styles.imageText}>Salon Logo Preview</Text>
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleSalonSignup}>
//         <Text style={styles.buttonText1}>Register Salon</Text>
//       </TouchableOpacity>
//     </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20, backgroundColor: '#EAF4F4' },
//   title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' ,color:'#00665C'},
//   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16, backgroundColor: '#fff', color: 'black' },
//   uploadButton: { backgroundColor: '#fff', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 15, borderWidth: 2 },
//   button: { backgroundColor: '#00665C', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '', fontSize: 16},
//   buttonText1: { color: 'white', fontSize: 18,fontWeight:'bold' },
//   imagePreview: { alignItems: 'center', marginBottom: 20 },
//   image: { width: 100, height: 100, resizeMode: 'contain', marginTop: 10 },
//   imageText: { marginTop: 10, fontSize: 14, color: '#333' },
//   passwordContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 15, paddingRight: 10 },
//   passwordInput: { flex: 1, height: 50, fontSize: 16, backgroundColor: '#fff' },
//   backIcon: { marginBottom: 0,marginTop:20 },
//   dropdownContainer: { 
//     marginBottom: 20, 
//     paddingHorizontal: 10 
//   },
//   label: { 
//     fontSize: 18, 
//     fontWeight: 'bold', 
//     marginBottom: 10, 
//     color: '#00665C' 
//   },
//   optionsContainer: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     backgroundColor: '#EAF4F4', 
//     padding: 10, 
//     borderRadius: 10 
//   },
//   optionButton: {
//     flex: 1,
//     paddingVertical: 12,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: '#ccc',
//     alignItems: 'center',
//     marginHorizontal: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3, // Android shadow
//   },
//   selectedOption: { 
//     borderColor: '#00665C', 
//     backgroundColor: '#D0F0E0' 
//   },
//   optionText: { 
//     fontSize: 16, 
//     color: '#333', 
//     fontWeight: 'bold' 
//   },
//   selectedText: { 
//     color: '#00665C' 
//   },

// });


// export default SalonSignupScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authImage, setAuthImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [authImageUploaded, setAuthImageUploaded] = useState(false);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!salonName) newErrors.salonName = true;
    if (!ownerName) newErrors.ownerName = true;
    if (!email) newErrors.email = true;
    if (!phoneNumber) newErrors.phoneNumber = true;
    if (!address) newErrors.address = true;
    if (!salonType) newErrors.salonType = true;
    if (!startTime) newErrors.startTime = true;
    if (!endTime) newErrors.endTime = true;
    if (!password) newErrors.password = true;
    if (!confirmPassword) newErrors.confirmPassword = true;
    if (!salonLogo) newErrors.salonLogo = true;
    if (!authImage) newErrors.authImage = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
      setErrors({ ...errors, salonLogo: false });
      Alert.alert('Success', 'Image successfully selected.');
    } else {
      Alert.alert('Error', 'No image selected.');
    }
  };

  const handleAuthImageUpload = async () => {
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
      setAuthImage(result.assets[0].uri);
      setAuthImageUploaded(true);
      setErrors({ ...errors, authImage: false });
      Alert.alert('Success', 'Authentication image successfully selected.');
    } else {
      Alert.alert('Error', 'No image selected.');
    }
  };

  const handleSalonSignup = async () => {
    const role = route?.params?.role || 'salon';
    if (!validateFields()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

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
        authImage: authImage || '',
        createdAt: new Date().toISOString(),
        ownerId: userId,
        role,
        isEmailVerified: false,
      });

      await user.reload();

      navigation.navigate('SalonLoginForm');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" nestedScrollEnabled={true}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>Salon Registration</Text>

        <View style={[styles.inputContainer, errors.salonName && styles.errorInput]}>
          <Ionicons name="business" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Salon Name" value={salonName} onChangeText={setSalonName} style={styles.input} />
        </View>

        <View style={[styles.inputContainer, errors.ownerName && styles.errorInput]}>
          <Ionicons name="person" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} style={styles.input} />
        </View>

        <View style={[styles.inputContainer, errors.email && styles.errorInput]}>
          <Ionicons name="mail" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
        </View>

        <View style={[styles.inputContainer, errors.phoneNumber && styles.errorInput]}>
          <Ionicons name="call" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="number-pad" style={styles.input} />
        </View>

        <View style={[styles.inputContainer, errors.address && styles.errorInput]}>
          <Ionicons name="location" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Address" value={address} onChangeText={setAddress} multiline style={styles.input} />
        </View>

        <View style={[styles.passwordContainer, errors.password && styles.errorInput]}>
          <Ionicons name="lock-closed" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} style={styles.passwordInput} />
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" onPress={() => setShowPassword(!showPassword)} />
        </View>

        <View style={[styles.passwordContainer, errors.confirmPassword && styles.errorInput]}>
          <Ionicons name="lock-closed" size={20} color="#00665C" style={styles.icon} />
          <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={!showConfirmPassword} style={styles.passwordInput} />
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
        </View>

        <View style={[styles.dropdownContainer, errors.salonType && styles.errorInput]}>
          <Text style={styles.label}>Select Salon Type</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={[styles.optionButton, salonType === 'Male' && styles.selectedOption]} onPress={() => setSalonType('Male')}>
              <Text style={[styles.optionText, salonType === 'Male' && styles.selectedText]}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionButton, salonType === 'Female' && styles.selectedOption]} onPress={() => setSalonType('Female')}>
              <Text style={[styles.optionText, salonType === 'Female' && styles.selectedText]}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={[styles.inputContainer, errors.startTime && styles.errorInput]}>
          <Ionicons name="time" size={20} color="#00665C" style={styles.icon} />
          <Text>{startTime ? startTime.toLocaleTimeString() : 'Select Start Time'}</Text>
        </TouchableOpacity>
        {showStartTimePicker && <DateTimePicker value={startTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowStartTimePicker(false); if (selectedTime) setStartTime(selectedTime); }} />}

        <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={[styles.inputContainer, errors.endTime && styles.errorInput]}>
          <Ionicons name="time" size={20} color="#00665C" style={styles.icon} />
          <Text>{endTime ? endTime.toLocaleTimeString() : 'Select End Time'}</Text>
        </TouchableOpacity>
        {showEndTimePicker && <DateTimePicker value={endTime || new Date()} mode="time" display="default" onChange={(event, selectedTime) => { setShowEndTimePicker(false); if (selectedTime) setEndTime(selectedTime); }} />}

        <TouchableOpacity style={[styles.uploadButton, errors.authImage && styles.errorInput]} onPress={handleAuthImageUpload}>
          <Ionicons name="image" size={20} color="#00665C" style={styles.icon} />
          <Text style={styles.buttonText}>Upload Authentication Image</Text>
        </TouchableOpacity>

        {authImage && (
          <View style={styles.imagePreview}>
            <Image source={{ uri: authImage }} style={styles.image} />
            <Text style={styles.imageText}>Authentication Image Preview</Text>
          </View>
        )}

        <TouchableOpacity style={[styles.uploadButton, errors.salonLogo && styles.errorInput]} onPress={handleImageUpload}>
          <Ionicons name="image" size={20} color="#00665C" style={styles.icon} />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#EAF4F4' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#00665C' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16, backgroundColor: '#fff', color: 'black' },
  input: { flex: 1, marginLeft: 10 },
  uploadButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 15, borderWidth: 2 },
  button: { backgroundColor: '#00665C', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#00665C', fontSize: 16 },
  buttonText1: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  imagePreview: { alignItems: 'center', marginBottom: 20 },
  image: { width: 100, height: 100, resizeMode: 'contain', marginTop: 10 },
  imageText: { marginTop: 10, fontSize: 14, color: '#333' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, paddingLeft: 15, paddingRight: 10 },
  passwordInput: { flex: 1, height: 50, fontSize: 16, backgroundColor: '#fff' },
  backIcon: { marginBottom: 0, marginTop: 20 },
  dropdownContainer: { marginBottom: 20, paddingHorizontal: 10 },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#00665C' },
  optionsContainer: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EAF4F4', padding: 10, borderRadius: 10 },
  optionButton: { flex: 1, paddingVertical: 12, backgroundColor: '#fff', borderRadius: 8, borderWidth: 2, borderColor: '#ccc', alignItems: 'center', marginHorizontal: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
  selectedOption: { borderColor: '#00665C', backgroundColor: '#D0F0E0' },
  optionText: { fontSize: 16, color: '#333', fontWeight: 'bold' },
  selectedText: { color: '#00665C' },
  icon: { marginRight: 10 },
  errorInput: { borderColor: 'red' },
});

export default SalonSignupScreen;