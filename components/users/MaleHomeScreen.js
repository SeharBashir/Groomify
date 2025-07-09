// // // import React, { useState, useEffect } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   Image,
// // //   TouchableOpacity,
// // //   ScrollView,
// // //   ActivityIndicator,
// // // } from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { auth, db } from "../../firebaseConfig";
// // // import { ref, get, onValue, query, orderByChild } from "firebase/database";
// // // import { FontAwesome } from "@expo/vector-icons";

// // // const MaleHomeScreen = () => {
// // //   const navigation = useNavigation();
// // //   const [userName, setUserName] = useState("");
// // //   const [userGender, setUserGender] = useState("");
// // //   const [salonList, setSalonList] = useState([]);
// // //   const [servicesList, setServicesList] = useState([]);
// // //   const [userPreferences, setUserPreferences] = useState({ 
// // //     selectedServices: [], 
// // //     priceRange: "500-3000", 
// // //     salonType: "Home Salon" // Default salon type
// // //   });
// // //   const [loading, setLoading] = useState(true);

// // //   // Fetch User Data and Preferences
// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       const user = auth.currentUser;
// // //       if (user) {
// // //         try {
// // //           const userRef = ref(db, "users/" + user.uid);
// // //           const snapshot = await get(userRef);
// // //           if (snapshot.exists()) {
// // //             const userData = snapshot.val();
// // //             setUserName(userData.fullName || "User");
// // //             setUserGender(userData.gender || "Unisex");

// // //             const preferencesRef = ref(db, `userPreferences/${user.uid}`);
// // //             const prefSnapshot = await get(preferencesRef);
// // //             if (prefSnapshot.exists()) {
// // //               const prefData = prefSnapshot.val();
// // //               setUserPreferences({
// // //                 selectedServices: prefData.selectedServices || [],
// // //                 priceRange: prefData.priceRange || "500-3000",
// // //                 salonType: prefData.salonType || "Home Salon", // Fetch salonType
// // //               });
// // //             }
// // //           }
// // //         } catch (error) {
// // //           console.error("Error fetching user data:", error);
// // //         } finally {
// // //           setLoading(false);
// // //         }
// // //       }
// // //     };

// // //     fetchUserData();
// // //   }, []);

// // //   // Fetch Salons based on Gender
// // //   useEffect(() => {
// // //     if (!userGender) return;

// // //     const salonsRef = ref(db, "salons");
// // //     const salonsQuery = query(salonsRef, orderByChild("salonType"));

// // //     const unsubscribe = onValue(
// // //       salonsQuery,
// // //       (snapshot) => {
// // //         if (snapshot.exists()) {
// // //           const salonsData = snapshot.val();
// // //           const filteredSalons = Object.keys(salonsData)
// // //             .map((key) => ({ id: key, ...salonsData[key] }))
// // //             .filter(
// // //               (salon) =>
// // //                 salon.salonType.toLowerCase() === userGender.toLowerCase() ||
// // //                 salon.salonType.toLowerCase() === "unisex"
// // //             );

// // //           setSalonList(filteredSalons);
// // //         } else {
// // //           setSalonList([]);
// // //         }
// // //       },
// // //       (error) => {
// // //         console.error("Error fetching salons:", error);
// // //       }
// // //     );

// // //     return () => unsubscribe();
// // //   }, [userGender]);

// // //   // Fetch Services based on Matching Salon Owners, User Preferences, and Price Range
// // //   useEffect(() => {
// // //     if (!userGender || salonList.length === 0 || userPreferences.selectedServices.length === 0) return;

// // //     const servicesRef = ref(db, "services");
// // //     const unsubscribe = onValue(
// // //       servicesRef,
// // //       (snapshot) => {
// // //         if (snapshot.exists()) {
// // //           const servicesData = snapshot.val();

// // //           const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

// // //           const filteredServices = Object.keys(servicesData)
// // //             .map((key) => ({ id: key, ...servicesData[key] }))
// // //             .filter((service) => {
// // //               // Filter by matching salon owners
// // //               if (!validOwnerIds.has(service.ownerId)) return false;

// // //               // Filter by user's selected services
// // //               const matchesService = userPreferences.selectedServices.some((pref) => {
// // //                 const serviceNameLower = service.serviceName.toLowerCase();
// // //                 const prefLower = pref.toLowerCase();
// // //                 return serviceNameLower.includes(prefLower) || prefLower.includes(serviceNameLower);
// // //               });

// // //               if (!matchesService) return false;

// // //               // Filter by price range
// // //               const [minPrice, maxPrice] = userPreferences.priceRange.split("-").map(Number);
// // //               if (userPreferences.priceRange === "8000+") {
// // //                 return service.price >= 8000;
// // //               } else {
// // //                 return service.price >= minPrice && service.price <= maxPrice;
// // //               }

// // //               // Filter by salonType
// // //               const salon = salonList.find((salon) => salon.ownerId === service.ownerId);
// // //               if (userPreferences.salonType === "Home Salon") {
// // //                 return salon.salonType === "Home Salon";
// // //               } else if (userPreferences.salonType === "In Salon") {
// // //                 return salon.salonType === "In Salon";
// // //               } else if (userPreferences.salonType === "Both") {
// // //                 return true; // Show all services
// // //               }
// // //             });

// // //           setServicesList(filteredServices);
// // //         } else {
// // //           setServicesList([]);
// // //         }
// // //       },
// // //       (error) => {
// // //         console.error("Error fetching services:", error);
// // //       }
// // //     );

// // //     return () => unsubscribe();
// // //   }, [userGender, salonList, userPreferences]);

// // //   if (loading) {
// // //     return (
// // //       <View style={styles.loadingContainer}>
// // //         <ActivityIndicator size="large" color="#004D40" />
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <View style={styles.headerTop}>
// // //           <View style={styles.profileContainer}>
// // //             <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
// // //               <FontAwesome name="user-circle" size={60} color="#fff" />
// // //             </TouchableOpacity>
// // //             <Text style={styles.username}>{userName}</Text>
// // //           </View>
// // //         </View>
// // //         <Text style={styles.headerText}>Find the best grooming services for you</Text>
// // //       </View>

// // //       {/* Personalized Picks */}
// // //       <Text style={styles.sectionTitle}>Personalized Picks</Text>
// // //       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
// // //         {servicesList.map((service, index) => (
// // //           <TouchableOpacity
// // //             key={index}
// // //             style={styles.serviceCard}
// // //             // onPress={() => navigation.navigate("RecommendedScreen", { service })}
// // //             onPress={() => navigation.navigate("RecommendedScreen", { 
// // //               service, 
// // //               ownerId: service.ownerId // ✅ Pass ownerId
// // //             })}
// // //           >
// // //             <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
// // //             <View style={styles.serviceDetails}>
// // //               <Text style={styles.serviceName}>{service.serviceName}</Text>
// // //               <Text style={styles.servicePrice}>Rs.{service.price}</Text>
// // //             </View>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </ScrollView>

