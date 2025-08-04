
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   FlatList,
// // //   StyleSheet,
// // //   Alert,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { getDatabase, ref, onValue, update } from "firebase/database";
// // // import { getAuth } from "firebase/auth";
// // // import { sendEmail } from "../../utils/emailservice.js";
// // // import { useNavigation } from "@react-navigation/native";

// // // const AppointmentsScreen = () => {
// // //   const auth = getAuth();
// // //   const user = auth.currentUser;
// // //   const db = getDatabase();
// // //   const navigation = useNavigation();

// // //   const [salon, setSalon] = useState(null);
// // //   const [appointments, setAppointments] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedTab, setSelectedTab] = useState("upcoming");

// // //   // Fetch salon details based on the ownerId (user.uid)
// // //   useEffect(() => {
// // //     if (!user) {
// // //       Alert.alert("Error", "User not authenticated.");
// // //       return;
// // //     }

// // //     const salonRef = ref(db, `salons/`);
// // //     onValue(salonRef, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const salons = snapshot.val();
// // //         // Find the salon that belongs to the current user (ownerId = user.uid)
// // //         const salonData = Object.entries(salons).find(([key, salon]) => salon.ownerId === user.uid);

// // //         if (salonData) {
// // //           const [salonId, salonDetails] = salonData;
// // //           setSalon(salonDetails); // Set the salon details
// // //           console.log("Salon ID from Owner:", salonId); // Log salon ID for debugging
// // //         } else {
// // //           Alert.alert("Error", "Salon data not found for this owner.");
// // //         }
// // //       } else {
// // //         Alert.alert("Error", "No salons found.");
// // //       }
// // //     });
// // //   }, [user]);

  
// // // useEffect(() => {
// // //   if (!salon) return;
// // //   const appointmentsRef = ref(db, "bookings/");

// // //   onValue(appointmentsRef, (snapshot) => {
// // //     if (snapshot.exists()) {
// // //       const data = snapshot.val();
    
// // //       const ownerAppointments = Object.entries(data)
// // //         .map(([key, value]) => ({ id: key, ...value }))
// // //         .filter((appt) => appt.ownerId === user.uid); // Filter appointments based on ownerId
// // //       setAppointments(ownerAppointments);
// // //     } else {
// // //       setAppointments([]);
// // //     }
// // //     setLoading(false);
// // //   });
// // // }, [salon]); // Dependency on salon to re-fetch appointments if salon details change


// // //   // Handle appointment status change (Accept/Reject)
// // //   const handleAppointmentStatus = async (appointment, status) => {
// // //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// // //     try {
// // //       await update(appointmentRef, { status });
// // //       const message =
// // //         status === "accepted"
// // //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// // //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
// // //       await sendEmail({ to: appointment.userEmail, subject: `Appointment ${status}`, message });
// // //       Alert.alert("Success", `Appointment ${status}`);
// // //     } catch (error) {
// // //       Alert.alert("Error", "Failed to update appointment status.");
// // //     }
// // //   };

// // //   // Render the individual appointment item
// // //   const renderAppointment = ({ item }) => (
// // //     <View style={styles.appointmentCard}>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
// // //       {selectedTab === "upcoming" && (
// // //         <View style={styles.buttonContainer}>
// // //           <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAppointmentStatus(item, "accepted")}>
// // //             <Text style={styles.buttonText}>Accept</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleAppointmentStatus(item, "rejected")}>
// // //             <Text style={styles.buttonText}>Reject</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       )}
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.tabContainer}>
// // //         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
// // //           <Text style={styles.tabText}>Upcoming Appointments</Text>
// // //         </TouchableOpacity>
// // //         <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
// // //           <Text style={styles.tabText}>History</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#00665C" />
// // //       ) : (
// // //         <FlatList
// // //           data={appointments.filter((appt) => selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending")}
// // //           renderItem={renderAppointment}
// // //           keyExtractor={(item) => item.id}
// // //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20, marginTop: 30 },
// // //   tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
// // //   tabButton: { flex: 1, padding: 12, backgroundColor: "#ddd", alignItems: "center", borderRadius: 8, marginHorizontal: 5 },
// // //   activeTab: { backgroundColor: "#00665C" },
// // //   tabText: { fontSize: 16, fontWeight: "bold", color: "white" },
// // //   appointmentCard: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
// // //   appointmentText: { fontSize: 14, color: "#333", marginBottom: 4 },
// // //   boldText: { fontWeight: "bold" },
// // //   buttonContainer: { flexDirection: "row", marginTop: 10 },
// // //   button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
// // //   acceptButton: { backgroundColor: "green" },
// // //   rejectButton: { backgroundColor: "red" },
// // //   buttonText: { color: "white", fontWeight: "bold" },
// // //   noDataText: { textAlign: "center", fontSize: 16, marginTop: 20 },
// // // });

// // // export default AppointmentsScreen;
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   TouchableOpacity,
// // //   FlatList,
// // //   StyleSheet,
// // //   Alert,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { getDatabase, ref, onValue, update } from "firebase/database";
// // // import { getAuth } from "firebase/auth";
// // // import { sendEmail } from "../../utils/emailservice.js";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { Ionicons } from "@expo/vector-icons"; // For the back arrow icon

// // // const AppointmentsScreen = () => {
// // //   const auth = getAuth();
// // //   const user = auth.currentUser;
// // //   const db = getDatabase();
// // //   const navigation = useNavigation();

// // //   const [salon, setSalon] = useState(null);
// // //   const [appointments, setAppointments] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedTab, setSelectedTab] = useState("upcoming");

// // //   // Fetch salon details based on the ownerId (user.uid)
// // //   useEffect(() => {
// // //     if (!user) {
// // //       Alert.alert("Error", "User not authenticated.");
// // //       return;
// // //     }

// // //     const salonRef = ref(db, `salons/`);
// // //     onValue(salonRef, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const salons = snapshot.val();
// // //         // Find the salon that belongs to the current user (ownerId = user.uid)
// // //         const salonData = Object.entries(salons).find(([key, salon]) => salon.ownerId === user.uid);

// // //         if (salonData) {
// // //           const [salonId, salonDetails] = salonData;
// // //           setSalon({ ...salonDetails, id: salonId }); // Set the salon details with ID
// // //         } else {
// // //           Alert.alert("Error", "Salon data not found for this owner.");
// // //         }
// // //       } else {
// // //         Alert.alert("Error", "No salons found.");
// // //       }
// // //     });
// // //   }, [user]);

// // //   // Fetch appointments for the current salon
// // //   useEffect(() => {
// // //     if (!salon) return;

// // //     const appointmentsRef = ref(db, "bookings/");
// // //     onValue(appointmentsRef, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const data = snapshot.val();
// // //         // Filter appointments that belong to this salon (salonId = salon.id)
// // //         const ownerAppointments = Object.entries(data)
// // //           .map(([key, value]) => ({ id: key, ...value }))
// // //           .filter((appt) => appt.salonId === salon.id); // Filter appointments based on salonId
// // //         setAppointments(ownerAppointments);
// // //       } else {
// // //         setAppointments([]);
// // //       }
// // //       setLoading(false);
// // //     });
// // //   }, [salon]); // Dependency on salon to re-fetch appointments if salon details change

// // //   // Handle appointment status change (Accept/Reject)
// // //   const handleAppointmentStatus = async (appointment, status) => {
// // //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// // //     try {
// // //       await update(appointmentRef, { status });
// // //       const message =
// // //         status === "accepted"
// // //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// // //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
// // //       await sendEmail({ to: appointment.userEmail, subject: `Appointment ${status}`, message });
// // //       Alert.alert("Success", `Appointment ${status}`);
// // //     } catch (error) {
// // //       Alert.alert("Error", "Failed to update appointment status.");
// // //     }
// // //   };

// // //   // Render the individual appointment item
// // //   const renderAppointment = ({ item }) => (
// // //     <View style={styles.appointmentCard}>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// // //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
// // //       {selectedTab === "upcoming" && (
// // //         <View style={styles.buttonContainer}>
// // //           <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => handleAppointmentStatus(item, "accepted")}>
// // //             <Text style={styles.buttonText}>Accept</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => handleAppointmentStatus(item, "rejected")}>
// // //             <Text style={styles.buttonText}>Reject</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       )}
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       {/* Header with Back Arrow */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // //           <Ionicons name="arrow-back" size={30} color="black" marginTop='25'/>
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerText}>Appointments</Text>
// // //       </View>

// // //       {/* Tabs for Upcoming and History */}
// // //       <View style={styles.tabContainer}>
// // //         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
// // //           <Text style={styles.tabText}>Upcoming</Text>
// // //         </TouchableOpacity>
// // //         <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
// // //           <Text style={styles.tabText}>History</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Appointment List */}
// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#00665C" />
// // //       ) : (
// // //         <FlatList
// // //           data={appointments.filter((appt) => selectedTab === "upcoming" ? appt.status === "pending" : appt.status !== "pending")}
// // //           renderItem={renderAppointment}
// // //           keyExtractor={(item) => item.id}
// // //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
// // //   header: {
// // //     flexDirection: "row",
// // //     alignItems: "center",
// // //     marginBottom: 20,
// // //   },
// // //   headerText: {
// // //     fontSize: 40,
// // //     fontWeight: "bold",
// // //     color: "#00665C",
// // //     marginLeft: 50,
// // //     marginTop:20,
// // //   },
// // //   tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
// // //   tabButton: { flex: 1, padding: 12, backgroundColor: "#ddd", alignItems: "center", borderRadius: 8, marginHorizontal: 5 },
// // //   activeTab: { backgroundColor: "#00665C" },
// // //   tabText: { fontSize: 16, fontWeight: "bold", color: "white" },
// // //   appointmentCard: { backgroundColor: "white", padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
// // //   appointmentText: { fontSize: 14, color: "#333", marginBottom: 4 },
// // //   boldText: { fontWeight: "bold" },
// // //   buttonContainer: { flexDirection: "row", marginTop: 10 },
// // //   button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center", marginHorizontal: 5 },
// // //   acceptButton: { backgroundColor: "green" },
// // //   rejectButton: { backgroundColor: "red" },
// // //   buttonText: { color: "white", fontWeight: "bold" },
// // //   noDataText: { textAlign: "center", fontSize: 16, marginTop: 20 },
// // // });

// // // export default AppointmentsScreen;
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
// // import { Ionicons } from "@expo/vector-icons"; // For the back arrow icon

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [salon, setSalon] = useState(null);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   // Fetch salon details based on the ownerId (user.uid)
// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const salonRef = ref(db, `salons/`);
// //     onValue(salonRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const salons = snapshot.val();
// //         // Find the salon that belongs to the current user (ownerId = user.uid)
// //         const salonData = Object.entries(salons).find(([key, salon]) => salon.ownerId === user.uid);

// //         if (salonData) {
// //           const [salonId, salonDetails] = salonData;
// //           setSalon({ ...salonDetails, id: salonId }); // Set the salon details with ID
// //         } else {
// //           Alert.alert("Error", "Salon data not found for this owner.");
// //         }
// //       } else {
// //         Alert.alert("Error", "No salons found.");
// //       }
// //     });
// //   }, [user]);

// //   // Fetch appointments for the current salon
// //   useEffect(() => {
// //     if (!salon) return;

// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         // Filter appointments that belong to this salon (salonId = salon.id)
// //         const ownerAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.salonId === salon.id); // Filter appointments based on salonId
// //         setAppointments(ownerAppointments);

// //         // TODO: Add logic to schedule email reminders here
// //         // For each appointment, calculate the time difference and schedule reminders
// //         ownerAppointments.forEach((appt) => {
// //           const appointmentDate = new Date(appt.date);
// //           const now = new Date();

// //           // Calculate time difference in milliseconds
// //           const timeDifference = appointmentDate.getTime() - now.getTime();

