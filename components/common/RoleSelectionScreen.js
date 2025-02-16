// ;
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const RoleSelectionScreen = () => {
//   const navigation = useNavigation();
//   const [selectedRole, setSelectedRole] = useState(null); // 🔥 State to store selected role

//   const handleRoleSelection = (role) => {
//     setSelectedRole(role); // ✅ Store selected role
//     if (role === 'user') {
//       navigation.navigate('UserLoginScreen', { role }); // Pass role to signup
//     } else {
//       navigation.navigate('SalonLoginForm', { role }); // Pass role to signup
//     }
//   };

//   return (
//     <ImageBackground
//       source={require('../../assets/saloonn.jpg')}
//       style={styles.backgroundImage}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <Text style={styles.groomifyHeading}>Groomify</Text>
//         <Text style={styles.heading}>Choose Your Role</Text>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection('user')}>
//             <Image source={require('../../assets/user.png')} style={styles.icon} />
//             <Text style={styles.buttonText}>User</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.button} onPress={() => handleRoleSelection('salon')}>
//             <Image source={require('../../assets/salonicon.png')} style={styles.icon} />
//             <Text style={styles.buttonText}>Salon</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 120,
//   },
//   groomifyHeading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     fontFamily: 'PlaywriteIN-VariableFont_wght',
//     marginBottom: 20,
//     color: 'black',
//     borderRadius: 50,
//     padding: 15,
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: '400',
//     marginTop: 150,
//     marginBottom: 100,
//     color: 'white',
//     backgroundColor: '#00665C',
//     borderRadius: 50,
//     padding: 15,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#fff',
//     paddingTop: 50,
//     padding: 50,
//     width: 180,
//     height: 200,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//     borderWidth: 8,
//     borderColor: '#00665C',
//   },
//   icon: {
//     width: 90,
//     height: 90,
//     marginBottom: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default RoleSelectionScreen;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const RoleSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    navigation.navigate(role === 'user' ? 'UserSignupScreen' : 'SalonSignupScreen', { role });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Groomify</Text>
        <Text style={styles.subtitle}>Your AI Beauty Assistant</Text>
        <Text style={styles.role}>Choose Your Role</Text>
      </View>

      {/* Role Selection Cards */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.card} onPress={() => handleRoleSelection('user')}>
          <Image source={require('../../assets/user.png')} style={styles.icon} />
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleRoleSelection('salon')}>
          <Image source={require('../../assets/salonicon.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Salon</Text>
        </TouchableOpacity>
      </View>

      {/* Decorative Divider */}
      <View style={styles.divider} />

      {/* About System Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Why Groomify?</Text>
        <Text style={styles.aboutText}>
          Groomify is your personal AI-powered beauty assistant. Whether you're looking for a professional salon
          or self-care services, we help you find the best match with ease!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.05, // Dynamic Padding
  },
  header: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  welcomeText: {
    fontSize: width * 0.12, // Responsive Font Size
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: width * 0.045, // Responsive Font Size
    color: 'white',
    marginTop: 5,
  },
  role: {
    fontSize: width * 0.090, // Responsive Font Size
    color: 'white',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Adjusts to Screen Size
  },
  card: {
    backgroundColor: 'rgba(0, 143, 114, 0.8)', // ✅ Transparent Effect
    width: width * 0.4, // Responsive Width
    height: height * 0.25, // Responsive Height
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.03,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 12,
    borderWidth: 4,
    borderColor: 'white',
  },
  icon: {
    width: width * 0.25, // Responsive Icon Size
    height: width * 0.25,
    marginBottom: 10,
    tintColor: 'white',
  },
  buttonText: {
    fontSize: width * 0.06, // Responsive Font Size
    fontWeight: 'bold',
    color: 'white',
  },
  divider: {
    width: '80%',
    height: 2,
    backgroundColor: 'white',
    marginVertical: height * 0.05,
    borderRadius: 10,
  },
  aboutContainer: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // ✅ Slight Transparency for Background
    borderRadius: 15,
    padding: height * 0.025,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 40,
    elevation: 50,
  },
  aboutTitle: {
    fontSize: width * 0.065, // Responsive Font Size
    fontWeight: 'bold',
    color: '#00665C',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: '#00665C',
  },
});

export default RoleSelectionScreen;

