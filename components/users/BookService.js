// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // // // // // const BookServiceScreen = () => {
// // // // // // // //   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
// // // // // // // //   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

// // // // // // // //   const dates = [
// // // // // // // //     { day: 'Wed', date: '9' },
// // // // // // // //     { day: 'Thu', date: '10' },
// // // // // // // //     { day: 'Fri', date: '11' },
// // // // // // // //     { day: 'Sat', date: '12' },
// // // // // // // //   ];

// // // // // // // //   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

// // // // // // // //   return (
// // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // //       <View style={styles.header}>
// // // // // // // //         <TouchableOpacity>
// // // // // // // //           <Text style={styles.backButton}>&lt;</Text> {/* Back button */}
// // // // // // // //         </TouchableOpacity>
// // // // // // // //         <Text style={styles.headerTitle}> Book Service</Text>
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // //           <Image source={require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} /> {/* Replace with your image */}
// // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // //             <Text style={styles.serviceName}>Curtain Bangs Cut</Text>
// // // // // // // //           </View>
// // // // // // // //           <TouchableOpacity style={styles.removeButton}>
// // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // //         <View style={styles.datePicker}>
// // // // // // // //           {dates.map((date) => (
// // // // // // // //             <TouchableOpacity
// // // // // // // //               key={date.date}
// // // // // // // //               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
// // // // // // // //               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
// // // // // // // //             >
// // // // // // // //               <Text style={styles.dateDay}>{date.day}</Text>
// // // // // // // //               <Text style={styles.dateDate}>{date.date}</Text>
// // // // // // // //             </TouchableOpacity>
// // // // // // // //           ))}
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // //         <View style={styles.timePicker}>
// // // // // // // //           {times.map((time) => (
// // // // // // // //             <TouchableOpacity
// // // // // // // //               key={time}
// // // // // // // //               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
// // // // // // // //               onPress={() => setSelectedTime(time)}
// // // // // // // //             >
// // // // // // // //               <Text style={styles.timeText}>{time}</Text>
// // // // // // // //             </TouchableOpacity>
// // // // // // // //           ))}
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       <TouchableOpacity style={styles.confirmButton}>
// // // // // // // //         <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </ScrollView>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: '#fff',
// // // // // // // //     padding: 20,
// // // // // // // //     marginTop:40,

// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 20,
// // // // // // // //   },
// // // // // // // //   backButton: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     marginRight: 10,
// // // // // // // //   },
// // // // // // // //   headerTitle: {
// // // // // // // //     fontSize: 20,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //   },
// // // // // // // //   orderSummary: {
// // // // // // // //     marginBottom: 20,
// // // // // // // //   },
// // // // // // // //   orderTitle: {
// // // // // // // //     fontSize: 18,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     marginBottom: 10,
// // // // // // // //   },
// // // // // // // //   serviceItem: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginBottom: 10,
// // // // // // // //   },
// // // // // // // //   serviceImage: {
// // // // // // // //     width: 70,
// // // // // // // //     height: 70,
// // // // // // // //     marginRight: 10,
// // // // // // // //     borderRadius:10,
// // // // // // // //   },
// // // // // // // //   serviceDetails: {
// // // // // // // //     flex: 1,
// // // // // // // //   },
// // // // // // // //   serviceName: {
// // // // // // // //     fontSize: 16,
    
// // // // // // // //   },
// // // // // // // //   removeButton: {
// // // // // // // //     backgroundColor: 'red', // Or any color you prefer
// // // // // // // //     width: 20,
// // // // // // // //     height: 20,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     alignItems: 'center',
// // // // // // // //     justifyContent: 'center',
// // // // // // // //   },
// // // // // // // //   removeText: {
// // // // // // // //     color: 'white',
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     fontSize: 14,
// // // // // // // //   },
// // // // // // // //   sectionTitle: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     marginBottom: 10,
// // // // // // // //   },
// // // // // // // //   dateSelection: {
// // // // // // // //     marginBottom: 20,
// // // // // // // //   },
// // // // // // // //   datePicker: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //   },
// // // // // // // //   dateItem: {
// // // // // // // //     padding: 10,
// // // // // // // //     borderRadius: 5,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: '#ddd',
// // // // // // // //     marginRight: 10,
// // // // // // // //     alignItems: 'center',
// // // // // // // //   },
// // // // // // // //   selectedDateItem: {
// // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // //     borderColor: '#007AFF',
// // // // // // // //   },
// // // // // // // //   dateDay: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: '#666',
// // // // // // // //   },
// // // // // // // //   dateDate: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     color: '#333',
// // // // // // // //   },
// // // // // // // //   timeSelection: {
// // // // // // // //     marginBottom: 20,
// // // // // // // //   },
// // // // // // // //   timePicker: {
// // // // // // // //     flexDirection: 'row',
// // // // // // // //   },
// // // // // // // //   timeButton: {
// // // // // // // //     padding: 10,
// // // // // // // //     borderRadius: 5,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: '#ddd',
// // // // // // // //     marginRight: 10,
    
// // // // // // // //   },
// // // // // // // //   selectedTimeButton: {
// // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // //     borderColor: '#007AFF',
// // // // // // // //   },
// // // // // // // //   timeText: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     color: '#333',
// // // // // // // //   },
// // // // // // // //   confirmButton: {
// // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderRadius: 8,
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginTop:20,
// // // // // // // //   },
// // // // // // // //   confirmButtonText: {
// // // // // // // //     color: 'white',
// // // // // // // //     fontWeight: 'bold',
// // // // // // // //     fontSize: 18,
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default BookServiceScreen;




// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // // // // // // const BookServiceScreen = ({ route, navigation }) => {
// // // // // // // // //   const { service } = route.params || {}; // Ensure service exists

// // // // // // // // //   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
// // // // // // // // //   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

// // // // // // // // //   const dates = [
// // // // // // // // //     { day: 'Wed', date: '9' },
// // // // // // // // //     { day: 'Thu', date: '10' },
// // // // // // // // //     { day: 'Fri', date: '11' },
// // // // // // // // //     { day: 'Sat', date: '12' },
// // // // // // // // //   ];

// // // // // // // // //   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

// // // // // // // // //   return (
// // // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // // //       <View style={styles.header}>
// // // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // //           <Text style={styles.backButton}>&lt;</Text> {/* Fixed back button */}
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // // //       </View>

// // // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // // //           <Image source={service?.image || require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // // //             <Text style={styles.serviceName}>{service?.name || "Service Name"}</Text>
// // // // // // // // //           </View>
// // // // // // // // //           <TouchableOpacity style={styles.removeButton}>
// // // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // // //           </TouchableOpacity>
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // // //         <View style={styles.datePicker}>
// // // // // // // // //           {dates.map((date) => (
// // // // // // // // //             <TouchableOpacity
// // // // // // // // //               key={date.date}
// // // // // // // // //               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
// // // // // // // // //               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
// // // // // // // // //             >
// // // // // // // // //               <Text style={styles.dateDay}>{date.day}</Text>
// // // // // // // // //               <Text style={styles.dateDate}>{date.date}</Text>
// // // // // // // // //             </TouchableOpacity>
// // // // // // // // //           ))}
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // // //         <View style={styles.timePicker}>
// // // // // // // // //           {times.map((time) => (
// // // // // // // // //             <TouchableOpacity
// // // // // // // // //               key={time}
// // // // // // // // //               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
// // // // // // // // //               onPress={() => setSelectedTime(time)}
// // // // // // // // //             >
// // // // // // // // //               <Text style={styles.timeText}>{time}</Text>
// // // // // // // // //             </TouchableOpacity>
// // // // // // // // //           ))}
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <TouchableOpacity style={styles.confirmButton}>
// // // // // // // // //         <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // // //       </TouchableOpacity>
// // // // // // // // //     </ScrollView>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // //     padding: 20,
// // // // // // // // //     marginTop: 40,
// // // // // // // // //   },
// // // // // // // // //   header: {
// // // // // // // // //     flexDirection: 'row',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     marginBottom: 20,
// // // // // // // // //   },
// // // // // // // // //   backButton: {
// // // // // // // // //     fontSize: 24,
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     marginRight: 10,
// // // // // // // // //   },
// // // // // // // // //   headerTitle: {
// // // // // // // // //     fontSize: 20,
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //   },
// // // // // // // // //   orderSummary: {
// // // // // // // // //     marginBottom: 20,
// // // // // // // // //   },
// // // // // // // // //   orderTitle: {
// // // // // // // // //     fontSize: 18,
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     marginBottom: 10,
// // // // // // // // //   },
// // // // // // // // //   serviceItem: {
// // // // // // // // //     flexDirection: 'row',
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     marginBottom: 10,
// // // // // // // // //   },
// // // // // // // // //   serviceImage: {
// // // // // // // // //     width: 70,
// // // // // // // // //     height: 70,
// // // // // // // // //     marginRight: 10,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //   },
// // // // // // // // //   serviceDetails: {
// // // // // // // // //     flex: 1,
// // // // // // // // //   },
// // // // // // // // //   serviceName: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //   },
// // // // // // // // //   removeButton: {
// // // // // // // // //     backgroundColor: 'red',
// // // // // // // // //     width: 20,
// // // // // // // // //     height: 20,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     justifyContent: 'center',
// // // // // // // // //   },
// // // // // // // // //   removeText: {
// // // // // // // // //     color: 'white',
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     fontSize: 14,
// // // // // // // // //   },
// // // // // // // // //   sectionTitle: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     marginBottom: 10,
// // // // // // // // //   },
// // // // // // // // //   dateSelection: {
// // // // // // // // //     marginBottom: 20,
// // // // // // // // //   },
// // // // // // // // //   datePicker: {
// // // // // // // // //     flexDirection: 'row',
// // // // // // // // //   },
// // // // // // // // //   dateItem: {
// // // // // // // // //     padding: 10,
// // // // // // // // //     borderRadius: 5,
// // // // // // // // //     borderWidth: 1,
// // // // // // // // //     borderColor: '#ddd',
// // // // // // // // //     marginRight: 10,
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //   },
// // // // // // // // //   selectedDateItem: {
// // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // //   },
// // // // // // // // //   dateDay: {
// // // // // // // // //     fontSize: 14,
// // // // // // // // //     color: '#666',
// // // // // // // // //   },
// // // // // // // // //   dateDate: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     color: '#333',
// // // // // // // // //   },
// // // // // // // // //   timeSelection: {
// // // // // // // // //     marginBottom: 20,
// // // // // // // // //   },
// // // // // // // // //   timePicker: {
// // // // // // // // //     flexDirection: 'row',
// // // // // // // // //   },
// // // // // // // // //   timeButton: {
// // // // // // // // //     padding: 10,
// // // // // // // // //     borderRadius: 5,
// // // // // // // // //     borderWidth: 1,
// // // // // // // // //     borderColor: '#ddd',
// // // // // // // // //     marginRight: 10,
// // // // // // // // //   },
// // // // // // // // //   selectedTimeButton: {
// // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // //   },
// // // // // // // // //   timeText: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     color: '#333',
// // // // // // // // //   },
// // // // // // // // //   confirmButton: {
// // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // //     paddingVertical: 12,
// // // // // // // // //     borderRadius: 8,
// // // // // // // // //     alignItems: 'center',
// // // // // // // // //     marginTop: 20,
// // // // // // // // //   },
// // // // // // // // //   confirmButtonText: {
// // // // // // // // //     color: 'white',
// // // // // // // // //     fontWeight: 'bold',
// // // // // // // // //     fontSize: 18,
// // // // // // // // //   },
// // // // // // // // // });

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // // // import { getAuth } from 'firebase/auth';
// // // // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // // // const BookServiceScreen = () => {
// // // // // // // //   const route = useRoute();
// // // // // // // //   const { service, salon } = route.params || {};
// // // // // // // //   const navigation = useNavigation();
// // // // // // // //   const db = getFirestore();
// // // // // // // //   const auth = getAuth();
// // // // // // // //   const user = auth.currentUser;

// // // // // // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // //   const [showDate, setShowDate] = useState(false);
// // // // // // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // // // //   const [showTime, setShowTime] = useState(false);
// // // // // // // //   const [bookingLoading, setBookingLoading] = useState(false); // Loading state

// // // // // // // //   const onChangeDate = (event, selectedDate) => {
// // // // // // // //     const currentDate = selectedDate || selectedDate; // Use selectedDate if available
// // // // // // // //     setShowDate(Platform.OS === 'ios');
// // // // // // // //     setSelectedDate(currentDate);
// // // // // // // //   };

// // // // // // // //   const onChangeTime = (event, selectedTime) => {
// // // // // // // //     const currentTime = selectedTime || selectedTime; // Use selectedTime if available
// // // // // // // //     setShowTime(Platform.OS === 'ios');
// // // // // // // //     setSelectedTime(currentTime);
// // // // // // // //   };


// // // // // // // //   const handleConfirmBooking = async () => {
// // // // // // // //     if (!user) {
// // // // // // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setBookingLoading(true); // Set loading to true

// // // // // // // //     try {
// // // // // // // //       const bookingRef = collection(db, 'bookings');
// // // // // // // //       await addDoc(bookingRef, {
// // // // // // // //         userId: user.uid,
// // // // // // // //         salonId: salon.id,
// // // // // // // //         salonName: salon.salonName,
// // // // // // // //         serviceId: service.id,
// // // // // // // //         serviceName: service.serviceName,
// // // // // // // //         date: selectedDate.toISOString(),
// // // // // // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // // //         status: 'pending',
// // // // // // // //       });

// // // // // // // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // // //         {
// // // // // // // //           text: 'OK',
// // // // // // // //           onPress: () => navigation.navigate('Home'), // Or wherever you want to navigate
// // // // // // // //         },
// // // // // // // //       ]);
// // // // // // // //       setBookingLoading(false); // Set loading to false after successful booking

// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error booking service:', error);
// // // // // // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // // // //       setBookingLoading(false); // Set loading to false after error
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // //       {/* Header */}
// // // // // // // //       <View style={styles.header}>
// // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // //           <Text style={styles.backButton}>&lt;</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // //       </View>

// // // // // // // //       {/* Order Summary */}
// // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // //           <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // // // //           </View>
// // // // // // // //           {/* Remove button (if needed) */}
// // // // // // // //           {/* <TouchableOpacity style={styles.removeButton}>
// // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // //           </TouchableOpacity> */}
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       {/* Date Selection */}
// // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // // //           <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //         {showDate && (
// // // // // // // //           <DateTimePicker
// // // // // // // //             testID="dateTimePicker"
// // // // // // // //             value={selectedDate}
// // // // // // // //             mode="date"
// // // // // // // //             is24Hour={true}
// // // // // // // //             display="default"
// // // // // // // //             onChange={onChangeDate}
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </View>

// // // // // // // //       {/* Time Selection */}
// // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // // //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //         {showTime && (
// // // // // // // //           <DateTimePicker
// // // // // // // //             testID="timePicker"
// // // // // // // //             value={selectedTime}
// // // // // // // //             mode="time"
// // // // // // // //             is24Hour={false}
// // // // // // // //             display="default"
// // // // // // // //             onChange={onChangeTime}
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </View>