// //           // Schedule reminder one day before
// //           const oneDayBefore = timeDifference - 24 * 60 * 60 * 1000;
// //           if (oneDayBefore > 0) {
// //             setTimeout(() => {
// //               sendEmail({
// //                 to: appt.userEmail,
// //                 subject: "Appointment Reminder",
// //                 message: `Reminder: Your appointment with ${appt.salonName} is scheduled for tomorrow at ${appt.time}.`,
// //               });
// //             }, oneDayBefore);
// //           }

// //           // Schedule reminder two hours before
// //           const twoHoursBefore = timeDifference - 2 * 60 * 60 * 1000;
// //           if (twoHoursBefore > 0) {
// //             setTimeout(() => {
// //               sendEmail({
// //                 to: appt.userEmail,
// //                 subject: "Appointment Reminder",
// //                 message: `Reminder: Your appointment with ${appt.salonName} is scheduled in 2 hours at ${appt.time}.`,
// //               });
// //             }, twoHoursBefore);
// //           }
// //         });
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [salon]); // Dependency on salon to re-fetch appointments if salon details change

// //   // Handle appointment status change (Accept/Reject)
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

// //   // Render the individual appointment item
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
// //       {/* Header with Back Arrow */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={30} color="black" marginTop='25'/>
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Appointments</Text>
// //       </View>

// //       {/* Tabs for Upcoming and History */}
// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
// //           <Text style={styles.tabText}>Upcoming</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} onPress={() => setSelectedTab("history")}>
// //           <Text style={styles.tabText}>History</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Appointment List */}
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
// //   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
// //   header: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   headerText: {
// //     fontSize: 40,
// //     fontWeight: "bold",
// //     color: "#00665C",
// //     marginLeft: 50,
// //     marginTop:20,
// //   },
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
// // import { Ionicons } from "@expo/vector-icons"; 

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         const ownerAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.ownerId === user.uid); 
// //         setAppointments(ownerAppointments);
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [user]); 

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
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={30} color="black" marginTop='25'/>
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Appointments</Text>
// //       </View>

// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} onPress={() => setSelectedTab("upcoming")}>
// //           <Text style={styles.tabText}>Upcoming</Text>
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
// //   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
// //   header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
// //   headerText: { fontSize: 40, fontWeight: "bold", color: "#00665C", marginLeft: 50, marginTop: 20 },
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
// // import { Ionicons } from "@expo/vector-icons";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const appointmentsRef = ref(db, "bookings/");
// //     onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         const ownerAppointments = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((appt) => appt.ownerId === user.uid);
// //         setAppointments(ownerAppointments);
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, [user]);

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

// //   const sendReminder = async (appointment) => {
// //     try {
// //       const message = `Reminder: Your appointment with ${appointment.salonName} is scheduled for ${new Date(appointment.date).toLocaleDateString()} at ${appointment.time}`;
// //       await sendEmail({ 
// //         to: appointment.userEmail, 
// //         subject: "Appointment Reminder", 
// //         message 
// //       });
// //       Alert.alert("Success", "Reminder sent successfully!");
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to send reminder.");
// //     }
// //   };

// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
      
// //       {selectedTab === "upcoming" && item.status === "pending" && (
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
      
// //       {selectedTab === "history" && item.status === "accepted" && (
// //         <TouchableOpacity 
// //           style={[styles.button, styles.reminderButton]} 
// //           onPress={() => sendReminder(item)}
// //         >
// //           <Text style={styles.buttonText}>Send Reminder</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );

// //   const filterAppointments = () => {
// //     if (selectedTab === "upcoming") {
// //       return appointments.filter((appt) => appt.status === "pending");
// //     } else if (selectedTab === "history") {
// //       return appointments.filter((appt) => appt.status === "accepted" || appt.status === "rejected");
// //     }
// //     return appointments;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={30} color="#00665C" marginTop={25} />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Appointments</Text>
// //       </View>

// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity 
// //           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} 
// //           onPress={() => setSelectedTab("upcoming")}
// //         >
// //           <Text style={styles.tabText}>Upcoming</Text>
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
// //           data={filterAppointments()}
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
// //     padding: 20 
// //   },
// //   header: { 
// //     flexDirection: "row", 
// //     alignItems: "center", 
// //     marginBottom: 20 
// //   },
// //   headerText: { 
// //     fontSize: 40, 
// //     fontWeight: "bold", 
// //     color: "#00665C", 
// //     marginLeft: 50, 
// //     marginTop: 20 
// //   },
// //   tabContainer: { 
// //     flexDirection: "row", 
// //     justifyContent: "space-around", 
// //     marginBottom: 15 
// //   },
// //   tabButton: { 
// //     flex: 1, 
// //     padding: 12, 
// //     backgroundColor: "#ddd", 
// //     alignItems: "center", 
// //     borderRadius: 8, 
// //     marginHorizontal: 5 
// //   },
// //   activeTab: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   tabText: { 
// //     fontSize: 16, 
// //     fontWeight: "bold", 
// //     color: "white" 
// //   },
// //   appointmentCard: { 
// //     backgroundColor: "white", 
// //     padding: 15, 
// //     borderRadius: 8, 
// //     marginBottom: 10, 
// //     elevation: 2 
// //   },
// //   appointmentText: { 
// //     fontSize: 14, 
// //     color: "#333", 
// //     marginBottom: 4 
// //   },
// //   boldText: { 
// //     fontWeight: "bold" 
// //   },
// //   buttonContainer: { 
// //     flexDirection: "row", 
// //     marginTop: 10,
// //     justifyContent: "space-between"
// //   },
// //   button: { 
// //     padding: 10, 
// //     borderRadius: 5, 
// //     alignItems: "center",
// //     width: "45%"
// //   },
// //   acceptButton: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   rejectButton: { 
// //     backgroundColor: "#FF4444" 
// //   },
// //   reminderButton: { 
// //     backgroundColor: "#FFA500",
// //     marginTop: 10,
// //     width: "100%"
// //   },
// //   buttonText: { 
// //     color: "white", 
// //     fontWeight: "bold" 
// //   },
// //   noDataText: { 
// //     textAlign: "center", 
// //     fontSize: 16, 
// //     marginTop: 20,
// //     color: "#666"
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
// // import { Ionicons } from "@expo/vector-icons";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const appointmentsRef = ref(db, "bookings/");
// //     const unsubscribe = onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         // Convert Firebase data to array and preserve ALL appointments
// //         const allAppointments = Object.entries(data)
// //           .map(([key, value]) => ({
// //             id: key,
// //             ...value,
// //             // Ensure status exists even if undefined
// //             status: value.status || "pending"
// //           }))
// //           .filter((appt) => appt.ownerId === user.uid);

