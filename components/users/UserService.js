// import React, { useState } from 'react';
// import  {useEffect } from 'react'; 
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   ImageBackground,
// } from 'react-native';

// const UserService = ({ navigation }) => {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       paddingVertical: 20,
//     },
//     backgroundImage: {
//       flex: 1,
//       resizeMode: 'cover',
//     },
//     overlay: {
//       flex: 1,
//       backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
//       padding: 20, // Add some padding to the overlay
//     },
//     title: {
//       fontSize: 26,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 15,
//       color: '#333',
//       textTransform: 'uppercase',
//       borderBottomWidth: 2,
//       borderBottomColor: 'green',
//       padding: 10,
//       marginTop: 30,
//       marginHorizontal: 20,
//     },
//     serviceContainer: {
//       flex: 1,
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       paddingHorizontal: 25,
//       paddingRight:10,
//     },
//     serviceItem: {
//       width: '47%',
//       padding: 15,
//       marginBottom: 20,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 12,
//       alignItems: 'center',
//       backgroundColor: '#fff',
//       elevation: 3,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 4,
//     },
//     serviceImage: {
//       width: 120,
//       height: 120,
//       marginBottom: 10,
//       resizeMode: 'contain',
//       borderRadius:30,
//     },
//     serviceName: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#444',
//       marginBottom: 5,
//     },
//     serviceDescription: {
//       fontSize: 13,
//       color: '#666',
//       textAlign: 'center',
//       marginBottom: 5,
//     },
//     servicePrice: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: 'green',
//     },
//     bookNowButton: {
//       backgroundColor: 'green',
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       borderRadius: 8,
//       marginTop: 10,
//     },
//     bookNowText: {
//       color: 'white',
//       fontWeight: 'bold',
//       fontSize: 14,
//     },
//     buttonContainer: {
//       flexDirection: 'row',
//       marginBottom: 15,
//       marginHorizontal: 20,
//     },
//     serviceButton: {
//       backgroundColor: '#fff',
//       padding: 10,
//       borderRadius: 10,
//       width: 90,
//       height: 40,
//       marginRight: 10,
//       borderWidth: 1,
//       borderColor: 'green',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     serviceButtonText: {
//       color: 'green',
//       fontSize: 14,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//   });

