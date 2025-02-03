import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDatabase, ref, get } from 'firebase/database';
import { db } from '../../firebaseConfig';

const Tab = createBottomTabNavigator();

const SalonHomeScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [salonInfo, setSalonInfo] = useState({});
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchSalonData = async () => {
      const salonRef = ref(db, `salons/${userId}`);
      const snapshot = await get(salonRef);
      if (snapshot.exists()) {
        setSalonInfo(snapshot.val());
      }
    };
    fetchSalonData();
  }, [userId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Services..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Header with Salon Logo & Name */}
      <View style={styles.header}>
        {salonInfo.salonLogo && (
          <Image source={{ uri: salonInfo.salonLogo }} style={styles.logo} />
        )}
        <Text style={styles.salonName}>{salonInfo.salonName || 'Salon Name'}</Text>
      </View>

      {/* Service Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AddServices')}>
          <Icon name="plus-circle" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Add Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MyServices')}>
          <Icon name="content-cut" size={40} color="#2196F3" />
          <Text style={styles.cardText}>My Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Appointments')}>
          <Icon name="calendar-check" size={40} color="#FF9800" />
          <Text style={styles.cardText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profile')}>
          <Icon name="account" size={40} color="#9C27B0" />
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MyServicesScreen = () => (
  <View style={styles.screenContainer}><Text>My Services</Text></View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}><Text>Profile</Text></View>
);

const SalonTabNavigator = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home',
            'My Services': 'content-cut',
            Profile: 'account',
          };
          return <Icon name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={SalonHomeScreen} initialParams={route.params} />
      <Tab.Screen name="My Services" component={MyServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export { SalonHomeScreen };
export default SalonTabNavigator;

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: 20 },
  searchBar: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  header: { alignItems: 'center', marginBottom: 20 },
  salonName: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  logo: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#4CAF50' },
  optionsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  screenContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
