// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// const BookServiceScreen = () => {
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
//         <TouchableOpacity>
//           <Text style={styles.backButton}>&lt;</Text> {/* Back button */}
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}> Book Service</Text>
//       </View>

//       <View style={styles.orderSummary}>
//         <Text style={styles.orderTitle}>Your Services Order</Text>
//         <View style={styles.serviceItem}>
//           <Image source={require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} /> {/* Replace with your image */}
//           <View style={styles.serviceDetails}>
//             <Text style={styles.serviceName}>Curtain Bangs Cut</Text>
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
//     marginTop:40,

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
//     borderRadius:10,
//   },
//   serviceDetails: {
//     flex: 1,
//   },
//   serviceName: {
//     fontSize: 16,
    
//   },
//   removeButton: {
//     backgroundColor: 'red', // Or any color you prefer
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
//     backgroundColor: '#007AFF', // iOS blue
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
//     backgroundColor: '#007AFF', // iOS blue
//     borderColor: '#007AFF',
//   },
//   timeText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   confirmButton: {
//     backgroundColor: '#007AFF', // iOS blue
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop:20,
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default BookServiceScreen;




import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const BookServiceScreen = ({ route, navigation }) => {
  const { service } = route.params || {}; // Ensure service exists

  const [selectedDate, setSelectedDate] = useState('Thu, 10'); // Default selected date
  const [selectedTime, setSelectedTime] = useState('10:00 AM'); // Default selected time

  const dates = [
    { day: 'Wed', date: '9' },
    { day: 'Thu', date: '10' },
    { day: 'Fri', date: '11' },
    { day: 'Sat', date: '12' },
  ];

  const times = ['08:00 AM', '10:00 AM', '11:00 AM'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt;</Text> {/* Fixed back button */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Service</Text>
      </View>

      <View style={styles.orderSummary}>
        <Text style={styles.orderTitle}>Your Services Order</Text>
        <View style={styles.serviceItem}>
          <Image source={service?.image || require('../../assets/images/bangscut.jpg')} style={styles.serviceImage} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>{service?.name || "Service Name"}</Text>
          </View>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dateSelection}>
        <Text style={styles.sectionTitle}>Date</Text>
        <View style={styles.datePicker}>
          {dates.map((date) => (
            <TouchableOpacity
              key={date.date}
              style={[styles.dateItem, selectedDate === `${date.day}, ${date.date}` && styles.selectedDateItem]}
              onPress={() => setSelectedDate(`${date.day}, ${date.date}`)}
            >
              <Text style={styles.dateDay}>{date.day}</Text>
              <Text style={styles.dateDate}>{date.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.timeSelection}>
        <Text style={styles.sectionTitle}>Time</Text>
        <View style={styles.timePicker}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.timeButton, selectedTime === time && styles.selectedTimeButton]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 18,
  },
});

export default BookServiceScreen;
