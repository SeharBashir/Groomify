
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
//   KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard,
// } from "react-native";
// import { getDatabase, ref, onValue, update } from "firebase/database";
// import { getAuth, updatePassword, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
// import { Ionicons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import axios from "axios";

// const Profile = () => {
//   const [salon, setSalon] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [editable, setEditable] = useState(false);
//   const [serviceName, setServiceName] = useState("");
//   const [ownerName, setOwnerName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [logo, setLogo] = useState(null);
//   const [password, setPassword] = useState(""); // New password state
//   const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
//   const [email, setEmail] = useState(""); // Email state
//   const [currentPassword, setCurrentPassword] = useState(""); // Current password for reauthentication

//   const auth = getAuth();
//   const user = auth.currentUser;

//   // Fetch salon data of logged-in user
//   useEffect(() => {
//     if (user) {
//       const db = getDatabase();
//       const salonsRef = ref(db, "salons");

//       const unsubscribe = onValue(salonsRef, (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const salonData = Object.keys(data)
//             .map((key) => ({
//               id: key,
//               salonName: data[key].salonName,
//               ownerName: data[key].ownerName,
//               phoneNumber: data[key].phoneNumber,
//               salonLogo: data[key].salonLogo,
//               ownerId: data[key].ownerId,
//               password: data[key].password, // Password field fetched from database
//             }))
//             .find((salon) => salon.ownerId === user.uid); // Filter by logged-in user ID

//           if (salonData) {
//             setSalon(salonData);
//             setServiceName(salonData.salonName);
//             setOwnerName(salonData.ownerName);
//             setPhoneNumber(salonData.phoneNumber);
//             setLogo(salonData.salonLogo);
//             setPassword(salonData.password); // Set password if available
//             setEmail(user.email); // Fetch email from Firebase Authentication
//           } else {
//             console.log("No salon data found for this user.");
//           }
//         } else {
//           console.log("No salons found in the database.");
//         }
//         setLoading(false);
//       });

//       return () => unsubscribe();
//     } else {
//       console.log("User is not logged in.");
//       setLoading(false);
//     }
//   }, [user]);

//   // Handle profile update
//   const handleUpdateProfile = async () => {
//     if (!serviceName || !ownerName || !phoneNumber || !email) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (password && password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       // Reauthenticate the user before updating sensitive fields (email/password)
//       const credential = EmailAuthProvider.credential(user.email, currentPassword);
//       await reauthenticateWithCredential(user, credential);

//       // Update email in Firebase Authentication
//       if (email !== user.email) {
//         await updateEmail(user, email);
//       }

//       // Update password in Firebase Authentication
//       if (password) {
//         await updatePassword(user, password);
//       }

//       // Update data in Realtime Database
//       const updatedData = {
//         salonName: serviceName,
//         ownerName: ownerName,
//         phoneNumber: phoneNumber,
//         salonLogo: logo,
//         password: password || salon.password, // Update password if provided
//       };

//       const db = getDatabase();
//       const salonRef = ref(db, "salons/" + salon.id);
//       await update(salonRef, updatedData);

//       alert("Profile updated successfully!");
//       setEditable(false);
//     } catch (error) {
//       alert("Failed to update profile: " + error.message);
//     }
//   };

//   // Handle image pick
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const uploadedImageUrl = await uploadImageToCloudinary(result.assets[0].uri);
//       setLogo(uploadedImageUrl);
//     }
//   };

//   // Upload image to Cloudinary
//   const uploadImageToCloudinary = async (imageUri) => {
//     const data = new FormData();
//     data.append("file", {
//       uri: imageUri,
//       type: "image/jpeg",
//       name: "salon_logo.jpg",
//     });
//     data.append("upload_preset", "Groomify");

//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/der7nytc0/image/upload",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       return response.data.secure_url;
//     } catch (error) {
//       alert("Image upload failed: " + error.message);
//       return null;
//     }
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#054D44" />;
//   }

//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
//           <Text style={styles.title}>Salon Profile</Text>
  
//           <TouchableOpacity onPress={() => setEditable(!editable)} style={styles.editIcon}>
//             <Ionicons name={editable ? "close" : "pencil"} size={30} color="#00665C" />
//           </TouchableOpacity>
  
//           {salon && (
//             <View style={styles.card}>
//               {logo ? (
//                 <Image source={{ uri: logo }} style={styles.image} />
//               ) : (
//                 <Text style={styles.imagePlaceholder}>No Logo</Text>
//               )}
  
//               <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
//                 <Text style={styles.uploadText}>Upload New Logo</Text>
//               </TouchableOpacity>
  
//               <TextInput style={styles.input} value={serviceName} onChangeText={setServiceName} editable={editable} placeholder="Salon Name" />
//               <TextInput style={styles.input} value={ownerName} onChangeText={setOwnerName} editable={editable} placeholder="Owner Name" />
//               <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} editable={editable} placeholder="Phone Number" keyboardType="numeric" />
//               <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={editable} placeholder="Email" keyboardType="email-address" />
  
//               {editable && (
//                 <>
//                   <TextInput style={styles.input} value={currentPassword} onChangeText={setCurrentPassword} placeholder="Current Password (for verification)" secureTextEntry={true} />
//                   <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="New Password" secureTextEntry={true} />
//                   <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password" secureTextEntry={true} />
  
