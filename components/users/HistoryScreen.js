// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   FlatList,
// //   ActivityIndicator,
// //   Modal,
// //   Alert,
// // } from "react-native";
// // import { auth, db } from "../../firebaseConfig";
// // import { ref, get, update, onValue, off } from "firebase/database";
// // import { FontAwesome } from "@expo/vector-icons";
// // import { useNavigation, useIsFocused } from "@react-navigation/native";
// // import moment from "moment";

// // const HistoryScreen = () => {
// //   const navigation = useNavigation();
// //   const isFocused = useIsFocused();
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedBooking, setSelectedBooking] = useState(null);
// //   const [modalVisible, setModalVisible] = useState(false);

// //   useEffect(() => {
// //     if (!isFocused) return;

// //     const user = auth.currentUser;
// //     if (!user) {
// //       setLoading(false);
// //       return;
// //     }

// //     const fetchSalonsAndBookings = async () => {
// //       try {
// //         const salonsRef = ref(db, "salons");
// //         const salonsSnapshot = await get(salonsRef);
// //         let salonsData = {};
// //         if (salonsSnapshot.exists()) {
// //           salonsData = salonsSnapshot.val();
// //         }

// //         const bookingsRef = ref(db, "bookings");
// //         const unsubscribe = onValue(bookingsRef, (snapshot) => {
// //           if (snapshot.exists()) {
// //             const data = snapshot.val();
// //             const userBookings = Object.entries(data)
// //               .filter(([_, booking]) => booking.userId === user.uid)
// //               .map(([key, booking]) => {
// //                 // 💡 Match ownerId with salons
// //                 let matchedSalon = Object.values(salonsData).find(
// //                   (salon) => salon.ownerId === booking.ownerId
// //                 );

// //                 return {
// //                   bookingId: key,
// //                   ...booking,
// //                   salonName: matchedSalon?.salonName || "Unknown Salon",
// //                   salonAddress: matchedSalon?.address || "",
// //                   salonPhone: matchedSalon?.phone || "",
// //                   formattedDate: moment(booking.date).isValid()
// //                     ? moment(booking.date).format("D MMMM YYYY")
// //                     : booking.date,
// //                 };
// //               })
// //               .sort((a, b) => new Date(b.date) - new Date(a.date));

// //             setBookings(userBookings);
// //           } else {
// //             setBookings([]);
// //           }
// //           setLoading(false);
// //         });

// //         return () => {
// //           off(bookingsRef);
// //         };
// //       } catch (error) {
// //         console.error("Error fetching salons or bookings:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchSalonsAndBookings();
// //   }, [isFocused]);

// //   const openModal = (booking) => {
// //     setSelectedBooking(booking);
// //     setModalVisible(true);
// //   };

// //   const closeModal = () => {
// //     setModalVisible(false);
// //     setSelectedBooking(null);
// //   };

// //   const handleCancelBooking = (bookingId) => {
// //     Alert.alert(
// //       "Confirm Cancellation",
// //       "Are you sure you want to cancel this booking?",
// //       [
// //         { text: "No", style: "cancel" },
// //         {
// //           text: "Yes",
// //           onPress: async () => {
// //             try {
// //               const bookingRef = ref(db, `bookings/${bookingId}`);
// //               await update(bookingRef, { status: "Cancelled" });

// //               setBookings((prev) =>
// //                 prev.map((b) =>
// //                   b.bookingId === bookingId ? { ...b, status: "Cancelled" } : b
// //                 )
// //               );

// //               Alert.alert("Success", "Booking cancelled successfully!");
// //             } catch (error) {
// //               console.error("Error cancelling booking:", error);
// //               Alert.alert("Error", "Failed to cancel booking. Please try again.");
// //             }
// //           },
// //         },
// //       ]
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size="large" color="#00665C" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>Booking History</Text>
// //       </View>

// //       <TouchableOpacity
// //         style={styles.backButton}
// //         onPress={() => navigation.goBack()}
// //       >
// //         <FontAwesome name="arrow-left" size={24} color="#fff" />
// //       </TouchableOpacity>

// //       {bookings.length === 0 ? (
// //         <View style={styles.emptyContainer}>
// //           <FontAwesome name="calendar-times-o" size={60} color="#00665C" />
// //           <Text style={styles.emptyText}>No bookings found</Text>
// //         </View>
// //       ) : (
// //         <FlatList
// //           data={bookings}
// //           keyExtractor={(item) => item.bookingId}
// //           contentContainerStyle={styles.flatListContent}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               style={[
// //                 styles.bookingCard,
// //                 item.status === "Cancelled" && styles.cancelledCard,
// //               ]}
// //               onPress={() => openModal(item)}
// //             >
// //               <View style={styles.cardHeader}>
// //                 <Text style={styles.salonName}>{item.salonName}</Text>
// //                 <View
// //                   style={[
// //                     styles.statusBadge,
// //                     item.status === "Cancelled" && styles.cancelledBadge,
// //                     item.status === "Completed" && styles.completedBadge,
// //                   ]}
// //                 >
// //                   <Text style={styles.statusText}>
// //                     {item.status?.toUpperCase() || "N/A"}
// //                   </Text>
// //                 </View>
// //               </View>

// //               <View style={styles.bookingRow}>
// //                 <FontAwesome name="scissors" size={16} color="#00665C" />
// //                 <Text style={styles.bookingDetail}>{item.serviceName}</Text>
// //               </View>

// //               <View style={styles.bookingRow}>
// //                 <FontAwesome name="calendar" size={16} color="#00665C" />
// //                 <Text style={styles.bookingDetail}>{item.formattedDate}</Text>
// //               </View>

// //               <View style={styles.bookingRow}>
// //                 <FontAwesome name="clock-o" size={16} color="#00665C" />
// //                 <Text style={styles.bookingDetail}>{item.time}</Text>
// //               </View>

// //               {item.status !== "Cancelled" && (
// //                 <TouchableOpacity
// //                   style={styles.cancelButton}
// //                   onPress={() => handleCancelBooking(item.bookingId)}
// //                 >
// //                   <Text style={styles.cancelButtonText}>Cancel Booking</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </TouchableOpacity>
// //           )}
// //         />
// //       )}

// //       <Modal
// //         visible={modalVisible}
// //         animationType="slide"
// //         transparent={true}
// //         onRequestClose={closeModal}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <View style={styles.modalContent}>
// //             <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
// //               <FontAwesome name="times" size={24} color="#2A7B6D" />
// //             </TouchableOpacity>

// //             {selectedBooking && (
// //               <>
// //                 <Text style={styles.modalTitle}>{selectedBooking.salonName}</Text>

// //                 <View style={styles.modalSection}>
// //                   <Text style={styles.sectionTitle}>Service Details</Text>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="scissors" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>{selectedBooking.serviceName}</Text>
// //                   </View>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="file-text-o" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>
// //                       {selectedBooking.description || "No description"}
// //                     </Text>
// //                   </View>
// //                 </View>

// //                 <View style={styles.modalSection}>
// //                   <Text style={styles.sectionTitle}>Appointment</Text>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="calendar" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>{selectedBooking.formattedDate}</Text>
// //                   </View>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="clock-o" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>{selectedBooking.time}</Text>
// //                   </View>
// //                 </View>

// //                 <View style={styles.modalSection}>
// //                   <Text style={styles.sectionTitle}>Salon Info</Text>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="map-marker" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>{selectedBooking.salonAddress}</Text>
// //                   </View>
// //                   <View style={styles.modalRow}>
// //                     <FontAwesome name="phone" size={18} color="#00665C" />
// //                     <Text style={styles.modalText}>{selectedBooking.salonPhone}</Text>
// //                   </View>
// //                 </View>

