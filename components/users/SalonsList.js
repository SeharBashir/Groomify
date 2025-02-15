
// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   Image,
// // //   FlatList,
// // //   TouchableOpacity,
// // // } from 'react-native';
// // // import { useNavigation } from '@react-navigation/native';

// // // const SalonList = () => {
// // //   const navigation = useNavigation();

// // //   const [salons, setSalons] = useState([
// // //     {
// // //       id: 1,
// // //       name: 'Shiza Salon',
// // //       location: 'Garden Town, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/glammakeup.jpg'),
// // //     },
// // // {
// // //     id: 2,
// // //       name: 'Aneela Beauty Salon',
// // //       location: 'House no. 533, DC Colony, Chenab Block',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/nailpolish.jpg'),
// // //     },
// // //     {
// // //       id: 3,
// // //       name: 'Paragon Salon',
// // //       location: 'Satellite Town, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/mattemakeup.jpg'),
// // //     },
// // //     {
// // //       id: 4,
// // //       name: 'Shades Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/hydrating.jpg'),
// // //     },
// // //     {
// // //       id: 5,
// // //       name: 'Ghahna Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/bridal.jpg'),
// // //     },
// // //     {
// // //       id: 6,
// // //       name: 'Style Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/facewax.jpg'),
// // //     },
// // //     {
// // //       id: 7,
// // //       name: 'EyeLid Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/haircuts.jpg'),
// // //     },
// // //     {
// // //       id: 8,
// // //       name: 'Duplex Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/nailextention.jpg'),
// // //     },
// // //     {
// // //       id: 9,
// // //       name: 'Asthetic Beauty Salon',
// // //       location: 'Civil Lines, Gujranwala',
// // //       services: ['Hair', 'Facial'],
// // //       image: require('../../assets/images/legwax.jpg'),
// // //     },
// // //   ]);

// // //   const handleSalonPress = (salon) => {
// // //     if (salon.name === 'Shiza Salon') {
// // //       navigation.navigate('SalonsScreen', { salon });
// // //     } else {
// // //       navigation.navigate('SalonDetails', { salon });
// // //     }
// // //   };

// // //   const renderSalonItem = ({ item }) => {
// // //     return (
// // //       <TouchableOpacity onPress={() => handleSalonPress(item)} style={styles.salonCard}>
// // //         <Image source={item.image} style={styles.salonImage} />
// // //         <View style={styles.salonDetails}>
// // //           <Text style={styles.salonName}>{item.name}</Text>
// // //           <Text style={styles.salonLocation}>{item.location}</Text>
// // //           <Text style={styles.salonServices}>{item.services.join(', ')}</Text>
// // //         </View>
// // //       </TouchableOpacity>
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Salon List</Text>
// // //       <FlatList
// // //         data={salons}
// // //         renderItem={renderSalonItem}
// // //         keyExtractor={(item) => item.id.toString()}
// // //         contentContainerStyle={{ paddingBottom: 80 }} // Ensure space for bottom navbar
// // //       />

// // //       {/* Bottom Navigation Bar */}
// // //       <View style={styles.bottomNavigation}>
// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('HomeScreen')}>
// // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Home</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Salon</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('BookingScreen')}>
// // //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Booking</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
// // //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
// // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Profile</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#f0f0f0',
// // //     padding: 20,
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     marginBottom: 20,
// // //     textAlign: 'center',
// // //     paddingTop: 20,
// // //     paddingBottom: 10,
// // //   },
// // //   salonCard: {
// // //     marginBottom: 20,
// // //     borderRadius: 10,
// // //     overflow: 'hidden',
// // //     elevation: 3,
// // //     backgroundColor: 'white',
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     padding: 10,
// // //   },
// // //   salonImage: {
// // //     width: 80,
// // //     height: 80,
// // //     borderRadius: 40,
// // //     marginRight: 10,
// // //   },
// // //   salonDetails: {
// // //     flex: 1,
// // //   },
// // //   salonName: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     marginBottom: 5,
// // //   },
// // //   salonLocation: {
// // //     fontSize: 14,
// // //     color: 'gray',
// // //     marginBottom: 5,
// // //   },
// // //   salonServices: {
// // //     fontSize: 14,
// // //   },
// // //   bottomNavigation: {
// // //     position: 'absolute',
// // //     bottom: 0,
// // //     left: 0,
// // //     right: 0,
// // //     backgroundColor: 'white',
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     alignItems: 'center',
// // //     paddingVertical: 10,
// // //     elevation: 10,
// // //     borderTopWidth: 1,
// // //     borderColor: '#ddd',
// // //   },
// // //   bottomNavItem: {
// // //     alignItems: 'center',
// // //   },
// // //   bottomNavIcon: {
// // //     width: 24,
// // //     height: 24,
// // //     marginBottom: 3,
// // //   },
// // //   bottomNavText: {
// // //     fontSize: 12,
// // //     color: '#333',
// // //   },
// // // });

// // // export default SalonList;
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// // import { db } from '../../firebaseConfig'; // Import your Firebase config
// // import { ref, onValue } from 'firebase/database';
// // import { useNavigation } from '@react-navigation/native'
// // const SalonList = ({ }) => {
// //   const navigation = useNavigation();
// //   const [salons, setSalons] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const salonsRef = ref(db, 'salons'); // Reference to the salons node in your database

