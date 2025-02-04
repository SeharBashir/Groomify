// // // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // // import { View, Text, TextInput, StyleSheet } from 'react-native';
// // // // // // // // // // import database from '@react-native-firebase/database';
// // // // // // // // // // import auth from '@react-native-firebase/auth';

// // // // // // // // // // const ProfileScreen = () => {
// // // // // // // // // //   const [user, setUser] = useState({ fullName: '', email: '', password: '' });

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const currentUser = auth().currentUser;
// // // // // // // // // //     if (currentUser) {
// // // // // // // // // //       const userId = currentUser.uid;
// // // // // // // // // //       const userRef = database().ref(`/users/${userId}`);

// // // // // // // // // //       // Realtime Listener to fetch user data
// // // // // // // // // //       userRef.on('value', snapshot => {
// // // // // // // // // //         if (snapshot.exists()) {
// // // // // // // // // //           setUser(snapshot.val());
// // // // // // // // // //         }
// // // // // // // // // //       });

// // // // // // // // // //       return () => userRef.off(); // Cleanup listener
// // // // // // // // // //     }
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // //       <Text style={styles.heading}>USER PROFILE</Text>

// // // // // // // // // //       <View style={styles.inputContainer}>
// // // // // // // // // //         <Text>Name:</Text>
// // // // // // // // // //         <TextInput value={user.fullName} editable={false} style={styles.input} />
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.inputContainer}>
// // // // // // // // // //         <Text>Email:</Text>
// // // // // // // // // //         <TextInput value={user.email} editable={false} style={styles.input} />
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.inputContainer}>
// // // // // // // // // //         <Text>Password:</Text>
// // // // // // // // // //         <TextInput value="********" editable={false} secureTextEntry style={styles.input} />
// // // // // // // // // //       </View>
// // // // // // // // // //     </View>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
// // // // // // // // // //   heading: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
// // // // // // // // // //   inputContainer: { backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10, marginBottom: 10 },
// // // // // // // // // //   input: { fontSize: 16, color: '#333' },
// // // // // // // // // // });

// // // // // // // // // // export default ProfileScreen;


// // // // // // // // // //check profile button works or not 



// // // // // // // // // import React from 'react';
// // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// // // // // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // // // // const HomeScreen = () => {
// // // // // // // // //   const navigation = useNavigation();

// // // // // // // // //   const styles = StyleSheet.create({
// // // // // // // // //     container: {
// // // // // // // // //       flex: 1,
// // // // // // // // //       backgroundColor: '#fff',
// // // // // // // // //     },
// // // // // // // // //     header: {
// // // // // // // // //       flexDirection: 'row',
// // // // // // // // //       justifyContent: 'space-between',
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //       padding: 20, // Reduced padding for better spacing
// // // // // // // // //       marginTop: 40,
// // // // // // // // //     },
// // // // // // // // //     headerText: {
// // // // // // // // //       fontSize: 20,
// // // // // // // // //       fontWeight: 'bold',
// // // // // // // // //       marginRight: 80,
// // // // // // // // //     },
// // // // // // // // //     logo: {
// // // // // // // // //       width: 100, // Adjust width as needed
// // // // // // // // //       height: 30, // Adjust height as needed
// // // // // // // // //       resizeMode: 'contain',
// // // // // // // // //     },
// // // // // // // // //     searchIcon: {
// // // // // // // // //       width: 24,
// // // // // // // // //       height: 24,
// // // // // // // // //       tintColor: 'gray',
// // // // // // // // //     },
// // // // // // // // //     recommendationsText: {
// // // // // // // // //       fontSize: 18,
// // // // // // // // //       fontWeight: '900',
// // // // // // // // //       marginTop: 20,
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //     },
// // // // // // // // //     recommendationsContainer: {
// // // // // // // // //       flexDirection: 'row',
// // // // // // // // //       justifyContent: 'space-around',
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //       marginTop: 10,
// // // // // // // // //     },
// // // // // // // // //     recommendationItem: {
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //     },
// // // // // // // // //     recommendationImage: {
// // // // // // // // //       width: 80,
// // // // // // // // //       height: 80,
// // // // // // // // //       borderRadius: 20,
// // // // // // // // //     },
// // // // // // // // //     whatDoYouWantText: {
// // // // // // // // //       fontSize: 18,
// // // // // // // // //       fontWeight: 'bold',
// // // // // // // // //       marginTop: 20,
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //     },
// // // // // // // // //     serviceOptionsContainer: {
// // // // // // // // //       flexDirection: 'row',
// // // // // // // // //       flexWrap: 'wrap',
// // // // // // // // //       justifyContent: 'space-around',
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //       marginTop: 10,
// // // // // // // // //     },
// // // // // // // // //     serviceOption: {
// // // // // // // // //       width: '45%',
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //       padding: 15,
// // // // // // // // //       marginBottom: 10,
// // // // // // // // //     },
// // // // // // // // //     serviceIcon: {
// // // // // // // // //       width: 40,
// // // // // // // // //       height: 40,
// // // // // // // // //       marginBottom: 5,
// // // // // // // // //     },
// // // // // // // // //     serviceOptionText: {
// // // // // // // // //       fontSize: 14,
// // // // // // // // //       textAlign: 'center',
// // // // // // // // //     },
// // // // // // // // //     salonsYouFollowText: {
// // // // // // // // //       fontSize: 18,
// // // // // // // // //       fontWeight: 'bold',
// // // // // // // // //       marginTop: 20,
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //     },
// // // // // // // // //     salonsContainer: {
// // // // // // // // //       flexDirection: 'row',
// // // // // // // // //       justifyContent: 'space-around',
// // // // // // // // //       marginHorizontal: 20,
// // // // // // // // //       marginTop: 10,
// // // // // // // // //     },
// // // // // // // // //     salonItem: {
// // // // // // // // //       width: 80,
// // // // // // // // //       height: 80,
// // // // // // // // //     },
// // // // // // // // //     salonImage: {
// // // // // // // // //       width: '100%',
// // // // // // // // //       height: '100%',
// // // // // // // // //       borderRadius: 5,
// // // // // // // // //     },
// // // // // // // // //     bottomNavigation: {
// // // // // // // // //       flexDirection: 'row',
// // // // // // // // //       justifyContent: 'space-around',
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //       position: 'absolute',
// // // // // // // // //       bottom: 0,
// // // // // // // // //       left: 0,
// // // // // // // // //       right: 0,
// // // // // // // // //       backgroundColor: 'white',
// // // // // // // // //       padding: 10,
// // // // // // // // //       borderTopWidth: 1,
// // // // // // // // //       borderTopColor: '#ccc',
// // // // // // // // //     },
// // // // // // // // //     bottomNavItem: {
// // // // // // // // //       alignItems: 'center',
// // // // // // // // //     },
// // // // // // // // //     bottomNavIcon: {
// // // // // // // // //       width: 24,
// // // // // // // // //       height: 24,
// // // // // // // // //     },
// // // // // // // // //     bottomNavText: {
// // // // // // // // //       fontSize: 12,
// // // // // // // // //     },
// // // // // // // // //   });