//   const allServices = {
//     Haircut: [
//       { id: 1, name: 'Bob Cut', description: 'Classic bob cut', price: 'PKR 3550', image: require('../../assets/images/bobcut.jpg') },
//       { id: 2, name: 'Layers', description: 'Layered haircut', price: 'PKR 3850', image: require('../../assets/images/layerscut.jpg') },
//       { id: 3, name: 'U-Cut', description: 'U-shaped cut', price: 'PKR 3000', image: require('../../assets/images/Ucut.jpg') },
//       { id: 4, name: 'Step Cutting', description: 'Step cutting style', price: 'PKR 3550', image: require('../../assets/images/stepcut.jpg') },
//       { id: 5, name: 'Curtain Bangs', description: 'Bangs hair style', price: 'PKR 2850', image: require('../../assets/images/bangscut.jpg') },
//       { id: 6, name: 'Trimming', description: 'Hair trimming', price: 'PKR 2000', image: require('../../assets/images/trim.jpg') },
//     ],
//     Facial: [
//       { id: 7, name: 'Hydrating Facial', description: 'Hydrating facial', price: 'PKR 2000', image: require('../../assets/images/hydrating.jpg') },
//       { id: 8, name: 'Anti-Aging Facial', description: 'Anti-aging facial', price: 'PKR 2500', image: require('../../assets/images/antiaging.jpg') },
//       { id: 9, name: 'Cleansing Facial', description: 'Cleansing facial', price: 'PKR 1800', image: require('../../assets/images/cleansing.jpg') },
//       { id: 10, name: 'Brightening Facial', description: 'Brightening facial', price: 'PKR 2200', image: require('../../assets/images/massages.jpg') },
//       { id: 11, name: 'Acne Facial', description: 'Acne treatment facial', price: 'PKR 2800', image: require('../../assets/images/acne.jpg') },
//       { id: 12, name: 'Herbal Facial', description: 'Herbal facial treatment', price: 'PKR 2100', image: require('../../assets/images/herbal.jpg') },
//     ],
//     Nails: [
//       { id: 13, name: 'Manicure', description: 'Classic manicure', price: 'PKR 1500', image: require('../../assets/images/Nailcare2.jpg') },
//       { id: 14, name: 'Pedicure', description: 'Classic pedicure', price: 'PKR 1500', image: require('../../assets/images/pedicure.jpg') },
//       { id: 15, name: 'Gel Nails', description: 'Gel nail manicure', price: 'PKR 2000', image: require('../../assets/images/nailpolish.jpg') },
//       { id: 16, name: 'Acrylic Nails', description: 'Acrylic nail extensions', price: 'PKR 2500', image: require('../../assets/images/nailextention.jpg') },
//       { id: 17, name: 'Nail Art', description: 'Nail art designs', price: 'PKR 1800', image: require('../../assets/images/nailart.jpg') },
//       { id: 18, name: 'Dip Powder Nails', description: 'Dip powder nails', price: 'PKR 2200', image: require('../../assets/images/powdernail.jpg') },
//     ],
//     Makeup: [
//       { id: 19, name: 'Bridal Makeup', description: 'Bridal makeup', price: 'PKR 4000', image: require('../../assets/images/bridal.jpg') },
//       { id: 20, name: 'Party Makeup', description: 'Party makeup', price: 'PKR 2500', image: require('../../assets/images/mattemakeup.jpg') },
//       { id: 21, name: 'Glam Makeup', description: 'Glam makeup', price: 'PKR 3000', image: require('../../assets/images/glammakeup.jpg') },
//       { id: 22, name: 'Airbrush Makeup', description: 'Airbrush makeup', price: 'PKR 3500', image: require('../../assets/images/brushmakeup.jpg') },
//       { id: 23, name: 'HD Makeup', description: 'HD makeup', price: 'PKR 3800', image: require('../../assets/images/dewymakeup.jpg') },
//       { id: 24, name: 'Natural Makeup', description: 'Natural makeup', price: 'PKR 2000', image: require('../../assets/images/naturalmakeup.jpg') },
//     ],
//     Waxing: [
//         { id: 25, name: 'Full Body Wax', description: 'Full body waxing', price: 'PKR 8000', image: require('../../assets/images/bodywax.jpg') },
//         { id: 26, name: 'Leg Wax', description: 'Leg waxing', price: 'PKR 3500', image: require('../../assets/images/legwax.jpg') },
//         { id: 27, name: 'Face Wax', description: 'Face waxing', price: 'PKR 1800', image: require('../../assets/images/facewax.jpg') },
//         { id: 28, name: 'Arms Wax', description: 'Arms waxing', price: 'PKR 3000', image: require('../../assets/images/armwax.jpg') },
//          { id: 29, name: 'Sugar Wax', description: 'Bikini waxing', price: 'PKR 3500', image: require('../../assets/images/sugarwax.jpg') },
//        { id: 30, name: 'Hard Wax', description: 'Brazilian waxing', price: 'PKR 2500', image: require('../../assets/images/fullwax.jpg') },
//       ],
//       Spa: [
//         { id: 31, name: 'Aromatherapy Massage', description: 'Aromatherapy massage', price: 'PKR 2500', image: require('../../assets/images/spa1.jpg') },
//         { id: 32, name: 'Deep Tissue Massage', description: 'Deep tissue massage', price: 'PKR 2800', image: require('../../assets/images/spa2.jpg') },
//         { id: 33, name: 'Hot Stone Massage', description: 'Hot stone massage', price: 'PKR 3000', image: require('../../assets/images/spa3.jpg') },
//         { id: 34, name: 'Swedish Massage', description: 'Swedish massage', price: 'PKR 2200', image: require('../../assets/images/spa4.jpg') },
//         { id: 35, name: 'Body Scrub', description: 'Body scrub treatment', price: 'PKR 1800', image: require('../../assets/images/spa5.jpg') },
//         { id: 36, name: 'Facial Spa', description: 'Facial spa treatment', price: 'PKR 2000', image: require('../../assets/images/spa6.jpg') },
//       ],
//      };
  
