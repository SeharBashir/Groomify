
// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { AntDesign } from "@expo/vector-icons";
// import { db } from "../../firebaseConfig";
// import { ref, onValue } from "firebase/database";

// const FemaleRecommendedScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { service } = route.params;

//   const [salonData, setSalonData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!service.ownerId) {
//       setLoading(false);
//       return;
//     }

//     const salonsRef = ref(db, "salons");
//     const unsubscribe = onValue(
//       salonsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const salons = snapshot.val();
//           const matchedSalon = Object.entries(salons).find(
//             ([_, salon]) => salon.ownerId === service.ownerId
//           );
//           if (matchedSalon) {
//             setSalonData({
//               id: matchedSalon[0],
//               salonName: matchedSalon[1].salonName,
//               ownerId: matchedSalon[1].ownerId,
//             });
//           }
//         }
//         setLoading(false);
//       },
//       (error) => {
//         console.error("Error fetching salon data:", error);
//         setLoading(false);
//       }
//     );

//     return () => unsubscribe();
//   }, [service.ownerId]);

//   const handleConfirmBooking = () => {
//     if (!service.ownerId) {
//       Alert.alert("Error", "Owner ID is missing. Unable to proceed with booking.");
//       return;
//     }
//     navigation.navigate("BookService", {
//       service: { ...service, ownerId: service.ownerId },
//       salon: {
//         id: salonData?.id || service.salonId || "Unknown",
//         salonName: salonData?.salonName || service.salonName || "Unknown",
//         ownerId: service.ownerId,
//       },
//     });
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#004D40" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <AntDesign name="arrowleft" size={30} color="white" />
//         </TouchableOpacity>
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
//             <Text style={styles.salonName}>Salon: {salonData?.salonName || "Unknown"}</Text>
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
//   container: { flex: 1, backgroundColor: "#E8F5E9" },
//   loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
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
//     flexDirection: "row",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   backButton: { position: "absolute", left: 20, top: 80 },
//   headerText: { fontSize: 30, fontWeight: "bold", color: "#fff", textAlign: "center", flex: 1 },
//   scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
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
//   serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
//   detailsContainer: { marginBottom: 15 },
//   serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
//   salonName: { fontSize: 18, color: "#333", marginBottom: 5 },
//   servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
//   serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
//   confirmButton: { backgroundColor: "#004D40", padding: 12, borderRadius: 10, alignItems: "center" },
//   confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
// });

// export default FemaleRecommendedScreen;
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { updatePreference } from "../../utils/updatePreference"; // ✅ Reuse same utility

const FemaleRecommendedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params;

  const [salonData, setSalonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!service.ownerId) {
      setLoading(false);
      return;
    }

    const salonsRef = ref(db, "salons");
    const unsubscribe = onValue(
      salonsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const salons = snapshot.val();
          const matchedSalon = Object.entries(salons).find(
            ([_, salon]) =>
              salon.ownerId === service.ownerId &&
              (salon.salonType.toLowerCase() === "female" || salon.salonType.toLowerCase() === "unisex")
          );

          if (matchedSalon) {
            setSalonData({
              id: matchedSalon[0],
              salonName: matchedSalon[1].salonName,
              ownerId: matchedSalon[1].ownerId,
            });
          }
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching salon data:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [service.ownerId]);

  const handleConfirmBooking = async () => {
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      const uid = currentUser ? currentUser.uid : null;

      if (!uid) {
        Alert.alert("Error", "User not logged in");
        return;
      }

      // ✅ Update preference with reward on confirm booking
      await updatePreference(uid, service.serviceName, 5);

      Alert.alert("Booking Confirmed!", "Your preference has been updated and saved!");
      navigation.navigate("FemalebookingScreen", {
        service,
        salon: {
          id: salonData?.id || "Unknown",
          salonName: salonData?.salonName || "Unknown",
          ownerId: service.ownerId,
        },
      });
    } catch (error) {
      console.error("❌ Error updating preference on booking:", error);
      Alert.alert("Error", "Something went wrong while confirming booking");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#004D40" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Personalized Pick</Text>
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
            <Text style={styles.salonName}>Salon: {salonData?.salonName || "Unknown"}</Text>
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
  container: { flex: 1, backgroundColor: "#E8F5E9" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
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
  },
  backButton: { position: "absolute", left: 20, top: 50, padding: 10 },
  headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
  scrollContainer: { flexGrow: 1, alignItems: "center", padding: 20 },
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
  serviceImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  detailsContainer: { marginBottom: 15 },
  serviceName: { fontSize: 22, fontWeight: "bold", color: "#004D40", marginBottom: 5 },
  salonName: { fontSize: 18, color: "#333", marginBottom: 5 },
  servicePrice: { fontSize: 18, color: "#E57373", marginBottom: 5 },
  serviceDescription: { fontSize: 16, color: "#333", lineHeight: 22 },
  confirmButton: {
    backgroundColor: "#004D40",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});

export default FemaleRecommendedScreen;
