// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   FlatList,
// //   StyleSheet,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";
// // import { getDatabase, ref, onValue, update } from "firebase/database";
// // import { getAuth } from "firebase/auth";
// // // import { sendEmail } from "../../utils/ emailService.js";
// // import { sendEmail } from "../../utils/emailservice.js";
// // // Function for sending emails
// // import { useNavigation } from "@react-navigation/native";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [salon, setSalon] = useState(null);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming"); // "upcoming" | "history"

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     // Fetch Salon Data of Logged-in Salon Owner
// //     const salonRef = ref(db, `salons/${user.uid}`);
// //     onValue(salonRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const salonData = snapshot.val();
// //         setSalon(salonData);
// //       } else {
// //         Alert.alert("Error", "Salon data not found.");
// //       }
// //     });
// //   }, [user]);

// //   useEffect(() => {
// //     if (!salon) return;

// //     // Fetch Appointments Related to Logged-in Salon
// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         const salonAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.salonId === salon.id);

// //         setAppointments(salonAppointments);
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [salon]);

// //   const handleAppointmentStatus = async (appointment, status) => {
// //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// //     const updatedData = { status };

// //     try {
// //       await update(appointmentRef, updatedData);

// //       // Send email notification
// //       const message =
// //         status === "accepted"
// //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;

// //       await sendEmail({
// //         to: appointment.userEmail,
// //         subject: `Appointment ${status}`,
// //         message: message,
// //       });

// //       Alert.alert("Success", `Appointment ${status}`);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to update appointment status.");
// //       console.error(error);
// //     }
// //   };

// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>User:</Text> {item.userEmail}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Service:</Text> {item.serviceName}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Time:</Text> {item.time}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Status:</Text> {item.status}
// //       </Text>

// //       {selectedTab === "upcoming" && (
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity
// //             style={[styles.button, styles.acceptButton]}
// //             onPress={() => handleAppointmentStatus(item, "accepted")}
// //           >
// //             <Text style={styles.buttonText}>Accept</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={[styles.button, styles.rejectButton]}
// //             onPress={() => handleAppointmentStatus(item, "rejected")}
// //           >
// //             <Text style={styles.buttonText}>Reject</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity
// //           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]}
// //           onPress={() => setSelectedTab("upcoming")}
// //         >
// //           <Text style={styles.tabText}>Upcoming Appointments</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.tabButton, selectedTab === "history" && styles.activeTab]}
// //           onPress={() => setSelectedTab("history")}
// //         >
// //           <Text style={styles.tabText}>History</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#00665C" />
// //       ) : (
// //         <FlatList
// //           data={appointments.filter((appt) =>
// //             selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending"
// //           )}
// //           renderItem={renderAppointment}
// //           keyExtractor={(item) => item.id}
// //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f8f8f8",
// //     padding: 20,
// //   },
// //   tabContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     marginBottom: 15,
// //   },
// //   tabButton: {
// //     flex: 1,
// //     padding: 12,
// //     backgroundColor: "#ddd",
// //     alignItems: "center",
// //     borderRadius: 8,
// //     marginHorizontal: 5,
// //   },
// //   activeTab: {
// //     backgroundColor: "#00665C",
// //   },
// //   tabText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "white",
// //   },
// //   appointmentCard: {
// //     backgroundColor: "white",
// //     padding: 15,
// //     borderRadius: 8,
// //     marginBottom: 10,
// //     elevation: 2,
// //   },
// //   appointmentText: {
// //     fontSize: 14,
// //     color: "#333",
// //     marginBottom: 4,
// //   },
// //   boldText: {
// //     fontWeight: "bold",
// //   },
// //   buttonContainer: {
// //     flexDirection: "row",
// //     marginTop: 10,
// //   },
// //   button: {
// //     flex: 1,
// //     padding: 10,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginHorizontal: 5,
// //   },
// //   acceptButton: {
// //     backgroundColor: "green",
// //   },
// //   rejectButton: {
// //     backgroundColor: "red",
// //   },
// //   buttonText: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// //   noDataText: {
// //     textAlign: "center",
// //     fontSize: 16,
// //     marginTop: 20,
// //   },
// // });

