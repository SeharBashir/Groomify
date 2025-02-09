import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

const MyServices = () => {
  // const navigation = useNavigation();
  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const servicesRef = ref(db, 'services');
      onValue(servicesRef, async (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const serviceArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          const filteredServices = serviceArray.filter(service => service.ownerId === user.uid);

          setServices(filteredServices);
        } else {
          setServices([]);
        }
        setLoading(false);
      });
    }
  }, [user]);

  const renderService = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text style={styles.title}>{item.serviceName}</Text>
      <Text style={styles.price}>{item.price} PKR</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Services</Text>
      {loading ? (
        <ActivityIndicator size='large' color='#ff5733' style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={renderService}
          ListEmptyComponent={<Text style={styles.emptyMessage}>No services added yet.</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: 'white', borderRadius: 8, padding: 15, marginBottom: 20, elevation: 3 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 16, color: '#ff5733' },
  emptyMessage: { textAlign: 'center', marginTop: 20, fontSize: 18, color: '#777' },
});

export default MyServices;
