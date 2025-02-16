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
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
// import LottieView from 'lottie-react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function OnboardingScreen() {
//   const navigation = useNavigation();

//   return (
//     <Onboarding
//       onDone={() => navigation.navigate('RoleSelectionScreen')}
//       pages={[
//         {
//           backgroundColor: '#fff',
//           image: (
//             <LottieView
//               source={require('../../assets/animations/bookservice.json')}
//               autoPlay
//               loop
//               style={styles.lottie}
//             />
//           ),
//           title: 'Book your beauty Services',
//           subtitle: '',
//         },
//         {
//           backgroundColor: '#fff',
//           image: (
//             <LottieView
//               source={require('../../assets/animations/rating.json')}
//               autoPlay
//               loop
//               style={styles.lottie}
//             />
//           ),
//           title: 'Rate your services and share your experience',
//           subtitle: '',
//         },
//         {
//           backgroundColor: '#e5e7eb',
//           image: (
//             <LottieView
//               source={require('../../assets/animations/haircut.json')} // ✅ Added an image here
//               autoPlay
//               loop
//               style={styles.lottie}
//             />
//           ),
//           title: '✂️ "Get the Perfect Haircut"',
//           subtitle: 'Choose from trendy cuts, classic styles, and personalized grooming to match your vibe'
//         },
//       ]}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   lottie: {
//     width: 350,  
//     height: 350, 
//   },
// });


import React, { useRef, useEffect } from 'react';
import { 
  StyleSheet, 
  Dimensions, 
  View, 
  Text, 
  Animated 
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const animatedText = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedText, {
        toValue: width,
        duration: 5000, // Speed of moving text
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Moving Animated Text */}
      <Animated.Text style={[styles.animatedText, { transform: [{ translateX: animatedText }] }]}>
        🚀 Your Beauty, Your Way! 💇‍♀️✨
      </Animated.Text>

      <Onboarding
        onSkip={() => navigation.navigate('RoleSelectionScreen')}
        onDone={() => navigation.navigate('RoleSelectionScreen')}
        pages={[
          {
            backgroundColor: '#00665C',
            image: (
              <View style={styles.circle}>
                <LottieView
                  source={require('../../assets/animations/bookservice.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: '📅 Book Your Beauty Services',
            subtitle: 'Schedule your beauty treatments with ease and convenience.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#00665C',
            image: (
              <View style={styles.circle}>
                <LottieView
                  source={require('../../assets/animations/rating.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: '⭐ Rate & Share Your Experience',
            subtitle: 'Help others by leaving reviews and ratings for services.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#00665C',
            image: (
              <View style={styles.circle}>
                <LottieView
                  source={require('../../assets/animations/haircut.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: '✂️ Get the Perfect Haircut',
            subtitle: 'Choose from trendy cuts, classic styles, and personalized grooming to match your vibe.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ]}
        controlStatusBar={false}
        bottomBarHighlight={false}
        transitionAnimationDuration={500}
        skipLabel="Skip"
        nextLabel="Next"
        doneLabel="Get Started"
        skipStyle={styles.button}
        nextStyle={styles.button}
        doneStyle={styles.button}
        skipTextStyle={styles.buttonText}
        nextTextStyle={styles.buttonText}
        doneTextStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665C',
  },
  animatedText: {
    position: 'absolute',
    top: height * 0.08, // Adjust height placement
    width: width,
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  circle: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.35,
    backgroundColor: '#008F72',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'white', // ✅ White Border
    borderWidth: 5, // ✅ Border width of 5
  },
  lottie: {
    width: width * 0.5, // Increased size
    height: height * 0.35,
  },
  title: {
    fontSize: width * 0.09,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop:50,
  },
  subtitle: {
    fontSize: width * 0.045,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: width * 0.08,
  },
  button: {
    backgroundColor: '#008F72', // Green buttons
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.015,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});
