// // // import React, { useState } from 'react';
// // // import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

// // // const LoginForm = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleLogin = () => {
// // //     // You can add your login logic here
// // //     Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Login</Text>
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Email"
// // //         value={email}
// // //         onChangeText={setEmail}
// // //         keyboardType="email-address"
// // //         autoCapitalize="none"
// // //       />
// // //       <TextInput
// // //         style={styles.input}
// // //         placeholder="Password"
// // //         value={password}
// // //         onChangeText={setPassword}
// // //         secureTextEntry
// // //       />
// // //       <Button title="Login" onPress={handleLogin} />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     padding: 16,
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     marginBottom: 20,
// // //     textAlign: 'center',
// // //   },
// // //   input: {
// // //     height: 40,
// // //     borderColor: 'gray',
// // //     borderWidth: 1,
// // //     marginBottom: 12,
// // //     paddingHorizontal: 10,
// // //   },
// // // });

// // // export default LoginForm;




// // import React, { useState } from "react";
// // import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../../firebaseConfig"; // Firebase Configuration Import

// // const LoginForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async () => {
// //     if (!email || !password) {
// //       Alert.alert("Error", "Please enter both email and password!");
// //       return;
// //     }

// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       Alert.alert("Success login",);
// //       // Yahan aap navigation ka use kar ke next screen pe le ja sakti hain
// //     } catch (error) {
// //       Alert.alert("Error", "Invalid email or password. Please try again!");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       <Button title="Login" onPress={handleLogin} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     marginBottom: 12,
// //     paddingHorizontal: 10,
// //   },
// // });

// // export default LoginForm;



// // import React, { useState } from "react";
// // import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, Image } from "react-native";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../../firebaseConfig"; // Firebase Configuration Import

// // const LoginForm = ({ navigation }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async () => {
// //     if (!email || !password) {
// //       Alert.alert("Error", "Please enter both email and password!");
// //       return;
// //     }

// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       Alert.alert("Success", "Login successful!");
// //       navigation.navigate("UserHomeScreen"); // Navigate to HomeScreen
// //     } catch (error) {
// //       Alert.alert("Error", "Invalid email or password. Please try again!");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Displaying the image above the login form */}
// //       <Image
// //         source={require("../../assets/animations/login.json")}  // Ensure the image is in the correct folder
// //         style={styles.image}
// //       />

// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //         keyboardType="email-address"
// //         autoCapitalize="none"
// //       />
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Password"
// //         value={password}
// //         onChangeText={setPassword}
// //         secureTextEntry
// //       />
// //       <Button title="Login" onPress={handleLogin} />

// //       {/* Link to SignUp screen */}
// //       <View style={styles.linkContainer}>
// //         <TouchableOpacity onPress={() => navigation.navigate("UserSignupScreen")}>
// //           <Text style={styles.linkText}>Don't have an account? Sign up</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //     textAlign: "center",
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: "gray",
// //     borderWidth: 1,
// //     marginBottom: 12,
// //     paddingHorizontal: 10,
// //   },
// //   image: {
// //     width: 150,  // Set width of the image
// //     height: 150, // Set height of the image
// //     marginBottom: 30, // Space between the image and form
// //     alignSelf: "center", // Center the image horizontally
// //   },
// //   linkContainer: {
// //     marginTop: 20,
// //     alignItems: "center",
// //   },
// //   linkText: {
// //     color: "#007BFF", // Blue color for the link
// //     fontSize: 16,
// //   },
// // });

// // export default LoginForm;

// // adding images

// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, Image, ActivityIndicator } from "react-native";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebaseConfig"; // Firebase Configuration Import

// const LoginForm = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password!");
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       Alert.alert("Success", "Login successful!");
//       navigation.navigate("UserHomeScreen"); // Navigate to HomeScreen
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/animations/login.json")}  // Ensure the image is in the correct folder
//         style={styles.image}
//       />

//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <Button title="Login" onPress={handleLogin} />
//       )}

//       <View style={styles.linkContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate("UserSignupScreen")}>
//           <Text style={styles.linkText}>Don't have an account? Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     marginBottom: 30,
//     alignSelf: "center",
//   },
//   linkContainer: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   linkText: {
//     color: "#007BFF",
//     fontSize: 16,
//   },
// });

// export default LoginForm;
//update styling 

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigation.navigate("UserHomeScreen");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
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
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      
      {loading ? (
        <ActivityIndicator size="large" color="#20B2AA" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}

      <View style={styles.linkContainer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("UserSignupScreen")}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
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
    color: "#333",
  },
  linkText: {
    fontSize: 16,
    color: "#20B2AA",
    fontWeight: "bold",
  },
});

export default LoginForm;
