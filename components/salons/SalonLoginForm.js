import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

const SalonLoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const googleClientId = "YOUR_WEB_CLIENT_ID"; // Replace with your actual client ID

  const handleGoogleLogin = async () => {
    try {
      const redirectUri = AuthSession.makeRedirectUri();
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&response_type=id_token&scope=openid%20email%20profile&redirect_uri=${redirectUri}`;
      const result = await AuthSession.startAsync({ authUrl });
      
      if (result.type === "success") {
        const credential = GoogleAuthProvider.credential(result.params.id_token);
        await signInWithCredential(auth, credential);
        Alert.alert("Success", "Google Sign-In successful!");
        navigation.navigate("SalonHomeScreen");
      }
    } catch (error) {
      Alert.alert("Error", "Google Sign-In failed!");
    }
  };

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

  return (
    <LinearGradient colors={["#8A2BE2", "#4B0082"]} style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotText}>Forgot your password?</Text>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" }} style={styles.googleIcon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SalonSignupScreen")} style={styles.signupButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
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
  },
  forgotText: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#4B0082",
    fontWeight: "bold",
  },
  orText: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
});

export default SalonLoginForm;
