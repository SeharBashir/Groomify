
// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // // import { db } from '../../firebaseConfig';
// // // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // // import { useNavigation, useRoute } from '@react-navigation/native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // const UserServices = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { salonId, salon } = route.params;
// // //   const [services, setServices] = useState([]);
// // //   const [homeServices, setHomeServices] = useState([]);
// // //   const [salonServices, setSalonServices] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const servicesRef = ref(db, 'services');
// // //     const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

// // //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const servicesData = snapshot.val();
// // //         const servicesArray = Object.keys(servicesData).map(key => ({
// // //           id: key,
// // //           ...servicesData[key],
// // //         }));

// // //         const homeServicesData = servicesArray.filter(service => service.serviceType === 'home');
// // //         const salonServicesData = servicesArray.filter(service => service.serviceType === 'salon');

// // //         setHomeServices(homeServicesData);
// // //         setSalonServices(salonServicesData);
// // //         setServices(servicesArray.filter(service => service.serviceType !== 'home' && service.serviceType !== 'salon')); // Other services

// // //       } else {
// // //         setHomeServices([]);
// // //         setSalonServices([]);
// // //         setServices([]);
// // //       }
// // //       setLoading(false);
// // //     }, error => {
// // //       setError(error.message);
// // //       setLoading(false);
// // //       console.error("Error fetching services:", error);
// // //     });

// // //     return () => unsubscribe();
// // //   }, [salonId]);

// // //   const renderServiceItem = ({ item }) => (
// // //     <View style={styles.card}>
// // //       {item.images && item.images.length > 0 ? (
// // //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //       ) : (
// // //         <View style={styles.imagePlaceholder} />
// // //       )}
// // //       <View style={styles.serviceInfo}>
// // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // //         <Text style={styles.price}>{item.price} PKR</Text>
// // //         <Text style={styles.description}>{item.serviceDescription}</Text>
// // //       </View>
// // //       <TouchableOpacity
// // //         style={styles.bookNowButton}
// // //         onPress={() => navigation.navigate('BookService', { service: item, salon: salon })}
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
// // //       <Text style={styles.header}>Services for {salon ? salon.salonName : 'Salon'}</Text>

// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// // //       ) : (
// // //         <View> {/* Added a wrapping View */}
// // //           {homeServices.length > 0 && ( // Conditionally render Home Services
// // //             <View>
// // //               <Text style={styles.sectionTitle}>Home Services</Text>
// // //               <FlatList
// // //                 data={homeServices}
// // //                 renderItem={renderServiceItem}
// // //                 keyExtractor={item => item.id}
// // //                 ListEmptyComponent={<Text style={styles.emptyMessage}>No home services added yet.</Text>}
// // //               />
// // //             </View>
// // //           )}

// // //           {salonServices.length > 0 && ( // Conditionally render Salon Services
// // //             <View>
// // //               <Text style={styles.sectionTitle}>Salon Services</Text>
// // //               <FlatList
// // //                 data={salonServices}
// // //                 renderItem={renderServiceItem}
// // //                 keyExtractor={item => item.id}
// // //                 ListEmptyComponent={<Text style={styles.emptyMessage}>No salon services added yet.</Text>}
// // //               />
// // //             </View>
// // //           )}

// // //           {services.length > 0 && ( // Conditionally render Other Services
// // //             <View>
// // //               <Text style={styles.sectionTitle}>Other Services</Text>
// // //               <FlatList
// // //                 data={services}
// // //                 renderItem={renderServiceItem}
// // //                 keyExtractor={item => item.id}
// // //                 ListEmptyComponent={<Text style={styles.emptyMessage}>No other services added yet.</Text>}
// // //               />
// // //             </View>
// // //           )}
// // //         </View>
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
// // //   serviceInfo: {
// // //     marginBottom: 10,
// // //   },
// // //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
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
// // //   sectionTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginTop: 20,
// // //     marginBottom: 10,
// // //     color: '#00665C',
// // //   },
// // // });

// // // export default UserServices;

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// // import { db } from '../../firebaseConfig';
// // import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import { Ionicons } from '@expo/vector-icons';

// // const UserServices = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { salonId, salon } = route.params;
// //   const [services, setServices] = useState([]);
// //   const [homeServices, setHomeServices] = useState([]);
// //   const [salonServices, setSalonServices] = useState([]);
// //   const [filteredServices, setFilteredServices] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeFilter, setActiveFilter] = useState('all');

// //   useEffect(() => {
// //     const servicesRef = ref(db, 'services');
// //     const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

