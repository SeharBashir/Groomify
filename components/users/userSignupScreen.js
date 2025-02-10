// // // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // // // // // // // // // // // // // // // import { Picker } from '@react-native-picker/picker';
// // // // // // // // // // // // // // // // import auth from '@react-native-firebase/auth';
// // // // // // // // // // // // // // // // import firestore from '@react-native-firebase/firestore';


// // // // // // // // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // // // // // // // //   const [fullName, setFullName] = useState('');
// // // // // // // // // // // // // // // //   const [email, setEmail] = useState('');
// // // // // // // // // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // // // // // // // // // // //   const [serviceType, setServiceType] = useState('');
// // // // // // // // // // // // // // // //   const [gender, setGender] = useState('');
// // // // // // // // // // // // // // // //   const [address, setAddress] = useState('');

// // // // // // // // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // // // // // // // //       Alert.alert('Error', 'All fields are required!');
// // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // // // // // // // //       Alert.alert('Error', 'Passwords do not match!');
// // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
// // // // // // // // // // // // // // // //       const user = userCredential.user;
// // // // // // // // // // // // // // // //       await firestore().collection('users').doc(user.uid).set({
// // // // // // // // // // // // // // // //         fullName,
// // // // // // // // // // // // // // // //         email,
// // // // // // // // // // // // // // // //         serviceType,
// // // // // // // // // // // // // // // //         gender,
// // // // // // // // // // // // // // // //         address,
// // // // // // // // // // // // // // // //         createdAt: firestore.FieldValue.serverTimestamp()
// // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // //       Alert.alert('Success', 'User registered successfully!');
// // // // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // // // //       Alert.alert('Error', error.message);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // // // //     </View>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
// // // // // // // // // // // // // // // //   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
// // // // // // // // // // // // // // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // // // // // // // //   picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // // // // // // // //   button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
// // // // // // // // // // // // // // // //   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // export default UserSignupScreen;

// // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // // // // // // // // // // // // // // import { Picker } from '@react-native-picker/picker';

// // // // // // // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // // // // // // //   const [fullName, setFullName] = useState('');
// // // // // // // // // // // // // // //   const [email, setEmail] = useState('');
// // // // // // // // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // // // // // // // // // //   const [serviceType, setServiceType] = useState('');
// // // // // // // // // // // // // // //   const [gender, setGender] = useState('');
// // // // // // // // // // // // // // //   const [address, setAddress] = useState('');


// // // // // // // // // // // // // // //   const handleSignUp = () => {
// // // // // // // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // // // // // // //       Alert.alert('Error', 'All fields are required!');
// // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // // // // // // //       Alert.alert('Error', 'Passwords do not match!');
// // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     Alert.alert('Success', 'User  registered successfully! (This is a placeholder)');
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // // // // //       <Text style={styles.heading}>User  Signup</Text>
// // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // // //     </View>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
// // // // // // // // // // // // // // //   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
// // // // // // // // // // // // // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // // // // // // //   picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // // // // // // //   button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
// // // // // // // // // // // // // // //   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // export default UserSignupScreen;


// // // // // // // // // // // // // // //testing 
// // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // // // // // // // import { auth, db, createUserWithEmailAndPassword, addDoc, collection } from "../../firebaseConfig"; // Firebase Config Import

// // // // // // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       // Firebase Authentication (Email & Password)
// // // // // // // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // // // // // // //       const user = userCredential.user;

// // // // // // // // // // // // // //       // Firestore Database mein User ka Data Store Karna
// // // // // // // // // // // // // //       await addDoc(collection(db, "users"), {
// // // // // // // // // // // // // //         uid: user.uid,
// // // // // // // // // // // // // //         fullName,
// // // // // // // // // // // // // //         email,
// // // // // // // // // // // // // //         serviceType,
// // // // // // // // // // // // // //         gender,
// // // // // // // // // // // // // //         address,
// // // // // // // // // // // // // //         createdAt: new Date(),
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       Alert.alert("Success", "User registered successfully!");
// // // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // //     </View>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // export default UserSignupScreen;




// // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // // // // // // import { auth, db } from "../../firebaseConfig";  // ✅ Correct Import
// // // // // // // // // // // // // import { createUserWithEmailAndPassword } from "firebase/auth";  // ✅ Import from Firebase
// // // // // // // // // // // // // import { addDoc, collection } from "firebase/firestore";  // ✅ Firestore Import

// // // // // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // // // // // // //       return;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       // ✅ **Firebase Authentication (Create User)**
// // // // // // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // // // // // //       const user = userCredential.user;

// // // // // // // // // // // // //       // ✅ **Firestore: Store User Data**
// // // // // // // // // // // // //       await addDoc(collection(db, "users"), {
// // // // // // // // // // // // //         uid: user.uid,
// // // // // // // // // // // // //         fullName,
// // // // // // // // // // // // //         email,
// // // // // // // // // // // // //         serviceType,
// // // // // // // // // // // // //         gender,
// // // // // // // // // // // // //         address,
// // // // // // // // // // // // //         createdAt: new Date(),
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       Alert.alert("Success", "User registered successfully!");
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // // // // //       </Picker>
// // // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // //     </View>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // // // // // // });

// // // // // // // // // // // // // export default UserSignupScreen;



// // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // // // // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // // // // // // // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config

// // // // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }
// // // // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // // // // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // // // // //       const user = userCredential.user;

// // // // // // // // // // // //       // 2️⃣ Realtime Database mein User ka Data Store Karna
// // // // // // // // // // // //       await set(ref(db, "users/" + user.uid), {
// // // // // // // // // // // //         uid: user.uid,
// // // // // // // // // // // //         fullName,
// // // // // // // // // // // //         email,
// // // // // // // // // // // //         serviceType,
// // // // // // // // // // // //         gender,
// // // // // // // // // // // //         address,
// // // // // // // // // // // //         createdAt: new Date().toISOString(),
// // // // // // // // // // // //       });

// // // // // // // // // // // //       Alert.alert("Success", "User registered successfully!");
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // // // //       </Picker>
// // // // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // // // //       </Picker>
// // // // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // //     </View>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // // // // // });

// // // // // // // // // // // // export default UserSignupScreen;


// // // // // // // // // // // // until realtime 
// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // // // // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config
// // // // // // // // // // import { collection, doc, setDoc } from "firebase/firestore";  // Firestore imports

// // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     try {
// // // // // // // // // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // // //       const user = userCredential.user;

// // // // // // // // // //       // 2️⃣ Firestore mein User ka Data Store Karna
// // // // // // // // // //       const userRef = doc(collection(db, "users"), user.uid); // Reference to the Firestore collection
// // // // // // // // // //       await setDoc(userRef, {
// // // // // // // // // //         uid: user.uid,
// // // // // // // // // //         fullName,
// // // // // // // // // //         email,
// // // // // // // // // //         serviceType,
// // // // // // // // // //         gender,
// // // // // // // // // //         address,
// // // // // // // // // //         createdAt: new Date().toISOString(),
// // // // // // // // // //       });