// // export default AppointmentsScreen;
// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   FlatList,
// //   StyleSheet,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";
// // import { getDatabase, ref, onValue, update } from "firebase/database";
// // import { getAuth } from "firebase/auth";
// // import { sendEmail } from "../../utils/emailservice.js"; // Ensure the path is correct
// // import { useNavigation } from "@react-navigation/native";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [salon, setSalon] = useState(null);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming"); // "upcoming" | "history"

// //   // Fetch Salon Data of Logged-in Salon Owner
// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     console.log("Fetching salon data for user UID:", user.uid);

// //     const salonRef = ref(db, `salons/${user.uid}`);
// //     onValue(salonRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const salonData = snapshot.val();
// //         console.log("Salon data fetched:", salonData);
// //         setSalon(salonData);
// //       } else {
// //         Alert.alert("Error", "Salon data not found.");
// //         console.log("Salon data not found for user UID:", user.uid);
// //       }
// //     });
// //   }, [user]);

// //   // Fetch Appointments Related to Logged-in Salon
// //   useEffect(() => {
// //     if (!salon) {
// //       console.log("Salon data not available yet.");
// //       return;
// //     }

// //     console.log("Fetching appointments for salon ID:", salon.id);

// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         console.log("All bookings fetched:", data);

// //         const salonAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.salonId === salon.id);

// //         console.log("Filtered appointments for salon:", salonAppointments);
// //         setAppointments(salonAppointments);
// //       } else {
// //         console.log("No bookings found in the database.");
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [salon]);

// //   // Handle Appointment Status (Accept/Reject)
// //   const handleAppointmentStatus = async (appointment, status) => {
// //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// //     const updatedData = { status };

// //     try {
// //       await update(appointmentRef, updatedData);
// //       console.log("Appointment status updated to:", status);

// //       // Send email notification
// //       const message =
// //         status === "accepted"
// //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;

// //       await sendEmail({
// //         to: appointment.userEmail,
// //         subject: `Appointment ${status}`,
// //         message: message,
// //       });

// //       Alert.alert("Success", `Appointment ${status}`);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to update appointment status.");
// //       console.error("Error updating appointment status:", error);
// //     }
// //   };

// //   // Render Individual Appointment Card
// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>User:</Text> {item.userEmail}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Service:</Text> {item.serviceName}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Time:</Text> {item.time}
// //       </Text>
// //       <Text style={styles.appointmentText}>
// //         <Text style={styles.boldText}>Status:</Text> {item.status}
// //       </Text>

// //       {selectedTab === "upcoming" && (
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity
// //             style={[styles.button, styles.acceptButton]}
// //             onPress={() => handleAppointmentStatus(item, "accepted")}
// //           >
// //             <Text style={styles.buttonText}>Accept</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             style={[styles.button, styles.rejectButton]}
// //             onPress={() => handleAppointmentStatus(item, "rejected")}
// //           >
// //             <Text style={styles.buttonText}>Reject</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity
// //           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]}
// //           onPress={() => setSelectedTab("upcoming")}
// //         >
// //           <Text style={styles.tabText}>Upcoming Appointments</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.tabButton, selectedTab === "history" && styles.activeTab]}
// //           onPress={() => setSelectedTab("history")}
// //         >
// //           <Text style={styles.tabText}>History</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#00665C" />
// //       ) : (
// //         <FlatList
// //           data={appointments.filter((appt) =>
// //             selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending"
// //           )}
// //           renderItem={renderAppointment}
// //           keyExtractor={(item) => item.id}
// //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // // Styles
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f8f8f8",
// //     padding: 20,
// //   },
// //   tabContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     marginBottom: 15,
// //   },
// //   tabButton: {
// //     flex: 1,
// //     padding: 12,
// //     backgroundColor: "#ddd",
// //     alignItems: "center",
// //     borderRadius: 8,
// //     marginHorizontal: 5,
// //   },
// //   activeTab: {
// //     backgroundColor: "#00665C",
// //   },
// //   tabText: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "white",
// //   },
// //   appointmentCard: {
// //     backgroundColor: "white",
// //     padding: 15,
// //     borderRadius: 8,
// //     marginBottom: 10,
// //     elevation: 2,
// //   },
// //   appointmentText: {
// //     fontSize: 14,
// //     color: "#333",
// //     marginBottom: 4,
// //   },
// //   boldText: {
// //     fontWeight: "bold",
// //   },
// //   buttonContainer: {
// //     flexDirection: "row",
// //     marginTop: 10,
// //   },
// //   button: {
// //     flex: 1,
// //     padding: 10,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginHorizontal: 5,
// //   },
// //   acceptButton: {
// //     backgroundColor: "green",
// //   },
// //   rejectButton: {
// //     backgroundColor: "red",
// //   },
// //   buttonText: {
// //     color: "white",
// //     fontWeight: "bold",
// //   },
// //   noDataText: {
// //     textAlign: "center",
// //     fontSize: 16,
// //     marginTop: 20,
// //   },
// // });