// //                 <View
// //                   style={[
// //                     styles.modalStatus,
// //                     selectedBooking.status === "Cancelled" && styles.cancelledBadge,
// //                     selectedBooking.status === "Completed" && styles.completedBadge,
// //                   ]}
// //                 >
// //                   <Text style={styles.modalStatusText}>
// //                     STATUS: {selectedBooking.status?.toUpperCase()}
// //                   </Text>
// //                 </View>
// //               </>
// //             )}
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#F9F9F9" },
// //   loadingContainer: {
// //     flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff",
// //   },
// //   header: {
// //     width: "100%", height: 200, backgroundColor: "#00665C",
// //     alignItems: "center", justifyContent: "center",
// //     borderBottomLeftRadius: 60, borderBottomRightRadius: 60,
// //     shadowColor: "#000", shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.2, shadowRadius: 10, elevation: 5, marginBottom: 20,
// //   },
// //   headerText: { color: "white", fontSize: 28, fontWeight: "bold", marginTop: 40 },
// //   backButton: {
// //     position: "absolute", top: 60, left: 20, padding: 10,
// //     borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)",
// //   },
// //   emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
// //   emptyText: { fontSize: 18, color: "#00665C", marginTop: 15, fontWeight: "500" },
// //   flatListContent: { paddingHorizontal: 20, paddingBottom: 20 },
// //   bookingCard: {
// //     backgroundColor: "#fff", padding: 20, marginBottom: 15, borderRadius: 15,
// //     shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1, shadowRadius: 5, elevation: 3,
// //     borderLeftWidth: 5, borderLeftColor: "#00665C",
// //   },
// //   cancelledCard: { opacity: 0.8, borderLeftColor: "#ccc" },
// //   cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
// //   salonName: { fontSize: 18, fontWeight: "bold", color: "#00665C", flex: 1 },
// //   statusBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, backgroundColor: "#2A7B6D" },
// //   cancelledBadge: { backgroundColor: "#F44336" },
// //   completedBadge: { backgroundColor: "#4CAF50" },
// //   statusText: { color: "white", fontSize: 12, fontWeight: "bold" },
// //   bookingRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
// //   bookingDetail: { fontSize: 16, color: "#555", marginLeft: 10 },
// //   cancelButton: { backgroundColor: "#F44336", padding: 12, borderRadius: 10, marginTop: 15, alignItems: "center" },
// //   cancelButtonText: { color: "white", fontSize: 16, fontWeight: "600" },
// //   modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
// //   modalContent: { backgroundColor: "white", width: "100%", padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25, maxHeight: "85%" },
// //   modalTitle: { fontSize: 22, fontWeight: "bold", color: "#00665C", marginBottom: 20, textAlign: "center" },
// //   modalSection: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 15 },
// //   sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#00665C", marginBottom: 10 },
// //   modalRow: { flexDirection: "row", alignItems: "flex-start", marginVertical: 8 },
// //   modalText: { fontSize: 16, marginLeft: 10, color: "#333", flex: 1 },
// //   modalStatus: { padding: 12, borderRadius: 8, alignSelf: "center", marginTop: 20, backgroundColor: "#2A7B6D", width: "100%", alignItems: "center" },
// //   modalStatusText: { fontSize: 16, fontWeight: "bold", color: "white" },
// //   closeIcon: { position: "absolute", top: 15, right: 15, padding: 5 },
// // });

// // export default HistoryScreen;
// import React, { useEffect, useState } from "react";
// import {
//   View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Modal, Alert,
// } from "react-native";
// import { auth, db } from "../../firebaseConfig";
// import { ref, get, update, onValue, off } from "firebase/database";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation, useIsFocused } from "@react-navigation/native";
// import moment from "moment";

// const HistoryScreen = () => {
//   const navigation = useNavigation();
//   const isFocused = useIsFocused();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     if (!isFocused) return;

//     const user = auth.currentUser;
//     if (!user) {
//       setLoading(false);
//       return;
//     }

//     const fetchSalonsAndBookings = async () => {
//       try {
//         const salonsRef = ref(db, "salons");
//         const salonsSnapshot = await get(salonsRef);
//         let salonsData = {};
//         if (salonsSnapshot.exists()) {
//           salonsData = salonsSnapshot.val();
//         }

//         const bookingsRef = ref(db, "bookings");
//         const unsubscribe = onValue(bookingsRef, (snapshot) => {
//           if (snapshot.exists()) {
//             const data = snapshot.val();
//             const userBookings = Object.entries(data)
//               .filter(([_, booking]) => booking.userId === user.uid)
//               .map(([key, booking]) => {
//                 let matchedSalon = Object.values(salonsData).find(
//                   (salon) => salon.ownerId === booking.ownerId
//                 );

//                 return {
//                   bookingId: key,
//                   ...booking,
//                   salonName: matchedSalon?.salonName || "Unknown Salon",
//                   salonAddress: matchedSalon?.address || "N/A",
//                   salonPhone: matchedSalon?.phone || "N/A",
//                   formattedDate: moment(booking.date).isValid()
//                     ? moment(booking.date).format("D MMMM YYYY")
//                     : booking.date,
//                 };
//               })
//               .sort((a, b) => new Date(b.date) - new Date(a.date));

