// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   FlatList,
// //   TouchableOpacity,
// // } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// // const SalonList = () => {
// //   const navigation = useNavigation();

// //   const [salons, setSalons] = useState([
// //     {
// //       rid: 1,
// //       name: 'Shiza Salon',
// //       location: 'Garden Town, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/glammakeup.jpg'),
// //     },
// //     {
// //       id: 2,
// //       name: 'Aneela Beauty Salon',
// //       location: 'House no. 533, DC Colony, Chenab Block',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/nailpolish.jpg'),
// //     },
// //     {
// //       id: 3,
// //       name: 'Paragon Salon',
// //       location: 'Satellite Town, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/mattemakeup.jpg'),
// //     },
// //     {
// //       id: 4,
// //       name: 'Shades Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/hydrating.jpg'),
// //     },
// //     {
// //       id: 5,
// //       name: 'Ghahna Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/bridal.jpg'),
// //     },
// //     {
// //       id: 6,
// //       name: 'Style Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/facewax.jpg'),
// //     },
// //     {
// //       id: 7,
// //       name: 'EyeLid Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/haircuts.jpg'),
// //     },
// //     {
// //       id: 8,
// //       name: 'Duplex Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/nailextention.jpg'),
// //     },
// //     {
// //       id: 9,
// //       name: 'Asthetic Beauty Salon',
// //       location: 'Civil Lines, Gujranwala',
// //       services: ['Hair', 'Facial'],
// //       image: require('../../assets/images/legwax.jpg'),
// //     },
// //   ]);

// //   const handleSalonPress = (salon) => {
// //     navigation.navigate('SalonDetails', { salon });
// //   };

// //   const renderSalonItem = ({ item }) => {
// //     return (
// //       <TouchableOpacity onPress={() => handleSalonPress(item)} style={styles.salonCard}>
// //         <Image source={item.image} style={styles.salonImage} />
// //         <View style={styles.salonDetails}>
// //           <Text style={styles.salonName}>{item.name}</Text>
// //           <Text style={styles.salonLocation}>{item.location}</Text>
// //           <Text style={styles.salonServices}>{item.services.join(', ')}</Text>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Salon List</Text>
// //       <FlatList
// //         data={salons}
// //         renderItem={renderSalonItem}
// //         keyExtractor={(item) => item.id}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f0f0f0', // Light gray background
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     paddingTop:20,
// //     paddingBottom:10,
// //   },
// //   salonCard: {
// //     marginBottom: 20,
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //     elevation: 3, // Android shadow
// //     backgroundColor: 'white',
// //     flexDirection: 'row',
// //     alignItems: 'center', // Vertically center
// //     padding: 10, // Add padding inside the card
// //   },
// //   salonImage: {
// //     width: 80, // Adjust image width
// //     height: 80, // Adjust image height
// //     borderRadius: 40, // Make image circular
// //     marginRight: 10,  // Space between image and details
// //   },
// //   salonDetails: {
// //     flex: 1,
// //   },
// //   salonName: {
// //     fontSize: 16, // Slightly smaller font size
// //     fontWeight: 'bold',
// //     marginBottom: 5,
// //   },
// //   salonLocation: {
// //     fontSize: 14,
// //     color: 'gray',
// //     marginBottom: 5,
// //   },
// //   salonServices: {
// //     fontSize: 14,
// //   },
// // });