// // export default AppointmentsScreen;
// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   FlatList,
// //   StyleSheet,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";
// // import { getDatabase, ref, onValue, update } from "firebase/database";
// // import { getAuth } from "firebase/auth";
// // import { sendEmail } from "../../utils/emailservice.js";
// // import { useNavigation } from "@react-navigation/native";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [salon, setSalon] = useState(null);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const salonRef = ref(db, `salons/${user.uid}`);
// //     onValue(salonRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         setSalon(snapshot.val());
// //       } else {
// //         Alert.alert("Error", "Salon data not found.");
// //       }
// //     });
// //   }, [user]);

// //   useEffect(() => {
// //     if (!salon) return;
// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         const salonAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.salonId === salon.id);
// //         setAppointments(salonAppointments);
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [salon]);

// //   const handleAppointmentStatus = async (appointment, status) => {
// //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// //     try {
// //       await update(appointmentRef, { status });
// //       const message =
// //         status === "accepted"
// //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
// //       await sendEmail({ to: appointment.userEmail, subject: `Appointment ${status}`, message });
// //       Alert.alert("Success", `Appointment ${status}`);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to update appointment status.");
// //     }
// //   };

// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
// //       {selectedTab === "upcoming" && (
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAppointmentStatus(item, "accepted")}>
// //             <Text style={styles.buttonText}>Accept</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleAppointmentStatus(item, "rejected")}>
// //             <Text style={styles.buttonText}>Reject</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
// //           <Text style={styles.tabText}>Upcoming Appointments</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
// //           <Text style={styles.tabText}>History</Text>
// //         </TouchableOpacity>
// //       </View>
// //       {loading ? (
// //         <ActivityIndicator size="large" color="#00665C" />
// //       ) : (
// //         <FlatList
// //           data={appointments.filter((appt) => selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending")}
// //           renderItem={renderAppointment}
// //           keyExtractor={(item) => item.id}
// //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20,marginTop:30 },
// //   tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
// //   tabButton: { flex: 1, padding: 12, backgroundColor: "#ddd", alignItems: "center", borderRadius: 8, marginHorizontal: 5 },
// //   activeTab: { backgroundColor: "#00665C" },
// //   tabText: { fontSize: 16, fontWeight: "bold", color: "white" },
// //   appointmentCard: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
// //   appointmentText: { fontSize: 14, color: "#333", marginBottom: 4 },
// //   boldText: { fontWeight: "bold" },
// //   buttonContainer: { flexDirection: "row", marginTop: 10 },
// //   button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
// //   acceptButton: { backgroundColor: "green" },
// //   rejectButton: { backgroundColor: "red" },
// //   buttonText: { color: "white", fontWeight: "bold" },
// //   noDataText: { textAlign: "center", fontSize: 16, marginTop: 20 },
// // });

