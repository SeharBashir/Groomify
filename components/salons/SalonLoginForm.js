
// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image , ScrollView,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard} from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { auth, db } from "../../firebaseConfig"; // Firebase database import
// import { Ionicons } from "@expo/vector-icons";
// import { ref, get } from "firebase/database"; // Firebase database functions

// const SalonLoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [salonName, setSalonName] = useState("");
//   const [password, setPassword] = useState("");
//   const [secureTextEntry, setSecureTextEntry] = useState(true);

//   // ✅ Updated Login Function (Checks if salon name matches email)
//   const handleLogin = async () => {
//     if (!email || !salonName || !password) {
//       Alert.alert("Error", "Please enter your email, salon name, and password.");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
//       const user = userCredential.user;

//       if (!user.emailVerified) {
//         Alert.alert("Email not verified", "Please verify your email before logging in.");
//         return;
//       }

//       // Fetch salon data to validate salon name
//       const salonRef = ref(db, `salons/${user.uid}`);
//       const snapshot = await get(salonRef);

//       if (snapshot.exists()) {
//         const salonData = snapshot.val();
//         if (salonData.salonName.toLowerCase() !== salonName.toLowerCase()) {
//           Alert.alert("Error", "Salon name does not match the registered email.");
//           return;
//         }

//         navigation.navigate("SalonHomeScreen", { userId: user.uid }); // Proceed if validation is correct
//       } else {
//         Alert.alert("Error", "No salon found for this account.");
//       }
//     } catch (error) {
//       Alert.alert("Login Failed", error.message);
//     }
//   };

//   // ✅ Updated Forgot Password Function (Ensures email & salon name match)
//   const handleForgotPassword = async () => {
//     if (!email || !salonName) {
//       Alert.alert("Error", "Please enter both email and salon name.");
//       return;
//     }

//     try {
//       const salonRef = ref(db, `salons`);
//       const snapshot = await get(salonRef);

//       if (snapshot.exists()) {
//         const salons = snapshot.val();
//         let found = false;

//         Object.keys(salons).forEach((key) => {
//           if (salons[key].email === email.trim() && salons[key].salonName.toLowerCase() === salonName.toLowerCase()) {
//             found = true;
//           }
//         });

//         if (!found) {
//           Alert.alert("Error", "Incorrect salon name for this email. Please check your details.");
//           return;
//         }

//         await sendPasswordResetEmail(auth, email.trim());
//         Alert.alert("Success", "Password reset link has been sent to your email.");
//       } else {
//         Alert.alert("Error", "No salons found in the system.");
//       }
//     } catch (error) {
//       Alert.alert("Error", `Failed to send password reset email: ${error.message}`);
//     }
//   };


// return (
//   <LinearGradient colors={["#00665C", "#00665C"]} style={styles.container}>
//     <KeyboardAvoidingView style={{ flex: 1 }}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           {/* Header Image & Welcome Text */}
//           <View style={styles.topContainer}>
//             <Image source={require("../../assets/images/Salonbackground.png")} style={styles.image} />
//             <View style={styles.overlay}>
//               <Text style={styles.welcomeText}>Welcome</Text>
//               <Text style={styles.subtitle}>
//                 Beauty begins the moment you decide to be yourself
//               </Text>
//             </View>
//           </View>

//           {/* Login Form */}
//           <View style={styles.bottomContainer}>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Salon Name"
//                 value={salonName}
//                 onChangeText={setSalonName}
//                 autoCapitalize="words"
//               />
//             </View>

//             <View style={styles.passwordContainer}>
//               <TextInput
//                 style={styles.passwordInput}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={secureTextEntry}
//               />
//               <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
//                 <Ionicons
//                   name={secureTextEntry ? "eye-off" : "eye"}
//                   size={24}
//                   color="gray"
//                   style={styles.eyeIcon}
//                 />
//               </TouchableOpacity>
//             </View>

//             {/* Login Button */}
//             <TouchableOpacity
//               style={[styles.loginButton, email && password ? styles.validButton : null]}
//               onPress={handleLogin}
//             >
//               <Text style={styles.buttonText}>Sign In</Text>
//             </TouchableOpacity>

