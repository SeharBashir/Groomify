// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // const BookServiceScreen = () => {
// //   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
// //   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

// //   const dates = [
// //     { day: 'Wed', date: '9' },
// //     { day: 'Thu', date: '10' },
// //     { day: 'Fri', date: '11' },
// //     { day: 'Sat', date: '12' },
// //   ];

// //   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity>
// //           <Text style={styles.backButton}>&lt;</Text> {/* Back button */}
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}> Book Service</Text>
// //       </View>

// //       <View style={styles.orderSummary}>
// //         <Text style={styles.orderTitle}>Your Services Order</Text>
// //         <View style={styles.serviceItem}>
// //           <Image source={require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} /> {/* Replace with your image */}
// //           <View style={styles.serviceDetails}>
// //             <Text style={styles.serviceName}>Curtain Bangs Cut</Text>
// //           </View>
// //           <TouchableOpacity style={styles.removeButton}>
// //             <Text style={styles.removeText}>-</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       <View style={styles.dateSelection}>
// //         <Text style={styles.sectionTitle}>Date</Text>
// //         <View style={styles.datePicker}>
// //           {dates.map((date) => (
// //             <TouchableOpacity
// //               key={date.date}
// //               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
// //               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
// //             >
// //               <Text style={styles.dateDay}>{date.day}</Text>
// //               <Text style={styles.dateDate}>{date.date}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>

// //       <View style={styles.timeSelection}>
// //         <Text style={styles.sectionTitle}>Time</Text>
// //         <View style={styles.timePicker}>
// //           {times.map((time) => (
// //             <TouchableOpacity
// //               key={time}
// //               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
// //               onPress={() => setSelectedTime(time)}
// //             >
// //               <Text style={styles.timeText}>{time}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>

// //       <TouchableOpacity style={styles.confirmButton}>
// //         <Text style={styles.confirmButtonText}>Confirm</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     padding: 20,
// //     marginTop:40,

// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   backButton: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginRight: 10,
// //   },
// //   headerTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   orderSummary: {
// //     marginBottom: 20,
// //   },
// //   orderTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   serviceItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   serviceImage: {
// //     width: 70,
// //     height: 70,
// //     marginRight: 10,
// //     borderRadius:10,
// //   },
// //   serviceDetails: {
// //     flex: 1,
// //   },
// //   serviceName: {
// //     fontSize: 16,
    
// //   },
// //   removeButton: {
// //     backgroundColor: 'red', // Or any color you prefer
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   removeText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 14,
// //   },
// //   sectionTitle: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   dateSelection: {
// //     marginBottom: 20,
// //   },
// //   datePicker: {
// //     flexDirection: 'row',
// //   },
// //   dateItem: {
// //     padding: 10,
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     marginRight: 10,
// //     alignItems: 'center',
// //   },
// //   selectedDateItem: {
// //     backgroundColor: '#007AFF', // iOS blue
// //     borderColor: '#007AFF',
// //   },
// //   dateDay: {
// //     fontSize: 14,
// //     color: '#666',
// //   },
// //   dateDate: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   timeSelection: {
// //     marginBottom: 20,
// //   },
// //   timePicker: {
// //     flexDirection: 'row',
// //   },
// //   timeButton: {
// //     padding: 10,
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     marginRight: 10,
    
// //   },
// //   selectedTimeButton: {
// //     backgroundColor: '#007AFF', // iOS blue
// //     borderColor: '#007AFF',
// //   },
// //   timeText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   confirmButton: {
// //     backgroundColor: '#007AFF', // iOS blue
// //     paddingVertical: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     marginTop:20,
// //   },
// //   confirmButtonText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 18,
// //   },
// // });

// // export default BookServiceScreen;




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// const BookServiceScreen = ({ route, navigation }) => {
//   const { service } = route.params || {}; // Ensure service exists

//   const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
//   const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

//   const dates = [
//     { day: 'Wed', date: '9' },
//     { day: 'Thu', date: '10' },
//     { day: 'Fri', date: '11' },
//     { day: 'Sat', date: '12' },
//   ];

//   const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.backButton}>&lt;</Text> {/* Fixed back button */}
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Book Service</Text>
//       </View>