// // //       {/* Top Picks For You Section */}
// // //       <Text style={styles.sectionTitle}>Top Picks For You</Text>
// // //       <View style={styles.categoriesContainer}>
// // //         <View style={styles.categoriesRow}>
// // //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
// // //             <FontAwesome name="scissors" size={40} color="#E57373" style={styles.categoryIcon} />
// // //             <Text style={styles.categoryText}>Haircuts</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
// // //             <FontAwesome name="user-circle" size={40} color="#388E3C" style={styles.categoryIcon} />
// // //             <Text style={styles.categoryText}>Shaving</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
// // //             <FontAwesome name="leaf" size={40} color="#FFAB91" style={styles.categoryIcon} />
// // //             <Text style={styles.categoryText}>Facial</Text>
// // //           </TouchableOpacity>
// // //         </View>

// // //         <View style={styles.categoriesRow}>
// // //           <TouchableOpacity style={styles.categoryCard}>
// // //             <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" style={styles.categoryIcon}
// // //               onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })} />
// // //             <Text style={styles.categoryText}>Massage</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.categoryCard}>
// // //             <FontAwesome name="user" size={40} color="#80CBC4" style={styles.categoryIcon}
// // //               onPress={() => navigation.navigate("Malebeard", { category: "Beard" })} />
// // //             <Text style={styles.categoryText}>Beard Triming</Text>
// // //           </TouchableOpacity>
// // //           <TouchableOpacity style={styles.categoryCard}>
// // //             <FontAwesome name="paint-brush" size={40} color="#8B4513" style={styles.categoryIcon}
// // //               onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })} />
// // //             <Text style={styles.categoryText}>Hair Color</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </View>

// // //       {/* Bottom Navigation */}
// // //       <View style={styles.bottomNavigation}>
// // //         {[
// // //           { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
// // //           { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
// // //           { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
// // //           { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
// // //         ].map((navItem, index) => (
// // //           <TouchableOpacity
// // //             key={index}
// // //             style={styles.bottomNavItem}
// // //             onPress={() => navigation.navigate(navItem.route)}
// // //           >
// // //             <Image source={navItem.image} style={styles.bottomNavIcon} />
// // //             <Text style={styles.bottomNavText}>{navItem.title}</Text>
// // //           </TouchableOpacity>
// // //         ))}
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#fff" },
// // //   header: {
// // //     paddingLeft: 30,
// // //     backgroundColor: "#004D40",
// // //     borderBottomLeftRadius: 20,
// // //     borderBottomRightRadius: 20,
// // //     paddingBottom: 120,
// // //   },
// // //   headerTop: {
// // //     marginTop: 15,
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center",
// // //   },
// // //   profileContainer: { alignItems: "center", justifyContent: "center", marginTop: 35, paddingRight: 20, marginLeft: 320 },
// // //   username: { fontSize: 14, color: "#fff", marginTop: 5, fontWeight: "bold" },
// // //   headerText: { fontSize: 40, color: "#fff", fontWeight: "bold", marginTop: 10, textAlign: "center", marginLeft: -40 },
// // //   scrollContainer: { flexDirection: "row", justifyContent: "flex-start", paddingHorizontal: 10, marginBottom: 10 },
// // //   sectionTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 5, color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
// // //   serviceCard: {
// // //     width: 150,
// // //     height: 150,
// // //     marginRight: 10,
// // //     backgroundColor: "#E0F2F1",
// // //     borderRadius: 12,
// // //     justifyContent: "flex-start",
// // //     alignItems: "center",
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 5 },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 10,
// // //     elevation: 8,
// // //     borderColor: "#00665C",
// // //     borderWidth: 2,
// // //     marginTop: 20,
// // //   },
// // //   serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
// // //   serviceDetails: { width: "100%", alignItems: "center" },
// // //   serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
// // //   servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
// // //   categoriesContainer: { marginTop: 9, marginBottom: 90, paddingHorizontal: 10 },
// // //   categoryIcon: { width: 25, height: 25, marginBottom: 5 },
// // //   categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 5 },
// // //   categoryCard: {
// // //     width: "30%",
// // //     height: 80,
// // //     backgroundColor: "#E0F2F1",
// // //     borderRadius: 12,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     marginBottom: 5,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 5 },
// // //     shadowOpacity: 0.2,
// // //     shadowRadius: 10,
// // //     elevation: 8,
// // //     borderColor: "#00665C",
// // //     borderWidth: 3,
// // //   },
// // //   categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
// // //   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
// // //   bottomNavigation: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-around",
// // //     position: "absolute",
// // //     bottom: 0,
// // //     left: 0,
// // //     right: 0,
// // //     backgroundColor: "#004D40",
// // //     paddingVertical: 10,
// // //   },
// // //   bottomNavItem: { alignItems: "center", flex: 1 },
// // //   bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// // //   bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// // // });

// // // export default MaleHomeScreen;

// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// //   ActivityIndicator,
// // } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { auth, db } from "../../firebaseConfig";
// // import { ref, get, onValue, query, orderByChild } from "firebase/database";
// // import { FontAwesome } from "@expo/vector-icons";

// // const MaleHomeScreen = () => {
// //   const navigation = useNavigation();
// //   const [userName, setUserName] = useState("");
// //   const [userGender, setUserGender] = useState("");
// //   const [salonList, setSalonList] = useState([]);
// //   const [servicesList, setServicesList] = useState([]);
// //   const [userPreferences, setUserPreferences] = useState({ 
// //     selectedServices: [], 
// //     priceRange: "500-3000", 
// //     salonType: "Home Salon" // Default salon type
// //   });
// //   const [loading, setLoading] = useState(true);

// //   // Fetch User Data and Preferences
// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const user = auth.currentUser;
// //       if (user) {
// //         try {
// //           const userRef = ref(db, "users/" + user.uid);
// //           const snapshot = await get(userRef);
// //           if (snapshot.exists()) {
// //             const userData = snapshot.val();
// //             setUserName(userData.fullName || "User");
// //             setUserGender(userData.gender || "Unisex");

// //             const preferencesRef = ref(db, `userPreferences/${user.uid}`);
// //             const prefSnapshot = await get(preferencesRef);
// //             if (prefSnapshot.exists()) {
// //               const prefData = prefSnapshot.val();
// //               setUserPreferences({
// //                 selectedServices: prefData.selectedServices || [],
// //                 priceRange: prefData.priceRange || "500-3000",
// //                 salonType: prefData.salonType || "Home Salon", // Fetch salonType
// //               });
// //             }
// //           }
// //         } catch (error) {
// //           console.error("Error fetching user data:", error);
// //         } finally {
// //           setLoading(false);
// //         }
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   // Fetch Salons based on Gender
// //   useEffect(() => {
// //     if (!userGender) return;