// // // // // // // // //   return (
// // // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // // //       <View style={styles.header}>
// // // // // // // // //         <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// // // // // // // // //         <Text style={styles.headerText}>Hello, Rahima</Text>
// // // // // // // // //         <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
// // // // // // // // //           <Image source={require('../../assets/images/user.png')} style={styles.searchIcon} />
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </View>

// // // // // // // // //       <Text style={styles.recommendationsText}>Recommendations for you</Text>
// // // // // // // // //       <View style={styles.recommendationsContainer}>
// // // // // // // // //         <View style={styles.recommendationItem}>
// // // // // // // // //           <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
// // // // // // // // //           <Text>Haircuts</Text>
// // // // // // // // //         </View>
// // // // // // // // //         <View style={styles.recommendationItem}>
// // // // // // // // //           <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} />
// // // // // // // // //           <Text>Facial</Text>
// // // // // // // // //         </View>
// // // // // // // // //         <View style={styles.recommendationItem}>
// // // // // // // // //           <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
// // // // // // // // //           <Text>Nail care</Text>
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// // // // // // // // //       <View style={styles.serviceOptionsContainer}>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/haircut.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Haircut</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/nails.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Nails</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/facial.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Facial</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/haircolor.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Coloring</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/spa.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Spa</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/waxing.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Waxing</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/makeup.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Makeup</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // // // // // //           <Image source={require('../../assets/images/massage.png')} style={styles.serviceIcon} />
// // // // // // // // //           <Text style={styles.serviceOptionText}>Massage</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </View>

// // // // // // // // //       <Text style={styles.salonsYouFollowText}></Text>
// // // // // // // // //       <View style={styles.salonsContainer}>
// // // // // // // // //         <View style={styles.salonItem}>
// // // // // // // // //           {/* <Image source={require('../../assets/images/salon1.jpg')} style={styles.salonImage} /> */}
// // // // // // // // //         </View>
// // // // // // // // //         <View style={styles.salonItem}>
// // // // // // // // //           {/* <Image source={require('../../assets/images/salon2.jpg')} style={styles.salonImage} /> */}
// // // // // // // // //         </View>
// // // // // // // // //         <View style={styles.salonItem}>
// // // // // // // // //           {/* <Image source={require('../../assets/images/salon3.jpg')} style={styles.salonImage} /> */}
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <View style={styles.bottomNavigation}>
// // // // // // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // // // // // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // // // // // // // //           <Text style={styles.bottomNavText}>Home</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // // // // // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // // // // // // // //           <Text style={styles.bottomNavText}>Salon</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // // // // // //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// // // // // // // // //           <Text style={styles.bottomNavText}>Booking</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // // // // // //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// // // // // // // // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // // // // // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // // // // // // // //           <Text style={styles.bottomNavText}>Profile</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </View>
// // // // // // // // //     </ScrollView>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default HomeScreen;



// // // // // // // // // UserProfile.js
// // // // // // // // // import React from 'react';
// // // // // // // // // import { View, Text, StyleSheet } from 'react-native';

// // // // // // // // // const UserProfile = () => {
// // // // // // // // //   return (
// // // // // // // // //     <View style={styles.container}>
// // // // // // // // //       <Text>User Profile Page</Text>
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //   },
// // // // // // // // // });

// // // // // // // // // export default UserProfile;



// // // // // // // // // fetching 
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// // // // // // // // import { getAuth } from "firebase/auth";
// // // // // // // // import { getDatabase, ref, onValue } from "firebase/database";
// // // // // // // // import { auth, db } from "../../firebaseConfig"; // Ensure Firebase is initialized

// // // // // // // // const UserProfile = () => {
// // // // // // // //   const [userData, setUserData] = useState(null); // State to store user data
// // // // // // // //   const [loading, setLoading] = useState(true); // State to handle loading

// // // // // // // //   useEffect(() => {
// // // // // // // //     const auth = getAuth();
// // // // // // // //     const user = auth.currentUser; // Get the currently logged-in user

// // // // // // // //     if (user) {
// // // // // // // //       const userId = user.uid; // Get the user's UID
// // // // // // // //       const userRef = ref(db, `users/${userId}`); // Reference to the user's data in Firebase

// // // // // // // //       // Fetch user data from Firebase
// // // // // // // //       onValue(userRef, (snapshot) => {
// // // // // // // //         const data = snapshot.val(); // Get the data
// // // // // // // //         if (data) {
// // // // // // // //           setUserData(data); // Store the data in state
// // // // // // // //         } else {
// // // // // // // //           console.log("No data found for this user.");
// // // // // // // //         }
// // // // // // // //         setLoading(false); // Stop loading
// // // // // // // //       });
// // // // // // // //     } else {
// // // // // // // //       console.log("No user is logged in.");
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   }, []);

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <View style={styles.loadingContainer}>
// // // // // // // //         <ActivityIndicator size="large" color="#0000ff" />
// // // // // // // //       </View>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       <Text style={styles.heading}>User Profile</Text>

// // // // // // // //       {userData ? (
// // // // // // // //         <View style={styles.profileInfo}>
// // // // // // // //           <Text style={styles.label}>Full Name:</Text>
// // // // // // // //           <Text style={styles.value}>{userData.fullName}</Text>

// // // // // // // //           <Text style={styles.label}>Email:</Text>
// // // // // // // //           <Text style={styles.value}>{userData.email}</Text>

// // // // // // // //           <Text style={styles.label}>Service Type:</Text>
// // // // // // // //           <Text style={styles.value}>{userData.serviceType}</Text>

// // // // // // // //           <Text style={styles.label}>Gender:</Text>
// // // // // // // //           <Text style={styles.value}>{userData.gender}</Text>

