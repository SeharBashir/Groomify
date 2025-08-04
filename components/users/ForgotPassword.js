import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset email sent! Check your inbox.");
      navigation.navigate("UserLoginScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/sinpic.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="white" />
            </TouchableOpacity>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Forgot Password</Text>

            <View style={styles.inputContainer}>
              <Icon name="email" size={24} color="#555" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#004080" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.loginLinkContainer}
              onPress={() => navigation.navigate("UserLoginScreen")}
            >
              <Text style={styles.loginText}>
                Remembered your password? <Text style={styles.loginLink}>Login here</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, justifyContent: "center" },
  overlay: { 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",  // Center horizontally
    padding: 20 
  },
  formContainer: { 
    backgroundColor: "rgba(255, 255, 255, 0.6)", 
    padding: 25, 
    borderRadius: 10, 
    width: "90%", 
    maxWidth: 400 
  },
  heading: { fontSize: 26, fontWeight: "bold", color: "#00665C", textAlign: "center", marginBottom: 20 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: { flex: 1, paddingVertical: 10 },
  icon: { marginRight: 10 },
  button: { backgroundColor: "#00665C", padding: 12, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginText: { textAlign: "center", marginTop: 15, color: "black" },
  loginLink: { color: "#00665C", fontWeight: "bold" },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
});

export default ForgotPasswordScreen;
