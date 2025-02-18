// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   ImageBackground,
//   ScrollView,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithEmailAndPassword,
//   reload,
// } from "firebase/auth";
// import { ref, set, get } from "firebase/database";
// import { useNavigation } from "@react-navigation/native";
// import { auth, db } from "../../firebaseConfig";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const UserSignupScreen = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [serviceType, setServiceType] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigation = useNavigation();

//   const handleSignUp = async () => {
//     if (
//       !fullName ||
//       !email ||
//       !password ||
//       !confirmPassword ||
//       !serviceType ||
//       !gender ||
//       !address
//     ) {
//       Alert.alert("Error", "All fields are required!");
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match!");
//       return;
//     }

//     if (!isValidEmail(email)) {
//       Alert.alert("Error", "Invalid email format. Please use @gmail.com");
//       return;
//     }

//     if (!isStrongPassword(password)) {
//       Alert.alert(
//         "Error",
//         "Password must be at least 8 characters and include uppercase, lowercase, numbers, and symbols."
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       const userId = user.uid;

//       await sendEmailVerification(user);

//       await set(ref(db, "users/" + userId), {
//         uid: userId,
//         fullName,
//         email,
//         serviceType,
//         gender,
//         address,
//         createdAt: new Date().toISOString(),
//         isVerified: false, // Initial status: not verified
//       });

//       Alert.alert(
//         "Verification Email Sent",
//         "A verification email has been sent to your address. Please check your email to verify your account before logging in."
//       );

//       // After registration, navigate to login screen
//       navigation.navigate("UserLoginScreen");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith("@gmail.com");
//   };

//   const isStrongPassword = (password) =>
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

//   // Check if email is verified after the user clicks the verification link
//   const checkEmailVerification = async (userId) => {
//     const user = auth.currentUser;

//     // Reload the user to make sure we have the updated status
//     await reload(user);

//     if (user.emailVerified) {
//       // Update the database to reflect that the user is verified
//       await set(ref(db, "users/" + userId), {
//         uid: userId,
//         fullName,
//         email,
//         serviceType,
//         gender,
//         address,
//         createdAt: new Date().toISOString(),
//         isVerified: true, // Mark as verified
//       });

//       Alert.alert("Success", "Your email has been verified!");
//       navigation.navigate("UserHomeScreen"); // Navigate to the home screen or wherever
//     } else {
//       Alert.alert("Error", "Your email is not verified. Please verify it.");
//     }
//   };

//   // Auto-check email verification status after login or app restart
//   useEffect(() => {
//     const checkVerificationStatus = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         await reload(user); // Reload user to make sure emailVerified is updated
//         if (user.emailVerified) {
//           // Update the database
//           await set(ref(db, "users/" + user.uid), {
//             uid: user.uid,
//             fullName,
//             email,
//             serviceType,
//             gender,
//             address,
//             createdAt: new Date().toISOString(),
//             isVerified: true,
//           });
//         }
//       }
//     };

//     checkVerificationStatus();
//   }, []);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <ImageBackground
//         source={require("../../assets/images/sinpic.jpg")}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//           <View style={styles.overlay}>
//             <TouchableOpacity
//               style={styles.backButton}
//               onPress={() => navigation.goBack()}
//             >
//               <Icon name="arrow-left" size={28} color="white" />
//             </TouchableOpacity>
//             <View style={styles.formContainer}>
//               <Text style={styles.heading}>Sign Up</Text>

//               <View style={styles.inputContainer}>
//                 <Icon name="account" size={24} color="#555" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Full Name"
//                   value={fullName}
//                   onChangeText={setFullName}
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Icon name="email" size={24} color="#555" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   keyboardType="email-address"
//                   value={email}
//                   onChangeText={setEmail}
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#555" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   secureTextEntry={!showPassword}
//                   value={password}
//                   onChangeText={setPassword}
//                 />
//                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                   <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.inputContainer}>
//                 <Icon name="lock-check" size={24} color="#555" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   secureTextEntry={!showConfirmPassword}
//                   value={confirmPassword}
//                   onChangeText={setConfirmPassword}
//                 />
//                 <TouchableOpacity
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#555" />
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={serviceType}
//                   style={styles.picker}
//                   onValueChange={setServiceType}
//                 >
//                   <Picker.Item label="Select Service Type" value="" />
//                   <Picker.Item label="In-Salon" value="In-Salon" />
//                   <Picker.Item label="Home Salon" value="Home Salon" />
//                 </Picker>
//               </View>

