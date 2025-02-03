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
      rid: 1,
      name: 'Shiza Salon',
      location: 'Garden Town, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/glammakeup.jpg'),
    },
    {
      id: 2,
      name: 'Aneela Beauty Salon',
      location: 'House no. 533, DC Colony, Chenab Block',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/nailpolish.jpg'),
    },
    {
      id: 3,
      name: 'Paragon Salon',
      location: 'Satellite Town, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/mattemakeup.jpg'),
    },
    {
      id: 4,
      name: 'Shades Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/hydrating.jpg'),
    },
    {
      id: 5,
      name: 'Ghahna Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/bridal.jpg'),
    },
    {
      id: 4,
      name: 'Style Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/facewax.jpg'),
    },
    {
      id: 5,
      name: 'EyeLid Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/haircuts.jpg'),
    },
    {
      id: 6,
      name: 'Duplex Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/nailextention.jpg'),
    },
    {
      id: 7,
      name: 'Asthetic Beauty Salon',
      location: 'Civil Lines, Gujranwala',
      services: ['Hair', 'Facial'],
      image: require('./assets/images/legwax.jpg'),
    },
  ]);

  const handleSalonPress = (salon) => {
    navigation.navigate('SalonDetails', { salon });
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingTop:20,
    paddingBottom:10,
  },
  salonCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Android shadow
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center', // Vertically center
    padding: 10, // Add padding inside the card
  },
  salonImage: {
    width: 80, // Adjust image width
    height: 80, // Adjust image height
    borderRadius: 40, // Make image circular
    marginRight: 10,  // Space between image and details
  },
  salonDetails: {
    flex: 1,
  },
  salonName: {
    fontSize: 16, // Slightly smaller font size
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
});

export default SalonList;