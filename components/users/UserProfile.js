import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get, update } from "firebase/database";
import { auth, db } from "../../firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import userImage from "../../assets/images/user.png"; // Ensure this path is correct

const UserProfile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        try {
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);
            setEditedData(data);
          } else {
            console.log("No user data found.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      try {
        await update(userRef, editedData);
        setUserData(editedData);
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("UserLoginScreen");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleHistoryPress = () => {
    navigation.navigate("HistoryScreen", { bookings: userData?.bookings });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>User Profile</Text> */}
        <Image source={userImage} style={styles.profileImage} />
      <Text style={styles.userName}>{editedData?.fullName || "User Name"}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* <Image source={userImage} style={styles.profileImage} />
      <Text style={styles.userName}>{editedData?.fullName || "User Name"}</Text> */}

      {/* Personal Information Heading */}
      <Text style={styles.heading}>Personal Information</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user-o" size={20} color="#fff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={editedData.fullName}
          editable={isEditing}
          onChangeText={(text) => setEditedData({ ...editedData, fullName: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="venus-mars" size={20} color="#fff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={editedData.gender}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope-o" size={20} color="#fff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          value={editedData.email}
          editable={false}
        />
      </View>

      {/* History Field as a Button */}
      <Text style={styles.heading}>History</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={handleHistoryPress}>
        <FontAwesome name="history" size={20} color="#fff" style={styles.inputIcon} />
        <Text style={styles.input}>{editedData.history || "View History"}</Text>
      </TouchableOpacity>

      {isEditing ? (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <FontAwesome name="check" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <FontAwesome name="times" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <FontAwesome name="edit" size={20} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      )}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={20} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 0, paddingLeft: 5, paddingRight: 5, alignItems: "center" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1e1e1e" },
  backButton: { position: "absolute", top: 40, left: 20, padding: 10, borderRadius: 10, color: "#004D40" },
  profileImage: { width: 100, height: 100, borderRadius: 60, marginBottom: 10, marginTop: 30 },
  userName: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  header: {
    width: "103%",
    height: "35%",
    backgroundColor: "#004D40",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  headerText: { color: "white", fontSize: 20, fontWeight: "bold" },
  inputContainer: { flexDirection: "row", alignItems: "center", width: "90%", backgroundColor: "#fff", borderRadius: 30, paddingHorizontal: 10, paddingVertical: 5, marginBottom: 8, height: 50 ,borderColor:"black",borderWidth:1},
  inputIcon: { marginRight: 10, color: "#004D40" },
  input: { flex: 1, color: "#000000", fontSize: 16, paddingVertical: 10 },
  editButton: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#004D40",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    height:50
  },
  editButtonText: { color: "white", fontSize: 20 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", width: "90%", marginTop: 10 },
  saveButton: { flexDirection: "row", backgroundColor: "#4CAF50", padding: 12, borderRadius: 10, flex: 1, alignItems: "center", justifyContent: "center", marginRight: 5 },
  cancelButton: { flexDirection: "row", backgroundColor: "#f44336", padding: 12, borderRadius: 10, flex: 1, alignItems: "center", justifyContent: "center", marginLeft: 5 },
  buttonText: { color: "white", fontSize: 14, fontWeight: "bold" },
  logoutButton: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    backgroundColor: "#E53935",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    height:50
  },
  logoutButtonText: { color: "white", fontSize: 19 },
  heading: { color: "#004D40", fontSize: 25, fontWeight: "bold", marginTop: 30, marginBottom: 20, width: "90%", textAlign: "center" },
});

export default UserProfile;