//       <View style={styles.orderSummary}>
//         <Text style={styles.orderTitle}>Your Services Order</Text>
//         <View style={styles.serviceItem}>
//           <Image source={service?.image || require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
//           <View style={styles.serviceDetails}>
//             <Text style={styles.serviceName}>{service?.name || "Service Name"}</Text>
//           </View>
//           <TouchableOpacity style={styles.removeButton}>
//             <Text style={styles.removeText}>-</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.dateSelection}>
//         <Text style={styles.sectionTitle}>Date</Text>
//         <View style={styles.datePicker}>
//           {dates.map((date) => (
//             <TouchableOpacity
//               key={date.date}
//               style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
//               onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
//             >
//               <Text style={styles.dateDay}>{date.day}</Text>
//               <Text style={styles.dateDate}>{date.date}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       <View style={styles.timeSelection}>
//         <Text style={styles.sectionTitle}>Time</Text>
//         <View style={styles.timePicker}>
//           {times.map((time) => (
//             <TouchableOpacity
//               key={time}
//               style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
//               onPress={() => setSelectedTime(time)}
//             >
//               <Text style={styles.timeText}>{time}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       <TouchableOpacity style={styles.confirmButton}>
//         <Text style={styles.confirmButtonText}>Confirm</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     marginTop: 40,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   orderSummary: {
//     marginBottom: 20,
//   },
//   orderTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   serviceItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   serviceImage: {
//     width: 70,
//     height: 70,
//     marginRight: 10,
//     borderRadius: 10,
//   },
//   serviceDetails: {
//     flex: 1,
//   },
//   serviceName: {
//     fontSize: 16,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   removeText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   dateSelection: {
//     marginBottom: 20,
//   },
//   datePicker: {
//     flexDirection: 'row',
//   },
//   dateItem: {
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   selectedDateItem: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   dateDay: {
//     fontSize: 14,
//     color: '#666',
//   },
//   dateDate: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   timeSelection: {
//     marginBottom: 20,
//   },
//   timePicker: {
//     flexDirection: 'row',
//   },
//   timeButton: {
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginRight: 10,
//   },
//   selectedTimeButton: {
//     backgroundColor: '#007AFF',
//     borderColor: '#007AFF',
//   },
//   timeText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   confirmButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookServiceScreen = () => {
  const route = useRoute();
  const { service, salon } = route.params || {};
  const navigation = useNavigation();
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false); // Loading state

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate; // Use selectedDate if available
    setShowDate(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || selectedTime; // Use selectedTime if available
    setShowTime(Platform.OS === 'ios');
    setSelectedTime(currentTime);
  };


  const handleConfirmBooking = async () => {
    if (!user) {
      Alert.alert('Error', 'You must be logged in to book a service.');
      return;
    }

    setBookingLoading(true); // Set loading to true

    try {
      const bookingRef = collection(db, 'bookings');
      await addDoc(bookingRef, {
        userId: user.uid,
        salonId: salon.id,
        salonName: salon.salonName,
        serviceId: service.id,
        serviceName: service.serviceName,
        date: selectedDate.toISOString(),
        time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'pending',
      });

      Alert.alert('Success', 'Booking is confirmed successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'), // Or wherever you want to navigate
        },
      ]);
      setBookingLoading(false); // Set loading to false after successful booking

    } catch (error) {
      console.error('Error booking service:', error);
      Alert.alert('Error', 'Failed to book service. Please try again.');
      setBookingLoading(false); // Set loading to false after error
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Service</Text>
      </View>

      {/* Order Summary */}
      <View style={styles.orderSummary}>
        <Text style={styles.orderTitle}>Your Services Order</Text>
        <View style={styles.serviceItem}>
          <Image source={service?.images && service.images.length > 0 ? {uri: service.images[0]} : require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>{service?.serviceName || "Service Name"}</Text>
          </View>
          {/* Remove button (if needed) */}
          {/* <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>-</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Date Selection */}
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

      {/* Time Selection */}
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
        style={[styles.confirmButton, bookingLoading && styles.loadingButton]} // Add loading style
        onPress={handleConfirmBooking}
        disabled={bookingLoading} // Disable button while loading
      >
        {bookingLoading ? (
          <ActivityIndicator color="white" /> // Show indicator while loading
        ) : (
          <Text style={styles.confirmButtonText}>Confirm</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... (Your existing styles)
  pickerButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    alignItems: 'center', // Center the text within the button
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loadingButton: { // Style for the button while loading
    backgroundColor: '#808080', // Grayed out color
  },
  // ... rest of your styles
  container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 40,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      backButton: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      orderSummary: {
        marginBottom: 20,
      },
      orderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      serviceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      serviceImage: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 10,
      },
      serviceDetails: {
        flex: 1,
      },
      serviceName: {
        fontSize: 16,
      },
      removeButton: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      removeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dateSelection: {
        marginBottom: 20,
      },
      datePicker: {
        flexDirection: 'row',
      },
      dateItem: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
        alignItems: 'center',
      },
      selectedDateItem: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
      },
      dateDay: {
        fontSize: 14,
        color: '#666',
      },
      dateDate: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      timeSelection: {
        marginBottom: 20,
      },
      timePicker: {
        flexDirection: 'row',
      },
      timeButton: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 10,
      },
      selectedTimeButton: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
      },
      timeText: {
        fontSize: 16,
        color: '#333',
      },
      confirmButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      },
      confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,},
});

export default BookServiceScreen;// export default BookServiceScreen;