// //     const salonsRef = ref(db, "salons");
// //     const salonsQuery = query(salonsRef, orderByChild("salonType"));

// //     const unsubscribe = onValue(
// //       salonsQuery,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const salonsData = snapshot.val();
// //           const filteredSalons = Object.keys(salonsData)
// //             .map((key) => ({ id: key, ...salonsData[key] }))
// //             .filter(
// //               (salon) =>
// //                 salon.salonType.toLowerCase() === userGender.toLowerCase() ||
// //                 salon.salonType.toLowerCase() === "unisex"
// //             );

// //           setSalonList(filteredSalons);
// //         } else {
// //           setSalonList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching salons:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender]);

// //   // Fetch Services based on Matching Salon Owners, User Preferences, and Price Range
// //   useEffect(() => {
// //     if (!userGender || salonList.length === 0 || userPreferences.selectedServices.length === 0) return;

// //     const servicesRef = ref(db, "services");
// //     const unsubscribe = onValue(
// //       servicesRef,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const servicesData = snapshot.val();

// //           const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

// //           const filteredServices = Object.keys(servicesData)
// //             .map((key) => ({ id: key, ...servicesData[key] }))
// //             .filter((service) => {
// //               // Filter by matching salon owners
// //               if (!validOwnerIds.has(service.ownerId)) return false;

// //               // Filter by user's selected services
// //               const matchesService = userPreferences.selectedServices.some((pref) => {
// //                 const serviceNameLower = service.serviceName.toLowerCase();
// //                 const prefLower = pref.toLowerCase();
// //                 return serviceNameLower.includes(prefLower) || prefLower.includes(serviceNameLower);
// //               });

// //               if (!matchesService) return false;

// //               // Filter by price range
// //               const [minPrice, maxPrice] = userPreferences.priceRange.split("-").map(Number);
// //               if (userPreferences.priceRange === "8000+") {
// //                 return service.price >= 8000;
// //               } else {
// //                 return service.price >= minPrice && service.price <= maxPrice;
// //               }

// //               // Filter by salonType
// //               const salon = salonList.find((salon) => salon.ownerId === service.ownerId);
// //               if (userPreferences.salonType === "Home Salon") {
// //                 return salon.salonType === "Home Salon";
// //               } else if (userPreferences.salonType === "In Salon") {
// //                 return salon.salonType === "In Salon";
// //               } else if (userPreferences.salonType === "Both") {
// //                 return true; // Show all services
// //               }
// //             });

// //           setServicesList(filteredServices);
// //         } else {
// //           setServicesList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching services:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender, salonList, userPreferences]);

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size="large" color="#004D40" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <View style={styles.headerTop}>
// //           <View style={styles.profileContainer}>
// //             <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
// //               <FontAwesome name="user-circle" size={60} color="#fff" />
// //             </TouchableOpacity>
// //             <Text style={styles.username}>{userName}</Text>
// //           </View>
// //         </View>
// //         <Text style={styles.headerText}>Find the best grooming services for you</Text>
// //       </View>

// //       {/* Personalized Picks */}
// //       <Text style={styles.sectionTitle}>Personalized Picks</Text>
// //       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
// //         {servicesList.map((service, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={styles.serviceCard}
// //             // onPress={() => navigation.navigate("RecommendedScreen", { service })}
// //             onPress={() => navigation.navigate("RecommendedScreen", { 
// //               service, 
// //               ownerId: service.ownerId // ✅ Pass ownerId
// //             })}
// //           >
// //             <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
// //             <View style={styles.serviceDetails}>
// //               <Text style={styles.serviceName}>{service.serviceName}</Text>
// //               <Text style={styles.servicePrice}>Rs.{service.price}</Text>
// //             </View>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>

// //       {/* Top Picks For You Section */}
// //       <Text style={styles.sectionTitle}>Top Picks For You</Text>
// //       <View style={styles.categoriesContainer}>
// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
// //             <FontAwesome name="scissors" size={40} color="#E57373" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Haircuts</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
// //             <FontAwesome name="user-circle" size={40} color="#388E3C" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Shaving</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
// //             <FontAwesome name="leaf" size={40} color="#FFAB91" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Facial</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard}>
// //             <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" style={styles.categoryIcon}
// //               onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })} />
// //             <Text style={styles.categoryText}>Massage</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard}>
// //             <FontAwesome name="user" size={40} color="#80CBC4" style={styles.categoryIcon}
// //               onPress={() => navigation.navigate("Malebeard", { category: "Beard" })} />
// //             <Text style={styles.categoryText}>Beard Triming</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard}>
// //             <FontAwesome name="paint-brush" size={40} color="#8B4513" style={styles.categoryIcon}
// //               onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })} />
// //             <Text style={styles.categoryText}>Hair Color</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>

// //       {/* Bottom Navigation */}
// //       <View style={styles.bottomNavigation}>
// //         {[
// //           { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
// //           { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
// //           { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
// //           { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
// //         ].map((navItem, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={styles.bottomNavItem}
// //             onPress={() => navigation.navigate(navItem.route)}
// //           >
// //             <Image source={navItem.image} style={styles.bottomNavIcon} />
// //             <Text style={styles.bottomNavText}>{navItem.title}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#fff" },
// //   header: {
// //     paddingLeft: 30,
// //     backgroundColor: "#004D40",
// //     borderBottomLeftRadius: 60,
// //     borderBottomRightRadius: 60,
// //     paddingBottom: 120,
// //   },
// //   headerTop: {
// //     marginTop: 15,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   profileContainer: { alignItems: "center", justifyContent: "center", marginTop: 35, paddingRight: 20, marginLeft: 320 },
// //   username: { fontSize: 14, color: "#fff", marginTop: 5, fontWeight: "bold" },
// //   headerText: { fontSize: 40, color: "#fff", fontWeight: "bold", marginTop: 10, textAlign: "center", marginLeft: -40 },
// //   scrollContainer: { flexDirection: "row", justifyContent: "flex-start", paddingHorizontal: 10, marginBottom: 10 },
// //   sectionTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 5, color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
// //   serviceCard: {
// //     width: 150,
// //     height: 150,
// //     marginRight: 10,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "flex-start",
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 2,
// //     marginTop: 10,
// //   },
// //   serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
// //   serviceDetails: { width: "100%", alignItems: "center" },
// //   serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
// //   servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
// //   categoriesContainer: { marginTop: 9, marginBottom: 80, paddingHorizontal: 10, },
// //   categoryIcon: { width: 25, height: 25, marginBottom: 5 },
// //   categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
// //   categoryCard: {
// //     width: "30%",
// //     height: 100,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 5,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 3,
// //   },
// //   categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
// //   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
// //   bottomNavigation: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     position: "absolute",
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "#004D40",
// //     paddingVertical: 10,
// //   },
// //   bottomNavItem: { alignItems: "center", flex: 1 },
// //   bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// //   bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// // });