// //         // Always set the full list of appointments without deletion
// //         setAppointments(allAppointments);
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     }, {
// //       // Ensure we get all updates without losing data
// //       onlyOnce: false
// //     });

// //     // Cleanup listener
// //     return () => unsubscribe();
// //   }, [user]);

// //   const handleAppointmentStatus = async (appointment, status) => {
// //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// //     try {
// //       // Only update status, preserve all other data
// //       await update(appointmentRef, { status });
// //       const message =
// //         status === "accepted"
// //           ? `Your appointment with ${appointment.salonName} has been accepted!`
// //           : `Sorry, your appointment with ${appointment.salonName} has been rejected.`;
// //       await sendEmail({ 
// //         to: appointment.userEmail, 
// //         subject: `Appointment ${status}`, 
// //         message 
// //       });
// //       Alert.alert("Success", `Appointment ${status}`);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to update appointment status: " + error.message);
// //     }
// //   };

// //   const sendReminder = async (appointment) => {
// //     try {
// //       const message = `Reminder: Your appointment with ${appointment.salonName} is scheduled for ${new Date(appointment.date).toLocaleDateString()} at ${appointment.time}`;
// //       await sendEmail({ 
// //         to: appointment.userEmail, 
// //         subject: "Appointment Reminder", 
// //         message 
// //       });
// //       Alert.alert("Success", "Reminder sent successfully!");
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to send reminder: " + error.message);
// //     }
// //   };

// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
      
// //       {selectedTab === "upcoming" && item.status === "pending" && (
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
      
// //       {selectedTab === "history" && item.status === "accepted" && (
// //         <TouchableOpacity 
// //           style={[styles.button, styles.reminderButton]} 
// //           onPress={() => sendReminder(item)}
// //         >
// //           <Text style={styles.buttonText}>Send Reminder</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );

// //   const filterAppointments = () => {
// //     // Pure filtering for display only, no data modification
// //     if (selectedTab === "upcoming") {
// //       return appointments.filter((appt) => appt.status === "pending");
// //     } else if (selectedTab === "history") {
// //       return appointments.filter((appt) => appt.status === "accepted" || appt.status === "rejected");
// //     }
// //     return appointments;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={30} color="#00665C" marginTop={25} />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Appointments</Text>
// //       </View>

// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity 
// //           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} 
// //           onPress={() => setSelectedTab("upcoming")}
// //         >
// //           <Text style={styles.tabText}>Upcoming</Text>
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
// //           data={filterAppointments()}
// //           renderItem={renderAppointment}
// //           keyExtractor={(item) => item.id}
// //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// //           extraData={appointments} // Ensure re-render when appointments change
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { 
// //     flex: 1, 
// //     backgroundColor: "#f8f8f8", 
// //     padding: 20 
// //   },
// //   header: { 
// //     flexDirection: "row", 
// //     alignItems: "center", 
// //     marginBottom: 20 
// //   },
// //   headerText: { 
// //     fontSize: 40, 
// //     fontWeight: "bold", 
// //     color: "#00665C", 
// //     marginLeft: 50, 
// //     marginTop: 20 
// //   },
// //   tabContainer: { 
// //     flexDirection: "row", 
// //     justifyContent: "space-around", 
// //     marginBottom: 15 
// //   },
// //   tabButton: { 
// //     flex: 1, 
// //     padding: 12, 
// //     backgroundColor: "#ddd", 
// //     alignItems: "center", 
// //     borderRadius: 8, 
// //     marginHorizontal: 5 
// //   },
// //   activeTab: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   tabText: { 
// //     fontSize: 16, 
// //     fontWeight: "bold", 
// //     color: "white" 
// //   },
// //   appointmentCard: { 
// //     backgroundColor: "white", 
// //     padding: 15, 
// //     borderRadius: 8, 
// //     marginBottom: 10, 
// //     elevation: 2 
// //   },
// //   appointmentText: { 
// //     fontSize: 14, 
// //     color: "#333", 
// //     marginBottom: 4 
// //   },
// //   boldText: { 
// //     fontWeight: "bold" 
// //   },
// //   buttonContainer: { 
// //     flexDirection: "row", 
// //     marginTop: 10,
// //     justifyContent: "space-between"
// //   },
// //   button: { 
// //     padding: 10, 
// //     borderRadius: 5, 
// //     alignItems: "center",
// //     width: "45%"
// //   },
// //   acceptButton: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   rejectButton: { 
// //     backgroundColor: "#FF4444" 
// //   },
// //   reminderButton: { 
// //     backgroundColor: "#FFA500",
// //     marginTop: 10,
// //     width: "100%"
// //   },
// //   buttonText: { 
// //     color: "white", 
// //     fontWeight: "bold" 
// //   },
// //   noDataText: { 
// //     textAlign: "center", 
// //     fontSize: 16, 
// //     marginTop: 20,
// //     color: "#666"
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
// // import { Ionicons } from "@expo/vector-icons";

// // const AppointmentsScreen = () => {
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const db = getDatabase();
// //   const navigation = useNavigation();

// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedTab, setSelectedTab] = useState("upcoming");

// //   useEffect(() => {
// //     if (!user) {
// //       Alert.alert("Error", "User not authenticated.");
// //       return;
// //     }

// //     const appointmentsRef = ref(db, "bookings/");
// //     const unsubscribe = onValue(appointmentsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         // Convert Firebase data to array and preserve ALL appointments
// //         const allAppointments = Object.entries(data)
// //           .map(([key, value]) => ({
// //             id: key,
// //             ...value,
// //             status: value.status || "pending",
// //             timestamp: value.timestamp || Date.now() // Add timestamp if not present
// //           }))
// //           .filter((appt) => appt.ownerId === user.uid)
// //           .sort((a, b) => b.timestamp - a.timestamp); // Sort by timestamp, newest first

// //         // Set all appointments without any overriding
// //         setAppointments((prevAppointments) => {
// //           const newAppointments = allAppointments.filter(
// //             (newAppt) => !prevAppointments.some((prevAppt) => prevAppt.id === newAppt.id)
// //           );
// //           return [...prevAppointments, ...newAppointments];
// //         });
// //       } else {
// //         setAppointments([]);
// //       }
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, [user]);

// //   const handleAppointmentStatus = async (appointment, status) => {
// //     const appointmentRef = ref(db, `bookings/${appointment.id}`);
// //     try {
// //       // Update status and preserve all other data
// //       await update(appointmentRef, { 
// //         status,
// //         lastUpdated: Date.now() // Add timestamp of status change
// //       });
      
// //       const message = status === "accepted"
// //         ? `Your appointment with ${appointment.salonName} has been accepted!`
// //         : `Your appointment with ${appointment.salonName} has been rejected.`;
      
// //       await sendEmail({ 
// //         to: appointment.userEmail, 
// //         subject: `Appointment ${status}`, 
// //         message 
// //       });
// //       Alert.alert("Success", `Appointment ${status}`);
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to update appointment status: " + error.message);
// //     }
// //   };

// //   const sendReminder = async (appointment) => {
// //     try {
// //       const message = `Reminder: Your appointment with ${appointment.salonName} is scheduled for ${new Date(appointment.date).toLocaleDateString()} at ${appointment.time}`;
// //       await sendEmail({ 
// //         to: appointment.userEmail, 
// //         subject: "Appointment Reminder", 
// //         message 
// //       });
// //       Alert.alert("Success", "Reminder sent successfully!");
// //     } catch (error) {
// //       Alert.alert("Error", "Failed to send reminder: " + error.message);
// //     }
// //   };

// //   const renderAppointment = ({ item }) => (
// //     <View style={styles.appointmentCard}>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
// //       <Text style={styles.appointmentText}><Text style={styles.boldText}>Created:</Text> {new Date(item.timestamp).toLocaleString()}</Text>
      
// //       {selectedTab === "upcoming" && item.status === "pending" && (
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
      
// //       {selectedTab === "history" && item.status === "accepted" && (
// //         <TouchableOpacity 
// //           style={[styles.button, styles.reminderButton]} 
// //           onPress={() => sendReminder(item)}
// //         >
// //           <Text style={styles.buttonText}>Send Reminder</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );

// //   const filterAppointments = () => {
// //     if (selectedTab === "upcoming") {
// //       return appointments.filter((appt) => appt.status === "pending");
// //     } else if (selectedTab === "history") {
// //       // Show all completed appointments (accepted and rejected)
// //       return appointments.filter((appt) => 
// //         appt.status === "accepted" || appt.status === "rejected"
// //       );
// //     }
// //     return appointments;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={30} color="#00665C" marginTop={25} />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Appointments</Text>
// //       </View>

// //       <View style={styles.tabContainer}>
// //         <TouchableOpacity 
// //           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} 
// //           onPress={() => setSelectedTab("upcoming")}
// //         >
// //           <Text style={styles.tabText}>Upcoming</Text>
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
// //           data={filterAppointments()}
// //           renderItem={renderAppointment}
// //           keyExtractor={(item) => item.id}
// //           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
// //           extraData={appointments}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // // Styles remain mostly the same, adding minor adjustment
// // const styles = StyleSheet.create({
// //   container: { 
// //     flex: 1, 
// //     backgroundColor: "#f8f8f8", 
// //     padding: 20 
// //   },
// //   header: { 
// //     flexDirection: "row", 
// //     alignItems: "center", 
// //     marginBottom: 20 
// //   },
// //   headerText: { 
// //     fontSize: 40, 
// //     fontWeight: "bold", 
// //     color: "#00665C", 
// //     marginLeft: 50, 
// //     marginTop: 20 
// //   },
// //   tabContainer: { 
// //     flexDirection: "row", 
// //     justifyContent: "space-around", 
// //     marginBottom: 15 
// //   },
// //   tabButton: { 
// //     flex: 1, 
// //     padding: 12, 
// //     backgroundColor: "#ddd", 
// //     alignItems: "center", 
// //     borderRadius: 8, 
// //     marginHorizontal: 5 
// //   },
// //   activeTab: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   tabText: { 
// //     fontSize: 16, 
// //     fontWeight: "bold", 
// //     color: "white" 
// //   },
// //   appointmentCard: { 
// //     backgroundColor: "white", 
// //     padding: 15, 
// //     borderRadius: 8, 
// //     marginBottom: 10, 
// //     elevation: 2 
// //   },
// //   appointmentText: { 
// //     fontSize: 14, 
// //     color: "#333", 
// //     marginBottom: 4 
// //   },
// //   boldText: { 
// //     fontWeight: "bold" 
// //   },
// //   buttonContainer: { 
// //     flexDirection: "row", 
// //     marginTop: 10,
// //     justifyContent: "space-between"
// //   },
// //   button: { 
// //     padding: 10, 
// //     borderRadius: 5, 
// //     alignItems: "center",
// //     width: "45%"
// //   },
// //   acceptButton: { 
// //     backgroundColor: "#00665C" 
// //   },
// //   rejectButton: { 
// //     backgroundColor: "#FF4444" 
// //   },
// //   reminderButton: { 
// //     backgroundColor: "#FFA500",
// //     marginTop: 10,
// //     width: "100%"
// //   },
// //   buttonText: { 
// //     color: "white", 
// //     fontWeight: "bold" 
// //   },
// //   noDataText: { 
// //     textAlign: "center", 
// //     fontSize: 16, 
// //     marginTop: 20,
// //     color: "#666"
// //   },
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
// import { Ionicons } from "@expo/vector-icons";

// const AppointmentsScreen = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const db = getDatabase();
//   const navigation = useNavigation();

//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState("upcoming");

//   useEffect(() => {
//     if (!user) {
//       Alert.alert("Error", "User not authenticated.");
//       return;
//     }

//     const appointmentsRef = ref(db, "bookings/");
//     const unsubscribe = onValue(appointmentsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         // Convert Firebase data to array and preserve ALL appointments
//         const allAppointments = Object.entries(data)
//           .map(([key, value]) => ({
//             id: key,
//             ...value,
//             status: value.status || "pending", // Default status if not set
//             timestamp: value.timestamp || Date.now(), // Add timestamp if not present
//           }))
//           .filter((appt) => appt.ownerId === user.uid) // Filter appointments for the current user
//           .sort((a, b) => b.timestamp - a.timestamp); // Sort by timestamp, newest first

//         // Set all appointments without overriding
//         setAppointments(allAppointments);
//       } else {
//         setAppointments([]);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handleAppointmentStatus = async (appointment, status) => {
//     const appointmentRef = ref(db, `bookings/${appointment.id}`);
//     try {
//       // Update status and preserve all other data
//       await update(appointmentRef, { 
//         status,
//         lastUpdated: Date.now(), // Add timestamp of status change
//       });

//       // Send email notification
//       const message = status === "accepted"
//         ? `Your appointment with ${appointment.salonName} has been accepted!`
//         : `Your appointment with ${appointment.salonName} has been rejected.`;
      
//       await sendEmail({ 
//         to: appointment.userEmail, 
//         subject: `Appointment ${status}`, 
//         message,
//       });

//       Alert.alert("Success", `Appointment ${status}`);
//     } catch (error) {
//       Alert.alert("Error", "Failed to update appointment status: " + error.message);
//     }
//   };

//   const sendReminder = async (appointment) => {
//     try {
//       const message = `Reminder: Your appointment with ${appointment.salonName} is scheduled for ${new Date(appointment.date).toLocaleDateString()} at ${appointment.time}`;
//       await sendEmail({ 
//         to: appointment.userEmail, 
//         subject: "Appointment Reminder", 
//         message,
//       });
//       Alert.alert("Success", "Reminder sent successfully!");
//     } catch (error) {
//       Alert.alert("Error", "Failed to send reminder: " + error.message);
//     }
//   };

//   const renderAppointment = ({ item }) => (
//     <View style={styles.appointmentCard}>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>User:</Text> {item.userEmail}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Service:</Text> {item.serviceName}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Time:</Text> {item.time}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Status:</Text> {item.status}</Text>
//       <Text style={styles.appointmentText}><Text style={styles.boldText}>Created:</Text> {new Date(item.timestamp).toLocaleString()}</Text>

//       {/* Show Accept/Reject buttons for pending appointments in the "upcoming" tab */}
//       {selectedTab === "upcoming" && item.status === "pending" && (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity 
//             style={[styles.button, styles.acceptButton]} 
//             onPress={() => handleAppointmentStatus(item, "accepted")}
//           >
//             <Text style={styles.buttonText}>Accept</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             style={[styles.button, styles.rejectButton]} 
//             onPress={() => handleAppointmentStatus(item, "rejected")}
//           >
//             <Text style={styles.buttonText}>Reject</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Show Reminder button for accepted appointments in the "history" tab */}
//       {selectedTab === "history" && item.status === "accepted" && (
//         <TouchableOpacity 
//           style={[styles.button, styles.reminderButton]} 
//           onPress={() => sendReminder(item)}
//         >
//           <Text style={styles.buttonText}>Send Reminder</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   const filterAppointments = () => {
//     if (selectedTab === "upcoming") {
//       // Show only pending appointments in the "upcoming" tab
//       return appointments.filter((appt) => appt.status === "pending");
//     } else if (selectedTab === "history") {
//       // Show accepted and rejected appointments in the "history" tab
//       return appointments.filter((appt) => 
//         appt.status === "accepted" || appt.status === "rejected"
//       );
//     }
//     return appointments;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={30} color="#00665C" marginTop={25} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Appointments</Text>
//       </View>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity 
//           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]} 
//           onPress={() => setSelectedTab("upcoming")}
//         >
//           <Text style={styles.tabText}>Upcoming</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.tabButton, selectedTab === "history" && styles.activeTab]} 
//           onPress={() => setSelectedTab("history")}
//         >
//           <Text style={styles.tabText}>History</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" />
//       ) : (
//         <FlatList
//           data={filterAppointments()}
//           renderItem={renderAppointment}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={<Text style={styles.noDataText}>No appointments found</Text>}
//           extraData={appointments}
//         />
//       )}
//     </View>
//   );
// };

// // Styles remain the same
// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     backgroundColor: "#f8f8f8", 
//     padding: 20 
//   },
//   header: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     marginBottom: 20 
//   },
//   headerText: { 
//     fontSize: 40, 
//     fontWeight: "bold", 
//     color: "#00665C", 
//     marginLeft: 50, 
//     marginTop: 20 
//   },
//   tabContainer: { 
//     flexDirection: "row", 
//     justifyContent: "space-around", 
//     marginBottom: 15 
//   },
//   tabButton: { 
//     flex: 1, 
//     padding: 12, 
//     backgroundColor: "#ddd", 
//     alignItems: "center", 
//     borderRadius: 8,   
//     marginHorizontal: 5 
//   },
//   activeTab: { 
//     backgroundColor: "#00665C" 
//   },
//   tabText: { 
//     fontSize: 16, 
//     fontWeight: "bold", 
//     color: "white" 
//   },
//   appointmentCard: { 
//     backgroundColor: "white", 
//     padding: 15, 
//     borderRadius: 8, 
//     marginBottom: 10, 
//     elevation: 2 
//   },
//   appointmentText: { 
//     fontSize: 14, 
//     color: "#333", 
//     marginBottom: 4 
//   },
//   boldText: { 
//     fontWeight: "bold" 
//   },
//   buttonContainer: { 
//     flexDirection: "row", 
//     marginTop: 10,
//     justifyContent: "space-between"
//   },
//   button: { 
//     padding: 10, 
//     borderRadius: 5, 
//     alignItems: "center",
//     width: "45%"
//   },
//   acceptButton: { 
//     backgroundColor: "#00665C" 
//   },
//   rejectButton: { 
//     backgroundColor: "#FF4444" 
//   },
//   reminderButton: { 
//     backgroundColor: "#FFA500",
//     marginTop: 10,
//     width: "100%"
//   },
//   buttonText: { 
//     color: "white", 
//     fontWeight: "bold" 
//   },
//   noDataText: { 
//     textAlign: "center", 
//     fontSize: 16, 
//     marginTop: 20,
//     color: "#666"
//   },
// });

// export default AppointmentsScreen;
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
// import { Ionicons } from "@expo/vector-icons";

// const AppointmentsScreen = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const db = getDatabase();
//   const navigation = useNavigation();

//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState("upcoming");

//   const salonName = "Sheeza"; // 👈 Hardcoded salon name for owner — can be dynamic later

//   useEffect(() => {
//     if (!user) {
//       Alert.alert("Error", "User not authenticated.");
//       return;
//     }

//     const appointmentsRef = ref(db, "bookings/");
//     const unsubscribe = onValue(appointmentsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const allAppointments = [];

//         Object.entries(data).forEach(([parentKey, nestedObj]) => {
//           Object.entries(nestedObj).forEach(([childKey, appointment]) => {
//             if (appointment.salonName === salonName) {
//               allAppointments.push({
//                 id: childKey,
//                 parentId: parentKey,
//                 ...appointment,
//                 status: appointment.status || "pending",
//                 timestamp: appointment.timestamp || Date.now(),
//               });
//             }
//           });
//         });

//         allAppointments.sort((a, b) => b.timestamp - a.timestamp);
//         setAppointments(allAppointments);
//       } else {
//         setAppointments([]);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   const handleAppointmentStatus = async (appointment, status) => {
//     if (!appointment.parentId || !appointment.id) {
//       Alert.alert("Error", "Appointment ID missing.");
//       return;
//     }

//     const appointmentRef = ref(
//       db,
//       `bookings/${appointment.parentId}/${appointment.id}`
//     );

//     try {
//       await update(appointmentRef, {
//         status,
//         lastUpdated: Date.now(),
//       });

//       const message =
//         status === "accepted"
//           ? `Your appointment with ${appointment.salonName} has been accepted!`
//           : `Your appointment with ${appointment.salonName} has been rejected.`;

//       await sendEmail({
//         to: appointment.userEmail,
//         subject: `Appointment ${status}`,
//         message,
//       });

//       Alert.alert("Success", `Appointment ${status}`);
//     } catch (error) {
//       console.error("Error:", error);
//       Alert.alert("Error", "Failed to update appointment status: " + error.message);
//     }
//   };

//   const sendReminder = async (appointment) => {
//     try {
//       const message = `Reminder: Your appointment with ${appointment.salonName} is scheduled for ${new Date(
//         appointment.date
//       ).toLocaleDateString()} at ${appointment.time}`;
//       await sendEmail({
//         to: appointment.userEmail,
//         subject: "Appointment Reminder",
//         message,
//       });
//       Alert.alert("Success", "Reminder sent successfully!");
//     } catch (error) {
//       console.error("Email Error:", error);
//       Alert.alert("Error", "Failed to send reminder: " + error.message);
//     }
//   };

//   const renderAppointment = ({ item }) => (
//     <View style={styles.appointmentCard}>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>User:</Text> {item.userEmail}
//       </Text>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>Service:</Text> {item.serviceName}
//       </Text>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>Date:</Text>{" "}
//         {new Date(item.date).toLocaleDateString()}
//       </Text>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>Time:</Text> {item.time}
//       </Text>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>Status:</Text> {item.status}
//       </Text>
//       <Text style={styles.appointmentText}>
//         <Text style={styles.boldText}>Created:</Text>{" "}
//         {new Date(item.timestamp).toLocaleString()}
//       </Text>

//       {selectedTab === "upcoming" && item.status === "pending" && (
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.button, styles.acceptButton]}
//             onPress={() => handleAppointmentStatus(item, "accepted")}
//           >
//             <Text style={styles.buttonText}>Accept</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, styles.rejectButton]}
//             onPress={() => handleAppointmentStatus(item, "rejected")}
//           >
//             <Text style={styles.buttonText}>Reject</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {selectedTab === "history" && item.status === "accepted" && (
//         <TouchableOpacity
//           style={[styles.button, styles.reminderButton]}
//           onPress={() => sendReminder(item)}
//         >
//           <Text style={styles.buttonText}>Send Reminder</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   const filterAppointments = () => {
//     if (selectedTab === "upcoming") {
//       return appointments.filter((appt) => appt.status === "pending");
//     } else if (selectedTab === "history") {
//       return appointments.filter(
//         (appt) => appt.status === "accepted" || appt.status === "rejected"
//       );
//     }
//     return appointments;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={30} color="#00665C" marginTop={25} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Appointments</Text>
//       </View>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={[styles.tabButton, selectedTab === "upcoming" && styles.activeTab]}
//           onPress={() => setSelectedTab("upcoming")}
//         >
//           <Text style={styles.tabText}>Upcoming</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tabButton, selectedTab === "history" && styles.activeTab]}
//           onPress={() => setSelectedTab("history")}
//         >
//           <Text style={styles.tabText}>History</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" />
//       ) : (
//         <FlatList
//           data={filterAppointments()}
//           renderItem={renderAppointment}
//           keyExtractor={(item) => item.id}
//           ListEmptyComponent={
//             <Text style={styles.noDataText}>No appointments found</Text>
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#00665C",
//     marginLeft: 50,
//     marginTop: 20,
//   },
//   tabContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 15,
//   },
//   tabButton: {
//     flex: 1,
//     padding: 12,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: "#00665C",
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "white",
//   },
//   appointmentCard: {
//     backgroundColor: "white",
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     elevation: 2,
//   },
//   appointmentText: {
//     fontSize: 14,
//     color: "#333",
//     marginBottom: 4,
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginTop: 10,
//     justifyContent: "space-between",
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "45%",
//   },
//   acceptButton: {
//     backgroundColor: "#00665C",
//   },
//   rejectButton: {
//     backgroundColor: "#FF4444",
//   },
//   reminderButton: {
//     backgroundColor: "#FFA500",
//     marginTop: 10,
//     width: "100%",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   noDataText: {
//     textAlign: "center",
//     fontSize: 16,
//     marginTop: 20,
//     color: "#666",
//   },
// });