// // // // // // // //       <TouchableOpacity 
// // // // // // // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]} // Add loading style
// // // // // // // //         onPress={handleConfirmBooking}
// // // // // // // //         disabled={bookingLoading} // Disable button while loading
// // // // // // // //       >
// // // // // // // //         {bookingLoading ? (
// // // // // // // //           <ActivityIndicator color="white" /> // Show indicator while loading
// // // // // // // //         ) : (
// // // // // // // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // //         )}
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </ScrollView>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   // ... (Your existing styles)
// // // // // // // //   pickerButton: {
// // // // // // // //     padding: 10,
// // // // // // // //     borderRadius: 5,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: '#ddd',
// // // // // // // //     marginBottom: 20,
// // // // // // // //     alignItems: 'center', // Center the text within the button
// // // // // // // //   },
// // // // // // // //   confirmButton: {
// // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderRadius: 8,
// // // // // // // //     alignItems: 'center',
// // // // // // // //     marginTop: 20,
// // // // // // // //   },
// // // // // // // //   loadingButton: { // Style for the button while loading
// // // // // // // //     backgroundColor: '#808080', // Grayed out color
// // // // // // // //   },
// // // // // // // //   // ... rest of your styles
// // // // // // // //   container: {
// // // // // // // //         flex: 1,
// // // // // // // //         backgroundColor: '#fff',
// // // // // // // //         padding: 20,
// // // // // // // //         marginTop: 40,
// // // // // // // //       },
// // // // // // // //       header: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginBottom: 20,
// // // // // // // //       },
// // // // // // // //       backButton: {
// // // // // // // //         fontSize: 24,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginRight: 10,
// // // // // // // //       },
// // // // // // // //       headerTitle: {
// // // // // // // //         fontSize: 20,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //       },
// // // // // // // //       orderSummary: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //       },
// // // // // // // //       orderTitle: {
// // // // // // // //         fontSize: 18,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginBottom: 10,
// // // // // // // //       },
// // // // // // // //       serviceItem: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginBottom: 10,
// // // // // // // //       },
// // // // // // // //       serviceImage: {
// // // // // // // //         width: 70,
// // // // // // // //         height: 70,
// // // // // // // //         marginRight: 10,
// // // // // // // //         borderRadius: 10,
// // // // // // // //       },
// // // // // // // //       serviceDetails: {
// // // // // // // //         flex: 1,
// // // // // // // //       },
// // // // // // // //       serviceName: {
// // // // // // // //         fontSize: 16,
// // // // // // // //       },
// // // // // // // //       removeButton: {
// // // // // // // //         backgroundColor: 'red',
// // // // // // // //         width: 20,
// // // // // // // //         height: 20,
// // // // // // // //         borderRadius: 10,
// // // // // // // //         alignItems: 'center',
// // // // // // // //         justifyContent: 'center',
// // // // // // // //       },
// // // // // // // //       removeText: {
// // // // // // // //         color: 'white',
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         fontSize: 14,
// // // // // // // //       },
// // // // // // // //       sectionTitle: {
// // // // // // // //         fontSize: 16,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginBottom: 10,
// // // // // // // //       },
// // // // // // // //       dateSelection: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //       },
// // // // // // // //       datePicker: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //       },
// // // // // // // //       dateItem: {
// // // // // // // //         padding: 10,
// // // // // // // //         borderRadius: 5,
// // // // // // // //         borderWidth: 1,
// // // // // // // //         borderColor: '#ddd',
// // // // // // // //         marginRight: 10,
// // // // // // // //         alignItems: 'center',
// // // // // // // //       },
// // // // // // // //       selectedDateItem: {
// // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // //         borderColor: '#007AFF',
// // // // // // // //       },
// // // // // // // //       dateDay: {
// // // // // // // //         fontSize: 14,
// // // // // // // //         color: '#666',
// // // // // // // //       },
// // // // // // // //       dateDate: {
// // // // // // // //         fontSize: 16,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         color: '#333',
// // // // // // // //       },
// // // // // // // //       timeSelection: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //       },
// // // // // // // //       timePicker: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //       },
// // // // // // // //       timeButton: {
// // // // // // // //         padding: 10,
// // // // // // // //         borderRadius: 5,
// // // // // // // //         borderWidth: 1,
// // // // // // // //         borderColor: '#ddd',
// // // // // // // //         marginRight: 10,
// // // // // // // //       },
// // // // // // // //       selectedTimeButton: {
// // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // //         borderColor: '#007AFF',
// // // // // // // //       },
// // // // // // // //       timeText: {
// // // // // // // //         fontSize: 16,
// // // // // // // //         color: '#333',
// // // // // // // //       },
// // // // // // // //       confirmButton: {
// // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // //         paddingVertical: 12,
// // // // // // // //         borderRadius: 8,
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginTop: 20,
// // // // // // // //       },
// // // // // // // //       confirmButtonText: {
// // // // // // // //         color: 'white',
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         fontSize: 18,},
// // // // // // // // });

// // // // // // // // export default BookServiceScreen;// export default BookServiceScreen;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // // import { getAuth } from 'firebase/auth';
// // // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // // const BookServiceScreen = () => {
// // // // // // //     const route = useRoute();
// // // // // // //     const { service, salon } = route.params || {};
// // // // // // //     const navigation = useNavigation();
// // // // // // //     const db = getFirestore();
// // // // // // //     const auth = getAuth();
// // // // // // //     const user = auth.currentUser;

// // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // //     const [showDate, setShowDate] = useState(false);
// // // // // // //     const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // // //     const [showTime, setShowTime] = useState(false);
// // // // // // //     const [bookingLoading, setBookingLoading] = useState(false);

// // // // // // //     const onChangeDate = (event, selectedDate) => {
// // // // // // //         const currentDate = selectedDate || selectedDate;
// // // // // // //         setShowDate(Platform.OS === 'ios');
// // // // // // //         setSelectedDate(currentDate);
// // // // // // //     };

// // // // // // //     const onChangeTime = (event, selectedTime) => {
// // // // // // //         const currentTime = selectedTime || selectedTime;
// // // // // // //         setShowTime(Platform.OS === 'ios');
// // // // // // //         setSelectedTime(currentTime);
// // // // // // //     };

// // // // // // //     const handleConfirmBooking = async () => {
// // // // // // //         if (!user) {
// // // // // // //             Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         setBookingLoading(true);

// // // // // // //         try {
// // // // // // //             const bookingRef = collection(db, 'bookings');
// // // // // // //             await addDoc(bookingRef, {
// // // // // // //                 userId: user.uid,
// // // // // // //                 salonId: salon.id,
// // // // // // //                 salonName: salon.salonName,
// // // // // // //                 serviceId: service.id, // Ensure service.id exists
// // // // // // //                 serviceName: service.serviceName,
// // // // // // //                 date: selectedDate.toISOString(),
// // // // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // //                 status: 'pending',
// // // // // // //             });

// // // // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // //                 {
// // // // // // //                     text: 'OK',
// // // // // // //                     onPress: () => navigation.navigate('Home'), // Adjust navigation as needed
// // // // // // //                 },
// // // // // // //             ]);
// // // // // // //             setBookingLoading(false);

// // // // // // //         } catch (error) {
// // // // // // //             console.error('Error booking service:', error);
// // // // // // //             Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // // //             setBookingLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <ScrollView style={styles.container}>
// // // // // // //             <View style={styles.header}>
// // // // // // //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // //                     <Text style={styles.backButton}>&lt;</Text>
// // // // // // //                 </TouchableOpacity>
// // // // // // //                 <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // //             </View>

// // // // // // //             <View style={styles.orderSummary}>
// // // // // // //                 <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // //                 <View style={styles.serviceItem}>
// // // // // // //                     <Image 
// // // // // // //                         source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')} 
// // // // // // //                         style={styles.serviceImage} 
// // // // // // //                     />
// // // // // // //                     <View style={styles.serviceDetails}>
// // // // // // //                         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // // //                     </View>
// // // // // // //                 </View>
// // // // // // //             </View>

// // // // // // //             <View style={styles.dateSelection}>
// // // // // // //                 <Text style={styles.sectionTitle}>Date</Text>
// // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // //                     <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // //                 </TouchableOpacity>
// // // // // // //                 {showDate && (
// // // // // // //                     <DateTimePicker
// // // // // // //                         testID="dateTimePicker"
// // // // // // //                         value={selectedDate}
// // // // // // //                         mode="date"
// // // // // // //                         is24Hour={true}
// // // // // // //                         display="default"
// // // // // // //                         onChange={onChangeDate}
// // // // // // //                     />
// // // // // // //                 )}
// // // // // // //             </View>

// // // // // // //             <View style={styles.timeSelection}>
// // // // // // //                 <Text style={styles.sectionTitle}>Time</Text>
// // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // //                     <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // //                 </TouchableOpacity>
// // // // // // //                 {showTime && (
// // // // // // //                     <DateTimePicker
// // // // // // //                         testID="timePicker"
// // // // // // //                         value={selectedTime}
// // // // // // //                         mode="time"
// // // // // // //                         is24Hour={false}
// // // // // // //                         display="default"
// // // // // // //                         onChange={onChangeTime}
// // // // // // //                     />
// // // // // // //                 )}
// // // // // // //             </View>

// // // // // // //             <TouchableOpacity
// // // // // // //                 style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // // // // //                 onPress={handleConfirmBooking}
// // // // // // //                 disabled={bookingLoading}
// // // // // // //             >
// // // // // // //                 {bookingLoading ? (
// // // // // // //                     <ActivityIndicator color="white" />
// // // // // // //                 ) : (
// // // // // // //                     <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // //                 )}
// // // // // // //             </TouchableOpacity>
// // // // // // //         </ScrollView>
// // // // // // //     );
// // // // // // // };


// // // // // // // const styles = StyleSheet.create({
// // // // // // //     container: {
// // // // // // //         flex: 1,
// // // // // // //         backgroundColor: '#fff',
// // // // // // //         padding: 20,
// // // // // // //         marginTop: 40,
// // // // // // //     },
// // // // // // //     header: {
// // // // // // //         flexDirection: 'row',
// // // // // // //         alignItems: 'center',
// // // // // // //         marginBottom: 20,
// // // // // // //     },
// // // // // // //     backButton: {
// // // // // // //         fontSize: 24,
// // // // // // //         fontWeight: 'bold',
// // // // // // //         marginRight: 10,
// // // // // // //     },
// // // // // // //     headerTitle: {
// // // // // // //         fontSize: 20,
// // // // // // //         fontWeight: 'bold',
// // // // // // //     },
// // // // // // //     orderSummary: {
// // // // // // //         marginBottom: 20,
// // // // // // //     },
// // // // // // //     orderTitle: {
// // // // // // //         fontSize: 18,
// // // // // // //         fontWeight: 'bold',
// // // // // // //         marginBottom: 10,
// // // // // // //     },
// // // // // // //     serviceItem: {
// // // // // // //         flexDirection: 'row',
// // // // // // //         alignItems: 'center',
// // // // // // //         marginBottom: 10,
// // // // // // //     },
// // // // // // //     serviceImage: {
// // // // // // //         width: 70,
// // // // // // //         height: 70,
// // // // // // //         marginRight: 10,
// // // // // // //         borderRadius: 10,
// // // // // // //     },
// // // // // // //     serviceDetails: {
// // // // // // //         flex: 1,
// // // // // // //     },
// // // // // // //     serviceName: {
// // // // // // //         fontSize: 16,
// // // // // // //     },
// // // // // // //     sectionTitle: {
// // // // // // //         fontSize: 16,
// // // // // // //         fontWeight: 'bold',
// // // // // // //         marginBottom: 10,
// // // // // // //     },
// // // // // // //     dateSelection: {
// // // // // // //         marginBottom: 20,
// // // // // // //     },
// // // // // // //     pickerButton: {
// // // // // // //         padding: 10,
// // // // // // //         borderRadius: 5,
// // // // // // //         borderWidth: 1,
// // // // // // //         borderColor: '#ddd',
// // // // // // //         marginBottom: 20,
// // // // // // //         alignItems: 'center',
// // // // // // //     },
// // // // // // //     timeSelection: {
// // // // // // //         marginBottom: 20,
// // // // // // //     },
// // // // // // //     confirmButton: {
// // // // // // //         backgroundColor: '#007AFF',
// // // // // // //         paddingVertical: 12,
// // // // // // //         borderRadius: 8,
// // // // // // //         alignItems: 'center',
// // // // // // //         marginTop: 20,
// // // // // // //     },
// // // // // // //     loadingButton: {
// // // // // // //         backgroundColor: '#808080',
// // // // // // //     },
// // // // // // //     confirmButtonText: {
// // // // // // //         color: 'white',
// // // // // // //         fontWeight: 'bold',
// // // // // // //         fontSize: 18,
// // // // // // //     },
// // // // // // // });

// // // // // // // export default BookServiceScreen;
// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // import { getAuth } from 'firebase/auth';
// // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // const BookServiceScreen = () => {
// // // // // //     const route = useRoute();
// // // // // //     const { service, salon } = route.params || {};
// // // // // //     const navigation = useNavigation();
// // // // // //     const db = getFirestore();
// // // // // //     const auth = getAuth();
// // // // // //     const user = auth.currentUser;

// // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // //     const [showDate, setShowDate] = useState(false);
// // // // // //     const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // //     const [showTime, setShowTime] = useState(false);
// // // // // //     const [bookingLoading, setBookingLoading] = useState(false);

// // // // // //     const onChangeDate = (event, selectedDate) => {
// // // // // //         const currentDate = selectedDate || selectedDate;
// // // // // //         setShowDate(Platform.OS === 'ios');
// // // // // //         setSelectedDate(currentDate);
// // // // // //     };

// // // // // //     const onChangeTime = (event, selectedTime) => {
// // // // // //         const currentTime = selectedTime || selectedTime;
// // // // // //         setShowTime(Platform.OS === 'ios');
// // // // // //         setSelectedTime(currentTime);
// // // // // //     };

// // // // // //     const handleConfirmBooking = async () => {
// // // // // //         if (!user) {
// // // // // //             Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // //             return;
// // // // // //         }

// // // // // //         setBookingLoading(true);

// // // // // //         try {
// // // // // //             const bookingRef = collection(db, 'bookings');
// // // // // //             await addDoc(bookingRef, {
// // // // // //                 userId: user.uid,
// // // // // //                 salonId: salon.id,
// // // // // //                 salonName: salon.salonName,
// // // // // //                 serviceId: service.id, // Ensure service.id exists
// // // // // //                 serviceName: service.serviceName,
// // // // // //                 date: selectedDate.toISOString(),
// // // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // //                 status: 'pending',
// // // // // //             });

// // // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // //                 {
// // // // // //                     text: 'OK',
// // // // // //                     onPress: () => navigation.navigate('Home'), // Adjust navigation as needed
// // // // // //                 },
// // // // // //             ]);
// // // // // //             setBookingLoading(false);

// // // // // //         } catch (error) {
// // // // // //             console.error('Error booking service:', error);
// // // // // //             Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // //             setBookingLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <ScrollView style={styles.container}>
// // // // // //             <View style={styles.header}>
// // // // // //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // //                     <Text style={styles.backButton}>&lt;</Text>
// // // // // //                 </TouchableOpacity>
// // // // // //                 <Text style={styles.headerTitle}>Book Service</Text>
// // // // // //             </View>

// // // // // //             <View style={styles.orderSummary}>
// // // // // //                 <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // //                 <View style={styles.serviceItem}>
// // // // // //                     <Image 
// // // // // //                         source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')} 
// // // // // //                         style={styles.serviceImage} 
// // // // // //                     />
// // // // // //                     <View style={styles.serviceDetails}>
// // // // // //                         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // //                     </View>
// // // // // //                 </View>
// // // // // //             </View>

// // // // // //             <View style={styles.dateSelection}>
// // // // // //                 <Text style={styles.sectionTitle}>Date</Text>
// // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // //                     <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // //                 </TouchableOpacity>
// // // // // //                 {showDate && (
// // // // // //                     <DateTimePicker
// // // // // //                         testID="dateTimePicker"
// // // // // //                         value={selectedDate}
// // // // // //                         mode="date"
// // // // // //                         is24Hour={true}
// // // // // //                         display="default"
// // // // // //                         onChange={onChangeDate}
// // // // // //                     />
// // // // // //                 )}
// // // // // //             </View>

// // // // // //             <View style={styles.timeSelection}>
// // // // // //                 <Text style={styles.sectionTitle}>Time</Text>
// // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // //                     <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // //                 </TouchableOpacity>
// // // // // //                 {showTime && (
// // // // // //                     <DateTimePicker
// // // // // //                         testID="timePicker"
// // // // // //                         value={selectedTime}
// // // // // //                         mode="time"
// // // // // //                         is24Hour={false}
// // // // // //                         display="default"
// // // // // //                         onChange={onChangeTime}
// // // // // //                     />
// // // // // //                 )}
// // // // // //             </View>

// // // // // //             <TouchableOpacity
// // // // // //                 style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // // // //                 onPress={handleConfirmBooking}
// // // // // //                 disabled={bookingLoading}
// // // // // //             >
// // // // // //                 {bookingLoading ? (
// // // // // //                     <ActivityIndicator color="white" />
// // // // // //                 ) : (
// // // // // //                     <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // //                 )}
// // // // // //             </TouchableOpacity>
// // // // // //         </ScrollView>
// // // // // //     );
// // // // // // };


// // // // // // const styles = StyleSheet.create({
// // // // // //     container: {
// // // // // //         flex: 1,
// // // // // //         backgroundColor: '#fff',
// // // // // //         padding: 20,
// // // // // //         marginTop: 40,
// // // // // //     },
// // // // // //     header: {
// // // // // //         flexDirection: 'row',
// // // // // //         alignItems: 'center',
// // // // // //         marginBottom: 20,
// // // // // //     },
// // // // // //     backButton: {
// // // // // //         fontSize: 24,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginRight: 10,
// // // // // //     },
// // // // // //     headerTitle: {
// // // // // //         fontSize: 20,
// // // // // //         fontWeight: 'bold',
// // // // // //     },
// // // // // //     orderSummary: {
// // // // // //         marginBottom: 20,
// // // // // //     },
// // // // // //     orderTitle: {
// // // // // //         fontSize: 18,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginBottom: 10,
// // // // // //     },
// // // // // //     serviceItem: {
// // // // // //         flexDirection: 'row',
// // // // // //         alignItems: 'center',
// // // // // //         marginBottom: 10,
// // // // // //     },
// // // // // //     serviceImage: {
// // // // // //         width: 70,
// // // // // //         height: 70,
// // // // // //         marginRight: 10,
// // // // // //         borderRadius: 10,
// // // // // //     },
// // // // // //     serviceDetails: {
// // // // // //         flex: 1,
// // // // // //     },
// // // // // //     serviceName: {
// // // // // //         fontSize: 16,
// // // // // //     },
// // // // // //     sectionTitle: {
// // // // // //         fontSize: 16,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginBottom: 10,
// // // // // //     },
// // // // // //     dateSelection: {
// // // // // //         marginBottom: 20,
// // // // // //     },
// // // // // //     pickerButton: {
// // // // // //         padding: 10,
// // // // // //         borderRadius: 5,
// // // // // //         borderWidth: 1,
// // // // // //         borderColor: '#ddd',
// // // // // //         marginBottom: 20,
// // // // // //         alignItems: 'center',
// // // // // //     },
// // // // // //     timeSelection: {
// // // // // //         marginBottom: 20,
// // // // // //     },
// // // // // //     confirmButton: {
// // // // // //         backgroundColor: '#007AFF',
// // // // // //         paddingVertical: 12,
// // // // // //         borderRadius: 8,
// // // // // //         alignItems: 'center',
// // // // // //         marginTop: 20,
// // // // // //     },
// // // // // //     loadingButton: {
// // // // // //         backgroundColor: '#808080',
// // // // // //     },
// // // // // //     confirmButtonText: {
// // // // // //         color: 'white',
// // // // // //         fontWeight: 'bold',
// // // // // //         fontSize: 18,
// // // // // //     },
// // // // // // });

// // // // // // export default BookServiceScreen;
// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList } from 'react-native';
// // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // import { getAuth } from 'firebase/auth';
// // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // const BookServiceScreen = () => {
// // // // //     const route = useRoute();
// // // // //     const { service, salon } = route.params || {};
// // // // //     const navigation = useNavigation();
// // // // //     const db = getFirestore();
// // // // //     const auth = getAuth();
// // // // //     const user = auth.currentUser;

// // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // //     const [showDate, setShowDate] = useState(false);
// // // // //     const [selectedTime, setSelectedTime] = useState(new Date());
// // // // //     const [showTime, setShowTime] = useState(false);
// // // // //     const [bookingLoading, setBookingLoading] = useState(false);

// // // // //     console.log("route.params in BookServiceScreen:", route.params); // Check received data

// // // // //     const onChangeDate = (event, selectedDate) => {
// // // // //         const currentDate = selectedDate || selectedDate;
// // // // //         setShowDate(Platform.OS === 'ios');
// // // // //         setSelectedDate(currentDate);
// // // // //     };

// // // // //     const onChangeTime = (event, selectedTime) => {
// // // // //         const currentTime = selectedTime || selectedTime;
// // // // //         setShowTime(Platform.OS === 'ios');
// // // // //         setSelectedTime(currentTime);
// // // // //     };

// // // // //     const handleConfirmBooking = async () => {
// // // // //         if (!user) {
// // // // //             Alert.alert('Error', 'You must be logged in to book a service.');
// // // // //             return;
// // // // //         }

// // // // //         if (!service || !service.id) {  // Check service AND service.id
// // // // //             Alert.alert("Error", "Service information is missing. Please try again.");
// // // // //             setBookingLoading(false);
// // // // //             return;
// // // // //         }

// // // // //         setBookingLoading(true);

// // // // //         try {
// // // // //             const bookingRef = collection(db, 'bookings');
// // // // //             await addDoc(bookingRef, {
// // // // //                 userId: user.uid,
// // // // //                 salonId: salon.id,
// // // // //                 salonName: salon.salonName,
// // // // //                 serviceId: service.id,
// // // // //                 serviceName: service.serviceName,
// // // // //                 date: selectedDate.toISOString(),
// // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // //                 status: 'pending',
// // // // //             });

// // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // //                 {
// // // // //                     text: 'OK',
// // // // //                     onPress: () => navigation.navigate('Home'),
// // // // //                 },
// // // // //             ]);
// // // // //             setBookingLoading(false);

// // // // //         } catch (error) {
// // // // //             console.error('Error booking service:', error);
// // // // //             Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // //             setBookingLoading(false);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <View style={styles.container}> {/* Changed to View */}
// // // // //             <View style={styles.header}> {/* Non-list content in a View */}
// // // // //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // //                     <Text style={styles.backButton}>&lt;</Text>
// // // // //                 </TouchableOpacity>
// // // // //                 <Text style={styles.headerTitle}>Book Service</Text>
// // // // //             </View>

// // // // //             <View style={styles.orderSummary}>
// // // // //                 <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // //                 <View style={styles.serviceItem}>
// // // // //                     <Image
// // // // //                         source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')}
// // // // //                         style={styles.serviceImage}
// // // // //                     />
// // // // //                     <View style={styles.serviceDetails}>
// // // // //                         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // //                     </View>
// // // // //                 </View>
// // // // //             </View>

