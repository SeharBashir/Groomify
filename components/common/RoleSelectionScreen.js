
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const RoleSelectionScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground
      source={require('../../assets/saloonn.jpg')} // Replace with the correct path to your image
      style={styles.backgroundImage}
      resizeMode="cover" // Ensures the image covers the entire screen
    >
      <View style={styles.container}>
        {/* Groomify Heading */}
        <Text style={styles.groomifyHeading}>Groomify</Text>

        {/* Choose Your Role Heading */}
        <Text style={styles.heading}>Choose Your Role</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} 
            onPress={() => navigation.navigate('UserSignupScreen')} // Navigate to UserSignupScreen
          >
            <Image source={require('../../assets/user.png')} style={styles.icon} />
            <Text style={styles.buttonText}>User </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('SalonLoginForm')}>
         
            <Image source={require('../../assets/salonicon.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Salon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120, // Moves heading higher
  },
  groomifyHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'PlaywriteIN-VariableFont_wght', // Ensure this matches the font name
    marginBottom: 20,
    color: 'black',
    borderRadius: 50,
    padding: 15,
  },
  heading: {
    fontSize: 28, // Increased font size
    fontWeight: '400', // Increased weight
    marginTop: 150,
    marginBottom: 100,
    color: 'white', // Dark text color for contrast
    backgroundColor: '#00665C',
    borderRadius: 50,
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 50, // Increased padding
    width: 180, // Increased width
    height: 200, // Increased height
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 8,
    borderColor: '#00665C', // Highlight border with dark green color
  },
  icon: {
    width: 90, // Increased icon size
    height: 90,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RoleSelectionScreen;