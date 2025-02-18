

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue, query, orderByChild } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

const SalonList = () => {
  const navigation = useNavigation();
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const salonsRef = ref(db, 'salons');
    const salonsQuery = query(salonsRef, orderByChild('ownerId'));

    const unsubscribe = onValue(salonsQuery, (snapshot) => {
      if (snapshot.exists()) {
        const salonsData = snapshot.val();
        const salonsArray = Object.keys(salonsData).map((key) => ({
          id: key,
          ...salonsData[key],
        }));
        setSalons(salonsArray);
      } else {
        setSalons([]);
      }
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching salons:", error);
    });

    return () => unsubscribe();
  }, []);

  const renderSalonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.salonItem}
      onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })} // Navigate to SalonsScreen
    >
      <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
      <View style={styles.salonInfo}>
        <Text style={styles.salonName}>{item.salonName}</Text>
        <Text style={styles.salonAddress}>{item.address}</Text>
      </View>
      
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading salons...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon List</Text>
      <FlatList
        data={salons}
        renderItem={renderSalonItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (Your existing styles)
  
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
      },
      salonItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      columnWrapper: {
        justifyContent: 'space-between',
      },
      salonLogo: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 5,
      },
      salonInfo: {
        alignItems: 'center',
      },
      salonName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
      },
      salonAddress: {
        fontSize: 14,
        color: 'gray',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
      },
});

export default SalonList;