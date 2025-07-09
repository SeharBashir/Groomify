// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { saveUserAction } from "../../utils/saveUserAction";


// const Haircut = () => {
//   const navigation = useNavigation();
//   const [services, setServices] = useState([]);
//   const [salons, setSalons] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedFilter, setSelectedFilter] = useState('All'); // State for selected filter

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');
//     const servicesRef = ref(db, 'services');

//     // Fetch salons
//     const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const salonsData = snapshot.val();
//         console.log("🏠 Fetched Salons:", salonsData);
//         setSalons(salonsData);
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

//           console.log("💇‍♂️ Fetched Services:", servicesArray);
//           setServices(servicesArray);
//         } else {
//           setServices([]);
//         }
//         setLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setLoading(false);
//         console.error('❌ Error fetching services:', error);
//       }
//     );

//     return () => {
//       unsubscribeSalons();
//       unsubscribeServices();
//     };
//   }, []);

//   // ✅ Correct Filtering for Haircut Services from Male Salons
//   const updatedServices = useMemo(() => {
//     if (services.length === 0 || Object.keys(salons).length === 0) {
//       console.log("⏳ Waiting for Data...");
//       return [];
//     }

//     const filteredServices = services
//       .filter((service) => {
//         if (!service.serviceName || !service.ownerId) return false; // Ensure valid service

//         const salon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);
//         console.log("🔍 Checking Salon for Service:", service.serviceName, "Salon:", salon);

//         // Filter based on selected filter
//         const isHaircutService = service.serviceName.toLowerCase().includes('haircut');
//         const isMaleSalon = salon && salon.salonType === 'Male';

//         if (!isHaircutService || !isMaleSalon) return false; // Only show haircut services from male salons

//         if (selectedFilter === 'All') {
//           return true; // Show all haircut services
//         } else if (selectedFilter === 'Home') {
//           return service.serviceType === 'Home Salon'; // Show only Home Salon services
//         } else if (selectedFilter === 'In Salon') {
//           return service.serviceType === 'In Salon'; // Show only In Salon services
//         }

//         return false;
//       })
//       .map((service) => {
//         const matchedSalon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

//         return {
//           ...service,
//           salonId: matchedSalon ? matchedSalon.id : null,
//           salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
//           ownerId: matchedSalon ? matchedSalon.ownerId : null, // Ensure ownerId is included
//         };
//       });

//     console.log("✅ Final Filtered Haircut Services:", filteredServices);
//     return filteredServices;
//   }, [services, salons, selectedFilter]);

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

//       {/* ✅ Navigate to Booking Page with Service & Salon Info */}
//       <TouchableOpacity
//         style={styles.bookNowButton}
//         onPress={() =>
//           navigation.navigate('BookService', {
//             service: item,
//             salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId }, // Pass ownerId
//           })
//         }
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

//       {/* Filter Buttons */}
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'Home' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('Home')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'Home' && styles.selectedFilterButtonText]}>
//             Home
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'In Salon' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('In Salon')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'In Salon' && styles.selectedFilterButtonText]}>
//             In Salon
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('All')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'All' && styles.selectedFilterButtonText]}>
//             All
//           </Text>
//         </TouchableOpacity>
//       </View>

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
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center', // Center buttons horizontally
//     marginBottom: 20,
//     gap: 10, // Reduced gap between buttons
//   },
//   filterButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#00665C',
//   },
//   selectedFilterButton: {
//     backgroundColor: '#00665C',
//   },
//   filterButtonText: {
//     color: '#00665C',
//     fontWeight: 'bold',
//   },
//   selectedFilterButtonText: {
//     color: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     borderColor: '#00665C',
//     borderWidth: 5
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

// export default Haircut;
// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { getAuth } from "firebase/auth"; // ✅ auth import
// import { saveUserAction } from "../../utils/saveUserAction";

// const Haircut = () => {
//   const navigation = useNavigation();
//   const [services, setServices] = useState([]);
//   const [salons, setSalons] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedFilter, setSelectedFilter] = useState('All');

//   // ✅ Get current user UID
//   const auth = getAuth();
//   const currentUser = auth.currentUser;
//   const uid = currentUser ? currentUser.uid : null;

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');
//     const servicesRef = ref(db, 'services');

//     const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSalons(snapshot.val());
//       }
//     });

//     const unsubscribeServices = onValue(
//       servicesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const servicesData = snapshot.val();
//           const servicesArray = Object.keys(servicesData).map((key) => ({
//             id: key,
//             ...servicesData[key],
//           }));
//           setServices(servicesArray);
//         } else {
//           setServices([]);
//         }
//         setLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setLoading(false);
//         console.error('❌ Error fetching services:', error);
//       }
//     );

//     return () => {
//       unsubscribeSalons();
//       unsubscribeServices();
//     };
//   }, []);

//   const updatedServices = useMemo(() => {
//     if (services.length === 0 || Object.keys(salons).length === 0) {
//       return [];
//     }

//     const filteredServices = services
//       .filter((service) => {
//         if (!service.serviceName || !service.ownerId) return false;
//         const salon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

//         const isHaircutService = service.serviceName.toLowerCase().includes('haircut');
//         const isMaleSalon = salon && salon.salonType === 'Male';

//         if (!isHaircutService || !isMaleSalon) return false;

//         if (selectedFilter === 'All') return true;
//         if (selectedFilter === 'Home') return service.serviceType === 'Home Salon';
//         if (selectedFilter === 'In Salon') return service.serviceType === 'In Salon';

//         return false;
//       })
//       .map((service) => {
//         const matchedSalon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

//         return {
//           ...service,
//           salonId: matchedSalon ? matchedSalon.id : null,
//           salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
//           ownerId: matchedSalon ? matchedSalon.ownerId : null,
//         };
//       });

//     return filteredServices;
//   }, [services, salons, selectedFilter]);

//   const handleBooking = (item) => {
//     if (!item.ownerId) {
//       console.error('❌ Missing owner ID:', item);
//       Alert.alert('Error', 'Owner ID is missing.');
//       return;
//     }
//     if (!uid) {
//       Alert.alert('Error', 'User not logged in.');
//       return;
//     }

//     // ✅ Save user action
//     saveUserAction(
//       uid,
//       item.id,
//       item.serviceName,
//       "Haircut",    // Category
//       "booked",     // Action type
//       10            // Reward points
//     );

//     navigation.navigate('BookService', {
//       service: item,
//       salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId },
//     });
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
//         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>
//           {item.serviceDescription ? item.serviceDescription : 'No description available'}
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.bookNowButton} onPress={() => handleBooking(item)}>
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

//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'Home' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('Home')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'Home' && styles.selectedFilterButtonText]}>
//             Home
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'In Salon' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('In Salon')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'In Salon' && styles.selectedFilterButtonText]}>
//             In Salon
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('All')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'All' && styles.selectedFilterButtonText]}>
//             All
//           </Text>
//         </TouchableOpacity>
//       </View>

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
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     gap: 10,
//   },
//   filterButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#00665C',
//   },
//   selectedFilterButton: {
//     backgroundColor: '#00665C',
//   },
//   filterButtonText: {
//     color: '#00665C',
//     fontWeight: 'bold',
//   },
//   selectedFilterButtonText: {
//     color: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     borderColor: '#00665C',
//     borderWidth: 5,
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

// export default Haircut;
// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import { getAuth } from "firebase/auth";
// import { saveUserAction } from "../../utils/saveUserAction";

// const Haircut = () => {
//   const navigation = useNavigation();
//   const [services, setServices] = useState([]);
//   const [salons, setSalons] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [selectedFilter, setSelectedFilter] = useState('All');

//   const auth = getAuth();
//   const currentUser = auth.currentUser;
//   const uid = currentUser ? currentUser.uid : null;

//   useEffect(() => {
//     const salonsRef = ref(db, 'salons');
//     const servicesRef = ref(db, 'services');

//     const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         setSalons(snapshot.val());
//       }
//     });

//     const unsubscribeServices = onValue(
//       servicesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const servicesData = snapshot.val();
//           const servicesArray = Object.keys(servicesData).map((key) => ({
//             id: key,
//             ...servicesData[key],
//           }));
//           setServices(servicesArray);
//         } else {
//           setServices([]);
//         }
//         setLoading(false);
//       },
//       (error) => {
//         console.error('❌ Error fetching services:', error);
//         setLoading(false);
//       }
//     );

