// // // // // import React from "react";
// // // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // // import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back arrow

// // // // // const RecommendedScreen = () => {
// // // // //   const navigation = useNavigation();
// // // // //   const route = useRoute();
// // // // //   const { service } = route.params; // Get service from params
// // // // //   const ownerId = service.ownerId;  // Extract ownerId from service

// // // // //   const handleConfirmBooking = () => {
// // // // //     navigation.navigate("BookService", { service, ownerId }); // ✅ Pass ownerId
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       {/* Header Section */}
// // // // //       <View style={styles.header}>
// // // // //         {/* Go Back Button */}
// // // // //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// // // // //           <Ionicons name="arrow-back" size={28} color="#fff" />
// // // // //         </TouchableOpacity>

// // // // //         <Text style={styles.headerText}>Your Personalized Picks</Text>
// // // // //       </View>

// // // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // // //         <View style={styles.card}>
// // // // //           {service.images && service.images[0] ? (
// // // // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // // // //           ) : (
// // // // //             <Text>No Image Available</Text>
// // // // //           )}

// // // // //           <View style={styles.detailsContainer}>
// // // // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // // // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // // // //             <Text style={styles.serviceDescription}>
// // // // //               {service.description || "No description available."}
// // // // //             </Text>
// // // // //           </View>

// // // // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // // // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </ScrollView>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "#E8F5E9",
// // // // //   },
// // // // //   header: {
// // // // //     width: "100%",
// // // // //     height: 300,
// // // // //     backgroundColor: "#004D40",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     borderBottomLeftRadius: 30,
// // // // //     borderBottomRightRadius: 30,
// // // // //     elevation: 5,
// // // // //     marginBottom: 30,
// // // // //   },
// // // // //   backButton: {
// // // // //     position: "absolute",
// // // // //     left: 20,
// // // // //     top: 50,
// // // // //     padding: 10,
// // // // //   },
// // // // //   headerText: {
// // // // //     fontSize: 30,
// // // // //     fontWeight: "bold",
// // // // //     color: "#fff",
// // // // //   },
// // // // //   scrollContainer: {
// // // // //     flexGrow: 1,
// // // // //     alignItems: "center",
// // // // //     padding: 20,
// // // // //   },
// // // // //   card: {
// // // // //     width: "100%",
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 15,
// // // // //     padding: 15,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 3 },
// // // // //     shadowOpacity: 0.1,
// // // // //     shadowRadius: 4,
// // // // //     elevation: 4,
// // // // //     marginBottom: 30,
// // // // //     borderColor: "#00665C",
// // // // //     borderWidth: 5,
// // // // //   },
// // // // //   serviceImage: {
// // // // //     width: "100%",
// // // // //     height: 200,
// // // // //     borderRadius: 10,
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   detailsContainer: {
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   serviceName: {
// // // // //     fontSize: 22,
// // // // //     fontWeight: "bold",
// // // // //     color: "#004D40",
// // // // //     marginBottom: 5,
// // // // //   },
// // // // //   servicePrice: {
// // // // //     fontSize: 18,
// // // // //     color: "#E57373",
// // // // //     marginBottom: 5,
// // // // //   },
// // // // //   serviceDescription: {
// // // // //     fontSize: 16,
// // // // //     color: "#333",
// // // // //     lineHeight: 22,
// // // // //   },
// // // // //   confirmButton: {
// // // // //     backgroundColor: "#004D40",
// // // // //     padding: 12,
// // // // //     borderRadius: 10,
// // // // //     alignItems: "center",
// // // // //   },
// // // // //   confirmButtonText: {
// // // // //     fontSize: 18,
// // // // //     fontWeight: "bold",
// // // // //     color: "#fff",
// // // // //   },
// // // // // });

// // // // // export default RecommendedScreen;

// // // // import React from "react";
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // // // import { useNavigation, useRoute } from "@react-navigation/native";

// // // // const RecommendedScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const { service } = route.params; // Get service from params
// // // //   const ownerId = service.ownerId;  // Extract ownerId from service

// // // //   const handleConfirmBooking = () => {
// // // //     navigation.navigate("BookService", { service, ownerId }); // ✅ Pass ownerId
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       {/* Header Section */}
// // // //       <View style={styles.header}>
// // // //         <Text style={styles.headerText}>Your Personalized Picks</Text>
// // // //       </View>

// // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // //         <View style={styles.card}>
// // // //           {service.images && service.images[0] ? (
// // // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // // //           ) : (
// // // //             <Text>No Image Available</Text>
// // // //           )}

// // // //           <View style={styles.detailsContainer}>
// // // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // // //             <Text style={styles.serviceDescription}>
// // // //               {service.description || "No description available."}
// // // //             </Text>
// // // //           </View>

// // // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#E8F5E9",
// // // //   },
// // // //   header: {
// // // //     width: "100%",
// // // //     height: 300,
// // // //     backgroundColor: "#004D40",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderBottomLeftRadius: 30,
// // // //     borderBottomRightRadius: 30,
// // // //     elevation: 5,
// // // //     marginBottom: 30,
// // // //   },
// // // //   headerText: {
// // // //     fontSize: 30,
// // // //     fontWeight: "bold",
// // // //     color: "#fff",
// // // //   },
// // // //   scrollContainer: {
// // // //     flexGrow: 1,
// // // //     alignItems: "center",
// // // //     padding: 20,
// // // //   },
// // // //   card: {
// // // //     width: "100%",
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 15,
// // // //     padding: 15,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 3 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     elevation: 4,
// // // //     marginBottom: 30,
// // // //     borderColor: "#00665C",
// // // //     borderWidth: 5,
// // // //   },
// // // //   serviceImage: {
// // // //     width: "100%",
// // // //     height: 200,
// // // //     borderRadius: 10,
// // // //     marginBottom: 15,
// // // //   },
// // // //   detailsContainer: {
// // // //     marginBottom: 15,
// // // //   },
// // // //   serviceName: {
// // // //     fontSize: 22,
// // // //     fontWeight: "bold",
// // // //     color: "#004D40",
// // // //     marginBottom: 5,
// // // //   },
// // // //   servicePrice: {
// // // //     fontSize: 18,
// // // //     color: "#E57373",
// // // //     marginBottom: 5,
// // // //   },
// // // //   serviceDescription: {
// // // //     fontSize: 16,
// // // //     color: "#333",
// // // //     lineHeight: 22,
// // // //   },
// // // //   confirmButton: {
// // // //     backgroundColor: "#004D40",
// // // //     padding: 12,
// // // //     borderRadius: 10,
// // // //     alignItems: "center",
// // // //   },
// // // //   confirmButtonText: {
// // // //     fontSize: 18,
// // // //     fontWeight: "bold",
// // // //     color: "#fff",
// // // //   },
// // // // });

// // // // export default RecommendedScreen;

  
// // // // import React from "react";
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back arrow

// // // // const RecommendedScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const { service } = route.params; // Get service from params
// // // //   const ownerId = service.ownerId;  // Extract ownerId from service

// // // //   const handleConfirmBooking = () => {
// // // //     navigation.navigate("MalebookingScreen", { service, ownerId }); // ✅ Pass ownerId
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       {/* Header Section */}
// // // //       <View style={styles.header}>
// // // //         {/* Go Back Button */}
// // // //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// // // //           <Ionicons name="arrow-back" size={28} color="#fff" />
// // // //         </TouchableOpacity>

// // // //         <Text style={styles.headerText}>Your Personalized Picks</Text>
// // // //       </View>

// // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // //         <View style={styles.card}>
// // // //           {service.images && service.images[0] ? (
// // // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // // //           ) : (
// // // //             <Text>No Image Available</Text>
// // // //           )}

// // // //           <View style={styles.detailsContainer}>
// // // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // // //             <Text style={styles.serviceDescription}>
// // // //               {service.description || "No description available."}
// // // //             </Text>
// // // //           </View>

// // // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: "#E8F5E9",
// // // //   },
// // // //   header: {
// // // //     width: "100%",
// // // //     height: 300,
// // // //     backgroundColor: "#004D40",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderBottomLeftRadius: 30,
// // // //     borderBottomRightRadius: 30,
// // // //     elevation: 5,
// // // //     marginBottom: 30,
// // // //   },
// // // //   backButton: {
// // // //     position: "absolute",
// // // //     left: 20,
// // // //     top: 50,
// // // //     padding: 10,
// // // //   },
// // // //   headerText: {
// // // //     fontSize: 30,
// // // //     fontWeight: "bold",
// // // //     color: "#fff",
// // // //   },
// // // //   scrollContainer: {
// // // //     flexGrow: 1,
// // // //     alignItems: "center",
// // // //     padding: 20,
// // // //   },
// // // //   card: {
// // // //     width: "100%",
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 15,
// // // //     padding: 15,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 3 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     elevation: 4,
// // // //     marginBottom: 30,
// // // //     borderColor: "#00665C",
// // // //     borderWidth: 5,
// // // //   },
// // // //   serviceImage: {
// // // //     width: "100%",
// // // //     height: 200,
// // // //     borderRadius: 10,
// // // //     marginBottom: 15,
// // // //   },
// // // //   detailsContainer: {
// // // //     marginBottom: 15,
// // // //   },
// // // //   serviceName: {
// // // //     fontSize: 22,
// // // //     fontWeight: "bold",
// // // //     color: "#004D40",
// // // //     marginBottom: 5,
// // // //   },
// // // //   servicePrice: {
// // // //     fontSize: 18,
// // // //     color: "#E57373",
// // // //     marginBottom: 5,
// // // //   },
// // // //   serviceDescription: {
// // // //     fontSize: 16,
// // // //     color: "#333",
// // // //     lineHeight: 22,
// // // //   },
// // // //   confirmButton: {
// // // //     backgroundColor: "#004D40",
// // // //     padding: 12,
// // // //     borderRadius: 10,
// // // //     alignItems: "center",
// // // //   },
// // // //   confirmButtonText: {
// // // //     fontSize: 18,
// // // //     fontWeight: "bold",
// // // //     color: "#fff",
// // // //   },
// // // // });

// // // // export default RecommendedScreen;

// // // // import React from "react";
// // // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // import { Ionicons } from "@expo/vector-icons";

// // // // const RecommendedScreen = () => {
// // // //   const navigation = useNavigation();
// // // //   const route = useRoute();
// // // //   const { service } = route.params;
// // // //   const ownerId = service.ownerId;

// // // //   const handleConfirmBooking = () => {
// // // //     navigation.navigate("MalebookingScreen", { service, ownerId });
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// // // //           <Ionicons name="arrow-back" size={28} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerText}>Your Personalized Pick</Text>
// // // //       </View>

// // // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // // //         <View style={styles.card}>
// // // //           {service.images && service.images[0] ? (
// // // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // // //           ) : (
// // // //             <Text>No Image Available</Text>
// // // //           )}

// // // //           <View style={styles.detailsContainer}>
// // // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // // //             <Text style={styles.serviceDescription}>
// // // //               {service.description || "No description available."}
// // // //             </Text>
// // // //           </View>

// // // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: "#E8F5E9" },
// // // //   header: {
// // // //     width: "100%",
// // // //     height: 250,
// // // //     backgroundColor: "#004D40",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     borderBottomLeftRadius: 30,
// // // //     borderBottomRightRadius: 30,
// // // //     elevation: 5,
// // // //     marginBottom: 30,
// // // //   },
// // // //   backButton: { position: "absolute", left: 20, top: 50, padding: 10 },
// // // //   headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
// // // //   scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
// // // //   card: {
// // // //     width: "100%",
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 15,
// // // //     padding: 15,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 3 },
// // // //     shadowOpacity: 0.1,
// // // //     shadowRadius: 4,
// // // //     elevation: 4,
// // // //     borderColor: "#00665C",
// // // //     borderWidth: 5,
// // // //     marginBottom: 30,
// // // //   },
// // // //   serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
// // // //   detailsContainer: { marginBottom: 15 },
// // // //   serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
// // // //   servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
// // // //   serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
// // // //   confirmButton: {
// // // //     backgroundColor: "#004D40",
// // // //     padding: 12,
// // // //     borderRadius: 10,
// // // //     alignItems: "center",
// // // //   },
// // // //   confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// // // // });

// // // // export default RecommendedScreen;
// // // import React from "react";
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import { Ionicons } from "@expo/vector-icons";

// // // const RecommendedScreen = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { service } = route.params;

// // //   const ownerId = service.ownerId || "default_owner_id";
// // //   const salonId = service.salonId || "default_salon_id";
// // //   const salonName = service.salonName || "Default Salon";

// // //   const salon = {
// // //     id: salonId,
// // //     ownerId: ownerId,
// // //     salonName: salonName,
// // //   };

// // //   const handleConfirmBooking = () => {
// // //     navigation.navigate("MalebookingScreen", { service, salon });
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// // //           <Ionicons name="arrow-back" size={28} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerText}>Your Personalized Pick</Text>
// // //       </View>

// // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // //         <View style={styles.card}>
// // //           {service.images && service.images[0] ? (
// // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // //           ) : (
// // //             <Text>No Image Available</Text>
// // //           )}

// // //           <View style={styles.detailsContainer}>
// // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // //             <Text style={styles.serviceDescription}>
// // //               {service.description || "No description available."}
// // //             </Text>
// // //           </View>

// // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#E8F5E9" },
// // //   header: {
// // //     width: "100%",
// // //     height: 250,
// // //     backgroundColor: "#004D40",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     borderBottomLeftRadius: 30,
// // //     borderBottomRightRadius: 30,
// // //     elevation: 5,
// // //     marginBottom: 30,
// // //   },
// // //   backButton: { position: "absolute", left: 20, top: 50, padding: 10 },
// // //   headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
// // //   scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
// // //   card: {
// // //     width: "100%",
// // //     backgroundColor: "#fff",
// // //     borderRadius: 15,
// // //     padding: 15,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 3 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 4,
// // //     borderColor: "#00665C",
// // //     borderWidth: 5,
// // //     marginBottom: 30,
// // //   },
// // //   serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
// // //   detailsContainer: { marginBottom: 15 },
// // //   serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
// // //   servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
// // //   serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
// // //   confirmButton: {
// // //     backgroundColor: "#004D40",
// // //     padding: 12,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //   },
// // //   confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// // // });

// // // // export default RecommendedScreen;
// // // import React from "react";
// // // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import { getAuth } from "firebase/auth";
// // // import { updatePreference } from "../../utils/updatePreference"; // ✅ Correct import

// // // const RecommendedScreen = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { service } = route.params;

// // //   const ownerId = service.ownerId || "default_owner_id";
// // //   const salonId = service.salonId || "default_salon_id";
// // //   const salonName = service.salonName || "Default Salon";

// // //   const salon = {
// // //     id: salonId,
// // //     ownerId: ownerId,
// // //     salonName: salonName,
// // //   };

// // //   const handleConfirmBooking = async () => {
// // //     try {
// // //       const auth = getAuth();
// // //       const currentUser = auth.currentUser;
// // //       const uid = currentUser ? currentUser.uid : null;

// // //       if (!uid) {
// // //         Alert.alert("Error", "User not logged in");
// // //         return;
// // //       }

// // //       // ✅ Update preference on confirm booking (using same RL logic)
// // //       await updatePreference(uid, service.serviceName, 5); // Assume 5 as positive reward on booking

// // //       Alert.alert("Booking Confirmed!", "Your preference has been updated!");
// // //       navigation.navigate("MalebookingScreen", { service, salon });
// // //     } catch (error) {
// // //       console.error("❌ Error updating preference on booking:", error);
// // //       Alert.alert("Error", "Something went wrong while confirming booking");
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// // //           <Ionicons name="arrow-back" size={28} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerText}>Your Personalized Pick</Text>
// // //       </View>

// // //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// // //         <View style={styles.card}>
// // //           {service.images && service.images[0] ? (
// // //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// // //           ) : (
// // //             <Text>No Image Available</Text>
// // //           )}

// // //           <View style={styles.detailsContainer}>
// // //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// // //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// // //             <Text style={styles.serviceDescription}>
// // //               {service.description || "No description available."}
// // //             </Text>
// // //           </View>

// // //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// // //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: "#E8F5E9" },
// // //   header: {
// // //     width: "100%",
// // //     height: 250,
// // //     backgroundColor: "#004D40",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     borderBottomLeftRadius: 30,
// // //     borderBottomRightRadius: 30,
// // //     elevation: 5,
// // //     marginBottom: 30,
// // //   },
// // //   backButton: { position: "absolute", left: 20, top: 50, padding: 10 },
// // //   headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
// // //   scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
// // //   card: {
// // //     width: "100%",
// // //     backgroundColor: "#fff",
// // //     borderRadius: 15,
// // //     padding: 15,
// // //     shadowColor: "#000",
// // //     shadowOffset: { width: 0, height: 3 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 4,
// // //     borderColor: "#00665C",
// // //     borderWidth: 5,
// // //     marginBottom: 30,
// // //   },
// // //   serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
// // //   detailsContainer: { marginBottom: 15 },
// // //   serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
// // //   servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
// // //   serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
// // //   confirmButton: {
// // //     backgroundColor: "#004D40",
// // //     padding: 12,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //   },
// // //   confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// // // });

// // // export default RecommendedScreen;
// // import React from "react";
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { getAuth } from "firebase/auth";
// // import { updatePreference } from "../../utils/updatePreference"; // ✅ Correct import

// // const RecommendedScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { service } = route.params;

// //   const ownerId = service.ownerId || "default_owner_id";
// //   const salonId = service.salonId || "default_salon_id";
// //   const salonName = service.salonName || "Default Salon";

// //   const salon = {
// //     id: salonId,
// //     ownerId: ownerId,
// //     salonName: salonName,
// //   };

// //   const handleConfirmBooking = async () => {
// //     try {
// //       const auth = getAuth();
// //       const currentUser = auth.currentUser;
// //       const uid = currentUser ? currentUser.uid : null;

// //       if (!uid) {
// //         Alert.alert("Error", "User not logged in");
// //         return;
// //       }

// //       // ✅ Update preference on confirm booking with max reward
// //       await updatePreference(uid, service.serviceName, 5);

// //       Alert.alert("Booking Confirmed!", "Your preference has been updated and saved!");
// //       navigation.navigate("MalebookingScreen", { service, salon });
// //     } catch (error) {
// //       console.error("❌ Error updating preference on booking:", error);
// //       Alert.alert("Error", "Something went wrong while confirming booking");
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={28} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Your Personalized Pick</Text>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         <View style={styles.card}>
// //           {service.images && service.images[0] ? (
// //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// //           ) : (
// //             <Text>No Image Available</Text>
// //           )}

// //           <View style={styles.detailsContainer}>
// //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// //             <Text style={styles.serviceDescription}>
// //               {service.description || "No description available."}
// //             </Text>
// //           </View>

// //           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
// //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#E8F5E9" },
// //   header: {
// //     width: "100%",
// //     height: 250,
// //     backgroundColor: "#004D40",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderBottomLeftRadius: 30,
// //     borderBottomRightRadius: 30,
// //     elevation: 5,
// //     marginBottom: 30,
// //   },
// //   backButton: { position: "absolute", left: 20, top: 50, padding: 10 },
// //   headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
// //   scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
// //   card: {
// //     width: "100%",
// //     backgroundColor: "#fff",
// //     borderRadius: 15,
// //     padding: 15,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 3 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 4,
// //     borderColor: "#00665C",
// //     borderWidth: 5,
// //     marginBottom: 30,
// //   },
// //   serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
// //   detailsContainer: { marginBottom: 15 },
// //   serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
// //   servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
// //   serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
// //   confirmButton: {
// //     backgroundColor: "#004D40",
// //     padding: 12,
// //     borderRadius: 10,
// //     alignItems: "center",
// //   },
// //   confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// // });

// // export default RecommendedScreen;
// // import React, { useEffect } from "react";
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { getAuth } from "firebase/auth";
// // import { updatePreference } from "../../utils/updatePreference";

// // const RecommendedScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { service } = route.params;

// //   useEffect(() => {
// //     console.log("Recommended Service Details:", {
// //       name: service.serviceName,
// //       price: service.price,
// //       salon: service.salonName,
// //       owner: service.ownerId
// //     });
// //   }, [service]);

// //   const handleConfirmBooking = async () => {
// //     try {
// //       const auth = getAuth();
// //       const currentUser = auth.currentUser;
// //       const uid = currentUser ? currentUser.uid : null;

// //       if (!uid) {
// //         Alert.alert("Error", "User not logged in");
// //         return;
// //       }

// //       const success = await updatePreference(uid, service.serviceName, 5);
      
// //       if (success) {
// //         Alert.alert(
// //           "Booking Confirmed!",
// //           `Your booking for ${service.serviceName} has been confirmed and your preferences have been updated!`
// //         );
// //         navigation.navigate("MalebookingScreen", { 
// //           service,
// //           salon: {
// //             id: service.salonId,
// //             ownerId: service.ownerId,
// //             salonName: service.salonName
// //           }
// //         });
// //       } else {
// //         throw new Error("Failed to update preferences");
// //       }
// //     } catch (error) {
// //       console.error("Error confirming booking:", error);
// //       Alert.alert(
// //         "Error",
// //         error.message || "Something went wrong while confirming booking"
// //       );
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={28} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerText}>Your Personalized Pick</Text>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         <View style={styles.card}>
// //           {service.images && service.images[0] ? (
// //             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
// //           ) : (
// //             <View style={styles.noImageContainer}>
// //               <Text>No Image Available</Text>
// //             </View>
// //           )}

// //           <View style={styles.detailsContainer}>
// //             <Text style={styles.serviceName}>{service.serviceName}</Text>
// //             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
// //             <Text style={styles.salonName}>At: {service.salonName || "Salon"}</Text>
// //             <Text style={styles.serviceDescription}>
// //               {service.description || "No description available."}
// //             </Text>
// //           </View>

// //           <TouchableOpacity 
// //             style={styles.confirmButton} 
// //             onPress={handleConfirmBooking}
// //           >
// //             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: "#E8F5E9" },
// //   header: {
// //     width: "100%",
// //     height: 250,
// //     backgroundColor: "#004D40",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderBottomLeftRadius: 30,
// //     borderBottomRightRadius: 30,
// //     elevation: 5,
// //     marginBottom: 30,
// //     position: "relative"
// //   },
// //   backButton: { 
// //     position: "absolute", 
// //     left: 20, 
// //     top: 50, 
// //     padding: 10 
// //   },
// //   headerText: { 
// //     fontSize: 28, 
// //     fontWeight: "bold", 
// //     color: "#fff",
// //     marginTop: 40
// //   },
// //   scrollContainer: { 
// //     flexGrow: 1, 
// //     alignItems: "center", 
// //     padding: 20 
// //   },
// //   card: {
// //     width: "100%",
// //     backgroundColor: "#fff",
// //     borderRadius: 15,
// //     padding: 15,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 3 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 4,
// //     borderColor: "#00665C",
// //     borderWidth: 5,
// //     marginBottom: 30,
// //   },
// //   noImageContainer: {
// //     width: "100%",
// //     height: 200,
// //     backgroundColor: "#f0f0f0",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderRadius: 10,
// //     marginBottom: 15
// //   },
// //   serviceImage: { 
// //     width: "100%", 
// //     height: 200, 
// //     borderRadius: 10, 
// //     marginBottom: 15 
// //   },
// //   detailsContainer: { 
// //     marginBottom: 15 
// //   },
// //   serviceName: { 
// //     fontSize: 22, 
// //     fontWeight: "bold", 
// //     color: "#004D40", 
// //     marginBottom: 5 
// //   },
// //   salonName: {
// //     fontSize: 16,
// //     color: "#555",
// //     marginBottom: 10
// //   },
// //   servicePrice: { 
// //     fontSize: 18, 
// //     color: "#E57373", 
// //     marginBottom: 5 
// //   },
// //   serviceDescription: { 
// //     fontSize: 16, 
// //     color: "#333", 
// //     lineHeight: 22 
// //   },
// //   confirmButton: {
// //     backgroundColor: "#004D40",
// //     padding: 12,
// //     borderRadius: 10,
// //     alignItems: "center",
// //     marginTop: 10
// //   },
// //   confirmButtonText: { 
// //     fontSize: 18, 
// //     fontWeight: "bold", 
// //     color: "#fff" 
// //   },
// // });

// // export default RecommendedScreen;

// //update to show the selected services 
// // import React, { useEffect, useState } from "react";
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, FlatList } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { getAuth } from "firebase/auth";
// // import { updatePreference } from "../../utils/updatePreference";
// // import { ref, get } from "firebase/database";
// // import { db } from "../firebaseConfig";

