
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDatabase, ref, get } from 'firebase/database';
import { db } from '../../firebaseConfig';
import MyServices from './MyServices';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SalonHomeScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [salonInfo, setSalonInfo] = useState({});

  // useEffect(() => {
  //   const fetchSalonData = async () => {
  //     const salonRef = ref(db, `salons/${userId}`);
  //     const snapshot = await get(salonRef);
  //     if (snapshot.exists()) {
  //       setSalonInfo(snapshot.val());
  //     }
  //   };
  //   fetchSalonData();
  // }, [userId]);
  useEffect(() => {
    if (!userId) {
      console.error("Error: userId is undefined. Ensure it is passed in navigation.");
      return;
    }
  
    const fetchSalonData = async () => {
      try {
        const salonRef = ref(db, `salons/${userId}`);
        const snapshot = await get(salonRef);
        if (snapshot.exists()) {
          setSalonInfo(snapshot.val());
        } else {
          console.warn("Salon data not found for userId:", userId);
        }
      } catch (error) {
        console.error("Error fetching salon data:", error);
      }
    };
  
    fetchSalonData();
  }, [userId]);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          <Icon name="plus-circle" size={40} color="#FFFFFF" />
          <Text style={styles.cardText}>Add Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MyServices')}>
          <Icon name="content-cut" size={40} color="#FFFFFF" />
          <Text style={styles.cardText}>My Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AppointmentsScreen')}>
          <Icon name="calendar-check" size={40} color="#FFFFFF" />
          <Text style={styles.cardText}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profile')}>
          <Icon name="account" size={40} color="#FFFFFF" />
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Feedback')}>
    <Icon name="message-text" size={40} color="#FFFFFF" />
    <Text style={styles.cardText}>Feedback</Text>
  </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => <Icon name="logout" color={color} size={size} />}
        onPress={() => {
          props.navigation.navigate('SalonLoginForm');
          Alert.alert('Logged Out', 'You have been logged out successfully.');
        }}
      />
    </DrawerContentScrollView>
  );
};

const SalonTabNavigator = ({ route }) => (
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
      tabBarActiveTintColor: '#00665C',
      tabBarInactiveTintColor: 'black',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={SalonHomeScreen} initialParams={route.params} />
    <Tab.Screen name="My Services" component={MyServices} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const AppDrawer = ({ route }) => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerActiveTintColor: '#00665C',
      drawerInactiveTintColor: '#333',
    }}
  >
    <Drawer.Screen name="Home" component={SalonTabNavigator} initialParams={route.params} />
  </Drawer.Navigator>
);

export default AppDrawer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
  header: { alignItems: 'center', marginBottom: 20 },
  salonName: { fontSize: 40, fontWeight: 'bold', marginTop: 10 ,color:"#00665C"},
  logo: { width: 180, height: 180, borderRadius: 100, borderWidth: 10, borderColor: '#00665C' },
  optionsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' },
  card: {
    width: '48%',
    backgroundColor: '#00665C',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    
  },
  cardText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginTop: 10 },
  screenContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