//     return () => {
//       unsubscribeSalons();
//       unsubscribeServices();
//     };
//   }, []);

//   const updatedServices = useMemo(() => {
//     if (services.length === 0 || Object.keys(salons).length === 0) return [];

//     return services
//       .filter((service) => {
//         if (!service.serviceName || !service.ownerId) return false;
//         const salon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

//         const isHaircutService = service.serviceName.toLowerCase().includes('haircut');
//         const isMaleSalon = salon && salon.salonType === 'Male';

//         if (!isHaircutService || !isMaleSalon) return false;

//         if (selectedFilter === 'All') return true;
//         if (selectedFilter === 'Home') return service.serviceType === 'Home Salon';
//         if (selectedFilter === 'In Salon') return service.serviceType === 'In Salon';

//         return false;
//       })
//       .map((service) => {
//         const matchedSalon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

//         return {
//           ...service,
//           salonId: matchedSalon ? matchedSalon.id : null,
//           salonName: matchedSalon ? matchedSalon.salonName : 'Unknown',
//           ownerId: matchedSalon ? matchedSalon.ownerId : null,
//         };
//       });
//   }, [services, salons, selectedFilter]);

//   const handleBooking = (item) => {
//     if (!item.ownerId) {
//       Alert.alert('Error', 'Owner ID is missing.');
//       return;
//     }
//     if (!uid) {
//       Alert.alert('Error', 'User not logged in.');
//       return;
//     }

//     saveUserAction(uid, item.id, item.serviceName, "Haircut", "booked", 10);

//     navigation.navigate('BookService', {
//       service: item,
//       salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId },
//     });
//   };

//    const handleReview = (item) => {
//     navigation.navigate('AddReviewRating', {
//       serviceId: item.id,
//       salonId: item.salonId,
//       ownerId: item.ownerId,
//       serviceName: item.serviceName,
//     });
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
//         <Text style={styles.salonName}>Salon: {item.salonName}</Text>
//         <Text style={styles.price}>{item.price} PKR</Text>
//         <Text style={styles.description}>
//           {item.serviceDescription ? item.serviceDescription : 'No description available'}
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.bookNowButton} onPress={() => handleBooking(item)}>
//         <Text style={styles.bookNowText}>Book Now</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.reviewButton} onPress={() => handleReview(item)}>
//         <Text style={styles.reviewButtonText}>Add Review </Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="#00665C" />
//       </TouchableOpacity>
//       <Text style={styles.header}>Haircut Services</Text>

//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'Home' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('Home')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'Home' && styles.selectedFilterButtonText]}>
//             Home
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'In Salon' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('In Salon')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'In Salon' && styles.selectedFilterButtonText]}>
//             In Salon
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilterButton]}
//           onPress={() => setSelectedFilter('All')}
//         >
//           <Text style={[styles.filterButtonText, selectedFilter === 'All' && styles.selectedFilterButtonText]}>
//             All
//           </Text>
//         </TouchableOpacity>
//       </View>

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
//   filterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     gap: 10,
//   },
//   filterButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#00665C',
//   },
//   selectedFilterButton: {
//     backgroundColor: '#00665C',
//   },
//   filterButtonText: {
//     color: '#00665C',
//     fontWeight: 'bold',
//   },
//   selectedFilterButtonText: {
//     color: '#fff',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     borderColor: '#00665C',
//     borderWidth: 5,
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
//   reviewButton: {
//     backgroundColor: 'orange',
//     borderWidth: 2,
//     borderColor: '#00665C',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   reviewButtonText: {
//     color: '#00665C',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default Haircut;
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { saveUserAction } from "../../utils/saveUserAction";

const Haircut = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  const [salons, setSalons] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser ? currentUser.uid : null;

  useEffect(() => {
    const salonsRef = ref(db, 'salons');
    const servicesRef = ref(db, 'services');

    const unsubscribeSalons = onValue(salonsRef, (snapshot) => {
      if (snapshot.exists()) {
        setSalons(snapshot.val());
      }
    });

    const unsubscribeServices = onValue(
      servicesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const servicesData = snapshot.val();
          const servicesArray = Object.keys(servicesData).map((key) => ({
            id: key,
            ...servicesData[key],
          }));
          setServices(servicesArray);
        } else {
          setServices([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error('❌ Error fetching services:', error);
        setLoading(false);
      }
    );

    return () => {
      unsubscribeSalons();
      unsubscribeServices();
    };
  }, []);

  const updatedServices = useMemo(() => {
    if (services.length === 0 || Object.keys(salons).length === 0) return [];

    return services
      .filter((service) => {
        if (!service.serviceName || !service.ownerId) return false;
        const salon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

        const isHaircutService = service.serviceName.toLowerCase().includes('haircut');
        const isMaleSalon = salon && salon.salonType === 'Male';

        if (!isHaircutService || !isMaleSalon) return false;

        if (selectedFilter === 'All') return true;
        if (selectedFilter === 'Home') return service.serviceType === 'Home Salon';
        if (selectedFilter === 'In Salon') return service.serviceType === 'In Salon';

        return false;
      })
      .map((service) => {
        const matchedSalon = Object.values(salons).find((salon) => salon.ownerId === service.ownerId);

        return {
          ...service,
          salonId: matchedSalon && matchedSalon.id ? matchedSalon.id : "default_salon_id",
          salonName: matchedSalon && matchedSalon.salonName ? matchedSalon.salonName : "Unknown Salon",
          ownerId: matchedSalon && matchedSalon.ownerId ? matchedSalon.ownerId : "default_owner_id",
        };
      });
  }, [services, salons, selectedFilter]);

  const handleBooking = (item) => {
    if (!item.ownerId || !item.salonId) {
      Alert.alert('Error', 'Salon information is incomplete.');
      return;
    }
    if (!uid) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    // Save user action
    saveUserAction(uid, item.id, item.serviceName, "Haircut", "booked", 10);

    // Navigate with proper data
    navigation.navigate('BookService', {
      service: item,
      salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId },
    });
  };

  const handleReview = (item) => {
    if (!item.ownerId || !item.salonId) {
      Alert.alert('Error', 'Salon information is incomplete.');
      return;
    }
    if (!uid) {
      Alert.alert('Error', 'User not logged in.');
      return;
    }

    navigation.navigate('AddReviewRating', {
      serviceId: item.id,
      salonId: item.salonId,
      ownerId: item.ownerId,
      serviceName: item.serviceName,
    });
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
        <Text style={styles.salonName}>Salon: {item.salonName}</Text>
        <Text style={styles.price}>{item.price} PKR</Text>
        <Text style={styles.description}>
          {item.serviceDescription ? item.serviceDescription : 'No description available'}
        </Text>
      </View>

      <TouchableOpacity style={styles.bookNowButton} onPress={() => handleBooking(item)}>
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reviewButton} onPress={() => handleReview(item)}>
        <Text style={styles.reviewButtonText}>Add Review</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#00665C" />
      </TouchableOpacity>
      <Text style={styles.header}>Haircut Services</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'Home' && styles.selectedFilterButton]}
          onPress={() => setSelectedFilter('Home')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'Home' && styles.selectedFilterButtonText]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'In Salon' && styles.selectedFilterButton]}
          onPress={() => setSelectedFilter('In Salon')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'In Salon' && styles.selectedFilterButtonText]}>
            In Salon
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilterButton]}
          onPress={() => setSelectedFilter('All')}
        >
          <Text style={[styles.filterButtonText, selectedFilter === 'All' && styles.selectedFilterButtonText]}>
            All
          </Text>
        </TouchableOpacity>
      </View>

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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00665C',
  },
  selectedFilterButton: {
    backgroundColor: '#00665C',
  },
  filterButtonText: {
    color: '#00665C',
    fontWeight: 'bold',
  },
  selectedFilterButtonText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: '#00665C',
    borderWidth: 5,
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
  reviewButton: {
    backgroundColor: 'orange',
    borderWidth: 2,
    borderColor: '#00665C',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  reviewButtonText: {
    color: '#00665C',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Haircut;