// // export default AppointmentsScreen;
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
// } from "react-native";
// import { getDatabase, ref, onValue, update } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import { sendEmail } from "../../utils/emailservice.js";
// import { useNavigation } from "@react-navigation/native";

// const AppointmentsScreen = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const db = getDatabase();
//   const navigation = useNavigation();

//   const [salon, setSalon] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState("upcoming");

//   useEffect(() => {
//     if (!user) {
//       Alert.alert("Error", "User not authenticated.");
//       return;
//     }

//     const salonRef = ref(db, `salons/${user.uid}`);
//     onValue(salonRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSalon(snapshot.val());
//         console.log('Salon Data:', snapshot.val());  // Debugging: Log salon data
//       } else {
//         Alert.alert("Error", "Salon data not found.");
//       }
//     });
//   }, [user]);

//   useEffect(() => {
//     if (!salon) return;

//     const appointmentsRef = ref(db, "bookings/");
//     onValue(appointmentsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         console.log('Fetched Appointments:', data);  // Debugging: Log fetched appointment data
        
//         const salonAppointments = Object.entries(data)
//           .map(([key, value]) => ({ id: key, ...value }))
//           .filter((appt) => appt.salonId === salon.id);

//         console.log('Filtered Appointments:', salonAppointments);  // Debugging: Log filtered appointments
        
//         setAppointments(salonAppointments);
//       } else {
//         setAppointments([]);
//       }
//       setLoading(false);
//     });
//   }, [salon]);

//   const handleAppointmentStatus = async (appointment, status) => {
//     const appointmentRef = ref(db, `bookings/${appointment.id}`);
//     try {
//       await update(appointmentRef, { status });
//       const message =
//         status === "accepted"
//           ? `Your appointment with ${appointment.salonName} has been accepted!`
//           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
//       await sendEmail({ to: appointment.userEmail, subject: `Appointment ${status}`, message });
//       Alert.alert("Success", `Appointment ${status}`);
//     } catch (error) {
//       Alert.alert("Error", "Failed to update appointment status.");
//     }
//   };

//   const renderAppointment = ({ item }) => (
//     <View style={styles.appointmentCard}>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
//       {selectedTab === "upcoming" && (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAppointmentStatus(item, "accepted")}>
//             <Text style={styles.buttonText}>Accept</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleAppointmentStatus(item, "rejected")}>
//             <Text style={styles.buttonText}>Reject</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabContainer}>
//         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
//           <Text style={styles.tabText}>Upcoming Appointments</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
//           <Text style={styles.tabText}>History</Text>
//         </TouchableOpacity>
//       </View>
//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" />
//       ) : (
//         <FlatList
//           data={appointments.filter(
//             (appt) =>
//               selectedTab === "upcoming"
//                 ? appt.status === "pending"
//                 : appt.status !== "pending"
//           )}
//           renderItem={renderAppointment}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20, marginTop: 30 },
//   tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
//   tabButton: { flex: 1, padding: 12, backgroundColor: "#ddd", alignItems: "center", borderRadius: 8, marginHorizontal: 5 },
//   activeTab: { backgroundColor: "#00665C" },
//   tabText: { fontSize: 16, fontWeight: "bold", color: "white" },
//   appointmentCard: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
//   appointmentText: { fontSize: 14, color: "#333", marginBottom: 4 },
//   boldText: { fontWeight: "bold" },
//   buttonContainer: { flexDirection: "row", marginTop: 10 },
//   button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
//   acceptButton: { backgroundColor: "green" },
//   rejectButton: { backgroundColor: "red" },
//   buttonText: { color: "white", fontWeight: "bold" },
//   noDataText: { textAlign: "center", fontSize: 16, marginTop: 20 },
// });

// export default AppointmentsScreen;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { sendEmail } from "../../utils/emailservice.js";
import { useNavigation } from "@react-navigation/native";

const AppointmentsScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  const navigation = useNavigation();

  const [salon, setSalon] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("upcoming");

  // Fetch salon details based on the ownerId (user.uid)
  useEffect(() => {
    if (!user) {
      Alert.alert("Error", "User not authenticated.");
      return;
    }

    const salonRef = ref(db, `salons/`);
    onValue(salonRef, (snapshot) => {
      if (snapshot.exists()) {
        const salons = snapshot.val();
        // Find the salon that belongs to the current user (ownerId = user.uid)
        const salonData = Object.entries(salons).find(([key, salon]) => salon.ownerId === user.uid);

        if (salonData) {
          const [salonId, salonDetails] = salonData;
          setSalon(salonDetails); // Set the salon details
          console.log("Salon ID from Owner:", salonId); // Log salon ID for debugging
        } else {
          Alert.alert("Error", "Salon data not found for this owner.");
        }
      } else {
        Alert.alert("Error", "No salons found.");
      }
    });
  }, [user]);

  // Fetch appointments related to the fetched salon
  // useEffect(() => {
  //   if (!salon) return;
  //   const appointmentsRef = ref(db, "bookings/");

  //   onValue(appointmentsRef, (snapshot) => {
  //     if (snapshot.exists()) {
  //       const data = snapshot.val();
  //       // Filter appointments that belong to this salon (salonId = salon.id)
  //       const ownerAppointments = Object.entries(data)
  //         .map(([key, value]) => ({ id: key, ...value }))
  //         .filter((appt) => appt.salonId === salon.id); // Filter appointments based on salonId
  //       setAppointments(ownerAppointments);
  //     } else {
  //       setAppointments([]);
  //     }
  //     setLoading(false);
  //   });
  // }, [salon]);
  // Fetch appointments related to the fetched salon
useEffect(() => {
  if (!salon) return;
  const appointmentsRef = ref(db, "bookings/");

  onValue(appointmentsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Filter appointments that belong to this salon (salonId = salon.id)
      const ownerAppointments = Object.entries(data)
        .map(([key, value]) => ({ id: key, ...value }))
        .filter((appt) => appt.salonId === salon.id); // Filter appointments based on salonId
      setAppointments(ownerAppointments);
    } else {
      setAppointments([]);
    }
    setLoading(false);
  });
}, [salon]); // Dependency on salon to re-fetch appointments if salon details change


  // Handle appointment status change (Accept/Reject)
  const handleAppointmentStatus = async (appointment, status) => {
    const appointmentRef = ref(db, `bookings/${appointment.id}`);
    try {
      await update(appointmentRef, { status });
      const message =
        status === "accepted"
          ? `Your appointment with ${appointment.salonName} has been accepted!`
          : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
      await sendEmail({ to: appointment.userEmail, subject: `Appointment ${status}`, message });
      Alert.alert("Success", `Appointment ${status}`);
    } catch (error) {
      Alert.alert("Error", "Failed to update appointment status.");
    }
  };

  // Render the individual appointment item
  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentCard}>
      <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
      <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
      <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
      <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
      <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
      {selectedTab === "upcoming" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAppointmentStatus(item, "accepted")}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleAppointmentStatus(item, "rejected")}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
          <Text style={styles.tabText}>Upcoming Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#00665C" />
      ) : (
        <FlatList
          data={appointments.filter((appt) => selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending")}
          renderItem={renderAppointment}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20, marginTop: 30 },
  tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
  tabButton: { flex: 1, padding: 12, backgroundColor: "#ddd", alignItems: "center", borderRadius: 8, marginHorizontal: 5 },
  activeTab: { backgroundColor: "#00665C" },
  tabText: { fontSize: 16, fontWeight: "bold", color: "white" },
  appointmentCard: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  appointmentText: { fontSize: 14, color: "#333", marginBottom: 4 },
  boldText: { fontWeight: "bold" },
  buttonContainer: { flexDirection: "row", marginTop: 10 },
  button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
  acceptButton: { backgroundColor: "green" },
  rejectButton: { backgroundColor: "red" },
  buttonText: { color: "white", fontWeight: "bold" },
  noDataText: { textAlign: "center", fontSize: 16, marginTop: 20 },
});

export default AppointmentsScreen;