// //     const unsubscribe = onValue(servicesQuery, (snapshot) => {
// //       if (snapshot.exists()) {
// //         const servicesData = snapshot.val();
// //         const servicesArray = Object.keys(servicesData).map(key => ({
// //           id: key,
// //           ...servicesData[key],
// //         }));

// //         const homeServicesData = servicesArray.filter(service => service.serviceType === 'Home Salon');
// //         const salonServicesData = servicesArray.filter(service => service.serviceType === 'In Salon');

// //         setHomeServices(homeServicesData);
// //         setSalonServices(salonServicesData);
// //         setServices(servicesArray);
// //         setFilteredServices(servicesArray); // Default to showing all services
// //       } else {
// //         setHomeServices([]);
// //         setSalonServices([]);
// //         setServices([]);
// //         setFilteredServices([]);
// //       }
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, [salonId]);

// //   const filterServices = (type) => {
// //     setActiveFilter(type);
// //     if (type === 'home') {
// //       setFilteredServices(homeServices);
// //     } else if (type === 'salon') {
// //       setFilteredServices(salonServices);
// //     } else {
// //       setFilteredServices(services);
// //     }
// //   };

// //   const renderServiceItem = ({ item }) => (
// //     <View style={styles.card}>
// //       {item.images && item.images.length > 0 ? (
// //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// //       ) : (
// //         <View style={styles.imagePlaceholder} />
// //       )}
// //       <View style={styles.serviceInfo}>
// //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// //         <Text style={styles.price}>{item.price} PKR</Text>
// //         <Text style={styles.description}>{item.serviceDescription}</Text>
// //       </View>
// //       <TouchableOpacity
// //         style={styles.bookNowButton}
// //         onPress={() => navigation.navigate('BookService', { service: item, salon: salon })}
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
// //       <Text style={styles.header}>Services for {salon ? salon.salonName : 'Salon'}</Text>

// //       {/* Filter Buttons */}
// //       <View style={styles.filterContainer}>
// //         <TouchableOpacity
// //           style={[styles.filterButton, activeFilter === 'home' && styles.activeFilter]}
// //           onPress={() => filterServices('home')}
// //         >
// //           <Text style={styles.filterText}>Home Salon</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.filterButton, activeFilter === 'salon' && styles.activeFilter]}
// //           onPress={() => filterServices('salon')}
// //         >
// //           <Text style={styles.filterText}>In Salon</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
// //           onPress={() => filterServices('all')}
// //         >
// //           <Text style={styles.filterText}>All</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
// //       ) : (
// //         <FlatList
// //           data={filteredServices}
// //           renderItem={renderServiceItem}
// //           keyExtractor={item => item.id}
// //           ListEmptyComponent={<Text style={styles.emptyMessage}>No services available.</Text>}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// //   backButton: { marginBottom: 10 },
// //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
// //   filterContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
// //   filterButton: {
// //     padding: 10,
// //     marginHorizontal: 5,
// //     backgroundColor: '#ccc',
// //     borderRadius: 8,
// //   },
// //   activeFilter: { backgroundColor: '#00665C' },
// //   filterText: { color: '#fff', fontWeight: 'bold' },
// //   card: {
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     padding: 15,
// //     marginBottom: 15,
// //     elevation: 3,
// //     borderColor: '#00665C',
// //     borderWidth: '7'
// //   },
// //   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
// //   imagePlaceholder: { width: '100%', height: 180, borderRadius: 10, backgroundColor: '#eee', marginBottom: 10 },
// //   serviceInfo: { marginBottom: 10 },
// //   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
// //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// //   bookNowButton: { backgroundColor: '#00665C', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8, alignItems: 'center' },
// //   bookNowText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
// // });

// // export default UserServices;

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const UserServices = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { salonId, salon } = route.params;
//   const [services, setServices] = useState([]);
//   const [homeServices, setHomeServices] = useState([]);
//   const [salonServices, setSalonServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeFilter, setActiveFilter] = useState('all');

//   useEffect(() => {
//     const servicesRef = ref(db, 'services');
//     const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

//     const unsubscribe = onValue(servicesQuery, (snapshot) => {
//       if (snapshot.exists()) {
//         const servicesData = snapshot.val();
//         const servicesArray = Object.keys(servicesData).map(key => ({
//           id: key,
//           ...servicesData[key],
//         }));

//         const homeServicesData = servicesArray.filter(service => service.serviceType === 'Home Salon');
//         const salonServicesData = servicesArray.filter(service => service.serviceType === 'In Salon');

//         setHomeServices(homeServicesData);
//         setSalonServices(salonServicesData);
//         setServices(servicesArray);
//         setFilteredServices(servicesArray); // Default to showing all services
//       } else {
//         setHomeServices([]);
//         setSalonServices([]);
//         setServices([]);
//         setFilteredServices([]);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [salonId]);

//   const filterServices = (type) => {
//     setActiveFilter(type);
//     if (type === 'home') {
//       setFilteredServices(homeServices);
//     } else if (type === 'salon') {
//       setFilteredServices(salonServices);
//     } else {
//       setFilteredServices(services);
//     }
//   };

//   const renderServiceItem = ({ item }) => (
//     <View style={styles.card}>
//       {item.images && item.images.length > 0 ? (
//         <Image source={{ uri: item.images[0] }} style={styles.image} />
//       ) : (
//         <View style={styles.imagePlaceholder} />
//       )}
//       <View style={styles.serviceInfo}>
//         <Text style={styles.serviceName}>{item.serviceName}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>{item.serviceDescription}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.bookNowButton}
//         onPress={() => navigation.navigate('BookService', { service: item, salon: salon })}
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
//       <Text style={styles.header}>Services for {salon ? salon.salonName : 'Salon'}</Text>

//       {/* Filter Buttons */}
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'home' && styles.activeFilter]}
//           onPress={() => filterServices('home')}
//         >
//           <Text style={styles.filterText}>Home Salon</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'salon' && styles.activeFilter]}
//           onPress={() => filterServices('salon')}
//         >
//           <Text style={styles.filterText}>In Salon</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
//           onPress={() => filterServices('all')}
//         >
//           <Text style={styles.filterText}>All</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={filteredServices}
//           renderItem={renderServiceItem}
//           keyExtractor={item => item.id}
//           ListEmptyComponent={<Text style={styles.emptyMessage}>No services available.</Text>}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
//   backButton: { marginBottom: 10 },
//   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
//   filterContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
//   filterButton: {
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: '#ccc',
//     borderRadius: 8,
//   },
//   activeFilter: { backgroundColor: '#00665C' },
//   filterText: { color: '#fff', fontWeight: 'bold' },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     borderColor: '#00665C',
//     borderWidth: '7'
//   },
//   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
//   imagePlaceholder: { width: '100%', height: 180, borderRadius: 10, backgroundColor: '#eee', marginBottom: 10 },
//   serviceInfo: { marginBottom: 10 },
//   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
//   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
//   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
//   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
//   bookNowButton: { backgroundColor: '#00665C', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8, alignItems: 'center' },
//   bookNowText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
// });

// export default UserServices;
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const UserServices = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { salonId, salon } = route.params;
//   const [services, setServices] = useState([]);
//   const [homeServices, setHomeServices] = useState([]);
//   const [salonServices, setSalonServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeFilter, setActiveFilter] = useState('all');

//   useEffect(() => {
//     const servicesRef = ref(db, 'services');
//     const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

//     const unsubscribe = onValue(servicesQuery, (snapshot) => {
//       if (snapshot.exists()) {
//         const servicesData = snapshot.val();
//         const servicesArray = Object.keys(servicesData).map(key => ({
//           id: key,
//           ...servicesData[key],
//         }));

//         const homeServicesData = servicesArray.filter(service => service.serviceType === 'Home Salon');
//         const salonServicesData = servicesArray.filter(service => service.serviceType === 'In Salon');

//         setHomeServices(homeServicesData);
//         setSalonServices(salonServicesData);
//         setServices(servicesArray);
//         setFilteredServices(servicesArray); // Default to showing all services
//       } else {
//         setHomeServices([]);
//         setSalonServices([]);
//         setServices([]);
//         setFilteredServices([]);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [salonId]);

//   const filterServices = (type) => {
//     setActiveFilter(type);
//     if (type === 'home') {
//       setFilteredServices(homeServices);
//     } else if (type === 'salon') {
//       setFilteredServices(salonServices);
//     } else {
//       setFilteredServices(services);
//     }
//   };

//   const renderServiceItem = ({ item }) => (
//     <View style={styles.card}>
//       {item.images && item.images.length > 0 ? (
//         <Image source={{ uri: item.images[0] }} style={styles.image} />
//       ) : (
//         <View style={styles.imagePlaceholder} />
//       )}
//       <View style={styles.serviceInfo}>
//         <Text style={styles.serviceName}>{item.serviceName}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>{item.serviceDescription}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.bookNowButton}
//         onPress={() => navigation.navigate('BookService', { service: item, salon: salon })}
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
//       <Text style={styles.header}>Services for {salon ? salon.salonName : 'Salon'}</Text>