// // // // // // // // // //       Alert.alert("Success", "User registered successfully!");
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // // //       </Picker>
// // // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // // //       </Picker>
// // // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // //     </View>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // // // });

// // // // // // // // // // export default UserSignupScreen;




// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // // // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config
// // // // // // // // // import { getDatabase, ref, set } from "firebase/database";  // Realtime DB imports

// // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // // //       const user = userCredential.user;

// // // // // // // // //       // 2️⃣ Realtime Database mein User ka Data Store Karna
// // // // // // // // //       const userRef = ref(db, "users/" + user.uid);  // Reference to the Realtime Database path
// // // // // // // // //       await set(userRef, {
// // // // // // // // //         uid: user.uid,
// // // // // // // // //         fullName,
// // // // // // // // //         email,
// // // // // // // // //         serviceType,
// // // // // // // // //         gender,
// // // // // // // // //         address,
// // // // // // // // //         createdAt: new Date().toISOString(),
// // // // // // // // //       });

// // // // // // // // //       Alert.alert("Success", "User registered successfully!");
// // // // // // // // //     } catch (error) {
// // // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <View style={styles.container}>
// // // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // // //       </Picker>
// // // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // // //       </Picker>
// // // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // // //       </TouchableOpacity>
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // // });

// // // // // // // // // export default UserSignupScreen;

// // // // // // // // //until realtime now i navigate to the login screen 



// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // // // import { auth, db } from "../../firebaseConfig";
// // // // // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // // // // import { useNavigation } from "@react-navigation/native";  // Navigation Hook Import

// // // // // // // // const UserSignupScreen = () => {
// // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // //   const navigation = useNavigation(); // Navigation Hook

// // // // // // // //   const handleSignUp = async () => {
// // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     if (password !== confirmPassword) {
// // // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // //       const user = userCredential.user;

// // // // // // // //       const userRef = ref(db, "users/" + user.uid);
// // // // // // // //       await set(userRef, {
// // // // // // // //         uid: user.uid,
// // // // // // // //         fullName,
// // // // // // // //         email,
// // // // // // // //         serviceType,
// // // // // // // //         gender,
// // // // // // // //         address,
// // // // // // // //         createdAt: new Date().toISOString(),
// // // // // // // //       });

// // // // // // // //       Alert.alert("Success", "User registered successfully!");

// // // // // // // //       navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

// // // // // // // //     } catch (error) {
// // // // // // // //       Alert.alert("Error", error.message);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       <Text style={styles.heading}>User Signup</Text>
// // // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // // //       </Picker>
// // // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // // //       </Picker>
// // // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // // });

// // // // // // // // export default UserSignupScreen;


// // // // // // // //store data into realtime
// // // // // // // //now fetch data from the database
// // // // // // // import React, { useState } from "react";
// // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // // // import { useNavigation } from "@react-navigation/native";
// // // // // // // import { auth, db } from "../../firebaseConfig"; // Make sure this is correctly imported

// // // // // // // const UserSignupScreen = () => {
// // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // //   const [gender, setGender] = useState("");
// // // // // // //   const [address, setAddress] = useState("");

// // // // // // //   const navigation = useNavigation(); // Navigation Hook

// // // // // // //   const handleSignUp = async () => {
// // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     if (password !== confirmPassword) {
// // // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // //       const user = userCredential.user;

// // // // // // //       // Save user data in Firebase Realtime Database
// // // // // // //       await set(ref(db, "users/" + user.uid), {
// // // // // // //         uid: user.uid,
// // // // // // //         fullName,
// // // // // // //         email,
// // // // // // //         password,  // 🔹 Storing password (can be removed if needed)
// // // // // // //         serviceType,
// // // // // // //         gender,
// // // // // // //         address,
// // // // // // //         createdAt: new Date().toISOString(),
// // // // // // //       });

// // // // // // //       Alert.alert("Success", "User registered successfully!");

// // // // // // //       navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

// // // // // // //     } catch (error) {
// // // // // // //       Alert.alert("Error", error.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.heading}>User Signup</Text>

// // // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

// // // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // // //       </Picker>

// // // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // // //       </Picker>

// // // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />

// // // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // // //       </TouchableOpacity>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // // });

// // // // // // // export default UserSignupScreen;


// // // // // // //add link to move to the login page


// // // // // // import React, { useState } from "react";
// // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // // import { useNavigation } from "@react-navigation/native";
// // // // // // import { auth, db } from "../../firebaseConfig"; // Make sure this is correctly imported

// // // // // // const UserSignupScreen = () => {
// // // // // //   const [fullName, setFullName] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // //   const [gender, setGender] = useState("");
// // // // // //   const [address, setAddress] = useState("");

// // // // // //   const navigation = useNavigation(); // Navigation Hook

// // // // // //   const handleSignUp = async () => {
// // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // //       Alert.alert("Error", "All fields are required!");
// // // // // //       return;
// // // // // //     }
// // // // // //     if (password !== confirmPassword) {
// // // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // //       const user = userCredential.user;

// // // // // //       // Save user data in Firebase Realtime Database
// // // // // //       await set(ref(db, "users/" + user.uid), {
// // // // // //         uid: user.uid,
// // // // // //         fullName,
// // // // // //         email,
// // // // // //         password,  // 🔹 Storing password (can be removed if needed)
// // // // // //         serviceType,
// // // // // //         gender,
// // // // // //         address,
// // // // // //         createdAt: new Date().toISOString(),
// // // // // //       });

// // // // // //       Alert.alert("Success", "User registered successfully!");

// // // // // //       navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

// // // // // //     } catch (error) {
// // // // // //       Alert.alert("Error", error.message);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <Text style={styles.heading}>User Signup</Text>

// // // // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

// // // // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // // //         <Picker.Item label="Select Service Type" value="" />
// // // // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // // // //       </Picker>

// // // // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // // //         <Picker.Item label="Select Gender" value="" />
// // // // // //         <Picker.Item label="Male" value="Male" />
// // // // // //         <Picker.Item label="Female" value="Female" />
// // // // // //       </Picker>

// // // // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />

// // // // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // // // //       </TouchableOpacity>

// // // // // //       {/* Link to navigate to Login Screen */}
// // // // // //       <TouchableOpacity onPress={() => navigation.navigate("UserLoginScreen")}>
// // // // // //         <Text style={styles.loginLink}>Already have an account? Login here</Text>
// // // // // //       </TouchableOpacity>
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 15 },
// // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // //   loginLink: { color: "#4CAF50", textAlign: "center", fontSize: 16, marginTop: 10 },
// // // // // // });

// // // // // // export default UserSignupScreen;

// // // // // //update styling 


