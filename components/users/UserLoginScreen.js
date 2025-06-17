
// // import React, { useState } from "react";
// // import {
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   View,
// //   TouchableOpacity,
// //   ActivityIndicator,
// //   KeyboardAvoidingView,
// //   Platform,
// //   Alert,
// //   ImageBackground,
// // } from "react-native";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth, db } from "../../firebaseConfig"; // Ensure db is imported
// // import { ref, get } from "firebase/database";
// // import { MaterialIcons } from "@expo/vector-icons";

// // const LoginForm = ({ navigation }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [emailError, setEmailError] = useState("");
// //   const [passwordError, setPasswordError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleLogin = async () => {
// //     setEmailError("");
// //     setPasswordError("");

// //     let isValid = true;

// //     // Basic validation checks
// //     if (!email) {
// //       setEmailError("Email is required");
// //       isValid = false;
// //     } else if (!isValidEmail(email)) {
// //       setEmailError("Invalid email format (e.g., user@gmail.com)");
// //       isValid = false;
// //     }

// //     if (!password) {
// //       setPasswordError("Password is required");
// //       isValid = false;
// //     }

// //     if (!isValid) return;

// //     setLoading(true);
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       if (!user.emailVerified) {
// //         Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
// //         return;
// //       }

// //       // Fetch user role from Firebase Database
// //       const userRef = ref(db, `users/${user.uid}`);
// //       const snapshot = await get(userRef);

// //       if (!snapshot.exists()) {
// //         Alert.alert("Error", "You can't log in. Sign up your account first.");
// //         return;
// //       }

// //       const userData = snapshot.val();
// //       const role = userData.role;

// //       if (!role) {
// //         Alert.alert("Error", "You can't log in. Sign up your account first.");
// //         return;
// //       }

// //       // Navigate to the next screen based on the role
// //       navigation.navigate("BeautyQuestionnaire");

// //     } catch (error) {
// //       if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
// //         Alert.alert("Invalid email or password");
// //       } else {
// //         Alert.alert(error.message);
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const isValidEmail = (email) => {
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return emailRegex.test(email) && email.endsWith("@gmail.com");
// //   };

// //   return (
// //     <ImageBackground source={require("../../assets/images/sinpic.jpg")} style={styles.backgroundImage}>
// //       <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.overlay}>
        
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <MaterialIcons name="arrow-back" size={28} color="#fff" />
// //         </TouchableOpacity>

// //         <View style={styles.formContainer}>
// //           <Text style={styles.title}>Login</Text>

// //           <View style={styles.inputContainer}>
// //             <MaterialIcons name="email" size={24} color="#666" style={styles.icon} />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Email"
// //               value={email}
// //               onChangeText={setEmail}
// //               keyboardType="email-address"
// //               autoCapitalize="none"
// //             />
// //           </View>
// //           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

// //           <View style={styles.inputContainer}>
// //             <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="Password"
// //               value={password}
// //               onChangeText={setPassword}
// //               secureTextEntry={!showPassword}
// //             />
// //             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
// //               <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="#666" style={styles.passwordIcon} />
// //             </TouchableOpacity>
// //           </View>
// //           {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

// //           <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
// //             <Text style={styles.forgotPassword}>Forgot Password?</Text>
// //           </TouchableOpacity>

// //           {loading ? (
// //             <ActivityIndicator size="large" color="#00665C" />
// //           ) : (
// //             <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //               <Text style={styles.buttonText}>Login</Text>
// //             </TouchableOpacity>
// //           )}

// //           <View style={styles.linkContainer}>
// //             <Text style={styles.text}>Don't have an account? </Text>
// //             <TouchableOpacity onPress={() => navigation.navigate("UserSignupScreen")}>
// //               <Text style={styles.linkText}>Sign up</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       </KeyboardAvoidingView>
// //     </ImageBackground>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   backgroundImage: {
// //     flex: 1,
// //     resizeMode: "cover",
// //   },
// //   overlay: {
// //     flex: 1,
// //     justifyContent: "center",
// //     padding: 20,
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //   },
// //   backButton: {
// //     position: "absolute",
// //     top: 40,
// //     left: 20,
// //     zIndex: 10,
// //   },
// //   formContainer: {
// //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// //     borderRadius: 10,
// //     padding: 25,
// //     width: "90%",
// //     maxWidth: 400,
// //     alignSelf: "center",
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     marginBottom: 20,
// //     color: "#00665C",
// //   },
// //   inputContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 12,
// //     backgroundColor: "rgba(255, 255, 255, 0.6)",
// //     borderRadius: 8,
// //     paddingHorizontal: 10,
// //   },
// //   icon: {
// //     marginRight: 10,
// //     color: "#666",
// //   },
// //   passwordIcon: {
// //     marginLeft: 10,
// //   },
// //   input: {
// //     flex: 1,
// //     paddingVertical: 10,
// //   },
// //   errorText: {
// //     color: "red",
// //     fontSize: 12,
// //     marginBottom: 10,
// //   },
// //   forgotPassword: {
// //     color: "#00665C",
// //     textAlign: "right",
// //     fontSize: 14,
// //     marginBottom: 15,
// //     fontWeight: "bold",
// //   },
// //   button: {
// //     backgroundColor: "#00665C",
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: "center",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   linkContainer: {
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     marginTop: 20,
// //   },
// //   text: {
// //     fontSize: 16,
// //     color: "black",
// //   },
// //   linkText: {
// //     fontSize: 16,
// //     color: "#00665C",
// //     fontWeight: "bold",
// //   },
// // });

// // export default LoginForm;
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
// import { auth, db } from "../../firebaseConfig";
// import { ref, get } from "firebase/database";
// import { MaterialIcons } from "@expo/vector-icons";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // const handleLogin = async () => {
//   //   setEmailError("");
//   //   setPasswordError("");

//   //   if (!email) {
//   //     setEmailError("Email is required");
//   //     return;
//   //   }
//   //   if (!password) {
//   //     setPasswordError("Password is required");
//   //     return;
//   //   }

//   //   setLoading(true);
//   //   try {
//   //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//   //     const user = userCredential.user;

//   //     if (!user.emailVerified) {
//   //       Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     // Fetch user data from Firebase
//   //     const userRef = ref(db, `users/${user.uid}`);
//   //     const snapshot = await get(userRef);

//   //     if (!snapshot.exists()) {
//   //       Alert.alert("Error", "User data not found. Please sign up again.");
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     const userData = snapshot.val();
//   //     const role = userData.role || "user"; // Default role if missing
//   //     const gender = userData.gender || "unknown";

//   //     // Save gender in AsyncStorage
//   //     await AsyncStorage.setItem("userGender", gender);
//   //     await AsyncStorage.setItem("userId", user.uid);

//   //     // Directly navigate to home screen without checking questionnaire
//   //     navigation.navigate("HomeScreen");
//   //   } catch (error) {
//   //     Alert.alert("Login Failed", error.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   // const handleLogin = async () => {
//   //   setEmailError("");
//   //   setPasswordError("");
  
//   //   if (!email) {
//   //     setEmailError("Email is required");
//   //     return;
//   //   }
//   //   if (!password) {
//   //     setPasswordError("Password is required");
//   //     return;
//   //   }
  
//   //   setLoading(true);
//   //   try {
//   //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//   //     const user = userCredential.user;
  
//   //     if (!user.emailVerified) {
//   //       Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
//   //       setLoading(false);
//   //       return;
//   //     }
  
//   //     // Fetch user data from Firebase
//   //     const userRef = ref(db, `users/${user.uid}`);
//   //     const snapshot = await get(userRef);
  
//   //     if (!snapshot.exists()) {
//   //       Alert.alert("Error", "User data not found. Please sign up again.");
//   //       setLoading(false);
//   //       return;
//   //     }
  
//   //     const userData = snapshot.val();
//   //     const role = userData.role || "user";
//   //     const gender = userData.gender || "unknown";
  
//   //     // Save gender in AsyncStorage
//   //     await AsyncStorage.setItem("userGender", gender);
//   //     await AsyncStorage.setItem("userId", user.uid);
  
//   //     // Fetch user preferences (to check if questionnaire is completed)
//   //     const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
//   //     const preferenceSnapshot = await get(userPreferenceRef);
//   //     const isQuestionnaireCompleted = preferenceSnapshot.exists()
//   //       ? preferenceSnapshot.val().questionnaireCompleted
//   //       : false;
  
//   //     if (isQuestionnaireCompleted) {
//   //       navigation.navigate("HomeScreen");
//   //     } else {
//   //       navigation.navigate("MaleQuestionaaire"); // Navigate to MaleQuestionnaire if not completed
//   //     }
//   //   } catch (error) {
//   //     Alert.alert("Login Failed", error.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
  
//   const handleLogin = async () => {
//     setEmailError("");
//     setPasswordError("");
  
//     if (!email) {
//       setEmailError("Email is required");
//       return;
//     }
//     if (!password) {
//       setPasswordError("Password is required");
//       return;
//     }
  
//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
  
//       if (!user.emailVerified) {
//         Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
//         setLoading(false);
//         return;
//       }
  
//       // Fetch user data from Firebase
//       const userRef = ref(db, `users/${user.uid}`);
//       const snapshot = await get(userRef);
  
//       if (!snapshot.exists()) {
//         Alert.alert("Error", "User data not found. Please sign up again.");
//         setLoading(false);
//         return;
//       }
  
//       const userData = snapshot.val();
//       const role = userData.role || "user";
//       const gender = userData.gender || "unknown";
  
//       // Save gender in AsyncStorage
//       await AsyncStorage.setItem("userGender", gender);
//       await AsyncStorage.setItem("userId", user.uid);
  
//       // Fetch user preferences (to check if questionnaire is completed)
//       const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
//       const preferenceSnapshot = await get(userPreferenceRef);
//       const isQuestionnaireCompleted = preferenceSnapshot.exists()
//         ? preferenceSnapshot.val().questionnaireCompleted
//         : false;
  
//       if (isQuestionnaireCompleted) {
//         navigation.navigate("MaleHomeScreen");
//       } else {
//         // Navigate to Male or Female Questionnaire based on gender
//         if (gender === "female") {
//           navigation.navigate("femaleQuestionaaire");
//         } else {
//           navigation.navigate("MaleQuestionaaire");
//         }
//       }
//     } catch (error) {
//       Alert.alert("Login Failed", error.message);
//     } finally {
//       setLoading(false);
//     }
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
//   backgroundImage: { flex: 1, resizeMode: "cover" },
//   overlay: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "rgba(0, 0, 0, 0.5)" },
//   formContainer: { backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: 10, padding: 25, width: "90%", maxWidth: 400, alignSelf: "center" },
//   title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#00665C" },
//   inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12, backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: 8, paddingHorizontal: 10 },
//   button: { backgroundColor: "#00665C", padding: 12, borderRadius: 8, alignItems: "center" },
//   buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   linkContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
//   text: { fontSize: 16, color: "black" },
//   linkText: { fontSize: 16, color: "#00665C", fontWeight: "bold" },
// });

// export default LoginForm;
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
import { auth, db } from "../../firebaseConfig";
import { ref, get } from "firebase/database";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        Alert.alert("Email Verification Pending", "Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      // Fetch user data from Firebase
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        Alert.alert("Error", "User data not found. Please sign up again.");
        setLoading(false);
        return;
      }

      const userData = snapshot.val();
      const role = userData.role || "user";
      const gender = userData.gender || "unknown";

      // Save gender and user ID in AsyncStorage
      await AsyncStorage.setItem("userGender", gender);
      await AsyncStorage.setItem("userId", user.uid);

      // Fetch user preferences to check if the questionnaire is completed
      const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
      const preferenceSnapshot = await get(userPreferenceRef);

      // Check if the questionnaire is completed
      const isQuestionnaireCompleted = preferenceSnapshot.exists()
        ? preferenceSnapshot.val().questionnaireCompleted
        : false;

      // Navigate based on gender and questionnaire completion
      if (isQuestionnaireCompleted) {
        // Redirect to the appropriate home screen based on gender
        if (gender === "female") {
          navigation.navigate("UserHomeScreen");
        } else {
          navigation.navigate("MaleHomeScreen");
        }
      } else {
        // Redirect to the appropriate questionnaire based on gender
        if (gender === "female") {
          navigation.navigate("femaleQuestionaaire");
        } else {
          navigation.navigate("MaleQuestionaaire");
        }
      }
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={require("../../assets/images/Groomify.jpg")} style={styles.backgroundImage}>
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
              <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color= '#00665C'style={styles.passwordIcon} />
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
            <TouchableOpacity onPress={() => navigation.navigate("userSignupScreen")}>
              <Text style={styles.linkText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, justifyContent: "center", padding: 30,  },
  formContainer: { backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: 10, padding: 25, width: "90%", maxWidth: 400, alignSelf: "center" },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: "#00665C" },
  //inputContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12, backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: 8, paddingHorizontal: 10 },
  button: { backgroundColor: "#00665C", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  linkContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  text: { fontSize: 16, color: "black" },
  linkText: { fontSize: 16, color: "#00665C", fontWeight: "bold" },
  errorText: { color: "red", marginBottom: 10 },
forgotPassword: { color: "#00665C", textAlign: "right", marginBottom: 20 },
inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 15,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  borderRadius: 8,
  paddingHorizontal: 10,
},
input: {
  flex: 1,
  paddingVertical: 10,
  fontSize: 16,
},
icon: {
  marginRight: 10,
  color: '#00665C', // Changed icon color
},
eyeButton: {
  padding: 10,
  color: '#00665C',
  //marginLeft:20,
},
backButton: {
  // padding: 10,
 paddingTop:-100,
 marginBottom:250,
 marginTop:-200
  
},

});

export default LoginForm;