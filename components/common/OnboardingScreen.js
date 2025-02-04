// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import Onboarding from 'react-native-onboarding-swiper';
// // import LottieView from 'lottie-react-native';
// // import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// // export default function OnboardingScreen() {
// //   const navigation = useNavigation(); // Initialize navigation

// //   return (
// //     <Onboarding
// //       onDone={() => navigation.navigate('RoleSelectionScreen')} // Navigate to UserSalonScreen on done
// //       pages={[
// //         {
// //           backgroundColor: '#fff',
// //           image: (
// //             <LottieView
// //               source={require('../../assets/animations/bookservice.json')} // Ensure correct path
// //               autoPlay
// //               loop
// //               style={styles.lottie} // Apply styles directly
// //             />
// //           ),
// //           title: 'Book your beauty Services',
// //         },
// //         {
// //           backgroundColor: '#fff',
// //           image: (
// //             <LottieView
// //               source={require('../../assets/animations/rating.json')} // Ensure correct path
// //               autoPlay
// //               loop
// //               style={styles.lottie} // Apply styles directly
// //             />
// //           ),
// //           title: 'Rate your services and share your experience',
// //         },
// //         {
// //           backgroundColor: '#e5e7eb',
// //           image: (
// //             <View style={styles.textContainer}>
// //               <Text style={styles.text}>Reach higher goals!</Text>
// //             </View>
// //           ),
// //           title: 'Achieve Higher Goals',
// //           subtitle: 'Take control of your progress.',
// //         },
// //       ]}
// //     />
// //   );
// // }

// // const styles = StyleSheet.create({
// //   lottie: {
// //     width: 350,  // Increased width
// //     height: 350, // Increased height
// //   },
// //   textContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   text: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// // });



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
// import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// export default function OnboardingScreen() {
//   const navigation = useNavigation(); // Initialize navigation

//   return (
//     <Onboarding
//       onDone={() => navigation.navigate('RoleSelectionScreen')} // Navigate to UserSalonScreen on done
//       pages={[
//         {
//           backgroundColor: '#fff',
//           image: (
//             <LottieView
//               source={require('../../assets/animations/bookservice.json')} // Ensure correct path
//               autoPlay
//               loop
//               style={styles.lottie} // Apply styles directly
//             />
//           ),
//           title: 'Book your beauty Services',
//           subtitle: '', // ✅ Added empty subtitle to prevent errors
//         },
//         {
//           backgroundColor: '#fff',
//           image: (
//             <LottieView
//               source={require('../../assets/animations/rating.json')} // Ensure correct path
//               autoPlay
//               loop
//               style={styles.lottie} // Apply styles directly
//             />
//           ),
//           title: 'Rate your services and share your experience',
//           subtitle: '', // ✅ Added empty subtitle to prevent errors
//         },
//         {
//           backgroundColor: '#e5e7eb',
//           image: (
//             <View style={styles.textContainer}>
//               <Text style={styles.text}>Reach higher goals!</Text>
//             </View>
//           ),
//           title: 'Achieve Higher Goals',
//           subtitle: 'Take control of your progress.', // ✅ This one already had a subtitle, so it's fine
//         },
//       ]}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   lottie: {
//     width: 350,  // Increased width
//     height: 350, // Increased height
//   },
//   textContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


// add image in the lasts ection 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <Onboarding
      onDone={() => navigation.navigate('RoleSelectionScreen')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <LottieView
              source={require('../../assets/animations/bookservice.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          ),
          title: 'Book your beauty Services',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <LottieView
              source={require('../../assets/animations/rating.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
          ),
          title: 'Rate your services and share your experience',
          subtitle: '',
        },
        {
          backgroundColor: '#e5e7eb',
          image: (
            <LottieView
              source={require('../../assets/animations/haircut.json')} // ✅ Added an image here
              autoPlay
              loop
              style={styles.lottie}
            />
          ),
          title: '✂️ "Get the Perfect Haircut"',
          subtitle: 'Choose from trendy cuts, classic styles, and personalized grooming to match your vibe'
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 350,  
    height: 350, 
  },
});