// // // // // import React, { useState } from "react";
// // // // // import { 
// // // // //   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
// // // // // } from "react-native";
// // // // // import { Picker } from "@react-native-picker/picker";
// // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // import { useNavigation } from "@react-navigation/native";
// // // // // import { auth, db } from "../../firebaseConfig"; 
// // // // // import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // // // // const UserSignupScreen = () => {
// // // // //   const [fullName, setFullName] = useState("");
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // //   const [serviceType, setServiceType] = useState("");
// // // // //   const [gender, setGender] = useState("");
// // // // //   const [address, setAddress] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// // // // //   const navigation = useNavigation();

// // // // //   const handleSignUp = async () => {
// // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // //       Alert.alert("Error", "All fields are required!");
// // // // //       return;
// // // // //     }
// // // // //     if (password !== confirmPassword) {
// // // // //       Alert.alert("Error", "Passwords do not match!");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // //       const user = userCredential.user;

// // // // //       await set(ref(db, "users/" + user.uid), {
// // // // //         uid: user.uid,
// // // // //         fullName,
// // // // //         email,
// // // // //         serviceType,
// // // // //         gender,
// // // // //         address,
// // // // //         createdAt: new Date().toISOString(),
// // // // //       });

// // // // //       Alert.alert("Success", "User registered successfully!");
// // // // //       navigation.navigate("UserLoginScreen");

// // // // //     } catch (error) {
// // // // //       Alert.alert("Error", error.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.formContainer}>
// // // // //         <Text style={styles.heading}>Sign Up</Text>

// // // // //         <View style={styles.inputContainer}>
// // // // //           <Icon name="account" size={24} color="#888" style={styles.icon} />
// // // // //           <TextInput 
// // // // //             style={styles.input} 
// // // // //             placeholder="Full Name" 
// // // // //             value={fullName} 
// // // // //             onChangeText={setFullName} 
// // // // //           />
// // // // //         </View>

// // // // //         <View style={styles.inputContainer}>
// // // // //           <Icon name="email" size={24} color="#888" style={styles.icon} />
// // // // //           <TextInput 
// // // // //             style={styles.input} 
// // // // //             placeholder="Email" 
// // // // //             keyboardType="email-address" 
// // // // //             value={email} 
// // // // //             onChangeText={setEmail} 
// // // // //           />
// // // // //         </View>

// // // // //         <View style={styles.inputContainer}>
// // // // //           <Icon name="lock" size={24} color="#888" style={styles.icon} />
// // // // //           <TextInput 
// // // // //             style={styles.input} 
// // // // //             placeholder="Password" 
// // // // //             secureTextEntry={!showPassword} 
// // // // //             value={password} 
// // // // //             onChangeText={setPassword} 
// // // // //           />
// // // // //           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// // // // //             <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         <View style={styles.inputContainer}>
// // // // //           <Icon name="lock-check" size={24} color="#888" style={styles.icon} />
// // // // //           <TextInput 
// // // // //             style={styles.input} 
// // // // //             placeholder="Confirm Password" 
// // // // //             secureTextEntry={!showConfirmPassword} 
// // // // //             value={confirmPassword} 
// // // // //             onChangeText={setConfirmPassword} 
// // // // //           />
// // // // //           <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
// // // // //             <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         <View style={styles.pickerContainer}>
// // // // //           <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // // //             <Picker.Item label="Select Service Type" value="" />
// // // // //             <Picker.Item label="In-Salon" value="In-Salon" />
// // // // //             <Picker.Item label="Home Salon" value="Home Salon" />
// // // // //           </Picker>
// // // // //         </View>

// // // // //         <View style={styles.pickerContainer}>
// // // // //           <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // // //             <Picker.Item label="Select Gender" value="" />
// // // // //             <Picker.Item label="Male" value="Male" />
// // // // //             <Picker.Item label="Female" value="Female" />
// // // // //           </Picker>
// // // // //         </View>

// // // // //         <View style={styles.inputContainer}>
// // // // //           <Icon name="map-marker" size={24} color="#888" style={styles.icon} />
// // // // //           <TextInput 
// // // // //             style={styles.input} 
// // // // //             placeholder="Address" 
// // // // //             value={address} 
// // // // //             onChangeText={setAddress} 
// // // // //           />
// // // // //         </View>

// // // // //         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // // //           <Text style={styles.buttonText}>Sign Up</Text>
// // // // //         </TouchableOpacity>

// // // // //         <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }} onPress={() => navigation.navigate("UserLoginScreen")}>
// // // // //   <Text style={{ fontSize: 16, color: "#000" }}>Already have an account? </Text>
// // // // //   <Text style={{ fontSize: 16, color: "#4CAF50", fontWeight: "bold", textDecorationLine: "underline" }}>Login here</Text>
// // // // // </TouchableOpacity>

// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8", padding: 20 },
// // // // //   formContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "100%", elevation: 5 },
// // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // //   inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 15, paddingLeft: 10, backgroundColor: "#f9f9f9" },
// // // // //   icon: { marginRight: 10 },
// // // // //   input: { flex: 1, height: 50, fontSize: 16, paddingLeft: 10 },
// // // // //   pickerContainer: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 15, backgroundColor: "#f9f9f9" },
// // // // //   picker: { height: 50 },
// // // // //   button: { backgroundColor: "#00665C", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 15 },
// // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // //   loginLink: { color: "#00665C", textAlign: "center", fontSize: 16, marginTop: 10 },
// // // // // });

// // // // // export default UserSignupScreen;
// // // // import React, { useState } from "react";
// // // // import { 
// // // //   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
// // // // } from "react-native";
// // // // import { Picker } from "@react-native-picker/picker";
// // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // import { getDatabase, ref, set } from "firebase/database";
// // // // import { useNavigation } from "@react-navigation/native";
// // // // import { auth, db } from "../../firebaseConfig"; 
// // // // import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // // // const UserSignupScreen = () => {
// // // //   // ... (state variables same as before)

// // // //   const handleSignUp = async () => {
// // // //     // ... (required field check same as before)

// // // //     if (password !== confirmPassword) {
// // // //       Alert.alert("Error", "Passwords do not match!");
// // // //       return;
// // // //     }

// // // //     if (!isValidEmail(email)) {
// // // //       Alert.alert("Error", "Invalid email format. Please use @gmail.com");
// // // //       return;
// // // //     }

// // // //     if (!isStrongPassword(password)) {
// // // //       Alert.alert("Error", "Password must be at least 8 characters and include a mix of uppercase and lowercase letters, numbers, and symbols.");
// // // //       return;
// // // //     }


// // // //     try {
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // //       const user = userCredential.user;

// // // //       // ... (database write same as before)

// // // //       Alert.alert("Success", "User registered successfully!");
// // // //       navigation.navigate("UserLoginScreen");

// // // //     } catch (error) {
// // // //       Alert.alert("Error", error.message);
// // // //     }
// // // //   };

// // // //   const isValidEmail = (email) => {
// // // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // //     return emailRegex.test(email) && email.endsWith("@gmail.com");
// // // //   };

