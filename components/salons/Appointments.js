// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
// import firestore from "@react-native-firebase/firestore";
// import { db } from "../../firebaseConfig"; // ✅ Use Firebase Realtime Database from config
// import auth from "@react-native-firebase/auth";
// import sendEmail from "./sendEmail"; // Custom function for sending email
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// const Tab = createMaterialTopTabNavigator();

// const Appointments = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Upcoming" component={UpcomingAppointments} />
//       <Tab.Screen name="History" component={HistoryAppointments} />
//     </Tab.Navigator>
//   );
// };

// const UpcomingAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const salonId = auth().currentUser?.uid;

//   useEffect(() => {
//     const unsubscribe = firestore()
//       .collection("bookings")
//       .where("salonId", "==", salonId)
//       .where("status", "==", "pending")
//       .onSnapshot((querySnapshot) => {
//         const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setAppointments(data);
//       });

//     return () => unsubscribe();
//   }, []);

//   const acceptAppointment = async (appointment) => {
//     try {
//       // Fetch user email from Realtime Database
//       const userSnapshot = await db.ref(`/users/${appointment.userId}`).once("value"); // ✅ Updated to use imported db
//       const userEmail = userSnapshot.val()?.email;

//       if (userEmail) {
//         await firestore().collection("bookings").doc(appointment.id).update({ status: "accepted" });
//         sendEmail(userEmail, "Appointment Confirmed", `Your appointment at ${appointment.salonName} for ${appointment.serviceName} is confirmed.`);
//         Alert.alert("Success", "Appointment accepted and email sent.");
//       } else {
//         Alert.alert("Error", "User email not found.");
//       }
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <FlatList
//       data={appointments}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View style={{ padding: 10, margin: 10, backgroundColor: "#00665C", borderRadius: 10 }}>
//           <Text style={{ color: "white" }}>{item.serviceName} - {item.time}</Text>
//           <TouchableOpacity onPress={() => acceptAppointment(item)} style={{ backgroundColor: "white", padding: 5, marginTop: 5 }}>
//             <Text style={{ color: "#00665C" }}>Accept</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     />
//   );
// };

// const HistoryAppointments = () => {
//   const [history, setHistory] = useState([]);
//   const salonId = auth().currentUser?.uid;

//   useEffect(() => {
//     const unsubscribe = firestore()
//       .collection("bookings")
//       .where("salonId", "==", salonId)
//       .where("status", "==", "accepted")
//       .onSnapshot((querySnapshot) => {
//         const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setHistory(data);
//       });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <FlatList
//       data={history}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <View style={{ padding: 10, margin: 10, backgroundColor: "#00665C", borderRadius: 10 }}>
//           <Text style={{ color: "white" }}>{item.serviceName} - {item.time}</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default Appointments;
