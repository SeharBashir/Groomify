// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const Facial = () => {
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

//           // ✅ Filter Facial Services
//           const facialServices = servicesArray.filter(
//             (service) =>
//               service.serviceName &&
//               service.serviceName.trim().toLowerCase().includes('facial')
//           );

//           setServices(facialServices);
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
//         salonId: matchedSalon ? matchedSalon.id : null,
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

//       {/* ✅ Updated Navigation with Salon Info */}
//       <TouchableOpacity
//         style={styles.bookNowButton}
//         onPress={() =>
//           navigation.navigate('BookService', {
//             service: item,
//             salon: { id: item.salonId, salonName: item.salonName }, // Pass salon info
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
//       <Text style={styles.header}>Facial Services</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
//       ) : updatedServices.length > 0 ? (
//         <FlatList
//           data={updatedServices}
//           renderItem={renderServiceItem}
//           keyExtractor={(item) => item.id}
//         />
//       ) : (
//         <Text style={styles.emptyMessage}>No Facial services available.</Text>
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

// export default Facial;
// import React, { useState, useEffect, useMemo } from 'react';
// import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue } from 'firebase/database';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const Facial = () => {
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

//           const facialServices = servicesArray.filter(
//             (service) =>
//               service.serviceName &&
//               service.serviceName.trim().toLowerCase().includes('facial')
//           );

//           setServices(facialServices);
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

//   const updatedServices = useMemo(() => {
//     return services.map((service) => {
//       const matchedSalon = Object.entries(salons).find(
//         ([salonId, salon]) => salon.ownerId === service.ownerId
//       );

//       return {
//         ...service,
//         ownerId: service.ownerId || (matchedSalon ? matchedSalon[1].ownerId : null),
//         salonId: matchedSalon ? matchedSalon[0] : null,
//         salonName: matchedSalon ? matchedSalon[1].salonName : 'Unknown',
//       };
//     });
//   }, [services, salons]);

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
//         onPress={() => {
//           console.log('Navigating to BookService with:', item);
//           if (!item.ownerId) {
//             console.error('❌ Missing owner ID:', item);
//             Alert.alert('Error', 'Owner ID is missing.');
//             return;
//           }
//           navigation.navigate('BookService', {
//             service: { ...item, ownerId: item.ownerId },
//             salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId },
//           });
//         }}
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
//       <Text style={styles.header}>Facial Services</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
//       ) : updatedServices.length > 0 ? (
//         <FlatList
//           data={updatedServices}
//           renderItem={renderServiceItem}
//           keyExtractor={(item) => item.id}
//         />
//       ) : (
//         <Text style={styles.emptyMessage}>No Facial services available.</Text>
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

// export default Facial;
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FemaleFacial = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);
  const [salons, setSalons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch salons
  useEffect(() => {
    const salonsRef = ref(db, 'salons');
    const unsubscribeSalons = onValue(
      salonsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setSalons(snapshot.val());
        } else {
          setSalons({});
        }
      },
      (error) => {
        console.error('Error fetching salons:', error);
        setError(error.message);
      }
    );

    return () => unsubscribeSalons();
  }, []);

  // Fetch services and filter female facials
  useEffect(() => {
    const servicesRef = ref(db, 'services');
    const unsubscribeServices = onValue(
      servicesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const servicesData = snapshot.val();
          const servicesArray = Object.keys(servicesData).map((key) => ({
            id: key,
            ...servicesData[key],
          }));

          // Filter female facial services with exact match
          const femaleFacialServices = servicesArray.filter((service) => {
            // Check if serviceName exists and is exactly "facial"
            if (!service.serviceName || service.serviceName.trim().toLowerCase() !== 'facial') {
              return false;
            }

            // Match with salon and check if it's a female salon
            const matchedSalon = Object.values(salons).find(
              (salon) => salon.ownerId === service.ownerId
            );

            return matchedSalon && matchedSalon.salonType === 'Female';
          });

          setServices(femaleFacialServices);
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

    return () => unsubscribeServices();
  }, [salons]);

  const updatedServices = useMemo(() => {
    return services.map((service) => {
      const matchedSalon = Object.entries(salons).find(
        ([salonId, salon]) => salon.ownerId === service.ownerId
      );

      return {
        ...service,
        ownerId: service.ownerId || (matchedSalon ? matchedSalon[1].ownerId : null),
        salonId: matchedSalon ? matchedSalon[0] : null,
        salonName: matchedSalon ? matchedSalon[1].salonName : 'Unknown',
      };
    });
  }, [services, salons]);

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

      <TouchableOpacity
        style={styles.bookNowButton}
        onPress={() => {
          console.log('Navigating to BookService with:', item);
          if (!item.ownerId) {
            console.error('❌ Missing owner ID:', item);
            Alert.alert('Error', 'Owner ID is missing.');
            return;
          }
          navigation.navigate('BookService', {
            service: { ...item, ownerId: item.ownerId },
            salon: { id: item.salonId, salonName: item.salonName, ownerId: item.ownerId },
          });
        }}
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
      <Text style={styles.header}>Female Facial Services</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={styles.errorMessage}>Error: {error}</Text>
      ) : updatedServices.length > 0 ? (
        <FlatList
          data={updatedServices}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyMessage}>No Female Facial services available.</Text>
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
  errorMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#ff0000' },
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

export default FemaleFacial;