// // // //   const isStrongPassword = (password) => {
// // // //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// // // //     return passwordRegex.test(password);
// // // //   };


// // // //   return (
// // // //     // ... (JSX same as before)
// // // //     <View style={styles.container}>
// // // //       <View style={styles.formContainer}>
// // // //         <Text style={styles.heading}>Sign Up</Text>

// // // //         <View style={styles.inputContainer}>
// // // //           <Icon name="account" size={24} color="#888" style={styles.icon} />
// // // //          <TextInput 
// // // //             style={styles.input} 
// // // //             placeholder="Full Name" 
// // // //             value={fullName} 
// // // //             onChangeText={setFullName} 
// // // //           />
// // // //         </View>

// // // //         <View style={styles.inputContainer}>
// // // //           <Icon name="email" size={24} color="#888" style={styles.icon} />
// // // //           <TextInput 
// // // //             style={styles.input} 
// // // //             placeholder="Email" 
// // // //             keyboardType="email-address" 
// // // //             value={email} 
// // // //             onChangeText={setEmail} 
// // // //           />
// // // //         </View>

// // // //         <View style={styles.inputContainer}>
// // // //           <Icon name="lock" size={24} color="#888" style={styles.icon} />
// // // //           <TextInput 
// // // //             style={styles.input} 
// // // //             placeholder="Password" 
// // // //             secureTextEntry={!showPassword} 
// // // //             value={password} 
// // // //             onChangeText={setPassword} 
// // // //           />
// // // //           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// // // //             <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         <View style={styles.inputContainer}>
// // // //           <Icon name="lock-check" size={24} color="#888" style={styles.icon} />
// // // //           <TextInput 
// // // //             style={styles.input} 
// // // //             placeholder="Confirm Password" 
// // // //             secureTextEntry={!showConfirmPassword} 
// // // //             value={confirmPassword} 
// // // //             onChangeText={setConfirmPassword} 
// // // //           />
// // // //           <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
// // // //             <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         <View style={styles.pickerContainer}>
// // // //           <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // //             <Picker.Item label="Select Service Type" value="" />
// // // //             <Picker.Item label="In-Salon" value="In-Salon" />
// // // //             <Picker.Item label="Home Salon" value="Home Salon" />
// // // //           </Picker>
// // // //         </View>

// // // //         <View style={styles.pickerContainer}>
// // // //           <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // //             <Picker.Item label="Select Gender" value="" />
// // // //             <Picker.Item label="Male" value="Male" />
// // // //             <Picker.Item label="Female" value="Female" />
// // // //           </Picker>
// // // //         </View>

// // // //         <View style={styles.inputContainer}>
// // // //           <Icon name="map-marker" size={24} color="#888" style={styles.icon} />
// // // //           <TextInput 
// // // //             style={styles.input} 
// // // //             placeholder="Address" 
// // // //             value={address} 
// // // //             onChangeText={setAddress} 
// // // //           />
// // // //         </View>

// // // //         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // //           <Text style={styles.buttonText}>Sign Up</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }} onPress={() => navigation.navigate("UserLoginScreen")}>
// // // //   <Text style={{ fontSize: 16, color: "#000" }}>Already have an account? </Text>
// // // //   <Text style={{ fontSize: 16, color: "#4CAF50", fontWeight: "bold", textDecorationLine: "underline" }}>Login here</Text>
// // // // </TouchableOpacity>

// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // // ... (styles same as before)
// // // // const styles = StyleSheet.create({
// // // //     container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8", padding: 20 },
// // // //     formContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "100%", elevation: 5 },
// // // //     heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // //     inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 15, paddingLeft: 10, backgroundColor: "#f9f9f9" },
// // // //     icon: { marginRight: 10 },
// // // //     input: { flex: 1, height: 50, fontSize: 16, paddingLeft: 10 },
// // // //     pickerContainer: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginBottom: 15, backgroundColor: "#f9f9f9" },
// // // //     picker: { height: 50 },
// // // //     button: { backgroundColor: "#00665C", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 15 },
// // // //     buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // //     loginLink: { color: "#00665C", textAlign: "center", fontSize: 16, marginTop: 10 },
// // // //   });

// // // // export default UserSignupScreen;
// // // import React, { useState } from "react";
// // // import { 
// // //   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, Image
// // // } from "react-native";
// // // import { Picker } from "@react-native-picker/picker";
// // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // import { getDatabase, ref, set } from "firebase/database";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { auth, db } from "../../firebaseConfig"; 
// // // import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // // const UserSignupScreen = () => {
// // //   const [fullName, setFullName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [serviceType, setServiceType] = useState("");
// // //   const [gender, setGender] = useState("");
// // //   const [address, setAddress] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   const navigation = useNavigation();

// // //   const handleSignUp = async () => {
// // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // //       Alert.alert("Error", "All fields are required!");
// // //       return;
// // //     }

// // //     if (password !== confirmPassword) {
// // //       Alert.alert("Error", "Passwords do not match!");
// // //       return;
// // //     }

// // //     if (!isValidEmail(email)) {
// // //       Alert.alert("Error", "Invalid email format. Please use @gmail.com");
// // //       return;
// // //     }

// // //     if (!isStrongPassword(password)) {
// // //       Alert.alert("Error", "Password must be at least 8 characters and include a mix of uppercase and lowercase letters, numbers, and symbols.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //       const user = userCredential.user;
// // //       const userId = user.uid; // Get user id

// // //       await set(ref(db, "users/" + userId), {
// // //         uid: userId,
// // //         fullName: fullName,
// // //         email: email,
// // //         serviceType: serviceType,
// // //         gender: gender,
// // //         address: address,
// // //         createdAt: new Date().toISOString(),
// // //       });

// // //       Alert.alert("Success", "User registered successfully!");
// // //       navigation.navigate("UserLoginScreen");

// // //     } catch (error) {
// // //       Alert.alert("Error", error.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const isValidEmail = (email) => {
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     return emailRegex.test(email) && email.endsWith("@gmail.com");
// // //   };
  
// // //   const isStrongPassword = (password) => {
// // //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// // //     return passwordRegex.test(password);
// // //   };


// // // return (
// // //   <KeyboardAvoidingView
// // //     behavior={Platform.OS === "ios" ? "padding" : "height"}
// // //     style={styles.container}
// // //   >
// // //     <View style={styles.formContainer}>
// // //       <Image 
// // //         source={require('../../assets/images/signup.jpg')} // Correct path to your image
// // //         style={styles.logo} 
// // //       />
// // //       <Text style={styles.heading}>Sign Up</Text>

// // //       <View style={styles.inputContainer}>
// // //         <Icon name="account" size={24} color="#888" style={styles.icon} />
// // //         <TextInput 
// // //           style={styles.input} 
// // //           placeholder="Full Name" 
// // //           value={fullName} 
// // //           onChangeText={setFullName} 
// // //         />
// // //       </View>

