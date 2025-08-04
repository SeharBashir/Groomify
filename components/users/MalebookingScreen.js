// // // import React, { useState } from 'react';
// // // import { 
// // //   View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, 
// // //   Alert, ActivityIndicator, Platform, Dimensions 
// // // } from 'react-native';
// // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // import { getAuth } from 'firebase/auth';
// // // import { ref, set, getDatabase } from 'firebase/database';
// // // import { FontAwesome } from '@expo/vector-icons';


// // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // const { width, height } = Dimensions.get("window");

// // // const MalebookingScreen = () => {
// // //   const route = useRoute();
// // //   const { service, ownerId } = route.params || {};
// // //   const navigation = useNavigation();
// // //   const auth = getAuth();
// // //   const user = auth.currentUser;
// // //   const realtimeDb = getDatabase();

// // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // //   const [showDate, setShowDate] = useState(false);
// // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // //   const [showTime, setShowTime] = useState(false);
// // //   const [bookingLoading, setBookingLoading] = useState(false);

// // //   const onChangeDate = (event, selectedDate) => {
// // //     setShowDate(Platform.OS === 'ios');
// // //     if (selectedDate) {
// // //       const today = new Date();
// // //       today.setHours(0, 0, 0, 0);

// // //       if (selectedDate < today) {
// // //         Alert.alert('Invalid Date', 'You cannot select a past date.');
// // //         return;
// // //       }
// // //       setSelectedDate(selectedDate);
// // //     }
// // //   };

// // //   const onChangeTime = (event, selectedTime) => {
// // //     setShowTime(Platform.OS === 'ios');
// // //     setSelectedTime(selectedTime || new Date());
// // //   };

// // //   const handleConfirmBooking = async () => {
// // //     if (!user) {
// // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // //       return;
// // //     }

// // //     if (!ownerId) {
// // //       Alert.alert('Error', 'Owner ID is missing.');
// // //       return;
// // //     }

// // //     if (!service || !service.id) {
// // //       Alert.alert('Error', 'Service ID is missing.');
// // //       return;
// // //     }

// // //     setBookingLoading(true);

// // //     try {
// // //       await set(ref(realtimeDb, `bookings/${user.uid}`), {
// // //         userId: user.uid,
// // //         userEmail: user.email,
// // //         ownerId: ownerId,
// // //         serviceId: service.id,
// // //         serviceName: service.serviceName || 'Unknown Service',
// // //         price: service.price || 0,
// // //         description: service.serviceDescription || "No description available",
// // //         date: selectedDate.toISOString(),
// // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // //         status: 'pending',
// // //       });

// // //       Alert.alert('Success', 'Booking is confirmed successfully!');
// // //     } catch (error) {
// // //       console.error('Error booking service:', error);
// // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // //     } finally {
// // //       setBookingLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <ScrollView 
// // //       contentContainerStyle={styles.scrollContainer}
// // //       style={styles.background}
// // //     >
// // //       <View style={styles.header}>
// // //         <TouchableOpacity 
// // //           style={styles.backButton}
// // //           onPress={() => navigation.goBack()}
// // //         >
// // //           <FontAwesome name="arrow-left" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Schedule Your Appointment</Text>
// // //       </View>

// // //       <View style={styles.card}>
// // //         {service?.images && service.images.length > 0 ? (
// // //           <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // //         ) : (
// // //           <View style={styles.imagePlaceholder} />
// // //         )}
// // //         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // //         <Text style={styles.price}>{service?.price || "0"} PKR</Text>
// // //         <Text style={styles.description}>{service?.serviceDescription || "No description available"}</Text>
// // //       </View>

// // //       <View style={styles.dateTimeContainer}>
// // //         <View style={styles.datePicker}>
// // //           <Text style={styles.sectionTitle}>Date</Text>
// // //           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // //             <Text>{selectedDate.toLocaleDateString()}</Text>
// // //           </TouchableOpacity>
// // //           {showDate && (
// // //             <DateTimePicker
// // //               value={selectedDate}
// // //               mode="date"
// // //               is24Hour={true}
// // //               display="default"
// // //               minimumDate={new Date()}
// // //               onChange={onChangeDate}
// // //             />
// // //           )}
// // //         </View>

