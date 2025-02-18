// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // // // // // // // const BookServiceScreen = () => {
// // // // // // // // // //   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
// // // // // // // // // //   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

// // // // // // // // // //   const dates = [
// // // // // // // // // //     { day: 'Wed', date: '9' },
// // // // // // // // // //     { day: 'Thu', date: '10' },
// // // // // // // // // //     { day: 'Fri', date: '11' },
// // // // // // // // // //     { day: 'Sat', date: '12' },
// // // // // // // // // //   ];

// // // // // // // // // //   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

// // // // // // // // // //   return (
// // // // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // // // //       <View style={styles.header}>
// // // // // // // // // //         <TouchableOpacity>
// // // // // // // // // //           <Text style={styles.backButton}>&lt;</Text> {/* Back button */}
// // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // //         <Text style={styles.headerTitle}> Book Service</Text>
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // // // //           <Image source={require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} /> {/* Replace with your image */}
// // // // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // // // //             <Text style={styles.serviceName}>Curtain Bangs Cut</Text>
// // // // // // // // // //           </View>
// // // // // // // // // //           <TouchableOpacity style={styles.removeButton}>
// // // // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // // // //         <View style={styles.datePicker}>
// // // // // // // // // //           {dates.map((date) => (
// // // // // // // // // //             <TouchableOpacity
// // // // // // // // // //               key={date.date}
// // // // // // // // // //               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
// // // // // // // // // //               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
// // // // // // // // // //             >
// // // // // // // // // //               <Text style={styles.dateDay}>{date.day}</Text>
// // // // // // // // // //               <Text style={styles.dateDate}>{date.date}</Text>
// // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // //           ))}
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // // // //         <View style={styles.timePicker}>
// // // // // // // // // //           {times.map((time) => (
// // // // // // // // // //             <TouchableOpacity
// // // // // // // // // //               key={time}
// // // // // // // // // //               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
// // // // // // // // // //               onPress={() => setSelectedTime(time)}
// // // // // // // // // //             >
// // // // // // // // // //               <Text style={styles.timeText}>{time}</Text>
// // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // //           ))}
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       <TouchableOpacity style={styles.confirmButton}>
// // // // // // // // // //         <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // //     </ScrollView>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // //     padding: 20,
// // // // // // // // // //     marginTop:40,

// // // // // // // // // //   },
// // // // // // // // // //   header: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginBottom: 20,
// // // // // // // // // //   },
// // // // // // // // // //   backButton: {
// // // // // // // // // //     fontSize: 24,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     marginRight: 10,
// // // // // // // // // //   },
// // // // // // // // // //   headerTitle: {
// // // // // // // // // //     fontSize: 20,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //   },
// // // // // // // // // //   orderSummary: {
// // // // // // // // // //     marginBottom: 20,
// // // // // // // // // //   },
// // // // // // // // // //   orderTitle: {
// // // // // // // // // //     fontSize: 18,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     marginBottom: 10,
// // // // // // // // // //   },
// // // // // // // // // //   serviceItem: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginBottom: 10,
// // // // // // // // // //   },
// // // // // // // // // //   serviceImage: {
// // // // // // // // // //     width: 70,
// // // // // // // // // //     height: 70,
// // // // // // // // // //     marginRight: 10,
// // // // // // // // // //     borderRadius:10,
// // // // // // // // // //   },
// // // // // // // // // //   serviceDetails: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //   },
// // // // // // // // // //   serviceName: {
// // // // // // // // // //     fontSize: 16,
    