// // // // //             <ScrollView> {/* Wrapped date/time pickers in ScrollView if needed */}
// // // // //                 <View style={styles.dateSelection}>
// // // // //                     <Text style={styles.sectionTitle}>Date</Text>
// // // // //                     <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // //                         <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // //                     </TouchableOpacity>
// // // // //                     {showDate && (
// // // // //                         <DateTimePicker
// // // // //                             testID="dateTimePicker"
// // // // //                             value={selectedDate}
// // // // //                             mode="date"
// // // // //                             is24Hour={true}
// // // // //                             display="default"
// // // // //                             onChange={onChangeDate}
// // // // //                         />
// // // // //                     )}
// // // // //                 </View>

// // // // //                 <View style={styles.timeSelection}>
// // // // //                     <Text style={styles.sectionTitle}>Time</Text>
// // // // //                     <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // //                         <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // //                     </TouchableOpacity>
// // // // //                     {showTime && (
// // // // //                         <DateTimePicker
// // // // //                             testID="timePicker"
// // // // //                             value={selectedTime}
// // // // //                             mode="time"
// // // // //                             is24Hour={false}
// // // // //                             display="default"
// // // // //                             onChange={onChangeTime}
// // // // //                         />
// // // // //                     )}
// // // // //                 </View>
// // // // //             </ScrollView>

// // // // //             <TouchableOpacity
// // // // //                 style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // // //                 onPress={handleConfirmBooking}
// // // // //                 disabled={bookingLoading}
// // // // //             >
// // // // //                 {bookingLoading ? (
// // // // //                     <ActivityIndicator color="white" />
// // // // //                 ) : (
// // // // //                     <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // //                 )}
// // // // //             </TouchableOpacity>
// // // // //         </View>
// // // // //     );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //     container: {
// // // // //         flex: 1,
// // // // //         backgroundColor: '#fff',
// // // // //         padding: 20,
// // // // //         marginTop: 40,
// // // // //     },
// // // // //     // ... (rest of your styles)
// // // // // });

// // // // // export default BookServiceScreen;
// // // // import React, { useState } from 'react';
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // import { getAuth } from 'firebase/auth';
// // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // const BookServiceScreen = () => {
// // // //   const route = useRoute();
// // // //   const { service, salon } = route.params || {};
// // // //   const navigation = useNavigation();
// // // //   const db = getFirestore();
// // // //   const auth = getAuth();
// // // //   const user = auth.currentUser;

// // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // //   const [showDate, setShowDate] = useState(false);
// // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // //   const [showTime, setShowTime] = useState(false);
// // // //   const [bookingLoading, setBookingLoading] = useState(false); // Loading state

// // // //   const onChangeDate = (event, selectedDate) => {
// // // //     const currentDate = selectedDate || selectedDate; // Use selectedDate if available
// // // //     setShowDate(Platform.OS === 'ios');
// // // //     setSelectedDate(currentDate);
// // // //   };

// // // //   const onChangeTime = (event, selectedTime) => {
// // // //     const currentTime = selectedTime || selectedTime; // Use selectedTime if available
// // // //     setShowTime(Platform.OS === 'ios');
// // // //     setSelectedTime(currentTime);
// // // //   };


// // // //   const handleConfirmBooking = async () => {
// // // //     if (!user) {
// // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // //       return;
// // // //     }

// // // //     setBookingLoading(true); // Set loading to true

// // // //     try {
// // // //       const bookingRef = collection(db, 'bookings');
// // // //       await addDoc(bookingRef, {
// // // //         userId: user.uid,
// // // //         salonId: salon.id,
// // // //         salonName: salon.salonName,
// // // //         serviceId: service.id,
// // // //         serviceName: service.serviceName,
// // // //         date: selectedDate.toISOString(),
// // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // //         status: 'pending',
// // // //       });

// // // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // //         {
// // // //           text: 'OK',
// // // //           onPress: () => navigation.navigate('Home'), // Or wherever you want to navigate
// // // //         },
// // // //       ]);
// // // //       setBookingLoading(false); // Set loading to false after successful booking

// // // //     } catch (error) {
// // // //       console.error('Error booking service:', error);
// // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // //       setBookingLoading(false); // Set loading to false after error
// // // //     }
// // // //   };

// // // //   return (
// // // //     <ScrollView style={styles.container}>
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // //           <Text style={styles.backButton}>&lt;</Text>
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // //       </View>

// // // //       {/* Order Summary */}
// // // //       <View style={styles.orderSummary}>
// // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // //         <View style={styles.serviceItem}>
// // // //           <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // //           <View style={styles.serviceDetails}>
// // // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // //           </View>
// // // //           {/* Remove button (if needed) */}
// // // //           {/* <TouchableOpacity style={styles.removeButton}>
// // // //             <Text style={styles.removeText}>-</Text>
// // // //           </TouchableOpacity> */}
// // // //         </View>
// // // //       </View>

// // // //       {/* Date Selection */}
// // // //       <View style={styles.dateSelection}>
// // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // //           <Text>{selectedDate.toLocaleDateString()}</Text>
// // // //         </TouchableOpacity>
// // // //         {showDate && (
// // // //           <DateTimePicker
// // // //             testID="dateTimePicker"
// // // //             value={selectedDate}
// // // //             mode="date"
// // // //             is24Hour={true}
// // // //             display="default"
// // // //             onChange={onChangeDate}
// // // //           />
// // // //         )}
// // // //       </View>

// // // //       {/* Time Selection */}
// // // //       <View style={styles.timeSelection}>
// // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // //         </TouchableOpacity>
// // // //         {showTime && (
// // // //           <DateTimePicker
// // // //             testID="timePicker"
// // // //             value={selectedTime}
// // // //             mode="time"
// // // //             is24Hour={false}
// // // //             display="default"
// // // //             onChange={onChangeTime}
// // // //           />
// // // //         )}
// // // //       </View>