// import React, { useEffect } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import { getAuth } from "firebase/auth";
// import { updatePreference } from "../../utils/updatePreference";

// const RecommendedScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { service } = route.params;
//   const [selectedServices, setSelectedServices] = useState([]);

//   useEffect(() => {
//     const fetchSelectedServices = async () => {
//       try {
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user) return;

//         const userRef = ref(db, `users/${user.uid}`);
//         const snapshot = await get(userRef);

//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           // Get services and ensure they're in consistent format
//           const services = data.preferences?.selectedServices || [];
//           setSelectedServices(services);
//         }
//       } catch (error) {
//         console.log("Error fetching services:", error);
//       }
//     };

//     fetchSelectedServices();
//   }, []);

//   const handleConfirmBooking = async () => {
//     try {
//       const auth = getAuth();
//       const currentUser = auth.currentUser;
//       const uid = currentUser ? currentUser.uid : null;

//       if (!uid) {
//         Alert.alert("Error", "User not logged in");
//         return;
//       }

//       const success = await updatePreference(uid, service.serviceName, 5);
      
//       if (success) {
//         Alert.alert(
//           "Booking Confirmed!",
//           `Your booking for ${service.serviceName} has been confirmed!`
//         );
//         navigation.navigate("MalebookingScreen", { 
//           service,
//           salon: {
//             id: service.salonId,
//             ownerId: service.ownerId,
//             salonName: service.salonName
//           }
//         });
//       } else {
//         throw new Error("Failed to update preferences");
//       }
//     } catch (error) {
//       console.error("Error confirming booking:", error);
//       Alert.alert(
//         "Error",
//         error.message || "Something went wrong while confirming booking"
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Your Personalized Pick</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.card}>
//           {service.images && service.images[0] ? (
//             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
//           ) : (
//             <View style={styles.noImageContainer}>
//               <Text>No Image Available</Text>
//             </View>
//           )}

