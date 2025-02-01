// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // // // // // // // // // import { Picker } from '@react-native-picker/picker';
// // // // // // // // // // import auth from '@react-native-firebase/auth';
// // // // // // // // // // import firestore from '@react-native-firebase/firestore';


// // // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // // //   const [fullName, setFullName] = useState('');
// // // // // // // // // //   const [email, setEmail] = useState('');
// // // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // // // // //   const [serviceType, setServiceType] = useState('');
// // // // // // // // // //   const [gender, setGender] = useState('');
// // // // // // // // // //   const [address, setAddress] = useState('');

// // // // // // // // // //   const handleSignUp = async () => {
// // // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // // //       Alert.alert('Error', 'All fields are required!');
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // // //       Alert.alert('Error', 'Passwords do not match!');
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     try {
// // // // // // // // // //       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
// // // // // // // // // //       const user = userCredential.user;
// // // // // // // // // //       await firestore().collection('users').doc(user.uid).set({
// // // // // // // // // //         fullName,
// // // // // // // // // //         email,
// // // // // // // // // //         serviceType,
// // // // // // // // // //         gender,
// // // // // // // // // //         address,
// // // // // // // // // //         createdAt: firestore.FieldValue.serverTimestamp()
// // // // // // // // // //       });
// // // // // // // // // //       Alert.alert('Success', 'User registered successfully!');
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       Alert.alert('Error', error.message);
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
// // // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
// // // // // // // // // //   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
// // // // // // // // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // // //   picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // // //   button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
// // // // // // // // // //   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // });

// // // // // // // // // // export default UserSignupScreen;

// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // // // // // // // // import { Picker } from '@react-native-picker/picker';

// // // // // // // // // const UserSignupScreen = () => {
// // // // // // // // //   const [fullName, setFullName] = useState('');
// // // // // // // // //   const [email, setEmail] = useState('');
// // // // // // // // //   const [password, setPassword] = useState('');
// // // // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // // // //   const [serviceType, setServiceType] = useState('');
// // // // // // // // //   const [gender, setGender] = useState('');
// // // // // // // // //   const [address, setAddress] = useState('');

// // // // // // // // //   const handleSignUp = () => {
// // // // // // // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // // // // // // //       Alert.alert('Error', 'All fields are required!');
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     if (password !== confirmPassword) {
// // // // // // // // //       Alert.alert('Error', 'Passwords do not match!');
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     Alert.alert('Success', 'User  registered successfully! (This is a placeholder)');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <View style={styles.container}>
// // // // // // // // //       <Text style={styles.heading}>User  Signup</Text>
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
// // // // // // // // //   container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f8f8f8' },
// // // // // // // // //   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
// // // // // // // // //   input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // // // // //   picker: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // // // // //   button: { backgroundColor: '#4CAF50', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
// // // // // // // // //   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // });

// // // // // // // // // export default UserSignupScreen;


// // // // // // // // //testing 
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // // import { auth, db, createUserWithEmailAndPassword, addDoc, collection } from "../../firebaseConfig"; // Firebase Config Import

// // // // // // // // const UserSignupScreen = () => {
// // // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // // //   const [gender, setGender] = useState("");
// // // // // // // //   const [address, setAddress] = useState("");

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
// // // // // // // //       // Firebase Authentication (Email & Password)
// // // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // // //       const user = userCredential.user;

// // // // // // // //       // Firestore Database mein User ka Data Store Karna
// // // // // // // //       await addDoc(collection(db, "users"), {
// // // // // // // //         uid: user.uid,
// // // // // // // //         fullName,
// // // // // // // //         email,
// // // // // // // //         serviceType,
// // // // // // // //         gender,
// // // // // // // //         address,
// // // // // // // //         createdAt: new Date(),
// // // // // // // //       });

// // // // // // // //       Alert.alert("Success", "User registered successfully!");
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




// // // // // // // import React, { useState } from "react";
// // // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // // import { auth, db } from "../../firebaseConfig";  // ✅ Correct Import
// // // // // // // import { createUserWithEmailAndPassword } from "firebase/auth";  // ✅ Import from Firebase
// // // // // // // import { addDoc, collection } from "firebase/firestore";  // ✅ Firestore Import

// // // // // // // const UserSignupScreen = () => {
// // // // // // //   const [fullName, setFullName] = useState("");
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // // //   const [gender, setGender] = useState("");
// // // // // // //   const [address, setAddress] = useState("");

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
// // // // // // //       // ✅ **Firebase Authentication (Create User)**
// // // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // // //       const user = userCredential.user;

// // // // // // //       // ✅ **Firestore: Store User Data**
// // // // // // //       await addDoc(collection(db, "users"), {
// // // // // // //         uid: user.uid,
// // // // // // //         fullName,
// // // // // // //         email,
// // // // // // //         serviceType,
// // // // // // //         gender,
// // // // // // //         address,
// // // // // // //         createdAt: new Date(),
// // // // // // //       });

// // // // // // //       Alert.alert("Success", "User registered successfully!");
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



// // // // // // import React, { useState } from "react";
// // // // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // import { Picker } from "@react-native-picker/picker";
// // // // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // // // import { getDatabase, ref, set } from "firebase/database";
// // // // // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config

// // // // // // const UserSignupScreen = () => {
// // // // // //   const [fullName, setFullName] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // //   const [serviceType, setServiceType] = useState("");
// // // // // //   const [gender, setGender] = useState("");
// // // // // //   const [address, setAddress] = useState("");

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
// // // // // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // // // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // // // //       const user = userCredential.user;

// // // // // //       // 2️⃣ Realtime Database mein User ka Data Store Karna
// // // // // //       await set(ref(db, "users/" + user.uid), {
// // // // // //         uid: user.uid,
// // // // // //         fullName,
// // // // // //         email,
// // // // // //         serviceType,
// // // // // //         gender,
// // // // // //         address,
// // // // // //         createdAt: new Date().toISOString(),
// // // // // //       });

// // // // // //       Alert.alert("Success", "User registered successfully!");
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
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // // // });

// // // // // // export default UserSignupScreen;


// // // // // // until realtime 
// // // // import React, { useState } from "react";
// // // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // import { Picker } from "@react-native-picker/picker";
// // // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config
// // // // import { collection, doc, setDoc } from "firebase/firestore";  // Firestore imports

// // // // const UserSignupScreen = () => {
// // // //   const [fullName, setFullName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // //   const [serviceType, setServiceType] = useState("");
// // // //   const [gender, setGender] = useState("");
// // // //   const [address, setAddress] = useState("");

// // // //   const handleSignUp = async () => {
// // // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // // //       Alert.alert("Error", "All fields are required!");
// // // //       return;
// // // //     }
// // // //     if (password !== confirmPassword) {
// // // //       Alert.alert("Error", "Passwords do not match!");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // // //       const user = userCredential.user;

// // // //       // 2️⃣ Firestore mein User ka Data Store Karna
// // // //       const userRef = doc(collection(db, "users"), user.uid); // Reference to the Firestore collection
// // // //       await setDoc(userRef, {
// // // //         uid: user.uid,
// // // //         fullName,
// // // //         email,
// // // //         serviceType,
// // // //         gender,
// // // //         address,
// // // //         createdAt: new Date().toISOString(),
// // // //       });

// // // //       Alert.alert("Success", "User registered successfully!");
// // // //     } catch (error) {
// // // //       Alert.alert("Error", error.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.heading}>User Signup</Text>
// // // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // // //         <Picker.Item label="Select Service Type" value="" />
// // // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // // //       </Picker>
// // // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // // //         <Picker.Item label="Select Gender" value="" />
// // // //         <Picker.Item label="Male" value="Male" />
// // // //         <Picker.Item label="Female" value="Female" />
// // // //       </Picker>
// // // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // // //         <Text style={styles.buttonText}>Sign Up</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // // });

// // // // export default UserSignupScreen;




// // // import React, { useState } from "react";
// // // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // import { Picker } from "@react-native-picker/picker";
// // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // // import { auth, db } from "../../firebaseConfig";  // Import Firebase Config
// // // import { getDatabase, ref, set } from "firebase/database";  // Realtime DB imports

// // // const UserSignupScreen = () => {
// // //   const [fullName, setFullName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [serviceType, setServiceType] = useState("");
// // //   const [gender, setGender] = useState("");
// // //   const [address, setAddress] = useState("");

// // //   const handleSignUp = async () => {
// // //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// // //       Alert.alert("Error", "All fields are required!");
// // //       return;
// // //     }
// // //     if (password !== confirmPassword) {
// // //       Alert.alert("Error", "Passwords do not match!");
// // //       return;
// // //     }

// // //     try {
// // //       // 1️⃣ Firebase Authentication (Sign Up User)
// // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //       const user = userCredential.user;

// // //       // 2️⃣ Realtime Database mein User ka Data Store Karna
// // //       const userRef = ref(db, "users/" + user.uid);  // Reference to the Realtime Database path
// // //       await set(userRef, {
// // //         uid: user.uid,
// // //         fullName,
// // //         email,
// // //         serviceType,
// // //         gender,
// // //         address,
// // //         createdAt: new Date().toISOString(),
// // //       });

// // //       Alert.alert("Success", "User registered successfully!");
// // //     } catch (error) {
// // //       Alert.alert("Error", error.message);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.heading}>User Signup</Text>
// // //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// // //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// // //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// // //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// // //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// // //         <Picker.Item label="Select Service Type" value="" />
// // //         <Picker.Item label="In-Salon" value="In-Salon" />
// // //         <Picker.Item label="Home Salon" value="Home Salon" />
// // //       </Picker>
// // //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// // //         <Picker.Item label="Select Gender" value="" />
// // //         <Picker.Item label="Male" value="Male" />
// // //         <Picker.Item label="Female" value="Female" />
// // //       </Picker>
// // //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// // //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// // //         <Text style={styles.buttonText}>Sign Up</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// // //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// // //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// // //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// // //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// // //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // // });

// // // export default UserSignupScreen;

// // //until realtime now i navigate to the login screen 



// // import React, { useState } from "react";
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // import { Picker } from "@react-native-picker/picker";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth, db } from "../../firebaseConfig";
// // import { getDatabase, ref, set } from "firebase/database";
// // import { useNavigation } from "@react-navigation/native";  // Navigation Hook Import

// // const UserSignupScreen = () => {
// //   const [fullName, setFullName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [serviceType, setServiceType] = useState("");
// //   const [gender, setGender] = useState("");
// //   const [address, setAddress] = useState("");

// //   const navigation = useNavigation(); // Navigation Hook

// //   const handleSignUp = async () => {
// //     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
// //       Alert.alert("Error", "All fields are required!");
// //       return;
// //     }
// //     if (password !== confirmPassword) {
// //       Alert.alert("Error", "Passwords do not match!");
// //       return;
// //     }

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       const userRef = ref(db, "users/" + user.uid);
// //       await set(userRef, {
// //         uid: user.uid,
// //         fullName,
// //         email,
// //         serviceType,
// //         gender,
// //         address,
// //         createdAt: new Date().toISOString(),
// //       });

// //       Alert.alert("Success", "User registered successfully!");

// //       navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

// //     } catch (error) {
// //       Alert.alert("Error", error.message);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>User Signup</Text>
// //       <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
// //       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
// //       <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
// //       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
// //       <Picker selectedValue={serviceType} style={styles.picker} onValueChange={setServiceType}>
// //         <Picker.Item label="Select Service Type" value="" />
// //         <Picker.Item label="In-Salon" value="In-Salon" />
// //         <Picker.Item label="Home Salon" value="Home Salon" />
// //       </Picker>
// //       <Picker selectedValue={gender} style={styles.picker} onValueChange={setGender}>
// //         <Picker.Item label="Select Gender" value="" />
// //         <Picker.Item label="Male" value="Male" />
// //         <Picker.Item label="Female" value="Female" />
// //       </Picker>
// //       <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
// //       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
// //         <Text style={styles.buttonText}>Sign Up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
// //   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// //   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
// //   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
// //   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
// //   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// // });

// // export default UserSignupScreen;


// //store data into realtime
// //now fetch data from the database
// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
// import { useNavigation } from "@react-navigation/native";
// import { auth, db } from "../../firebaseConfig"; // Make sure this is correctly imported

// const UserSignupScreen = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [serviceType, setServiceType] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");

//   const navigation = useNavigation(); // Navigation Hook

//   const handleSignUp = async () => {
//     if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
//       Alert.alert("Error", "All fields are required!");
//       return;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match!");
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Save user data in Firebase Realtime Database
//       await set(ref(db, "users/" + user.uid), {
//         uid: user.uid,
//         fullName,
//         email,
//         password,  // 🔹 Storing password (can be removed if needed)
//         serviceType,
//         gender,
//         address,
//         createdAt: new Date().toISOString(),
//       });

//       Alert.alert("Success", "User registered successfully!");

//       navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

//     } catch (error) {
//       Alert.alert("Error", error.message);
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
//   container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
//   heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
//   input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
//   picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
//   button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
//   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// });

// export default UserSignupScreen;


//add link to move to the login page


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig"; // Make sure this is correctly imported

const UserSignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const navigation = useNavigation(); // Navigation Hook

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword || !serviceType || !gender || !address) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data in Firebase Realtime Database
      await set(ref(db, "users/" + user.uid), {
        uid: user.uid,
        fullName,
        email,
        password,  // 🔹 Storing password (can be removed if needed)
        serviceType,
        gender,
        address,
        createdAt: new Date().toISOString(),
      });

      Alert.alert("Success", "User registered successfully!");

      navigation.navigate("UserLoginScreen"); // Navigate to Login Screen

    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Signup</Text>

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

      {/* Link to navigate to Login Screen */}
      <TouchableOpacity onPress={() => navigation.navigate("UserLoginScreen")}>
        <Text style={styles.loginLink}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f8f8" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingLeft: 15, fontSize: 16 },
  picker: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginLink: { color: "#4CAF50", textAlign: "center", fontSize: 16, marginTop: 10 },
});

export default UserSignupScreen;