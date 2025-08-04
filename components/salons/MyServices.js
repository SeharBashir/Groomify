

// // // import React, { useEffect, useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   FlatList,
// // //   Image,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ActivityIndicator,
// // //   Alert,
// // // } from 'react-native';
// // // import { getDatabase, ref, onValue, remove } from 'firebase/database';
// // // import { getAuth } from 'firebase/auth';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { Ionicons } from '@expo/vector-icons';

// // // const MyServices = () => {
// // //   const db = getDatabase();
// // //   const auth = getAuth();
// // //   const user = auth.currentUser;
// // //   const navigation = useNavigation();

// // //   const [homeSalonServices, setHomeSalonServices] = useState([]);
// // //   const [inSalonServices, setInSalonServices] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [selectedCategory, setSelectedCategory] = useState('Home Salon');

// // //   useEffect(() => {
// // //     if (user) {
// // //       const servicesRef = ref(db, 'services');
// // //       onValue(servicesRef, (snapshot) => {
// // //         if (snapshot.exists()) {
// // //           const data = snapshot.val();
// // //           const serviceArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
// // //           const userServices = serviceArray.filter((service) => service.ownerId === user.uid);

// // //           setHomeSalonServices(userServices.filter((service) => service.serviceType === 'Home Salon'));
// // //           setInSalonServices(userServices.filter((service) => service.serviceType === 'In Salon'));
// // //         } else {
// // //           setHomeSalonServices([]);
// // //           setInSalonServices([]);
// // //         }
// // //         setLoading(false);
// // //       });
// // //     }
// // //   }, [user]);

// // //   const renderService = ({ item }) => (
// // //     <TouchableOpacity
// // //       onPress={() => navigation.navigate('ServiceDetails', { service: item })}
// // //     >
// // //       <View style={styles.card}>
// // //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// // //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// // //         <Text style={styles.price}>{item.price} PKR</Text>
// // //         <Text style={styles.description}>{item.serviceDescription}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   const getCurrentServices = () => {
// // //     return selectedCategory === 'Home Salon' ? homeSalonServices : inSalonServices;
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// // //         <Ionicons name="arrow-back" size={24} color="#00665C" />
// // //       </TouchableOpacity>

// // //       <Text style={styles.header}>My Services</Text>

// // //       <View style={styles.categoryButtons}>
// // //         <TouchableOpacity
// // //           style={[
// // //             styles.categoryButton,
// // //             selectedCategory === 'Home Salon' && styles.activeButton,
// // //           ]}
// // //           onPress={() => setSelectedCategory('Home Salon')}
// // //         >
// // //           <Text
// // //             style={[
// // //               styles.categoryText,
// // //               selectedCategory === 'Home Salon' && styles.activeText,
// // //             ]}
// // //           >
// // //             Home Salon
// // //           </Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity
// // //           style={[
// // //             styles.categoryButton,
// // //             selectedCategory === 'In Salon' && styles.activeButton,
// // //           ]}
// // //           onPress={() => setSelectedCategory('In Salon')}
// // //         >
// // //           <Text
// // //             style={[
// // //               styles.categoryText,
// // //               selectedCategory === 'In Salon' && styles.activeText,
// // //             ]}
// // //           >
// // //             In Salon
// // //           </Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {loading ? (
// // //         <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
// // //       ) : (
// // //         <FlatList
// // //           data={getCurrentServices()}
// // //           keyExtractor={(item) => item.id}
// // //           renderItem={renderService}
// // //           ListEmptyComponent={
// // //             <Text style={styles.emptyMessage}>
// // //               No {selectedCategory} services added yet.
// // //             </Text>
// // //           }
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20 },
// // //   backButton: { marginBottom: 10 },
// // //   header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
// // //   categoryButtons: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-around',
// // //     marginBottom: 20,
// // //   },
// // //   categoryButton: {
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 20,
// // //     borderRadius: 25,
// // //     borderWidth: 1,
// // //     borderColor: '#00665C',
// // //     backgroundColor: '#fff',
// // //   },
// // //   activeButton: { backgroundColor: '#00665C' },
// // //   categoryText: { fontSize: 16, color: '#00665C' },
// // //   activeText: { color: '#fff' },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     borderRadius: 12,
// // //     padding: 15,
// // //     marginBottom: 15,
// // //     elevation: 3,
// // //     shadowColor: '#000',
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 5,
// // //     alignItems: 'center',
// // //   },
// // //   image: { width: '100%', height: 180, borderRadius: 10 },
// // //   serviceName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#00665C' },
// // //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// // //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// // //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// // // });

// // // export default MyServices;
// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   Image,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ActivityIndicator,
// // } from 'react-native';
// // import { getDatabase, ref, onValue } from 'firebase/database';
// // import { getAuth } from 'firebase/auth';
// // import { useNavigation } from '@react-navigation/native';
// // import { Ionicons } from '@expo/vector-icons';

// // const MyServices = () => {
// //   const db = getDatabase();
// //   const auth = getAuth();
// //   const user = auth.currentUser;
// //   const navigation = useNavigation();

// //   const [homeSalonServices, setHomeSalonServices] = useState([]);
// //   const [inSalonServices, setInSalonServices] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedCategory, setSelectedCategory] = useState('Home Salon');

// //   useEffect(() => {
// //     if (user) {
// //       const servicesRef = ref(db, 'services');
// //       onValue(servicesRef, (snapshot) => {
// //         if (snapshot.exists()) {
// //           const data = snapshot.val();
// //           const serviceArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
// //           const userServices = serviceArray.filter((service) => service.ownerId === user.uid);

// //           // Filter services based on service type
// //           setHomeSalonServices(
// //             userServices.filter(
// //               (service) =>
// //                 service.serviceType === 'Home Salon' || service.serviceType === 'Both'
// //             )
// //           );
// //           setInSalonServices(
// //             userServices.filter(
// //               (service) =>
// //                 service.serviceType === 'In Salon' || service.serviceType === 'Both'
// //             )
// //           );
// //         } else {
// //           setHomeSalonServices([]);
// //           setInSalonServices([]);
// //         }
// //         setLoading(false);
// //       });
// //     }
// //   }, [user]);

// //   const renderService = ({ item }) => (
// //     <TouchableOpacity
// //       onPress={() => navigation.navigate('ServiceDetails', { service: item })}
// //     >
// //       <View style={styles.card}>
// //         <Image source={{ uri: item.images[0] }} style={styles.image} />
// //         <Text style={styles.serviceName}>{item.serviceName}</Text>
// //         <Text style={styles.price}>{item.price} PKR</Text>
// //         <Text style={styles.description}>{item.serviceDescription}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   const getCurrentServices = () => {
// //     return selectedCategory === 'Home Salon' ? homeSalonServices : inSalonServices;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Ionicons name="arrow-back" size={30} color="#000" />
// //         </TouchableOpacity>
// //         <Text style={styles.header}>My Services</Text>
// //       </View>

// //       <View style={styles.categoryButtons}>
// //         <TouchableOpacity
// //           style={[
// //             styles.categoryButton,
// //             selectedCategory === 'Home Salon' && styles.activeButton,
// //           ]}
// //           onPress={() => setSelectedCategory('Home Salon')}
// //         >
// //           <Text
// //             style={[
// //               styles.categoryText,
// //               selectedCategory === 'Home Salon' && styles.activeText,
// //             ]}
// //           >
// //             Home Salon
// //           </Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={[
// //             styles.categoryButton,
// //             selectedCategory === 'In Salon' && styles.activeButton,
// //           ]}
// //           onPress={() => setSelectedCategory('In Salon')}
// //         >
// //           <Text
// //             style={[
// //               styles.categoryText,
// //               selectedCategory === 'In Salon' && styles.activeText,
// //             ]}
// //           >
// //             In Salon
// //           </Text>
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
// //       ) : (
// //         <FlatList
// //           data={getCurrentServices()}
// //           keyExtractor={(item) => item.id}
// //           renderItem={renderService}
// //           ListEmptyComponent={
// //             <Text style={styles.emptyMessage}>
// //               No {selectedCategory} services added yet.
// //             </Text>
// //           }
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20,marginTop:30},
// //   headerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   backButton: { marginRight: 73},
// //   header: { fontSize: 40, fontWeight: 'bold', color: '#00665C' },
// //   categoryButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     marginBottom: 25,
// //   },
// //   categoryButton: {
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 25,
// //     borderWidth: 1,
// //     borderColor: '#00665C',
// //     backgroundColor: '#fff',
// //   },
// //   activeButton: { backgroundColor: '#00665C' },
// //   categoryText: { fontSize: 16, color: '#00665C' },
// //   activeText: { color: '#fff' },
// //   card: {
// //     backgroundColor: '#fff',
// //     borderRadius: 12,
// //     padding: 15,
// //     marginBottom: 15,
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //     alignItems: 'center',
// //     borderColor:'#00665C',
// //     borderWidth:7
// //   },
// //   image: { width: '100%', height: 180, borderRadius: 10 },
// //   serviceName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#00665C' },
// //   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
// //   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
// //   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// // });

// // export default MyServices;
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import { getDatabase, ref, onValue } from 'firebase/database';
// import { getAuth } from 'firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// const MyServices = () => {
//   const db = getDatabase();
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const navigation = useNavigation();

//   const [homeSalonServices, setHomeSalonServices] = useState([]);
//   const [inSalonServices, setInSalonServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('Home Salon');

//   useEffect(() => {
//     if (user) {
//       const servicesRef = ref(db, 'services');
//       onValue(servicesRef, (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const serviceArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
//           const userServices = serviceArray.filter((service) => service.ownerId === user.uid);

//           // Filter services based on service type
//           setHomeSalonServices(
//             userServices.filter(
//               (service) =>
//                 service.serviceType === 'Home Salon' || service.serviceType === 'Both'
//             )
//           );
//           setInSalonServices(
//             userServices.filter(
//               (service) =>
//                 service.serviceType === 'In Salon' || service.serviceType === 'Both'
//             )
//           );
//         } else {
//           setHomeSalonServices([]);
//           setInSalonServices([]);
//         }
//         setLoading(false);
//       });
//     }
//   }, [user]);

//   const renderService = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('ServiceDetails', { service: item })}
//     >
//       <View style={styles.card}>
//         {/* Safe Check for Image */}
//         {item.images && item.images.length > 0 ? (
//           <Image source={{ uri: item.images[0] }} style={styles.image} />
//         ) : (
//           <Image
//             source={{ uri: 'https://via.placeholder.com/150' }} // Default placeholder image
//             style={styles.image}
//           />
//         )}

//         <Text style={styles.serviceName}>{item.serviceName || 'No Name'}</Text>
//         <Text style={styles.price}>{item.price ? `${item.price} PKR` : 'Price Not Available'}</Text>
//         <Text style={styles.description}>
//           {item.serviceDescription || 'No Description Provided'}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const getCurrentServices = () => {
//     return selectedCategory === 'Home Salon' ? homeSalonServices : inSalonServices;
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.header}>My Services</Text>
//       </View>

//       <View style={styles.categoryButtons}>
//         <TouchableOpacity
//           style={[
//             styles.categoryButton,
//             selectedCategory === 'Home Salon' && styles.activeButton,
//           ]}
//           onPress={() => setSelectedCategory('Home Salon')}
//         >
//           <Text
//             style={[
//               styles.categoryText,
//               selectedCategory === 'Home Salon' && styles.activeText,
//             ]}
//           >
//             Home Salon
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[
//             styles.categoryButton,
//             selectedCategory === 'In Salon' && styles.activeButton,
//           ]}
//           onPress={() => setSelectedCategory('In Salon')}
//         >
//           <Text
//             style={[
//               styles.categoryText,
//               selectedCategory === 'In Salon' && styles.activeText,
//             ]}
//           >
//             In Salon
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={getCurrentServices()}
//           keyExtractor={(item) => item.id}
//           renderItem={renderService}
//           ListEmptyComponent={
//             <Text style={styles.emptyMessage}>
//               No {selectedCategory} services added yet.
//             </Text>
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#EAF4F4', padding: 20, marginTop: 30 },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: { marginRight: 73 },
//   header: { fontSize: 40, fontWeight: 'bold', color: '#00665C' },
//   categoryButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 25,
//   },
//   categoryButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: '#00665C',
//     backgroundColor: '#fff',
//   },
//   activeButton: { backgroundColor: '#00665C' },
//   categoryText: { fontSize: 16, color: '#00665C' },
//   activeText: { color: '#fff' },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     alignItems: 'center',
//     borderColor: '#00665C',
//     borderWidth: 7,
//   },
//   image: { width: '100%', height: 180, borderRadius: 10 },
//   serviceName: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#00665C' },
//   price: { fontSize: 16, color: '#ff5733', marginTop: 5 },
//   description: { fontSize: 14, color: '#00665C', marginTop: 8 },
//   emptyMessage: { textAlign: 'center', marginVertical: 20, fontSize: 16, color: '#777' },
// });

// export default MyServices;


import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MyServices = () => {
  const db = getDatabase();
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const [homeSalonServices, setHomeSalonServices] = useState([]);
  const [inSalonServices, setInSalonServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Home Salon');

  useEffect(() => {
    if (userId) {
      const servicesRef = ref(db, 'services');
      onValue(servicesRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const serviceArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
          const userServices = serviceArray.filter((service) => service.ownerId === userId);

          setHomeSalonServices(
            userServices.filter(
              (service) =>
                service.serviceType === 'Home Salon' || service.serviceType === 'Both'
            )
          );
          setInSalonServices(
            userServices.filter(
              (service) =>
                service.serviceType === 'In Salon' || service.serviceType === 'Both'
            )
          );
        } else {
          setHomeSalonServices([]);
          setInSalonServices([]);
        }
        setLoading(false);
      });
    }
  }, [userId]);

  const renderService = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ServiceDetails', { service: item })}>
      <View style={styles.card}>
        {item.images && item.images.length > 0 ? (
          <Image source={{ uri: item.images[0] }} style={styles.image} />
        ) : (
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.image}
          />
        )}
        <Text style={styles.serviceName}>{item.serviceName || 'No Name'}</Text>
        <Text style={styles.price}>{item.price ? `${item.price} PKR` : 'No Price'}</Text>
        <Text style={styles.description}>{item.serviceDescription || 'No Description'}</Text>
      </View>
    </TouchableOpacity>
  );

  const getCurrentServices = () => {
    return selectedCategory === 'Home Salon' ? homeSalonServices : inSalonServices;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>My Services</Text>
      </View>

      <View style={styles.categoryButtons}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Home Salon' && styles.activeButton]}
          onPress={() => setSelectedCategory('Home Salon')}
        >
          <Text style={[styles.categoryText, selectedCategory === 'Home Salon' && styles.activeText]}>
            Home Salon
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'In Salon' && styles.activeButton]}
          onPress={() => setSelectedCategory('In Salon')}
        >
          <Text style={[styles.categoryText, selectedCategory === 'In Salon' && styles.activeText]}>
            In Salon
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={getCurrentServices()}
          keyExtractor={(item) => item.id}
          renderItem={renderService}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No {selectedCategory} services added yet.
            </Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4F4',
    padding: 20,
    marginTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 73,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00665C',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#00665C',
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: '#00665C',
  },
  categoryText: {
    fontSize: 16,
    color: '#00665C',
  },
  activeText: {
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
    alignItems: 'center',
    borderColor: '#00665C',
    borderWidth: 7,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00665C',
  },
  price: {
    fontSize: 16,
    color: '#ff5733',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#00665C',
    marginTop: 8,
  },
  emptyMessage: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#777',
  },
});

export default MyServices;