//           <View style={styles.detailsContainer}>
//             <Text style={styles.serviceName}>{service.serviceName}</Text>
//             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
//             <Text style={styles.salonName}>At: {service.salonName || "Salon"}</Text>
//             <Text style={styles.serviceDescription}>
//               {service.description || "No description available."}
//             </Text>
//           </View>

//           <TouchableOpacity 
//             style={styles.confirmButton} 
//             onPress={handleConfirmBooking}
//           >
//             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
//           </TouchableOpacity>

//           {/* Display selected services */}
//           <View style={styles.selectedServicesContainer}>
//             <Text style={styles.selectedServicesTitle}>Your Selected Services:</Text>
//             {selectedServices.map((service, index) => (
//               <View key={index} style={styles.serviceItem}>
//                 <Text style={styles.serviceItemText}>{service}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#E8F5E9" },
//   header: {
//     width: "100%",
//     height: 250,
//     backgroundColor: "#004D40",
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     elevation: 5,
//     marginBottom: 30,
//     position: "relative"
//   },
//   backButton: { 
//     position: "absolute", 
//     left: 20, 
//     top: 50, 
//     padding: 10 
//   },
//   headerText: { 
//     fontSize: 28, 
//     fontWeight: "bold", 
//     color: "#fff",
//     marginTop: 40
//   },
//   scrollContainer: { 
//     flexGrow: 1, 
//     alignItems: "center", 
//     padding: 20 
//   },
//   card: {
//     width: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     borderColor: "#00665C",
//     borderWidth: 5,
//     marginBottom: 30,
//   },
//   noImageContainer: {
//     width: "100%",
//     height: 200,
//     backgroundColor: "#f0f0f0",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     marginBottom: 15
//   },
//   serviceImage: { 
//     width: "100%", 
//     height: 200, 
//     borderRadius: 10, 
//     marginBottom: 15 
//   },
//   detailsContainer: { 
//     marginBottom: 15 
//   },
//   serviceName: { 
//     fontSize: 22, 
//     fontWeight: "bold", 
//     color: "#004D40", 
//     marginBottom: 5 
//   },
//   salonName: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 10
//   },
//   servicePrice: { 
//     fontSize: 18, 
//     color: "#E57373", 
//     marginBottom: 5 
//   },
//   serviceDescription: { 
//     fontSize: 16, 
//     color: "#333", 
//     lineHeight: 22 
//   },
//   confirmButton: {
//     backgroundColor: "#004D40",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 10
//   },
//   confirmButtonText: { 
//     fontSize: 18, 
//     fontWeight: "bold", 
//     color: "#fff" 
//   },
//   selectedServicesContainer: {
//     marginTop: 20,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: "#eee"
//   },
//   selectedServicesTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#004D40",
//     marginBottom: 10
//   },
//   serviceItem: {
//     padding: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0"
//   },
//   serviceItemText: {
//     fontSize: 16,
//     color: "#333"
//   }
// });