// // //       <View style={styles.inputContainer}>
// // //         <Icon name="email" size={24} color="#888" style={styles.icon} />
// // //         <TextInput 
// // //           style={styles.input} 
// // //           placeholder="Email" 
// // //           keyboardType="email-address" 
// // //           value={email} 
// // //           onChangeText={setEmail} 
// // //         />
// // //       </View>

// // //       <View style={styles.inputContainer}>
// // //         <Icon name="lock" size={24} color="#888" style={styles.icon} />
// // //         <TextInput 
// // //           style={styles.input} 
// // //           placeholder="Password" 
// // //           secureTextEntry={!showPassword} 
// // //           value={password} 
// // //           onChangeText={setPassword} 
// // //         />
// // //         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// // //           <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <View style={styles.inputContainer}>
// // //         <Icon name="lock-check" size={24} color="#888" style={styles.icon} />
// // //         <TextInput 
// // //           style={styles.input} 
// // //           placeholder="Confirm Password" 
// // //           secureTextEntry={!showConfirmPassword} 
// // //           value={confirmPassword} 
// // //           onChangeText={setConfirmPassword} 
// // //         />
// // //         <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
// // //           <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#888" />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <View style={styles.pickerContainer}>
// // //         <Picker 
// // //           selectedValue={serviceType} 
// // //           style={styles.picker} 
// // //           onValueChange={setServiceType}
// // //           dropdownIconColor="#888"
// // //         >
// // //           <Picker.Item label="Select Service Type" value="" />
// // //           <Picker.Item label="In-Salon" value="In-Salon" />
// // //           <Picker.Item label="Home Salon" value="Home Salon" />
// // //         </Picker>
// // //       </View>

// // //       <View style={styles.pickerContainer}>
// // //         <Picker 
// // //           selectedValue={gender} 
// // //           style={styles.picker} 
// // //           onValueChange={setGender}
// // //           dropdownIconColor="#888"
// // //         >
// // //           <Picker.Item label="Select Gender" value="" />
// // //           <Picker.Item label="Male" value="Male" />
// // //           <Picker.Item label="Female" value="Female" />
// // //         </Picker>
// // //       </View>

// // //       <View style={styles.inputContainer}>
// // //         <Icon name="map-marker" size={24} color="#888" style={styles.icon} />
// // //         <TextInput 
// // //           style={styles.input} 
// // //           placeholder="Address" 
// // //           value={address} 
// // //           onChangeText={setAddress} 
// // //           multiline={true}
// // //           numberOfLines={3}
// // //         />
// // //       </View>

// // //       {loading && <ActivityIndicator size="large" color="#00665C" />}
// // //       <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
// // //         <Text style={styles.buttonText}>Sign Up</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity 
// // //         style={styles.loginLinkContainer}
// // //         onPress={() => navigation.navigate("UserLoginScreen")}
// // //       >
// // //         <Text style={styles.loginText}>Already have an account? </Text>
// // //         <Text style={styles.loginLink}>Login here</Text>
// // //       </TouchableOpacity>

// // //     </View>
// // //   </KeyboardAvoidingView>
// // // );
// // // };


// // // const styles = StyleSheet.create({
// // //   // ... (Previous styles)

// // //   container: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     backgroundColor: "#f0f0f0",
// // //     padding: 20,
// // //   },
// // //   formContainer: {
// // //     backgroundColor: "#fff",
// // //     padding: 20,
// // //     borderRadius: 10,
// // //     width: "100%",
// // //     maxWidth: 400,
// // //     elevation: 5,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 4,
// // //   },
// // //   logo: {
// // //     width: 150,
// // //     height: 100,
// // //     resizeMode: 'contain',
// // //     marginBottom: 20,
// // //     alignSelf: 'center',
// // //   },
// // //   heading: {
// // //     fontSize: 28,
// // //     fontWeight: "bold",
// // //     marginBottom: 20,
// // //     textAlign: "center",
// // //     color: "#333",
// // //   },
// // //   inputContainer: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     borderWidth: 1,
// // //     borderColor: "#ddd",
// // //     borderRadius: 8,
// // //     marginBottom: 15,
// // //     paddingLeft: 10,
// // //     backgroundColor: "#fff",
// // //   },
// // //   icon: {
// // //     marginRight: 10,
// // //     color: "#888",
// // //   },
// // //   input: {
// // //     flex: 1,
// // //     height: 50,
// // //     fontSize: 16,
// // //     paddingLeft: 10,
// // //     color: "#333",
// // //   },
// // //   pickerContainer: {
// // //     borderWidth: 1,
// // //     borderColor: "#ddd",
// // //     borderRadius: 8,
// // //     marginBottom: 15,
// // //     backgroundColor: "#fff",
// // //     justifyContent: 'center',
// // //   },
// // //   picker: {
// // //     height: 50,
// // //     color: "#333",
// // //   },
// // //   button: {
// // //     backgroundColor: "#00665C",
// // //     paddingVertical: 12,
// // //     borderRadius: 8,
// // //     alignItems: "center",
// // //     marginBottom: 15,
// // //   },
// // //   buttonText: {
// // //     color: "#fff",
// // //     fontSize: 18,
// // //     fontWeight: "bold",
// // //   },
// // //   loginLinkContainer: {
// // //     flexDirection: "row",
// // //     justifyContent: "center",
// // //     marginTop: 10,
// // //   },
// // //   loginText: {
// // //     fontSize: 16,
// // //     color: "#555",
// // //   },
// // //   loginLink: {
// // //     fontSize: 16,
// // //     color: "#00665C",
// // //     fontWeight: "bold",
// // //     textDecorationLine: "underline",
// // //   },

