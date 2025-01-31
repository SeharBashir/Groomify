import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function OnboardingScreen() {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <Onboarding
      onDone={() => navigation.navigate('RoleSelectionScreen')} // Navigate to UserSalonScreen on done
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <LottieView
              source={require('../../assets/animations/bookservice.json')} // Ensure correct path
              autoPlay
              loop
              style={styles.lottie} // Apply styles directly
            />
          ),
          title: 'Book your beauty Services',
        },
        {
          backgroundColor: '#fff',
          image: (
            <LottieView
              source={require('../../assets/animations/rating.json')} // Ensure correct path
              autoPlay
              loop
              style={styles.lottie} // Apply styles directly
            />
          ),
          title: 'Rate your services and share your experience',
        },
        {
          backgroundColor: '#e5e7eb',
          image: (
            <View style={styles.textContainer}>
              <Text style={styles.text}>Reach higher goals!</Text>
            </View>
          ),
          title: 'Achieve Higher Goals',
          subtitle: 'Take control of your progress.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 350,  // Increased width
    height: 350, // Increased height
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});