// export default RecommendedScreen;


//update at the selected services for rating 
// import React, { useEffect } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import { getAuth } from "firebase/auth";
// import { updatePreference } from "../../utils/updatePreference";


// const RecommendedScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { service } = route.params;
//   const [userPreferences, setUserPreferences] = useState({
//     selectedServices: [],
//     scores: {}
//   });

//   useEffect(() => {
//     const fetchUserPreferences = async () => {
//       try {
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user) return;

//         const userRef = ref(db, `users/${user.uid}`);
//         const snapshot = await get(userRef);

//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setUserPreferences({
//             selectedServices: data.preferences?.selectedServices || [],
//             scores: data.preferences?.scores || {}
//           });
//         }
//       } catch (error) {
//         console.log("Error fetching preferences:", error);
//       }
//     };

//     fetchUserPreferences();
//   }, []);

//   const handleConfirmBooking = async () => {
//     try {
//       const auth = getAuth();
//       const user = auth.currentUser;
//       if (!user) {
//         Alert.alert("Error", "User not logged in");
//         return;
//       }

//       const success = await updatePreference(user.uid, service.serviceName, 5);
      
//       if (success) {
//         Alert.alert(
//           "Booking Confirmed!",
//           `Your booking for ${service.serviceName} has been confirmed!`
//         );
//         navigation.navigate("MalebookingScreen", { 
//           service,
//           salon: {
//             id: service.salonId,
//             ownerId: service.ownerId,
//             salonName: service.salonName
//           }
//         });
//       }
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   // Combine all services (from questionnaire and ratings)
//   const allServices = [
//     ...new Set([
//       ...userPreferences.selectedServices,
//       ...Object.keys(userPreferences.scores).map(service => 
//         service.charAt(0).toUpperCase() + service.slice(1)
//       )
//     ])
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={28} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Your Personalized Pick</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.card}>
//           {service.images && service.images[0] ? (
//             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
//           ) : (
//             <View style={styles.noImageContainer}>
//               <Text>No Image Available</Text>
//             </View>
//           )}