// // //   // New styles for better appearance
// // //   formContainer: { // Updated
// // //     backgroundColor: "#fff",
// // //     padding: 30, // Increased padding
// // //     borderRadius: 12, // More rounded corners
// // //     width: "100%",
// // //     maxWidth: 400,
// // //     elevation: 8, // Increased elevation
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 4 }, // Adjusted shadow offset
// // //     shadowOpacity: 0.3, // Increased shadow opacity
// // //     shadowRadius: 6, // Increased shadow radius
// // //   },
// // //   inputContainer: { // Updated
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     borderWidth: 1,
// // //     borderColor: "#c0c0c0", // Lighter border color
// // //     borderRadius: 10, // Slightly more rounded corners
// // //     marginBottom: 20, // Increased margin
// // //     paddingLeft: 15, // Increased padding
// // //     backgroundColor: "#f8f8f8",  // Very light gray background
// // //   },
// // //   input: { // Updated
// // //     flex: 1,
// // //     height: 50,
// // //     fontSize: 16,
// // //     paddingLeft: 15, // Increased padding
// // //     color: "#333",
// // //   },
// // //   pickerContainer: { // Updated
// // //     borderWidth: 1,
// // //     borderColor: "#c0c0c0",
// // //     borderRadius: 10,
// // //     marginBottom: 20, // Increased margin
// // //     backgroundColor: "#f8f8f8", // Very light gray background
// // //     justifyContent: 'center',
// // //   },
// // //   button: { // Updated
// // //     backgroundColor: "#007bff", // A more standard blue color
// // //     paddingVertical: 14, // Increased padding
// // //     borderRadius: 10, // Slightly more rounded corners
// // //     alignItems: "center",
// // //     marginBottom: 20, // Increased margin
// // //   },
// // //   buttonText: { // Updated
// // //     color: "#fff",
// // //     fontSize: 18,
// // //     fontWeight: "600", // Slightly lighter font weight
// // //   },
// // //   loginLinkContainer: { // Updated
// // //     flexDirection: "row",
// // //     justifyContent: "center",
// // //     marginTop: 15, // Increased margin
// // //   },
// // //   loginText: { // Updated
// // //     fontSize: 16,
// // //     color: "#555",
// // //   },
// // //   loginLink: { // Updated
// // //     fontSize: 16,
// // //     color: "#007bff", // Match the button color
// // //     fontWeight: "bold",
// // //     textDecorationLine: "underline",
// // //   },
// // //   heading: { // Updated
// // //     fontSize: 32, // Increased size
// // //     fontWeight: "bold",
// // //     marginBottom: 25, // Increased margin
// // //     textAlign: "center",
// // //     color: "#333",
// // //   },
// // //   logo: { // Updated
// // //     width: 180, // Slightly larger logo
// // //     height: 120,
// // //     resizeMode: 'contain',
// // //     marginBottom: 25, // Increased margin
// // //     alignSelf: 'center',
// // //   },
// // // });
// // //  export default UserSignupScreen;
 
// // //new updated code
// // import React, { useState } from "react";
// // import {
// //   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform, Image, ScrollView
// // } from "react-native";
// // import { Picker } from "@react-native-picker/picker";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // import { getDatabase, ref, set } from "firebase/database";
// // import { useNavigation } from "@react-navigation/native";
// // import { auth, db } from "../../firebaseConfig";
// // import Icon from "react-native-vector-icons/MaterialCommunityIcons";


// //   // ... (Your existing state variables and functions)
// //   const UserSignupScreen = () => {
// //       const [fullName, setFullName] = useState("");
// //       const [email, setEmail] = useState("");
// //       const [password, setPassword] = useState("");
// //       const [confirmPassword, setConfirmPassword] = useState("");
// //       const [serviceType, setServiceType] = useState("");
// //       const [gender, setGender] = useState("");
// //       const [address, setAddress] = useState("");
// //       const [showPassword, setShowPassword] = useState(false);
// //       const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //       const [loading, setLoading] = useState(false);
    
// //       const navigation = useNavigation();
    
// //       const handleSignUp = async () => {
// //         if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// //           Alert.alert("Error", "All fields are required!");
// //           return;
// //         }
    
// //         if (password !== confirmPassword) {
// //           Alert.alert("Error", "Passwords do not match!");
// //           return;
// //         }
    
// //         if (!isValidEmail(email)) {
// //           Alert.alert("Error", "Invalid email format. Please use @gmail.com");
// //           return;
// //         }
    
// //         if (!isStrongPassword(password)) {
// //           Alert.alert("Error", "Password must be at least 8 characters and include a mix of uppercase and lowercase letters, numbers, and symbols.");
// //           return;
// //         }
    
// //         setLoading(true);
// //         try {
// //           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //           const user = userCredential.user;
// //           const userId = user.uid; // Get user id
    
// //           await set(ref(db, "users/" + userId), {
// //             uid: userId,
// //             fullName: fullName,
// //             email: email,
// //             serviceType: serviceType,
// //             gender: gender,
// //             address: address,
// //             createdAt: new Date().toISOString(),
// //           });
    
// //           Alert.alert("Success", "User registered successfully!");
// //           navigation.navigate("UserLoginScreen");
    
// //         } catch (error) {
// //           Alert.alert("Error", error.message);
// //         } finally {
// //           setLoading(false);
// //         }
// //       };
    
// //       const isValidEmail = (email) => {
// //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         return emailRegex.test(email) && email.endsWith("@gmail.com");
// //       };
      
// //       const isStrongPassword = (password) => {
// //         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// //         return passwordRegex.test(password);
// //       };
    
    
// //   return (
// //     <KeyboardAvoidingView
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //       style={styles.container}
// //     >
// //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //         <View style={styles.formContainer}>
// //           <Image
// //             source={require('../../assets/images/signup.jpg')} // Correct path
// //             style={styles.logo}
// //           />
// //           <Text style={styles.heading}>Sign Up</Text>

// //           {/* Input Fields */}
// //           <View style={styles.inputContainer}>
// //             <Icon name="account" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// //           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="email" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// //           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="lock" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Password" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
// //             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// //               <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="lock-check" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} />
// //             <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
// //               <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#888" />
// //             </TouchableOpacity>
// //           </View>

// //           {/* Pickers */}
// //           <View style={styles.pickerContainer}>
// //             <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType} dropdownIconColor="#888">
// //               <Picker.Item label="Select Service Type" value="" />
// //               <Picker.Item label="In-Salon" value="In-Salon" />
// //               <Picker.Item label="Home Salon" value="Home Salon" />
// //             </Picker>
// //           </View>
// //           <View style={styles.pickerContainer}>
// //             <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender} dropdownIconColor="#888">
// //               <Picker.Item label="Select Gender" value="" />
// //               <Picker.Item label="Male" value="Male" />
// //               <Picker.Item label="Female" value="Female" />
// //             </Picker>
// //           </View>

// //           {/* Address */}
// //           <View style={styles.inputContainer}>
// //             <Icon name="map-marker" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} multiline={true} numberOfLines={3} />
// //           </View>

// //           {/* Sign Up Button */}
// //           {loading && <ActivityIndicator size="large" color="#00665C" />}
// //           <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
// //             <Text style={styles.buttonText}>Sign Up</Text>
// //           </TouchableOpacity>

// //           {/* Login Link */}
// //           <TouchableOpacity style={styles.loginLinkContainer} onPress={() => navigation.navigate("UserLoginScreen")}>
// //             <Text style={styles.loginText}>Already have an account? </Text>
// //             <Text style={styles.loginLink}>Login here</Text>
// //           </TouchableOpacity>

