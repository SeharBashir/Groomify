

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
// // // // // // // import { db } from '../../firebaseConfig';
// // // // // // // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // // const SalonList = () => {
// // // // // // //   const navigation = useNavigation();
// // // // // // //   const [salons, setSalons] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const salonsRef = ref(db, 'salons');
// // // // // // //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// // // // // // //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// // // // // // //       if (snapshot.exists()) {
// // // // // // //         const salonsData = snapshot.val();
// // // // // // //         const salonsArray = Object.keys(salonsData).map((key) => ({
// // // // // // //           id: key,
// // // // // // //           ...salonsData[key],
// // // // // // //         }));
// // // // // // //         setSalons(salonsArray);
// // // // // // //       } else {
// // // // // // //         setSalons([]);
// // // // // // //       }
// // // // // // //       setLoading(false);
// // // // // // //     }, (error) => {
// // // // // // //       setError(error.message);
// // // // // // //       setLoading(false);
// // // // // // //       console.error("Error fetching salons:", error);
// // // // // // //     });

// // // // // // //     return () => unsubscribe();
// // // // // // //   }, []);

// // // // // // //   const renderSalonItem = ({ item }) => (
// // // // // // //     <TouchableOpacity
// // // // // // //       style={styles.salonItem}
// // // // // // //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })} // Navigate to SalonsScreen
// // // // // // //     >
// // // // // // //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// // // // // // //       <View style={styles.salonInfo}>
// // // // // // //         <Text style={styles.salonName}>{item.salonName}</Text>
// // // // // // //         <Text style={styles.salonAddress}>{item.address}</Text>
// // // // // // //       </View>
// // // // // // //     </TouchableOpacity>
// // // // // // //   );

// // // // // // //   if (loading) {
// // // // // // //     return <Text>Loading salons...</Text>;
// // // // // // //   }

// // // // // // //   if (error) {
// // // // // // //     return <Text>Error: {error}</Text>;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       <Text style={styles.title}>Salon List</Text>
// // // // // // //       <FlatList
// // // // // // //         data={salons}
// // // // // // //         renderItem={renderSalonItem}
// // // // // // //         keyExtractor={(item) => item.id}
// // // // // // //         numColumns={2}
// // // // // // //         columnWrapperStyle={styles.columnWrapper}
// // // // // // //       />
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   // ... (Your existing styles)
  
// // // // // // //       container: {
// // // // // // //         flex: 1,
// // // // // // //         padding: 10,
// // // // // // //         backgroundColor: '#f8f8f8',
// // // // // // //       },
// // // // // // //       salonItem: {
// // // // // // //         flex: 1,
// // // // // // //         margin: 5,
// // // // // // //         padding: 10,
// // // // // // //         borderWidth: 1,
// // // // // // //         borderColor: '#ddd',
// // // // // // //         borderRadius: 8,
// // // // // // //         backgroundColor: 'white',
// // // // // // //         alignItems: 'center',
// // // // // // //       },
// // // // // // //       columnWrapper: {
// // // // // // //         justifyContent: 'space-between',
// // // // // // //       },
// // // // // // //       salonLogo: {
// // // // // // //         width: 100,
// // // // // // //         height: 100,
// // // // // // //         resizeMode: 'cover',
// // // // // // //         borderRadius: 8,
// // // // // // //         marginBottom: 5,
// // // // // // //       },
// // // // // // //       salonInfo: {
// // // // // // //         alignItems: 'center',
// // // // // // //       },
// // // // // // //       salonName: {
// // // // // // //         fontSize: 16,
// // // // // // //         fontWeight: 'bold',
// // // // // // //         marginBottom: 2,
// // // // // // //       },
// // // // // // //       salonAddress: {
// // // // // // //         fontSize: 14,
// // // // // // //         color: 'gray',
// // // // // // //       },
// // // // // // //       title: {
// // // // // // //         fontSize: 24,
// // // // // // //         fontWeight: 'bold',
// // // // // // //         marginBottom: 20,
// // // // // // //         textAlign: 'center',
// // // // // // //         color: '#333',
// // // // // // //       },
// // // // // // // });

// // // // // // // export default SalonList;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // // // import { db } from '../../firebaseConfig';
// // // // // // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // const SalonList = () => {
// // // // // //   const navigation = useNavigation();
// // // // // //   const [salons, setSalons] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const salonsRef = ref(db, 'salons');
// // // // // //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// // // // // //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// // // // // //       if (snapshot.exists()) {
// // // // // //         const salonsData = snapshot.val();
// // // // // //         const salonsArray = Object.keys(salonsData).map((key) => ({
// // // // // //           id: key,
// // // // // //           ...salonsData[key],
// // // // // //         }));
// // // // // //         setSalons(salonsArray);
// // // // // //       } else {
// // // // // //         setSalons([]);
// // // // // //       }
// // // // // //       setLoading(false);
// // // // // //     }, (error) => {
// // // // // //       setError(error.message);
// // // // // //       setLoading(false);
// // // // // //       console.error("Error fetching salons:", error);
// // // // // //     });

// // // // // //     return () => unsubscribe();
// // // // // //   }, []);

// // // // // //   const renderSalonItem = ({ item }) => (
// // // // // //     <TouchableOpacity
// // // // // //       style={styles.salonItem}
// // // // // //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
// // // // // //     >
// // // // // //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// // // // // //       <View style={styles.salonInfo}>
// // // // // //         <Text style={styles.salonName}>{item.salonName}</Text>
// // // // // //         <Text style={styles.salonAddress}>{item.address}</Text>
// // // // // //       </View>
// // // // // //     </TouchableOpacity>
// // // // // //   );

// // // // // //   if (loading) {
// // // // // //     return <ActivityIndicator size="large" color="#00665C" style={styles.loader} />;
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return <Text style={styles.errorText}>Error: {error}</Text>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <Text style={styles.title}>Salon List</Text>
// // // // // //       <FlatList
// // // // // //         data={salons}
// // // // // //         renderItem={renderSalonItem}
// // // // // //         keyExtractor={(item) => item.id}
// // // // // //         numColumns={2}
// // // // // //         columnWrapperStyle={styles.columnWrapper}
// // // // // //       />
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: {
// // // // // //     flex: 1,
// // // // // //     padding: 15,
// // // // // //     backgroundColor: '#fff',
// // // // // //   },
// // // // // //   title: {
// // // // // //     fontSize: 26,
// // // // // //     fontWeight: 'bold',
// // // // // //     marginBottom: 20,
// // // // // //     textAlign: 'center',
// // // // // //     color: '#00665C',
// // // // // //   },
// // // // // //   loader: {
// // // // // //     flex: 1,
// // // // // //     justifyContent: 'center',
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   errorText: {
// // // // // //     fontSize: 16,
// // // // // //     color: 'red',
// // // // // //     textAlign: 'center',
// // // // // //     marginTop: 20,
// // // // // //   },
// // // // // //   columnWrapper: {
// // // // // //     justifyContent: 'space-between',
// // // // // //   },
// // // // // //   salonItem: {
// // // // // //     flex: 1,
// // // // // //     margin: 8,
// // // // // //     padding: 15,
// // // // // //     borderRadius: 12,
// // // // // //     backgroundColor: '#00665C',
// // // // // //     alignItems: 'center',
// // // // // //     shadowColor: '#000',
// // // // // //     shadowOffset: { width: 0, height: 2 },
// // // // // //     shadowOpacity: 0.2,
// // // // // //     shadowRadius: 3,
// // // // // //     elevation: 5,
// // // // // //   },
// // // // // //   salonLogo: {
// // // // // //     width: 110,
// // // // // //     height: 110,
// // // // // //     borderRadius: 10,
// // // // // //     resizeMode: 'cover',
// // // // // //     marginBottom: 10,
// // // // // //   },
// // // // // //   salonInfo: {
// // // // // //     alignItems: 'center',
// // // // // //   },
// // // // // //   salonName: {
// // // // // //     fontSize: 18,
// // // // // //     fontWeight: 'bold',
// // // // // //     color: 'white',
// // // // // //     marginBottom: 4,
// // // // // //   },
// // // // // //   salonAddress: {
// // // // // //     fontSize: 14,
// // // // // //     color: '#D9D9D9',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // // });

// // // // // // export default SalonList;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // // import { db } from '../../firebaseConfig';
// // // // // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // // // // import { useNavigation } from '@react-navigation/native';

// // // // // const SalonList = () => {
// // // // //   const navigation = useNavigation();
// // // // //   const [salons, setSalons] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const salonsRef = ref(db, 'salons');
// // // // //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// // // // //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// // // // //       if (snapshot.exists()) {
// // // // //         const salonsData = snapshot.val();
// // // // //         const salonsArray = Object.keys(salonsData).map((key) => ({
// // // // //           id: key,
// // // // //           ...salonsData[key],
// // // // //         }));
// // // // //         setSalons(salonsArray);
// // // // //       } else {
// // // // //         setSalons([]);
// // // // //       }
// // // // //       setLoading(false);
// // // // //     }, (error) => {
// // // // //       setError(error.message);
// // // // //       setLoading(false);
// // // // //       console.error("Error fetching salons:", error);
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, []);

// // // // //   const renderSalonItem = ({ item }) => (
// // // // //     <TouchableOpacity
// // // // //       style={styles.salonItem}
// // // // //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
// // // // //     >
// // // // //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// // // // //       <View style={styles.salonInfo}>
// // // // //         <Text style={styles.salonName}>{item.salonName}</Text>
// // // // //         <Text style={styles.salonAddress}>{item.address}</Text>
// // // // //       </View>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   if (loading) {
// // // // //     return <ActivityIndicator size="large" color="#00665C" style={styles.loader} />;
// // // // //   }

// // // // //   if (error) {
// // // // //     return <Text style={styles.errorText}>Error: {error}</Text>;
// // // // //   }

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.title}>Salon List</Text>
// // // // //       <FlatList
// // // // //         data={salons}
// // // // //         renderItem={renderSalonItem}
// // // // //         keyExtractor={(item) => item.id}
// // // // //         numColumns={2}
// // // // //         columnWrapperStyle={styles.columnWrapper}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     padding: 15,
// // // // //     backgroundColor: '#FFFFFF',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 26,
// // // // //     fontWeight: 'bold',
// // // // //     marginBottom: 20,
// // // // //     textAlign: 'center',
// // // // //     color: '#00665C',
// // // // //     marginBottom:80,
// // // // //   },
// // // // //   loader: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   errorText: {
// // // // //     fontSize: 16,
// // // // //     color: 'red',
// // // // //     textAlign: 'center',
// // // // //     marginTop: 20,
// // // // //   },
// // // // //   columnWrapper: {
// // // // //     justifyContent: 'space-between',
// // // // //   },
// // // // //   salonItem: {
// // // // //     flex: 1,
// // // // //     margin: 8,
// // // // //     padding: 15,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: '#FFFFFF',
// // // // //     borderWidth: 1,
// // // // //     borderColor: '#00665C',
// // // // //     alignItems: 'center',
// // // // //     shadowColor: '#000',
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 3,
// // // // //     elevation: 3,
// // // // //   },
// // // // //   salonLogo: {
// // // // //     width: 110,
// // // // //     height: 110,
// // // // //     borderRadius: 10,
// // // // //     resizeMode: 'cover',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   salonInfo: {
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   salonName: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#00665C',
// // // // //     marginBottom: 4,
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   salonAddress: {
// // // // //     fontSize: 14,
// // // // //     color: '#333',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // // });

// // // // // export default SalonList;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // import { db } from '../../firebaseConfig';
// // // // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // // // import { useNavigation } from '@react-navigation/native';

// // // // const SalonList = () => {
// // // //   const navigation = useNavigation();
// // // //   const [salons, setSalons] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const salonsRef = ref(db, 'salons');
// // // //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// // // //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// // // //       if (snapshot.exists()) {
// // // //         const salonsData = snapshot.val();
// // // //         const salonsArray = Object.keys(salonsData).map((key) => ({
// // // //           id: key,
// // // //           ...salonsData[key],
// // // //         }));
// // // //         setSalons(salonsArray);
// // // //       } else {
// // // //         setSalons([]);
// // // //       }
// // // //       setLoading(false);
// // // //     }, (error) => {
// // // //       setError(error.message);
// // // //       setLoading(false);
// // // //       console.error("Error fetching salons:", error);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   const renderSalonItem = ({ item }) => (
// // // //     <TouchableOpacity
// // // //       style={styles.salonItem}
// // // //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
// // // //     >
// // // //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// // // //       <View style={styles.salonInfo}>
// // // //         <Text style={styles.salonName}>{item.salonName}</Text>
// // // //         <Text style={styles.salonAddress}>{item.address}</Text>
// // // //       </View>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   if (loading) {
// // // //     return <ActivityIndicator size="large" color="#00665C" style={styles.loader} />;
// // // //   }

// // // //   if (error) {
// // // //     return <Text style={styles.errorText}>Error: {error}</Text>;
// // // //   }

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Salon List</Text>
// // // //       <FlatList
// // // //         data={salons}
// // // //         renderItem={renderSalonItem}
// // // //         keyExtractor={(item) => item.id}
// // // //         numColumns={2}
// // // //         columnWrapperStyle={styles.columnWrapper}
// // // //       />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 15,
// // // //     backgroundColor: '#FFFFFF',
// // // //   },
// // // //   title: {
// // // //     fontSize: 26,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 20,
// // // //     textAlign: 'center',
// // // //     color: '#00665C',
// // // //     marginTop: 30,
// // // //   },
// // // //   loader: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //   },
// // // //   errorText: {
// // // //     fontSize: 16,
// // // //     color: 'red',
// // // //     textAlign: 'center',
// // // //     marginTop: 20,
// // // //   },
// // // //   columnWrapper: {
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   salonItem: {
// // // //     flex: 1,
// // // //     margin: 8,
// // // //     padding: 15,
// // // //     borderRadius: 12,
// // // //     backgroundColor: '#FFFFFF',
// // // //     borderWidth: 1,
// // // //     borderColor: '#00665C',
// // // //     alignItems: 'center',
// // // //     shadowColor: '#000',
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 3,
// // // //     elevation: 3,
// // // //   },
// // // //   salonLogo: {
// // // //     width: 110,
// // // //     height: 110,
// // // //     borderRadius: 10,
// // // //     resizeMode: 'cover',
// // // //     marginBottom: 10,
// // // //   },
// // // //   salonInfo: {
// // // //     alignItems: 'center',
// // // //   },
// // // //   salonName: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#00665C',
// // // //     marginBottom: 4,
// // // //     textAlign: 'center',
// // // //   },
// // // //   salonAddress: {
// // // //     fontSize: 14,
// // // //     color: '#333',
// // // //     textAlign: 'center',
// // // //   },
// // // // });

// // // // export default SalonList;
// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // import { db } from '../../firebaseConfig';
// // // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // // import { useNavigation } from '@react-navigation/native';

// // // const SalonList = () => {
// // //   const navigation = useNavigation();
// // //   const [salons, setSalons] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const salonsRef = ref(db, 'salons');
// // //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// // //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const salonsData = snapshot.val();
// // //         const salonsArray = Object.keys(salonsData).map((key) => ({
// // //           id: key,
// // //           ...salonsData[key],
// // //         }));
// // //         setSalons(salonsArray);
// // //       } else {
// // //         setSalons([]);
// // //       }
// // //       setLoading(false);
// // //     }, (error) => {
// // //       setError(error.message);
// // //       setLoading(false);
// // //       console.error("Error fetching salons:", error);
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   const renderSalonItem = ({ item }) => (
// // //     <TouchableOpacity
// // //       style={styles.salonItem}
// // //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
// // //     >
// // //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// // //       <View style={styles.salonInfo}>
// // //         <Text style={styles.salonName}>{item.salonName}</Text>
// // //         <Text style={styles.salonAddress}>{item.address}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   if (loading) {
// // //     return <ActivityIndicator size="large" color="#00665C" style={styles.loader} />;
// // //   }

// // //   if (error) {
// // //     return <Text style={styles.errorText}>Error: {error}</Text>;
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Salon List</Text>
// // //       <FlatList
// // //         data={salons}
// // //         renderItem={renderSalonItem}
// // //         keyExtractor={(item) => item.id}
// // //         numColumns={2}
// // //         columnWrapperStyle={styles.columnWrapper}
// // //       />
      
// // //       <View style={styles.bottomNavigation}>
// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
// // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Home</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Salon</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
// // //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
// // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Profile</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 15,
// // //     backgroundColor: '#FFFFFF',
// // //   },
// // //   title: {
// // //     fontSize: 28,
// // //     fontWeight: 'bold',
// // //     marginBottom: 30,
// // //     textAlign: 'center',
// // //     color: '#00665C',
// // //   },
// // //   loader: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   errorText: {
// // //     fontSize: 16,
// // //     color: 'red',
// // //     textAlign: 'center',
// // //     marginTop: 20,
// // //   },
// // //   columnWrapper: {
// // //     justifyContent: 'space-between',
// // //   },
// // //   salonItem: {
// // //     flex: 1,
// // //     margin: 8,
// // //     padding: 15,
// // //     borderRadius: 12,
// // //     backgroundColor: '#FFFFFF',
// // //     borderWidth: 1,
// // //     borderColor: '#00665C',
// // //     alignItems: 'center',
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 3,
// // //     elevation: 3,
// // //   },
// // //   salonLogo: {
// // //     width: 110,
// // //     height: 110,
// // //     borderRadius: 10,
// // //     resizeMode: 'cover',
// // //     marginBottom: 10,
// // //   },
// // //   salonInfo: {
// // //     alignItems: 'center',
// // //   },
// // //   salonName: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //     color: '#00665C',
// // //     marginBottom: 4,
// // //     textAlign: 'center',
// // //   },
// // //   salonAddress: {
// // //     fontSize: 14,
// // //     color: '#333',
// // //     textAlign: 'center',
// // //   },
// // //   bottomNavigation: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     paddingVertical: 10,
// // //     backgroundColor: '#00665C',
// // //     borderTopLeftRadius: 15,
// // //     borderTopRightRadius: 15,
// // //   },
// // //   bottomNavItem: {
// // //     alignItems: 'center',
// // //   },
// // //   bottomNavIcon: {
// // //     width: 25,
// // //     height: 25,
// // //     tintColor: '#FFFFFF',
// // //   },
// // //   bottomNavText: {
// // //     fontSize: 12,
// // //     color: '#FFFFFF',
// // //     marginTop: 5,
// // //   },
// // // });

// // // export default SalonList;
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
// // import { db } from '../../firebaseConfig';
// // import { ref, onValue, query, orderByChild } from 'firebase/database';
// // import { useNavigation } from '@react-navigation/native';

// // const SalonList = () => {
// //   const navigation = useNavigation();
// //   const [salons, setSalons] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const salonsRef = ref(db, 'salons');
// //     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

// //     const unsubscribe = onValue(salonsQuery, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const salonsData = snapshot.val();
// //         const salonsArray = Object.keys(salonsData).map((key) => ({
// //           id: key,
// //           ...salonsData[key],
// //         }));
// //         setSalons(salonsArray);
// //       } else {
// //         setSalons([]);
// //       }
// //       setLoading(false);
// //     }, (error) => {
// //       setError(error.message);
// //       setLoading(false);
// //       console.error("Error fetching salons:", error);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const renderSalonItem = ({ item }) => (
// //     <TouchableOpacity
// //       style={styles.salonItem}
// //       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
// //     >
// //       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
// //       <View style={styles.salonInfo}>
// //         <Text style={styles.salonName}>{item.salonName}</Text>
// //         <Text style={styles.salonAddress}>{item.address}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <ScrollView style={styles.scrollView}>
// //         <Text style={styles.title}>Salon List</Text>
// //         {loading ? (
// //           <ActivityIndicator size="large" color="#00665C" style={styles.loader} />
// //         ) : error ? (
// //           <Text style={styles.errorText}>Error: {error}</Text>
// //         ) : (
// //           <FlatList
// //             data={salons}
// //             renderItem={renderSalonItem}
// //             keyExtractor={(item) => item.id}
// //             numColumns={2}
// //             columnWrapperStyle={styles.columnWrapper}
// //           />
// //         )}
// //       </ScrollView>
      
// //       <View style={styles.bottomNavigation}>
// //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
// //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Home</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Salon</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
// //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
// //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Profile</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FFFFFF',
// //   },
// //   scrollView: {
// //     flex: 1,
// //     padding: 15,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //     textAlign: 'center',
// //     color: '#00665C',
// //     marginTop: 30,
// //   },
// //   loader: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   errorText: {
// //     fontSize: 16,
// //     color: 'red',
// //     textAlign: 'center',
// //     marginTop: 20,
// //   },
// //   columnWrapper: {
// //     justifyContent: 'space-between',
// //   },
// //   salonItem: {
// //     flex: 1,
// //     margin: 8,
// //     padding: 15,
// //     borderRadius: 12,
// //     backgroundColor: '#FFFFFF',
// //     borderWidth: 1,
// //     borderColor: '#00665C',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   salonLogo: {
// //     width: 110,
// //     height: 110,
// //     borderRadius: 10,
// //     resizeMode: 'cover',
// //     marginBottom: 10,
// //   },
// //   salonInfo: {
// //     alignItems: 'center',
// //   },
// //   salonName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#00665C',
// //     marginBottom: 4,
// //     textAlign: 'center',
// //   },
// //   salonAddress: {
// //     fontSize: 14,
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   bottomNavigation: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 10,
// //     backgroundColor: '#00665C',
// //     borderTopLeftRadius: 15,
// //     borderTopRightRadius: 15,
// //   },
// //   bottomNavItem: {
// //     alignItems: 'center',
// //   },
// //   bottomNavIcon: {
// //     width: 25,
// //     height: 25,
// //     tintColor: '#FFFFFF',
// //   },
// //   bottomNavText: {
// //     fontSize: 12,
// //     color: '#FFFFFF',
// //     marginTop: 5,
// //   },
// // });

// // export default SalonList;
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue, query, orderByChild } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';

// const SalonList = () => {
//   const navigation = useNavigation();
//   const [salons, setSalons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');
//     const salonsQuery = query(salonsRef, orderByChild('ownerId'));

//     const unsubscribe = onValue(salonsQuery, (snapshot) => {
//       if (snapshot.exists()) {
//         const salonsData = snapshot.val();
//         const salonsArray = Object.keys(salonsData).map((key) => ({
//           id: key,
//           ...salonsData[key],
//         }));
//         setSalons(salonsArray);
//       } else {
//         setSalons([]);
//       }
//       setLoading(false);
//     }, (error) => {
//       setError(error.message);
//       setLoading(false);
//       console.error("Error fetching salons:", error);
//     });

//     return () => unsubscribe();
//   }, []);

//   const renderSalonItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.salonItem}
//       onPress={() => navigation.navigate('SalonsScreen', { salonId: item.id, salon: item })}
//     >
//       <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
//       <View style={styles.salonInfo}>
//         <Text style={styles.salonName}>{item.salonName}</Text>
//         <Text style={styles.salonAddress}>{item.address}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Text style={styles.title}>Salon List</Text>
//         {loading ? (
//           <ActivityIndicator size="large" color="#00665C" style={styles.loader} />
//         ) : error ? (
//           <Text style={styles.errorText}>Error: {error}</Text>
//         ) : (
//           <FlatList
//             data={salons}
//             renderItem={renderSalonItem}
//             keyExtractor={(item) => item.id}
//             numColumns={2}
//             columnWrapperStyle={styles.columnWrapper}
//             contentContainerStyle={styles.listContainer}
//           />
//         )}
//       </ScrollView>
      
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserHomeScreen')}>
//           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
//           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Salon</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
//           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>AI Chatbot</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
//           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContent: {
//     padding: 15,
//     paddingBottom: 80, // extra space for bottom navigation
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#00665C',
//     marginTop: 30,
//     textShadowColor: '#CCCCCC',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   loader: {
//     marginTop: 50,
//   },
//   errorText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//   },
//   salonItem: {
//     flex: 1,
//     margin: 8,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#00665C',
//     alignItems: 'center',
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   salonLogo: {
//     width: 110,
//     height: 110,
//     borderRadius: 10,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   salonInfo: {
//     alignItems: 'center',
//   },
//   salonName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#00665C',
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   salonAddress: {
//     fontSize: 14,
//     color: '#333333',
//     textAlign: 'center',
//   },
//   bottomNavigation: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 12,
//     backgroundColor: '#00665C',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 8,
//   },
//   bottomNavItem: {
//     alignItems: 'center',
//   },
//   bottomNavIcon: {
//     width: 25,
//     height: 25,
//     tintColor: '#FFFFFF',
//     marginBottom: 4,
//   },
//   bottomNavText: {
//     fontSize: 12,
//     color: '#FFFFFF',
//   },
// });

// export default SalonList;


import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { db, auth } from "../../firebaseConfig";
import { ref, get, onValue, query, orderByChild } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Ensure Ionicons is imported correctly
import { FontAwesome } from '@expo/vector-icons';

const SalonList = () => {
  const navigation = useNavigation();
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userGender, setUserGender] = useState("");

  // Fetch logged-in user's gender from Firebase
  useEffect(() => {
    const fetchUserGender = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = ref(db, "users/" + user.uid);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserGender(userData.gender || "Unisex"); // Default to Unisex if gender is missing
          }
        } catch (err) {
          console.error("Error fetching user gender:", err);
        }
      }
    };

    fetchUserGender();
  }, []);

  // Fetch salons based on user gender
  useEffect(() => {
    if (!userGender) return;

    const salonsRef = ref(db, "salons");
    const salonsQuery = query(salonsRef, orderByChild("salonType"));

    const unsubscribe = onValue(
      salonsQuery,
      (snapshot) => {
        if (snapshot.exists()) {
          const salonsData = snapshot.val();
          const filteredSalons = Object.keys(salonsData)
            .map((key) => ({
              id: key,
              ...salonsData[key],
            }))
            .filter((salon) => 
              salon.salonType.toLowerCase() === userGender.toLowerCase() || 
              salon.salonType.toLowerCase() === "unisex"
            ); // Allow gender-matching & Unisex salons

          setSalons(filteredSalons);
        } else {
          setSalons([]);
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching salons:", error);
      }
    );

    return () => unsubscribe();
  }, [userGender]);

  // Handle Navigation Based on Gender
  const handleHomeNavigation = () => {
    if (userGender.toLowerCase() === "female") {
      navigation.navigate("UserHomeScreen"); // Navigate to MaleHomeScreen for male users
    } else {
      navigation.navigate("MaleHomeScreen"); // Navigate to UserHomeScreen for others
    }
  };

  if (loading) return <Text>Loading salons...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Choose your preferred salon</Text>
      </View>

      {/* Salon List */}
      <FlatList
        data={salons}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.salonItem}
            onPress={() => navigation.navigate("SalonsScreen", { salonId: item.id, salon: item })}
          >
            <Image source={{ uri: item.salonLogo }} style={styles.salonLogo} />
            <View style={styles.salonInfo}>
              <Text style={styles.salonName}>{item.salonName}</Text>
              <Text style={styles.salonAddress}>{item.address}</Text>
              <Text style={styles.salonType}>Salon Type: {item.salonType}</Text> 
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        {[
          { title: "Home", image: require("../../assets/images/home.png"), route: "Home" },
          { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
          // { title: "Booking", image: require("../../assets/images/booking.png"), route: "BookingScreen" },
          { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
          { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
        ].map((navItem, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomNavItem}
            onPress={() => {
              if (navItem.route === "Home") {
                handleHomeNavigation(); // Handle Home navigation conditionally
              } else {
                navigation.navigate(navItem.route); // Navigate to other screens
              }
            }}

          >
            <Image source={navItem.image} style={styles.bottomNavIcon} />
            <Text style={styles.bottomNavText}>{navItem.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background
  },
  header: {
    width: "100%", // Full width
    height: 200, // Specific height for the header
    backgroundColor: "#004D40", // Dark green background for header
    borderBottomLeftRadius: 50, // Border radius at bottom left
    borderBottomRightRadius: 50, // Border radius at bottom right
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16, // Space below header
    flexDirection: "row", // Align back button and text horizontally
    paddingHorizontal: 20, // Add padding for the back button
  },
  backButton: {
    position: "absolute", // Position the back button absolutely
    left: 20, // Place it on the left side
    padding: 10, // Add padding for better touch area
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // White text for header
    textAlign: "center", // Center the text
    flex: 1, // Take up remaining space
  },
  salonItem: {
    flexDirection: "row", // Horizontal layout for salon details
    alignItems: "center",
    marginBottom: 16, // Space between salon items
    marginHorizontal: 16, // Add horizontal margin to salonItem
    padding: 12,
    borderWidth: 5, // Border width
    borderColor: "#00665C", // Border color
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  salonLogo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 12, // Space between logo and text
  },
  salonInfo: {
    flex: 1,
  },
  salonName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  salonAddress: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  salonType: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ff6f61", // Highlight color for salon type
  },
  // Bottom Navigation Bar Styles
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#004D40",
    paddingVertical: 10,
  },
  bottomNavItem: { alignItems: "center", flex: 1 },
  bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
  bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
});

export default SalonList;