// // // // // // // // // //   },
// // // // // // // // // //   removeButton: {
// // // // // // // // // //     backgroundColor: 'red', // Or any color you prefer
// // // // // // // // // //     width: 20,
// // // // // // // // // //     height: 20,
// // // // // // // // // //     borderRadius: 10,
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   removeText: {
// // // // // // // // // //     color: 'white',
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     fontSize: 14,
// // // // // // // // // //   },
// // // // // // // // // //   sectionTitle: {
// // // // // // // // // //     fontSize: 16,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     marginBottom: 10,
// // // // // // // // // //   },
// // // // // // // // // //   dateSelection: {
// // // // // // // // // //     marginBottom: 20,
// // // // // // // // // //   },
// // // // // // // // // //   datePicker: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //   },
// // // // // // // // // //   dateItem: {
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     borderRadius: 5,
// // // // // // // // // //     borderWidth: 1,
// // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // //     marginRight: 10,
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   selectedDateItem: {
// // // // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // // //   },
// // // // // // // // // //   dateDay: {
// // // // // // // // // //     fontSize: 14,
// // // // // // // // // //     color: '#666',
// // // // // // // // // //   },
// // // // // // // // // //   dateDate: {
// // // // // // // // // //     fontSize: 16,
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     color: '#333',
// // // // // // // // // //   },
// // // // // // // // // //   timeSelection: {
// // // // // // // // // //     marginBottom: 20,
// // // // // // // // // //   },
// // // // // // // // // //   timePicker: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //   },
// // // // // // // // // //   timeButton: {
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     borderRadius: 5,
// // // // // // // // // //     borderWidth: 1,
// // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // //     marginRight: 10,
    
// // // // // // // // // //   },
// // // // // // // // // //   selectedTimeButton: {
// // // // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // // //   },
// // // // // // // // // //   timeText: {
// // // // // // // // // //     fontSize: 16,
// // // // // // // // // //     color: '#333',
// // // // // // // // // //   },
// // // // // // // // // //   confirmButton: {
// // // // // // // // // //     backgroundColor: '#007AFF', // iOS blue
// // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // //     borderRadius: 8,
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginTop:20,
// // // // // // // // // //   },
// // // // // // // // // //   confirmButtonText: {
// // // // // // // // // //     color: 'white',
// // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // //     fontSize: 18,
// // // // // // // // // //   },
// // // // // // // // // // });

// // // // // // // // // // export default BookServiceScreen;




// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // // // // // // // // const BookServiceScreen = ({ route, navigation }) => {
// // // // // // // // // // //   const { service } = route.params || {}; // Ensure service exists

// // // // // // // // // // //   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
// // // // // // // // // // //   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

// // // // // // // // // // //   const dates = [
// // // // // // // // // // //     { day: 'Wed', date: '9' },
// // // // // // // // // // //     { day: 'Thu', date: '10' },
// // // // // // // // // // //     { day: 'Fri', date: '11' },
// // // // // // // // // // //     { day: 'Sat', date: '12' },
// // // // // // // // // // //   ];

// // // // // // // // // // //   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

// // // // // // // // // // //   return (
// // // // // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // // // // //       <View style={styles.header}>
// // // // // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // // // //           <Text style={styles.backButton}>&lt;</Text> {/* Fixed back button */}
// // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // // // // //           <Image source={service?.image || require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // // // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // // // // //             <Text style={styles.serviceName}>{service?.name || "Service Name"}</Text>
// // // // // // // // // // //           </View>
// // // // // // // // // // //           <TouchableOpacity style={styles.removeButton}>
// // // // // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // //         </View>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // // // // //         <View style={styles.datePicker}>
// // // // // // // // // // //           {dates.map((date) => (
// // // // // // // // // // //             <TouchableOpacity
// // // // // // // // // // //               key={date.date}
// // // // // // // // // // //               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
// // // // // // // // // // //               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
// // // // // // // // // // //             >
// // // // // // // // // // //               <Text style={styles.dateDay}>{date.day}</Text>
// // // // // // // // // // //               <Text style={styles.dateDate}>{date.date}</Text>
// // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </View>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // // // // //         <View style={styles.timePicker}>
// // // // // // // // // // //           {times.map((time) => (
// // // // // // // // // // //             <TouchableOpacity
// // // // // // // // // // //               key={time}
// // // // // // // // // // //               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
// // // // // // // // // // //               onPress={() => setSelectedTime(time)}
// // // // // // // // // // //             >
// // // // // // // // // // //               <Text style={styles.timeText}>{time}</Text>
// // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </View>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <TouchableOpacity style={styles.confirmButton}>
// // // // // // // // // // //         <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // //     </ScrollView>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: {
// // // // // // // // // // //     flex: 1,
// // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // //     padding: 20,
// // // // // // // // // // //     marginTop: 40,
// // // // // // // // // // //   },
// // // // // // // // // // //   header: {
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //     marginBottom: 20,
// // // // // // // // // // //   },
// // // // // // // // // // //   backButton: {
// // // // // // // // // // //     fontSize: 24,
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     marginRight: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   headerTitle: {
// // // // // // // // // // //     fontSize: 20,
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //   },
// // // // // // // // // // //   orderSummary: {
// // // // // // // // // // //     marginBottom: 20,
// // // // // // // // // // //   },
// // // // // // // // // // //   orderTitle: {
// // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     marginBottom: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   serviceItem: {
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //     marginBottom: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   serviceImage: {
// // // // // // // // // // //     width: 70,
// // // // // // // // // // //     height: 70,
// // // // // // // // // // //     marginRight: 10,
// // // // // // // // // // //     borderRadius: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   serviceDetails: {
// // // // // // // // // // //     flex: 1,
// // // // // // // // // // //   },
// // // // // // // // // // //   serviceName: {
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //   },
// // // // // // // // // // //   removeButton: {
// // // // // // // // // // //     backgroundColor: 'red',
// // // // // // // // // // //     width: 20,
// // // // // // // // // // //     height: 20,
// // // // // // // // // // //     borderRadius: 10,
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // //   },
// // // // // // // // // // //   removeText: {
// // // // // // // // // // //     color: 'white',
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // //   },
// // // // // // // // // // //   sectionTitle: {
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     marginBottom: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   dateSelection: {
// // // // // // // // // // //     marginBottom: 20,
// // // // // // // // // // //   },
// // // // // // // // // // //   datePicker: {
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //   },
// // // // // // // // // // //   dateItem: {
// // // // // // // // // // //     padding: 10,
// // // // // // // // // // //     borderRadius: 5,
// // // // // // // // // // //     borderWidth: 1,
// // // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // // //     marginRight: 10,
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //   },
// // // // // // // // // // //   selectedDateItem: {
// // // // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // // // //   },
// // // // // // // // // // //   dateDay: {
// // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // //     color: '#666',
// // // // // // // // // // //   },
// // // // // // // // // // //   dateDate: {
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     color: '#333',
// // // // // // // // // // //   },
// // // // // // // // // // //   timeSelection: {
// // // // // // // // // // //     marginBottom: 20,
// // // // // // // // // // //   },
// // // // // // // // // // //   timePicker: {
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //   },
// // // // // // // // // // //   timeButton: {
// // // // // // // // // // //     padding: 10,
// // // // // // // // // // //     borderRadius: 5,
// // // // // // // // // // //     borderWidth: 1,
// // // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // // //     marginRight: 10,
// // // // // // // // // // //   },
// // // // // // // // // // //   selectedTimeButton: {
// // // // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // // // //     borderColor: '#007AFF',
// // // // // // // // // // //   },
// // // // // // // // // // //   timeText: {
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //     color: '#333',
// // // // // // // // // // //   },
// // // // // // // // // // //   confirmButton: {
// // // // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // // //     borderRadius: 8,
// // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // //     marginTop: 20,
// // // // // // // // // // //   },
// // // // // // // // // // //   confirmButtonText: {
// // // // // // // // // // //     color: 'white',
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // //   },
// // // // // // // // // // // });

// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // // // // // import { getAuth } from 'firebase/auth';
// // // // // // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // // // // // const BookServiceScreen = () => {
// // // // // // // // // //   const route = useRoute();
// // // // // // // // // //   const { service, salon } = route.params || {};
// // // // // // // // // //   const navigation = useNavigation();
// // // // // // // // // //   const db = getFirestore();
// // // // // // // // // //   const auth = getAuth();
// // // // // // // // // //   const user = auth.currentUser;

// // // // // // // // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // // // //   const [showDate, setShowDate] = useState(false);
// // // // // // // // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // // // // // //   const [showTime, setShowTime] = useState(false);
// // // // // // // // // //   const [bookingLoading, setBookingLoading] = useState(false); // Loading state

// // // // // // // // // //   const onChangeDate = (event, selectedDate) => {
// // // // // // // // // //     const currentDate = selectedDate || selectedDate; // Use selectedDate if available
// // // // // // // // // //     setShowDate(Platform.OS === 'ios');
// // // // // // // // // //     setSelectedDate(currentDate);
// // // // // // // // // //   };

// // // // // // // // // //   const onChangeTime = (event, selectedTime) => {
// // // // // // // // // //     const currentTime = selectedTime || selectedTime; // Use selectedTime if available
// // // // // // // // // //     setShowTime(Platform.OS === 'ios');
// // // // // // // // // //     setSelectedTime(currentTime);
// // // // // // // // // //   };


// // // // // // // // // //   const handleConfirmBooking = async () => {
// // // // // // // // // //     if (!user) {
// // // // // // // // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setBookingLoading(true); // Set loading to true

// // // // // // // // // //     try {
// // // // // // // // // //       const bookingRef = collection(db, 'bookings');
// // // // // // // // // //       await addDoc(bookingRef, {
// // // // // // // // // //         userId: user.uid,
// // // // // // // // // //         salonId: salon.id,
// // // // // // // // // //         salonName: salon.salonName,
// // // // // // // // // //         serviceId: service.id,
// // // // // // // // // //         serviceName: service.serviceName,
// // // // // // // // // //         date: selectedDate.toISOString(),
// // // // // // // // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // // // // //         status: 'pending',
// // // // // // // // // //       });

// // // // // // // // // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // // // // //         {
// // // // // // // // // //           text: 'OK',
// // // // // // // // // //           onPress: () => navigation.navigate('Home'), // Or wherever you want to navigate
// // // // // // // // // //         },
// // // // // // // // // //       ]);
// // // // // // // // // //       setBookingLoading(false); // Set loading to false after successful booking

// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error booking service:', error);
// // // // // // // // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // // // // // //       setBookingLoading(false); // Set loading to false after error
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <ScrollView style={styles.container}>
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <View style={styles.header}>
// // // // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // // //           <Text style={styles.backButton}>&lt;</Text>
// // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // // // //       </View>

// // // // // // // // // //       {/* Order Summary */}
// // // // // // // // // //       <View style={styles.orderSummary}>
// // // // // // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // // // //         <View style={styles.serviceItem}>
// // // // // // // // // //           <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // // // // // // // //           <View style={styles.serviceDetails}>
// // // // // // // // // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // // // // // //           </View>
// // // // // // // // // //           {/* Remove button (if needed) */}
// // // // // // // // // //           {/* <TouchableOpacity style={styles.removeButton}>
// // // // // // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // // // // // //           </TouchableOpacity> */}
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       {/* Date Selection */}
// // // // // // // // // //       <View style={styles.dateSelection}>
// // // // // // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // // // // //           <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // //         {showDate && (
// // // // // // // // // //           <DateTimePicker
// // // // // // // // // //             testID="dateTimePicker"
// // // // // // // // // //             value={selectedDate}
// // // // // // // // // //             mode="date"
// // // // // // // // // //             is24Hour={true}
// // // // // // // // // //             display="default"
// // // // // // // // // //             onChange={onChangeDate}
// // // // // // // // // //           />
// // // // // // // // // //         )}
// // // // // // // // // //       </View>

// // // // // // // // // //       {/* Time Selection */}
// // // // // // // // // //       <View style={styles.timeSelection}>
// // // // // // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // // // // //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // //         {showTime && (
// // // // // // // // // //           <DateTimePicker
// // // // // // // // // //             testID="timePicker"
// // // // // // // // // //             value={selectedTime}
// // // // // // // // // //             mode="time"
// // // // // // // // // //             is24Hour={false}
// // // // // // // // // //             display="default"
// // // // // // // // // //             onChange={onChangeTime}
// // // // // // // // // //           />
// // // // // // // // // //         )}
// // // // // // // // // //       </View>

// // // // // // // // // //       <TouchableOpacity 
// // // // // // // // // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]} // Add loading style
// // // // // // // // // //         onPress={handleConfirmBooking}
// // // // // // // // // //         disabled={bookingLoading} // Disable button while loading
// // // // // // // // // //       >
// // // // // // // // // //         {bookingLoading ? (
// // // // // // // // // //           <ActivityIndicator color="white" /> // Show indicator while loading
// // // // // // // // // //         ) : (
// // // // // // // // // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // // // //         )}
// // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // //     </ScrollView>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   // ... (Your existing styles)
// // // // // // // // // //   pickerButton: {
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     borderRadius: 5,
// // // // // // // // // //     borderWidth: 1,
// // // // // // // // // //     borderColor: '#ddd',
// // // // // // // // // //     marginBottom: 20,
// // // // // // // // // //     alignItems: 'center', // Center the text within the button
// // // // // // // // // //   },
// // // // // // // // // //   confirmButton: {
// // // // // // // // // //     backgroundColor: '#007AFF',
// // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // //     borderRadius: 8,
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginTop: 20,
// // // // // // // // // //   },
// // // // // // // // // //   loadingButton: { // Style for the button while loading
// // // // // // // // // //     backgroundColor: '#808080', // Grayed out color
// // // // // // // // // //   },
// // // // // // // // // //   // ... rest of your styles
// // // // // // // // // //   container: {
// // // // // // // // // //         flex: 1,
// // // // // // // // // //         backgroundColor: '#fff',
// // // // // // // // // //         padding: 20,
// // // // // // // // // //         marginTop: 40,
// // // // // // // // // //       },
// // // // // // // // // //       header: {
// // // // // // // // // //         flexDirection: 'row',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         marginBottom: 20,
// // // // // // // // // //       },
// // // // // // // // // //       backButton: {
// // // // // // // // // //         fontSize: 24,
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         marginRight: 10,
// // // // // // // // // //       },
// // // // // // // // // //       headerTitle: {
// // // // // // // // // //         fontSize: 20,
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //       },
// // // // // // // // // //       orderSummary: {
// // // // // // // // // //         marginBottom: 20,
// // // // // // // // // //       },
// // // // // // // // // //       orderTitle: {
// // // // // // // // // //         fontSize: 18,
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         marginBottom: 10,
// // // // // // // // // //       },
// // // // // // // // // //       serviceItem: {
// // // // // // // // // //         flexDirection: 'row',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         marginBottom: 10,
// // // // // // // // // //       },
// // // // // // // // // //       serviceImage: {
// // // // // // // // // //         width: 70,
// // // // // // // // // //         height: 70,
// // // // // // // // // //         marginRight: 10,
// // // // // // // // // //         borderRadius: 10,
// // // // // // // // // //       },
// // // // // // // // // //       serviceDetails: {
// // // // // // // // // //         flex: 1,
// // // // // // // // // //       },
// // // // // // // // // //       serviceName: {
// // // // // // // // // //         fontSize: 16,
// // // // // // // // // //       },
// // // // // // // // // //       removeButton: {
// // // // // // // // // //         backgroundColor: 'red',
// // // // // // // // // //         width: 20,
// // // // // // // // // //         height: 20,
// // // // // // // // // //         borderRadius: 10,
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //       },
// // // // // // // // // //       removeText: {
// // // // // // // // // //         color: 'white',
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         fontSize: 14,
// // // // // // // // // //       },
// // // // // // // // // //       sectionTitle: {
// // // // // // // // // //         fontSize: 16,
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         marginBottom: 10,
// // // // // // // // // //       },
// // // // // // // // // //       dateSelection: {
// // // // // // // // // //         marginBottom: 20,
// // // // // // // // // //       },
// // // // // // // // // //       datePicker: {
// // // // // // // // // //         flexDirection: 'row',
// // // // // // // // // //       },
// // // // // // // // // //       dateItem: {
// // // // // // // // // //         padding: 10,
// // // // // // // // // //         borderRadius: 5,
// // // // // // // // // //         borderWidth: 1,
// // // // // // // // // //         borderColor: '#ddd',
// // // // // // // // // //         marginRight: 10,
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //       },
// // // // // // // // // //       selectedDateItem: {
// // // // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // // // //         borderColor: '#007AFF',
// // // // // // // // // //       },
// // // // // // // // // //       dateDay: {
// // // // // // // // // //         fontSize: 14,
// // // // // // // // // //         color: '#666',
// // // // // // // // // //       },
// // // // // // // // // //       dateDate: {
// // // // // // // // // //         fontSize: 16,
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         color: '#333',
// // // // // // // // // //       },
// // // // // // // // // //       timeSelection: {
// // // // // // // // // //         marginBottom: 20,
// // // // // // // // // //       },
// // // // // // // // // //       timePicker: {
// // // // // // // // // //         flexDirection: 'row',
// // // // // // // // // //       },
// // // // // // // // // //       timeButton: {
// // // // // // // // // //         padding: 10,
// // // // // // // // // //         borderRadius: 5,
// // // // // // // // // //         borderWidth: 1,
// // // // // // // // // //         borderColor: '#ddd',
// // // // // // // // // //         marginRight: 10,
// // // // // // // // // //       },
// // // // // // // // // //       selectedTimeButton: {
// // // // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // // // //         borderColor: '#007AFF',
// // // // // // // // // //       },
// // // // // // // // // //       timeText: {
// // // // // // // // // //         fontSize: 16,
// // // // // // // // // //         color: '#333',
// // // // // // // // // //       },
// // // // // // // // // //       confirmButton: {
// // // // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // // // //         paddingVertical: 12,
// // // // // // // // // //         borderRadius: 8,
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         marginTop: 20,
// // // // // // // // // //       },
// // // // // // // // // //       confirmButtonText: {
// // // // // // // // // //         color: 'white',
// // // // // // // // // //         fontWeight: 'bold',
// // // // // // // // // //         fontSize: 18,},
// // // // // // // // // // });

// // // // // // // // // // export default BookServiceScreen;// export default BookServiceScreen;
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // // // // import { getAuth } from 'firebase/auth';
// // // // // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // // // // const BookServiceScreen = () => {
// // // // // // // // //     const route = useRoute();
// // // // // // // // //     const { service, salon } = route.params || {};
// // // // // // // // //     const navigation = useNavigation();
// // // // // // // // //     const db = getFirestore();
// // // // // // // // //     const auth = getAuth();
// // // // // // // // //     const user = auth.currentUser;

// // // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // // //     const [showDate, setShowDate] = useState(false);
// // // // // // // // //     const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // // // // //     const [showTime, setShowTime] = useState(false);
// // // // // // // // //     const [bookingLoading, setBookingLoading] = useState(false);

// // // // // // // // //     const onChangeDate = (event, selectedDate) => {
// // // // // // // // //         const currentDate = selectedDate || selectedDate;
// // // // // // // // //         setShowDate(Platform.OS === 'ios');
// // // // // // // // //         setSelectedDate(currentDate);
// // // // // // // // //     };

// // // // // // // // //     const onChangeTime = (event, selectedTime) => {
// // // // // // // // //         const currentTime = selectedTime || selectedTime;
// // // // // // // // //         setShowTime(Platform.OS === 'ios');
// // // // // // // // //         setSelectedTime(currentTime);
// // // // // // // // //     };

// // // // // // // // //     const handleConfirmBooking = async () => {
// // // // // // // // //         if (!user) {
// // // // // // // // //             Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         setBookingLoading(true);

// // // // // // // // //         try {
// // // // // // // // //             const bookingRef = collection(db, 'bookings');
// // // // // // // // //             await addDoc(bookingRef, {
// // // // // // // // //                 userId: user.uid,
// // // // // // // // //                 salonId: salon.id,
// // // // // // // // //                 salonName: salon.salonName,
// // // // // // // // //                 serviceId: service.id, // Ensure service.id exists
// // // // // // // // //                 serviceName: service.serviceName,
// // // // // // // // //                 date: selectedDate.toISOString(),
// // // // // // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // // // //                 status: 'pending',
// // // // // // // // //             });

// // // // // // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // // // //                 {
// // // // // // // // //                     text: 'OK',
// // // // // // // // //                     onPress: () => navigation.navigate('Home'), // Adjust navigation as needed
// // // // // // // // //                 },
// // // // // // // // //             ]);
// // // // // // // // //             setBookingLoading(false);

// // // // // // // // //         } catch (error) {
// // // // // // // // //             console.error('Error booking service:', error);
// // // // // // // // //             Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // // // // //             setBookingLoading(false);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <ScrollView style={styles.container}>
// // // // // // // // //             <View style={styles.header}>
// // // // // // // // //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // //                     <Text style={styles.backButton}>&lt;</Text>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //                 <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // // //             </View>

// // // // // // // // //             <View style={styles.orderSummary}>
// // // // // // // // //                 <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // // //                 <View style={styles.serviceItem}>
// // // // // // // // //                     <Image 
// // // // // // // // //                         source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')} 
// // // // // // // // //                         style={styles.serviceImage} 
// // // // // // // // //                     />
// // // // // // // // //                     <View style={styles.serviceDetails}>
// // // // // // // // //                         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // // // // //                     </View>
// // // // // // // // //                 </View>
// // // // // // // // //             </View>

// // // // // // // // //             <View style={styles.dateSelection}>
// // // // // // // // //                 <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // // // //                     <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //                 {showDate && (
// // // // // // // // //                     <DateTimePicker
// // // // // // // // //                         testID="dateTimePicker"
// // // // // // // // //                         value={selectedDate}
// // // // // // // // //                         mode="date"
// // // // // // // // //                         is24Hour={true}
// // // // // // // // //                         display="default"
// // // // // // // // //                         onChange={onChangeDate}
// // // // // // // // //                     />
// // // // // // // // //                 )}
// // // // // // // // //             </View>

// // // // // // // // //             <View style={styles.timeSelection}>
// // // // // // // // //                 <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // // // //                     <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //                 {showTime && (
// // // // // // // // //                     <DateTimePicker
// // // // // // // // //                         testID="timePicker"
// // // // // // // // //                         value={selectedTime}
// // // // // // // // //                         mode="time"
// // // // // // // // //                         is24Hour={false}
// // // // // // // // //                         display="default"
// // // // // // // // //                         onChange={onChangeTime}
// // // // // // // // //                     />
// // // // // // // // //                 )}
// // // // // // // // //             </View>

// // // // // // // // //             <TouchableOpacity
// // // // // // // // //                 style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // // // // // // //                 onPress={handleConfirmBooking}
// // // // // // // // //                 disabled={bookingLoading}
// // // // // // // // //             >
// // // // // // // // //                 {bookingLoading ? (
// // // // // // // // //                     <ActivityIndicator color="white" />
// // // // // // // // //                 ) : (
// // // // // // // // //                     <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // // //                 )}
// // // // // // // // //             </TouchableOpacity>
// // // // // // // // //         </ScrollView>
// // // // // // // // //     );
// // // // // // // // // };


// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //     container: {
// // // // // // // // //         flex: 1,
// // // // // // // // //         backgroundColor: '#fff',
// // // // // // // // //         padding: 20,
// // // // // // // // //         marginTop: 40,
// // // // // // // // //     },
// // // // // // // // //     header: {
// // // // // // // // //         flexDirection: 'row',
// // // // // // // // //         alignItems: 'center',
// // // // // // // // //         marginBottom: 20,
// // // // // // // // //     },
// // // // // // // // //     backButton: {
// // // // // // // // //         fontSize: 24,
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //         marginRight: 10,
// // // // // // // // //     },
// // // // // // // // //     headerTitle: {
// // // // // // // // //         fontSize: 20,
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //     },
// // // // // // // // //     orderSummary: {
// // // // // // // // //         marginBottom: 20,
// // // // // // // // //     },
// // // // // // // // //     orderTitle: {
// // // // // // // // //         fontSize: 18,
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //         marginBottom: 10,
// // // // // // // // //     },
// // // // // // // // //     serviceItem: {
// // // // // // // // //         flexDirection: 'row',
// // // // // // // // //         alignItems: 'center',
// // // // // // // // //         marginBottom: 10,
// // // // // // // // //     },
// // // // // // // // //     serviceImage: {
// // // // // // // // //         width: 70,
// // // // // // // // //         height: 70,
// // // // // // // // //         marginRight: 10,
// // // // // // // // //         borderRadius: 10,
// // // // // // // // //     },
// // // // // // // // //     serviceDetails: {
// // // // // // // // //         flex: 1,
// // // // // // // // //     },
// // // // // // // // //     serviceName: {
// // // // // // // // //         fontSize: 16,
// // // // // // // // //     },
// // // // // // // // //     sectionTitle: {
// // // // // // // // //         fontSize: 16,
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //         marginBottom: 10,
// // // // // // // // //     },
// // // // // // // // //     dateSelection: {
// // // // // // // // //         marginBottom: 20,
// // // // // // // // //     },
// // // // // // // // //     pickerButton: {
// // // // // // // // //         padding: 10,
// // // // // // // // //         borderRadius: 5,
// // // // // // // // //         borderWidth: 1,
// // // // // // // // //         borderColor: '#ddd',
// // // // // // // // //         marginBottom: 20,
// // // // // // // // //         alignItems: 'center',
// // // // // // // // //     },
// // // // // // // // //     timeSelection: {
// // // // // // // // //         marginBottom: 20,
// // // // // // // // //     },
// // // // // // // // //     confirmButton: {
// // // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // // //         paddingVertical: 12,
// // // // // // // // //         borderRadius: 8,
// // // // // // // // //         alignItems: 'center',
// // // // // // // // //         marginTop: 20,
// // // // // // // // //     },
// // // // // // // // //     loadingButton: {
// // // // // // // // //         backgroundColor: '#808080',
// // // // // // // // //     },
// // // // // // // // //     confirmButtonText: {
// // // // // // // // //         color: 'white',
// // // // // // // // //         fontWeight: 'bold',
// // // // // // // // //         fontSize: 18,
// // // // // // // // //     },
// // // // // // // // // });

// // // // // // // // // export default BookServiceScreen;
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // // // import { getAuth } from 'firebase/auth';
// // // // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // // // const BookServiceScreen = () => {
// // // // // // // //     const route = useRoute();
// // // // // // // //     const { service, salon } = route.params || {};
// // // // // // // //     const navigation = useNavigation();
// // // // // // // //     const db = getFirestore();
// // // // // // // //     const auth = getAuth();
// // // // // // // //     const user = auth.currentUser;

// // // // // // // //     const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // // // //     const [showDate, setShowDate] = useState(false);
// // // // // // // //     const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // // // //     const [showTime, setShowTime] = useState(false);
// // // // // // // //     const [bookingLoading, setBookingLoading] = useState(false);

// // // // // // // //     const onChangeDate = (event, selectedDate) => {
// // // // // // // //         const currentDate = selectedDate || selectedDate;
// // // // // // // //         setShowDate(Platform.OS === 'ios');
// // // // // // // //         setSelectedDate(currentDate);
// // // // // // // //     };

// // // // // // // //     const onChangeTime = (event, selectedTime) => {
// // // // // // // //         const currentTime = selectedTime || selectedTime;
// // // // // // // //         setShowTime(Platform.OS === 'ios');
// // // // // // // //         setSelectedTime(currentTime);
// // // // // // // //     };

// // // // // // // //     const handleConfirmBooking = async () => {
// // // // // // // //         if (!user) {
// // // // // // // //             Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         setBookingLoading(true);

// // // // // // // //         try {
// // // // // // // //             const bookingRef = collection(db, 'bookings');
// // // // // // // //             await addDoc(bookingRef, {
// // // // // // // //                 userId: user.uid,
// // // // // // // //                 salonId: salon.id,
// // // // // // // //                 salonName: salon.salonName,
// // // // // // // //                 serviceId: service.id, // Ensure service.id exists
// // // // // // // //                 serviceName: service.serviceName,
// // // // // // // //                 date: selectedDate.toISOString(),
// // // // // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // // //                 status: 'pending',
// // // // // // // //             });

// // // // // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // // //                 {
// // // // // // // //                     text: 'OK',
// // // // // // // //                     onPress: () => navigation.navigate('Home'), // Adjust navigation as needed
// // // // // // // //                 },
// // // // // // // //             ]);
// // // // // // // //             setBookingLoading(false);

// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('Error booking service:', error);
// // // // // // // //             Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // // // //             setBookingLoading(false);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <ScrollView style={styles.container}>
// // // // // // // //             <View style={styles.header}>
// // // // // // // //                 <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // //                     <Text style={styles.backButton}>&lt;</Text>
// // // // // // // //                 </TouchableOpacity>
// // // // // // // //                 <Text style={styles.headerTitle}>Book Service</Text>
// // // // // // // //             </View>

// // // // // // // //             <View style={styles.orderSummary}>
// // // // // // // //                 <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // // // //                 <View style={styles.serviceItem}>
// // // // // // // //                     <Image 
// // // // // // // //                         source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')} 
// // // // // // // //                         style={styles.serviceImage} 
// // // // // // // //                     />
// // // // // // // //                     <View style={styles.serviceDetails}>
// // // // // // // //                         <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // // // //                     </View>
// // // // // // // //                 </View>
// // // // // // // //             </View>

// // // // // // // //             <View style={styles.dateSelection}>
// // // // // // // //                 <Text style={styles.sectionTitle}>Date</Text>
// // // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // // //                     <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // // //                 </TouchableOpacity>
// // // // // // // //                 {showDate && (
// // // // // // // //                     <DateTimePicker
// // // // // // // //                         testID="dateTimePicker"
// // // // // // // //                         value={selectedDate}
// // // // // // // //                         mode="date"
// // // // // // // //                         is24Hour={true}
// // // // // // // //                         display="default"
// // // // // // // //                         onChange={onChangeDate}
// // // // // // // //                     />
// // // // // // // //                 )}
// // // // // // // //             </View>

// // // // // // // //             <View style={styles.timeSelection}>
// // // // // // // //                 <Text style={styles.sectionTitle}>Time</Text>
// // // // // // // //                 <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // // //                     <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // // //                 </TouchableOpacity>
// // // // // // // //                 {showTime && (
// // // // // // // //                     <DateTimePicker
// // // // // // // //                         testID="timePicker"
// // // // // // // //                         value={selectedTime}
// // // // // // // //                         mode="time"
// // // // // // // //                         is24Hour={false}
// // // // // // // //                         display="default"
// // // // // // // //                         onChange={onChangeTime}
// // // // // // // //                     />
// // // // // // // //                 )}
// // // // // // // //             </View>

// // // // // // // //             <TouchableOpacity
// // // // // // // //                 style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // // // // // //                 onPress={handleConfirmBooking}
// // // // // // // //                 disabled={bookingLoading}
// // // // // // // //             >
// // // // // // // //                 {bookingLoading ? (
// // // // // // // //                     <ActivityIndicator color="white" />
// // // // // // // //                 ) : (
// // // // // // // //                     <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // // // //                 )}
// // // // // // // //             </TouchableOpacity>
// // // // // // // //         </ScrollView>
// // // // // // // //     );
// // // // // // // // };


// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //     container: {
// // // // // // // //         flex: 1,
// // // // // // // //         backgroundColor: '#fff',
// // // // // // // //         padding: 20,
// // // // // // // //         marginTop: 40,
// // // // // // // //     },
// // // // // // // //     header: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginBottom: 20,
// // // // // // // //     },
// // // // // // // //     backButton: {
// // // // // // // //         fontSize: 24,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginRight: 10,
// // // // // // // //     },
// // // // // // // //     headerTitle: {
// // // // // // // //         fontSize: 20,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //     },
// // // // // // // //     orderSummary: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //     },
// // // // // // // //     orderTitle: {
// // // // // // // //         fontSize: 18,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginBottom: 10,
// // // // // // // //     },
// // // // // // // //     serviceItem: {
// // // // // // // //         flexDirection: 'row',
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginBottom: 10,
// // // // // // // //     },
// // // // // // // //     serviceImage: {
// // // // // // // //         width: 70,
// // // // // // // //         height: 70,
// // // // // // // //         marginRight: 10,
// // // // // // // //         borderRadius: 10,
// // // // // // // //     },
// // // // // // // //     serviceDetails: {
// // // // // // // //         flex: 1,
// // // // // // // //     },
// // // // // // // //     serviceName: {
// // // // // // // //         fontSize: 16,
// // // // // // // //     },
// // // // // // // //     sectionTitle: {
// // // // // // // //         fontSize: 16,
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         marginBottom: 10,
// // // // // // // //     },
// // // // // // // //     dateSelection: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //     },
// // // // // // // //     pickerButton: {
// // // // // // // //         padding: 10,
// // // // // // // //         borderRadius: 5,
// // // // // // // //         borderWidth: 1,
// // // // // // // //         borderColor: '#ddd',
// // // // // // // //         marginBottom: 20,
// // // // // // // //         alignItems: 'center',
// // // // // // // //     },
// // // // // // // //     timeSelection: {
// // // // // // // //         marginBottom: 20,
// // // // // // // //     },
// // // // // // // //     confirmButton: {
// // // // // // // //         backgroundColor: '#007AFF',
// // // // // // // //         paddingVertical: 12,
// // // // // // // //         borderRadius: 8,
// // // // // // // //         alignItems: 'center',
// // // // // // // //         marginTop: 20,
// // // // // // // //     },
// // // // // // // //     loadingButton: {
// // // // // // // //         backgroundColor: '#808080',
// // // // // // // //     },
// // // // // // // //     confirmButtonText: {
// // // // // // // //         color: 'white',
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         fontSize: 18,
// // // // // // // //     },
// // // // // // // // });

// // // // // // // // export default BookServiceScreen;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList } from 'react-native';
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

// // // // // // //     console.log("route.params in BookServiceScreen:", route.params); // Check received data

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

// // // // // // //         if (!service || !service.id) {  // Check service AND service.id
// // // // // // //             Alert.alert("Error", "Service information is missing. Please try again.");
// // // // // // //             setBookingLoading(false);
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         setBookingLoading(true);

// // // // // // //         try {
// // // // // // //             const bookingRef = collection(db, 'bookings');
// // // // // // //             await addDoc(bookingRef, {
// // // // // // //                 userId: user.uid,
// // // // // // //                 salonId: salon.id,
// // // // // // //                 salonName: salon.salonName,
// // // // // // //                 serviceId: service.id,
// // // // // // //                 serviceName: service.serviceName,
// // // // // // //                 date: selectedDate.toISOString(),
// // // // // // //                 time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // //                 status: 'pending',
// // // // // // //             });

// // // // // // //             Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // // //                 {
// // // // // // //                     text: 'OK',
// // // // // // //                     onPress: () => navigation.navigate('Home'),
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
// // // // // // //         <View style={styles.container}> {/* Changed to View */}
// // // // // // //             <View style={styles.header}> {/* Non-list content in a View */}
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

// // // // // // //             <ScrollView> {/* Wrapped date/time pickers in ScrollView if needed */}
// // // // // // //                 <View style={styles.dateSelection}>
// // // // // // //                     <Text style={styles.sectionTitle}>Date</Text>
// // // // // // //                     <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // // //                         <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // // //                     </TouchableOpacity>
// // // // // // //                     {showDate && (
// // // // // // //                         <DateTimePicker
// // // // // // //                             testID="dateTimePicker"
// // // // // // //                             value={selectedDate}
// // // // // // //                             mode="date"
// // // // // // //                             is24Hour={true}
// // // // // // //                             display="default"
// // // // // // //                             onChange={onChangeDate}
// // // // // // //                         />
// // // // // // //                     )}
// // // // // // //                 </View>

// // // // // // //                 <View style={styles.timeSelection}>
// // // // // // //                     <Text style={styles.sectionTitle}>Time</Text>
// // // // // // //                     <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // // //                         <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // // //                     </TouchableOpacity>
// // // // // // //                     {showTime && (
// // // // // // //                         <DateTimePicker
// // // // // // //                             testID="timePicker"
// // // // // // //                             value={selectedTime}
// // // // // // //                             mode="time"
// // // // // // //                             is24Hour={false}
// // // // // // //                             display="default"
// // // // // // //                             onChange={onChangeTime}
// // // // // // //                         />
// // // // // // //                     )}
// // // // // // //                 </View>
// // // // // // //             </ScrollView>

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
// // // // // // //         </View>
// // // // // // //     );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //     container: {
// // // // // // //         flex: 1,
// // // // // // //         backgroundColor: '#fff',
// // // // // // //         padding: 20,
// // // // // // //         marginTop: 40,
// // // // // // //     },
// // // // // // //     // ... (rest of your styles)
// // // // // // // });

// // // // // // // export default BookServiceScreen;
// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // // // import { getAuth } from 'firebase/auth';
// // // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // // const BookServiceScreen = () => {
// // // // // //   const route = useRoute();
// // // // // //   const { service, salon } = route.params || {};
// // // // // //   const navigation = useNavigation();
// // // // // //   const db = getFirestore();
// // // // // //   const auth = getAuth();
// // // // // //   const user = auth.currentUser;

// // // // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // // // //   const [showDate, setShowDate] = useState(false);
// // // // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // // // //   const [showTime, setShowTime] = useState(false);
// // // // // //   const [bookingLoading, setBookingLoading] = useState(false); // Loading state

// // // // // //   const onChangeDate = (event, selectedDate) => {
// // // // // //     const currentDate = selectedDate || selectedDate; // Use selectedDate if available
// // // // // //     setShowDate(Platform.OS === 'ios');
// // // // // //     setSelectedDate(currentDate);
// // // // // //   };

// // // // // //   const onChangeTime = (event, selectedTime) => {
// // // // // //     const currentTime = selectedTime || selectedTime; // Use selectedTime if available
// // // // // //     setShowTime(Platform.OS === 'ios');
// // // // // //     setSelectedTime(currentTime);
// // // // // //   };


// // // // // //   const handleConfirmBooking = async () => {
// // // // // //     if (!user) {
// // // // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // // // //       return;
// // // // // //     }

// // // // // //     setBookingLoading(true); // Set loading to true

// // // // // //     try {
// // // // // //       const bookingRef = collection(db, 'bookings');
// // // // // //       await addDoc(bookingRef, {
// // // // // //         userId: user.uid,
// // // // // //         salonId: salon.id,
// // // // // //         salonName: salon.salonName,
// // // // // //         serviceId: service.id,
// // // // // //         serviceName: service.serviceName,
// // // // // //         date: selectedDate.toISOString(),
// // // // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // //         status: 'pending',
// // // // // //       });

// // // // // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // // //         {
// // // // // //           text: 'OK',
// // // // // //           onPress: () => navigation.navigate('Home'), // Or wherever you want to navigate
// // // // // //         },
// // // // // //       ]);
// // // // // //       setBookingLoading(false); // Set loading to false after successful booking

// // // // // //     } catch (error) {
// // // // // //       console.error('Error booking service:', error);
// // // // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // // //       setBookingLoading(false); // Set loading to false after error
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <ScrollView style={styles.container}>
// // // // // //       {/* Header */}
// // // // // //       <View style={styles.header}>
// // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // //           <Text style={styles.backButton}>&lt;</Text>
// // // // // //         </TouchableOpacity>
// // // // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // // // //       </View>

// // // // // //       {/* Order Summary */}
// // // // // //       <View style={styles.orderSummary}>
// // // // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // // // //         <View style={styles.serviceItem}>
// // // // // //           <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // // // //           <View style={styles.serviceDetails}>
// // // // // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // // // //           </View>
// // // // // //           {/* Remove button (if needed) */}
// // // // // //           {/* <TouchableOpacity style={styles.removeButton}>
// // // // // //             <Text style={styles.removeText}>-</Text>
// // // // // //           </TouchableOpacity> */}
// // // // // //         </View>
// // // // // //       </View>

// // // // // //       {/* Date Selection */}
// // // // // //       <View style={styles.dateSelection}>
// // // // // //         <Text style={styles.sectionTitle}>Date</Text>
// // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
// // // // // //           <Text>{selectedDate.toLocaleDateString()}</Text>
// // // // // //         </TouchableOpacity>
// // // // // //         {showDate && (
// // // // // //           <DateTimePicker
// // // // // //             testID="dateTimePicker"
// // // // // //             value={selectedDate}
// // // // // //             mode="date"
// // // // // //             is24Hour={true}
// // // // // //             display="default"
// // // // // //             onChange={onChangeDate}
// // // // // //           />
// // // // // //         )}
// // // // // //       </View>

// // // // // //       {/* Time Selection */}
// // // // // //       <View style={styles.timeSelection}>
// // // // // //         <Text style={styles.sectionTitle}>Time</Text>
// // // // // //         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
// // // // // //           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
// // // // // //         </TouchableOpacity>
// // // // // //         {showTime && (
// // // // // //           <DateTimePicker
// // // // // //             testID="timePicker"
// // // // // //             value={selectedTime}
// // // // // //             mode="time"
// // // // // //             is24Hour={false}
// // // // // //             display="default"
// // // // // //             onChange={onChangeTime}
// // // // // //           />
// // // // // //         )}
// // // // // //       </View>

// // // // // //       <TouchableOpacity 
// // // // // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]} // Add loading style
// // // // // //         onPress={handleConfirmBooking}
// // // // // //         disabled={bookingLoading} // Disable button while loading
// // // // // //       >
// // // // // //         {bookingLoading ? (
// // // // // //           <ActivityIndicator color="white" /> // Show indicator while loading
// // // // // //         ) : (
// // // // // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // // // // //         )}
// // // // // //       </TouchableOpacity>
// // // // // //     </ScrollView>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   // ... (Your existing styles)
// // // // // //   pickerButton: {
// // // // // //     padding: 10,
// // // // // //     borderRadius: 5,
// // // // // //     borderWidth: 1,
// // // // // //     borderColor: '#ddd',
// // // // // //     marginBottom: 20,
// // // // // //     alignItems: 'center', // Center the text within the button
// // // // // //   },
// // // // // //   confirmButton: {
// // // // // //     backgroundColor: '#007AFF',
// // // // // //     paddingVertical: 12,
// // // // // //     borderRadius: 8,
// // // // // //     alignItems: 'center',
// // // // // //     marginTop: 20,
// // // // // //   },
// // // // // //   loadingButton: { // Style for the button while loading
// // // // // //     backgroundColor: '#808080', // Grayed out color
// // // // // //   },
// // // // // //   // ... rest of your styles
// // // // // //   container: {
// // // // // //         flex: 1,
// // // // // //         backgroundColor: '#fff',
// // // // // //         padding: 20,
// // // // // //         marginTop: 40,
// // // // // //       },
// // // // // //       header: {
// // // // // //         flexDirection: 'row',
// // // // // //         alignItems: 'center',
// // // // // //         marginBottom: 20,
// // // // // //       },
// // // // // //       backButton: {
// // // // // //         fontSize: 24,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginRight: 10,
// // // // // //       },
// // // // // //       headerTitle: {
// // // // // //         fontSize: 20,
// // // // // //         fontWeight: 'bold',
// // // // // //       },
// // // // // //       orderSummary: {
// // // // // //         marginBottom: 20,
// // // // // //       },
// // // // // //       orderTitle: {
// // // // // //         fontSize: 18,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginBottom: 10,
// // // // // //       },
// // // // // //       serviceItem: {
// // // // // //         flexDirection: 'row',
// // // // // //         alignItems: 'center',
// // // // // //         marginBottom: 10,
// // // // // //       },
// // // // // //       serviceImage: {
// // // // // //         width: 70,
// // // // // //         height: 70,
// // // // // //         marginRight: 10,
// // // // // //         borderRadius: 10,
// // // // // //       },
// // // // // //       serviceDetails: {
// // // // // //         flex: 1,
// // // // // //       },
// // // // // //       serviceName: {
// // // // // //         fontSize: 16,
// // // // // //       },
// // // // // //       removeButton: {
// // // // // //         backgroundColor: 'red',
// // // // // //         width: 20,
// // // // // //         height: 20,
// // // // // //         borderRadius: 10,
// // // // // //         alignItems: 'center',
// // // // // //         justifyContent: 'center',
// // // // // //       },
// // // // // //       removeText: {
// // // // // //         color: 'white',
// // // // // //         fontWeight: 'bold',
// // // // // //         fontSize: 14,
// // // // // //       },
// // // // // //       sectionTitle: {
// // // // // //         fontSize: 16,
// // // // // //         fontWeight: 'bold',
// // // // // //         marginBottom: 10,
// // // // // //       },
// // // // // //       dateSelection: {
// // // // // //         marginBottom: 20,
// // // // // //       },
// // // // // //       datePicker: {
// // // // // //         flexDirection: 'row',
// // // // // //       },
// // // // // //       dateItem: {
// // // // // //         padding: 10,
// // // // // //         borderRadius: 5,
// // // // // //         borderWidth: 1,
// // // // // //         borderColor: '#ddd',
// // // // // //         marginRight: 10,
// // // // // //         alignItems: 'center',
// // // // // //       },
// // // // // //       selectedDateItem: {
// // // // // //         backgroundColor: '#007AFF',
// // // // // //         borderColor: '#007AFF',
// // // // // //       },
// // // // // //       dateDay: {
// // // // // //         fontSize: 14,
// // // // // //         color: '#666',
// // // // // //       },
// // // // // //       dateDate: {
// // // // // //         fontSize: 16,
// // // // // //         fontWeight: 'bold',
// // // // // //         color: '#333',
// // // // // //       },
// // // // // //       timeSelection: {
// // // // // //         marginBottom: 20,
// // // // // //       },
// // // // // //       timePicker: {
// // // // // //         flexDirection: 'row',
// // // // // //       },
// // // // // //       timeButton: {
// // // // // //         padding: 10,
// // // // // //         borderRadius: 5,
// // // // // //         borderWidth: 1,
// // // // // //         borderColor: '#ddd',
// // // // // //         marginRight: 10,
// // // // // //       },
// // // // // //       selectedTimeButton: {
// // // // // //         backgroundColor: '#007AFF',
// // // // // //         borderColor: '#007AFF',
// // // // // //       },
// // // // // //       timeText: {
// // // // // //         fontSize: 16,
// // // // // //         color: '#333',
// // // // // //       },
// // // // // //       confirmButton: {
// // // // // //         backgroundColor: '#007AFF',
// // // // // //         paddingVertical: 12,
// // // // // //         borderRadius: 8,
// // // // // //         alignItems: 'center',
// // // // // //         marginTop: 20,
// // // // // //       },
// // // // // //       confirmButtonText: {
// // // // // //         color: 'white',
// // // // // //         fontWeight: 'bold',
// // // // // //         fontSize: 18,},
// // // // // // });

// // // // // // export default BookServiceScreen;// export default BookServiceScreen;

// // // // // //store email with the booking in firebase 

// // // // // import React, { useState, useContext } from 'react';
// // // // // import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
// // // // // import { collection, addDoc } from 'firebase/firestore';
// // // // // import { db } from '../firebaseConfig'; // Firebase config import
// // // // // import { AuthContext } from '../context/AuthContext'; // Authentication Context
// // // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // // const BookServiceScreen = ({ navigation, route }) => {
// // // // //   const { salon, service } = route.params;
// // // // //   const { user } = useContext(AuthContext);
  
// // // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // // //   const [bookingLoading, setBookingLoading] = useState(false);
  
// // // // //   const handleConfirmBooking = async () => {
// // // // //     if (!user) {
// // // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // // //       return;
// // // // //     }
    
// // // // //     setBookingLoading(true);
    
// // // // //     try {
// // // // //       const bookingRef = collection(db, 'bookings');
// // // // //       await addDoc(bookingRef, {
// // // // //         userId: user.uid,
// // // // //         userEmail: user.email,
// // // // //         salonId: salon.id,
// // // // //         salonName: salon.salonName,
// // // // //         serviceId: service.id,
// // // // //         serviceName: service.serviceName,
// // // // //         date: selectedDate.toISOString(),
// // // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // //         status: 'pending',
// // // // //         createdAt: new Date().toISOString(),
// // // // //       });
      
// // // // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // // // //         {
// // // // //           text: 'OK',
// // // // //           onPress: () => navigation.navigate('Home'),
// // // // //         },
// // // // //       ]);
// // // // //     } catch (error) {
// // // // //       console.error('Error booking service:', error);
// // // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // // //     } finally {
// // // // //       setBookingLoading(false);
// // // // //     }
// // // // //   };
  
// // // // //   return (
// // // // //     <View style={{ flex: 1, padding: 20 }}>
// // // // //       <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{salon.salonName}</Text>
// // // // //       <Text style={{ fontSize: 18, marginTop: 10 }}>{service.serviceName}</Text>
      
// // // // //       <DateTimePicker
// // // // //         value={selectedDate}
// // // // //         mode="date"
// // // // //         display="default"
// // // // //         onChange={(event, date) => date && setSelectedDate(date)}
// // // // //       />
      
// // // // //       <DateTimePicker
// // // // //         value={selectedTime}
// // // // //         mode="time"
// // // // //         display="default"
// // // // //         onChange={(event, time) => time && setSelectedTime(time)}
// // // // //       />
      
// // // // //       <TouchableOpacity
// // // // //         onPress={handleConfirmBooking}
// // // // //         style={{ backgroundColor: '#007BFF', padding: 15, borderRadius: 10, marginTop: 20 }}
// // // // //         disabled={bookingLoading}
// // // // //       >
// // // // //         {bookingLoading ? (
// // // // //           <ActivityIndicator color="#fff" />
// // // // //         ) : (
// // // // //           <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Confirm Booking</Text>
// // // // //         )}
// // // // //       </TouchableOpacity>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // export default BookServiceScreen;



// // // // //update code 


// // // // import React, { useState, useContext } from 'react';
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
// // // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // // import { addDoc, collection, getFirestore } from 'firebase/firestore';
// // // // import { getAuth } from 'firebase/auth';
// // // // import { ref, set, getDatabase } from 'firebase/database';
// // // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // // const BookServiceScreen = () => {
// // // //   const route = useRoute();
// // // //   const { service, salon } = route.params || {};
// // // //   const navigation = useNavigation();
// // // //   const db = getFirestore();
// // // //   const auth = getAuth();
// // // //   const user = auth.currentUser;
// // // //   const realtimeDb = getDatabase();

// // // //   const [selectedDate, setSelectedDate] = useState(new Date());
// // // //   const [showDate, setShowDate] = useState(false);
// // // //   const [selectedTime, setSelectedTime] = useState(new Date());
// // // //   const [showTime, setShowTime] = useState(false);
// // // //   const [bookingLoading, setBookingLoading] = useState(false);

// // // //   const onChangeDate = (event, selectedDate) => {
// // // //     const currentDate = selectedDate || selectedDate;
// // // //     setShowDate(Platform.OS === 'ios');
// // // //     setSelectedDate(currentDate);
// // // //   };

// // // //   const onChangeTime = (event, selectedTime) => {
// // // //     const currentTime = selectedTime || selectedTime;
// // // //     setShowTime(Platform.OS === 'ios');
// // // //     setSelectedTime(currentTime);
// // // //   };

// // // //   const handleConfirmBooking = async () => {
// // // //     if (!user) {
// // // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // // //       return;
// // // //     }

// // // //     setBookingLoading(true);

// // // //     try {
// // // //       const bookingRef = collection(db, 'bookings');
// // // //       await addDoc(bookingRef, {
// // // //         userId: user.uid,
// // // //         userEmail: user.email,
// // // //         salonId: salon.id,
// // // //         salonName: salon.salonName,
// // // //         serviceId: service.id,
// // // //         serviceName: service.serviceName,
// // // //         date: selectedDate.toISOString(),
// // // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // //         status: 'pending',
// // // //       });

// // // //       await set(ref(realtimeDb, 'bookings/' + user.uid), {
// // // //         userId: user.uid,
// // // //         userEmail: user.email,
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
// // // //           onPress: () => navigation.navigate('Home'),
// // // //         },
// // // //       ]);
// // // //       setBookingLoading(false);

// // // //     } catch (error) {
// // // //       console.error('Error booking service:', error);
// // // //       Alert.alert('Error', 'Failed to book service. Please try again.');
// // // //       setBookingLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <ScrollView style={styles.container}>
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // //           <Text style={styles.backButton}>&lt;</Text>
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Book Service</Text>
// // // //       </View>

// // // //       <View style={styles.orderSummary}>
// // // //         <Text style={styles.orderTitle}>Your Services Order</Text>
// // // //         <View style={styles.serviceItem}>
// // // //           <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
// // // //           <View style={styles.serviceDetails}>
// // // //             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
// // // //           </View>
// // // //         </View>
// // // //       </View>

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
// // // //         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
// // // //         onPress={handleConfirmBooking}
// // // //         disabled={bookingLoading}
// // // //       >
// // // //         {bookingLoading ? (
// // // //           <ActivityIndicator color="white" />
// // // //         ) : (
// // // //           <Text style={styles.confirmButtonText}>Confirm</Text>
// // // //         )}
// // // //       </TouchableOpacity>
// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { padding: 20, backgroundColor: '#fff' },
// // // //   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
// // // //   backButton: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
// // // //   headerTitle: { fontSize: 20, fontWeight: 'bold' },
// // // //   orderSummary: { marginBottom: 20 },
// // // //   orderTitle: { fontSize: 18, fontWeight: 'bold' },
// // // //   serviceItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
// // // //   serviceImage: { width: 50, height: 50, borderRadius: 10 },
// // // //   serviceDetails: { marginLeft: 10 },
// // // //   serviceName: { fontSize: 16 },
// // // //   pickerButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 10 },
// // // //   confirmButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 5, marginTop: 20 },
// // // //   confirmButtonText: { color: '#fff', fontWeight: 'bold' },
// // // //   loadingButton: { opacity: 0.5 }
// // // // });

// // // // export default BookServiceScreen;


// // // //update all code 


// // // import React, { useState } from 'react';
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
// // // import { useRoute, useNavigation } from '@react-navigation/native';
// // // import { getAuth } from 'firebase/auth';
// // // import { ref, set, getDatabase } from 'firebase/database';
// // // import DateTimePicker from '@react-native-community/datetimepicker';

// // // const BookServiceScreen = () => {
// // //   const route = useRoute();
// // //   const { service, salon } = route.params || {}; // Ensure salon and service are passed correctly
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
// // //     const currentDate = selectedDate || selectedDate;
// // //     setShowDate(Platform.OS === 'ios');
// // //     setSelectedDate(currentDate);
// // //   };

// // //   const onChangeTime = (event, selectedTime) => {
// // //     const currentTime = selectedTime || selectedTime;
// // //     setShowTime(Platform.OS === 'ios');
// // //     setSelectedTime(currentTime);
// // //   };

// // //   const handleConfirmBooking = async () => {
// // //     if (!user) {
// // //       Alert.alert('Error', 'You must be logged in to book a service.');
// // //       return;
// // //     }

// // //     if (!salon || !salon.id) {
// // //       Alert.alert('Error', 'Salon data is missing.');
// // //       return;
// // //     }

// // //     if (!service || !service.id) {
// // //       Alert.alert('Error', 'Service data is missing.');
// // //       return;
// // //     }

// // //     setBookingLoading(true);

// // //     try {
// // //       const salonId = salon?.id || 'default_salon_id'; // Default if undefined
// // //       const serviceId = service?.id || 'default_service_id'; // Default if undefined

// // //       // Create the booking record in Realtime Database
// // //       await set(ref(realtimeDb, 'bookings/' + user.uid), {
// // //         userId: user.uid,
// // //         userEmail: user.email,
// // //         salonId: salonId,
// // //         salonName: salon.salonName || 'Unknown Salon',
// // //         serviceId: serviceId,
// // //         serviceName: service.serviceName || 'Unknown Service',
// // //         date: selectedDate.toISOString(),
// // //         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // //         status: 'pending',
// // //       });

// // //       Alert.alert('Success', 'Booking is confirmed successfully!', [
// // //         {
// // //           text: 'OK',
// // //           onPress: () => navigation.navigate('MaleHomeScreen'),
// // //         },
// // //       ]);
// // //       setBookingLoading(false);

// // //     } catch (error) {
// // //       console.error('Error booking service:', error);
// // //       Alert.alert('Error', 'Failed to book service. Please try again.');
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


// // //naviagte to female screen after female booking and male screen after male booking 
// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
// // import { useRoute, useNavigation } from '@react-navigation/native';
// // import { getAuth } from 'firebase/auth';
// // import { ref, set, getDatabase } from 'firebase/database';
// // import DateTimePicker from '@react-native-community/datetimepicker';

// // const BookServiceScreen = () => {
// //   const route = useRoute();
// //   const { service, salon } = route.params || {}; // Ensure salon and service are passed correctly
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
// //     const currentDate = selectedDate || selectedDate;
// //     setShowDate(Platform.OS === 'ios');
// //     setSelectedDate(currentDate);
// //   };

// //   const onChangeTime = (event, selectedTime) => {
// //     const currentTime = selectedTime || selectedTime;
// //     setShowTime(Platform.OS === 'ios');
// //     setSelectedTime(currentTime);
// //   };

// //   const handleConfirmBooking = async () => {
// //     if (!user) {
// //       Alert.alert('Error', 'You must be logged in to book a service.');
// //       return;
// //     }

// //     if (!salon || !salon.id) {
// //       Alert.alert('Error', 'Salon data is missing.');
// //       return;
// //     }

// //     if (!service || !service.id) {
// //       Alert.alert('Error', 'Service data is missing.');
// //       return;
// //     }

// //     setBookingLoading(true);

// //     try {
// //       const salonId = salon?.id || 'default_salon_id'; // Default if undefined
// //       const serviceId = service?.id || 'default_service_id'; // Default if undefined

// //       // Create the booking record in Realtime Database
// //       await set(ref(realtimeDb, 'bookings/' + user.uid), {
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

// //       // Check the user's gender (assuming you have a gender property in user data)
// //       // const navigateToScreen = user.gender === 'female' ? 'UserHomeScreen' : 'MaleHomeScreen';

// //       // Alert.alert('Success', 'Booking is confirmed successfully!', [
// //       //   {
// //       //     text: 'OK',
// //       //     onPress: () => navigation.navigate(navigateToScreen),
// //       //   },
// //       // ]);
// //       // setBookingLoading(false);

// //     } catch (error) {
// //       console.error('Error booking service:', error);
// //       Alert.alert('Error', 'Failed to book service. Please try again.');
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


// // owner id 


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { ref, set, getDatabase } from 'firebase/database';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const BookServiceScreen = () => {
//   const route = useRoute();
//   const { service, salon } = route.params || {}; // Ensure salon and service are passed correctly
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
//     setSelectedDate(selectedDate || new Date());
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
//       const ownerId = salon?.ownerId || 'default_owner_id'; // Owner ID get kiya hai
//       const serviceId = service?.id || 'default_service_id';

//       // Booking record Firebase Database me save karega
//       await set(ref(realtimeDb, `bookings/${user.uid}`), {
//         userId: user.uid,
//         userEmail: user.email,
//         ownerId: ownerId, // Salon ID ki jagah Owner ID save ho raha hai
//         salonName: salon.salonName || 'Unknown Salon',
//         serviceId: serviceId,
//         serviceName: service.serviceName || 'Unknown Service',
//         date: selectedDate.toISOString(),
//         time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         status: 'pending',
//       });

//       Alert.alert('Success', 'Booking is confirmed successfully!', [
//         { text: 'OK', onPress: () => navigation.navigate('UserHomeScreen') },
//       ]);

//     } catch (error) {
//       console.error('Error booking service:', error);
//       Alert.alert('Error', 'Failed to book service. Please try again.');
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backButton}>&lt;</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Book Service</Text>
//       </View>

//       <View style={styles.orderSummary}>
//         <Text style={styles.orderTitle}>Your Services Order</Text>
//         <View style={styles.serviceItem}>
//           <Image
//             source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')}
//             style={styles.serviceImage}
//           />
//           <View style={styles.serviceDetails}>
//             <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.dateSelection}>
//         <Text style={styles.sectionTitle}>Date</Text>
//         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
//           <Text>{selectedDate.toLocaleDateString()}</Text>
//         </TouchableOpacity>
//         {showDate && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={selectedDate}
//             mode="date"
//             is24Hour={true}
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}
//       </View>

//       <View style={styles.timeSelection}>
//         <Text style={styles.sectionTitle}>Time</Text>
//         <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
//           <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
//         </TouchableOpacity>
//         {showTime && (
//           <DateTimePicker
//             testID="timePicker"
//             value={selectedTime}
//             mode="time"
//             is24Hour={false}
//             display="default"
//             onChange={onChangeTime}
//           />
//         )}
//       </View>

//       <TouchableOpacity
//         style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
//         onPress={handleConfirmBooking}
//         disabled={bookingLoading}
//       >
//         {bookingLoading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text style={styles.confirmButtonText}>Confirm</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20, backgroundColor: '#fff' },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   backButton: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
//   headerTitle: { fontSize: 20, fontWeight: 'bold' },
//   orderSummary: { marginBottom: 20 },
//   orderTitle: { fontSize: 18, fontWeight: 'bold' },
//   serviceItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
//   serviceImage: { width: 50, height: 50, borderRadius: 10 },
//   serviceDetails: { marginLeft: 10 },
//   serviceName: { fontSize: 16 },
//   pickerButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 10 },
//   confirmButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 5, marginTop: 20 },
//   confirmButtonText: { color: '#fff', fontWeight: 'bold' },
//   loadingButton: { opacity: 0.5 }
// });

// export default BookServiceScreen;
// remove navigation 


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { ref, set, getDatabase } from 'firebase/database';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookServiceScreen = () => {
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
    setSelectedDate(selectedDate || new Date());
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
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      });

      Alert.alert('Success', 'Booking is confirmed successfully!');
    } catch (error) {
      console.error('Error booking service:', error);
      Alert.alert('Error', 'Failed to book service. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Service</Text>
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.orderTitle}>Your Services Order</Text>
        <View style={styles.serviceItem}>
          <Image
            source={service?.images && service.images.length > 0 ? { uri: service.images[0] } : require('../../assets/images/bangscut.jpg')}
            style={styles.serviceImage}
          />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
          </View>
        </View>
      </View>

      <View style={styles.dateSelection}>
        <Text style={styles.sectionTitle}>Date</Text>
        <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDate(true)}>
          <Text>{selectedDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>

      <View style={styles.timeSelection}>
        <Text style={styles.sectionTitle}>Time</Text>
        <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTime(true)}>
          <Text>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showTime && (
          <DateTimePicker
            testID="timePicker"
            value={selectedTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, bookingLoading && styles.loadingButton]}
        onPress={handleConfirmBooking}
        disabled={bookingLoading}
      >
        {bookingLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.confirmButtonText}>Confirm</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backButton: { fontSize: 24, fontWeight: 'bold', marginRight: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  orderSummary: { marginBottom: 20 },
  orderTitle: { fontSize: 18, fontWeight: 'bold' },
  serviceItem: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  serviceImage: { width: 50, height: 50, borderRadius: 10 },
  serviceDetails: { marginLeft: 10 },
  serviceName: { fontSize: 16 },
  pickerButton: { padding: 10, backgroundColor: '#ddd', borderRadius: 5, marginTop: 10 },
  confirmButton: { backgroundColor: '#28a745', padding: 15, alignItems: 'center', borderRadius: 5, marginTop: 20 },
  confirmButtonText: { color: '#fff', fontWeight: 'bold' },
  loadingButton: { opacity: 0.5 }
});

export default BookServiceScreen;