//       {/* Filter Buttons */}
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'home' && styles.activeFilter]}
//           onPress={() => filterServices('home')}
//         >
//           <Text style={styles.filterText}>Home Salon</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'salon' && styles.activeFilter]}
//           onPress={() => filterServices('salon')}
//         >
//           <Text style={styles.filterText}>In Salon</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
//           onPress={() => filterServices('all')}
//         >
//           <Text style={styles.filterText}>All</Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={filteredServices}
//           renderItem={renderServiceItem}
//           keyExtractor={item => item.id}
//           ListEmptyComponent={<Text style={styles.emptyMessage}>No services available.</Text>}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
//   backButton: { marginBottom: 10 },
//   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
//   filterContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
//   filterButton: {
//     padding: 10,
//     marginHorizontal: 5,
//     backgroundColor: '#ccc',
//     borderRadius: 8,
//   },
//   activeFilter: { backgroundColor: '#00665C' },
//   filterText: { color: '#fff', fontWeight: 'bold' },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     borderColor: '#00665C',
//     borderWidth: 7 // Changed from '7' to 7 (number instead of string)
//   },
//   image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
//   imagePlaceholder: { width: '100%', height: 180, borderRadius: 10, backgroundColor: '#eee', marginBottom: 10 },
//   serviceInfo: { marginBottom: 10 },
//   serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
//   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
//   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
//   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
//   bookNowButton: { backgroundColor: '#00665C', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8, alignItems: 'center' },
//   bookNowText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
// });

// export default UserServices;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const UserServices = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { salonId, salon } = route.params;
  const [services, setServices] = useState([]);
  const [homeServices, setHomeServices] = useState([]);
  const [salonServices, setSalonServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const servicesRef = ref(db, 'services');
    const servicesQuery = query(servicesRef, orderByChild('ownerId'), equalTo(salonId));

    const unsubscribe = onValue(servicesQuery, (snapshot) => {
      if (snapshot.exists()) {
        const servicesData = snapshot.val();
        const servicesArray = Object.keys(servicesData).map(key => ({
          id: key,
          ...servicesData[key],
        }));

        const homeServicesData = servicesArray.filter(service => service.serviceType === 'Home Salon');
        const salonServicesData = servicesArray.filter(service => service.serviceType === 'In Salon');

        setHomeServices(homeServicesData);
        setSalonServices(salonServicesData);
        setServices(servicesArray);
        setFilteredServices(servicesArray); // Default to showing all
      } else {
        setHomeServices([]);
        setSalonServices([]);
        setServices([]);
        setFilteredServices([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [salonId]);

  const filterServices = (type) => {
    setActiveFilter(type);
    if (type === 'home') {
      setFilteredServices(homeServices);
    } else if (type === 'salon') {
      setFilteredServices(salonServices);
    } else {
      setFilteredServices(services);
    }
  };

  const renderServiceItem = ({ item }) => (
    <View style={styles.card}>
      {item.images && item.images.length > 0 ? (
        <Image source={{ uri: item.images[0] }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.serviceName}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
        <Text style={styles.description}>
          {item.serviceDescription ? item.serviceDescription : 'No description available'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.bookNowButton}
        onPress={() =>
          navigation.navigate('BookService', {
            service: item,
            salon: {
              id: salonId,
              salonName: salon?.salonName || '',
              ownerId: salonId,
              salonType: salon?.salonType || '',
            },
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
      <Text style={styles.header}>Services for {salon ? salon.salonName : 'Salon'}</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'home' && styles.activeFilter]}
          onPress={() => filterServices('home')}
        >
          <Text style={styles.filterText}>Home Salon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'salon' && styles.activeFilter]}
          onPress={() => filterServices('salon')}
        >
          <Text style={styles.filterText}>In Salon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
          onPress={() => filterServices('all')}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredServices}
          renderItem={renderServiceItem}
          keyExtractor={item => item.id}
          ListEmptyComponent={<Text style={styles.emptyMessage}>No services available.</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
  backButton: { marginBottom: 10 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#00665C' },
  filterContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  activeFilter: { backgroundColor: '#00665C' },
  filterText: { color: '#fff', fontWeight: 'bold' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    borderColor: '#00665C',
    borderWidth: 7,
  },
  image: { width: '100%', height: 180, borderRadius: 10, resizeMode: 'cover', marginBottom: 10 },
  imagePlaceholder: { width: '100%', height: 180, borderRadius: 10, backgroundColor: '#eee', marginBottom: 10 },
  serviceInfo: { marginBottom: 10 },
  serviceName: { fontSize: 18, fontWeight: 'bold', color: '#00665C' },
  price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
  description: { fontSize: 14, color: '#00665C', marginTop: 8 },
  emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
  bookNowButton: { backgroundColor: '#00665C', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8, alignItems: 'center' },
  bookNowText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default UserServices;