// // export default SalonList;
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SalonList = () => {
//   const navigation = useNavigation();

//   const [salons, setSalons] = useState([
//     {
//       id: 1,  // ✅ Fixed unique ID
//       name: 'Shiza Salon',
//       location: 'Garden Town, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/glammakeup.jpg'),
//     },
//     {
//       id: 2,
//       name: 'Aneela Beauty Salon',
//       location: 'House no. 533, DC Colony, Chenab Block',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/nailpolish.jpg'),
//     },
//     {
//       id: 3,
//       name: 'Paragon Salon',
//       location: 'Satellite Town, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/mattemakeup.jpg'),
//     },
//     {
//       id: 4,
//       name: 'Shades Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/hydrating.jpg'),
//     },
//     {
//       id: 5,
//       name: 'Ghahna Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/bridal.jpg'),
//     },
//     {
//       id: 6,
//       name: 'Style Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/facewax.jpg'),
//     },
//     {
//       id: 7,
//       name: 'EyeLid Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/haircuts.jpg'),
//     },
//     {
//       id: 8,
//       name: 'Duplex Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/nailextention.jpg'),
//     },
//     {
//       id: 9,
//       name: 'Asthetic Beauty Salon',
//       location: 'Civil Lines, Gujranwala',
//       services: ['Hair', 'Facial'],
//       image: require('../../assets/images/legwax.jpg'),
//     },
//   ]);

//   // Function to handle salon click
//   const handleSalonPress = (salon) => {
//     if (salon.name === 'Shiza Salon') {
//       navigation.navigate('SalonsScreen', { salon }); // ✅ Navigates to SalonScreen.js
//     } else {
//       navigation.navigate('SalonDetails', { salon }); // ✅ Navigates to SalonDetails.js
//     }
//   };

//   const renderSalonItem = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => handleSalonPress(item)} style={styles.salonCard}>
//         <Image source={item.image} style={styles.salonImage} />
//         <View style={styles.salonDetails}>
//           <Text style={styles.salonName}>{item.name}</Text>
//           <Text style={styles.salonLocation}>{item.location}</Text>
//           <Text style={styles.salonServices}>{item.services.join(', ')}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Salon List</Text>
//       <FlatList
//         data={salons}
//         renderItem={renderSalonItem}
//         keyExtractor={(item) => item.id.toString()} // ✅ Ensure unique key
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     paddingTop: 20,
//     paddingBottom: 10,
//   },
//   salonCard: {
//     marginBottom: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 3,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   salonImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 10,
//   },
//   salonDetails: {
//     flex: 1,
//   },
//   salonName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   salonLocation: {
//     fontSize: 14,
//     color: 'gray',
//     marginBottom: 5,
//   },
//   salonServices: {
//     fontSize: 14,
//   },
// });

// export default SalonList;

//add bottom navbar

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SalonList = () => {
  const navigation = useNavigation();

  const [salons, setSalons] = useState([
    {
      id: 1,
      name: 'Shiza Salon',
      location: 'Garden Town, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/glammakeup.jpg'),
    },
    {
      id: 2,
      name: 'Aneela Beauty Salon',
      location: 'House no. 533, DC Colony, Chenab Block',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/nailpolish.jpg'),
    },
    {
      id: 3,
      name: 'Paragon Salon',
      location: 'Satellite Town, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/mattemakeup.jpg'),
    },
    {
      id: 4,
      name: 'Shades Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/hydrating.jpg'),
    },
    {
      id: 5,
      name: 'Ghahna Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/bridal.jpg'),
    },
    {
      id: 6,
      name: 'Style Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/facewax.jpg'),
    },
    {
      id: 7,
      name: 'EyeLid Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/haircuts.jpg'),
    },
    {
      id: 8,
      name: 'Duplex Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/nailextention.jpg'),
    },
    {
      id: 9,
      name: 'Asthetic Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('../../assets/images/legwax.jpg'),
    },
  ]);

  const handleSalonPress = (salon) => {
    if (salon.name === 'Shiza Salon') {
      navigation.navigate('SalonsScreen', { salon });
    } else {
      navigation.navigate('SalonDetails', { salon });
    }
  };

  const renderSalonItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleSalonPress(item)} style={styles.salonCard}>
        <Image source={item.image} style={styles.salonImage} />
        <View style={styles.salonDetails}>
          <Text style={styles.salonName}>{item.name}</Text>
          <Text style={styles.salonLocation}>{item.location}</Text>
          <Text style={styles.salonServices}>{item.services.join(', ')}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon List</Text>
      <FlatList
        data={salons}
        renderItem={renderSalonItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 80 }} // Ensure space for bottom navbar
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
          <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Salon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('BookingScreen')}>
          <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
          <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>AI Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
          <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  salonCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  salonImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  salonDetails: {
    flex: 1,
  },
  salonName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  salonLocation: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  salonServices: {
    fontSize: 14,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 3,
  },
  bottomNavText: {
    fontSize: 12,
    color: '#333',
  },
});

export default SalonList;