//                   <TouchableOpacity onPress={handleUpdateProfile} style={styles.updateButton}>
//                     <Text style={styles.updateText}>Update Profile</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//             </View>
//           )}
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#EAF4F4",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#00665C",
//   },
//   editIcon: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#EAF4F4",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#00665C",
//   },
//   editIcon: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   imagePlaceholder: {
//     fontSize: 18,
//     color: "#777",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   uploadText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingLeft: 8,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     fontSize: 16,
//   },
//   updateButton: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 20,
//     alignItems: "center",
//   },
//   updateText: {
//     color: "#fff",
//     fontSize: 16,
//   },

//   card: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   imagePlaceholder: {
//     fontSize: 18,
//     color: "#777",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   uploadButton: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   uploadText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingLeft: 8,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//     fontSize: 16,
//   },
//   updateButton: {
//     backgroundColor: "#00665C",
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 20,
//     alignItems: "center",
//   },
//   updateText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default Profile;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { getAuth, updatePassword, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const Profile = () => {
  const [salon, setSalon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [logo, setLogo] = useState(null);
  const [password, setPassword] = useState(""); // New password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [email, setEmail] = useState(""); // Email state
  const [currentPassword, setCurrentPassword] = useState(""); // Current password for reauthentication

  const auth = getAuth();
  const user = auth.currentUser;

  // Fetch salon data of logged-in user
  useEffect(() => {
    if (user) {
      const db = getDatabase();
      const salonsRef = ref(db, "salons");

      const unsubscribe = onValue(salonsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const salonData = Object.keys(data)
            .map((key) => ({
              id: key,
              salonName: data[key].salonName,
              ownerName: data[key].ownerName,
              phoneNumber: data[key].phoneNumber,
              salonLogo: data[key].salonLogo,
              ownerId: data[key].ownerId,
            }))
            .find((salon) => salon.ownerId === user.uid); // Filter by logged-in user ID

          if (salonData) {
            setSalon(salonData);
            setServiceName(salonData.salonName);
            setOwnerName(salonData.ownerName);
            setPhoneNumber(salonData.phoneNumber);
            setLogo(salonData.salonLogo);
            setEmail(user.email); // Fetch email from Firebase Authentication
          } else {
            console.log("No salon data found for this user.");
          }
        } else {
          console.log("No salons found in the database.");
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      console.log("User is not logged in.");
      setLoading(false);
    }
  }, [user]);

  // Handle profile update
  const handleUpdateProfile = async () => {
    if (!serviceName || !ownerName || !phoneNumber || !email) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (password && password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    if (!currentPassword) {
      Alert.alert("Error", "Please enter your current password to update your profile.");
      return;
    }

    try {
      // Reauthenticate the user with the current password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      // Update email in Firebase Authentication
      if (email !== user.email) {
        await updateEmail(user, email);
      }

      // Update password in Firebase Authentication
      if (password) {
        await updatePassword(user, password);
      }

      // Update data in Realtime Database
      const updatedData = {
        salonName: serviceName,
        ownerName: ownerName,
        phoneNumber: phoneNumber,
        salonLogo: logo,
      };

      const db = getDatabase();
      const salonRef = ref(db, "salons/" + salon.id);
      await update(salonRef, updatedData);

      Alert.alert("Success", "Profile updated successfully!");
      setEditable(false);
    } catch (error) {
      let errorMessage = "Failed to update profile. Please try again.";
      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Incorrect current password.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email is already in use.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        default:
          console.error("Error updating profile:", error);
      }
      Alert.alert("Error", errorMessage);
    }
  };

  // Handle image pick
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uploadedImageUrl = await uploadImageToCloudinary(result.assets[0].uri);
      setLogo(uploadedImageUrl);
    }
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    data.append("file", {
      uri: imageUri,
      type: "image/jpeg",
      name: "salon_logo.jpg",
    });
    data.append("upload_preset", "Groomify");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/der7nytc0/image/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.secure_url;
    } catch (error) {
      Alert.alert("Error", "Image upload failed. Please try again.");
      return null;
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#054D44" />;
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Salon Profile</Text>

          <TouchableOpacity onPress={() => setEditable(!editable)} style={styles.editIcon}>
            <Ionicons name={editable ? "close" : "pencil"} size={30} color="#00665C" />
          </TouchableOpacity>

          {salon && (
            <View style={styles.card}>
              {logo ? (
                <Image source={{ uri: logo }} style={styles.image} />
              ) : (
                <Text style={styles.imagePlaceholder}>No Logo</Text>
              )}

              <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
                <Text style={styles.uploadText}>Upload New Logo</Text>
              </TouchableOpacity>

              <TextInput style={styles.input} value={serviceName} onChangeText={setServiceName} editable={editable} placeholder="Salon Name" />
              <TextInput style={styles.input} value={ownerName} onChangeText={setOwnerName} editable={editable} placeholder="Owner Name" />
              <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} editable={editable} placeholder="Phone Number" keyboardType="numeric" />
              <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={editable} placeholder="Email" keyboardType="email-address" />

              {editable && (
                <>
                  <TextInput
                    style={styles.input}
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    placeholder="Current Password (required for update)"
                    secureTextEntry={true}
                  />
                  <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="New Password (optional)" secureTextEntry={true} />
                  <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password (optional)" secureTextEntry={true} />

                  <TouchableOpacity onPress={handleUpdateProfile} style={styles.updateButton}>
                    <Text style={styles.updateText}>Update Profile</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##EAF4F4",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#00665C",
  },
  editIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  card: {
    backgroundColor: "#EAF4F4",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  imagePlaceholder: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  uploadText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: "#00665C",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  updateText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Profile;