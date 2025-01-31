// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';


// const UserSignupScreen = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [serviceType, setServiceType] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSignUp = async () => {
//     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
//       Alert.alert('Error', 'All fields are required!');
//       return;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match!');
//       return;
//     }
//     try {
//       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       await firestore().collection('users').doc(user.uid).set({
//         fullName,
//         email,
//         serviceType,
//         gender,
//         address,
//         createdAt: firestore.FieldValue.serverTimestamp()
//       });
//       Alert.alert('Success', 'User registered successfully!');
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>User Signup</Text>
//       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
//       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
//       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
//       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
//         <Picker.Item label="Select Service Type" value="" />
//         <Picker.Item label="In-Salon" value="In-Salon" />
//         <Picker.Item label="Home Salon" value="Home Salon" />
//       </Picker>
//       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
//         <Picker.Item label="Select Gender" value="" />
//         <Picker.Item label="Male" value="Male" />
//         <Picker.Item label="Female" value="Female" />
//       </Picker>
//       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
//   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
//   picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
//   button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// });

// export default UserSignupScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const UserSignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', 'User  registered successfully! (This is a placeholder)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User  Signup</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
        <Picker.Item label="Select Service Type" value="" />
        <Picker.Item label="In-Salon" value="In-Salon" />
        <Picker.Item label="Home Salon" value="Home Salon" />
      </Picker>
      <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
  picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default UserSignupScreen;