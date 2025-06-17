// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SplashScreen = () => {
//   const navigation = useNavigation();

//   const handleGetStartedPress = () => {
//     navigation.navigate('OnboardingScreen'); 
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top section with logo */}
//       <View style={styles.topContainer}>
//         <View style={styles.logoWrapper}>
//           <Image
//             source={require('../../assets/logo1.jpeg')}
//             style={styles.logo}
//           />
//         </View>
//       </View>

//       {/* Bottom section with button */}
//       <View style={styles.bottomContainer}>
//         <Text style={styles.welcomeText}>Welcome to GroomifyAI</Text>
//         <Text style={styles.subtitle}>
//           Personalized grooming and beauty assistant
//         </Text>

//         {/* Get Started Button */}
//         <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStartedPress}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topContainer: {
//     flex: 1,
//     backgroundColor: '#00665C',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//   },
//   logoWrapper: {
//     backgroundColor: '#00665C',
//     borderRadius: 50,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 10,
//   },
//   logo: {
//     width: 220,
//     height: 220,
//     resizeMode: 'contain',
//     borderRadius: 80,
//   },
//   bottomContainer: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   welcomeText: {
//     fontSize: 28,
//     fontWeight: '900',
//     color: '#000000',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#AAAAAA',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   getStartedButton: {
//     backgroundColor: '#00665C',
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('OnboardingScreen'); 
  };

  return (
    <View style={styles.container}>
      {/* Top section with gradient background */}
      <LinearGradient colors={['#008B74', '#004D40']} style={styles.topContainer}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/logo1.jpeg')}
            style={styles.logo}
          />
        </View>
      </LinearGradient>

      {/* Bottom section with text & button */}
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>Welcome to GroomifyAI</Text>
        <Text style={styles.subtitle}>Your personalized grooming assistant</Text>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStartedPress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor:'#00665C'
  },
  logoWrapper: {
    backgroundColor: '#00665C',
    borderRadius: 100,
    padding: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#EAF4F4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00665C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#00665C',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#00665C',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#008B74',
    shadowOpacity: 0.3,
    shadowOffset: { width: 5, height: 100 },
    shadowRadius: 60,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default SplashScreen;