//           <View style={styles.detailsContainer}>
//             <Text style={styles.serviceName}>{service.serviceName}</Text>
//             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
//             <Text style={styles.salonName}>At: {service.salonName || "Salon"}</Text>
//             <Text style={styles.serviceDescription}>
//               {service.description || "No description available."}
//             </Text>
//           </View>

//           <TouchableOpacity 
//             style={styles.confirmButton} 
//             onPress={handleConfirmBooking}
//           >
//             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
//           </TouchableOpacity>

//           {/* Display ALL services with scores */}
//           <View style={styles.selectedServicesContainer}>
//             <Text style={styles.selectedServicesTitle}>Your Preferred Services:</Text>
//             {allServices.map((serviceName, index) => {
//               const normalizedName = serviceName.toLowerCase();
//               const score = userPreferences.scores[normalizedName] || 0.5;
//               return (
//                 <View key={index} style={styles.serviceItem}>
//                   <Text style={styles.serviceItemText}>
//                     {serviceName} ({(score * 5).toFixed(1)}/5)
//                   </Text>
//                 </View>
//               );
//             })}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };






import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { updatePreference } from "../../utils/updatePreference";

const RecommendedScreen = ({ navigation, route }) => {
  const { service } = route.params;
  const [userPreferences, setUserPreferences] = useState({
    selectedServices: [],
    scores: {}
  });

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) return;

        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserPreferences({
            selectedServices: data.preferences?.selectedServices || [],
            scores: data.preferences?.scores || {}
          });
        }
      } catch (error) {
        console.log("Error fetching preferences:", error);
      }
    };

    fetchUserPreferences();
  }, []);

  const handleConfirmBooking = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        Alert.alert("Error", "User not logged in");
        return;
      }

      const success = await updatePreference(user.uid, service.serviceName, 5);
      
      if (success) {
        Alert.alert(
          "Booking Confirmed!",
          `Your booking for ${service.serviceName} has been confirmed!`
        );
        navigation.navigate("MalebookingScreen", { 
          service,
          salon: {
            id: service.salonId,
            ownerId: service.ownerId,
            salonName: service.salonName
          }
        });
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // Combine all services (from questionnaire and ratings)
  const allServices = [
    ...new Set([
      ...userPreferences.selectedServices,
      ...Object.keys(userPreferences.scores).map(service => 
        service.charAt(0).toUpperCase() + service.slice(1)
      )
    ])
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Personalized Pick</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {service.images && service.images[0] ? (
            <Image 
              source={{ uri: service.images[0] }} 
              style={styles.serviceImage} 
            />
          ) : (
            <View style={styles.noImageContainer}>
              <Text>No Image Available</Text>
            </View>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.serviceName}>{service.serviceName}</Text>
            <Text style={styles.servicePrice}>Rs. {service.price}</Text>
            <Text style={styles.salonName}>At: {service.salonName || "Salon"}</Text>
            <Text style={styles.serviceDescription}>
              {service.description || "No description available."}
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.confirmButton} 
            onPress={handleConfirmBooking}
          >
            <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
          </TouchableOpacity>

          {/* Display ALL services with scores */}
          <View style={styles.selectedServicesContainer}>
            <Text style={styles.selectedServicesTitle}>Your Preferred Services:</Text>
            {allServices.map((serviceName, index) => {
              const normalizedName = serviceName.toLowerCase();
              const score = userPreferences.scores[normalizedName] || 0.5;
              return (
                <View key={`service-${index}`} style={styles.serviceItem}>
                  <Text style={styles.serviceItemText}>
                    {serviceName} ({(score * 5).toFixed(1)}/5)
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9" },
  header: {
    width: "100%",
    height: 250,
    backgroundColor: "#004D40",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    marginBottom: 30,
    position: "relative"
  },
  backButton: { 
    position: "absolute", 
    left: 20, 
    top: 50, 
    padding: 10 
  },
  headerText: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#fff",
    marginTop: 40
  },
  scrollContainer: { 
    flexGrow: 1, 
    alignItems: "center", 
    padding: 20 
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderColor: "#00665C",
    borderWidth: 5,
    marginBottom: 30,
  },
  noImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15
  },
  serviceImage: { 
    width: "100%", 
    height: 200, 
    borderRadius: 10, 
    marginBottom: 15 
  },
  detailsContainer: { 
    marginBottom: 15 
  },
  serviceName: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#004D40", 
    marginBottom: 5 
  },
  salonName: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10
  },
  servicePrice: { 
    fontSize: 18, 
    color: "#E57373", 
    marginBottom: 5 
  },
  serviceDescription: { 
    fontSize: 16, 
    color: "#333", 
    lineHeight: 22 
  },
  confirmButton: {
    backgroundColor: "#004D40",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  confirmButtonText: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#fff" 
  },
  selectedServicesContainer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  },
  selectedServicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004D40",
    marginBottom: 10
  },
  serviceItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0"
  },
  serviceItemText: {
    fontSize: 16,
    color: "#333"
  }
});

export default RecommendedScreen;