// // // // // // // //           <Text style={styles.label}>Address:</Text>
// // // // // // // //           <Text style={styles.value}>{userData.address}</Text>
// // // // // // // //         </View>
// // // // // // // //       ) : (
// // // // // // // //         <Text style={styles.noDataText}>No user data found.</Text>
// // // // // // // //       )}
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     padding: 20,
// // // // // // // //     backgroundColor: "#f8f8f8",
// // // // // // // //   },
// // // // // // // //   heading: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: "bold",
// // // // // // // //     marginBottom: 20,
// // // // // // // //     textAlign: "center",
// // // // // // // //   },
// // // // // // // //   profileInfo: {
// // // // // // // //     marginTop: 10,
// // // // // // // //   },
// // // // // // // //   label: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: "bold",
// // // // // // // //     marginTop: 10,
// // // // // // // //   },
// // // // // // // //   value: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     marginBottom: 10,
// // // // // // // //     color: "#555",
// // // // // // // //   },
// // // // // // // //   noDataText: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     textAlign: "center",
// // // // // // // //     marginTop: 20,
// // // // // // // //   },
// // // // // // // //   loadingContainer: {
// // // // // // // //     flex: 1,
// // // // // // // //     justifyContent: "center",
// // // // // // // //     alignItems: "center",
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default UserProfile;

// // // // // // // //testing 


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// // // // // // // import { getAuth } from "firebase/auth";
// // // // // // // import { getDatabase, ref, onValue } from "firebase/database";
// // // // // // // import { auth, db } from "../../firebaseConfig"; // Ensure Firebase is initialized

// // // // // // // const UserProfile = () => {
// // // // // // //   const [userData, setUserData] = useState(null); // State to store user data
// // // // // // //   const [loading, setLoading] = useState(true); // State to handle loading

// // // // // // //   useEffect(() => {
// // // // // // //     const auth = getAuth();
// // // // // // //     const user = auth.currentUser; // Get the currently logged-in user

// // // // // // //     if (user) {
// // // // // // //       const userId = user.uid; // Get the user's UID
// // // // // // //       const userRef = ref(db, `users/${userId}`); // Reference to the user's data in Firebase

// // // // // // //       // Fetch user data from Firebase
// // // // // // //       onValue(userRef, (snapshot) => {
// // // // // // //         const data = snapshot.val(); // Get the data
// // // // // // //         if (data) {
// // // // // // //           setUserData(data); // Store the data in state
// // // // // // //         } else {
// // // // // // //           console.log("No data found for this user.");
// // // // // // //         }
// // // // // // //         setLoading(false); // Stop loading
// // // // // // //       });
// // // // // // //     } else {
// // // // // // //       console.log("No user is logged in.");
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   }, []);

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <View style={styles.loadingContainer}>
// // // // // // //         <ActivityIndicator size="large" color="#0000ff" />
// // // // // // //       </View>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.heading}>User Profile</Text>

// // // // // // //       {userData ? (
// // // // // // //         <View style={styles.profileInfo}>
// // // // // // //           <Text style={styles.label}>Full Name:</Text>
// // // // // // //           <Text style={styles.value}>{userData.fullName}</Text>

// // // // // // //           <Text style={styles.label}>Email:</Text>
// // // // // // //           <Text style={styles.value}>{userData.email}</Text>

// // // // // // //           <Text style={styles.label}>Service Type:</Text>
// // // // // // //           <Text style={styles.value}>{userData.serviceType}</Text>

// // // // // // //           <Text style={styles.label}>Gender:</Text>
// // // // // // //           <Text style={styles.value}>{userData.gender}</Text>

// // // // // // //           <Text style={styles.label}>Address:</Text>
// // // // // // //           <Text style={styles.value}>{userData.address}</Text>
// // // // // // //         </View>
// // // // // // //       ) : (
// // // // // // //         <Text style={styles.noDataText}>No user data found.</Text>
// // // // // // //       )}
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: {
// // // // // // //     flex: 1,
// // // // // // //     padding: 20,
// // // // // // //     backgroundColor: "#f8f8f8",
// // // // // // //   },
// // // // // // //   heading: {
// // // // // // //     fontSize: 24,
// // // // // // //     fontWeight: "bold",
// // // // // // //     marginBottom: 20,
// // // // // // //     textAlign: "center",
// // // // // // //   },
// // // // // // //   profileInfo: {
// // // // // // //     marginTop: 10,
// // // // // // //     padding: 15,
// // // // // // //     backgroundColor: "#ffffff",
// // // // // // //     borderRadius: 10,
// // // // // // //     shadowColor: "#000",
// // // // // // //     shadowOffset: { width: 0, height: 2 },
// // // // // // //     shadowOpacity: 0.1,
// // // // // // //     shadowRadius: 4,
// // // // // // //     elevation: 3,
// // // // // // //   },
// // // // // // //   label: {
// // // // // // //     fontSize: 16,
// // // // // // //     fontWeight: "bold",
// // // // // // //     marginTop: 10,
// // // // // // //     color: "#333",
// // // // // // //   },
// // // // // // //   value: {
// // // // // // //     fontSize: 16,
// // // // // // //     marginBottom: 10,
// // // // // // //     color: "#555",
// // // // // // //   },
// // // // // // //   noDataText: {
// // // // // // //     fontSize: 16,
// // // // // // //     textAlign: "center",
// // // // // // //     marginTop: 20,
// // // // // // //     color: "#999",
// // // // // // //   },
// // // // // // //   loadingContainer: {
// // // // // // //     flex: 1,
// // // // // // //     justifyContent: "center",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // // });

// // // // // // // export default UserProfile;



// // // // // // //update styling


// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// // // // // // import { getAuth } from "firebase/auth";
// // // // // // import { getDatabase, ref, onValue } from "firebase/database";
// // // // // // import { auth, db } from "../../firebaseConfig";
// // // // // // import { FontAwesome } from '@expo/vector-icons';

// // // // // // const UserProfile = () => {
// // // // // //   const [userData, setUserData] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const auth = getAuth();
// // // // // //     const user = auth.currentUser;

// // // // // //     if (user) {
// // // // // //       const userId = user.uid;
// // // // // //       const userRef = ref(db, `users/${userId}`);

// // // // // //       onValue(userRef, (snapshot) => {
// // // // // //         const data = snapshot.val();
// // // // // //         if (data) {
// // // // // //           setUserData(data);
// // // // // //         } else {
// // // // // //           console.log("No data found for this user.");
// // // // // //         }
// // // // // //         setLoading(false);
// // // // // //       });
// // // // // //     } else {
// // // // // //       console.log("No user is logged in.");
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   }, []);

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <View style={styles.loadingContainer}>
// // // // // //         <ActivityIndicator size="large" color="#0000ff" />
// // // // // //       </View>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <View style={styles.header}>
// // // // // //         <Text style={styles.headerText}>User Profile</Text>
// // // // // //         <TouchableOpacity style={styles.editButton}>
// // // // // //           <FontAwesome name="pencil" size={20} color="white" />
// // // // // //         </TouchableOpacity>
// // // // // //       </View>
// // // // // //       <View style={styles.profileContainer}>
// // // // // //         {userData ? (
// // // // // //           <View style={styles.profileInfo}>
// // // // // //             <View style={styles.infoRow}>
// // // // // //               <FontAwesome name="user" size={20} color="#555" />
// // // // // //               <Text style={styles.value}>{userData.fullName}</Text>
// // // // // //             </View>