// // //         <View style={styles.timePicker}>
// // //           <Text style={styles.sectionTitle}>Time</Text>
// // //           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // //             <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // //           </TouchableOpacity>
// // //           {showTime && (
// // //             <DateTimePicker
// // //               value={selectedTime}
// // //               mode="time"
// // //               is24Hour={false}
// // //               display="default"
// // //               onChange={onChangeTime}
// // //             />
// // //           )}
// // //         </View>
// // //       </View>

// // //       <TouchableOpacity
// // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // //         onPress={handleConfirmBooking}
// // //         disabled={bookingLoading}
// // //       >
// // //         {bookingLoading ? (
// // //           <ActivityIndicator color="white" />
// // //         ) : (
// // //           <Text style={styles.confirmButtonText}>Book Now</Text>
// // //         )}
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   scrollContainer: {
// // //     flexGrow: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   background: {
// // //     flex: 1,
// // //     backgroundColor: '#f0f8ff',
// // //   },
// // //   header: { 
// // //     flexDirection: "row", 
// // //     alignItems: "center", 
// // //     marginBottom: 20,
// // //     backgroundColor: "#00665C",
// // //     width: '100%',
// // //     justifyContent: 'center',
// // //     borderBottomLeftRadius: 30,
// // //     borderBottomRightRadius: 30,
// // //     overflow: 'hidden',
// // //     height: '25%'
// // //   },
// // //   backButton: { 
// // //     position: 'absolute',
// // //     left: 10,
// // //     top: 40,
// // //     borderRadius: 50,
// // //     width: 40,
// // //     height: 40,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     zIndex: 1,
// // //   },
// // //   headerTitle: { 
// // //     fontSize: 23, 
// // //     fontWeight: "bold", 
// // //     color: "#fff",
// // //     paddingVertical: 10,
// // //   },
// // //   card: { 
// // //     backgroundColor: "#fff", 
// // //     padding: 15, 
// // //     borderRadius: 10, 
// // //     alignItems: "center", 
// // //     width: width * 0.9,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3,
// // //     borderColor: '#00665C',
// // //     borderWidth: 7
// // //   },
// // //   serviceImage: { 
// // //     width: width * 0.7, 
// // //     height: width * 0.5, 
// // //     borderRadius: 10 
// // //   },
// // //   imagePlaceholder: { 
// // //     width: width * 0.7, 
// // //     height: width * 0.5, 
// // //     borderRadius: 10, 
// // //     backgroundColor: '#ddd' 
// // //   },
// // //   serviceName: { 
// // //     fontSize: 20, 
// // //     fontWeight: "bold", 
// // //     marginTop: 10 
// // //   },
// // //   price: { 
// // //     fontSize: 18, 
// // //     fontWeight: "bold", 
// // //     color: "#ff5733", 
// // //     marginTop: 5 
// // //   },
// // //   description: { 
// // //     fontSize: 14, 
// // //     color: "#555", 
// // //     textAlign: "justify", 
// // //     marginTop: 5 
// // //   },
// // //   sectionTitle: { 
// // //     fontSize: 18, 
// // //     fontWeight: "bold", 
// // //     marginTop: 20 
// // //   },
// // //   dateTimeContainer: { 
// // //     flexDirection: "row", 
// // //     justifyContent: "space-between", 
// // //     marginTop: 20,
// // //     width: width * 0.9,
// // //   },
// // //   datePicker: { 
// // //     flex: 1, 
// // //     marginRight: 10 
// // //   },
// // //   timePicker: { 
// // //     flex: 1, 
// // //     marginLeft: 10 
// // //   },
// // //   pickerButton: { 
// // //     padding: 12, 
// // //     backgroundColor: "#f0f0f0", 
// // //     borderRadius: 8, 
// // //     alignItems: "center", 
// // //     marginTop: 10 ,
// // //     borderColor: '#00665C',
// // //     borderWidth: 4
// // //   },
// // //   confirmButton: { 
// // //     backgroundColor: "#00665C", 
// // //     padding: 15, 
// // //     alignItems: "center", 
// // //     borderRadius: 10, 
// // //     marginTop: 20,
// // //     width: width * 0.9,
// // //   },
// // //   confirmButtonText: { 
// // //     color: "#fff", 
// // //     fontWeight: "bold", 
// // //     fontSize: 16 
// // //   },
// // //   loadingButton: { 
// // //     opacity: 0.6 
// // //   },
// // // });

// // // export default MalebookingScreen;
// // import React, { useState } from 'react';
// // import {
// //   View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,
// //   Alert, ActivityIndicator, Platform, Dimensions
// // } from 'react-native';
// // import { useRoute, useNavigation } from '@react-navigation/native';
// // import { getAuth } from 'firebase/auth';
// // import { ref, set, getDatabase } from 'firebase/database';
// // import { FontAwesome } from '@expo/vector-icons';
// // import DateTimePicker from '@react-native-community/datetimepicker';
// // import { saveUserAction } from "../../utils/saveUserAction";

// // const { width } = Dimensions.get("window");

// // const MalebookingScreen = () => {
// //   const route = useRoute();
// //   const { service, salon } = route.params || {}; // 💥 use salon object (like BookServiceScreen)
// //   const navigation = useNavigation();
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const uid = user ? user.uid : null;
// //   const realtimeDb = getDatabase();

// //   const [selectedDate, setSelectedDate] = useState(new Date());
// //   const [showDate, setShowDate] = useState(false);
// //   const [selectedTime, setSelectedTime] = useState(new Date());
// //   const [showTime, setShowTime] = useState(false);
// //   const [bookingLoading, setBookingLoading] = useState(false);

// //   const onChangeDate = (event, selectedDate) => {
// //     setShowDate(Platform.OS === 'ios');
// //     if (selectedDate) {
// //       const today = new Date();
// //       today.setHours(0, 0, 0, 0);
// //       if (selectedDate < today) {
// //         Alert.alert('Invalid Date', 'You cannot select a past date.');
// //         return;
// //       }
// //       setSelectedDate(selectedDate);
// //     }
// //   };

// //   const onChangeTime = (event, selectedTime) => {
// //     setShowTime(Platform.OS === 'ios');
// //     setSelectedTime(selectedTime || new Date());
// //   };

// //   const handleConfirmBooking = async () => {
// //     if (!user) {
// //       Alert.alert('Error', 'You must be logged in to book a service.');
// //       return;
// //     }

// //     if (!salon || !salon.ownerId) {
// //       Alert.alert('Error', 'Owner ID is missing.');
// //       return;
// //     }

// //     if (!service || !service.id) {
// //       Alert.alert('Error', 'Service ID is missing.');
// //       return;
// //     }

// //     setBookingLoading(true);

// //     try {
// //       await set(ref(realtimeDb, `bookings/${user.uid}`), {
// //         userId: user.uid,
// //         userEmail: user.email,
// //         ownerId: salon.ownerId,
// //         salonName: salon.salonName || 'Unknown Salon',
// //         serviceId: service.id,
// //         serviceName: service.serviceName || 'Unknown Service',
// //         price: service.price || 0,
// //         description: service.serviceDescription || "No description available",
// //         date: selectedDate.toISOString(),
// //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// //         status: 'pending',
// //       });

// //       // Save user action
// //       saveUserAction(
// //         user.uid,
// //         service.id,
// //         service.serviceName,
// //         "MalebookingScreen",
// //         "booked",
// //         10
// //       );

// //       Alert.alert('Success', 'Booking is confirmed successfully!');
// //     } catch (error) {
// //       console.error('Error booking service:', error);
// //       Alert.alert('Error', 'Failed to book service. Please try again.');
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   };

