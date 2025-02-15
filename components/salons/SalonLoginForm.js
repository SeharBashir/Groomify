
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
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

  // ✅ Updated Login Function (Checks if salon name matches email)
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
        if (salonData.salonName.toLowerCase() !== salonName.toLowerCase()) {
          Alert.alert("Error", "Salon name does not match the registered email.");
          return;
        }

        navigation.navigate("SalonHomeScreen", { userId: user.uid }); // Proceed if validation is correct
      } else {
        Alert.alert("Error", "No salon found for this account.");
      }
    } catch (error) {
      Alert.alert("Login Failed", error.message);
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
        Alert.alert("Success", "Password reset link has been sent to your email.");
      } else {
        Alert.alert("Error", "No salons found in the system.");
      }
    } catch (error) {
      Alert.alert("Error", `Failed to send password reset email: ${error.message}`);
    }
  };

  return (
    <LinearGradient colors={["#00665C", "#00665C"]} style={styles.container}>
      {/* Header Image & Welcome Text */}
      <View style={styles.topContainer}>
        <Image source={require("../../assets/images/Salonbackground.png")} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subtitle}>Beauty begins the moment you decide to be yourself</Text>
        </View>
      </View>

      {/* Login Form */}
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
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
          <TextInput
            style={styles.input}
            placeholder="Salon Name"
            value={salonName}
            onChangeText={setSalonName}
            autoCapitalize="words"
          />
        </View>

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

        {/* Login Button */}
        <TouchableOpacity style={[styles.loginButton, email && password ? styles.validButton : null]} onPress={handleLogin}>
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
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#00665C",
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#00665C",
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