// // export default MaleHomeScreen;
// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// //   TextInput,
// // } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { auth, db } from "../../firebaseConfig";
// // import { ref, get, onValue, query, orderByChild } from "firebase/database";
// // import { FontAwesome } from "@expo/vector-icons";

// // const MaleHomeScreen = () => {
// //   const navigation = useNavigation();
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [userName, setUserName] = useState("");
// //   const [userGender, setUserGender] = useState("");
// //   const [salonList, setSalonList] = useState([]);
// //   const [servicesList, setServicesList] = useState([]);
// //   const [userPreferences, setUserPreferences] = useState([]);
// //   const [priceRange, setPriceRange] = useState("500-3000"); // Default price range

// //   // Fetch User Data and Preferences
// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const user = auth.currentUser;
// //       if (user) {
// //         try {
// //           const userRef = ref(db, "users/" + user.uid);
// //           const snapshot = await get(userRef);
// //           if (snapshot.exists()) {
// //             const userData = snapshot.val();
// //             setUserName(userData.fullName || "User");
// //             setUserGender(userData.gender || "Unisex");

// //             const preferencesRef = ref(db, `userPreferences/${user.uid}`);
// //             const prefSnapshot = await get(preferencesRef);
// //             if (prefSnapshot.exists()) {
// //               const prefData = prefSnapshot.val();
// //               setUserPreferences(prefData.selectedServices || []);
// //               setPriceRange(prefData.priceRange || "500-3000"); // Set the price range
// //             }
// //           }
// //         } catch (error) {
// //           console.error("Error fetching user data:", error);
// //         }
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   // Fetch Salons based on Gender
// //   useEffect(() => {
// //     if (!userGender) return;

// //     const salonsRef = ref(db, "salons");
// //     const salonsQuery = query(salonsRef, orderByChild("salonType"));

// //     const unsubscribe = onValue(
// //       salonsQuery,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const salonsData = snapshot.val();
// //           const filteredSalons = Object.keys(salonsData)
// //             .map((key) => ({ id: key, ...salonsData[key] }))
// //             .filter(
// //               (salon) =>
// //                 salon.salonType.toLowerCase() === userGender.toLowerCase() ||
// //                 salon.salonType.toLowerCase() === "unisex"
// //             );

// //           setSalonList(filteredSalons);
// //         } else {
// //           setSalonList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching salons:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender]);

// //   // Fetch Services based on Matching Salon Owners, User Preferences, and Price Range
// //   useEffect(() => {
// //     if (!userGender || salonList.length === 0 || userPreferences.length === 0) return;

// //     const servicesRef = ref(db, "services");
// //     const unsubscribe = onValue(
// //       servicesRef,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const servicesData = snapshot.val();

// //           const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

// //           const filteredServices = Object.keys(servicesData)
// //             .map((key) => ({ id: key, ...servicesData[key] }))
// //             .filter(
// //               (service) =>
// //                 validOwnerIds.has(service.ownerId) &&
// //                 userPreferences.some((pref) => {
// //                   const serviceNameLower = service.serviceName.toLowerCase();
// //                   const prefLower = pref.toLowerCase();
// //                   return serviceNameLower.includes(prefLower) || prefLower.includes(serviceNameLower);
// //                 }) &&
// //                 isWithinPriceRange(service.price, priceRange) // Filter by price range
// //             );

// //           setServicesList(filteredServices);
// //         } else {
// //           setServicesList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching services:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender, salonList, userPreferences, priceRange]);

// //   // Helper function to check if a service's price is within the selected range
// //   const isWithinPriceRange = (price, range) => {
// //     const [min, max] = range.split("-").map(Number);
// //     return price >= min && price <= max;
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <View style={styles.headerTop}>
// //           {/* <Text style={styles.malePortal}>Male Portal</Text> */}
// //           <View style={styles.profileContainer}>
// //             <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
// //               <Image source={require("../../assets/images/user.png")} style={styles.profileIcon} />
// //             </TouchableOpacity>
// //             <Text style={styles.username}>{userName} </Text>
// //           </View>
// //         </View>
// //         <Text style={styles.headerText}>Find the best grooming services for you</Text>
// //       </View>

      

// //       {/* Personalized Picks */}
// //       <Text style={styles.sectionTitle}>Personalized Picks</Text>
// //       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
// //         {servicesList.map((service, index) => (
// //           <TouchableOpacity
// //             key={index}
// //             style={styles.serviceCard}
// //             onPress={() => navigation.navigate("RecommendedScreen", { service })}
// //           >
// //             <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
// //             <View style={styles.serviceDetails}>
// //               <Text style={styles.serviceName}>{service.serviceName}</Text>
// //               <Text style={styles.servicePrice}>Rs.{service.price}</Text>
// //             </View>
// //           </TouchableOpacity>
// //         ))}
// //       </ScrollView>

// //       {/* Top Picks For You Section */}
// //       <Text style={styles.sectionTitle}>Top Picks For You</Text>
// //       <View style={styles.categoriesContainer}>
// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
// //             <FontAwesome name="scissors" size={40} color="#E57373" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Haircuts</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
// //             <FontAwesome name="user-circle" size={40} color="#388E3C" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Shaving</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
// //             <FontAwesome name="leaf" size={40} color="#FFAB91" style={styles.categoryIcon} />
// //             <Text style={styles.categoryText}>Facial</Text>
// //           </TouchableOpacity>
// //         </View>
     
// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard}>
// //            <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" style={styles.categoryIcon}
// //             onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })} />
// //            <Text style={styles.categoryText}>Massage</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard}>
// //            <FontAwesome name="user" size={40} color="#80CBC4" style={styles.categoryIcon} 
// //              onPress={() => navigation.navigate("Malebeard", { category: "Beard" })}/>
// //              <Text style={styles.categoryText}>Beard Triming</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard}>
// //             <FontAwesome name="paint-brush" size={40} color="#8B4513" style={styles.categoryIcon}
// //             onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })} />
// //            <Text style={styles.categoryText}>Hair Color</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Bottom Navigation */}
// //         <View style={styles.bottomNavigation}>
// //           {[
// //             { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
// //             { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
// //             // { title: "Booking", image: require("../../assets/images/booking.png"), route: "BookingScreen" },
// //             { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
// //             { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
// //           ].map((navItem, index) => (
// //             <TouchableOpacity
// //               key={index}
// //               style={styles.bottomNavItem}
// //               onPress={() => navigation.navigate(navItem.route)}
// //             >
// //               <Image source={navItem.image} style={styles.bottomNavIcon} />
// //               <Text style={styles.bottomNavText}>{navItem.title}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#fff" },
// //   header: {
// //     padding: 110,
// //     backgroundColor: "#004D40",
// //     borderBottomLeftRadius: 40,
// //     borderBottomRightRadius: 40,
// //     paddingBottom: 50,
// //   },
// //   headerTop: {
// //     marginTop: 15,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  
// //   bottomNavigation: {
// //         flexDirection: "row",
// //         // justifyContent: "space-around",
// //         position: "absolute",
// //         bottom: -80,
// //         left: 0,
// //         right: 0,
// //         backgroundColor: "#004D40",
// //         paddingVertical: 10,
        