// //   const handleAddReview = () => {
// //     if (!service || !salon) {
// //       Alert.alert('Error', 'Missing service or salon details.');
// //       return;
// //     }
// //     if (!uid) {
// //       Alert.alert('Error', 'User not logged in.');
// //       return;
// //     }

// //     navigation.navigate('AddReviewRating', {
// //       serviceId: service.id,
// //       salonId: salon.id,
// //       ownerId: salon.ownerId,
// //       serviceName: service.serviceName,
// //     });
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.background}>
// //       <View style={styles.header}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <FontAwesome name="arrow-left" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Schedule Your Appointment</Text>
// //       </View>

// //       <View style={styles.card}>
// //         {service?.images && service.images.length > 0 ? (
// //           <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// //         ) : (
// //           <View style={styles.imagePlaceholder} />
// //         )}
// //         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// //         <Text style={styles.price}>{service?.price || "0"} PKR</Text>
// //         <Text style={styles.description}>{service?.serviceDescription || "No description available"}</Text>
// //       </View>

// //       <View style={styles.dateTimeContainer}>
// //         <View style={styles.datePicker}>
// //           <Text style={styles.sectionTitle}>Date</Text>
// //           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// //             <Text>{selectedDate.toLocaleDateString()}</Text>
// //           </TouchableOpacity>
// //           {showDate && (
// //             <DateTimePicker
// //               value={selectedDate}
// //               mode="date"
// //               is24Hour={true}
// //               display="default"
// //               minimumDate={new Date()}
// //               onChange={onChangeDate}
// //             />
// //           )}
// //         </View>