//             setBookings(userBookings);
//           } else {
//             setBookings([]);
//           }
//           setLoading(false);
//         });

//         return () => {
//           off(bookingsRef);
//         };
//       } catch (error) {
//         console.error("Error fetching salons or bookings:", error);
//         setLoading(false);
//       }
//     };

//     fetchSalonsAndBookings();
//   }, [isFocused]);

//   const openModal = (booking) => {
//     setSelectedBooking(booking);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedBooking(null);
//   };

//   const handleCancelBooking = (booking) => {
//     if (booking.status === "Accepted" || booking.status === "Completed") {
//       Alert.alert("Cannot Cancel", "You cannot cancel now. Your booking has been accepted.");
//       return;
//     }

//     Alert.alert(
//       "Confirm Cancellation",
//       "Are you sure you want to cancel this booking?",
//       [
//         { text: "No", style: "cancel" },
//         {
//           text: "Yes",
//           onPress: async () => {
//             try {
//               const bookingRef = ref(db, `bookings/${booking.bookingId}`);
//               await update(bookingRef, { status: "Cancelled" });

//               setBookings((prev) =>
//                 prev.map((b) =>
//                   b.bookingId === booking.bookingId ? { ...b, status: "Cancelled" } : b
//                 )
//               );

//               Alert.alert("Success", "Booking cancelled successfully!");
//               closeModal();
//             } catch (error) {
//               console.error("Error cancelling booking:", error);
//               Alert.alert("Error", "Failed to cancel booking. Please try again.");
//             }
//           },
//         },
//       ]
//     );
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#00665C" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Booking History</Text>
//       </View>

//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <FontAwesome name="arrow-left" size={24} color="#fff" />
//       </TouchableOpacity>

//       {bookings.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <FontAwesome name="calendar-times-o" size={60} color="#00665C" />
//           <Text style={styles.emptyText}>No bookings found</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={bookings}
//           keyExtractor={(item) => item.bookingId}
//           contentContainerStyle={styles.flatListContent}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 styles.bookingCard,
//                 item.status === "Cancelled" && styles.cancelledCard,
//               ]}
//               onPress={() => openModal(item)}
//             >
//               <View style={styles.cardHeader}>
//                 <Text style={styles.salonName}>{item.salonName}</Text>
//                 <View
//                   style={[
//                     styles.statusBadge,
//                     item.status === "Cancelled" && styles.cancelledBadge,
//                     item.status === "Completed" && styles.completedBadge,
//                     item.status === "Accepted" && styles.acceptedBadge,
//                   ]}
//                 >
//                   <Text style={styles.statusText}>
//                     {item.status?.toUpperCase() || "N/A"}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.bookingRow}>
//                 <FontAwesome name="scissors" size={16} color="#00665C" />
//                 <Text style={styles.bookingDetail}>{item.serviceName}</Text>
//               </View>

//               <View style={styles.bookingRow}>
//                 <FontAwesome name="calendar" size={16} color="#00665C" />
//                 <Text style={styles.bookingDetail}>{item.formattedDate}</Text>
//               </View>

//               <View style={styles.bookingRow}>
//                 <FontAwesome name="clock-o" size={16} color="#00665C" />
//                 <Text style={styles.bookingDetail}>{item.time}</Text>
//               </View>

//               {item.status !== "Cancelled" && (
//                 <TouchableOpacity
//                   style={styles.cancelButton}
//                   onPress={() => handleCancelBooking(item)}
//                 >
//                   <Text style={styles.cancelButtonText}>Cancel Booking</Text>
//                 </TouchableOpacity>
//               )}
//             </TouchableOpacity>
//           )}
//         />
//       )}

//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
//               <FontAwesome name="times" size={24} color="#2A7B6D" />
//             </TouchableOpacity>

//             {selectedBooking && (
//               <>
//                 <Text style={styles.modalTitle}>{selectedBooking.salonName}</Text>

//                 <View style={styles.modalSection}>
//                   <Text style={styles.sectionTitle}>Service Details</Text>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="scissors" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.serviceName}</Text>
//                   </View>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="file-text-o" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.description || "No description"}</Text>
//                   </View>
//                 </View>