//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={gender}
//                   style={styles.picker}
//                   onValueChange={setGender}
//                 >
//                   <Picker.Item label="Select Gender" value="" />
//                   <Picker.Item label="Male" value="Male" />
//                   <Picker.Item label="Female" value="Female" />
//                 </Picker>
//               </View>

//               <View style={styles.inputContainer}>
//                 <Icon name="map-marker" size={24} color="#555" style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Address"
//                   value={address}
//                   onChangeText={setAddress}
//                   multiline
//                   numberOfLines={3}
//                 />
//               </View>

//               {loading ? (
//                 <ActivityIndicator size="large" color="#004080" />
//               ) : (
//                 <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//                   <Text style={styles.buttonText}>Sign Up</Text>
//                 </TouchableOpacity>
//               )}

//               <TouchableOpacity
//                 style={styles.loginLinkContainer}
//                 onPress={() => navigation.navigate("UserLoginScreen")}
//               >
//                 <Text style={styles.loginText}>
//                   Already have an account?{" "}
//                   <Text style={styles.loginLink}>Login here</Text>
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </ImageBackground>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   backgroundImage: { flex: 1, justifyContent: "center" },
//   overlay: {
//     backgroundColor: "rgba(0,0,0,0.5)",
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//     alignItems: "center",
//   },
//   formContainer: {
//     marginTop: 60,
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     padding: 25,
//     borderRadius: 10,
//     width: "90%",
//     maxWidth: 400,
//     alignSelf: "center",
//   },
//   backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
//   heading: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#00665C",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   input: { flex: 1, paddingVertical: 10 },
//   icon: { marginRight: 10 },
//   pickerContainer: {
//     marginBottom: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 8,
//   },
//   picker: {
//     color: "black",
//   },
//   button: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   loginText: { textAlign: "center", marginTop: 15, color: "black" },
//   loginLink: { color: "#00665C", fontWeight: "bold" },
//   scrollViewContent: {
//     flexGrow: 1,
//   },
// });

// export default UserSignupScreen;

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   ImageBackground,
// } from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import { MaterialIcons } from "@expo/vector-icons";

// const LoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async () => {
//     setEmailError("");
//     setPasswordError("");

//     let isValid = true;

//     // Basic validation checks for email and password
//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!isValidEmail(email)) {
//       setEmailError("Invalid email format (e.g., user@gmail.com)");
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     }

//     if (!isValid) return;

//     setLoading(true);
//     try {
//       // Sign in with email and password
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Check if email is verified
//       if (!user.emailVerified) {
//         Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
//         return;
//       }

//       // Navigate to the home screen if successful
//       navigation.navigate("BeautyQuestionnaire");
//     } catch (error) {
//       if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
//         Alert.alert("Invalid email or password");
//       } else {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email) && email.endsWith("@gmail.com");
//   };

//   return (
//     <ImageBackground source={require("../../assets/images/sinpic.jpg")} style={styles.backgroundImage}>
//       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.overlay}>
        
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <MaterialIcons name="arrow-back" size={28} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Login</Text>

//           <View style={styles.inputContainer}>
//             <MaterialIcons name="email" size={24} color="#666" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//           <View style={styles.inputContainer}>
//             <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="#666" style={styles.passwordIcon} />
//             </TouchableOpacity>
//           </View>
//           {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//           <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
//             <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           </TouchableOpacity>

//           {loading ? (
//             <ActivityIndicator size="large" color="#00665C" />
//           ) : (
//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//           )}

//           <View style={styles.linkContainer}>
//             <Text style={styles.text}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("UserSignupScreen")}>
//               <Text style={styles.linkText}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     zIndex: 10,
//   },
//   formContainer: {
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 10,
//     padding: 25,
//     width: "90%",
//     maxWidth: 400,
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#00665C",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   icon: {
//     marginRight: 10,
//     color: "#666",
//   },
//   passwordIcon: {
//     marginLeft: 10,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 10,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   forgotPassword: {
//     color: "#00665C",
//     textAlign: "right",
//     fontSize: 14,
//     marginBottom: 15,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   linkContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   text: {
//     fontSize: 16,
//     color: "black",
//   },
//   linkText: {
//     fontSize: 16,
//     color: "#00665C",
//     fontWeight: "bold",
//   },
//   overlay: { 
//     backgroundColor: 'rgba(0,0,0,0.5)', 
//     flex: 1, 
//     justifyContent: "center", 
//     alignItems: "center",
//     padding: 20 
//   },
// });