// //         <View style={styles.timePicker}>
// //           <Text style={styles.sectionTitle}>Time</Text>
// //           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// //             <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// //           </TouchableOpacity>
// //           {showTime && (
// //             <DateTimePicker
// //               value={selectedTime}
// //               mode="time"
// //               is24Hour={false}
// //               display="default"
// //               onChange={onChangeTime}
// //             />
// //           )}
// //         </View>
// //       </View>

// //       <TouchableOpacity
// //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// //         onPress={handleConfirmBooking}
// //         disabled={bookingLoading}
// //       >
// //         {bookingLoading ? (
// //           <ActivityIndicator color="white" />
// //         ) : (
// //           <Text style={styles.confirmButtonText}>Book Now</Text>
// //         )}
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.reviewButton}
// //         onPress={handleAddReview}
// //       >
// //         <Text style={styles.reviewButtonText}>Add Review</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollContainer: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   background: {
// //     flex: 1,
// //     backgroundColor: '#f0f8ff',
// //   },
// //   header: { 
// //     flexDirection: "row", 
// //     alignItems: "center", 
// //     marginBottom: 20,
// //     backgroundColor: "#00665C",
// //     width: '100%',
// //     justifyContent: 'center',
// //     borderBottomLeftRadius: 30,
// //     borderBottomRightRadius: 30,
// //     overflow: 'hidden',
// //     height: '25%'
// //   },
// //   backButton: { 
// //     position: 'absolute',
// //     left: 10,
// //     top: 40,
// //     borderRadius: 50,
// //     width: 40,
// //     height: 40,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: 1,
// //   },
// //   headerTitle: { 
// //     fontSize: 23,
// //     fontWeight: "bold",
// //     color: "#fff",
// //     paddingVertical: 10,
// //   },
// //   card: { 
// //     backgroundColor: "#fff",
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     width: width * 0.9,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //     borderColor: '#00665C',
// //     borderWidth: 7
// //   },
// //   serviceImage: { 
// //     width: width * 0.7,
// //     height: width * 0.5,
// //     borderRadius: 10 
// //   },
// //   imagePlaceholder: { 
// //     width: width * 0.7,
// //     height: width * 0.5,
// //     borderRadius: 10,
// //     backgroundColor: '#ddd' 
// //   },
// //   serviceName: { 
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginTop: 10 
// //   },
// //   price: { 
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#ff5733",
// //     marginTop: 5 
// //   },
// //   description: { 
// //     fontSize: 14,
// //     color: "#555",
// //     textAlign: "justify",
// //     marginTop: 5 
// //   },
// //   sectionTitle: { 
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginTop: 20 
// //   },
// //   dateTimeContainer: { 
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginTop: 20,
// //     width: width * 0.9,
// //   },
// //   datePicker: { 
// //     flex: 1,
// //     marginRight: 10 
// //   },
// //   timePicker: { 
// //     flex: 1,
// //     marginLeft: 10 
// //   },
// //   pickerButton: { 
// //     padding: 12,
// //     backgroundColor: "#f0f0f0",
// //     borderRadius: 8,
// //     alignItems: "center",
// //     marginTop: 10,
// //     borderColor: '#00665C',
// //     borderWidth: 4
// //   },
// //   confirmButton: { 
// //     backgroundColor: "#00665C",
// //     padding: 15,
// //     alignItems: "center",
// //     borderRadius: 10,
// //     marginTop: 20,
// //     width: width * 0.9,
// //   },
// //   confirmButtonText: { 
// //     color: "#fff",
// //     fontWeight: "bold",
// //     fontSize: 16 
// //   },
// //   loadingButton: { 
// //     opacity: 0.6 
// //   },
// //   reviewButton: {
// //     backgroundColor: '#FF9800',
// //     padding: 12,
// //     alignItems: 'center',
// //     borderRadius: 10,
// //     marginTop: 10,
// //     width: width * 0.9,
// //   },
// //   reviewButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //   },
// // });