// //     const unsubscribe = onValue(salonsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const salonsData = snapshot.val();
// //         const salonsArray = Object.keys(salonsData).map((key) => ({
// //           id: key, // Store the unique ID as 'id'
// //           ...salonsData[key],
// //         }));
// //         setSalons(salonsArray);
// //       } else {
// //         setSalons([]); // No salons found
// //       }
// //       setLoading(false);
// //     }, (error) => {
// //       setError(error.message);
// //       setLoading(false);
// //       console.error("Error fetching salons:", error);
// //     });

// //     return () => unsubscribe(); // Cleanup listener on unmount
// //   }, []);

// //   const renderSalonItem = ({ item }) => (
// //     <TouchableOpacity 
// //       style={styles.salonItem}
// //       onPress={() => navigation.navigate('SalonDetailsScreen', { salonId: item.id, salon: item })} // Pass salon ID and data
// //     >
// //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// //       <View style={styles.salonInfo}>
// //         <Text style={styles.salonName}>{item.salonName}</Text>
// //         <Text style={styles.salonAddress}>{item.address}</Text>
// //         {/* Add other salon information as needed */}
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   if (loading) {
// //     return <Text>Loading salons...</Text>;
// //   }

// //   if (error) {
// //     return <Text>Error: {error}</Text>;
// //   }

// //   if (salons.length === 0) {
// //     return <Text>No salons found.</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //        <Text style={styles.title}>Salon List</Text>
// //       <FlatList
// //         data={salons}
// //         renderItem={renderSalonItem}
// //         keyExtractor={(item) => item.id} // Use the ID as the key
// //         numColumns={2} // Display salons in two columns
// //         columnWrapperStyle={styles.columnWrapper} // Style for the columns
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#f8f8f8', // Example background color
// //   },
// //   salonItem: {
// //     flex: 1, // Important for the two-column layout
// //     margin: 5,
// //     padding: 10,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 8,
// //     backgroundColor: 'white',
// //     alignItems: 'center', // Center content horizontally
// //   },
// //   columnWrapper: {
// //     justifyContent: 'space-between', // Space columns evenly
// //   },
// //   salonLogo: {
// //     width: 100,
// //     height: 100,
// //     resizeMode: 'cover',
// //     borderRadius: 8,
// //     marginBottom: 5,
// //   },
// //   salonInfo: {
// //     alignItems: 'center', // Center text within the salon info
// //   },
// //   salonName: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 2,
// //   },
// //   salonAddress: {
// //     fontSize: 14,
// //     color: 'gray',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: '#333',
// //   },
// // });

// // export default SalonList;
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue, query, orderByChild } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';

// const SalonList = () => {
//   const navigation = useNavigation();
//   const [salons, setSalons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');

//     // Query to fetch all salons, ordered by ownerId (required for Firebase queries)
//     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

//     const unsubscribe = onValue(salonsQuery, (snapshot) => {
//       if (snapshot.exists()) {
//         const salonsData = snapshot.val();
//         const salonsArray = Object.keys(salonsData).map((key) => ({
//           id: key, // The key is the salon's ID in Firebase
//           ...salonsData[key], // Spread the rest of the salon data
//         }));
//         setSalons(salonsArray);
//       } else {
//         setSalons([]);
//       }
//       setLoading(false);
//     }, (error) => {

//       setError(error.message);
//       setLoading(false);
//       console.error("Error fetching salons:", error);
//     });

//     return () => unsubscribe(); // Clean up listener on unmount
//   }, []); // Empty dependency array ensures this runs only once

//   const renderSalonItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.salonItem}
//       onPress={() => navigation.navigate('SalonDetailsScreen', { salonId: item.id, salon: item })} // Pass salonId and salon data
//     >
//       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
//       <View style={styles.salonInfo}>
//         <Text style={styles.salonName}>{item.salonName}</Text>
//         <Text style={styles.salonAddress}>{item.address}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return <Text>Loading salons...</Text>;
//   }

//   if (error) {
//     return <Text>Error: {error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Salon List</Text>
//       <FlatList
//         data={salons}
//         renderItem={renderSalonItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//   },
//   salonItem: {
//     flex: 1,
//     margin: 5,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//   },
//   salonLogo: {
//     width: 100,
//     height: 100,
//     resizeMode: 'cover',
//     borderRadius: 8,
//     marginBottom: 5,
//   },
//   salonInfo: {
//     alignItems: 'center',
//   },
//   salonName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 2,
//   },
//   salonAddress: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
// });

// export default SalonList;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const SalonList = () => {
  const navigation = useNavigation();
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const salonsRef = ref(db, 'salons');
    const salonsQuery = query(salonsRef, orderByChild('ownerId'));

    const unsubscribe = onValue(salonsQuery, (snapshot) => {
      if (snapshot.exists()) {
        const salonsData = snapshot.val();
        const salonsArray = Object.keys(salonsData).map((key) => ({
          id: key,
          ...salonsData[key],
        }));
        setSalons(salonsArray);
      } else {
        setSalons([]);
      }
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching salons:", error);
    });

    return () => unsubscribe();
  }, []);

  const renderSalonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.salonItem}
      onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })} // Navigate to SalonsScreen
    >
      <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
      <View style={styles.salonInfo}>
        <Text style={styles.salonName}>{item.salonName}</Text>
        <Text style={styles.salonAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading salons...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon List</Text>
      <FlatList
        data={salons}
        renderItem={renderSalonItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (Your existing styles)
  
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
      },
      salonItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      columnWrapper: {
        justifyContent: 'space-between',
      },
      salonLogo: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 5,
      },
      salonInfo: {
        alignItems: 'center',
      },
      salonName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
      },
      salonAddress: {
        fontSize: 14,
        color: 'gray',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
      },
});

export default SalonList;