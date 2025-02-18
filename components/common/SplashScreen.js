import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('OnboardingScreen'); 
  };

  return (
    <View style={styles.container}>
      {/* Top section with logo */}
      <View style={styles.topContainer}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/logo1.jpeg')}
            style={styles.logo}
          />
        </View>
      </View>

      {/* Bottom section with button */}
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>Welcome to GroomifyAI</Text>
        <Text style={styles.subtitle}>
          Personalized grooming and beauty assistant
        </Text>

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
    backgroundColor: '#00665C',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logoWrapper: {
    backgroundColor: '#00665C',
    borderRadius: 50,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    borderRadius: 80,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#00665C',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default SplashScreen;