// // // // // //             <View style={styles.infoRow}>
// // // // // //               <FontAwesome name="envelope" size={20} color="#555" />
// // // // // //               <Text style={styles.value}>{userData.email}</Text>
// // // // // //             </View>

// // // // // //             <View style={styles.infoRow}>
// // // // // //               <FontAwesome name="briefcase" size={20} color="#555" />
// // // // // //               <Text style={styles.value}>{userData.serviceType}</Text>
// // // // // //             </View>

// // // // // //             <View style={styles.infoRow}>
// // // // // //               <FontAwesome name="venus-mars" size={20} color="#555" />
// // // // // //               <Text style={styles.value}>{userData.gender}</Text>
// // // // // //             </View>

// // // // // //             <View style={styles.infoRow}>
// // // // // //               <FontAwesome name="map-marker" size={20} color="#555" />
// // // // // //               <Text style={styles.value}>{userData.address}</Text>
// // // // // //             </View>
// // // // // //           </View>
// // // // // //         ) : (
// // // // // //           <Text style={styles.noDataText}>No user data found.</Text>
// // // // // //         )}
// // // // // //       </View>
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     backgroundColor: "#f8f8f8",
// // // // // //   },
// // // // // //   header: {
// // // // // //     backgroundColor: "#2E8B57",
// // // // // //     padding: 20,
// // // // // //     flexDirection: "row",
// // // // // //     justifyContent: "space-between",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // //   headerText: {
// // // // // //     fontSize: 20,
// // // // // //     fontWeight: "bold",
// // // // // //     color: "white",
// // // // // //   },
// // // // // //   editButton: {
// // // // // //     padding: 10,
// // // // // //   },
// // // // // //   profileContainer: {
// // // // // //     margin: 20,
// // // // // //     padding: 20,
// // // // // //     backgroundColor: "#ffffff",
// // // // // //     borderRadius: 10,
// // // // // //     shadowColor: "#000",
// // // // // //     shadowOffset: { width: 0, height: 2 },
// // // // // //     shadowOpacity: 0.1,
// // // // // //     shadowRadius: 4,
// // // // // //     elevation: 3,
// // // // // //   },
// // // // // //   profileInfo: {
// // // // // //     marginTop: 10,
// // // // // //   },
// // // // // //   infoRow: {
// // // // // //     flexDirection: "row",
// // // // // //     alignItems: "center",
// // // // // //     marginBottom: 15,
// // // // // //   },
// // // // // //   value: {
// // // // // //     fontSize: 16,
// // // // // //     marginLeft: 10,
// // // // // //     color: "#555",
// // // // // //   },
// // // // // //   noDataText: {
// // // // // //     fontSize: 16,
// // // // // //     textAlign: "center",
// // // // // //     marginTop: 20,
// // // // // //     color: "#999",
// // // // // //   },
// // // // // //   loadingContainer: {
// // // // // //     flex: 1,
// // // // // //     justifyContent: "center",
// // // // // //     alignItems: "center",
// // // // // //   },
// // // // // // });

// // // // // // export default UserProfile;


// // // // // //all good just  update the styling 


// // // // // import React, { useEffect, useState } from "react";
// // // // // import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// // // // // import { getAuth } from "firebase/auth";
// // // // // import { getDatabase, ref, onValue } from "firebase/database";
// // // // // import { auth, db } from "../../firebaseConfig";
// // // // // import { FontAwesome } from '@expo/vector-icons';

// // // // // const UserProfile = () => {
// // // // //   const [userData, setUserData] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const auth = getAuth();
// // // // //     const user = auth.currentUser;

// // // // //     if (user) {
// // // // //       const userId = user.uid;
// // // // //       const userRef = ref(db, `users/${userId}`);

