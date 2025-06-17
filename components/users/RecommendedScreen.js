// // import React from "react";
// // import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back arrow

// // const RecommendedScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { service } = route.params; // Get service from params
// //   const ownerId = service.ownerId;  // Extract ownerId from service

// //   const handleConfirmBooking = () => {
// //     navigation.navigate("BookService", { service, ownerId }); // ✅ Pass ownerId
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Header Section */}
// //       <View style={styles.header}>
// //         {/* Go Back Button */}
// //         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //           <Ionicons name="arrow-back" size={28} color="#fff" />
// //         </TouchableOpacity>

// //         <Text style={styles.headerText}>Your Personalized Picks</Text>
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
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#E8F5E9",
// //   },
// //   header: {
// //     width: "100%",
// //     height: 300,
// //     backgroundColor: "#004D40",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderBottomLeftRadius: 30,
// //     borderBottomRightRadius: 30,
// //     elevation: 5,
// //     marginBottom: 30,
// //   },
// //   backButton: {
// //     position: "absolute",
// //     left: 20,
// //     top: 50,
// //     padding: 10,
// //   },
// //   headerText: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// //   scrollContainer: {
// //     flexGrow: 1,
// //     alignItems: "center",
// //     padding: 20,
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
// //     marginBottom: 30,
// //     borderColor: "#00665C",
// //     borderWidth: 5,
// //   },
// //   serviceImage: {
// //     width: "100%",
// //     height: 200,
// //     borderRadius: 10,
// //     marginBottom: 15,
// //   },
// //   detailsContainer: {
// //     marginBottom: 15,
// //   },
// //   serviceName: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#004D40",
// //     marginBottom: 5,
// //   },
// //   servicePrice: {
// //     fontSize: 18,
// //     color: "#E57373",
// //     marginBottom: 5,
// //   },
// //   serviceDescription: {
// //     fontSize: 16,
// //     color: "#333",
// //     lineHeight: 22,
// //   },
// //   confirmButton: {
// //     backgroundColor: "#004D40",
// //     padding: 12,
// //     borderRadius: 10,
// //     alignItems: "center",
// //   },
// //   confirmButtonText: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#fff",
// //   },
// // });

// // export default RecommendedScreen;

// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";

// const RecommendedScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { service } = route.params; // Get service from params
//   const ownerId = service.ownerId;  // Extract ownerId from service

//   const handleConfirmBooking = () => {
//     navigation.navigate("BookService", { service, ownerId }); // ✅ Pass ownerId
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Your Personalized Picks</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.card}>
//           {service.images && service.images[0] ? (
//             <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
//           ) : (
//             <Text>No Image Available</Text>
//           )}

//           <View style={styles.detailsContainer}>
//             <Text style={styles.serviceName}>{service.serviceName}</Text>
//             <Text style={styles.servicePrice}>Rs. {service.price}</Text>
//             <Text style={styles.serviceDescription}>
//               {service.description || "No description available."}
//             </Text>
//           </View>

//           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
//             <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E8F5E9",
//   },
//   header: {
//     width: "100%",
//     height: 300,
//     backgroundColor: "#004D40",
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     elevation: 5,
//     marginBottom: 30,
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: "center",
//     padding: 20,
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
//     marginBottom: 30,
//     borderColor: "#00665C",
//     borderWidth: 5,
//   },
//   serviceImage: {
//     width: "100%",
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   detailsContainer: {
//     marginBottom: 15,
//   },
//   serviceName: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#004D40",
//     marginBottom: 5,
//   },
//   servicePrice: {
//     fontSize: 18,
//     color: "#E57373",
//     marginBottom: 5,
//   },
//   serviceDescription: {
//     fontSize: 16,
//     color: "#333",
//     lineHeight: 22,
//   },
//   confirmButton: {
//     backgroundColor: "#004D40",
//     padding: 12,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   confirmButtonText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });

// export default RecommendedScreen;

  
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the back arrow

const RecommendedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params; // Get service from params
  const ownerId = service.ownerId;  // Extract ownerId from service

  const handleConfirmBooking = () => {
    navigation.navigate("MalebookingScreen", { service, ownerId }); // ✅ Pass ownerId
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Go Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Your Personalized Picks</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {service.images && service.images[0] ? (
            <Image source={{ uri: service.images[0] }} style={styles.serviceImage} />
          ) : (
            <Text>No Image Available</Text>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.serviceName}>{service.serviceName}</Text>
            <Text style={styles.servicePrice}>Rs. {service.price}</Text>
            <Text style={styles.serviceDescription}>
              {service.description || "No description available."}
            </Text>
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
            <Text style={styles.confirmButtonText}>Confirm Your Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },
  header: {
    width: "100%",
    height: 300,
    backgroundColor: "#004D40",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    marginBottom: 30,
  },
  backButton: {
    position: "absolute",
    left: 20,
    top: 50,
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
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
    marginBottom: 30,
    borderColor: "#00665C",
    borderWidth: 5,
  },
  serviceImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#004D40",
    marginBottom: 5,
  },
  servicePrice: {
    fontSize: 18,
    color: "#E57373",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  confirmButton: {
    backgroundColor: "#004D40",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default RecommendedScreen;

