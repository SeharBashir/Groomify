import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigation, useRoute } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserSignupScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { role } = route.params || {}; // Get role from route params

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!fullName || !email || !password || !confirmPassword || !role) {
      Alert.alert("Error", "All fields are required to fill.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      await set(ref(db, "users/" + user.uid), {
        uid: user.uid,
        fullName,
        email,
        role, // ✅ Save role in database
        createdAt: new Date().toISOString(),
      });

      Alert.alert("Success", "Verification email sent. Please verify before logging in.");
      navigation.navigate("UserLoginScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        source={require("../../assets/images/sinpic.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.overlay}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-left" size={28} color="white" />
            </TouchableOpacity>

            <View style={styles.formContainer}>
              {/* <Text style={styles.heading}>Sign Up</Text> */}
              {role && <Text style={styles.heading}>SIGN UP AS : {role.toUpperCase()}</Text>}


              <View style={styles.inputContainer}>
                <Icon name="account" size={24} color="#555" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#555" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#555" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <Icon name="lock-check" size={24} color="#555" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#555" />
                </TouchableOpacity>
              </View>

              {loading ? (
                <ActivityIndicator size="large" color="#00665C" />
              ) : (
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.loginLinkContainer}
                onPress={() => navigation.navigate("UserLoginScreen")}
              >
                <Text style={styles.loginText}>
                  Already have an account?{" "}
                  <Text style={styles.loginLink}>Login here</Text>
                </Text>
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
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  formContainer: {
    marginTop: 60,
    backgroundColor: "rgba(255, 255, 255, 0.85)", // Slight transparency
    padding: 25,
    borderRadius: 10,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
  },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 10 },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00665C",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    textAlign: "center",
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: { flex: 1, paddingVertical: 10 },
  icon: { marginRight: 10 },
  button: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginText: { textAlign: "center", marginTop: 15, color: "black" },
  loginLink: { color: "#00665C", fontWeight: "bold" },
  scrollViewContent: { flexGrow: 1 },
});

export default UserSignupScreen;