// //         </View>
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f0f0f0",
// //   },
// //   scrollViewContent: {
// //     flexGrow: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     padding: 20,
// //   },
// //   formContainer: {
// //     backgroundColor: "#fff",
// //     padding: 30,
// //     borderRadius: 12,
// //     width: "100%",
// //     maxWidth: 400,
// //     elevation: 8,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 6,
// //   },
// //   logo: {
// //     width: 180,
// //     height: 120,
// //     resizeMode: 'contain',
// //     marginBottom: 25,
// //     alignSelf: 'center',
// //   },
// //   heading: {
// //     fontSize: 32,
// //     fontWeight: "bold",
// //     marginBottom: 25,
// //     textAlign: "center",
// //     color: "#333",
// //   },
// //   inputContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     borderWidth: 1,
// //     borderColor: "#c0c0c0",
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     paddingLeft: 15,
// //     backgroundColor: "#f8f8f8",
// //   },
// //   icon: {
// //     marginRight: 10,
// //     color: "#888",
// //   },
// //   input: {
// //     flex: 1,
// //     height: 50,
// //     fontSize: 16,
// //     paddingLeft: 15,
// //     color: "#333",
// //   },
// //   pickerContainer: {
// //     borderWidth: 1,
// //     borderColor: "#c0c0c0",
// //     borderRadius: 10,
// //     marginBottom: 20,
// //     backgroundColor: "#f8f8f8",
// //     justifyContent: 'center',
// //   },
// //   picker: {
// //     height: 50,
// //     color: "#333",
// //   },
// //   button: {
// //     backgroundColor: "#007bff",
// //     paddingVertical: 14,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "600",
// //   },
// //   loginLinkContainer: {
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     marginTop: 15,
// //   },
// //   loginText: {
// //     fontSize: 16,
// //     color: "#555",
// //   },
// //   loginLink: {
// //     fontSize: 16,
// //     color: "#007bff",
// //     fontWeight: "bold",
// //     textDecorationLine: "underline",
// //   },
// // });

// // export default UserSignupScreen;

// import React, { useState } from "react";
// import {
//   View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, Platform,Image, ImageBackground, ScrollView // Import ImageBackground
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
// import { useNavigation } from "@react-navigation/native";
// import { auth, db } from "../../firebaseConfig";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//   const UserSignupScreen = () => {
//           const [fullName, setFullName] = useState("");
//           const [email, setEmail] = useState("");
//           const [password, setPassword] = useState("");
//           const [confirmPassword, setConfirmPassword] = useState("");
//           const [serviceType, setServiceType] = useState("");
//           const [gender, setGender] = useState("");
//           const [address, setAddress] = useState("");
//           const [showPassword, setShowPassword] = useState(false);
//           const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//           const [loading, setLoading] = useState(false);
        
//           const navigation = useNavigation();
        
//           const handleSignUp = async () => {
//             if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
//               Alert.alert("Error", "All fields are required!");
//               return;
//             }
        
//             if (password !== confirmPassword) {
//               Alert.alert("Error", "Passwords do not match!");
//               return;
//             }
        
//             if (!isValidEmail(email)) {
//               Alert.alert("Error", "Invalid email format. Please use @gmail.com");
//               return;
//             }
        
//             if (!isStrongPassword(password)) {
//               Alert.alert("Error", "Password must be at least 8 characters and include a mix of uppercase and lowercase letters, numbers, and symbols.");
//               return;
//             }
        
//             setLoading(true);
//             try {
//               const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//               const user = userCredential.user;
//               const userId = user.uid; // Get user id
        
//               await set(ref(db, "users/" + userId), {
//                 uid: userId,
//                 fullName: fullName,
//                 email: email,
//                 serviceType: serviceType,
//                 gender: gender,
//                 address: address,
//                 createdAt: new Date().toISOString(),
//               });
        
//               Alert.alert("Success", "User registered successfully!");
//               navigation.navigate("UserLoginScreen");
        
//             } catch (error) {
//               Alert.alert("Error", error.message);
//             } finally {
//               setLoading(false);
//             }
//           };
        
//           const isValidEmail = (email) => {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return emailRegex.test(email) && email.endsWith("@gmail.com");
//           };
          
//           const isStrongPassword = (password) => {
//             const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//             return passwordRegex.test(password);
//           };
        
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ImageBackground // Use ImageBackground
//           source={require('../../assets/images/signup.jpg')} // Path to background image
//           style={styles.backgroundImage}
//           resizeMode="cover" // Or "stretch", "contain" as needed
//         >
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {/* <ImageBackground // Use ImageBackground
//           source={require('../../assets/images/signup.jpg')} // Path to background image
//           style={styles.backgroundImage}
//           resizeMode="cover" // Or "stretch", "contain" as needed
//         > */}
//           <View style={styles.overlay}> {/* Add overlay for better text visibility */}
//             <View style={styles.formContainer}>
//               {/* <Image
//                 source={require('../../assets/images/signup.jpg')} // Correct path
//                 style={styles.logo}
//               /> */}
              
             

//               {/* ... (Your existing Input Fields, Pickers, Address, Button, and Login Link) */}
//               <Text style={styles.heading}>Sign Up</Text>

//           {/* Input Fields */}
//            <View style={styles.inputContainer}>
//             {/* <ImageBackground // Use ImageBackground
//           source={require('../../assets/images/signup1.jpg')} // Path to background image
//           style={styles.backgroundImage}
//           resizeMode="cover" // Or "stretch", "contain" as needed
//         ></ImageBackground> */}
//             <Icon name="account" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
//           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="email" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// //           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="lock" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Password" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
// //             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// //               <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.inputContainer}>
// //             <Icon name="lock-check" size={24} color="#888" style={styles.icon} />
// //             <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} />
// //             <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
// //               <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#888" />
// //             </TouchableOpacity>
// //           </View>

// //           {/* Pickers */}
// //           <View style={styles.pickerContainer}>
// //             <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType} dropdownIconColor="#888">
// //               <Picker.Item label="Select Service Type" value="" />
// //               <Picker.Item label="In-Salon" value="In-Salon" />
//                <Picker.Item label="Home Salon" value="Home Salon" />
//             </Picker>
//            </View>
//           <View style={styles.pickerContainer}>
//             <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender} dropdownIconColor="#888">
//               <Picker.Item label="Select Gender" value="" />
//                <Picker.Item label="Male" value="Male" />
//               <Picker.Item label="Female" value="Female" />
//             </Picker>
//           </View>

//           {/* Address */}
//           <View style={styles.inputContainer}>
//             <Icon name="map-marker" size={24} color="#888" style={styles.icon} />
//              <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} multiline={true} numberOfLines={3} />
//            </View>
//          {/* Sign Up Button */}
//           {loading && <ActivityIndicator size="large" color="#00665C" />}
//           <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={loading}>
//             <Text style={styles.buttonText}>Sign Up</Text>
//            </TouchableOpacity>

//           {/* Login Link */}
//            <TouchableOpacity style={styles.loginLinkContainer} onPress={() => navigation.navigate("UserLoginScreen")}>
//              <Text style={styles.loginText}>Already have an account? </Text>
//             <Text style={styles.loginLink}>Login here</Text>
//        </TouchableOpacity>


//             </View>
//           </View>
        