// //       },
// //   // bottomNavItem: { alignItems: "center", flex: 1 },
// //   // bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// //   // bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// //   bottomNavItem: { alignItems: "center", flex: 1 },
// //   bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// //   bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// //   malePortal: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// //   profileIcon: { width: 50, height: 67, borderRadius: 20 , marginLeft: 250,marginBottom: 20},
// //   username: { fontSize: 18, color: "#fff", marginTop: -2, fontWeight: "bold",marginLeft: 250 },
// //   headerText: { fontSize: 30, color: "#fff", fontWeight: "bold", marginTop: -80 , marginBottom:90, marginLeft:-90},
// //   profileContainer: { alignItems: "right" },
// //   searchContainer: { alignItems: "center", marginTop: -20 },
// //   searchBar: { width: "80%", backgroundColor: "#fff", borderRadius: 15, padding: 12, elevation: 10 },
// //   // 
// //   scrollContainer: { flexDirection: "row", justifyContent: "flex-start", paddingHorizontal: 10, marginBottom: 10 },
// //   sectionTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 5, color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
// //   serviceCard: {
// //     width: 150,
// //     height: 150,
// //     marginRight: 10,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "flex-start",
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 2,
// //     marginTop: 10,
// //   },
// //   serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
// //   serviceDetails: { width: "100%", alignItems: "center" },
// //   serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
// //   servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
// //   categoriesContainer: { marginTop: 9, marginBottom: 80, paddingHorizontal: 10, },
// //   categoryIcon: { width: 25, height: 25, marginBottom: 5 },
// //   categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
// //   categoryCard: {
// //     width: "30%",
// //     height: 100,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 5,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 3,
// //   },
// //   categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
// //   // loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
// //   // bottomNavigation: {
// //   //   flexDirection: "row",
// //   //   justifyContent: "space-around",
// //   //   position: "absolute",
// //   //   bottom: 0,
// //   //   left: 0,
// //   //   right: 0,
// //   //   backgroundColor: "#004D40",
// //   //   paddingVertical: 10,
// //   // },
// //   // bottomNavItem: { alignItems: "center", flex: 1 },
// //   // bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// //   // bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// // });

// // export default MaleHomeScreen;
// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   TouchableOpacity,
// //   ScrollView,
// //   TextInput,
// // } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { auth, db } from "../../firebaseConfig";
// // import { ref, get, onValue, query, orderByChild } from "firebase/database";
// // import { FontAwesome } from "@expo/vector-icons";

// // const MaleHomeScreen = () => {
// //   const navigation = useNavigation();
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [userName, setUserName] = useState("");
// //   const [userGender, setUserGender] = useState("");
// //   const [salonList, setSalonList] = useState([]);
// //   const [servicesList, setServicesList] = useState([]);
// //   const [userPreferences, setUserPreferences] = useState([]);
// //   const [priceRange, setPriceRange] = useState("500-3000"); // Default

// //   // Helper function for price range
// //   const isWithinPriceRange = (price, range) => {
// //     if (!price || isNaN(price)) return false;
// //     const [minStr, maxStr] = range.split("-");
// //     const min = parseInt(minStr);
// //     const max = maxStr === "+" ? Infinity : parseInt(maxStr);
// //     return price >= min && price <= max;
// //   };

// //   // Fetch user data and preferences
// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       const user = auth.currentUser;
// //       if (user) {
// //         try {
// //           const userRef = ref(db, "users/" + user.uid);
// //           const snapshot = await get(userRef);
// //           if (snapshot.exists()) {
// //             const userData = snapshot.val();
// //             setUserName(userData.fullName || "User");
// //             setUserGender(userData.gender || "Unisex");

// //             const preferencesRef = ref(db, `userPreferences/${user.uid}`);
// //             const prefSnapshot = await get(preferencesRef);
// //             if (prefSnapshot.exists()) {
// //               const prefData = prefSnapshot.val();
// //               setUserPreferences(prefData.selectedServices || []);
// //               setPriceRange(prefData.priceRange || "500-3000");
// //             }
// //           }
// //         } catch (error) {
// //           console.error("Error fetching user data:", error);
// //         }
// //       }
// //     };

// //     fetchUserData();
// //   }, []);

// //   // Fetch salons based on gender
// //   useEffect(() => {
// //     if (!userGender) return;

// //     const salonsRef = ref(db, "salons");
// //     const salonsQuery = query(salonsRef, orderByChild("salonType"));

// //     const unsubscribe = onValue(
// //       salonsQuery,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const salonsData = snapshot.val();
// //           const filteredSalons = Object.keys(salonsData)
// //             .map((key) => ({ id: key, ...salonsData[key] }))
// //             .filter(
// //               (salon) =>
// //                 salon.salonType.toLowerCase() === userGender.toLowerCase() ||
// //                 salon.salonType.toLowerCase() === "unisex"
// //             );

// //           setSalonList(filteredSalons);
// //         } else {
// //           setSalonList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching salons:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender]);

// //   // Fetch services based on salons, preferences, and price range
// //   useEffect(() => {
// //     if (!userGender || salonList.length === 0 || userPreferences.length === 0) return;

// //     const servicesRef = ref(db, "services");
// //     const unsubscribe = onValue(
// //       servicesRef,
// //       (snapshot) => {
// //         if (snapshot.exists()) {
// //           const servicesData = snapshot.val();
// //           const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

// //           const filteredServices = Object.keys(servicesData)
// //             .map((key) => ({ id: key, ...servicesData[key] }))
// //             .filter((service) => {
// //               if (!validOwnerIds.has(service.ownerId)) return false;
// //               const serviceNameLower = (service.serviceName || "").toLowerCase();
// //               const matchesPreference = userPreferences.some((pref) =>
// //                 serviceNameLower.includes(pref.toLowerCase())
// //               );
// //               if (!matchesPreference) return false;
// //               if (!isWithinPriceRange(Number(service.price), priceRange)) return false;
// //               return true;
// //             });