//                 <View style={styles.modalSection}>
//                   <Text style={styles.sectionTitle}>Appointment</Text>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="calendar" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.formattedDate}</Text>
//                   </View>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="clock-o" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.time}</Text>
//                   </View>
//                 </View>

//                 <View style={styles.modalSection}>
//                   <Text style={styles.sectionTitle}>Salon Info</Text>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="map-marker" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.salonAddress}</Text>
//                   </View>
//                   <View style={styles.modalRow}>
//                     <FontAwesome name="phone" size={18} color="#00665C" />
//                     <Text style={styles.modalText}>{selectedBooking.salonPhone}</Text>
//                   </View>
//                 </View>

//                 <View
//                   style={[
//                     styles.modalStatus,
//                     selectedBooking.status === "Cancelled" && styles.cancelledBadge,
//                     selectedBooking.status === "Completed" && styles.completedBadge,
//                     selectedBooking.status === "Accepted" && styles.acceptedBadge,
//                   ]}
//                 >
//                   <Text style={styles.modalStatusText}>
//                     STATUS: {selectedBooking.status?.toUpperCase()}
//                   </Text>
//                 </View>
//               </>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F9F9F9" },
//   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
//   header: {
//     width: "100%", height: 200, backgroundColor: "#00665C", alignItems: "center", justifyContent: "center",
//     borderBottomLeftRadius: 60, borderBottomRightRadius: 60,
//     shadowColor: "#000", shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2, shadowRadius: 10, elevation: 5, marginBottom: 20,
//   },
//   headerText: { color: "white", fontSize: 28, fontWeight: "bold", marginTop: 40 },
//   backButton: { position: "absolute", top: 60, left: 20, padding: 10, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)" },
//   emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
//   emptyText: { fontSize: 18, color: "#00665C", marginTop: 15, fontWeight: "500" },
//   flatListContent: { paddingHorizontal: 20, paddingBottom: 20 },
//   bookingCard: {
//     backgroundColor: "#fff", padding: 20, marginBottom: 15, borderRadius: 15,
//     shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1, shadowRadius: 5, elevation: 3,
//     borderLeftWidth: 5, borderLeftColor: "#00665C",
//   },
//   cancelledCard: { opacity: 0.8, borderLeftColor: "#ccc" },
//   cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
//   salonName: { fontSize: 18, fontWeight: "bold", color: "#00665C", flex: 1 },
//   statusBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, backgroundColor: "#2A7B6D" },
//   cancelledBadge: { backgroundColor: "#F44336" },
//   completedBadge: { backgroundColor: "#4CAF50" },
//   acceptedBadge: { backgroundColor: "#FFA500" },
//   statusText: { color: "white", fontSize: 12, fontWeight: "bold" },
//   bookingRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
//   bookingDetail: { fontSize: 16, color: "#555", marginLeft: 10 },
//   cancelButton: { backgroundColor: "#F44336", padding: 12, borderRadius: 10, marginTop: 15, alignItems: "center" },
//   cancelButtonText: { color: "white", fontSize: 16, fontWeight: "600" },
//   modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
//   modalContent: { backgroundColor: "white", width: "100%", padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25, maxHeight: "85%" },
//   modalTitle: { fontSize: 22, fontWeight: "bold", color: "#00665C", marginBottom: 20, textAlign: "center" },
//   modalSection: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 15 },
//   sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#00665C", marginBottom: 10 },
//   modalRow: { flexDirection: "row", alignItems: "flex-start", marginVertical: 8 },
//   modalText: { fontSize: 16, marginLeft: 10, color: "#333", flex: 1 },
//   modalStatus: { padding: 12, borderRadius: 8, alignSelf: "center", marginTop: 20, backgroundColor: "#2A7B6D", width: "100%", alignItems: "center" },
//   modalStatusText: { fontSize: 16, fontWeight: "bold", color: "white" },
//   closeIcon: { position: "absolute", top: 15, right: 15, padding: 5 },
// });

// export default HistoryScreen;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { auth, db } from "../../firebaseConfig";
import { ref, get, update, onValue, off } from "firebase/database";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import moment from "moment";

const HistoryScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!isFocused) return;

    const user = auth.currentUser;
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchSalonsAndBookings = async () => {
      try {
        const salonsRef = ref(db, "salons");
        const salonsSnapshot = await get(salonsRef);
        let salonsData = {};
        if (salonsSnapshot.exists()) {
          salonsData = salonsSnapshot.val();
        }

        const bookingsRef = ref(db, "bookings");
        const unsubscribe = onValue(bookingsRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const userBookings = Object.entries(data)
              .filter(([_, booking]) => booking.userId === user.uid)
              .map(([key, booking]) => {
                let matchedSalon = Object.values(salonsData).find(
                  (salon) => salon.ownerId === booking.ownerId
                );

                return {
                  bookingId: key,
                  ...booking,
                  salonName: matchedSalon?.salonName || "Unknown Salon",
                  salonAddress: matchedSalon?.address || "",
                  salonPhone: matchedSalon?.phone || "",
                  formattedDate: moment(booking.date).isValid()
                    ? moment(booking.date).format("D MMMM YYYY")
                    : booking.date,
                };
              })
              .sort((a, b) => new Date(b.date) - new Date(a.date));

            setBookings(userBookings);
          } else {
            setBookings([]);
          }
          setLoading(false);
        });

        return () => {
          off(bookingsRef);
        };
      } catch (error) {
        console.error("Error fetching salons or bookings:", error);
        setLoading(false);
      }
    };

    fetchSalonsAndBookings();
  }, [isFocused]);

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedBooking(null);
  };

  const handleCancelBooking = (booking) => {
    if (booking.status === "Accepted" || booking.status === "Completed") {
      Alert.alert("Cannot Cancel", "You cannot cancel now. Your booking is already accepted.");
      return;
    }

    Alert.alert(
      "Confirm Cancellation",
      "Are you sure you want to cancel this booking?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            try {
              const bookingRef = ref(db, `bookings/${booking.bookingId}`);
              await update(bookingRef, { status: "Cancelled" });

              setBookings((prev) =>
                prev.map((b) =>
                  b.bookingId === booking.bookingId ? { ...b, status: "Cancelled" } : b
                )
              );

              Alert.alert("Success", "Booking cancelled successfully!");
            } catch (error) {
              console.error("Error cancelling booking:", error);
              Alert.alert("Error", "Failed to cancel booking. Please try again.");
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00665C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking History</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {bookings.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="calendar-times-o" size={60} color="#00665C" />
          <Text style={styles.emptyText}>No bookings found</Text>
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(item) => item.bookingId}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.bookingCard,
                item.status === "Cancelled" && styles.cancelledCard,
              ]}
              onPress={() => openModal(item)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.salonName}>{item.salonName}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    item.status === "Cancelled" && styles.cancelledBadge,
                    item.status === "Completed" && styles.completedBadge,
                    item.status === "Accepted" && styles.acceptedBadge,
                  ]}
                >
                  <Text style={styles.statusText}>
                    {item.status?.toUpperCase() || "N/A"}
                  </Text>
                </View>
              </View>

              <View style={styles.bookingRow}>
                <FontAwesome name="scissors" size={16} color="#00665C" />
                <Text style={styles.bookingDetail}>{item.serviceName}</Text>
              </View>

              <View style={styles.bookingRow}>
                <FontAwesome name="calendar" size={16} color="#00665C" />
                <Text style={styles.bookingDetail}>{item.formattedDate}</Text>
              </View>

              <View style={styles.bookingRow}>
                <FontAwesome name="clock-o" size={16} color="#00665C" />
                <Text style={styles.bookingDetail}>{item.time}</Text>
              </View>

              {/* ✅ Show Cancel button only if status is Pending */}
              {item.status === "Pending" && (
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => handleCancelBooking(item)}
                >
                  <Text style={styles.cancelButtonText}>Cancel Booking</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
        />
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
              <FontAwesome name="times" size={24} color="#2A7B6D" />
            </TouchableOpacity>

            {selectedBooking && (
              <>
                <Text style={styles.modalTitle}>{selectedBooking.salonName}</Text>

                <View style={styles.modalSection}>
                  <Text style={styles.sectionTitle}>Service Details</Text>
                  <View style={styles.modalRow}>
                    <FontAwesome name="scissors" size={18} color="#00665C" />
                    <Text style={styles.modalText}>{selectedBooking.serviceName}</Text>
                  </View>
                  <View style={styles.modalRow}>
                    <FontAwesome name="file-text-o" size={18} color="#00665C" />
                    <Text style={styles.modalText}>
                      {selectedBooking.description || "No description"}
                    </Text>
                  </View>
                </View>

                <View style={styles.modalSection}>
                  <Text style={styles.sectionTitle}>Appointment</Text>
                  <View style={styles.modalRow}>
                    <FontAwesome name="calendar" size={18} color="#00665C" />
                    <Text style={styles.modalText}>{selectedBooking.formattedDate}</Text>
                  </View>
                  <View style={styles.modalRow}>
                    <FontAwesome name="clock-o" size={18} color="#00665C" />
                    <Text style={styles.modalText}>{selectedBooking.time}</Text>
                  </View>
                </View>

                <View style={styles.modalSection}>
                  <Text style={styles.sectionTitle}>Salon Info</Text>
                  <View style={styles.modalRow}>
                    <FontAwesome name="map-marker" size={18} color="#00665C" />
                    <Text style={styles.modalText}>{selectedBooking.salonAddress}</Text>
                  </View>
                  <View style={styles.modalRow}>
                    <FontAwesome name="phone" size={18} color="#00665C" />
                    <Text style={styles.modalText}>{selectedBooking.salonPhone}</Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.modalStatus,
                    selectedBooking.status === "Cancelled" && styles.cancelledBadge,
                    selectedBooking.status === "Completed" && styles.completedBadge,
                    selectedBooking.status === "Accepted" && styles.acceptedBadge,
                  ]}
                >
                  <Text style={styles.modalStatusText}>
                    STATUS: {selectedBooking.status?.toUpperCase()}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  loadingContainer: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff",
  },
  header: {
    width: "100%", height: 200, backgroundColor: "#00665C",
    alignItems: "center", justifyContent: "center",
    borderBottomLeftRadius: 60, borderBottomRightRadius: 60,
    shadowColor: "#000", shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 10, elevation: 5, marginBottom: 20,
  },
  headerText: { color: "white", fontSize: 28, fontWeight: "bold", marginTop: 40 },
  backButton: {
    position: "absolute", top: 60, left: 20, padding: 10,
    borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)",
  },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  emptyText: { fontSize: 18, color: "#00665C", marginTop: 15, fontWeight: "500" },
  flatListContent: { paddingHorizontal: 20, paddingBottom: 20 },
  bookingCard: {
    backgroundColor: "#fff", padding: 20, marginBottom: 15, borderRadius: 15,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 5, elevation: 3,
    borderLeftWidth: 5, borderLeftColor: "#00665C",
  },
  cancelledCard: { opacity: 0.8, borderLeftColor: "#ccc" },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  salonName: { fontSize: 18, fontWeight: "bold", color: "#00665C", flex: 1 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, backgroundColor: "#2A7B6D" },
  cancelledBadge: { backgroundColor: "#F44336" },
  completedBadge: { backgroundColor: "#4CAF50" },
  acceptedBadge: { backgroundColor: "#FF9800" },
  statusText: { color: "white", fontSize: 12, fontWeight: "bold" },
  bookingRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  bookingDetail: { fontSize: 16, color: "#555", marginLeft: 10 },
  cancelButton: { backgroundColor: "#F44336", padding: 12, borderRadius: 10, marginTop: 15, alignItems: "center" },
  cancelButtonText: { color: "white", fontSize: 16, fontWeight: "600" },
  modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "white", width: "100%", padding: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25, maxHeight: "85%" },
  modalTitle: { fontSize: 22, fontWeight: "bold", color: "#00665C", marginBottom: 20, textAlign: "center" },
  modalSection: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: "#eee", paddingBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#00665C", marginBottom: 10 },
  modalRow: { flexDirection: "row", alignItems: "flex-start", marginVertical: 8 },
  modalText: { fontSize: 16, marginLeft: 10, color: "#333", flex: 1 },
  modalStatus: { padding: 12, borderRadius: 8, alignSelf: "center", marginTop: 20, backgroundColor: "#2A7B6D", width: "100%", alignItems: "center" },
  modalStatusText: { fontSize: 16, fontWeight: "bold", color: "white" },
  closeIcon: { position: "absolute", top: 15, right: 15, padding: 5 },
});

export default HistoryScreen;