// // // //       <TouchableOpacity 
// // // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]} // Add loading style
// // // //         onPress={handleConfirmBooking}
// // // //         disabled={bookingLoading} // Disable button while loading
// // // //       >
// // // //         {bookingLoading ? (
// // // //           <ActivityIndicator color="white" /> // Show indicator while loading
// // // //         ) : (
// // // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // // //         )}
// // // //       </TouchableOpacity>
// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   // ... (Your existing styles)
// // // //   pickerButton: {
// // // //     padding: 10,
// // // //     borderRadius: 5,
// // // //     borderWidth: 1,
// // // //     borderColor: '#ddd',
// // // //     marginBottom: 20,
// // // //     alignItems: 'center', // Center the text within the button
// // // //   },
// // // //   confirmButton: {
// // // //     backgroundColor: '#007AFF',
// // // //     paddingVertical: 12,
// // // //     borderRadius: 8,
// // // //     alignItems: 'center',
// // // //     marginTop: 20,
// // // //   },
// // // //   loadingButton: { // Style for the button while loading
// // // //     backgroundColor: '#808080', // Grayed out color
// // // //   },
// // // //   // ... rest of your styles
// // // //   container: {
// // // //         flex: 1,
// // // //         backgroundColor: '#fff',
// // // //         padding: 20,
// // // //         marginTop: 40,
// // // //       },
// // // //       header: {
// // // //         flexDirection: 'row',
// // // //         alignItems: 'center',
// // // //         marginBottom: 20,
// // // //       },
// // // //       backButton: {
// // // //         fontSize: 24,
// // // //         fontWeight: 'bold',
// // // //         marginRight: 10,
// // // //       },
// // // //       headerTitle: {
// // // //         fontSize: 20,
// // // //         fontWeight: 'bold',
// // // //       },
// // // //       orderSummary: {
// // // //         marginBottom: 20,
// // // //       },
// // // //       orderTitle: {
// // // //         fontSize: 18,
// // // //         fontWeight: 'bold',
// // // //         marginBottom: 10,
// // // //       },
// // // //       serviceItem: {
// // // //         flexDirection: 'row',
// // // //         alignItems: 'center',
// // // //         marginBottom: 10,
// // // //       },
// // // //       serviceImage: {
// // // //         width: 70,
// // // //         height: 70,
// // // //         marginRight: 10,
// // // //         borderRadius: 10,
// // // //       },
// // // //       serviceDetails: {
// // // //         flex: 1,
// // // //       },
// // // //       serviceName: {
// // // //         fontSize: 16,
// // // //       },
// // // //       removeButton: {
// // // //         backgroundColor: 'red',
// // // //         width: 20,
// // // //         height: 20,
// // // //         borderRadius: 10,
// // // //         alignItems: 'center',
// // // //         justifyContent: 'center',
// // // //       },
// // // //       removeText: {
// // // //         color: 'white',
// // // //         fontWeight: 'bold',
// // // //         fontSize: 14,
// // // //       },
// // // //       sectionTitle: {
// // // //         fontSize: 16,
// // // //         fontWeight: 'bold',
// // // //         marginBottom: 10,
// // // //       },
// // // //       dateSelection: {
// // // //         marginBottom: 20,
// // // //       },
// // // //       datePicker: {
// // // //         flexDirection: 'row',
// // // //       },
// // // //       dateItem: {
// // // //         padding: 10,
// // // //         borderRadius: 5,
// // // //         borderWidth: 1,
// // // //         borderColor: '#ddd',
// // // //         marginRight: 10,
// // // //         alignItems: 'center',
// // // //       },
// // // //       selectedDateItem: {
// // // //         backgroundColor: '#007AFF',
// // // //         borderColor: '#007AFF',
// // // //       },
// // // //       dateDay: {
// // // //         fontSize: 14,
// // // //         color: '#666',
// // // //       },
// // // //       dateDate: {
// // // //         fontSize: 16,
// // // //         fontWeight: 'bold',
// // // //         color: '#333',
// // // //       },
// // // //       timeSelection: {
// // // //         marginBottom: 20,
// // // //       },
// // // //       timePicker: {
// // // //         flexDirection: 'row',
// // // //       },
// // // //       timeButton: {
// // // //         padding: 10,
// // // //         borderRadius: 5,
// // // //         borderWidth: 1,
// // // //         borderColor: '#ddd',
// // // //         marginRight: 10,
// // // //       },
// // // //       selectedTimeButton: {
// // // //         backgroundColor: '#007AFF',
// // // //         borderColor: '#007AFF',
// // // //       },
// // // //       timeText: {
// // // //         fontSize: 16,
// // // //         color: '#333',
// // // //       },
// // // //       confirmButton: {
// // // //         backgroundColor: '#007AFF',
// // // //         paddingVertical: 12,
// // // //         borderRadius: 8,
// // // //         alignItems: 'center',
// // // //         marginTop: 20,
// // // //       },
// // // //       confirmButtonText: {
// // // //         color: 'white',
// // // //         fontWeight: 'bold',
// // // //         fontSize: 18,},
// // // // });

// // // // export default BookServiceScreen;// export default BookServiceScreen;
// // // import React, { useState } from 'react';
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
// // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // import { getAuth } from 'firebase/auth';
// // // import { ref, set, getDatabase } from 'firebase/database';
// // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // const BookServiceScreen = () => {
// // //   const route = useRoute();
// // //   const { service, salon } = route.params || {};
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
// // //     setSelectedDate(selectedDate || new Date());
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

// // //     if (!salon || !salon.ownerId) {
// // //       Alert.alert('Error', 'Owner ID is missing.');
// // //       return;
// // //     }

// // //     if (!service || !service.id) {
// // //       Alert.alert('Error', 'Service ID is missing.');
// // //       return;
// // //     }

// // //     setBookingLoading(true);

// // //     try {
// // //       const ownerId = salon?.ownerId || 'default_owner_id';
// // //       const serviceId = service?.id || 'default_service_id';

// // //       await set(ref(realtimeDb, `bookings/${user.uid}`), {
// // //         userId: user.uid,
// // //         userEmail: user.email,
// // //         ownerId: ownerId,
// // //         salonName: salon.salonName || 'Unknown Salon',
// // //         serviceId: serviceId,
// // //         serviceName: service.serviceName || 'Unknown Service',
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
// // //     <ScrollView style={styles.container}>
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // //           <Text style={styles.backButton}>&lt;</Text>
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Book Service</Text>
// // //       </View>

// // //       <View style={styles.orderSummary}>
// // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // //         <View style={styles.serviceItem}>
// // //           <Image
// // //             source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')}
// // //             style={styles.serviceImage}
// // //           />
// // //           <View style={styles.serviceDetails}>
// // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // //           </View>
// // //         </View>
// // //       </View>

// // //       <View style={styles.dateSelection}>
// // //         <Text style={styles.sectionTitle}>Date</Text>
// // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // //           <Text>{selectedDate.toLocaleDateString()}</Text>
// // //         </TouchableOpacity>
// // //         {showDate && (
// // //           <DateTimePicker
// // //             testID="dateTimePicker"
// // //             value={selectedDate}
// // //             mode="date"
// // //             is24Hour={true}
// // //             display="default"
// // //             onChange={onChangeDate}
// // //           />
// // //         )}
// // //       </View>

// // //       <View style={styles.timeSelection}>
// // //         <Text style={styles.sectionTitle}>Time</Text>
// // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // //         </TouchableOpacity>
// // //         {showTime && (
// // //           <DateTimePicker
// // //             testID="timePicker"
// // //             value={selectedTime}
// // //             mode="time"
// // //             is24Hour={false}
// // //             display="default"
// // //             onChange={onChangeTime}
// // //           />
// // //         )}
// // //       </View>

// // //       <TouchableOpacity
// // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // //         onPress={handleConfirmBooking}
// // //         disabled={bookingLoading}
// // //       >
// // //         {bookingLoading ? (
// // //           <ActivityIndicator color="white" />
// // //         ) : (
// // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // //         )}
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { padding: 20, backgroundColor: '#fff' },
// // //   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
// // //   backButton: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
// // //   headerTitle: { fontSize: 20, fontWeight: 'bold' },
// // //   orderSummary: { marginBottom: 20 },
// // //   orderTitle: { fontSize: 18, fontWeight: 'bold' },
// // //   serviceItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
// // //   serviceImage: { width: 50, height: 50, borderRadius: 10 },
// // //   serviceDetails: { marginLeft: 10 },
// // //   serviceName: { fontSize: 16 },
// // //   pickerButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 10 },
// // //   confirmButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 5, marginTop: 20 },
// // //   confirmButtonText: { color: '#fff', fontWeight: 'bold' },
// // //   loadingButton: { opacity: 0.5 }
// // // });

// // // export default BookServiceScreen;

// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
// // import { useRoute, useNavigation } from '@react-navigation/native';
// // import { getAuth } from 'firebase/auth';
// // import { ref, set, getDatabase } from 'firebase/database';
// // import DateTimePicker from '@react-native-community/datetimepicker';

// // const BookServiceScreen = () => {
// //   const route = useRoute();
// //   const { service, salon } = route.params || {};
// //   const navigation = useNavigation();
// //   const auth = getAuth();
// //   const user = auth.currentUser;
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
// //       today.setHours(0, 0, 0, 0); // Remove time for accurate comparison

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
// //       const ownerId = salon?.ownerId || 'default_owner_id';
// //       const serviceId = service?.id || 'default_service_id';

// //       await set(ref(realtimeDb, `bookings/${user.uid}`), {
// //         userId: user.uid,
// //         userEmail: user.email,
// //         ownerId: ownerId,
// //         salonName: salon.salonName || 'Unknown Salon',
// //         serviceId: serviceId,
// //         serviceName: service.serviceName || 'Unknown Service',
// //         date: selectedDate.toISOString(),
// //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// //         status: 'pending',
// //       });

// //       Alert.alert('Success', 'Booking is confirmed successfully!');
// //     } catch (error) {
// //       console.error('Error booking service:', error);
// //       Alert.alert('Error', 'Failed to book service. Please try again.');
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Text style={styles.backButton}>&lt;</Text>
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Book Service</Text>
// //       </View>