// //           console.log("Filtered personalized services count:", filteredServices.length);
// //           setServicesList(filteredServices);
// //         } else {
// //           setServicesList([]);
// //         }
// //       },
// //       (error) => {
// //         console.error("Error fetching services:", error);
// //       }
// //     );

// //     return () => unsubscribe();
// //   }, [userGender, salonList, userPreferences, priceRange]);

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <View style={styles.headerTop}>
// //           <View style={styles.profileContainer}>
// //             <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
// //               <Image source={require("../../assets/images/user.png")} style={styles.profileIcon} />
// //             </TouchableOpacity>
// //             <Text style={styles.username}>{userName}</Text>
// //           </View>
// //         </View>
// //         <Text style={styles.headerText}>Find the best grooming services for you</Text>
// //       </View>

// //       <Text style={styles.sectionTitle}>Personalized Picks</Text>
// //       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
// //         {servicesList.length > 0 ? (
// //           servicesList.map((service, index) => (
// //             <TouchableOpacity
// //               key={index}
// //               style={styles.serviceCard}
// //               onPress={() => navigation.navigate("RecommendedScreen", { service })}
// //             >
// //               <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
// //               <View style={styles.serviceDetails}>
// //                 <Text style={styles.serviceName}>{service.serviceName}</Text>
// //                 <Text style={styles.servicePrice}>Rs.{service.price}</Text>
// //               </View>
// //             </TouchableOpacity>
// //           ))
// //         ) : (
// //           <Text style={{ marginLeft: 10, color: "gray" }}>No personalized services found.</Text>
// //         )}
// //       </ScrollView>

// //       <Text style={styles.sectionTitle}>Top Picks For You</Text>
// //       <View style={styles.categoriesContainer}>
// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
// //             <FontAwesome name="scissors" size={40} color="#E57373" />
// //             <Text style={styles.categoryText}>Haircuts</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
// //             <FontAwesome name="user-circle" size={40} color="#388E3C" />
// //             <Text style={styles.categoryText}>Shaving</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
// //             <FontAwesome name="leaf" size={40} color="#FFAB91" />
// //             <Text style={styles.categoryText}>Facial</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.categoriesRow}>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })}>
// //             <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" />
// //             <Text style={styles.categoryText}>Massage</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malebeard", { category: "Beard" })}>
// //             <FontAwesome name="user" size={40} color="#80CBC4" />
// //             <Text style={styles.categoryText}>Beard Trimming</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })}>
// //             <FontAwesome name="paint-brush" size={40} color="#8B4513" />
// //             <Text style={styles.categoryText}>Hair Color</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.bottomNavigation}>
// //           {[
// //             { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
// //             { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
// //             { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
// //             { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
// //           ].map((navItem, index) => (
// //             <TouchableOpacity
// //               key={index}
// //               style={styles.bottomNavItem}
// //               onPress={() => navigation.navigate(navItem.route)}
// //             >
// //               <Image source={navItem.image} style={styles.bottomNavIcon} />
// //               <Text style={styles.bottomNavText}>{navItem.title}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#fff" },
// //   header: {
// //     padding: 110,
// //     backgroundColor: "#004D40",
// //     borderBottomLeftRadius: 40,
// //     borderBottomRightRadius: 40,
// //     paddingBottom: 50,
// //   },
// //   headerTop: {
// //     marginTop: 15,
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },
// //   profileContainer: { alignItems: "right" },
// //   profileIcon: { width: 50, height: 67, borderRadius: 20, marginLeft: 250, marginBottom: 20 },
// //   username: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 250 },
// //   headerText: { fontSize: 30, color: "#fff", fontWeight: "bold", marginTop: -80, marginBottom: 90, marginLeft: -90 },
// //   sectionTitle: { fontSize: 24, fontWeight: "bold", color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
// //   scrollContainer: { flexDirection: "row", paddingHorizontal: 10, marginBottom: 10 },
// //   serviceCard: {
// //     width: 150,
// //     height: 150,
// //     marginRight: 10,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "flex-start",
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 2,
// //     marginTop: 10,
// //   },
// //   serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
// //   serviceDetails: { width: "100%", alignItems: "center" },
// //   serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
// //   servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
// //   categoriesContainer: { marginTop: 9, marginBottom: 80, paddingHorizontal: 10 },
// //   categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
// //   categoryCard: {
// //     width: "30%",
// //     height: 100,
// //     backgroundColor: "white",
// //     borderRadius: 12,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 5,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 8,
// //     borderColor: "#00665C",
// //     borderWidth: 3,
// //   },
// //   categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
// //   bottomNavigation: {
// //     flexDirection: "row",
// //     position: "absolute",
// //     bottom: -80,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: "#004D40",
// //     paddingVertical: 10,
// //   },
// //   bottomNavItem: { alignItems: "center", flex: 1 },
// //   bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
// //   bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// // });

// // export default MaleHomeScreen;
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { auth, db } from "../../firebaseConfig";
// import { ref, get, onValue, query, orderByChild } from "firebase/database";
// import { FontAwesome } from "@expo/vector-icons";

// const MaleHomeScreen = () => {
//   const navigation = useNavigation();
//   const [userName, setUserName] = useState("");
//   const [userGender, setUserGender] = useState("");
//   const [salonList, setSalonList] = useState([]);
//   const [servicesList, setServicesList] = useState([]);
//   const [userPreferences, setUserPreferences] = useState([]);
//   const [priceRange, setPriceRange] = useState("500-3000"); // Default

