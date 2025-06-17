// // // import React from 'react';
// // // import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
// // // import { Ionicons } from '@expo/vector-icons'; // For the back button icon

// // // const SalonsScreen = () => {
// // //   return (
// // //     <ImageBackground 
// // //       source={require('../../assets/images/salonpic.jpg')} 
// // //       style={styles.background}
// // //     >
// // //       {/* Back Button */}
// // //       <TouchableOpacity style={styles.backButton}>
// // //         <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
// // //       </TouchableOpacity>

// // //       {/* Salon Details Card */}
// // //       <View style={styles.card}>
// // //         <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

// // //         <Text style={styles.salonName}>Shiza Beauty Salon</Text>
// // //         <Text style={styles.location}>Garden Town, Gujranwala</Text>

// // //         {/* Open Status */}
// // //         <View style={styles.statusContainer}>
// // //           <Text style={styles.statusText}>OPEN</Text>
// // //         </View>

// // //         {/* See All Services Button */}
// // //         <TouchableOpacity style={styles.servicesButton}>
// // //           <Text style={styles.servicesText}>See all services</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1,
// // //     resizeMode: 'cover',
// // //     justifyContent: 'flex-end',
// // //   },
// // //   backButton: {
// // //     position: 'absolute',
// // //     top: 50,
// // //     left: 20,
// // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // //     borderRadius: 20,
// // //     padding: 8,
// // //   },
// // //   card: {
// // //     backgroundColor: 'white',
// // //     borderTopLeftRadius: 20,
// // //     borderTopRightRadius: 20,
// // //     padding: 30,
// // //     paddingBottom: 40,
// // //     elevation: 5,
// // //     marginBottom: 10,

// // //   },
// // //   categoryText: {
// // //     color: '#1E3A4F',
// // //     fontSize: 14,
// // //     marginBottom: 5,
// // //   },
// // //   salonName: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#1E3A4F',
// // //   },
// // //   location: {
// // //     fontSize: 14,
// // //     color: '#6B7280',
// // //     marginBottom: 10,
// // //   },
// // //   statusContainer: {
// // //     backgroundColor: '#FFD700',
// // //     borderRadius: 15,
// // //     alignSelf: 'flex-start',
// // //     paddingHorizontal: 10,
// // //     paddingVertical: 2,
// // //     marginBottom: 15,
// // //   },
// // //   statusText: {
// // //     color: '#1E3A4F',
// // //     fontWeight: 'bold',
// // //     fontSize: 12,
// // //   },
// // //   servicesButton: {
// // //     backgroundColor: '#1E3A4F',
// // //     borderRadius: 10,
// // //     paddingVertical: 12,
// // //     alignItems: 'center',
// // //   },
// // //   servicesText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default SalonsScreen;
// // import React from 'react';
// // import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons'; // For the back button icon
// // import { useNavigation } from '@react-navigation/native'; // Import navigation hook
// // import { useRoute } from '@react-navigation/native';

// // const SalonsScreen = () => {
// //   const route = useRoute();
// //   const { salonId, salon } = route.params;

// //   console.log("Salon ID:", salonId);
// //   console.log("Salon Data:", salon);

// //   const navigation = useNavigation(); // Initialize navigation

// //   return (
// //     <ImageBackground 
// //       source={require('../../assets/images/salonpic.jpg')} 
// //       style={styles.background}
// //     >
// //       {/* Back Button */}
// //       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //         <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
// //       </TouchableOpacity>

// //       {/* Salon Details Card */}
// //       <View style={styles.card}>
// //         <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

        
// //       <Text style>Salon Details</Text>
// //       <Text style={styles.salonName}>Salon Name: {salon.salonName}</Text>
// //       {/* ... display other salon details */}
    
// //         {/* Open Status */}
// //         <View style={styles.statusContainer}>
// //           <Text style={styles.statusText}>OPEN</Text>
// //         </View>

// //         {/* See All Services Button */}
// //         <TouchableOpacity 
// //           style={styles.servicesButton}
// //           onPress={() => navigation.navigate('UserService')} // ✅ Navigate to UserService.js
// //         >
// //           <Text style={styles.servicesText}>See all services</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //     justifyContent: 'flex-end',
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     top: 50,
// //     left: 20,
// //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //     borderRadius: 20,
// //     padding: 8,
// //   },
// //   card: {
// //     backgroundColor: 'white',
// //     borderTopLeftRadius: 20,
// //     borderTopRightRadius: 20,
// //     padding: 30,
// //     paddingBottom: 40,
// //     elevation: 5,
// //     marginBottom: 10,
// //   },
// //   categoryText: {
// //     color: '#1E3A4F',
// //     fontSize: 14,
// //     marginBottom: 5,
// //   },
// //   salonName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#1E3A4F',
// //   },
// //   location: {
// //     fontSize: 14,
// //     color: '#6B7280',
// //     marginBottom: 10,
// //   },
// //   statusContainer: {
// //     backgroundColor: '#FFD700',
// //     borderRadius: 15,
// //     alignSelf: 'flex-start',
// //     paddingHorizontal: 10,
// //     paddingVertical: 2,
// //     marginBottom: 15,
// //   },
// //   statusText: {
// //     color: '#1E3A4F',
// //     fontWeight: 'bold',
// //     fontSize: 12,
// //   },
// //   servicesButton: {
// //     backgroundColor: '#1E3A4F',
// //     borderRadius: 10,
// //     paddingVertical: 12,
// //     alignItems: 'center',
// //   },
// //   servicesText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   salonName: {
// //     fontSize: 20,       // Larger font size
// //     fontWeight: 'bold', // Bold font weight
// //     color: '#333',     // Darker text color (adjust as needed)
// //     // Add shadow (iOS only)
// //     textShadowColor: 'rgba(0, 0, 0, 0.2)',
// //     textShadowOffset: { width: 0, height: 2 },
// //     textShadowRadius: 4,
// //   },

