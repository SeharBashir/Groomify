// import React from 'react';
// import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For the back button icon

// const SalonsScreen = () => {
//   return (
//     <ImageBackground 
//       source={require('../../assets/images/salonpic.jpg')} 
//       style={styles.background}
//     >
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton}>
//         <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
//       </TouchableOpacity>

//       {/* Salon Details Card */}
//       <View style={styles.card}>
//         <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

//         <Text style={styles.salonName}>Shiza Beauty Salon</Text>
//         <Text style={styles.location}>Garden Town, Gujranwala</Text>

//         {/* Open Status */}
//         <View style={styles.statusContainer}>
//           <Text style={styles.statusText}>OPEN</Text>
//         </View>

//         {/* See All Services Button */}
//         <TouchableOpacity style={styles.servicesButton}>
//           <Text style={styles.servicesText}>See all services</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'flex-end',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 20,
//     padding: 8,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 30,
//     paddingBottom: 40,
//     elevation: 5,
//     marginBottom: 10,

//   },
//   categoryText: {
//     color: '#1E3A4F',
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   salonName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#1E3A4F',
//   },
//   location: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 10,
//   },
//   statusContainer: {
//     backgroundColor: '#FFD700',
//     borderRadius: 15,
//     alignSelf: 'flex-start',
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//     marginBottom: 15,
//   },
//   statusText: {
//     color: '#1E3A4F',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   servicesButton: {
//     backgroundColor: '#1E3A4F',
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   servicesText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SalonsScreen;
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the back button icon
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const SalonsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <ImageBackground 
      source={require('../../assets/images/salonpic.jpg')} 
      style={styles.background}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#1E3A4F" />
      </TouchableOpacity>

      {/* Salon Details Card */}
      <View style={styles.card}>
        <Text style={styles.categoryText}>Hair • Facial • Nails • 2+</Text>

        <Text style={styles.salonName}>Shiza Beauty Salon</Text>
        <Text style={styles.location}>Garden Town, Gujranwala</Text>

        {/* Open Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>OPEN</Text>
        </View>

        {/* See All Services Button */}
        <TouchableOpacity 
          style={styles.servicesButton}
          onPress={() => navigation.navigate('UserService')} // ✅ Navigate to UserService.js
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
    backgroundColor: 'white',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A4F',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
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
    backgroundColor: '#1E3A4F',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  servicesText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SalonsScreen;
