import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  reload,
} from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserSignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !serviceType ||
      !gender ||
      !address
    ) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Error", "Invalid email format. Please use @gmail.com");
      return;
    }

    if (!isStrongPassword(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters and include uppercase, lowercase, numbers, and symbols."
      );
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userId = user.uid;

      await sendEmailVerification(user);

      await set(ref(db, "users/" + userId), {
        uid: userId,
        fullName,
        email,
        serviceType,
        gender,
        address,
        createdAt: new Date().toISOString(),
        isVerified: false, // Initial status: not verified
      });

      Alert.alert(
        "Verification Email Sent",
        "A verification email has been sent to your address. Please check your email to verify your account before logging in."
      );

      // After registration, navigate to login screen
      navigation.navigate("UserLoginScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith("@gmail.com");
  };

  const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  // Check if email is verified after the user clicks the verification link
  const checkEmailVerification = async (userId) => {
    const user = auth.currentUser;

    // Reload the user to make sure we have the updated status
    await reload(user);

    if (user.emailVerified) {
      // Update the database to reflect that the user is verified
      await set(ref(db, "users/" + userId), {
        uid: userId,
        fullName,
        email,
        serviceType,
        gender,
        address,
        createdAt: new Date().toISOString(),
        isVerified: true, // Mark as verified
      });

      Alert.alert("Success", "Your email has been verified!");
      navigation.navigate("UserHomeScreen"); // Navigate to the home screen or wherever
    } else {
      Alert.alert("Error", "Your email is not verified. Please verify it.");
    }
  };

  // Auto-check email verification status after login or app restart
  useEffect(() => {
    const checkVerificationStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        await reload(user); // Reload user to make sure emailVerified is updated
        if (user.emailVerified) {
          // Update the database
          await set(ref(db, "users/" + user.uid), {
            uid: user.uid,
            fullName,
            email,
            serviceType,
            gender,
            address,
            createdAt: new Date().toISOString(),
            isVerified: true,
          });
        }
      }
    };

    checkVerificationStatus();
  }, []);

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
              <Text style={styles.heading}>Sign Up</Text>

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
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#555" />
                </TouchableOpacity>
              </View>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={serviceType}
                  style={styles.picker}
                  onValueChange={setServiceType}
                >
                  <Picker.Item label="Select Service Type" value="" />
                  <Picker.Item label="In-Salon" value="In-Salon" />
                  <Picker.Item label="Home Salon" value="Home Salon" />
                </Picker>
              </View>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  style={styles.picker}
                  onValueChange={setGender}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>

              <View style={styles.inputContainer}>
                <Icon name="map-marker" size={24} color="#555" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  value={address}
                  onChangeText={setAddress}
                  multiline
                  numberOfLines={3}
                />
              </View>

              {loading ? (
                <ActivityIndicator size="large" color="#004080" />
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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
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
    marginBottom: 20,
  },
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
  pickerContainer: {
    marginBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 8,
  },
  picker: {
    color: "black",
  },
  button: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loginText: { textAlign: "center", marginTop: 15, color: "black" },
  loginLink: { color: "#00665C", fontWeight: "bold" },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default UserSignupScreen;

