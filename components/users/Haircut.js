// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // // // import { db } from '../../firebaseConfig';
// // // // // // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // // // // // import { useNavigation } from '@react-navigation/native';

// // // // // // const Haircuts = () => {
// // // // // //   const navigation = useNavigation();
// // // // // //   const [services, setServices] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const servicesRef = ref(db, 'services');
// // // // // //     const servicesQuery = query(servicesRef, orderByChild('category'), equalTo('Haircut'));

// // // // // //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// // // // // //       if (snapshot.exists()) {
// // // // // //         const servicesData = snapshot.val();
// // // // // //         const servicesArray = Object.keys(servicesData).map(key => ({ id: key, ...servicesData[key] }));
// // // // // //         setServices(servicesArray);
// // // // // //       } else {
// // // // // //         setServices([]);
// // // // // //       }
// // // // // //       setLoading(false);
// // // // // //     });

// // // // // //     return () => unsubscribe();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <View style={styles.container}>
// // // // // //       <Text style={styles.header}>Haircut Services</Text>
// // // // // //       {loading ? <ActivityIndicator size="large" color="#00665C" /> :
// // // // // //         <FlatList
// // // // // //           data={services}
// // // // // //           renderItem={({ item }) => (
// // // // // //             <TouchableOpacity style={styles.serviceItem}>
// // // // // //               <Image source={{ uri: item.image }} style={styles.image} />
// // // // // //               <Text style={styles.serviceName}>{item.name}</Text>
// // // // // //               <Text style={styles.price}>{item.price} PKR</Text>
// // // // // //             </TouchableOpacity>
// // // // // //           )}
// // // // // //           keyExtractor={item => item.id}
// // // // // //         />
// // // // // //       }
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' }, serviceItem: { marginBottom: 20, alignItems: 'center' }, image: { width: 100, height: 100 }, serviceName: { fontSize: 18 }, price: { fontSize: 16, color: 'green' } });

// // // // // // export default Haircuts;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // // // import { db } from '../../firebaseConfig';
// // // // // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // // // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // // // import { Ionicons } from '@expo/vector-icons';

// // // // // const Haircuts = () => {
// // // // //   const navigation = useNavigation();
// // // // //   const route = useRoute();
// // // // //   const { serviceName } = route.params || {}; // Get service name safely
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     if (!serviceName) return;

// // // // //     const servicesRef = ref(db, 'services');
// // // // //     const servicesQuery = query(servicesRef, orderByChild('category'), equalTo(serviceName));

// // // // //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// // // // //       if (snapshot.exists()) {
// // // // //         const servicesData = snapshot.val();
// // // // //         const servicesArray = Object.keys(servicesData).map(key => ({
// // // // //           id: key,
// // // // //           ...servicesData[key],
// // // // //         }));
// // // // //         setServices(servicesArray);
// // // // //       } else {
// // // // //         setServices([]);
// // // // //       }
// // // // //       setLoading(false);
// // // // //     }, error => {
// // // // //       setError(error.message);
// // // // //       setLoading(false);
// // // // //       console.error("Error fetching services:", error);
// // // // //     });

// // // // //     return () => unsubscribe();
// // // // //   }, [serviceName]);

// // // // //   const renderServiceItem = ({ item }) => (
// // // // //     <View style={styles.card}>
// // // // //       <Image source={{ uri: item.images[0] }} style={styles.image} />
// // // // //       <View style={styles.serviceInfo}>
// // // // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // // // //         <Text style={styles.price}>{item.price} PKR</Text>
// // // // //         <Text style={styles.description}>{item.serviceDescription}</Text>
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
// // // // //       <Text style={styles.header}>{serviceName} Services</Text>

// // // // //       {loading ? (
// // // // //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// // // // //       ) : services.length > 0 ? (
// // // // //         <FlatList
// // // // //           data={services}
// // // // //           renderItem={renderServiceItem}
// // // // //           keyExtractor={item => item.id}
// // // // //         />
// // // // //       ) : (
// // // // //         <Text style={styles.emptyMessage}>No services available for {serviceName}.</Text>
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
// // // // //   serviceInfo: { marginBottom: 10 },
// // // // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
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
// // // // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // // import { Ionicons } from '@expo/vector-icons';

// // // // const Haircuts = () => {
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const [services, setServices] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const servicesRef = ref(db, 'services');
// // // //     const servicesQuery = query(servicesRef, orderByChild('category'), equalTo('Haircut'));

// // // //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// // // //       if (snapshot.exists()) {
// // // //         const servicesData = snapshot.val();
// // // //         const servicesArray = Object.keys(servicesData).map(key => ({
// // // //           id: key,
// // // //           ...servicesData[key],
// // // //         }));
// // // //         setServices(servicesArray);
// // // //       } else {
// // // //         setServices([]);
// // // //       }
// // // //       setLoading(false);
// // // //     }, error => {
// // // //       setError(error.message);
// // // //       setLoading(false);
// // // //       console.error("Error fetching services:", error);
// // // //     });

// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   const renderServiceItem = ({ item }) => (
// // // //     <View style={styles.card}>
// // // //       <Image source={{ uri: item.images[0] }} style={styles.image} />
// // // //       <View style={styles.serviceInfo}>
// // // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // // //         <Text style={styles.price}>{item.price} PKR</Text>
// // // //         <Text style={styles.description}>{item.serviceDescription}</Text>
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
// // // //           keyExtractor={item => item.id}
// // // //         />
// // // //       ) : (
// // // //         <Text style={styles.emptyMessage}>No services available for Haircut.</Text>
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
// // // //   serviceInfo: { marginBottom: 10 },
// // // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
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
// // // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // const Haircuts = () => {
// // //   const navigation = useNavigation();
// // //   const [services, setServices] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const servicesRef = ref(db, 'services');
// // //     const servicesQuery = query(servicesRef, orderByChild('category'), equalTo('Haircut'));

// // //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const servicesData = snapshot.val();
// // //         const servicesArray = Object.keys(servicesData).map(key => ({
// // //           id: key,
// // //           ...servicesData[key],
// // //         }));
// // //         setServices(servicesArray);
// // //       } else {
// // //         setServices([]);
// // //       }
// // //       setLoading(false);
// // //     }, error => {
// // //       setError(error.message);
// // //       setLoading(false);
// // //       console.error("Error fetching services:", error);
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   const renderServiceItem = ({ item }) => (
// // //     <View style={styles.card}>
// // //       <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //       <View style={styles.serviceInfo}>
// // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // //         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
// // //         <Text style={styles.price}>{item.price} PKR</Text>
// // //         <Text style={styles.description}>{item.serviceDescription}</Text>
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
// // //           keyExtractor={item => item.id}
// // //         />
// // //       ) : (
// // //         <Text style={styles.emptyMessage}>No services available for Haircut.</Text>
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
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // import { db } from '../../firebaseConfig';
// // import { ref, onValue } from 'firebase/database';
// // import { useNavigation } from '@react-navigation/native';
// // import { Ionicons } from '@expo/vector-icons';

// // const Haircuts = () => {
// //   const navigation = useNavigation();
// //   const [services, setServices] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const servicesRef = ref(db, 'services');

// //     const unsubscribe = onValue(servicesRef, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const servicesData = snapshot.val();
// //         const servicesArray = Object.keys(servicesData).map(key => ({
// //           id: key,
// //           ...servicesData[key],
// //         }));

// //         // Filter only Haircut services (Trim space issues)
// //         const haircutServices = servicesArray.filter(service => 
// //           service.serviceName.trim().toLowerCase() === 'haircut'
// //         );

// //         setServices(haircutServices);
// //       } else {
// //         setServices([]);
// //       }
// //       setLoading(false);
// //     }, error => {
// //       setError(error.message);
// //       setLoading(false);
// //       console.error("Error fetching services:", error);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   const renderServiceItem = ({ item }) => (
// //     <View style={styles.card}>
// //       {item.images && item.images.length > 0 ? (
// //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// //       ) : (
// //         <View style={styles.imagePlaceholder} />
// //       )}

// //       <View style={styles.serviceInfo}>
// //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// //         <Text style={styles.salonName}>Salon: {item.salonName ? item.salonName : 'Unknown'}</Text>
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
// //       ) : services.length > 0 ? (
// //         <FlatList
// //           data={services}
// //           renderItem={renderServiceItem}
// //           keyExtractor={item => item.id}
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
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const Haircuts = () => {
//   const navigation = useNavigation();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const servicesRef = ref(db, 'services');

//     const unsubscribe = onValue(
//       servicesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const servicesData = snapshot.val();
//           const servicesArray = Object.keys(servicesData).map((key) => ({
//             id: key,
//             ...servicesData[key],
//           }));

//           // Ensure serviceName exists before calling trim() & filter Haircut services
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

//     return () => unsubscribe();
//   }, []);

//   const renderServiceItem = ({ item }) => (
//     <View style={styles.card}>
//       {item.images && item.images.length > 0 ? (
//         <Image source={{ uri: item.images[0] }} style={styles.image} />
//       ) : (
//         <View style={styles.imagePlaceholder} />
//       )}

//       <View style={styles.serviceInfo}>
//         <Text style={styles.serviceName}>{item.serviceName}</Text>
//         <Text style={styles.salonName}>Salon: {item.salonName ? item.salonName : 'Unknown'}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
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
//       ) : services.length > 0 ? (
//         <FlatList
//           data={services}
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
import React, { useState, useEffect } from 'react';
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

    // Fetch salons first
    onValue(salonsRef, (snapshot) => {
      if (snapshot.exists()) {
        setSalons(snapshot.val());
      }
    });

    // Fetch services and map salon names
    const unsubscribe = onValue(
      servicesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const servicesData = snapshot.val();
          const servicesArray = Object.keys(servicesData).map((key) => ({
            id: key,
            ...servicesData[key],
          }));

          // Filter only haircut services
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

    return () => unsubscribe();
  }, []);

  // Ensure salon names are updated dynamically
  const updatedServices = services.map((service) => ({
    ...service,
    salonName: service.salonId && salons[service.salonId] ? salons[service.salonId].name : 'Unknown',
  }));

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
        <Text style={styles.description}>{item.serviceDescription ? item.serviceDescription : 'No description available'}</Text>
      </View>

      <TouchableOpacity
        style={styles.bookNowButton}
        onPress={() => navigation.navigate('BookService', { service: item })}
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