// // export default MalebookingScreen;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform, Dimensions } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { ref, set, getDatabase } from 'firebase/database';
// import { FontAwesome } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { saveUserAction } from "../../utils/saveUserAction";

// const { width } = Dimensions.get("window");

// const MalebookingScreen = () => {
//   const route = useRoute();
//   const { service, salon } = route.params || {};
//   const navigation = useNavigation();
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const realtimeDb = getDatabase();

//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDate, setShowDate] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(new Date());
//   const [showTime, setShowTime] = useState(false);
//   const [bookingLoading, setBookingLoading] = useState(false);

//   const onChangeDate = (event, selectedDate) => {
//     setShowDate(Platform.OS === 'ios');
//     if (selectedDate) {
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       if (selectedDate < today) {
//         Alert.alert('Invalid Date', 'You cannot select a past date.');
//         return;
//       }
//       setSelectedDate(selectedDate);
//     }
//   };

//   const onChangeTime = (event, selectedTime) => {
//     setShowTime(Platform.OS === 'ios');
//     setSelectedTime(selectedTime || new Date());
//   };

//   const handleConfirmBooking = async () => {
//     if (!user) {
//       Alert.alert('Error', 'You must be logged in to book a service.');
//       return;
//     }

//     if (!salon || !salon.ownerId) {
//       Alert.alert('Error', 'Salon information missing.');
//       return;
//     }

//     if (!service || !service.id) {
//       Alert.alert('Error', 'Service ID missing.');
//       return;
//     }

//     setBookingLoading(true);

//     try {
//       await set(ref(realtimeDb, `bookings/${user.uid}`), {
//         userId: user.uid,
//         userEmail: user.email,
//         ownerId: salon.ownerId,
//         salonId: salon.id,
//         salonName: salon.salonName || 'Unknown Salon',
//         serviceId: service.id,
//         serviceName: service.serviceName || 'Unknown Service',
//         price: service.price || 0,
//         description: service.serviceDescription || "No description available",
//         date: selectedDate.toISOString(),
//         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         status: 'pending',
//       });

//       saveUserAction(user.uid, service.id, service.serviceName, "MalebookingScreen", "booked", 10);

//       Alert.alert('Success', 'Booking confirmed successfully!');
//     } catch (error) {
//       console.error('Error booking service:', error);
//       Alert.alert('Error', 'Failed to book service. Please try again.');
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   const handleAddReview = () => {
//     if (!service || !salon) {
//       Alert.alert('Error', 'Missing service or salon details.');
//       return;
//     }
//     if (!user) {
//       Alert.alert('Error', 'User not logged in.');
//       return;
//     }

//     navigation.navigate('AddReviewRating', {
//       serviceId: service.id,
//       salonId: salon.id,
//       ownerId: salon.ownerId,
//       serviceName: service.serviceName,
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.background}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <FontAwesome name="arrow-left" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Schedule Your Appointment</Text>
//       </View>

//       <View style={styles.card}>
//         {service?.images && service.images.length > 0 ? (
//           <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
//         ) : (
//           <View style={styles.imagePlaceholder} />
//         )}
//         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
//         <Text style={styles.price}>{service?.price || "0"} PKR</Text>
//         <Text style={styles.description}>{service?.serviceDescription || "No description available"}</Text>
//       </View>

//       <View style={styles.dateTimeContainer}>
//         <View style={styles.datePicker}>
//           <Text style={styles.sectionTitle}>Date</Text>
//           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
//             <Text>{selectedDate.toLocaleDateString()}</Text>
//           </TouchableOpacity>
//           {showDate && (
//             <DateTimePicker
//               value={selectedDate}
//               mode="date"
//               is24Hour={true}
//               display="default"
//               minimumDate={new Date()}
//               onChange={onChangeDate}
//             />
//           )}
//         </View>

//         <View style={styles.timePicker}>
//           <Text style={styles.sectionTitle}>Time</Text>
//           <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
//             <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
//           </TouchableOpacity>
//           {showTime && (
//             <DateTimePicker
//               value={selectedTime}
//               mode="time"
//               is24Hour={false}
//               display="default"
//               onChange={onChangeTime}
//             />
//           )}
//         </View>
//       </View>

//       <TouchableOpacity
//         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
//         onPress={handleConfirmBooking}
//         disabled={bookingLoading}
//       >
//         {bookingLoading ? <ActivityIndicator color="white" /> : <Text style={styles.confirmButtonText}>Book Now</Text>}
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.reviewButton} onPress={handleAddReview}>
//         <Text style={styles.reviewButtonText}>Add Review</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   background: {
//     flex: 1,
//     backgroundColor: '#f0f8ff',
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     backgroundColor: "#00665C",
//     width: '100%',
//     justifyContent: 'center',
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     overflow: 'hidden',
//     height: '25%'
//   },
//   backButton: {
//     position: 'absolute',
//     left: 10,
//     top: 40,
//     borderRadius: 50,
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   headerTitle: {
//     fontSize: 23,
//     fontWeight: "bold",
//     color: "#fff",
//     paddingVertical: 10,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     width: width * 0.9,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     borderColor: '#00665C',
//     borderWidth: 7
//   },
//   serviceImage: {
//     width: width * 0.7,
//     height: width * 0.5,
//     borderRadius: 10
//   },
//   imagePlaceholder: {
//     width: width * 0.7,
//     height: width * 0.5,
//     borderRadius: 10,
//     backgroundColor: '#ddd'
//   },
//   serviceName: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#ff5733",
//     marginTop: 5
//   },
//   description: {
//     fontSize: 14,
//     color: "#555",
//     textAlign: "justify",
//     marginTop: 5
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20
//   },
//   dateTimeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//     width: width * 0.9,
//   },
//   datePicker: {
//     flex: 1,
//     marginRight: 10
//   },
//   timePicker: {
//     flex: 1,
//     marginLeft: 10
//   },
//   pickerButton: {
//     padding: 12,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//     borderColor: '#00665C',
//     borderWidth: 4
//   },
//   confirmButton: {
//     backgroundColor: "#00665C",
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 10,
//     marginTop: 20,
//     width: width * 0.9,
//   },
//   confirmButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16
//   },
//   loadingButton: {
//     opacity: 0.6
//   },
//   reviewButton: {
//     backgroundColor: '#FF9800',
//     padding: 12,
//     alignItems: 'center',
//     borderRadius: 10,
//     marginTop: 10,
//     width: width * 0.9,
//   },
//   reviewButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default MalebookingScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { ref, set, getDatabase } from 'firebase/database';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { saveUserAction } from "../../utils/saveUserAction";

const { width } = Dimensions.get("window");

const MalebookingScreen = () => {
  const route = useRoute();
  const { service, salon } = route.params || {};
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const realtimeDb = getDatabase();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDate(Platform.OS === 'ios');
    if (selectedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        Alert.alert('Invalid Date', 'You cannot select a past date.');
        return;
      }
      setSelectedDate(selectedDate);
    }
  };

  const onChangeTime = (event, selectedTime) => {
    setShowTime(Platform.OS === 'ios');
    setSelectedTime(selectedTime || new Date());
  };

  const handleConfirmBooking = async () => {
    if (!user) {
      Alert.alert('Error', 'You must be logged in to book a service.');
      return;
    }

    if (!salon || !salon.ownerId) {
      Alert.alert('Error', 'Salon information missing.');
      return;
    }

    if (!service || !service.id) {
      Alert.alert('Error', 'Service ID missing.');
      return;
    }

    setBookingLoading(true);

    try {
      await set(ref(realtimeDb, `bookings/${user.uid}`), {
        userId: user.uid,
        userEmail: user.email,
        ownerId: salon.ownerId,
        salonName: salon.salonName || 'Unknown Salon',
        serviceId: service.id,
        serviceName: service.serviceName || 'Unknown Service',
        price: service.price || 0,
        description: service.serviceDescription || "No description available",
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      });

      saveUserAction(user.uid, service.id, service.serviceName, "MalebookingScreen", "booked", 10);

      Alert.alert('Success', 'Booking confirmed successfully!');
    } catch (error) {
      console.error('Error booking service:', error);
      Alert.alert('Error', 'Failed to book service. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  const handleAddReview = () => {
    if (!service || !salon) {
      Alert.alert('Error', 'Missing service or salon details.');
      return;
    }
    if (!user) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    navigation.navigate('AddReviewRating', {
      serviceId: service.id,
      // salonId: salon.id, // Only pass if you actually have salon.id elsewhere, otherwise remove
      ownerId: salon.ownerId,
      serviceName: service.serviceName,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule Your Appointment</Text>
      </View>

      <View style={styles.card}>
        {service?.images && service.images.length > 0 ? (
          <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
        <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
        <Text style={styles.price}>{service?.price || "0"} PKR</Text>
        <Text style={styles.description}>{service?.serviceDescription || "No description available"}</Text>
      </View>

      <View style={styles.dateTimeContainer}>
        <View style={styles.datePicker}>
          <Text style={styles.sectionTitle}>Date</Text>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
            <Text>{selectedDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDate && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              is24Hour={true}
              display="default"
              minimumDate={new Date()}
              onChange={onChangeDate}
            />
          )}
        </View>

        <View style={styles.timePicker}>
          <Text style={styles.sectionTitle}>Time</Text>
          <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
            <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
          </TouchableOpacity>
          {showTime && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={onChangeTime}
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
        onPress={handleConfirmBooking}
        disabled={bookingLoading}
      >
        {bookingLoading ? <ActivityIndicator color="white" /> : <Text style={styles.confirmButtonText}>Book Now</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={styles.reviewButton} onPress={handleAddReview}>
        <Text style={styles.reviewButtonText}>Add Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#00665C",
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    height: '25%'
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 40,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: width * 0.9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#00665C',
    borderWidth: 7
  },
  serviceImage: {
    width: width * 0.7,
    height: width * 0.5,
    borderRadius: 10
  },
  imagePlaceholder: {
    width: width * 0.7,
    height: width * 0.5,
    borderRadius: 10,
    backgroundColor: '#ddd'
  },
  serviceName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff5733",
    marginTop: 5
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "justify",
    marginTop: 5
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: width * 0.9,
  },
  datePicker: {
    flex: 1,
    marginRight: 10
  },
  timePicker: {
    flex: 1,
    marginLeft: 10
  },
  pickerButton: {
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    borderColor: '#00665C',
    borderWidth: 4
  },
  confirmButton: {
    backgroundColor: "#00665C",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    width: width * 0.9,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  loadingButton: {
    opacity: 0.6
  },
  reviewButton: {
    backgroundColor: '#FF9800',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: width * 0.9,
  },
  reviewButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MalebookingScreen;