// export default AppointmentsScreen;

import React, { useEffect, useState } from "react";
import {
  View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator,
} from "react-native";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { sendEmail } from "../../utils/emailservice.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AppointmentsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const salon = route.params?.salon;

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const db = getDatabase();

  useEffect(() => {
    if (!salon || !salon.ownerId) {
      Alert.alert("Error", "Salon details missing.");
      return;
    }

    const appointmentsRef = ref(db, "bookings/");
    const unsubscribe = onValue(appointmentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const filteredAppointments = [];

        Object.entries(data).forEach(([userId, userBookings]) => {
          Object.entries(userBookings).forEach(([bookingId, booking]) => {
            if (booking.ownerId === salon.ownerId) {
              filteredAppointments.push({
                id: bookingId,
                parentId: userId,
                ...booking,
              });
            }
          });
        });

        // Sort newest first
        filteredAppointments.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAppointments(filteredAppointments);
      } else {
        setAppointments([]);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [salon]);

  const handleAppointmentStatus = async (appointment, status) => {
    if (!appointment.parentId || !appointment.id) {
      Alert.alert("Error", "Invalid appointment ID.");
      return;
    }

    const appointmentRef = ref(db, `bookings/${appointment.parentId}/${appointment.id}`);

    try {
      await update(appointmentRef, {
        status,
        lastUpdated: Date.now(),
      });

      await sendEmail({
        to: appointment.userEmail,
        subject: `Appointment ${status}`,
        message:
          status === "accepted"
            ? `Your appointment with ${appointment.salonName} has been accepted!`
            : `Your appointment with ${appointment.salonName} has been rejected.`,
      });

      Alert.alert("Success", `Appointment ${status}`);
    } catch (error) {
      console.error("Update error:", error);
      Alert.alert("Error", "Failed to update appointment.");
    }
  };

  const sendReminder = async (appointment) => {
    try {
      const msg = `Reminder: Your appointment with ${appointment.salonName} is on ${new Date(
        appointment.date
      ).toLocaleDateString()} at ${appointment.time}`;
      await sendEmail({
        to: appointment.userEmail,
        subject: "Appointment Reminder",
        message: msg,
      });

      Alert.alert("Success", "Reminder sent.");
    } catch (error) {
      console.error("Reminder error:", error);
      Alert.alert("Error", "Could not send reminder.");
    }
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.appointmentCard}>
      <Text style={styles.appointmentText}><Text style={styles.bold}>User:</Text> {item.userEmail}</Text>
      <Text style={styles.appointmentText}><Text style={styles.bold}>Service:</Text> {item.serviceName}</Text>
      <Text style={styles.appointmentText}><Text style={styles.bold}>Date:</Text> {new Date(item.date).toLocaleDateString()}</Text>
      <Text style={styles.appointmentText}><Text style={styles.bold}>Time:</Text> {item.time}</Text>
      <Text style={styles.appointmentText}><Text style={styles.bold}>Status:</Text> {item.status}</Text>

      {selectedTab === "upcoming" && item.status === "pending" && (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.accept]}
            onPress={() => handleAppointmentStatus(item, "accepted")}
          >
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.reject]}
            onPress={() => handleAppointmentStatus(item, "rejected")}
          >
            <Text style={styles.btnText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedTab === "history" && item.status === "accepted" && (
        <TouchableOpacity
          style={[styles.button, styles.reminder]}
          onPress={() => sendReminder(item)}
        >
          <Text style={styles.btnText}>Send Reminder</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const filterAppointments = () => {
    if (selectedTab === "upcoming") {
      return appointments.filter((a) => a.status === "pending");
    } else {
      return appointments.filter((a) => a.status !== "pending");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#00665C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointments</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabBtn, selectedTab === "upcoming" && styles.activeTab]}
          onPress={() => setSelectedTab("upcoming")}
        >
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, selectedTab === "history" && styles.activeTab]}
          onPress={() => setSelectedTab("history")}
        >
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00665C" />
      ) : (
        <FlatList
          data={filterAppointments()}
          keyExtractor={(item) => item.id}
          renderItem={renderAppointment}
          ListEmptyComponent={
            <Text style={styles.noData}>No appointments found.</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: "bold", marginLeft: 20, color: "#00665C" },
  tabs: { flexDirection: "row", justifyContent: "space-around", marginBottom: 15 },
  tabBtn: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#ccc",
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: { backgroundColor: "#00665C" },
  tabText: { color: "#fff", fontWeight: "bold" },
  appointmentCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  appointmentText: { fontSize: 14, marginBottom: 4, color: "#333" },
  bold: { fontWeight: "bold" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  button: {
    padding: 10,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },
  accept: { backgroundColor: "#00665C" },
  reject: { backgroundColor: "#e53935" },
  reminder: { backgroundColor: "#FFA500", marginTop: 10 },
  btnText: { color: "#fff", fontWeight: "bold" },
  noData: { textAlign: "center", marginTop: 20, color: "#777" },
});

export default AppointmentsScreen;