// // // // //       onValue(userRef, (snapshot) => {
// // // // //         const data = snapshot.val();
// // // // //         if (data) {
// // // // //           setUserData(data);
// // // // //         } else {
// // // // //           console.log("No data found for this user.");
// // // // //         }
// // // // //         setLoading(false);
// // // // //       });
// // // // //     } else {
// // // // //       console.log("No user is logged in.");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }, []);

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <View style={styles.loadingContainer}>
// // // // //         <ActivityIndicator size="large" color="#0000ff" />
// // // // //       </View>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <View style={styles.header}>
// // // // //         <Text style={styles.headerText}>User Profile</Text>
// // // // //         <TouchableOpacity style={styles.editButton}>
// // // // //           <FontAwesome name="pencil" size={20} color="white" />
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //       <View style={styles.profileContainer}>
// // // // //         {userData ? (
// // // // //           <View style={styles.profileInfo}>
// // // // //             <View style={styles.infoField}>
// // // // //               <Text style={styles.label}>Full Name</Text>
// // // // //               <View style={styles.infoRow}>
// // // // //                 <FontAwesome name="user" size={20} color="#555" />
// // // // //                 <Text style={styles.value}>{userData.fullName}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <View style={styles.infoField}>
// // // // //               <Text style={styles.label}>Email</Text>
// // // // //               <View style={styles.infoRow}>
// // // // //                 <FontAwesome name="envelope" size={20} color="#555" />
// // // // //                 <Text style={styles.value}>{userData.email}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <View style={styles.infoField}>
// // // // //               <Text style={styles.label}>Service Type</Text>
// // // // //               <View style={styles.infoRow}>
// // // // //                 <FontAwesome name="briefcase" size={20} color="#555" />
// // // // //                 <Text style={styles.value}>{userData.serviceType}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <View style={styles.infoField}>
// // // // //               <Text style={styles.label}>Gender</Text>
// // // // //               <View style={styles.infoRow}>
// // // // //                 <FontAwesome name="venus-mars" size={20} color="#555" />
// // // // //                 <Text style={styles.value}>{userData.gender}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <View style={styles.infoField}>
// // // // //               <Text style={styles.label}>Address</Text>
// // // // //               <View style={styles.infoRow}>
// // // // //                 <FontAwesome name="map-marker" size={20} color="#555" />
// // // // //                 <Text style={styles.value}>{userData.address}</Text>
// // // // //               </View>
// // // // //             </View>
// // // // //           </View>
// // // // //         ) : (
// // // // //           <Text style={styles.noDataText}>No user data found.</Text>
// // // // //         )}
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#f8f8f8",
// // // // //   },
// // // // //   header: {
// // // // //     backgroundColor: "#2E8B57",
// // // // //     padding: 20,
// // // // //     flexDirection: "row",
// // // // //     justifyContent: "space-between",
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   headerText: {
// // // // //     fontSize: 20,
// // // // //     fontWeight: "bold",
// // // // //     color: "white",
// // // // //     justifyContent: "center",
// // // // //     textAlign: "center"
// // // // //   },
// // // // //   editButton: {
// // // // //     padding: 10,
// // // // //   },
// // // // //   profileContainer: {
// // // // //     margin: 20,
// // // // //     padding: 20,
// // // // //     backgroundColor: "#ffffff",
// // // // //     borderRadius: 10,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 3,
// // // // //   },
// // // // //   profileInfo: {
// // // // //     marginTop: 10,
// // // // //   },
// // // // //   infoField: {
// // // // //     backgroundColor: "#e0e0e0",
// // // // //     padding: 10,
// // // // //     borderRadius: 8,
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   label: {
// // // // //     fontSize: 14,
// // // // //     fontWeight: "bold",
// // // // //     marginBottom: 5,
// // // // //     color: "#333",
// // // // //   },
// // // // //   infoRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   value: {
// // // // //     fontSize: 16,
// // // // //     marginLeft: 10,
// // // // //     color: "#555",
// // // // //   },
// // // // //   noDataText: {
// // // // //     fontSize: 16,
// // // // //     textAlign: "center",
// // // // //     marginTop: 20,
// // // // //     color: "#999",
// // // // //   },
// // // // //   loadingContainer: {
// // // // //     flex: 1,
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //   },
// // // // // });

// // // // // export default UserProfile;

// // // // //fetch perfectly 
// // // // //now make it editable 


// // // // import React, { useEffect, useState } from "react";
// // // // import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// // // // import { getAuth } from "firebase/auth";
// // // // import { getDatabase, ref, get, update } from "firebase/database";
// // // // import { auth, db } from "../../firebaseConfig";
// // // // import { FontAwesome } from '@expo/vector-icons';

// // // // const UserProfile = () => {
// // // //   const [userData, setUserData] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editedData, setEditedData] = useState({});

// // // //   useEffect(() => {
// // // //     const fetchUserData = async () => {
// // // //       const user = auth.currentUser;
// // // //       if (user) {
// // // //         const userRef = ref(db, `users/${user.uid}`);
// // // //         try {
// // // //           const snapshot = await get(userRef);
// // // //           if (snapshot.exists()) {
// // // //             setUserData(snapshot.val());
// // // //             setEditedData(snapshot.val());
// // // //           } else {
// // // //             console.log("No user data found.");
// // // //           }
// // // //         } catch (error) {
// // // //           console.error("Error fetching user data:", error);
// // // //         }
// // // //       }
// // // //       setLoading(false);
// // // //     };

// // // //     fetchUserData();
// // // //   }, []);

// // // //   const handleEdit = () => {
// // // //     setIsEditing(true);
// // // //   };

// // // //   const handleSave = async () => {
// // // //     const user = auth.currentUser;
// // // //     if (user) {
// // // //       const userRef = ref(db, `users/${user.uid}`);
// // // //       try {
// // // //         await update(userRef, editedData);
// // // //         setUserData(editedData);
// // // //         setIsEditing(false);
// // // //       } catch (error) {
// // // //         console.error("Error updating user data:", error);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleChange = (key, value) => {
// // // //     setEditedData({ ...editedData, [key]: value });
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <View style={styles.loadingContainer}>
// // // //         <ActivityIndicator size="large" color="#0000ff" />
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.header}>
// // // //         <Text style={styles.headerText}>User Profile</Text>
// // // //         <TouchableOpacity style={styles.editButton} onPress={isEditing ? handleSave : handleEdit}>
// // // //           <FontAwesome name={isEditing ? "save" : "pencil"} size={20} color="white" />
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //       <View style={styles.profileContainer}>
// // // //         {userData ? (
// // // //           <View style={styles.profileInfo}>
// // // //             {["fullName", "email", "serviceType", "gender", "address"].map((field, index) => (
// // // //               <View key={index} style={styles.infoField}>
// // // //                 <Text style={styles.label}>{field.replace(/([A-Z])/g, " $1")}</Text>
// // // //                 <View style={styles.infoRow}>
// // // //                   <FontAwesome name={getIcon(field)} size={20} color="#555" />
// // // //                   {isEditing ? (
// // // //                     <TextInput
// // // //                       style={styles.input}
// // // //                       value={editedData[field]}
// // // //                       onChangeText={(text) => handleChange(field, text)}
// // // //                     />
// // // //                   ) : (
// // // //                     <Text style={styles.value}>{userData[field]}</Text>
// // // //                   )}
// // // //                 </View>
// // // //               </View>
// // // //             ))}
// // // //           </View>
// // // //         ) : (
// // // //           <Text style={styles.noDataText}>No user data found.</Text>
// // // //         )}
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // // Function to get icons based on field type
// // // // const getIcon = (field) => {
// // // //   const icons = {
// // // //     fullName: "user",
// // // //     email: "envelope",
// // // //     serviceType: "briefcase",
// // // //     gender: "venus-mars",
// // // //     address: "map-marker",
// // // //   };
// // // //   return icons[field] || "question-circle";
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#f8f8f8",
// // // //   },
// // // //   header: {
// // // //     backgroundColor: "#2E8B57",
// // // //     padding: 20,
// // // //     flexDirection: "row",
// // // //     justifyContent: "space-between",
// // // //     alignItems: "center",
// // // //   },
// // // //   headerText: {
// // // //     fontSize: 20,
// // // //     fontWeight: "bold",
// // // //     color: "white",
// // // //     textAlign: "center",
// // // //   },
// // // //   editButton: {
// // // //     padding: 10,
// // // //   },
// // // //   profileContainer: {
// // // //     margin: 20,
// // // //     padding: 20,
// // // //     backgroundColor: "#ffffff",
// // // //     borderRadius: 10,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     elevation: 3,
// // // //   },
// // // //   profileInfo: {
// // // //     marginTop: 10,
// // // //   },
// // // //   infoField: {
// // // //     backgroundColor: "#e0e0e0",
// // // //     padding: 10,
// // // //     borderRadius: 8,
// // // //     marginBottom: 15,
// // // //   },
// // // //   label: {
// // // //     fontSize: 14,
// // // //     fontWeight: "bold",
// // // //     marginBottom: 5,
// // // //     color: "#333",
// // // //   },
// // // //   infoRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //   },
// // // //   value: {
// // // //     fontSize: 16,
// // // //     marginLeft: 10,
// // // //     color: "#555",
// // // //   },
// // // //   input: {
// // // //     fontSize: 16,
// // // //     marginLeft: 10,
// // // //     color: "#000",
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: "#555",
// // // //     flex: 1,
// // // //   },
// // // //   noDataText: {
// // // //     fontSize: 16,
// // // //     textAlign: "center",
// // // //     marginTop: 20,
// // // //     color: "#999",
// // // //   },
// // // //   loadingContainer: {
// // // //     flex: 1,
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //   },
// // // // });

// // // // export default UserProfile;

// // // // works well 
// // // //add save button 



// // // import React, { useEffect, useState } from "react";
// // // import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// // // import { getAuth } from "firebase/auth";
// // // import { getDatabase, ref, get, update } from "firebase/database";
// // // import { auth, db } from "../../firebaseConfig";
// // // import { FontAwesome } from '@expo/vector-icons';

// // // const UserProfile = () => {
// // //   const [userData, setUserData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [editedData, setEditedData] = useState({});

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       const user = auth.currentUser;
// // //       if (user) {
// // //         const userRef = ref(db, `users/${user.uid}`);
// // //         try {
// // //           const snapshot = await get(userRef);
// // //           if (snapshot.exists()) {
// // //             setUserData(snapshot.val());
// // //             setEditedData(snapshot.val());
// // //           } else {
// // //             console.log("No user data found.");
// // //           }
// // //         } catch (error) {
// // //           console.error("Error fetching user data:", error);
// // //         }
// // //       }
// // //       setLoading(false);
// // //     };

// // //     fetchUserData();
// // //   }, []);

// // //   const handleEdit = () => {
// // //     setIsEditing(true);
// // //   };

// // //   const handleSave = async () => {
// // //     const user = auth.currentUser;
// // //     if (user) {
// // //       const userRef = ref(db, `users/${user.uid}`);
// // //       try {
// // //         await update(userRef, editedData);
// // //         setUserData(editedData);
// // //         setIsEditing(false);
// // //       } catch (error) {
// // //         console.error("Error updating user data:", error);
// // //       }
// // //     }
// // //   };

// // //   const handleChange = (key, value) => {
// // //     setEditedData({ ...editedData, [key]: value });
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <View style={styles.loadingContainer}>
// // //         <ActivityIndicator size="large" color="#0000ff" />
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <Text style={styles.headerText}>User Profile</Text>
// // //         {!isEditing && (
// // //           <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
// // //             <FontAwesome name="pencil" size={20} color="white" />
// // //           </TouchableOpacity>
// // //         )}
// // //       </View>

// // //       <View style={styles.profileContainer}>
// // //         {userData ? (
// // //           <View style={styles.profileInfo}>
// // //             {["fullName", "email", "serviceType", "gender", "address"].map((field, index) => (
// // //               <View key={index} style={styles.infoField}>
// // //                 <Text style={styles.label}>{field.replace(/([A-Z])/g, " $1")}</Text>
// // //                 <View style={styles.infoRow}>
// // //                   <FontAwesome name={getIcon(field)} size={20} color="#555" />
// // //                   {isEditing ? (
// // //                     <TextInput
// // //                       style={styles.input}
// // //                       value={editedData[field]}
// // //                       onChangeText={(text) => handleChange(field, text)}
// // //                     />
// // //                   ) : (
// // //                     <Text style={styles.value}>{userData[field]}</Text>
// // //                   )}
// // //                 </View>
// // //               </View>
// // //             ))}
// // //           </View>
// // //         ) : (
// // //           <Text style={styles.noDataText}>No user data found.</Text>
// // //         )}

// // //         {/* Save button BELOW the form */}
// // //         {isEditing && (
// // //           <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
// // //             <Text style={styles.saveButtonText}>Save</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // // Function to get icons based on field type
// // // const getIcon = (field) => {
// // //   const icons = {
// // //     fullName: "user",
// // //     email: "envelope",
// // //     serviceType: "briefcase",
// // //     gender: "venus-mars",
// // //     address: "map-marker",
// // //   };
// // //   return icons[field] || "question-circle";
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#f8f8f8",
// // //   },
// // //   header: {
// // //     backgroundColor: "#2E8B57",
// // //     padding: 20,
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //   },
// // //   headerText: {
// // //     fontSize: 20,
// // //     fontWeight: "bold",
// // //     color: "white",
// // //     textAlign: "center",
// // //   },
// // //   editButton: {
// // //     padding: 10,
// // //   },
// // //   profileContainer: {
// // //     margin: 20,
// // //     padding: 20,
// // //     backgroundColor: "#ffffff",
// // //     borderRadius: 10,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //   },
// // //   profileInfo: {
// // //     marginTop: 10,
// // //   },
// // //   infoField: {
// // //     backgroundColor: "#e0e0e0",
// // //     padding: 10,
// // //     borderRadius: 8,
// // //     marginBottom: 15,
// // //   },
// // //   label: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     marginBottom: 5,
// // //     color: "#333",
// // //   },
// // //   infoRow: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //   },
// // //   value: {
// // //     fontSize: 16,
// // //     marginLeft: 10,
// // //     color: "#555",
// // //   },
// // //   input: {
// // //     fontSize: 16,
// // //     marginLeft: 10,
// // //     color: "#000",
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: "#555",
// // //     flex: 1,
// // //   },
// // //   noDataText: {
// // //     fontSize: 16,
// // //     textAlign: "center",
// // //     marginTop: 20,
// // //     color: "#999",
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //   },
// // //   saveButton: {
// // //     backgroundColor: "#2E8B57",
// // //     padding: 12,
// // //     borderRadius: 8,
// // //     marginTop: 20,
// // //     alignItems: "center",
// // //   },
// // //   saveButtonText: {
// // //     fontSize: 16,
// // //     fontWeight: "bold",
// // //     color: "white",
// // //   },
// // // });

// // // export default UserProfile;


// // // added save button and works well 
// // import React, { useEffect, useState } from "react";
// // import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// // import { getAuth } from "firebase/auth";
// // import { getDatabase, ref, get, update } from "firebase/database";
// // import { auth, db } from "../../firebaseConfig";
// // import { FontAwesome } from '@expo/vector-icons';

// // const UserProfile = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editedData, setEditedData] = useState({});

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const user = auth.currentUser;
// //       if (user) {
// //         const userRef = ref(db, `users/${user.uid}`);
// //         try {
// //           const snapshot = await get(userRef);
// //           if (snapshot.exists()) {
// //             setUserData(snapshot.val());
// //             setEditedData(snapshot.val());
// //           } else {
// //             console.log("No user data found.");
// //           }
// //         } catch (error) {
// //           console.error("Error fetching user data:", error);
// //         }
// //       }
// //       setLoading(false);
// //     };

// //     fetchUserData();
// //   }, []);

// //   const handleEdit = () => {
// //     setIsEditing(true);
// //   };

// //   const handleSave = async () => {
// //     const user = auth.currentUser;
// //     if (user) {
// //       const userRef = ref(db, `users/${user.uid}`);
// //       try {
// //         await update(userRef, editedData);
// //         setUserData(editedData);
// //         setIsEditing(false);
// //       } catch (error) {
// //         console.error("Error updating user data:", error);
// //       }
// //     }
// //   };

// //   const handleCancel = () => {
// //     setEditedData(userData); // Reset to original data
// //     setIsEditing(false);
// //   };

// //   const handleChange = (key, value) => {
// //     setEditedData({ ...editedData, [key]: value });
// //   };

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size="large" color="#0000ff" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>User Profile</Text>
// //         {!isEditing && (
// //           <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
// //             <FontAwesome name="pencil" size={20} color="white" />
// //           </TouchableOpacity>
// //         )}
// //       </View>

// //       <View style={styles.profileContainer}>
// //         {userData ? (
// //           <View style={styles.profileInfo}>
// //             {["fullName", "email", "serviceType", "gender", "address"].map((field, index) => (
// //               <View key={index} style={styles.infoField}>
// //                 <Text style={styles.label}>{field.replace(/([A-Z])/g, " $1")}</Text>
// //                 <View style={styles.infoRow}>
// //                   <FontAwesome name={getIcon(field)} size={20} color="#555" />
// //                   {isEditing ? (
// //                     <TextInput
// //                       style={styles.input}
// //                       value={editedData[field]}
// //                       onChangeText={(text) => handleChange(field, text)}
// //                     />
// //                   ) : (
// //                     <Text style={styles.value}>{userData[field]}</Text>
// //                   )}
// //                 </View>
// //               </View>
// //             ))}
// //           </View>
// //         ) : (
// //           <Text style={styles.noDataText}>No user data found.</Text>
// //         )}

// //         {/* Save & Cancel Buttons BELOW the form */}
// //         {isEditing && (
// //           <View style={styles.buttonContainer}>
// //             <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
// //               <Text style={styles.saveButtonText}>Save</Text>
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
// //               <Text style={styles.cancelButtonText}>Cancel</Text>
// //             </TouchableOpacity>
// //           </View>
// //         )}
// //       </View>
// //     </View>
// //   );
// // };

// // // Function to get icons based on field type
// // const getIcon = (field) => {
// //   const icons = {
// //     fullName: "user",
// //     email: "envelope",
// //     serviceType: "briefcase",
// //     gender: "venus-mars",
// //     address: "map-marker",
// //   };
// //   return icons[field] || "question-circle";
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f8f8f8",
// //   },
// //   header: {
// //     backgroundColor: "#2E8B57",
// //     padding: 20,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   headerText: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     color: "white",
// //     textAlign: "center",
// //   },
// //   editButton: {
// //     padding: 10,
// //   },
// //   profileContainer: {
// //     margin: 20,
// //     padding: 20,
// //     backgroundColor: "#ffffff",
// //     borderRadius: 10,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   profileInfo: {
// //     marginTop: 10,
// //   },
// //   infoField: {
// //     backgroundColor: "#e0e0e0",
// //     padding: 10,
// //     borderRadius: 8,
// //     marginBottom: 15,
// //   },
// //   label: {
// //     fontSize: 14,
// //     fontWeight: "bold",
// //     marginBottom: 5,
// //     color: "#333",
// //   },
// //   infoRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //   },
// //   value: {
// //     fontSize: 16,
// //     marginLeft: 10,
// //     color: "#555",
// //   },
// //   input: {
// //     fontSize: 16,
// //     marginLeft: 10,
// //     color: "#000",
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#555",
// //     flex: 1,
// //   },
// //   noDataText: {
// //     fontSize: 16,
// //     textAlign: "center",
// //     marginTop: 20,
// //     color: "#999",
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   buttonContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginTop: 20,
// //   },
// //   saveButton: {
// //     backgroundColor: "#2E8B57",
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginRight: 10,
// //     alignItems: "center",
// //   },
// //   saveButtonText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "white",
// //   },
// //   cancelButton: {
// //     backgroundColor: "#FF6347",
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     alignItems: "center",
// //   },
// //   cancelButtonText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "white",
// //   },
// // });

// // export default UserProfile;



// // fetch paswrd from the auth 


// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
// import { getAuth, updatePassword } from "firebase/auth";
// import { getDatabase, ref, get, update } from "firebase/database";
// import { auth, db } from "../../firebaseConfig";
// import { FontAwesome } from '@expo/vector-icons';

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({});
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const userRef = ref(db, `users/${user.uid}`);
//         try {
//           const snapshot = await get(userRef);
//           if (snapshot.exists()) {
//             setUserData(snapshot.val());
//             setEditedData(snapshot.val());
//           } else {
//             console.log("No user data found.");
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
//       setLoading(false);
//     };

//     fetchUserData();
//   }, []);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = async () => {
//     const user = auth.currentUser;
//     if (user) {
//       const userRef = ref(db, `users/${user.uid}`);
//       try {
//         // Save user data (excluding password for now)
//         await update(userRef, editedData);
//         setUserData(editedData);

//         // Check if password has been changed and update
//         if (password && password === confirmPassword) {
//           await updatePassword(user, password);
//           setPassword('');
//           setConfirmPassword('');
//           setPasswordError('');
//         } else if (password && password !== confirmPassword) {
//           setPasswordError('Passwords do not match.');
//           return;
//         }

//         setIsEditing(false);
//       } catch (error) {
//         console.error("Error updating user data:", error);
//       }
//     }
//   };

//   const handleCancel = () => {
//     setEditedData(userData); // Reset to original data
//     setIsEditing(false);
//     setPassword('');
//     setConfirmPassword('');
//     setPasswordError('');
//   };

//   const handleChange = (key, value) => {
//     setEditedData({ ...editedData, [key]: value });
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>User Profile</Text>
//         {!isEditing && (
//           <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
//             <FontAwesome name="pencil" size={20} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>

//       <View style={styles.profileContainer}>
//         {userData ? (
//           <View style={styles.profileInfo}>
//             {["fullName", "email", "serviceType", "gender", "address"].map((field, index) => (
//               <View key={index} style={styles.infoField}>
//                 <Text style={styles.label}>{field.replace(/([A-Z])/g, " $1")}</Text>
//                 <View style={styles.infoRow}>
//                   <FontAwesome name={getIcon(field)} size={20} color="#555" />
//                   {isEditing ? (
//                     <TextInput
//                       style={styles.input}
//                       value={editedData[field]}
//                       onChangeText={(text) => handleChange(field, text)}
//                     />
//                   ) : (
//                     <Text style={styles.value}>{userData[field]}</Text>
//                   )}
//                 </View>
//               </View>
//             ))}

//             {/* Password fields */}
//             {isEditing && (
//               <>
//                 <View style={styles.infoField}>
//                   <Text style={styles.label}>Password</Text>
//                   <TextInput
//                     style={styles.input}
//                     secureTextEntry
//                     placeholder="Enter new password"
//                     value={password}
//                     onChangeText={setPassword}
//                   />
//                 </View>

//                 <View style={styles.infoField}>
//                   <Text style={styles.label}>Confirm Password</Text>
//                   <TextInput
//                     style={styles.input}
//                     secureTextEntry
//                     placeholder="Confirm new password"
//                     value={confirmPassword}
//                     onChangeText={setConfirmPassword}
//                   />
//                   {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
//                 </View>
//               </>
//             )}
//           </View>
//         ) : (
//           <Text style={styles.noDataText}>No user data found.</Text>
//         )}

//         {/* Save & Cancel Buttons BELOW the form */}
//         {isEditing && (
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//               <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//               <Text style={styles.cancelButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// // Function to get icons based on field type
// const getIcon = (field) => {
//   const icons = {
//     fullName: "user",
//     email: "envelope",
//     serviceType: "briefcase",
//     gender: "venus-mars",
//     address: "map-marker",
//   };
//   return icons[field] || "question-circle";
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   header: {
//     backgroundColor: "#2E8B57",
//     padding: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//   },
//   editButton: {
//     padding: 10,
//   },
//   profileContainer: {
//     margin: 20,
//     padding: 20,
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   profileInfo: {
//     marginTop: 10,
//   },
//   infoField: {
//     backgroundColor: "#e0e0e0",
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//   },
//   infoRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   value: {
//     fontSize: 16,
//     marginLeft: 10,
//     color: "#555",
//   },
//   input: {
//     fontSize: 16,
//     marginLeft: 10,
//     color: "#000",
//     borderBottomWidth: 1,
//     borderBottomColor: "#555",
//     flex: 1,
//   },
//   noDataText: {
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 20,
//     color: "#999",
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   saveButton: {
//     backgroundColor: "#2E8B57",
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginRight: 10,
//     alignItems: "center",
//   },
//   saveButtonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   cancelButton: {
//     backgroundColor: "#FF6347",
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     alignItems: "center",
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   errorText: {
//     color: "red",
//     fontSize: 12,
//     marginTop: 5,
//   },
// });

// export default UserProfile;


//bottom navbar


import React, { useEffect, useState } from "react";
import { 
  View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity, Image 
} from "react-native";
import { getAuth, updatePassword } from "firebase/auth";
import { getDatabase, ref, get, update } from "firebase/database";
import { auth, db } from "../../firebaseConfig";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        try {
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            setUserData(snapshot.val());
            setEditedData(snapshot.val());
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

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, `users/${user.uid}`);
      try {
        await update(userRef, editedData);
        setUserData(editedData);

        if (password && password === confirmPassword) {
          await updatePassword(user, password);
          setPassword('');
          setConfirmPassword('');
          setPasswordError('');
        } else if (password && password !== confirmPassword) {
          setPasswordError('Passwords do not match.');
          return;
        }

        setIsEditing(false);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Profile</Text>
        {!isEditing && (
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <FontAwesome name="pencil" size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.profileContainer}>
        {userData ? (
          <View style={styles.profileInfo}>
            {["fullName", "email", "serviceType", "gender", "address"].map((field, index) => (
              <View key={index} style={styles.infoField}>
                <Text style={styles.label}>{field.replace(/([A-Z])/g, " $1")}</Text>
                <View style={styles.infoRow}>
                  <FontAwesome name={getIcon(field)} size={20} color="#555" />
                  {isEditing ? (
                    <TextInput
                      style={styles.input}
                      value={editedData[field]}
                      onChangeText={(text) => setEditedData({ ...editedData, [field]: text })}
                    />
                  ) : (
                    <Text style={styles.value}>{userData[field]}</Text>
                  )}
                </View>
              </View>
            ))}

            {/* Password fields */}
            {isEditing && (
              <>
                <View style={styles.infoField}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Enter new password"
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>

                <View style={styles.infoField}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
                </View>
              </>
            )}
          </View>
        ) : (
          <Text style={styles.noDataText}>No user data found.</Text>
        )}
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
          <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Salon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('BookingScreen')}>
          <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
          <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>AI Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
          <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Function to get icons based on field type
const getIcon = (field) => {
  const icons = {
    fullName: "user",
    email: "envelope",
    serviceType: "briefcase",
    gender: "venus-mars",
    address: "map-marker",
  };
  return icons[field] || "question-circle";
};

// **Added the missing styles object**
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: { backgroundColor: "#2E8B57", padding: 20, alignItems: "center" },
  headerText: { fontSize: 20, fontWeight: "bold", color: "white" },
  profileContainer: { margin: 20, padding: 20, backgroundColor: "#fff", borderRadius: 10, elevation: 3 },
  infoField: { marginBottom: 15 },
  label: { fontSize: 14, fontWeight: "bold", color: "#333" },
  input: { fontSize: 16, borderBottomWidth: 1, borderBottomColor: "#555" },
  bottomNavigation: { position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: "white", paddingVertical: 10, elevation: 10 },
  bottomNavItem: { alignItems: 'center' },
  bottomNavIcon: { width: 24, height: 24, marginBottom: 3 },
  bottomNavText: { fontSize: 12, color: '#333' },
});

export default UserProfile;