//     const serviceButtons = Object.keys(allServices);
  
//     const [selectedService, setSelectedService] = useState(null);
  
//     const handleServicePress = (serviceName) => {
//       setSelectedService(serviceName);
//     };
//     useEffect(() => {
//       // Select "Haircut" as the default service when the component mounts
//       setSelectedService("Haircut"); 
//     }, []);
  
//     const renderServiceItem = ({ item }) => (
//         <View key={item.id} style={styles.serviceItem}>
//           <Image source={item.image} style={styles.serviceImage} />
//           <Text style={styles.serviceName}>{item.name}</Text>
//           <Text style={styles.serviceDescription}>{item.description}</Text>
//           <Text style={styles.servicePrice}>{item.price}</Text>
//           <TouchableOpacity 
//             style={styles.bookNowButton} 
//             onPress={() => navigation.navigate('BookService', { service: item })}
//           >
//             <Text style={styles.bookNowText}>Book Now</Text>
//           </TouchableOpacity>
//         </View>
//       );
      
  
//     const renderServiceButton = ({ item }) => {
//       const isServiceSelected = selectedService === item;
  
//       return (
//         <TouchableOpacity
//           style={[
//             styles.serviceButton,
//             isServiceSelected && { backgroundColor: 'green', borderColor: 'green' },
//           ]}
//           onPress={() => handleServicePress(item)}
//         >
//           <Text style={[styles.serviceButtonText, isServiceSelected && { color: 'white' }]}>{item}</Text>
//         </TouchableOpacity>
//       );
//     };
  
//     const filteredServices = selectedService ? allServices[selectedService] : [];
  
//     return (
      
//         <FlatList
//         style={styles.container}
//         data={filteredServices}
//         renderItem={renderServiceItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         ListHeaderComponent={
//           <>
//             <Text style={styles.title}>Service Menu</Text>
//             <FlatList
//               data={serviceButtons}
//               renderItem={renderServiceButton}
//               keyExtractor={(item) => item}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.buttonContainer}
//             />
//           </>
//         }
//         contentContainerStyle={styles.serviceContainer}
//       />
//     );
//   };
  
//   export default UserService;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { useNavigation, useRoute } from '@react-navigation/native';

const UserServices = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { salonId, salon } = route.params; // Get salonId and salon data
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const servicesRef = ref(db, 'services');

    // Query to filter services by ownerId (salonId)
    const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

    const unsubscribe = onValue(servicesQuery, (snapshot) => {
      if (snapshot.exists()) {
        const servicesData = snapshot.val();
        const servicesArray = Object.keys(servicesData).map((key) => ({
          id: key,
          ...servicesData[key],
        }));
        setServices(servicesArray);
      } else {
        setServices([]);
      }
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching services:", error);
    });

    return () => unsubscribe();
  }, [salonId]); // Add salonId to dependency array

  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceItem}>
      {/* Conditionally render the image if it exists */}
      {item.images && item.images.length > 0 ? (
        <Image source={{ uri: item.images[0] }} style={styles.serviceImage} />
      ) : (
        <View style={styles.noImagePlaceholder} /> // Placeholder if no image
      )}

      <View style={styles.serviceDetails}>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.servicePrice}>Price: {item.price}</Text>
        <Text style={styles.serviceDescription}>{item.serviceDescription}</Text>
      </View>
    </View>
  );


  if (loading) {
    return <Text>Loading services...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services for {salon ? salon.salonName : 'Salon'}</Text> {/* Handle missing salon data */}
      {services.length === 0 ? (
        <Text>No services found for this salon.</Text>
      ) : (
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  serviceItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  noImagePlaceholder: { // Style for placeholder
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#eee', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  servicePrice: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default UserServices;