//       </ScrollView></ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0", // Fallback background color
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   backgroundImage: {
//     flex: 1, // Make background image fill the container
//     justifyContent: "center", // Center content vertically
//   },
//   overlay: { // Style for the overlay
//     backgroundColor: 'rgba(0,0,0,0.3)', // Semi-transparent black
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20, // Add some padding around the form
//   },
//   formContainer: {
//     //backgroundColor: 'rgba(116, 109, 109, 0.8)', // Semi-transparent white
//     backgroundColor: 'transparent',
//     padding: 30,
//     borderRadius: 12,
//     width: "100%",
//     maxWidth: 400,
//     elevation: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,

//   },
//   logo: {
   
//     // width: 200,
//     // height: 120,
//     // resizeMode: 'contain',
//     // marginBottom: 25,
//     // alignSelf: 'center',
//     width: 180,
//     height: 120,
//     resizeMode: 'contain',
//     marginBottom: 25,
//     alignSelf: 'center',
//     borderRadius: 200,
  
//   },
//   heading: {
//     fontSize: 32,
//     fontWeight: "bold",
//     marginBottom: 25,
//     textAlign: "center",
//     color: "green", // White text color
//   },
//   inputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         borderWidth: 1,
//         borderColor: "#c0c0c0",
//         borderRadius: 10,
//         marginBottom: 20,
//         paddingLeft: 15,
//         backgroundColor: " (rgba(255, 255, 255, 0.6))",
//         width:300,
//       },
//       icon: {
//         marginRight: 10,
//         color: "#888",
//             },
//       input: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//         paddingLeft: 15,
//         color: "#333",
        
//       },
//       pickerContainer: {
//         borderWidth: 1,
//         borderColor: "#c0c0c0",
//         borderRadius: 10,
//         marginBottom: 20,
//         backgroundColor: "#f8f8f8",
//         justifyContent: 'center',
//       },
//       picker: {
//         height: 50,
//         color: "#333",
//       },
//       button: {
//         backgroundColor: "#007bff",
//         paddingVertical: 14,
//         borderRadius: 10,
//         alignItems: "center",
//         marginBottom: 20,
//       },
//       buttonText: {
//         color: "#fff",
//         fontSize: 18,
//         fontWeight: "600",
//       },
//       loginLinkContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//         marginTop: 15,
//       },
//       loginText: {
//         fontSize: 16,
//         color: "#555",
//       },
//       loginLink: {
//         fontSize: 16,
//         color: "#007bff",
//         fontWeight: "bold",
//         textDecorationLine: "underline",
//       },
       
//   // ... (Rest of your styles)


//   input: { // Updated
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     paddingLeft: 15, // Increased padding
//     width:50,
//     color: "#333",
//   },
//   pickerContainer: { // Updated
//     borderWidth: 1,
//     borderColor: "#c0c0c0",
//     borderRadius: 10,
//     marginBottom: 20, // Increased margin
//     backgroundColor: "rgba(248, 248, 248, 0.7)", // Very light gray background
//     justifyContent: 'center',
//   },
//   button: { // Updated
//     backgroundColor: "green", // A more standard blue color
//     paddingVertical: 14, // Increased padding
//     borderRadius: 10, // Slightly more rounded corners
//     alignItems: "center",
//     marginBottom: 20, // Increased margin
//   },
//   buttonText: { // Updated
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600", // Slightly lighter font weight
//   },
//   loginLinkContainer: { // Updated
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 15, // Increased margin
//   },
//   loginText: { // Updated
//     fontSize: 16,
//     color: "#555",
//   },
//   loginLink: { // Updated
//     fontSize: 16,
//     color: "green", // Match the button color
//     fontWeight: "bold",
//     textDecorationLine: "underline",
//   },
// });

// export default UserSignupScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserSignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Invalid email format. Please use @gmail.com");
      return;
    }

    if (!isStrongPassword(password)) {
      Alert.alert("Error", "Password must be at least 8 characters and include uppercase, lowercase, numbers, and symbols.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid;

      await set(ref(db, "users/" + userId), {
        uid: userId,
        fullName,
        email,
        serviceType,
        gender,
        address,
        createdAt: new Date().toISOString(),
      });

      Alert.alert("Success", "User registered successfully!");
      navigation.navigate("UserLoginScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith("@gmail.com");

  const isStrongPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ImageBackground source={require('../../assets/images/sinpic.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.overlay}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.formContainer}>
              <Text style={styles.heading}>Sign Up</Text>

              {/* Full Name Input */}
              <View style={styles.inputContainer}>
                <Icon name="account" size={24} color="#555" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
              </View>

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#555" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#555" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
                </TouchableOpacity>
              </View>

              {/* Confirm Password Input */}
              <View style={styles.inputContainer}>
                <Icon name="lock-check" size={24} color="#555" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#555" />
                </TouchableOpacity>
              </View>

              {/* Service Type Picker */}
              <View style={styles.pickerContainer}>
                <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
                  <Picker.Item label="Select Service Type" value="" />
                  <Picker.Item label="In-Salon" value="In-Salon" />
                  <Picker.Item label="Home Salon" value="Home Salon" />
                </Picker>
              </View>

              {/* Gender Picker */}
              <View style={styles.pickerContainer}>
                <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>

              {/* Address Input */}
              <View style={styles.inputContainer}>
                <Icon name="map-marker" size={24} color="#555" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} multiline numberOfLines={3} />
              </View>

              {/* Sign Up Button */}
              {loading ? <ActivityIndicator size="large" color="#004080" /> : (
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              )}

              {/* Login Link */}
              <TouchableOpacity style={styles.loginLinkContainer} onPress={() => navigation.navigate("UserLoginScreen")}>
                <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Login here</Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, justifyContent: "center" },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: "center", padding: 20 },
  //formContainer: { backgroundColor: 'grey', padding: 25, borderRadius: 10, width: "90%", maxWidth: 400 },
  heading: { fontSize: 26, fontWeight: "bold", color: "#00665C", textAlign: "center", marginBottom: 20 },
  //inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12, backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 10 },
  input: { flex: 1, paddingVertical: 10 },
  icon: { marginRight: 10 },
  pickerContainer: { marginBottom: 12,backgroundColor: "rgba(255, 255, 255, 0.6)" , borderRadius: 8 },
  button: { backgroundColor: "#00665C", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginText: { textAlign: "center", marginTop: 15,color:"black" },
  loginLink: { color: "#00665C", fontWeight: "bold" },
  inputContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 12, 
    backgroundColor: "rgba(255, 255, 255, 0.6)",  // Updated color
    borderRadius: 8, 
    paddingHorizontal: 10 
  },
  overlay: { 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",  // Center horizontally
    padding: 20 
  },
  
  formContainer: { 
    marginTop:60,
    //backgroundColor: 'grey', 
    backgroundColor:"(rgba(255, 255, 255, 0.8)) ",
    padding: 25, 
    borderRadius: 10, 
    width: "90%", 
    maxWidth: 400,
    alignSelf: "center"  // Ensures the form container stays centered
  },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
});

export default UserSignupScreen;