//   const isWithinPriceRange = (price, range) => {
//     if (!price || isNaN(price)) return false;
//     const [minStr, maxStr] = range.split("-");
//     const min = parseInt(minStr);
//     const max = maxStr === "+" ? Infinity : parseInt(maxStr);
//     return price >= min && price <= max;
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         try {
//           const userRef = ref(db, "users/" + user.uid);
//           const snapshot = await get(userRef);
//           if (snapshot.exists()) {
//             const userData = snapshot.val();
//             setUserName(userData.fullName || "User");
//             setUserGender(userData.gender || "Unisex");

//             // ✅ Fetch preferences
//             const preferencesRef = ref(db, `users/${user.uid}/preferences`);
//             const prefSnapshot = await get(preferencesRef);
//             if (prefSnapshot.exists()) {
//               const prefData = prefSnapshot.val();
//               const selected = prefData.selectedServices || [];

//               if (selected.length > 0) {
//                 // User has selected services (updated)
//                 setUserPreferences(selected);
//               } else if (prefData.scores) {
//                 // No selected yet, use initial scores as preferences
//                 const initialPrefs = Object.keys(prefData.scores);
//                 setUserPreferences(initialPrefs);
//               } else {
//                 setUserPreferences([]);
//               }

//               setPriceRange(prefData.priceRange || "500-3000");
//             }
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     if (!userGender) return;

//     const salonsRef = ref(db, "salons");
//     const salonsQuery = query(salonsRef, orderByChild("salonType"));

//     const unsubscribe = onValue(
//       salonsQuery,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const salonsData = snapshot.val();
//           const filteredSalons = Object.keys(salonsData)
//             .map((key) => ({ id: key, ...salonsData[key] }))
//             .filter(
//               (salon) =>
//                 salon.salonType.toLowerCase() === userGender.toLowerCase() ||
//                 salon.salonType.toLowerCase() === "unisex"
//             );

//           setSalonList(filteredSalons);
//         } else {
//           setSalonList([]);
//         }
//       },
//       (error) => {
//         console.error("Error fetching salons:", error);
//       }
//     );

//     return () => unsubscribe();
//   }, [userGender]);

//   useEffect(() => {
//     if (!userGender || salonList.length === 0 || userPreferences.length === 0) return;

//     const servicesRef = ref(db, "services");
//     const unsubscribe = onValue(
//       servicesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const servicesData = snapshot.val();
//           const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

//           const filteredServices = Object.keys(servicesData)
//             .map((key) => ({ id: key, ...servicesData[key] }))
//             .filter((service) => {
//               if (!validOwnerIds.has(service.ownerId)) return false;
//               const serviceNameLower = (service.serviceName || "").toLowerCase();
//               const matchesPreference = userPreferences.some((pref) =>
//                 serviceNameLower.includes(pref.toLowerCase())
//               );
//               if (!matchesPreference) return false;
//               if (!isWithinPriceRange(Number(service.price), priceRange)) return false;
//               return true;
//             });

//           console.log("Filtered personalized services count:", filteredServices.length);
//           setServicesList(filteredServices);
//         } else {
//           setServicesList([]);
//         }
//       },
//       (error) => {
//         console.error("Error fetching services:", error);
//       }
//     );

//     return () => unsubscribe();
//   }, [userGender, salonList, userPreferences, priceRange]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.headerTop}>
//           <View style={styles.profileContainer}>
//             <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
//               <Image source={require("../../assets/images/user.png")} style={styles.profileIcon} />
//             </TouchableOpacity>
//             <Text style={styles.username}>{userName}</Text>
//           </View>
//         </View>
//         <Text style={styles.headerText}>Find the best grooming services for you</Text>
//       </View>

//       <Text style={styles.sectionTitle}>Personalized Picks</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
//         {servicesList.length > 0 ? (
//           servicesList.map((service, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.serviceCard}
//               onPress={() => navigation.navigate("RecommendedScreen", { service })}
//             >
//               <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
//               <View style={styles.serviceDetails}>
//                 <Text style={styles.serviceName}>{service.serviceName}</Text>
//                 <Text style={styles.servicePrice}>Rs.{service.price}</Text>
//               </View>
//             </TouchableOpacity>
//           ))
//         ) : (
//           <Text style={{ marginLeft: 10, color: "gray" }}>No personalized services found.</Text>
//         )}
//       </ScrollView>

//       <Text style={styles.sectionTitle}>Top Picks For You</Text>
//       <View style={styles.categoriesContainer}>
//         <View style={styles.categoriesRow}>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
//             <FontAwesome name="scissors" size={40} color="#E57373" />
//             <Text style={styles.categoryText}>Haircuts</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
//             <FontAwesome name="user-circle" size={40} color="#388E3C" />
//             <Text style={styles.categoryText}>Shaving</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
//             <FontAwesome name="leaf" size={40} color="#FFAB91" />
//             <Text style={styles.categoryText}>Facial</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.categoriesRow}>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })}>
//             <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" />
//             <Text style={styles.categoryText}>Massage</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malebeard", { category: "Beard" })}>
//             <FontAwesome name="user" size={40} color="#80CBC4" />
//             <Text style={styles.categoryText}>Beard Trimming</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })}>
//             <FontAwesome name="paint-brush" size={40} color="#8B4513" />
//             <Text style={styles.categoryText}>Hair Color</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.bottomNavigation}>
//           {[
//             { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
//             { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
//             { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
//             { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
//           ].map((navItem, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.bottomNavItem}
//               onPress={() => navigation.navigate(navItem.route)}
//             >
//               <Image source={navItem.image} style={styles.bottomNavIcon} />
//               <Text style={styles.bottomNavText}>{navItem.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: {
//     padding: 110,
//     backgroundColor: "#004D40",
//     borderBottomLeftRadius: 40,
//     borderBottomRightRadius: 40,
//     paddingBottom: 50,
//   },
//   headerTop: {
//     marginTop: 15,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   profileContainer: { alignItems: "right" },
//   profileIcon: { width: 50, height: 67, borderRadius: 20, marginLeft: 250, marginBottom: 20 },
//   username: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 250 },
//   headerText: { fontSize: 30, color: "#fff", fontWeight: "bold", marginTop: -80, marginBottom: 90, marginLeft: -90 },
//   sectionTitle: { fontSize: 24, fontWeight: "bold", color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
//   scrollContainer: { flexDirection: "row", paddingHorizontal: 10, marginBottom: 10 },
//   serviceCard: {
//     width: 150,
//     height: 150,
//     marginRight: 10,
//     backgroundColor: "white",
//     borderRadius: 12,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//     borderColor: "#00665C",
//     borderWidth: 2,
//     marginTop: 10,
//   },
//   serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
//   serviceDetails: { width: "100%", alignItems: "center" },
//   serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
//   servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
//   categoriesContainer: { marginTop: 9, marginBottom: 80, paddingHorizontal: 10 },
//   categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
//   categoryCard: {
//     width: "30%",
//     height: 100,
//     backgroundColor: "white",
//     borderRadius: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 8,
//     borderColor: "#00665C",
//     borderWidth: 3,
//   },
//   categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
//   bottomNavigation: {
//     flexDirection: "row",
//     position: "absolute",
//     bottom: -80,
//     left: 0,
//     right: 0,
//     backgroundColor: "#004D40",
//     paddingVertical: 10,
//   },
//   bottomNavItem: { alignItems: "center", flex: 1 },
//   bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
//   bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
// });

// export default MaleHomeScreen;
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import { ref, get, onValue, query, orderByChild } from "firebase/database";
import { FontAwesome } from "@expo/vector-icons";

const MaleHomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const [salonList, setSalonList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [userPreferences, setUserPreferences] = useState([]);
  const [priceRange, setPriceRange] = useState("500-3000"); // Default

  // Helper function for price range
  const isWithinPriceRange = (price, range) => {
    if (!price || isNaN(price)) return false;
    const [minStr, maxStr] = range.split("-");
    const min = parseInt(minStr);
    const max = maxStr === "+" ? Infinity : parseInt(maxStr);
    return price >= min && price <= max;
  };

  // Fetch user data and preferences
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userRef = ref(db, "users/" + user.uid);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserName(userData.fullName || "User");
            setUserGender(userData.gender || "Unisex");

            // const preferencesRef = ref(db, userPreferences/${user.uid});
            const preferencesRef = ref(db, `userPreferences/${user.uid}`);

            const prefSnapshot = await get(preferencesRef);
            if (prefSnapshot.exists()) {
              const prefData = prefSnapshot.val();
              setUserPreferences(prefData.selectedServices || []);
              setPriceRange(prefData.priceRange || "500-3000");
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  // Fetch salons based on gender
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
            .map((key) => ({ id: key, ...salonsData[key] }))
            .filter(
              (salon) =>
                salon.salonType.toLowerCase() === userGender.toLowerCase() ||
                salon.salonType.toLowerCase() === "unisex"
            );

          setSalonList(filteredSalons);
        } else {
          setSalonList([]);
        }
      },
      (error) => {
        console.error("Error fetching salons:", error);
      }
    );

    return () => unsubscribe();
  }, [userGender]);

  // Fetch services based on salons, preferences, and price range
  useEffect(() => {
    if (!userGender || salonList.length === 0 || userPreferences.length === 0) return;

    const servicesRef = ref(db, "services");
    const unsubscribe = onValue(
      servicesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const servicesData = snapshot.val();
          const validOwnerIds = new Set(salonList.map((salon) => salon.ownerId));

          const filteredServices = Object.keys(servicesData)
            .map((key) => ({ id: key, ...servicesData[key] }))
            .filter((service) => {
              if (!validOwnerIds.has(service.ownerId)) return false;
              const serviceNameLower = (service.serviceName || "").toLowerCase();
              const matchesPreference = userPreferences.some((pref) =>
                serviceNameLower.includes(pref.toLowerCase())
              );
              if (!matchesPreference) return false;
              if (!isWithinPriceRange(Number(service.price), priceRange)) return false;
              return true;
            });

          console.log("Filtered personalized services count:", filteredServices.length);
          setServicesList(filteredServices);
        } else {
          setServicesList([]);
        }
      },
      (error) => {
        console.error("Error fetching services:", error);
      }
    );

    return () => unsubscribe();
  }, [userGender, salonList, userPreferences, priceRange]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
              <Image source={require("../../assets/images/user.png")} style={styles.profileIcon} />
            </TouchableOpacity>
            <Text style={styles.username}>{userName}</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Find the best grooming services for you</Text>
      </View>

      <Text style={styles.sectionTitle}>Personalized Picks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {servicesList.length > 0 ? (
          servicesList.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceCard}
              onPress={() => navigation.navigate("RecommendedScreen", { service })}
            >
              <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
              <View style={styles.serviceDetails}>
                <Text style={styles.serviceName}>{service.serviceName}</Text>
                <Text style={styles.servicePrice}>Rs.{service.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{ marginLeft: 10, color: "gray" }}>No personalized services found.</Text>
        )}
      </ScrollView>

      <Text style={styles.sectionTitle}>Top Picks For You</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircut", { category: "Haircuts" })}>
            <FontAwesome name="scissors" size={40} color="#E57373" />
            <Text style={styles.categoryText}>Haircuts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleShaving", { category: "MaleShaving" })}>
            <FontAwesome name="user-circle" size={40} color="#388E3C" />
            <Text style={styles.categoryText}>Shaving</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleFacial", { category: "Facials" })}>
            <FontAwesome name="leaf" size={40} color="#FFAB91" />
            <Text style={styles.categoryText}>Facial</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("MaleMassage", { category: "Massage" })}>
            <FontAwesome name="hand-scissors-o" size={40} color="#9575CD" />
            <Text style={styles.categoryText}>Massage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malebeard", { category: "Beard" })}>
            <FontAwesome name="user" size={40} color="#80CBC4" />
            <Text style={styles.categoryText}>Beard Trimming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Malehaircolor", { category: "HairColor" })}>
            <FontAwesome name="paint-brush" size={40} color="#8B4513" />
            <Text style={styles.categoryText}>Hair Color</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomNavigation}>
          {[
            { title: "Home", image: require("../../assets/images/home.png"), route: "MaleHomeScreen" },
            { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
            { title: "AI Chatbot", image: require("../../assets/images/chatbot.png"), route: "Chatbot" },
            { title: "Profile", image: require("../../assets/images/user.png"), route: "UserProfile" },
          ].map((navItem, index) => (
            <TouchableOpacity
              key={index}
              style={styles.bottomNavItem}
              onPress={() => navigation.navigate(navItem.route)}
            >
              <Image source={navItem.image} style={styles.bottomNavIcon} />
              <Text style={styles.bottomNavText}>{navItem.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    padding: 110,
    backgroundColor: "#004D40",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 50,
  },
  headerTop: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: { alignItems: "right" },
  profileIcon: { width: 50, height: 67, borderRadius: 20, marginLeft: 250, marginBottom: 20 },
  username: { fontSize: 18, color: "#fff", fontWeight: "bold", marginLeft: 250 },
  headerText: { fontSize: 30, color: "#fff", fontWeight: "bold", marginTop: -80, marginBottom: 90, marginLeft: -90 },
  sectionTitle: { fontSize: 24, fontWeight: "bold", color: "#004D40", marginLeft: 10, marginTop: 20, marginBottom: 10 },
  scrollContainer: { flexDirection: "row", paddingHorizontal: 10, marginBottom: 10 },
  serviceCard: {
    width: 150,
    height: 150,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderColor: "#00665C",
    borderWidth: 2,
    marginTop: 10,
  },
  serviceImage: { width: "100%", height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, marginBottom: 5 },
  serviceDetails: { width: "100%", alignItems: "center" },
  serviceName: { fontSize: 14, fontWeight: "bold", color: "#333", textAlign: "center" },
  servicePrice: { fontSize: 12, color: "red", marginBottom: 5 },
  categoriesContainer: { marginTop: 9, marginBottom: 80, paddingHorizontal: 10 },
  categoriesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  categoryCard: {
    width: "30%",
    height: 100,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderColor: "#00665C",
    borderWidth: 3,
  },
  categoryText: { fontSize: 11, fontWeight: "bold", color: "#333" },
  bottomNavigation: {
    flexDirection: "row",
    position: "absolute",
    bottom: -80,
    left: 0,
    right: 0,
    backgroundColor: "#004D40",
    paddingVertical: 10,
  },
  bottomNavItem: { alignItems: "center", flex: 1 },
  bottomNavIcon: { width: 24, height: 24, tintColor: "#fff" },
  bottomNavText: { fontSize: 10, fontWeight: "bold", color: "#fff" },
});

export default MaleHomeScreen;