// //       <View style={styles.orderSummary}>
// //         <Text style={styles.orderTitle}>Your Services Order</Text>
// //         <View style={styles.serviceItem}>
// //           <Image
// //             source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')}
// //             style={styles.serviceImage}
// //           />
// //           <View style={styles.serviceDetails}>
// //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// //           </View>
// //         </View>
// //       </View>

// //       <View style={styles.dateSelection}>
// //         <Text style={styles.sectionTitle}>Date</Text>
// //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// //           <Text>{selectedDate.toLocaleDateString()}</Text>
// //         </TouchableOpacity>
// //         {showDate && (
// //           <DateTimePicker
// //             testID="dateTimePicker"
// //             value={selectedDate}
// //             mode="date"
// //             is24Hour={true}
// //             display="default"
// //             minimumDate={new Date()}  // Prevents past date selection
// //             onChange={onChangeDate}
// //           />
// //         )}
// //       </View>

// //       <View style={styles.timeSelection}>
// //         <Text style={styles.sectionTitle}>Time</Text>
// //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// //         </TouchableOpacity>
// //         {showTime && (
// //           <DateTimePicker
// //             testID="timePicker"
// //             value={selectedTime}
// //             mode="time"
// //             is24Hour={false}
// //             display="default"
// //             onChange={onChangeTime}
// //           />
// //         )}
// //       </View>

// //       <TouchableOpacity
// //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// //         onPress={handleConfirmBooking}
// //         disabled={bookingLoading}
// //       >
// //         {bookingLoading ? (
// //           <ActivityIndicator color="white" />
// //         ) : (
// //           <Text style={styles.confirmButtonText}>Confirm</Text>
// //         )}
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { padding: 20, backgroundColor: '#fff' },
// //   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
// //   backButton: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
// //   headerTitle: { fontSize: 20, fontWeight: 'bold' },
// //   orderSummary: { marginBottom: 20 },
// //   orderTitle: { fontSize: 18, fontWeight: 'bold' },
// //   serviceItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
// //   serviceImage: { width: 50, height: 50, borderRadius: 10 },
// //   serviceDetails: { marginLeft: 10 },
// //   serviceName: { fontSize: 16 },
// //   pickerButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 10 },
// //   confirmButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 5, marginTop: 20 },
// //   confirmButtonText: { color: '#fff', fontWeight: 'bold' },
// //   loadingButton: { opacity: 0.5 }
// // });

// // export default BookServiceScreen;

// import React, { useState } from 'react';
// import { 
//   View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, 
//   Alert, ActivityIndicator, Platform, Dimensions 
// } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { ref, set, getDatabase } from 'firebase/database';
// import { FontAwesome } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const { width, height } = Dimensions.get("window"); // Get screen width and height for responsiveness

// const BookServiceScreen = () => {
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
//       Alert.alert('Error', 'Owner ID is missing.');
//       return;
//     }

//     if (!service || !service.id) {
//       Alert.alert('Error', 'Service ID is missing.');
//       return;
//     }

//     setBookingLoading(true);

//     try {
//       const ownerId = salon?.ownerId || 'default_owner_id';
//       const serviceId = service?.id || 'default_service_id';

//       await set(ref(realtimeDb, `bookings/${user.uid}`), {
//         userId: user.uid,
//         userEmail: user.email,
//         ownerId: ownerId,
//         salonName: salon.salonName || 'Unknown Salon',
//         serviceId: serviceId,
//         serviceName: service.serviceName || 'Unknown Service',
//         price: service.price || 0,
//         description: service.serviceDescription || "No description available",
//         date: selectedDate.toISOString(),
//         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         status: 'pending',
//       });

//       Alert.alert('Success', 'Booking is confirmed successfully!');
//     } catch (error) {
//       console.error('Error booking service:', error);
//       Alert.alert('Error', 'Failed to book service. Please try again.');
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   return (
//     <ScrollView 
//       contentContainerStyle={styles.scrollContainer} // Center content
//       style={styles.background} // Full screen background
//     >
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton} // Back button with background color and border radius
//           onPress={() => navigation.goBack()}
//         >
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
//         {bookingLoading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text style={styles.confirmButtonText}>Book Now</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1, // Center content vertically
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//   },
//   background: {
//     flex: 1, // Full screen
//     backgroundColor: '#f0f8ff', // Background color for the entire screen
//   },
//   header: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     marginBottom: 20,
//     backgroundColor: "#00665C", // Background color for the entire header
//     width: '100%', // Full width
//     justifyContent: 'center', // Center header content
//     borderBottomLeftRadius: 30, // Bottom left radius
//     borderBottomRightRadius: 30, // Bottom right radius
//     overflow: 'hidden', 
//     height: '25%'// Ensure the radius is applied correctly
//   },
//   backButton: { 
//     position: 'absolute', // Position back button absolutely
//     left: 10, // Position from the left
//     top: 40, // Position from the top
//     // backgroundColor: '#fff', // Background color for back button
//     borderRadius: 50, // Border radius for circular shape
//     width: 40, // Fixed width
//     height: 40, // Fixed height
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     zIndex: 1, // Ensure back button is above other elements
//   },
//   backButtonText: { 
//     fontSize: 24, 
//     fontWeight: "bold", 
//     color: "#00665C", // Text color for back button
//   },
//   headerTitle: { 
//     fontSize: 23, 
//     fontWeight: "bold", 
//     color: "#fff", // White text color
//     paddingVertical: 10, // Padding for the title
//   },
//   card: { 
//     backgroundColor: "#fff", 
//     padding: 15, 
//     borderRadius: 10, 
//     alignItems: "center", 
//     width: width * 0.9, // 90% of screen width
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
//     width: width * 0.9, // 90% of screen width
    
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
//     marginTop: 10 ,
//      borderColor: '#00665C',
//     borderWidth: 4
//   },
//   confirmButton: { 
//     backgroundColor: "#00665C", 
//     padding: 15, 
//     alignItems: "center", 
//     borderRadius: 10, 
//     marginTop: 20,
//     width: width * 0.9, // 90% of screen width
//   },
//   confirmButtonText: { 
//     color: "#fff", 
//     fontWeight: "bold", 
//     fontSize: 16 
//   },
//   loadingButton: { 
//     opacity: 0.6 
//   },
// });

// export default BookServiceScreen;
import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, 
  Alert, ActivityIndicator, Platform, Dimensions 
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { ref, set, getDatabase } from 'firebase/database';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { saveUserAction } from "../../utils/saveUserAction";

const { width } = Dimensions.get("window");

const BookServiceScreen = () => {
  const route = useRoute();
  const { service, salon } = route.params || {};
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user ? user.uid : null;
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
      Alert.alert('Error', 'Owner ID is missing.');
      return;
    }

    if (!service || !service.id) {
      Alert.alert('Error', 'Service ID is missing.');
      return;
    }

    setBookingLoading(true);

    try {
      const ownerId = salon?.ownerId || 'default_owner_id';
      const serviceId = service?.id || 'default_service_id';

      await set(ref(realtimeDb, `bookings/${user.uid}`), {
        userId: user.uid,
        userEmail: user.email,
        ownerId: ownerId,
        salonName: salon.salonName || 'Unknown Salon',
        serviceId: serviceId,
        serviceName: service.serviceName || 'Unknown Service',
        price: service.price || 0,
        description: service.serviceDescription || "No description available",
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      });

      // ✅ Save user action after booking successfully
      saveUserAction(
        user.uid,
        service.id,
        service.serviceName,
        "BookServiceScreen",
        "booked",
        10
      );

      Alert.alert('Success', 'Booking is confirmed successfully!');
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
    if (!uid) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    navigation.navigate('AddReviewRating', {
      serviceId: service.id,
      salonId: salon.id,
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
        {bookingLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.confirmButtonText}>Book Now</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.reviewButton}
        onPress={handleAddReview}
      >
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

export default BookServiceScreen;