//             {/* Forgot Password & Signup */}
//             <View style={styles.actionButtons}>
//               <TouchableOpacity onPress={handleForgotPassword}>
//                 <Text style={styles.forgotText}>Forgot Password?</Text>
//               </TouchableOpacity>
//               <Text style={styles.orText}>|</Text>
//               <TouchableOpacity onPress={() => navigation.navigate("SalonSignupScreen")}>
//                 <Text style={styles.signupText}>Sign Up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   </LinearGradient>
// );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   topContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//     marginBottom: 40,
//     borderColor: "#00665C",
//     borderWidth: 4,
//   },
//   overlay: {
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     borderBottomLeftRadius: 80,
//     borderBottomRightRadius: 80,
//     marginTop: 90,
//   },
//   welcomeText: {
//     fontSize: 36,
//     fontWeight: "900",
//     color: "#FFFFFF",
//     marginTop: 70,
//     fontStyle: "italic",
//   },
//   subtitle: {
//     fontSize: 17,
//     fontStyle: "italic",
//     color: "#FFFFFF",
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   bottomContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     marginTop: 70,
//   },
//   inputContainer: {
//     width: "90%",
//     marginBottom: 15,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "white",
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     borderWidth: 3,
//     borderColor: "#00665C",
//     marginBottom: 5,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "90%",
//     backgroundColor: "white",
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     borderWidth: 3,
//     borderColor: "#00665C",
//   },
//   passwordInput: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//   },
//   eyeIcon: {
//     padding: 10,
//   },
//   loginButton: {
//     backgroundColor: "white",
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#00665C",
//   },
//   actionButtons: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   forgotText: {
//     color: "white",
//     fontSize: 18,
//   },
//   orText: {
//     color: "white",
//     marginHorizontal: 10,
//     fontSize: 14,
//   },
//   signupText: {
//     color: "white",
//     fontSize: 18,
//   },
// });

// export default SalonLoginForm;
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from "../../firebaseConfig"; // Firebase database import
import { Ionicons } from "@expo/vector-icons";
import { ref, get } from "firebase/database"; // Firebase database functions

const SalonLoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [salonName, setSalonName] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Custom error messages
  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is not valid. Please enter a valid email.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/user-not-found":
        return "No account found with this email. Please check your email or sign up.";
      case "auth/wrong-password":
        return "Incorrect password. Please enter the correct password.";
      case "auth/too-many-requests":
        return "Too many unsuccessful login attempts. Please try again later.";
      case "auth/network-request-failed":
        return "A network error occurred. Please check your internet connection and try again.";
      default:
        return "An internal error occurred. Please try again later.";
    }
  };
  // ✅ Updated Login Function (Checks if salon name matches email)
  // const handleLogin = async () => {
  //   if (!email || !salonName || !password) {
  //     Alert.alert("Error", "Please enter your email, salon name, and password.");
  //     return;
  //   }
  
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
  //     const user = userCredential.user;
  
  //     if (!user.emailVerified) {
  //       Alert.alert("Email not verified", "Please verify your email before logging in.");
  //       return;
  //     }
  
  //     // Fetch salon data to validate salon name
  //     const salonRef = ref(db, `salons/${user.uid}`);
  //     const snapshot = await get(salonRef);
  
  //     if (snapshot.exists()) {
  //       const salonData = snapshot.val();
  //       if (salonData.salonName.toLowerCase() !== salonName.toLowerCase()) {
  //         Alert.alert("Error", "Salon name does not match the registered email. Please check your details.");
  //         return;
  //       }
  
  //       navigation.navigate("SalonHomeScreen", { userId: user.uid }); // Proceed if validation is correct
  //     } else {
  //       Alert.alert("Error", "No salon found for this account. Please sign up or contact support.");
  //     }
  //   } catch (error) {
  //     const errorCode = error.code;
  
  //     // Custom error messages based on the error code
  //     if (errorCode === "auth/wrong-password") {
  //       Alert.alert("Login Failed", "Incorrect password. Please enter the correct password.");
  //     } else if (errorCode === "auth/user-not-found") {
  //       Alert.alert("Login Failed", "No account found with this email. Please check your email or sign up.");
  //     } else if (errorCode === "auth/invalid-email") {
  //       Alert.alert("Login Failed", "The email address is not valid. Please enter a valid email.");
  //     } else if (errorCode === "auth/network-request-failed") {
  //       Alert.alert("Login Failed", "A network error occurred. Please check your internet connection and try again.");
  //     } else {
  //       Alert.alert("Login Failed", "Invalid credentials. Please check your email and password.");
  //     }
  //   }
  // };
  const handleLogin = async () => {
    if (!email || !salonName || !password) {
      Alert.alert("Error", "Please enter your email, salon name, and password.");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
  
      if (!user.emailVerified) {
        Alert.alert("Email not verified", "Please verify your email before logging in.");
        return;
      }
  
      // Fetch salon data to validate salon name
      const salonRef = ref(db, `salons/${user.uid}`);
      const snapshot = await get(salonRef);
  
      if (snapshot.exists()) {
        const salonData = snapshot.val();
        const enteredSalonName = salonName.trim().toLowerCase();
        const storedSalonName = salonData.salonName.trim().toLowerCase();
  
        // Debugging logs
        console.log("Entered Salon Name:", enteredSalonName);
        console.log("Stored Salon Name:", storedSalonName);
        console.log("Are they equal?", enteredSalonName === storedSalonName);
  
        if (storedSalonName !== enteredSalonName) {
          Alert.alert("Error", "Salon name does not match the registered email. Please check your details.");
          return;
        }
  
        navigation.navigate("SalonHomeScreen", { userId: user.uid }); // Proceed if validation is correct
      } else {
        Alert.alert("Error", "No salon found for this account. Please sign up or contact support.");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = getCustomErrorMessage(errorCode); // Use the custom error message function
      Alert.alert("Login Failed", errorMessage);
    }
  };

  // ✅ Updated Forgot Password Function (Ensures email & salon name match)
  const handleForgotPassword = async () => {
    if (!email || !salonName) {
      Alert.alert("Error", "Please enter both email and salon name.");
      return;
    }

    try {
      const salonRef = ref(db, `salons`);
      const snapshot = await get(salonRef);

      if (snapshot.exists()) {
        const salons = snapshot.val();
        let found = false;

        Object.keys(salons).forEach((key) => {
          if (salons[key].email === email.trim() && salons[key].salonName.toLowerCase() === salonName.toLowerCase()) {
            found = true;
          }
        });

        if (!found) {
          Alert.alert("Error", "Incorrect salon name for this email. Please check your details.");
          return;
        }

        await sendPasswordResetEmail(auth, email.trim());
        Alert.alert("Success", "Password reset link has been sent to your email. Please check your inbox.");
      } else {
        Alert.alert("Error", "No salons found in the system. Please sign up or contact support.");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = getCustomErrorMessage(errorCode);
      Alert.alert("Error", `Failed to send password reset email: ${errorMessage}`);
    }
  };

  return (
    <LinearGradient colors={["#00665C", "#00665C"]} style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Header Image & Welcome Text */}
            <View style={styles.topContainer}>
              <Image source={require("../../assets/images/Salonbackground.png")} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.subtitle}>
                  Beauty begins the moment you decide to be yourself
                </Text>
              </View>
            </View>

            {/* Login Form */}
            <View style={styles.bottomContainer}>
              {/* Email Field */}
              <View style={styles.inputContainer}>
                <View style={styles.iconInputWrapper}>
                  <Ionicons name="mail" size={24} color="#00665C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Salon Name Field */}
              <View style={styles.inputContainer}>
                <View style={styles.iconInputWrapper}>
                  <Ionicons name="business" size={24} color="#00665C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Salon Name"
                    value={salonName}
                    onChangeText={setSalonName}
                    autoCapitalize="words"
                  />
                </View>
              </View>

              {/* Password Field */}
              <View style={styles.inputContainer}>
                <View style={styles.iconInputWrapper}>
                  <Ionicons name="lock-closed" size={24} color="#00665C" style={styles.icon} />
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureTextEntry}
                  />
                  <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Ionicons
                      name={secureTextEntry ? "eye-off" : "eye"}
                      size={24}
                      color="#00665C"
                      style={styles.eyeIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                style={[styles.loginButton, email && password ? styles.validButton : null]}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              {/* Forgot Password & Signup */}
              <View style={styles.actionButtons}>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>|</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SalonSignupScreen")}>
                  <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginBottom: 40,
    borderColor: "#00665C",
    borderWidth: 4,
  },
  overlay: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginTop: 90,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    marginTop: 70,
    fontStyle: "italic",
  },
  subtitle: {
    fontSize: 17,
    fontStyle: "italic",
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 70,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 15,
  },
  iconInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderColor: "#00665C",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#00665C",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  forgotText: {
    color: "white",
    fontSize: 18,
  },
  orText: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 14,
  },
  signupText: {
    color: "white",
    fontSize: 18,
  },
});

export default SalonLoginForm;