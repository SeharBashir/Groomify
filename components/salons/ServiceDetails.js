// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import { getDatabase, ref, update, remove } from 'firebase/database';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const ServiceDetails = () => {
//   const db = getDatabase();
//   const navigation = useNavigation();
//   const { service } = useRoute().params;

//   const handleDeleteService = () => {
//     Alert.alert(
//       'Confirm Deletion',
//       'Are you sure you want to delete this service?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: () => {
//             remove(ref(db, `services/${service.id}`))
//               .then(() => {
//                 Alert.alert('Service deleted successfully.');
//                 navigation.goBack();
//               })
//               .catch((error) => Alert.alert('Error deleting service.', error.message));
//           },
//         },
//       ]
//     );
//   };

//   const handleUpdateService = () => {
//     navigation.navigate('UpdateServiceScreen', { service });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: service.images[0] }} style={styles.image} />
//       <Text style={styles.serviceName}>{service.serviceName}</Text>
//       <Text style={styles.price}>{service.price} PKR</Text>
//       <Text style={styles.description}>{service.serviceDescription}</Text>

//       <TouchableOpacity
//         style={styles.updateButton}
//         onPress={handleUpdateService}
//       >
//         <Text style={styles.updateText}>Update Service</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={handleDeleteService}
//       >
//         <Text style={styles.deleteText}>Delete Service</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' ,marginTop:20},
//   image: { width: '100%', height: 200, borderRadius: 10 },
//   serviceName: { fontSize: 22, fontWeight: 'bold', color: '#00665C', marginTop: 10 },
//   price: { fontSize: 18, color: '#ff5733', marginVertical: 5 },
//   description: { fontSize: 16, color: '#777', marginVertical: 10 },
//   updateButton: {
//     backgroundColor: '#00665C',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 15,
//   },
//   updateText: { color: '#fff', textAlign: 'center', fontSize: 16 },
//   deleteButton: {
//     backgroundColor: '#ff3b3b',
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   deleteText: { color: '#fff', textAlign: 'center', fontSize: 16 },
// });

// export default ServiceDetails;
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { getDatabase, ref, remove } from 'firebase/database';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For the back arrow icon

const ServiceDetails = () => {
  const db = getDatabase();
  const navigation = useNavigation();
  const { service } = useRoute().params;

  const handleDeleteService = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this service?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            remove(ref(db, `services/${service.id}`))
              .then(() => {
                Alert.alert('Service deleted successfully.');
                navigation.goBack();
              })
              .catch((error) => Alert.alert('Error deleting service.', error.message));
          },
        },
      ]
    );
  };

  const handleUpdateService = () => {
    navigation.navigate('UpdateServiceScreen', { service });
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Service Detail</Text>
      </View>

      {/* Centered Card */}
      <View style={styles.card}>
        <Image source={{ uri: service.images[0] }} style={styles.image} />
        <Text style={styles.serviceName}>{service.serviceName}</Text>
        <Text style={styles.price}>{service.price} PKR</Text>
        <Text style={styles.description}>{service.serviceDescription}</Text>
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateService}>
        <Text style={styles.updateText}>Update Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteService}>
        <Text style={styles.deleteText}>Delete Service</Text>
      </TouchableOpacity>
      </View>

      {/* Update and Delete Buttons */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAF4F4',
  
  },
  header: {
    marginTop:25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00665C',
    marginLeft: 45,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    borderColor:'#00665C',
    borderWidth:7,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
    borderColor:"#00665C",
    borderWidth:5,
  },
  serviceName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00665C',
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#ff5733',
    marginVertical: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: '#777',
    textAlign: 'left',
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: '#00665C',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  updateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#ff3b3b',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceDetails;