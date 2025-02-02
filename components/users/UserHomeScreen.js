// // // // // import React from 'react';
// // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // // const HomeScreen = () => {
// // // // //   const styles = StyleSheet.create({
// // // // //     container: {
// // // // //       flex: 1,
// // // // //       backgroundColor: '#fff', 
// // // // //     },
// // // // //     header: {
// // // // //         flexDirection: 'row',
// // // // //         justifyContent: 'space-between',
// // // // //         alignItems: 'center',
// // // // //         padding: 20, // Reduced padding for better spacing
// // // // //         marginTop:40,

// // // // //       },
// // // // //       headerText: {
// // // // //         fontSize: 20,
// // // // //         fontWeight: 'bold',
// // // // //         marginRight:80,
// // // // //       },
// // // // //       logo: { 
// // // // //         width: 100, // Adjust width as needed
// // // // //         height: 30, // Adjust height as needed
// // // // //         resizeMode:'contain',
        
// // // // //     },
// // // // //     searchIcon: {
// // // // //       width: 24,
// // // // //       height: 24,
// // // // //       tintColor: 'gray',
// // // // //     },
// // // // //     recommendationsText: {
// // // // //       fontSize: 18,
// // // // //       fontWeight: '900',
// // // // //       marginTop: 20,
// // // // //       marginHorizontal: 20,
// // // // //     },
// // // // //     recommendationsContainer: {
// // // // //       flexDirection: 'row',
// // // // //       justifyContent: 'space-around',
// // // // //       marginHorizontal: 20,
// // // // //       marginTop: 10,
// // // // //     },
// // // // //     recommendationItem: {
// // // // //       alignItems: 'center',
// // // // //     },
// // // // //     recommendationImage: {
// // // // //       width: 80,
// // // // //       height: 80,
// // // // //       borderRadius:20
// // // // //     },
// // // // //     whatDoYouWantText: {
// // // // //       fontSize: 18,
// // // // //       fontWeight: 'bold',
// // // // //       marginTop: 20,
// // // // //       marginHorizontal: 20,
// // // // //     },
// // // // //     serviceOptionsContainer: {
// // // // //       flexDirection: 'row',
// // // // //       flexWrap: 'wrap',
// // // // //       justifyContent: 'space-around',
// // // // //       marginHorizontal: 20,
// // // // //       marginTop: 10,
// // // // //     },
// // // // //     serviceOption: {
// // // // //       width: '45%',
// // // // //       alignItems: 'center',
// // // // //       padding: 15,
// // // // //       marginBottom: 10,
     
// // // // //     },
// // // // //     serviceIcon: {
// // // // //       width: 40,
// // // // //       height: 40,
// // // // //       marginBottom: 5,
// // // // //     },
// // // // //     serviceOptionText: {
// // // // //       fontSize: 14,
// // // // //       textAlign: 'center',
// // // // //     },
// // // // //     salonsYouFollowText: {
// // // // //       fontSize: 18,
// // // // //       fontWeight: 'bold',
// // // // //       marginTop: 20,
// // // // //       marginHorizontal: 20,
// // // // //     },
// // // // //     salonsContainer: {
// // // // //       flexDirection: 'row',
// // // // //       justifyContent: 'space-around',
// // // // //       marginHorizontal: 20,
// // // // //       marginTop: 10,
// // // // //     },
// // // // //     salonItem: {
// // // // //       width: 80,
// // // // //       height: 80,
// // // // //     },
// // // // //     salonImage: {
// // // // //       width: '100%',
// // // // //       height: '100%',
// // // // //       borderRadius: 5,
// // // // //     },
// // // // //     bottomNavigation: {
// // // // //       flexDirection: 'row',
// // // // //       justifyContent: 'space-around',
// // // // //       alignItems: 'center',
// // // // //       position: 'absolute',
// // // // //       bottom: 0,
// // // // //       left: 0,
// // // // //       right: 0,
// // // // //       backgroundColor: 'white',
// // // // //       padding: 10,
// // // // //       borderTopWidth: 1,
// // // // //       borderTopColor: '#ccc',
// // // // //     },
// // // // //     bottomNavItem: {
// // // // //       alignItems: 'center',
// // // // //     },
// // // // //     bottomNavIcon: {
// // // // //       width: 24,
// // // // //       height: 24,
// // // // //     },
// // // // //     bottomNavText: {
// // // // //       fontSize: 12,
// // // // //     },
    
// // // // //   });

// // // // //   return (
// // // // //     <ScrollView style={styles.container}>
// // // // //       <View style={styles.header}>
// // // // //       <Image source={require('../../../assets/images/logo.png')} style={styles.logo} /> {/* Add your logo here */}
// // // // //         <Text style={styles.headerText}>Hello, Rahima</Text>
// // // // //         <Image source={require('../../../assets/images/search.png')} style={styles.searchIcon} /> 
// // // // //       </View>

// // // // //       <Text style={styles.recommendationsText}>Recommendations for you</Text>
// // // // //       <View style={styles.recommendationsContainer}>
// // // // //         <View style={styles.recommendationItem}>
// // // // //           <Image source={require('../../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
// // // // //           <Text>Haircuts</Text>
// // // // //         </View>
// // // // //         <View style={styles.recommendationItem}>
// // // // //           <Image source={require('../../../assets/images/massages.jpg')} style={styles.recommendationImage} />
// // // // //           <Text>Facial</Text>
// // // // //         </View>
// // // // //         <View style={styles.recommendationItem}>
// // // // //           <Image source={require('../../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
// // // // //           <Text>Nail care</Text>
// // // // //         </View>
// // // // //       </View>

// // // // //       <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// // // // //       <View style={styles.serviceOptionsContainer}>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/haircut.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Haircut</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/nails.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Nails</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/facial.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Facial</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/haircolor.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Coloring</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/spa.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Spa</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/waxing.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Waxing</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/makeup.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Makeup</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.serviceOption}>
// // // // //           <Image source={require('../../../assets/images/massage.png')} style={styles.serviceIcon} />
// // // // //           <Text style={styles.serviceOptionText}>Massage</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //       <Text style={styles.salonsYouFollowText}></Text>
// // // // //       <View style={styles.salonsContainer}>
// // // // //         <View style={styles.salonItem}>
// // // // //           {/* <Image source={require('./assets/images/salon1.jpg')} style={styles.salonImage} /> */}
// // // // //         </View>
// // // // //         <View style={styles.salonItem}>
// // // // //           {/* <Image source={require('./assets/images/salon2.jpg')} style={styles.salonImage} /> */}
// // // // //         </View>
// // // // //         <View style={styles.salonItem}>
// // // // //           {/* <Image source={require('./assets/images/salon3.jpg')} style={styles.salonImage} /> */}
// // // // //         </View>
// // // // //       </View>


// // // // //       <View style={styles.bottomNavigation}>
// // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // //           <Image source={require('../../../assets/images/home.png')} style={styles.bottomNavIcon} />
// // // // //           <Text style={styles.bottomNavText}>Home</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // //           <Image source={require('../../../assets/images/salon.png')} style={styles.bottomNavIcon} />
// // // // //           <Text style={styles.bottomNavText}>Salon</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // //           <Image source={require('../../../assets/images/booking.png')} style={styles.bottomNavIcon} />
// // // // //           <Text style={styles.bottomNavText}>Booking</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // //           <Image source={require('../../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
// // // // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // // // //         </TouchableOpacity>
// // // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // // //           <Image source={require('../../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // // // //           <Text style={styles.bottomNavText}>Profile</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //     </ScrollView>
// // // // //   );
// // // // // };

// // // // // export default HomeScreen;





// // // // import React from 'react';
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// // // // const HomeScreen = () => {
// // // //   const styles = StyleSheet.create({
// // // //     container: {
// // // //       flex: 1,
// // // //       backgroundColor: '#fff', 
// // // //     },
// // // //     header: {
// // // //         flexDirection: 'row',
// // // //         justifyContent: 'space-between',
// // // //         alignItems: 'center',
// // // //         padding: 20, // Reduced padding for better spacing
// // // //         marginTop:40,

// // // //       },
// // // //       headerText: {
// // // //         fontSize: 20,
// // // //         fontWeight: 'bold',
// // // //         marginRight:80,
// // // //       },
// // // //       logo: { 
// // // //         width: 100, // Adjust width as needed
// // // //         height: 30, // Adjust height as needed
// // // //         resizeMode:'contain',
        
// // // //     },
// // // //     searchIcon: {
// // // //       width: 24,
// // // //       height: 24,
// // // //       tintColor: 'gray',
// // // //     },
// // // //     recommendationsText: {
// // // //       fontSize: 18,
// // // //       fontWeight: '900',
// // // //       marginTop: 20,
// // // //       marginHorizontal: 20,
// // // //     },
// // // //     recommendationsContainer: {
// // // //       flexDirection: 'row',
// // // //       justifyContent: 'space-around',
// // // //       marginHorizontal: 20,
// // // //       marginTop: 10,
// // // //     },
// // // //     recommendationItem: {
// // // //       alignItems: 'center',
// // // //     },
// // // //     recommendationImage: {
// // // //       width: 80,
// // // //       height: 80,
// // // //       borderRadius:20
// // // //     },
// // // //     whatDoYouWantText: {
// // // //       fontSize: 18,
// // // //       fontWeight: 'bold',
// // // //       marginTop: 20,
// // // //       marginHorizontal: 20,
// // // //     },
// // // //     serviceOptionsContainer: {
// // // //       flexDirection: 'row',
// // // //       flexWrap: 'wrap',
// // // //       justifyContent: 'space-around',
// // // //       marginHorizontal: 20,
// // // //       marginTop: 10,
// // // //     },
// // // //     serviceOption: {
// // // //       width: '45%',
// // // //       alignItems: 'center',
// // // //       padding: 15,
// // // //       marginBottom: 10,
     
// // // //     },
// // // //     serviceIcon: {
// // // //       width: 40,
// // // //       height: 40,
// // // //       marginBottom: 5,
// // // //     },
// // // //     serviceOptionText: {
// // // //       fontSize: 14,
// // // //       textAlign: 'center',
// // // //     },
// // // //     salonsYouFollowText: {
// // // //       fontSize: 18,
// // // //       fontWeight: 'bold',
// // // //       marginTop: 20,
// // // //       marginHorizontal: 20,
// // // //     },
// // // //     salonsContainer: {
// // // //       flexDirection: 'row',
// // // //       justifyContent: 'space-around',
// // // //       marginHorizontal: 20,
// // // //       marginTop: 10,
// // // //     },
// // // //     salonItem: {
// // // //       width: 80,
// // // //       height: 80,
// // // //     },
// // // //     salonImage: {
// // // //       width: '100%',
// // // //       height: '100%',
// // // //       borderRadius: 5,
// // // //     },
// // // //     bottomNavigation: {
// // // //       flexDirection: 'row',
// // // //       justifyContent: 'space-around',
// // // //       alignItems: 'center',
// // // //       position: 'absolute',
// // // //       bottom: 0,
// // // //       left: 0,
// // // //       right: 0,
// // // //       backgroundColor: 'white',
// // // //       padding: 10,
// // // //       borderTopWidth: 1,
// // // //       borderTopColor: '#ccc',
// // // //     },
// // // //     bottomNavItem: {
// // // //       alignItems: 'center',
// // // //     },
// // // //     bottomNavIcon: {
// // // //       width: 24,
// // // //       height: 24,
// // // //     },
// // // //     bottomNavText: {
// // // //       fontSize: 12,
// // // //     },
    
// // // //   });

// // // //   return (
// // // //     <ScrollView style={styles.container}>
// // // //       <View style={styles.header}>
// // // //       <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> {/* Updated path */}
// // // //         <Text style={styles.headerText}>Hello, Rahima</Text>
// // // //         <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} /> {/* Updated path */}
// // // //       </View>

// // // //       <Text style={styles.recommendationsText}>Recommendations for you</Text>
// // // //       <View style={styles.recommendationsContainer}>
// // // //         <View style={styles.recommendationItem}>
// // // //           <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} /> {/* Updated path */}
// // // //           <Text>Haircuts</Text>
// // // //         </View>
// // // //         <View style={styles.recommendationItem}>
// // // //           <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} /> {/* Updated path */}
// // // //           <Text>Facial</Text>
// // // //         </View>
// // // //         <View style={styles.recommendationItem}>
// // // //           <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} /> {/* Updated path */}
// // // //           <Text>Nail care</Text>
// // // //         </View>
// // // //       </View>

// // // //       <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
// // // //       <View style={styles.serviceOptionsContainer}>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/haircut.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Haircut</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/nails.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Nails</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/facial.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Facial</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/haircolor.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Coloring</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/spa.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Spa</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/waxing.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Waxing</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/makeup.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Makeup</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.serviceOption}>
// // // //           <Image source={require('../../assets/images/massage.png')} style={styles.serviceIcon} /> {/* Updated path */}
// // // //           <Text style={styles.serviceOptionText}>Massage</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //       <Text style={styles.salonsYouFollowText}></Text>
// // // //       <View style={styles.salonsContainer}>
// // // //         <View style={styles.salonItem}>
// // // //           {/* <Image source={require('../../assets/images/salon1.jpg')} style={styles.salonImage} /> */}
// // // //         </View>
// // // //         <View style={styles.salonItem}>
// // // //           {/* <Image source={require('../../assets/images/salon2.jpg')} style={styles.salonImage} /> */}
// // // //         </View>
// // // //         <View style={styles.salonItem}>
// // // //           {/* <Image source={require('../../assets/images/salon3.jpg')} style={styles.salonImage} /> */}
// // // //         </View>
// // // //       </View>


// // // //       <View style={styles.bottomNavigation}>
// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} /> {/* Updated path */}
// // // //           <Text style={styles.bottomNavText}>Home</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} /> {/* Updated path */}
// // // //           <Text style={styles.bottomNavText}>Salon</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} /> {/* Updated path */}
// // // //           <Text style={styles.bottomNavText}>Booking</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.bottomNavItem}>
// // // //           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} /> {/* Updated path */}
// // // //           <Text style={styles.bottomNavText}>AI Chatbot</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity 
// // // //           style={styles.bottomNavItem}
// // // //           onPress={() => navigation.navigate('UserProfile')} // Navigate to UserProfile screen
// // // //         >
// // // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // // //           <Text style={styles.bottomNavText}>Profile</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // };

// // // // export default HomeScreen;

// // // //navigation the the profile page 


// // // import React from 'react';
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// // // import { useNavigation } from '@react-navigation/native'; // Ensure this import is present

// // // const HomeScreen = () => {
// // //   const navigation = useNavigation(); // Get the navigation object

// // //   const styles = StyleSheet.create({
// // //     container: {
// // //       flex: 1,
// // //       backgroundColor: '#fff', 
// // //     },
// // //     header: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'space-between',
// // //       alignItems: 'center',
// // //       padding: 20,
// // //       marginTop: 40,
// // //     },
// // //     headerText: {
// // //       fontSize: 20,
// // //       fontWeight: 'bold',
// // //       marginRight: 80,
// // //     },
// // //     logo: { 
// // //       width: 100, 
// // //       height: 30, 
// // //       resizeMode: 'contain',
// // //     },
// // //     searchIcon: {
// // //       width: 24,
// // //       height: 24,
// // //       tintColor: 'gray',
// // //     },
// // //     recommendationsText: {
// // //       fontSize: 18,
// // //       fontWeight: '900',
// // //       marginTop: 20,
// // //       marginHorizontal: 20,
// // //     },
// // //     recommendationsContainer: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'space-around',
// // //       marginHorizontal: 20,
// // //       marginTop: 10,
// // //     },
// // //     recommendationItem: {
// // //       alignItems: 'center',
// // //     },
// // //     recommendationImage: {
// // //       width: 80,
// // //       height: 80,
// // //       borderRadius: 20,
// // //     },
// // //     bottomNavigation: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'space-around',
// // //       alignItems: 'center',
// // //       position: 'absolute',
// // //       bottom: 0,
// // //       left: 0,
// // //       right: 0,
// // //       backgroundColor: 'white',
// // //       padding: 10,
// // //       borderTopWidth: 1,
// // //       borderTopColor: '#ccc',
// // //     },
// // //     bottomNavItem: {
// // //       alignItems: 'center',
// // //     },
// // //     bottomNavIcon: {
// // //       width: 24,
// // //       height: 24,
// // //     },
// // //     bottomNavText: {
// // //       fontSize: 12,
// // //     },
// // //   });

// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       <View style={styles.header}>
// // //         <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// // //         <Text style={styles.headerText}>Hello, Rahima</Text>
// // //         <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
// // //       </View>

// // //       <Text style={styles.recommendationsText}>Recommendations for you</Text>
// // //       <View style={styles.recommendationsContainer}>
// // //         <View style={styles.recommendationItem}>
// // //           <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
// // //           <Text>Haircuts</Text>
// // //         </View>
// // //         <View style={styles.recommendationItem}>
// // //           <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} />
// // //           <Text>Facial</Text>
// // //         </View>
// // //         <View style={styles.recommendationItem}>
// // //           <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
// // //           <Text>Nail care</Text>
// // //         </View>
// // //       </View>

// // //       {/* Other content of your screen */}

// // //       <View style={styles.bottomNavigation}>
// // //         {/* Other bottom navigation items */}

// // //         <TouchableOpacity 
// // //           style={styles.bottomNavItem}
// // //           onPress={() => navigation.navigate('UserProfile')} // Navigate to UserProfile screen
// // //         >
// // //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// // //           <Text style={styles.bottomNavText}>Profile</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // };

// // // export default HomeScreen;


// // import React from 'react';
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// // import { useNavigation } from '@react-navigation/native'; // Ensure this import is present

// // const HomeScreen = () => {
// //   const navigation = useNavigation(); // Get the navigation object

// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#fff', 
// //     },
// //     header: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       padding: 20,
// //       marginTop: 40,
// //     },
// //     headerText: {
// //       fontSize: 20,
// //       fontWeight: 'bold',
// //       marginRight: 80,
// //     },
// //     logo: { 
// //       width: 100, 
// //       height: 30, 
// //       resizeMode: 'contain',
// //     },
// //     searchIcon: {
// //       width: 24,
// //       height: 24,
// //       tintColor: 'gray',
// //     },
// //     recommendationsText: {
// //       fontSize: 18,
// //       fontWeight: '900',
// //       marginTop: 20,
// //       marginHorizontal: 20,
// //     },
// //     recommendationsContainer: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-around',
// //       marginHorizontal: 20,
// //       marginTop: 10,
// //     },
// //     recommendationItem: {
// //       alignItems: 'center',
// //     },
// //     recommendationImage: {
// //       width: 80,
// //       height: 80,
// //       borderRadius: 20,
// //     },
// //     bottomNavigation: {
// //       flexDirection: 'row',
// //       justifyContent: 'space-around',
// //       alignItems: 'center',
// //       position: 'absolute',
// //       bottom: 0,
// //       left: 0,
// //       right: 0,
// //       backgroundColor: 'white',
// //       padding: 10,
// //       borderTopWidth: 1,
// //       borderTopColor: '#ccc',
// //     },
// //     bottomNavItem: {
// //       alignItems: 'center',
// //     },
// //     bottomNavIcon: {
// //       width: 24,
// //       height: 24,
// //     },
// //     bottomNavText: {
// //       fontSize: 12,
// //     },
// //   });

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.header}>
// //         <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
// //         <Text style={styles.headerText}>Hello, Rahima</Text>
// //         <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
// //       </View>

// //       <Text style={styles.recommendationsText}>Recommendations for you</Text>
// //       <View style={styles.recommendationsContainer}>
// //         <View style={styles.recommendationItem}>
// //           <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
// //           <Text>Haircuts</Text>
// //         </View>
// //         <View style={styles.recommendationItem}>
// //           <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} />
// //           <Text>Facial</Text>
// //         </View>
// //         <View style={styles.recommendationItem}>
// //           <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
// //           <Text>Nail care</Text>
// //         </View>
// //       </View>

// //       {/* Other content of your screen */}

// //       <View style={styles.bottomNavigation}>
// //         {/* Other bottom navigation items */}

// //         <TouchableOpacity 
// //           style={styles.bottomNavItem}
// //           onPress={() => navigation.navigate('UserProfile')} // Navigate to UserProfile screen
// //         >
// //           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
// //           <Text style={styles.bottomNavText}>Profile</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // export default HomeScreen;





// //rahima code 

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// const HomeScreen = () => {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff', 
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 20, // Reduced padding for better spacing
//         marginTop:40,

//       },
//       headerText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginRight:80,
//       },
//       logo: { 
//         width: 100, // Adjust width as needed
//         height: 30, // Adjust height as needed
//         resizeMode:'contain',
        
//     },
//     searchIcon: {
//       width: 24,
//       height: 24,
//       tintColor: 'gray',
//     },
//     recommendationsText: {
//       fontSize: 18,
//       fontWeight: '900',
//       marginTop: 20,
//       marginHorizontal: 20,
//     },
//     recommendationsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginHorizontal: 20,
//       marginTop: 10,
//     },
//     recommendationItem: {
//       alignItems: 'center',
//     },
//     recommendationImage: {
//       width: 80,
//       height: 80,
//       borderRadius:20
//     },
//     whatDoYouWantText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginTop: 20,
//       marginHorizontal: 20,
//     },
//     serviceOptionsContainer: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       marginHorizontal: 20,
//       marginTop: 10,
//     },
//     serviceOption: {
//       width: '45%',
//       alignItems: 'center',
//       padding: 15,
//       marginBottom: 10,
     
//     },
//     serviceIcon: {
//       width: 40,
//       height: 40,
//       marginBottom: 5,
//     },
//     serviceOptionText: {
//       fontSize: 14,
//       textAlign: 'center',
//     },
//     salonsYouFollowText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginTop: 20,
//       marginHorizontal: 20,
//     },
//     salonsContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       marginHorizontal: 20,
//       marginTop: 10,
//     },
//     salonItem: {
//       width: 80,
//       height: 80,
//     },
//     salonImage: {
//       width: '100%',
//       height: '100%',
//       borderRadius: 5,
//     },
//     bottomNavigation: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: 'white',
//       padding: 10,
//       borderTopWidth: 1,
//       borderTopColor: '#ccc',
//     },
//     bottomNavItem: {
//       alignItems: 'center',
//     },
//     bottomNavIcon: {
//       width: 24,
//       height: 24,
//     },
//     bottomNavText: {
//       fontSize: 12,
//     },
    
//   });

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//       <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> {/* Add your logo here */}
//         <Text style={styles.headerText}>Hello, Rahima</Text>
//         <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} /> 
//       </View>

//       <Text style={styles.recommendationsText}>Recommendations for you</Text>
//       <View style={styles.recommendationsContainer}>
//         <View style={styles.recommendationItem}>
//           <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
//           <Text>Haircuts</Text>
//         </View>
//         <View style={styles.recommendationItem}>
//           <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} />
//           <Text>Facial</Text>
//         </View>
//         <View style={styles.recommendationItem}>
//           <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
//           <Text>Nail care</Text>
//         </View>
//       </View>

//       <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
//       <View style={styles.serviceOptionsContainer}>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/haircut.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Haircut</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/nails.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Nails</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/facial.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Facial</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/haircolor.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Coloring</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/spa.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Spa</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/waxing.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Waxing</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/makeup.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Makeup</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.serviceOption}>
//           <Image source={require('../../assets/images/massage.png')} style={styles.serviceIcon} />
//           <Text style={styles.serviceOptionText}>Massage</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.salonsYouFollowText}></Text>
//       <View style={styles.salonsContainer}>
//         <View style={styles.salonItem}>
//           {/* <Image source={require('./assets/images/salon1.jpg')} style={styles.salonImage} /> */}
//         </View>
//         <View style={styles.salonItem}>
//           {/* <Image source={require('./assets/images/salon2.jpg')} style={styles.salonImage} /> */}
//         </View>
//         <View style={styles.salonItem}>
//           {/* <Image source={require('./assets/images/salon3.jpg')} style={styles.salonImage} /> */}
//         </View>
//       </View>


//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Salon</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Booking</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>AI Chatbot</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem}>
//           <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
//           <Text style={styles.bottomNavText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default HomeScreen;


//checking 
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20, // Reduced padding for better spacing
        marginTop:40,
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight:80,
      },
      logo: { 
        width: 100, // Adjust width as needed
        height: 30, // Adjust height as needed
        resizeMode:'contain',
      },
    searchIcon: {
      width: 24,
      height: 24,
      tintColor: 'gray',
    },
    recommendationsText: {
      fontSize: 18,
      fontWeight: '900',
      marginTop: 20,
      marginHorizontal: 20,
    },
    recommendationsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
      marginTop: 10,
    },
    recommendationItem: {
      alignItems: 'center',
    },
    recommendationImage: {
      width: 80,
      height: 80,
      borderRadius:20
    },
    whatDoYouWantText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginHorizontal: 20,
    },
    serviceOptionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginHorizontal: 20,
      marginTop: 10,
    },
    serviceOption: {
      width: '45%',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
    },
    serviceIcon: {
      width: 40,
      height: 40,
      marginBottom: 5,
    },
    serviceOptionText: {
      fontSize: 14,
      textAlign: 'center',
    },
    salonsYouFollowText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginHorizontal: 20,
    },
    salonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
      marginTop: 10,
    },
    salonItem: {
      width: 80,
      height: 80,
    },
    salonImage: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
    },
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    bottomNavItem: {
      alignItems: 'center',
    },
    bottomNavIcon: {
      width: 24,
      height: 24,
    },
    bottomNavText: {
      fontSize: 12,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> {/* Add your logo here */}
        <Text style={styles.headerText}>Hello, Rahima</Text>
        <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} /> 
      </View>

      <Text style={styles.recommendationsText}>Recommendations for you</Text>
      <View style={styles.recommendationsContainer}>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/images/haircuts.jpg')} style={styles.recommendationImage} />
          <Text>Haircuts</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/images/massages.jpg')} style={styles.recommendationImage} />
          <Text>Facial</Text>
        </View>
        <View style={styles.recommendationItem}>
          <Image source={require('../../assets/images/nailcare.jpg')} style={styles.recommendationImage} />
          <Text>Nail care</Text>
        </View>
      </View>

      <Text style={styles.whatDoYouWantText}>What do you want to do?</Text>
      <View style={styles.serviceOptionsContainer}>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/haircut.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Haircut</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/nails.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Nails</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/facial.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Facial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/haircolor.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Coloring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/spa.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Spa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/waxing.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Waxing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/makeup.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Makeup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceOption}>
          <Image source={require('../../assets/images/massage.png')} style={styles.serviceIcon} />
          <Text style={styles.serviceOptionText}>Massage</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.salonsYouFollowText}></Text>
      <View style={styles.salonsContainer}>
        <View style={styles.salonItem}>
          {/* <Image source={require('./assets/images/salon1.jpg')} style={styles.salonImage} /> */}
        </View>
        <View style={styles.salonItem}>
          {/* <Image source={require('./assets/images/salon2.jpg')} style={styles.salonImage} /> */}
        </View>
        <View style={styles.salonItem}>
          {/* <Image source={require('./assets/images/salon3.jpg')} style={styles.salonImage} /> */}
        </View>
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('../../assets/images/home.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('../../assets/images/salon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Salon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('../../assets/images/booking.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Image source={require('../../assets/images/chatbot.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>AI Chatbot</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bottomNavItem}
          onPress={() => navigation.navigate('UserProfile')} // Navigate to UserProfile
        >
          <Image source={require('../../assets/images/user.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;


