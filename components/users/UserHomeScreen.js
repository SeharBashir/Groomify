// // // // import React, { useState } from 'react';
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
// // // // import { useNavigation } from '@react-navigation/native';

// // // // const { width } = Dimensions.get('window');

// // // // const HomeScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const [searchQuery, setSearchQuery] = useState('');

// // // //   const services = [
// // // //     { name: 'Haircut', image: require('../../assets/images/haircut.png') },
// // // //     { name: 'Nails', image: require('../../assets/images/nails.png') },
// // // //     { name: 'Facial', image: require('../../assets/images/facial.png') },
// // // //     { name: 'Coloring', image: require('../../assets/images/haircolor.png') },
// // // //     { name: 'Spa', image: require('../../assets/images/spa.png') },
// // // //     { name: 'Waxing', image: require('../../assets/images/waxing.png') },
// // // //     { name: 'Makeup', image: require('../../assets/images/makeup.png') },
// // // //     { name: 'Massage', image: require('../../assets/images/massage.png') },
// // // //   ];

// // // //   const filteredServices = services.filter(service =>
// // // //     service.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // //         {/* Header */}
// // // //         <View style={styles.header}>
// // // //           <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// // // //           <Text style={styles.headerText}>Female Dashboard</Text>
// // // //           <TouchableOpacity>
// // // //             <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
// // // //           </TouchableOpacity>
// // // //         </View>

// // // //         {/* Search Bar */}
// // // //         <TextInput
// // // //           style={styles.searchBar}
// // // //           placeholder="Search services..."
// // // //           placeholderTextColor="#ccc"
// // // //           value={searchQuery}
// // // //           onChangeText={setSearchQuery}
// // // //         />

// // // //         {/* Services */}
// // // //         <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// // // //         <View style={styles.serviceOptionsContainer}>
// // // //           {filteredServices.map((service, index) => (
// // // //             <TouchableOpacity key={index} style={styles.serviceOption}>
// // // //               <Image source={service.image} style={styles.serviceIcon} />
// // // //               <Text style={styles.serviceOptionText}>{service.name}</Text>
// // // //             </TouchableOpacity>
// // // //           ))}
// // // //         </View>
// // // //       </ScrollView>

// // // //       {/* Bottom Navigation */}
// // // //       <View style={styles.bottomNavigation}>
// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>Home</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// // // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>Salon</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>Booking</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
// // // //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
// // // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>Profile</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //   },
// // // //   scrollContainer: {
// // // //     paddingBottom: 100,
// // // //   },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'center',
// // // //     paddingHorizontal: 20,
// // // //     marginTop: 40,
// // // //   },
// // // //   headerText: {
// // // //     fontSize: 20,
// // // //     fontWeight: 'bold',
// // // //     color: '#00665C',
// // // //   },
// // // //   logo: {
// // // //     width: 100,
// // // //     height: 30,
// // // //     resizeMode: 'contain',
// // // //   },
// // // //   searchIcon: {
// // // //     width: 24,
// // // //     height: 24,
// // // //     tintColor: 'gray',
// // // //   },
// // // //   searchBar: {
// // // //     height: 40,
// // // //     borderColor: '#00665C',
// // // //     borderWidth: 1,
// // // //     borderRadius: 10,
// // // //     marginHorizontal: 20,
// // // //     paddingLeft: 10,
// // // //     marginTop: 10,
// // // //     color: '#333',
// // // //   },
// // // //   whatDoYouWantText: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     color: '#00665C',
// // // //     marginTop: 20,
// // // //     marginHorizontal: 20,
// // // //   },
// // // //   serviceOptionsContainer: {
// // // //     flexDirection: 'row',
// // // //     flexWrap: 'wrap',
// // // //     justifyContent: 'space-around',
// // // //     marginHorizontal: 10,
// // // //     marginTop: 10,
// // // //   },
// // // //   serviceOption: {
// // // //     width: '45%',
// // // //     alignItems: 'center',
// // // //     padding: 15,
// // // //     marginBottom: 10,
// // // //     borderRadius: 10,
// // // //     backgroundColor: '#f5f5f5',
// // // //   },
// // // //   serviceIcon: {
// // // //     width: 50,
// // // //     height: 50,
// // // //     marginBottom: 5,
// // // //   },
// // // //   serviceOptionText: {
// // // //     fontSize: 14,
// // // //     textAlign: 'center',
// // // //     color: '#00665C',
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   bottomNavigation: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-around',
// // // //     alignItems: 'center',
// // // //     position: 'absolute',
// // // //     bottom: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     backgroundColor: '#fff',
// // // //     padding: 10,
// // // //     borderTopWidth: 2,
// // // //     borderTopColor: '#00665C',
// // // //   },
// // // //   bottomNavItem: {
// // // //     alignItems: 'center',
// // // //     flex: 1,
// // // //     paddingVertical: 8,
// // // //   },
// // // //   bottomNavIcon: {
// // // //     width: 28,
// // // //     height: 28,
// // // //   },
// // // //   bottomNavText: {
// // // //     fontSize: 12,
// // // //     fontWeight: 'bold',
// // // //     color: '#00665C',
// // // //   },
// // // // });

// // // // export default HomeScreen;
// // // import React, { useState } from 'react';
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
// // // import { useNavigation } from '@react-navigation/native';

// // // const { width } = Dimensions.get('window');

// // // const HomeScreen = () => {
// // //   const navigation = useNavigation();
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   const services = [
// // //     { name: 'Haircut', image: require('../../assets/images/haircut.png'), screen: 'Haircuts' },
// // //     { name: 'Nails', image: require('../../assets/images/nails.png') },
// // //     { name: 'Facial', image: require('../../assets/images/facial.png') },
// // //     { name: 'Coloring', image: require('../../assets/images/haircolor.png') },
// // //     { name: 'Spa', image: require('../../assets/images/spa.png') },
// // //     { name: 'Waxing', image: require('../../assets/images/waxing.png') },
// // //     { name: 'Makeup', image: require('../../assets/images/makeup.png') },
// // //     { name: 'Massage', image: require('../../assets/images/massage.png') },
// // //   ];

// // //   const filteredServices = services.filter(service =>
// // //     service.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // //         {/* Header */}
// // //         <View style={styles.header}>
// // //           <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// // //           <Text style={styles.headerText}>Female Dashboard</Text>
// // //           <TouchableOpacity>
// // //             <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* Search Bar */}
// // //         <TextInput
// // //           style={styles.searchBar}
// // //           placeholder="Search services..."
// // //           placeholderTextColor="#ccc"
// // //           value={searchQuery}
// // //           onChangeText={setSearchQuery}
// // //         />

// // //         {/* Services */}
// // //         <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// // //         <View style={styles.serviceOptionsContainer}>
// // //           {filteredServices.map((service, index) => (
// // //             <TouchableOpacity
// // //               key={index}
// // //               style={styles.serviceOption}
// // //               onPress={() => {
// // //                 if (service.screen) {
// // //                   navigation.navigate(service.screen);
// // //                 }
// // //               }}
// // //             >
// // //               <Image source={service.image} style={styles.serviceIcon} />
// // //               <Text style={styles.serviceOptionText}>{service.name}</Text>
// // //             </TouchableOpacity>
// // //           ))}
// // //         </View>
// // //       </ScrollView>

// // //       {/* Bottom Navigation */}
// // //       <View style={styles.bottomNavigation}>
// // //         <TouchableOpacity style={styles.bottomNavItem}>
// // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Home</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Salon</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.bottomNavItem}>
// // //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Booking</Text>
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
// // //   container: { flex: 1, backgroundColor: '#fff' },
// // //   scrollContainer: { paddingBottom: 100 },
// // //   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 },
// // //   headerText: { fontSize: 20, fontWeight: 'bold', color: '#00665C' },
// // //   logo: { width: 100, height: 30, resizeMode: 'contain' },
// // //   searchIcon: { width: 24, height: 24, tintColor: 'gray' },
// // //   searchBar: { height: 40, borderColor: '#00665C', borderWidth: 1, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, marginTop: 10, color: '#333' },
// // //   whatDoYouWantText: { fontSize: 18, fontWeight: 'bold', color: '#00665C', marginTop: 20, marginHorizontal: 20 },
// // //   serviceOptionsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginHorizontal: 10, marginTop: 10 },
// // //   serviceOption: { width: '45%', alignItems: 'center', padding: 15, marginBottom: 10, borderRadius: 10, backgroundColor: '#f5f5f5' },
// // //   serviceIcon: { width: 50, height: 50, marginBottom: 5 },
// // //   serviceOptionText: { fontSize: 14, textAlign: 'center', color: '#00665C', fontWeight: 'bold' },
// // //   bottomNavigation: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', padding: 10, borderTopWidth: 2, borderTopColor: '#00665C' },
// // //   bottomNavItem: { alignItems: 'center', flex: 1, paddingVertical: 8 },
// // //   bottomNavIcon: { width: 28, height: 28 },
// // //   bottomNavText: { fontSize: 12, fontWeight: 'bold', color: '#00665C' },
// // // });

// // // export default HomeScreen;
// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// // const { width } = Dimensions.get('window');

// // const HomeScreen = () => {
// //   const navigation = useNavigation();
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const services = [
// //     { name: 'Haircut', image: require('../../assets/images/haircut.png'), screen: 'Haircut' },
// //     { name: 'Nails', image: require('../../assets/images/nails.png') },
// //     { name: 'Facial', image: require('../../assets/images/facial.png') },
// //     { name: 'Coloring', image: require('../../assets/images/haircolor.png') },
// //     { name: 'Spa', image: require('../../assets/images/spa.png') },
// //     { name: 'Waxing', image: require('../../assets/images/waxing.png') },
// //     { name: 'Makeup', image: require('../../assets/images/makeup.png') },
// //     { name: 'Massage', image: require('../../assets/images/massage.png') },
// //   ];

// //   const filteredServices = services.filter(service =>
// //     service.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// //         <Text style={styles.headerText}>Female Dashboard</Text>
// //         <TouchableOpacity>
// //           <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
// //         </TouchableOpacity>
// //       </View>

// //       {/* Search Bar */}
// //       <TextInput
// //         style={styles.searchBar}
// //         placeholder="Search services..."
// //         placeholderTextColor="#ccc"
// //         value={searchQuery}
// //         onChangeText={setSearchQuery}
// //       />

// //       {/* Services */}
// //       <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// //       <View style={styles.serviceOptionsContainer}>
// //         {filteredServices.map((service, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={styles.serviceOption}
// //             onPress={() => {
// //               if (service.screen) {
// //                 navigation.navigate(service.screen);
// //               }
// //             }}
// //           >
// //             <Image source={service.image} style={styles.serviceIcon} />
// //             <Text style={styles.serviceOptionText}>{service.name}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>

// //       {/* Bottom Navigation */}
// //       <View style={styles.bottomNavigation}>
// //         <TouchableOpacity style={styles.bottomNavItem}>
// //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Home</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
// //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Salon</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.bottomNavItem}>
// //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Booking</Text>
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
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#fff' },
// //   scrollContainer: { paddingBottom: 100 },
// //   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 40 },
// //   headerText: { fontSize: 20, fontWeight: 'bold', color: '#00665C' },
// //   logo: { width: 100, height: 30, resizeMode: 'contain' },
// //   searchIcon: { width: 24, height: 24, tintColor: 'gray' },
// //   searchBar: { height: 40, borderColor: '#00665C', borderWidth: 1, borderRadius: 10, marginHorizontal: 20, paddingLeft: 10, marginTop: 10, color: '#333' },
// //   whatDoYouWantText: { fontSize: 18, fontWeight: 'bold', color: '#00665C', marginTop: 20, marginHorizontal: 20 },
// //   serviceOptionsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginHorizontal: 10, marginTop: 10 },
// //   serviceOption: { width: '45%', alignItems: 'center', padding: 15, marginBottom: 10, borderRadius: 10, backgroundColor: '#f5f5f5' },
// //   serviceIcon: { width: 50, height: 50, marginBottom: 5 },
// //   serviceOptionText: { fontSize: 14, textAlign: 'center', color: '#00665C', fontWeight: 'bold' },
// //   bottomNavigation: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', padding: 10, borderTopWidth: 2, borderTopColor: '#00665C' },
// //   bottomNavItem: { alignItems: 'center', flex: 1, paddingVertical: 8 },
// //   bottomNavIcon: { width: 28, height: 28 },
// //   bottomNavText: { fontSize: 12, fontWeight: 'bold', color: '#00665C' },
// // });

// // export default HomeScreen;
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
//   Dimensions
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const UserHomeScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');

//   const services = [
//     { name: 'Haircut', image: require('../../assets/images/haircut.png'), screen: 'Haircut' },
//     { name: 'Nails', image: require('../../assets/images/nails.png') , screen: 'Nails'},
//     { name: 'Facial', image: require('../../assets/images/facial.png') , screen: 'Facial'},
//     { name: 'Coloring', image: require('../../assets/images/haircolor.png') , screen: 'Coloring'},
//     { name: 'Spa', image: require('../../assets/images/spa.png') , screen: 'Spa'},
//     { name: 'Waxing', image: require('../../assets/images/waxing.png') , screen: 'Waxing'},
//     { name: 'Makeup', image: require('../../assets/images/makeup.png') , screen: 'Makeup'},
//     { name: 'Massage', image: require('../../assets/images/massage.png') , screen: 'Massage'},
//   ];

//   const filteredServices = services.filter(service =>
//     service.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
//           <Text style={styles.headerText}>Hello User</Text>
//           <TouchableOpacity>
//             <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
//           </TouchableOpacity>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchBar}
//             placeholder="Search services..."
//             placeholderTextColor="#ccc"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>

//         {/* Services Section */}
//         <Text style={styles.sectionTitle}>What do you want to do?</Text>
//         <View style={styles.serviceOptionsContainer}>
//           {filteredServices.map((service, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.serviceOption}
//               onPress={() => {
//                 if (service.screen) {
//                   navigation.navigate(service.screen);
//                 }
//               }}
//             >
//               <View style={styles.serviceImageContainer}>
//                 <Image source={service.image} style={styles.serviceIcon} />
//               </View>
//               <Text style={styles.serviceOptionText}>{service.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNavigation} onPress={() => navigation.navigate("UserHomeScreen")}>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
//           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Salon</Text>
//         </TouchableOpacity>

//         {/* <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Booking</Text>
//         </TouchableOpacity> */}

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
//   container: { flex: 1, backgroundColor: '#F8F8F8' },
//   scrollContainer: { paddingBottom: 120 },

//   // Header Styling
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     backgroundColor: '#00665C',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginTop: 10,
//   },
//   headerText: { fontSize: 20, fontWeight: 'bold', color: '#fff',marginRight:70 },
//   logo: { width: 100, height: 30, resizeMode: 'contain' },
//   searchIcon: { width: 24, height: 24, tintColor: '#fff' },

//   // Search Bar
//   searchContainer: { marginTop: 15, paddingHorizontal: 20 },
//   searchBar: {
//     height: 45,
//     borderColor: '#00665C',
//     borderWidth: 1.5,
//     borderRadius: 12,
//     paddingLeft: 15,
//     backgroundColor: '#fff',
//     color: '#333',
//   },

//   // Section Title
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#00665C',
//     marginTop: 20,
//     marginBottom: 10,
//     paddingHorizontal: 20,
//   },

//   // Services Grid
//   serviceOptionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//   },
//   serviceOption: {
//     width: width * 0.42,
//     alignItems: 'center',
//     paddingVertical: 15,
//     marginBottom: 15,
//     borderRadius: 12,
//    // backgroundColor: '#fff',
//     elevation: 5,
//     shadowColor: '#00665C',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//   },
//   serviceImageContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 35,
//     backgroundColor: '#E6F2F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   serviceIcon: { width: 40, height: 40, resizeMode: 'contain' },
//   serviceOptionText: { fontSize: 14, textAlign: 'center', color: '#00665C', fontWeight: 'bold' },

//   // Bottom Navigation
//   bottomNavigation: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   bottomNavItem: { alignItems: 'center', flex: 1 },
//   bottomNavIcon: { width: 28, height: 28 },
//   bottomNavText: { fontSize: 12, fontWeight: 'bold', color: '#00665C' },
// });

// export default UserHomeScreen;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../firebaseConfig'; // Import db to interact with Firebase
import { ref, get } from 'firebase/database'; // Import Firebase database functions

const { width } = Dimensions.get('window');

const UserHomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('');

  // Fetch services data (same as before)
  const services = [
    { name: 'Haircut', image: require('../../assets/images/haircut.png'), screen: 'Haircut' },
    { name: 'Nails', image: require('../../assets/images/nails.png'), screen: 'Nails' },
    { name: 'Facial', image: require('../../assets/images/facial.png'), screen: 'Facial' },
    { name: 'Coloring', image: require('../../assets/images/haircolor.png'), screen: 'Coloring' },
    { name: 'Spa', image: require('../../assets/images/spa.png'), screen: 'Spa' },
    { name: 'Waxing', image: require('../../assets/images/waxing.png'), screen: 'Waxing' },
    { name: 'Makeup', image: require('../../assets/images/makeup.png'), screen: 'Makeup' },
    { name: 'Massage', image: require('../../assets/images/massage.png'), screen: 'Massage' },
  ];

  // Filter services based on the search query
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fetch user data (fullName) when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Fetch user data from Firebase Realtime Database
          const userRef = ref(db, 'users/' + user.uid);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserName(userData.fullName); // Set the user's name in state
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Hello {userName}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search services..."
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Services Section */}
        <Text style={styles.sectionTitle}>What do you want to do?</Text>
        <View style={styles.serviceOptionsContainer}>
          {filteredServices.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceOption}
              onPress={() => {
                if (service.screen) {
                  navigation.navigate(service.screen);
                }
              }}
            >
              <View style={styles.serviceImageContainer}>
                <Image source={service.image} style={styles.serviceIcon} />
              </View>
              <Text style={styles.serviceOptionText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('SalonList')}>
          <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Salon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Chatbot')}>
          <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>AI Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('UserProfile')}>
          <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  scrollContainer: { paddingBottom: 120 },

  // Header Styling
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#00665C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 10,
  },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginRight: 70 },
  logo: { width: 100, height: 30, resizeMode: 'contain' },
  searchIcon: { width: 24, height: 24, tintColor: '#fff' },

  // Search Bar
  searchContainer: { marginTop: 15, paddingHorizontal: 20 },
  searchBar: {
    height: 45,
    borderColor: '#00665C',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: '#fff',
    color: '#333',
  },

  // Section Title
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00665C',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  // Services Grid
  serviceOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  serviceOption: {
    width: width * 0.42,
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#00665C',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  serviceImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 35,
    backgroundColor: '#E6F2F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  serviceIcon: { width: 40, height: 40, resizeMode: 'contain' },
  serviceOptionText: { fontSize: 14, textAlign: 'center', color: '#00665C', fontWeight: 'bold' },

  // Bottom Navigation
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  bottomNavItem: { alignItems: 'center', flex: 1 },
  bottomNavIcon: { width: 28, height: 28 },
  bottomNavText: { fontSize: 12, fontWeight: 'bold', color: '#00665C' },
});

export default UserHomeScreen;
