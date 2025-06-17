

// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// export default function Chatbot() {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Upper Section with Sea Green Background */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>Groomify Chatbot</Text>
//       </View>

//       {/* Lower Section with White Background (Content Centered) */}
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>What can I help with?</Text>
//         <Text style={styles.description}>
//           Your grooming assistant! Upload an image for personalized makeup and hairstyle
//           suggestions or ask beauty and skincare queries for instant expert advice.
//         </Text>
//       </View>

//       {/* Input Field Fixed at Bottom */}
//       <View style={styles.inputContainer}>
//         <TouchableOpacity>
//           <Ionicons name="image-outline" size={24} color="gray" style={styles.icon} />
//         </TouchableOpacity>
//         <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
//         <TouchableOpacity style={styles.sendButton}>
//           <Ionicons name="send" size={24} color="gray" />
//         </TouchableOpacity>
//       </View>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
//           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
//           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Salon</Text>
//         </TouchableOpacity>

//         {/* <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('BookingScreen')}>
//           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Booking</Text>
//         </TouchableOpacity> */}

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
//           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>AI Chatbot</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
//           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "white" },
  
//   // Upper Sea Green Section
//   headerContainer: { 
//     backgroundColor: "#00665C", 
//     paddingVertical: 60, 
//     alignItems: "center", 
//     borderBottomLeftRadius: 30, 
//     borderBottomRightRadius: 30 
//   },
//   headerText: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },

//   // Lower White Section
//   contentContainer: { flex: 1, paddingHorizontal: 40, justifyContent: "center" },
//   title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#333" },
//   description: { textAlign: "center", color: "gray", fontSize: 16, marginBottom: 20 },

//   // Input Field at Bottom
//   inputContainer: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     borderColor: "gray", 
//     borderWidth: 1, 
//     borderRadius: 10, 
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     backgroundColor: "white",
//     position: "absolute",
//     bottom: 70, // Adjusted for navbar spacing
//     left: 20,
//     right: 20
//   },
//   icon: { marginRight: 10 },
//   input: { flex: 1, height: 40, color: "black" },
//   sendButton: { padding: 10 },

//   // Bottom Navigation Bar
//   bottomNavigation: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     elevation: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   bottomNavItem: { alignItems: 'center' },
//   bottomNavIcon: { width: 24, height: 24, marginBottom: 3 },
//   bottomNavText: { fontSize: 12, color: '#333' },
// });

import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig"; // Adjust the import path as needed
import { ref, get } from "firebase/database";

export default function Chatbot() {
  const navigation = useNavigation();
  const [userGender, setUserGender] = useState("");

  // Fetch User Data (Gender)
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = ref(db, "users/" + user.uid);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserGender(userData.gender || "Unisex"); // Set the user's gender
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  // Handle Navigation Based on Gender
  const handleHomeNavigation = () => {
    if (userGender.toLowerCase() === "male") {
      navigation.navigate("MaleHomeScreen"); // Navigate to MaleHomeScreen for male users
    } else {
      navigation.navigate("UserHomeScreen"); // Navigate to UserHomeScreen for others
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Section with Sea Green Background */}
      <View style={styles.headerContainer}>
        {/* Back Arrow */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Navigate back to the previous screen
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Groomify Chatbot</Text>
      </View>

      {/* Lower Section with White Background (Content Centered) */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What can I help with?</Text>
        <Text style={styles.description}>
          Your grooming assistant! Upload an image for personalized makeup and hairstyle
          suggestions or ask beauty and skincare queries for instant expert advice.
        </Text>
      </View>

      {/* Input Field Fixed at Bottom */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="image-outline" size={24} color="gray" style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        {[
          { title: "Home", image: require("../../assets/images/home.png"), route: "Home" },
          { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
          // { title: "Booking", image: require("../../assets/images/booking.png"), route: "BookingScreen" },
          { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
          { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
        ].map((navItem, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavItem}
            onPress={() => {
              if (navItem.route === "Home") {
                handleHomeNavigation(); // Handle Home navigation conditionally
              } else {
                navigation.navigate(navItem.route); // Navigate to other screens
              }
            }}
          >
            <Image source={navItem.image} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>{navItem.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },

  // Upper Sea Green Section
  headerContainer: {
    backgroundColor: "#00665C",
    paddingVertical: 60,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row", // Add this to align items horizontally
    justifyContent: "center", // Center the header text
    position: "relative", // Add this for positioning the back button
  },
  backButton: {
    position: "absolute", // Position the back button absolutely
    left: 20, // Adjust the left position as needed
    top: 60, // Adjust the top position to align with the header
  },
  headerText: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },

  // Lower White Section
  contentContainer: { flex: 1, paddingHorizontal: 40, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#333" },
  description: { textAlign: "center", color: "gray", fontSize: 16, marginBottom: 20 },

  // Input Field at Bottom
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
    position: "absolute",
    bottom: 70, // Adjusted for navbar spacing
    left: 20,
    right: 20,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, height: 40, color: "black" },
  sendButton: { padding: 10 },

  // Bottom Navigation Bar
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#004D40",
    paddingVertical: 10,
  },
  bottomNavItem: { alignItems: "center", flex: 1 },
  bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
  bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
})