// // });

// // export default SalonsScreen;

// import React from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

// const SalonsScreen = () => {
//   const route = useRoute();
//   const { salonId, salon } = route.params;

//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('../../assets/images/salonpic.jpg')}
//       style={styles.background}
//     >
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
//       </TouchableOpacity>

//       {/* Salon Details Card */}
//       <View style={styles.card}>
//         <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

//         <Text style={styles.salonName}>{salon.salonName}</Text> {/* Salon Name */}

//         {/* ... other salon details (if needed) */}

//         {/* Open Status */}
//         <View style={styles.statusContainer}>
//           <Text style={styles.statusText}>OPEN</Text>
//         </View>

//         {/* See All Services Button */}
//         <TouchableOpacity
//           style={styles.servicesButton}
//           onPress={() => navigation.navigate('UserService', { salonId: salonId, salon: salon })} // Navigate to UserServices
//         >
//           <Text style={styles.servicesText}>See all services</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   // ... (Your existing styles)

//   salonName: {
//     fontSize: 24,         // Larger font size
//     fontWeight: 'bold',   // Bold font weight
//     color: '#333',       // Darker text color (adjust as needed)
//     marginBottom: 10,   // Add some space below the name
//     textAlign: 'center' // Center the name
//     // Add shadow (iOS only)
//     // textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     // textShadowOffset: { width: 0, height: 2 },
//     // textShadowRadius: 4,
//   },
//   background: {
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: 'flex-end',
//       },
//       backButton: {
//         position: 'absolute',
//         top: 50,
//         left: 20,
//         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//         borderRadius: 20,
//         padding: 8,
//       },
//       card: {
//         backgroundColor: 'white',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         padding: 30,
//         paddingBottom: 40,
//         elevation: 5,
//         marginBottom: 10,
//       },
//       categoryText: {
//         color: '#1E3A4F',
//         fontSize: 14,
//         marginBottom: 5,
//       },
//       salonName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#1E3A4F',
//       },
//       location: {
//         fontSize: 14,
//         color: '#6B7280',
//         marginBottom: 10,
//       },
//       statusContainer: {
//         backgroundColor: '#FFD700',
//         borderRadius: 15,
//         alignSelf: 'flex-start',
//         paddingHorizontal: 10,
//         paddingVertical: 2,
//         marginBottom: 15,
//       },
//       statusText: {
//         color: '#1E3A4F',
//         fontWeight: 'bold',
//         fontSize: 12,
//       },
//       servicesButton: {
//         backgroundColor: '#1E3A4F',
//         borderRadius: 10,
//         paddingVertical: 12,
//         alignItems: 'center',
//       },
//       servicesText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
    
  
  
// });

// export default SalonsScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getDatabase, ref, get } from 'firebase/database';

const SalonsScreen = () => {
  const route = useRoute();
  const { salonId } = route.params;
  const navigation = useNavigation();

  const [salon, setSalon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalonData = async () => {
      try {
        const db = getDatabase();
        const salonRef = ref(db, `salons/${salonId}`);
        const snapshot = await get(salonRef);

        if (snapshot.exists()) {
          setSalon(snapshot.val());
        } else {
          console.log('No salon data found');
        }
      } catch (error) {
        console.error('Error fetching salon data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalonData();
  }, [salonId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E3A4F" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={salon?.salonLogo ? { uri: salon.salonLogo } : require('../../assets/images/salonpic.jpg')}
      style={styles.background}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
      </TouchableOpacity>

      {/* Salon Details Card */}
      <View style={styles.card}>
        <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

        <Text style={styles.salonName}>{salon?.salonName || 'Salon Name'}</Text>

        {/* Open Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>OPEN</Text>
        </View>

        {/* See All Services Button */}
        <TouchableOpacity
          style={styles.servicesButton}
          onPress={() => navigation.navigate('UserService', { salonId, salon })}
        >
          <Text style={styles.servicesText}>See all services</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8,
  },

  card: {
    backgroundColor: '#E3FAE3', // Light green color
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    paddingBottom: 40,
    elevation: 5,
    marginBottom: 10,
  },

  categoryText: {
    color: '#1E3A4F',
    fontSize: 14,
    marginBottom: 5,
  },

  salonName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A4F',
    textAlign: 'left', // Left align the salon name
  },

  statusContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 15,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 15,
  },

  statusText: {
    color: '#1E3A4F',
    fontWeight: 'bold',
    fontSize: 12,
  },

  servicesButton: {
    backgroundColor: '#006400', // Dark Green color
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },

  servicesText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default SalonsScreen;