// export default LoginForm;
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   TouchableOpacity,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   ImageBackground,
// } from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebaseConfig"; // Ensure db is imported
// import { ref, get } from "firebase/database";
// import { MaterialIcons } from "@expo/vector-icons";

// const LoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async () => {
//     setEmailError("");
//     setPasswordError("");

//     let isValid = true;

//     // Basic validation checks
//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!isValidEmail(email)) {
//       setEmailError("Invalid email format (e.g., user@gmail.com)");
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     }

//     if (!isValid) return;

//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
//         return;
//       }

//       // Fetch user role from Firebase Database
//       const userRef = ref(db, `users/${user.uid}`);
//       const snapshot = await get(userRef);

//       if (!snapshot.exists()) {
//         Alert.alert("Error", "You can't log in. Sign up your account first.");
//         return;
//       }

//       const userData = snapshot.val();
//       const role = userData.role;

//       if (!role) {
//         Alert.alert("Error", "You can't log in. Sign up your account first.");
//         return;
//       }

//       // Navigate to the next screen based on the role
//       navigation.navigate("BeautyQuestionnaire");

//     } catch (error) {
//       if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
//         Alert.alert("Invalid email or password");
//       } else {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email) && email.endsWith("@gmail.com");
//   };

//   return (
//     <ImageBackground source={require("../../assets/images/sinpic.jpg")} style={styles.backgroundImage}>
//       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.overlay}>
        
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <MaterialIcons name="arrow-back" size={28} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Login</Text>

//           <View style={styles.inputContainer}>
//             <MaterialIcons name="email" size={24} color="#666" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//           <View style={styles.inputContainer}>
//             <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="#666" style={styles.passwordIcon} />
//             </TouchableOpacity>
//           </View>
//           {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//           <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
//             <Text style={styles.forgotPassword}>Forgot Password?</Text>
//           </TouchableOpacity>

//           {loading ? (
//             <ActivityIndicator size="large" color="#00665C" />
//           ) : (
//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//           )}

//           <View style={styles.linkContainer}>
//             <Text style={styles.text}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("userSignupScreen")}>
//               <Text style={styles.linkText}>Sign up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// };
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     zIndex: 10,
//   },
//   formContainer: {
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 10,
//     padding: 25,
//     width: "90%",
//     maxWidth: 400,
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#00665C",
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   icon: {
//     marginRight: 10,
//     color: "#666",
//   },
//   passwordIcon: {
//     marginLeft: 10,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 10,
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginBottom: 10,
//   },
//   forgotPassword: {
//     color: "#00665C",
//     textAlign: "right",
//     fontSize: 14,
//     marginBottom: 15,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   linkContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   text: {
//     fontSize: 16,
//     color: "black",
//   },
//   linkText: {
//     fontSize: 16,
//     color: "#00665C",
//     fontWeight: "bold",
//   },
// });

// export default LoginForm;


//update code 


import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig"; // Ensure db is imported
import { ref, get } from "firebase/database";
import { MaterialIcons } from "@expo/vector-icons";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    // Basic validation checks
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format (e.g., user@gmail.com)");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
        return;
      }

      // Fetch user role from Firebase Database
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        Alert.alert("Error", "You can't log in. Sign up your account first.");
        return;
      }

      const userData = snapshot.val();
      const role = userData.role;

      if (!role) {
        Alert.alert("Error", "You can't log in. Sign up your account first.");
        return;
      }

      // Navigate to the next screen based on the role
      navigation.navigate("BeautyQuestionnaire");

    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        Alert.alert("Invalid email or password");
      } else {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.endsWith("@gmail.com");
  };

  return (
    <ImageBackground source={require("../../assets/images/sinpic.jpg")} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.overlay}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="#666" style={styles.passwordIcon} />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size="large" color="#00665C" />
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          )}

          <View style={styles.linkContainer}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("serSignupScreen")}>
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    padding: 25,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#00665C",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: "#666",
  },
  passwordIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#00665C",
    textAlign: "right",
    fontSize: 14,
    marginBottom: 15,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  linkText: {
    fontSize: 16,
    color: "#00665C",
    fontWeight: "bold",
  },
});

export default LoginForm;




