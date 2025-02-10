// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import { Ionicons } from "@expo/vector-icons";
// import * as EmailValidator from "email-validator"; // Email validation library

// const SalonLoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [secureTextEntry, setSecureTextEntry] = useState(true);
//   const [isEmailValid, setIsEmailValid] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password!");
//       return;
//     }

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       Alert.alert("Success", "Login successful!");
//       navigation.navigate("SalonHomeScreen", { userId: userCredential.user.uid });
//     } catch (error) {
//       Alert.alert("Error", "Invalid email or password. Please try again!");
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       Alert.alert("Error", "Please enter your email address!");
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       Alert.alert("Success", "Password reset link has been sent to your email.");
//     } catch (error) {
//       Alert.alert("Error", "Failed to send password reset email.");
//     }
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     if (EmailValidator.validate(text)) {
//       setIsEmailValid(true);
//     } else {
//       setIsEmailValid(false);
//     }
//   };

//   return (
//     <LinearGradient colors={["#00665C", "#F5A1C0"]} style={styles.container}>
//       {/* Top container with background image */}
//       <View style={styles.topContainer}>
//         <Image source={require("../../assets/images/Salonbackground.png")} style={styles.image} />
//         <View style={styles.overlay}>
//           <Text style={styles.welcomeText}>Welcome</Text>
//           <Text style={styles.subtitle}>Beauty begins the moment you decide to be yourself</Text>
//         </View>
//       </View>

//       {/* Bottom container for login form */}
//       <View style={styles.bottomContainer}>
//         {/* Email Field */}
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={handleEmailChange}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//           <View style={styles.checkmarkContainer}>
//             <Ionicons
//               name={isEmailValid ? "checkmark-circle" : "close-circle"}
//               size={24}
//               color={isEmailValid ? "green" : "red"}
//             />
//           </View>
//         </View>

//         {/* Password Field */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={secureTextEntry}
//           />
//           <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
//             <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="gray" style={styles.eyeIcon} />
//           </TouchableOpacity>
//         </View>

//         {/* Sign In Button */}
//         <TouchableOpacity
//           style={[styles.loginButton, email && password && isEmailValid ? styles.validButton : null]}
//           onPress={handleLogin}
//           disabled={!email || !password || !isEmailValid}
//         >
//           <Text style={styles.buttonText}>Sign In</Text>
//         </TouchableOpacity>

//         {/* Forgot Password and Sign Up Links */}
//         <View style={styles.actionButtons}>
//           <TouchableOpacity onPress={handleForgotPassword}>
//             <Text style={styles.forgotText}>Forgot Password?</Text>
//           </TouchableOpacity>
//           <Text style={styles.orText}>|</Text>
//           <TouchableOpacity onPress={() => navigation.navigate("SalonSignupScreen")}>
//             <Text style={styles.signupText}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

     
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"white"
//   },
//   topContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//     marginBottom:40,
//     borderColor:"#00665C",
//     borderWidth:4,
//   },
//   overlay: {
//     alignItems: "center",
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     // resizeMode: 'cover',
//     borderBottomLeftRadius: 80,
//     borderBottomRightRadius: 80,
//     marginTop:90,
   
//   },
//   welcomeText: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#FFFFFF',
//     marginTop: 70,
//     fontStyle:'italic'
//   },
//   subtitle: {
//     fontSize: 17,
//     fontStyle: "italic",
//     color: '#FFFFFF',
//     marginTop: 20,
//     marginBottom:20,
//   },
//   bottomContainer: {
//     flex: 1,
//     backgroundColor: '',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginTop:70,
//   },
//   inputContainer: {
//     width: '90%',
//     marginBottom: 15,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#00665C',
//     borderWidth:3,
//     marginBottom: 5,
//   },
//   checkmarkContainer: {
//     position: "absolute",
//     right: 23,
//     top: 14,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     borderWidth: 3,
//     borderColor: '#00665C',
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
//     backgroundColor: 'white',
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#00665C',
//   },
//   validButton: {
//     backgroundColor: '#00665C',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'Black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   forgotText: {
//     color: '#00665C',
//     fontSize: 18,
    
//   },
//   orText: {
//     color: '#00665C',
//     marginHorizontal: 10,
//     fontSize: 14,
//   },
//   signupText: {
//     color: '#00665C',
//     fontSize: 18,
//   },
//   bottomLine: {
//     width: '100%',
//     height: 2,
//     backgroundColor: '#00665C',
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomLineText: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: -15,
//   },
// });

// export default SalonLoginForm;
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"; // Make sure to import sendPasswordResetEmail
import { auth } from "../../firebaseConfig"; // Make sure this is pointing to your Firebase configuration
import { Ionicons } from "@expo/vector-icons";
import * as EmailValidator from "email-validator"; // Email validation library

const SalonLoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password!");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Login successful!");
      navigation.navigate("SalonHomeScreen", { userId: userCredential.user.uid });
    } catch (error) {
      Alert.alert("Error", "Invalid email or password. Please try again!");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address!");
      return;
    }

    if (!EmailValidator.validate(email)) {
      Alert.alert("Error", "Please enter a valid email address!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset link has been sent to your email.");
    } catch (error) {
      Alert.alert("Error", "Failed to send password reset email.");
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (EmailValidator.validate(text)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <LinearGradient colors={["#00665C","#00665C"]} style={styles.container}>
      {/* Top container with background image */}
      <View style={styles.topContainer}>
        <Image source={require("../../assets/images/Salonbackground.png")} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subtitle}>Beauty begins the moment you decide to be yourself</Text>
        </View>
      </View>

      {/* Bottom container for login form */}
      <View style={styles.bottomContainer}>
        {/* Email Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.checkmarkContainer}>
            <Ionicons
              name={isEmailValid ? "checkmark-circle" : "close-circle"}
              size={24}
              color={isEmailValid ? "green" : "red"}
            />
          </View>
        </View>

        {/* Password Field */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Ionicons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="gray" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={[styles.loginButton, email && password && isEmailValid ? styles.validButton : null]}
          onPress={handleLogin}
          disabled={!email || !password || !isEmailValid}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password and Sign Up Links */}
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginTop: 90,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 70,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 17,
    fontStyle: "italic",
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 15,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    color: '#00665C',
    marginBottom: 5,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#00665C',
    borderWidth: 3,
    marginBottom: 5,
  },
  checkmarkContainer: {
    position: "absolute",
    right: 23,
    top: 14,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#00665C',
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
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#00665C',
  },
  validButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: '#00665C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  forgotText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 14,
  },
  signupText: {
    color: 'white',
    fontSize: 18,
  },
  bottomLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#00665C',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLineText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -15,
  },
});

export default SalonLoginForm;
