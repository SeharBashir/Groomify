

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../firebaseConfig";
import { ref, get, onValue, query, orderByChild } from "firebase/database";
import { FontAwesome } from "@expo/vector-icons";

const UserHomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("Female");
  const [salonList, setSalonList] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [userPreferences, setUserPreferences] = useState({ 
    selectedServices: [], 
    priceRange: "500-3000",
    salonType: "Home Salon" // Added salonType to state
  });
  const [loading, setLoading] = useState(true);

  // Fetch User Data and Preferences
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

            const preferencesRef = ref(db, `userPreferences/${user.uid}`);
            const prefSnapshot = await get(preferencesRef);
            if (prefSnapshot.exists()) {
              const prefData = prefSnapshot.val();
              setUserPreferences({
                selectedServices: prefData.selectedServices || [],
                salonType: prefData.salonType || "Home Salon",
                priceRange: prefData.priceRange || "500-3000",
              });
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, []);

  // Fetch Salons based on Gender and Salon Type
  useEffect(() => {
    if (!userGender || !userPreferences.salonType) return;

    const salonsRef = ref(db, "salons");
    const salonsQuery = query(salonsRef, orderByChild("salonType"));

    const unsubscribe = onValue(
      salonsQuery,
      (snapshot) => {
        if (snapshot.exists()) {
          const salonsData = snapshot.val();
          const filteredSalons = Object.keys(salonsData)
            .map((key) => ({ id: key, ...salonsData[key] }))
            .filter((salon) => {
              // Filter by gender
              const genderMatch = 
                salon.salonType.toLowerCase() === userGender.toLowerCase() ||
                salon.salonType.toLowerCase() === "unisex";
              
              // Filter by salon type preference
              const salonTypeMatch = 
                userPreferences.salonType === "Both" ||
                salon.salonType.toLowerCase() === userPreferences.salonType.toLowerCase() ||
                (userPreferences.salonType === "Home Salon" && salon.salonType.toLowerCase().includes("home")) ||
                (userPreferences.salonType === "In Salon" && salon.salonType.toLowerCase().includes("salon"));

              return genderMatch && salonTypeMatch;
            });

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
  }, [userGender, userPreferences.salonType]);

  // Fetch Services based on Matching Salon Owners, User Preferences, Price Range and Salon Type
  useEffect(() => {
    if (!userGender || salonList.length === 0 || userPreferences.selectedServices.length === 0) return;

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
              // Filter by matching salon owners
              if (!validOwnerIds.has(service.ownerId)) return false;

              // Filter by user's selected services
              const matchesService = userPreferences.selectedServices.some((pref) => {
                const serviceNameLower = service.serviceName.toLowerCase();
                const prefLower = pref.toLowerCase();
                return serviceNameLower.includes(prefLower) || prefLower.includes(serviceNameLower);
              });

              if (!matchesService) return false;

              // Filter by price range
              const [minPrice, maxPrice] = userPreferences.priceRange.split("-").map(Number);
              const priceMatch = userPreferences.priceRange === "8000+" 
                ? service.price >= 8000 
                : service.price >= minPrice && service.price <= maxPrice;

              // Filter by salon type
              const salon = salonList.find(s => s.ownerId === service.ownerId);
              const salonTypeMatch = salon && (
                userPreferences.salonType === "Both" ||
                salon.salonType.toLowerCase() === userPreferences.salonType.toLowerCase() ||
                (userPreferences.salonType === "Home Salon" && salon.salonType.toLowerCase().includes("home")) ||
                (userPreferences.salonType === "In Salon" && salon.salonType.toLowerCase().includes("salon"))
              );

              return priceMatch && salonTypeMatch;
            });

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
  }, [userGender, salonList, userPreferences]);

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
        <View style={styles.headerTop}>
          {/* <Text style={styles.femalePortal}>Female Portal</Text> */}
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
              <Image source={require("../../assets/images/user.png")} style={styles.profileIcon} />
            </TouchableOpacity>
            <Text style={styles.username}>{userName} </Text>
          </View>
        </View>
        <Text style={styles.headerText}>Find the best beauty services for you</Text>
      </View>

      

      {/* Personalized Picks */}
      <Text style={styles.sectionTitle}>Personalized Picks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {servicesList.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceCard}
            onPress={() => navigation.navigate("FemaleRecommendedScreen", { service })}
          >
            <Image source={{ uri: service.images?.[0] || "" }} style={styles.serviceImage} />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{service.serviceName}</Text>
              <Text style={styles.servicePrice}>Rs.{service.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Picks For You Section */}
      <Text style={styles.sectionTitle}>Top Picks For You</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Haircut", { category: "Haircut" })}>
            <FontAwesome name="scissors" size={40} color="#E57373" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Haircut</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Nails", { category: "Nails" })}>
            <FontAwesome name="paint-brush" size={40} color="#388E3C" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Nails</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Facial", { category: "Facial" })}>
            <FontAwesome name="leaf" size={40} color="#FFAB91" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Facial</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesRow}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Coloring", { category: "Coloring" })}>
            <FontAwesome name="paint-brush" size={40} color="#9575CD" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Coloring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Spa", { category: "Spa" })}>
            <FontAwesome name="spa" size={40} color="#80CBC4" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Spa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate("Waxing", { category: "Waxing" })}>
            <FontAwesome name="tint" size={40} color="#8B4513" style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Waxing</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {[
          { title: "Home", image: require("../../assets/images/home.png"), route: "UserHomeScreen" },
          { title: "Salon", image: require("../../assets/images/salon.png"), route: "SalonList" },
          //{ title: "Booking", image: require("../../assets/images/booking.png"), route: "BookingScreen" },
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
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Light background color
  },
  header: {
    padding: 30,
    backgroundColor: "#004D40", // Teal header color
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 110, // Reduced padding bottom
    marginBottom:10
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
    marginTop:70
  },
  username: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop:78
  },
  headerText: {
    fontSize: 30,
    fontWeight: 120,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginTop:30,
  },
  searchContainer: {
    alignItems: "center",
    marginTop: -20,
    marginBottom: 20,
  },
  searchBar: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#004D40",
    marginLeft: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  serviceCard: {
    width: 130, // Increased card width
    height: 150, // Increased card height
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
   
  },
  serviceImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  serviceDetails: {
    padding: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign:'center'
  },
  servicePrice: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
    textAlign:'center'
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 90, // Adjusted for bottom navigation

  },
  categoriesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  
  categoryCard: {
    width: "30%",
    height: 90, // Reduced height
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    padding: 10, // Added padding
    borderColor: "#00665C",
    borderWidth:3
  },
  categoryIcon: {
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#004D40",
    paddingVertical: 10,
    height: 60, // Increased height
  },
  bottomNavItem: {
    alignItems: "center",
    flex: 1,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
    marginBottom: 5,
  },
  bottomNavText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserHomeScreen;