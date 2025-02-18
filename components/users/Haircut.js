
// // // // // // export default Haircuts;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // // import { db } from '../../firebaseConfig';
// // // // // import { ref, onValue } from 'firebase/database';
// // // // // import { useNavigation } from '@react-navigation/native';
// // // // // import { Ionicons } from '@expo/vector-icons';

// // // // // const Haircuts = () => {
// // // // //   const navigation = useNavigation();
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [salons, setSalons] = useState({});
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const salonsRef = ref(db, 'salons');
// // // // //     const servicesRef = ref(db, 'services');

// // // // //     // Fetch salons first
// // // // //     onValue(salonsRef, (snapshot) => {
// // // // //       if (snapshot.exists()) {
// // // // //         setSalons(snapshot.val());
// // // // //       }
// // // // //     });

// // // // //     // Fetch services and map salon names
// // // // //     const unsubscribe = onValue(
// // // // //       servicesRef,
// // // // //       (snapshot) => {
// // // // //         if (snapshot.exists()) {
// // // // //           const servicesData = snapshot.val();
// // // // //           const servicesArray = Object.keys(servicesData).map((key) => ({
// // // // //             id: key,
// // // // //             ...servicesData[key],
// // // // //           }));

// // // // //           // Filter only haircut services
// // // // //           const haircutServices = servicesArray.filter(
// // // // //             (service) =>
// // // // //               service.serviceName &&
// // // // //               service.serviceName.trim().toLowerCase() === 'haircut'
// // // // //           );

// // // // //           setServices(haircutServices);
// // // // //         } else {
// // // // //           setServices([]);
// // // // //         }
// // // // //         setLoading(false);
// // // // //       },
// // // // //       (error) => {
// // // // //         setError(error.message);
// // // // //         setLoading(false);
// // // // //         console.error('Error fetching services:', error);
// // // // //       }
// // // // //     );

// // // // //     return () => unsubscribe();
// // // // //   }, []);

// // // // //   // Ensure salon names are updated dynamically
// // // // //   const updatedServices = services.map((service) => ({
// // // // //     ...service,
// // // // //     salonName: service.salonId && salons[service.salonId] ? salons[service.salonId].name : 'Unknown',
// // // // //   }));

// // // // //   const renderServiceItem = ({ item }) => (
// // // // //     <View style={styles.card}>
// // // // //       {item.images && item.images.length > 0 ? (
// // // // //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// // // // //       ) : (
// // // // //         <View style={styles.imagePlaceholder} />
// // // // //       )}

// // // // //       <View style={styles.serviceInfo}>
// // // // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // // // //         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
// // // // //         <Text style={styles.price}>{item.price} PKR</Text>
// // // // //         <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
// // // // //       </View>

// // // // //       <TouchableOpacity
// // // // //         style={styles.bookNowButton}
// // // // //         onPress={() => navigation.navigate('BookService', { service: item })}
// // // // //       >
// // // // //         <Text style={styles.bookNowText}>Book Now</Text>
// // // // //       </TouchableOpacity>
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // // //         <Ionicons name="arrow-back" size={24} color="#00665C" />
// // // // //       </TouchableOpacity>
// // // // //       <Text style={styles.header}>Haircut Services</Text>

// // // // //       {loading ? (
// // // // //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// // // // //       ) : updatedServices.length > 0 ? (
// // // // //         <FlatList
// // // // //           data={updatedServices}
// // // // //           renderItem={renderServiceItem}
// // // // //           keyExtractor={(item) => item.id}
// // // // //         />
// // // // //       ) : (
// // // // //         <Text style={styles.emptyMessage}>No Haircut services available.</Text>
// // // // //       )}
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// // // // //   backButton: { marginBottom: 10 },
// // // // //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
// // // // //   card: {
// // // // //     backgroundColor: '#fff',
// // // // //     borderRadius: 12,
// // // // //     padding: 15,
// // // // //     marginBottom: 15,
// // // // //     elevation: 3,
// // // // //     shadowColor: '#000',
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 5,
// // // // //   },
// // // // //   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
// // // // //   imagePlaceholder: {
// // // // //     width: '100%',
// // // // //     height: 180,
// // // // //     borderRadius: 10,
// // // // //     backgroundColor: '#eee',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   serviceInfo: { marginBottom: 10 },
// // // // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
// // // // //   salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
// // // // //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// // // // //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// // // // //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// // // // //   bookNowButton: {
// // // // //     backgroundColor: '#00665C',
// // // // //     paddingVertical: 10,
// // // // //     paddingHorizontal: 15,
// // // // //     borderRadius: 8,
// // // // //     alignItems: 'center',
// // // // //   },
// // // // //   bookNowText: {
// // // // //     color: 'white',
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: 16,
// // // // //   },
// // // // // });

// // // // // export default Haircuts;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // import { db } from '../../firebaseConfig';
// // // // import { ref, onValue } from 'firebase/database';
// // // // import { useNavigation } from '@react-navigation/native';
// // // // import { Ionicons } from '@expo/vector-icons';

// // // // const Haircuts = () => {
// // // //   const navigation = useNavigation();
// // // //   const [services, setServices] = useState([]);
// // // //   const [salons, setSalons] = useState({});
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const salonsRef = ref(db, 'salons');
// // // //     const servicesRef = ref(db, 'services');

// // // //     // Fetch salons data
// // // //     onValue(salonsRef, (snapshot) => {
// // // //       if (snapshot.exists()) {
// // // //         const salonsData = snapshot.val();
// // // //         setSalons(salonsData);
// // // //         console.log("✅ Fetched Salons:", salonsData);
// // // //       } else {
// // // //         console.log("❌ No salons found.");
// // // //       }
// // // //     });

// // // //     // Fetch services data
// // // //     const unsubscribe = onValue(
// // // //       servicesRef,
// // // //       (snapshot) => {
// // // //         if (snapshot.exists()) {
// // // //           const servicesData = snapshot.val();
// // // //           let servicesArray = Object.keys(servicesData).map((key) => ({
// // // //             id: key,
// // // //             ...servicesData[key],
// // // //           }));

// // // //           // Filter haircut services
// // // //           servicesArray = servicesArray.filter(
// // // //             (service) =>
// // // //               service.serviceName &&
// // // //               service.serviceName.trim().toLowerCase() === 'haircut'
// // // //           );

// // // //           console.log("✅ Haircut Services Before Mapping:", servicesArray);

// // // //           setServices(servicesArray);
// // // //         } else {
// // // //           setServices([]);
// // // //         }
// // // //         setLoading(false);
// // // //       },
// // // //       (error) => {
// // // //         setError(error.message);
// // // //         setLoading(false);
// // // //         console.error('❌ Error fetching services:', error);
// // // //       }
// // // //     );

// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   // **Fix: Salon name mapping inside useEffect**
// // // //   useEffect(() => {
// // // //     if (services.length > 0 && Object.keys(salons).length > 0) {
// // // //       const updatedServices = services.map((service) => {
// // // //         const matchedSalon = Object.entries(salons).find(
// // // //           ([key, salon]) => salon.ownerId === service.ownerId
// // // //         );

// // // //         console.log("🔄 Mapping Owner ID:", service.ownerId);
// // // //         console.log("🎯 Matched Salon:", matchedSalon);

// // // //         return {
// // // //           ...service,
// // // //           salonName: matchedSalon ? matchedSalon[1].salonName : 'Unknown',
// // // //         };
// // // //       });

// // // //       console.log("✅ Updated Services With Salon Name:", updatedServices);
// // // //       setServices(updatedServices);
// // // //     }
// // // //   }, [salons, services]);

// // // //   const renderServiceItem = ({ item }) => (
// // // //     <View style={styles.card}>
// // // //       {item.images && item.images.length > 0 ? (
// // // //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// // // //       ) : (
// // // //         <View style={styles.imagePlaceholder} />
// // // //       )}

// // // //       <View style={styles.serviceInfo}>
// // // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // // //         <Text style={styles.salonName}>Salon: {item.salonName ? item.salonName : 'No Salon Found'}</Text>
// // // //         <Text style={styles.price}>{item.price} PKR</Text>
// // // //         <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
// // // //       </View>

// // // //       <TouchableOpacity
// // // //         style={styles.bookNowButton}
// // // //         onPress={() => navigation.navigate('BookService', { service: item })}
// // // //       >
// // // //         <Text style={styles.bookNowText}>Book Now</Text>
// // // //       </TouchableOpacity>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // // //         <Ionicons name="arrow-back" size={24} color="#00665C" />
// // // //       </TouchableOpacity>
// // // //       <Text style={styles.header}>Haircut Services</Text>

// // // //       {loading ? (
// // // //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// // // //       ) : services.length > 0 ? (
// // // //         <FlatList
// // // //           data={services}
// // // //           renderItem={renderServiceItem}
// // // //           keyExtractor={(item) => item.id}
// // // //         />
// // // //       ) : (
// // // //         <Text style={styles.emptyMessage}>No Haircut services available.</Text>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// // // //   backButton: { marginBottom: 10 },
// // // //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
// // // //   card: {
// // // //     backgroundColor: '#fff',
// // // //     borderRadius: 12,
// // // //     padding: 15,
// // // //     marginBottom: 15,
// // // //     elevation: 3,
// // // //     shadowColor: '#000',
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 5,
// // // //   },
// // // //   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
// // // //   imagePlaceholder: {
// // // //     width: '100%',
// // // //     height: 180,
// // // //     borderRadius: 10,
// // // //     backgroundColor: '#eee',
// // // //     marginBottom: 10,
// // // //   },
// // // //   serviceInfo: { marginBottom: 10 },
// // // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
// // // //   salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
// // // //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// // // //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// // // //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// // // //   bookNowButton: {
// // // //     backgroundColor: '#00665C',
// // // //     paddingVertical: 10,
// // // //     paddingHorizontal: 15,
// // // //     borderRadius: 8,
// // // //     alignItems: 'center',
// // // //   },
// // // //   bookNowText: {
// // // //     color: 'white',
// // // //     fontWeight: 'bold',
// // // //     fontSize: 16,
// // // //   },
// // // // });

// // // // export default Haircuts;
// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // import { db } from '../../firebaseConfig';
// // // import { ref, onValue } from 'firebase/database';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // const Haircuts = () => {
// // //   const navigation = useNavigation();
// // //   const [services, setServices] = useState([]);
// // //   const [salons, setSalons] = useState({});
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const salonsRef = ref(db, 'salons');
// // //     const servicesRef = ref(db, 'services');

// // //     // 🔹 Fetch salons first
// // //     onValue(salonsRef, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         setSalons(snapshot.val());
// // //       }
// // //     });

// // //     // 🔹 Fetch services
// // //     const unsubscribe = onValue(
// // //       servicesRef,
// // //       (snapshot) => {
// // //         if (snapshot.exists()) {
// // //           const servicesData = snapshot.val();
// // //           const servicesArray = Object.keys(servicesData).map((key) => ({
// // //             id: key,
// // //             ...servicesData[key],
// // //           }));

// // //           // ✅ Filter only Haircut Services
// // //           const haircutServices = servicesArray.filter(
// // //             (service) =>
// // //               service.serviceName &&
// // //               service.serviceName.trim().toLowerCase() === 'haircut'
// // //           );

// // //           setServices(haircutServices);
// // //         } else {
// // //           setServices([]);
// // //         }
// // //         setLoading(false);
// // //       },
// // //       (error) => {
// // //         setError(error.message);
// // //         setLoading(false);
// // //         console.error('Error fetching services:', error);
// // //       }
// // //     );

// // //     return () => unsubscribe();
// // //   }, []);

// // //   // ✅ Ensure salon names are updated dynamically
// // //   useEffect(() => {
// // //     if (services.length > 0 && Object.keys(salons).length > 0) {
// // //       const updatedServices = services.map((service) => {
// // //         const matchedSalon = Object.values(salons).find(
// // //           (salon) => salon.ownerId === service.ownerId
// // //         );

// // //         return {
// // //           ...service,
// // //           salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
// // //         };
// // //       });

// // //       // ✅ Prevent infinite loop
// // //       const isSame = JSON.stringify(services) === JSON.stringify(updatedServices);
// // //       if (!isSame) {
// // //         console.log("✅ Updating Services to Prevent Infinite Loop");
// // //         setServices(updatedServices);
// // //       }
// // //     }
// // //   }, [salons]); // ✅ Dependency only on salons to avoid infinite loop

// // //   const renderServiceItem = ({ item }) => (
// // //     <View style={styles.card}>
// // //       {item.images && item.images.length > 0 ? (
// // //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //       ) : (
// // //         <View style={styles.imagePlaceholder} />
// // //       )}

// // //       <View style={styles.serviceInfo}>
// // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // //         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
// // //         <Text style={styles.price}>{item.price} PKR</Text>
// // //         <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
// // //       </View>

// // //       <TouchableOpacity
// // //         style={styles.bookNowButton}
// // //         onPress={() => navigation.navigate('BookService', { service: item })}
// // //       >
// // //         <Text style={styles.bookNowText}>Book Now</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // //         <Ionicons name="arrow-back" size={24} color="#00665C" />
// // //       </TouchableOpacity>
// // //       <Text style={styles.header}>Haircut Services</Text>

// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// // //       ) : services.length > 0 ? (
// // //         <FlatList
// // //           data={services}
// // //           renderItem={renderServiceItem}
// // //           keyExtractor={(item) => item.id}
// // //         />
// // //       ) : (
// // //         <Text style={styles.emptyMessage}>No Haircut services available.</Text>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// // //   backButton: { marginBottom: 10 },
// // //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: 12,
// // //     padding: 15,
// // //     marginBottom: 15,
// // //     elevation: 3,
// // //     shadowColor: '#000',
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 5,
// // //   },
// // //   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
// // //   imagePlaceholder: {
// // //     width: '100%',
// // //     height: 180,
// // //     borderRadius: 10,
// // //     backgroundColor: '#eee',
// // //     marginBottom: 10,
// // //   },
// // //   serviceInfo: { marginBottom: 10 },
// // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
// // //   salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
// // //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// // //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// // //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// // //   bookNowButton: {
// // //     backgroundColor: '#00665C',
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 15,
// // //     borderRadius: 8,
// // //     alignItems: 'center',
// // //   },
// // //   bookNowText: {
// // //     color: 'white',
// // //     fontWeight: 'bold',
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default Haircuts;
// // import React, { useState, useEffect, useMemo } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // import { db } from '../../firebaseConfig';
// // import { ref, onValue } from 'firebase/database';
// // import { useNavigation } from '@react-navigation/native';
// // import { Ionicons } from '@expo/vector-icons';

// // const Haircuts = () => {
// //   const navigation = useNavigation();
// //   const [services, setServices] = useState([]);
// //   const [salons, setSalons] = useState({});
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const salonsRef = ref(db, 'salons');
// //     const servicesRef = ref(db, 'services');

// //     // Fetch salons
// //     const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         setSalons(snapshot.val());
// //       }
// //     });

// //     // Fetch services
// //     const unsubscribeServices = onValue(
// //       servicesRef,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const servicesData = snapshot.val();
// //           const servicesArray = Object.keys(servicesData).map((key) => ({
// //             id: key,
// //             ...servicesData[key],
// //           }));

// //           // ✅ Filter Haircut Services
// //           const haircutServices = servicesArray.filter(
// //             (service) =>
// //               service.serviceName &&
// //               service.serviceName.trim().toLowerCase() === 'haircut'
// //           );

// //           setServices(haircutServices);
// //         } else {
// //           setServices([]);
// //         }
// //         setLoading(false);
// //       },
// //       (error) => {
// //         setError(error.message);
// //         setLoading(false);
// //         console.error('Error fetching services:', error);
// //       }
// //     );

// //     return () => {
// //       unsubscribeSalons();
// //       unsubscribeServices();
// //     };
// //   }, []);

// //   // ✅ Compute updated services dynamically instead of setting state
// //   const updatedServices = useMemo(() => {
// //     if (services.length === 0 || Object.keys(salons).length === 0) {
// //       return services;
// //     }

// //     return services.map((service) => {
// //       const matchedSalon = Object.values(salons).find(
// //         (salon) => salon.ownerId === service.ownerId
// //       );

// //       return {
// //         ...service,
// //         salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
// //       };
// //     });
// //   }, [services, salons]); // ✅ Dependencies include both services and salons

// //   const renderServiceItem = ({ item }) => (
// //     <View style={styles.card}>
// //       {item.images && item.images.length > 0 ? (
// //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// //       ) : (
// //         <View style={styles.imagePlaceholder} />
// //       )}

// //       <View style={styles.serviceInfo}>
// //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// //         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
// //         <Text style={styles.price}>{item.price} PKR</Text>
// //         <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
// //       </View>

// //       <TouchableOpacity
// //         style={styles.bookNowButton}
// //         onPress={() => navigation.navigate('BookService', { service: item })}
// //       >
// //         <Text style={styles.bookNowText}>Book Now</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //         <Ionicons name="arrow-back" size={24} color="#00665C" />
// //       </TouchableOpacity>
// //       <Text style={styles.header}>Haircut Services</Text>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// //       ) : updatedServices.length > 0 ? (
// //         <FlatList
// //           data={updatedServices}
// //           renderItem={renderServiceItem}
// //           keyExtractor={(item) => item.id}
// //         />
// //       ) : (
// //         <Text style={styles.emptyMessage}>No Haircut services available.</Text>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// //   backButton: { marginBottom: 10 },
// //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
// //   card: {
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     padding: 15,
// //     marginBottom: 15,
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //   },
// //   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
// //   imagePlaceholder: {
// //     width: '100%',
// //     height: 180,
// //     borderRadius: 10,
// //     backgroundColor: '#eee',
// //     marginBottom: 10,
// //   },
// //   serviceInfo: { marginBottom: 10 },
// //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
// //   salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
// //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// //   bookNowButton: {
// //     backgroundColor: '#00665C',
// //     paddingVertical: 10,
// //     paddingHorizontal: 15,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   bookNowText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //   },
// // });

// // export default Haircuts;
// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const Haircuts = () => {
//   const navigation = useNavigation();
//   const [services, setServices] = useState([]);
//   const [salons, setSalons] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');
//     const servicesRef = ref(db, 'services');

//     // Fetch salons
//     const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSalons(snapshot.val());
//       }
//     });

//     // Fetch services
//     const unsubscribeServices = onValue(
//       servicesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const servicesData = snapshot.val();
//           const servicesArray = Object.keys(servicesData).map((key) => ({
//             id: key,
//             ...servicesData[key],
//           }));

//           // ✅ Filter Haircut Services
//           const haircutServices = servicesArray.filter(
//             (service) =>
//               service.serviceName &&
//               service.serviceName.trim().toLowerCase() === 'haircut'
//           );

//           setServices(haircutServices);
//         } else {
//           setServices([]);
//         }
//         setLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setLoading(false);
//         console.error('Error fetching services:', error);
//       }
//     );

//     return () => {
//       unsubscribeSalons();
//       unsubscribeServices();
//     };
//   }, []);

//   // ✅ Compute updated services dynamically instead of setting state
//   const updatedServices = useMemo(() => {
//     if (services.length === 0 || Object.keys(salons).length === 0) {
//       return services;
//     }

//     return services.map((service) => {
//       const matchedSalon = Object.values(salons).find(
//         (salon) => salon.ownerId === service.ownerId
//       );

//       return {
//         ...service,
//         salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
//       };
//     });
//   }, [services, salons]); // ✅ Dependencies include both services and salons

//   const renderServiceItem = ({ item }) => (
//     <View style={styles.card}>
//       {item.images && item.images.length > 0 ? (
//         <Image source={{ uri: item.images[0] }} style={styles.image} />
//       ) : (
//         <View style={styles.imagePlaceholder} />
//       )}

//       <View style={styles.serviceInfo}>
//         <Text style={styles.serviceName}>{item.serviceName}</Text>
//         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>
//           {item.serviceDescription ? item.serviceDescription : 'No description available'}
//         </Text>
//       </View>

//       <TouchableOpacity
//         style={styles.bookNowButton}
//         onPress={() => navigation.navigate('BookService', { service: item })}
//       >
//         <Text style={styles.bookNowText}>Book Now</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="#00665C" />
//       </TouchableOpacity>
//       <Text style={styles.header}>Haircut Services</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
//       ) : updatedServices.length > 0 ? (
//         <FlatList
//           data={updatedServices}
//           renderItem={renderServiceItem}
//           keyExtractor={(item) => item.id}
//         />
//       ) : (
//         <Text style={styles.emptyMessage}>No Haircut services available.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
//   backButton: { marginBottom: 10 },
//   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
//   imagePlaceholder: {
//     width: '100%',
//     height: 180,
//     borderRadius: 10,
//     backgroundColor: '#eee',
//     marginBottom: 10,
//   },
//   serviceInfo: { marginBottom: 10 },
//   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
//   salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
//   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
//   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
//   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
//   bookNowButton: {
//     backgroundColor: '#00665C',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   bookNowText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default Haircuts;
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Haircuts = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  const [salons, setSalons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const salonsRef = ref(db, 'salons');
    const servicesRef = ref(db, 'services');

    // Fetch salons
    const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
      if (snapshot.exists()) {
        setSalons(snapshot.val());
      }
    });

    // Fetch services
    const unsubscribeServices = onValue(
      servicesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const servicesData = snapshot.val();
          const servicesArray = Object.keys(servicesData).map((key) => ({
            id: key,
            ...servicesData[key],
          }));

          // ✅ Filter Haircut Services
          const haircutServices = servicesArray.filter(
            (service) =>
              service.serviceName &&
              service.serviceName.trim().toLowerCase() === 'haircut'
          );

          setServices(haircutServices);
        } else {
          setServices([]);
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching services:', error);
      }
    );

    return () => {
      unsubscribeSalons();
      unsubscribeServices();
    };
  }, []);

  // ✅ Compute updated services dynamically instead of setting state
  const updatedServices = useMemo(() => {
    if (services.length === 0 || Object.keys(salons).length === 0) {
      return services;
    }

    return services.map((service) => {
      const matchedSalon = Object.values(salons).find(
        (salon) => salon.ownerId === service.ownerId
      );

      return {
        ...service,
        salonId: matchedSalon ? matchedSalon.id : null,
        salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
      };
    });
  }, [services, salons]); // ✅ Dependencies include both services and salons

  const renderServiceItem = ({ item }) => (
    <View style={styles.card}>
      {item.images && item.images.length > 0 ? (
        <Image source={{ uri: item.images[0] }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.salonName}>Salon: {item.salonName}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
        <Text style={styles.description}>
          {item.serviceDescription ? item.serviceDescription : 'No description available'}
        </Text>
      </View>

      {/* ✅ Updated Navigation with Salon Info */}
      <TouchableOpacity
        style={styles.bookNowButton}
        onPress={() =>
          navigation.navigate('BookService', {
            service: item,
            salon: { id: item.salonId, salonName: item.salonName }, // Pass salon info
          })
        }
      >
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#00665C" />
      </TouchableOpacity>
      <Text style={styles.header}>Haircut Services</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
      ) : updatedServices.length > 0 ? (
        <FlatList
          data={updatedServices}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyMessage}>No Haircut services available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
  backButton: { marginBottom: 10 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
  imagePlaceholder: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  serviceInfo: { marginBottom: 10 },
  serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
  salonName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
  price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
  description: { fontSize: 14, color: '#00665C', marginTop: 8 },
  emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
  bookNowButton: {
    backgroundColor: '#00665C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Haircuts;
