
// // import React, { useState } from "react";
// // import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
// // import { Picker } from "@react-native-picker/picker";
// // import { useNavigation } from "@react-navigation/native";
// // import { ref, set } from "firebase/database";
// // import { auth, db } from "../../firebaseConfig";
// // import { Checkbox } from "react-native-paper";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // // Only main categories (no subcategories or nested services)
// // const servicesCategories = [
// //   "Haircut",
// //   "Hairstyling",
// //   "Hair Treatments",
// //   "Hair Color",
// //   "Beard",
// //   "Shaving",
// //   "Facial",
// //   "Skin Care",
// //   "Massage",
// //   "Makeup & Grooming"
// // ];

// // const MaleQuestionaaire = () => {
// //   const navigation = useNavigation();
// //   const [selectedServices, setSelectedServices] = useState([]);
// //   const [salonType, setSalonType] = useState("Home Salon");

// //   const toggleService = (service) => {
// //     setSelectedServices((prev) =>
// //       prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
// //     );
// //   };

// //   const handleSave = async () => {
// //     if (selectedServices.length === 0) {
// //       Alert.alert("Please select at least one service");
// //       return;
// //     }
// //     try {
// //       const user = auth.currentUser;
// //       if (!user) {
// //         Alert.alert("User not logged in");
// //         return;
// //       }

// //       const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
// //       await set(userPreferenceRef, {
// //         userId: user.uid,
// //         gender: "Male",
// //         selectedServices,
// //         salonType,
// //         questionnaireCompleted: true, // Set to true after saving
// //         timestamp: new Date().toISOString(),
// //       });

// //       await AsyncStorage.setItem("userGender", "Male");
// //       Alert.alert("Preferences saved successfully!");
// //       navigation.navigate("MaleHomeScreen");
// //     } catch (error) {
// //       Alert.alert("Error saving data", error.message);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Tailor Your Grooming Experience</Text>
// //       <ScrollView style={styles.scrollContainer}>
// //         {servicesCategories.map((category, index) => (
// //           <View key={index} style={styles.checkboxContainer}>
// //             <Checkbox
// //               status={selectedServices.includes(category) ? "checked" : "unchecked"}
// //               onPress={() => toggleService(category)}
// //             />
// //             <Text style={styles.serviceText}>{category}</Text>
// //           </View>
// //         ))}
// //         <View style={styles.formGroup}>
// //           <Text style={styles.label}>Service Type:</Text>
// //           <View style={styles.inputField}>
// //             <Picker
// //               selectedValue={salonType || "Home Salon"}
// //               onValueChange={(itemValue) => setSalonType(itemValue)}
// //             >
// //               <Picker.Item label="Home Salon" value="Home Salon" />
// //               <Picker.Item label="In Salon" value="In Salon" />
// //               <Picker.Item label="Both" value="Both" />
// //             </Picker>
// //           </View>
// //         </View>
// //       </ScrollView>
// //       <TouchableOpacity onPress={handleSave} style={styles.button}>
// //         <Text style={styles.buttonText}>Save Preferences</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: "#f9f9f9",
// //   },
// //   header: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "white",
// //     backgroundColor: "#004D40",
// //     padding: 15,
// //     textAlign: "center",
// //     borderRadius: 8,
// //     marginBottom: 15,
// //   },
// //   scrollContainer: {
// //     flex: 1,
// //     marginBottom: 20,
// //   },
// //   checkboxContainer: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 15,
// //     padding: 10,
// //     backgroundColor: "#e0f2f1",
// //     borderRadius: 8,
// //   },
// //   serviceText: {
// //     fontSize: 16,
// //     color: "#004D40",
// //     marginLeft: 10,
// //   },
// //   formGroup: {
// //     marginBottom: 20,
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#004D40",
// //     marginBottom: 8,
// //   },
// //   inputField: {
// //     backgroundColor: "#fff",
// //     borderRadius: 8,
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     padding: 10,
// //   },
// //   button: {
// //     backgroundColor: "#004D40",
// //     padding: 15,
// //     borderRadius: 8,
// //     alignItems: "center",
// //   },
// //   buttonText: {
// //     color: "#fff",
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// // });

// // export default MaleQuestionaaire;
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { useNavigation } from "@react-navigation/native";
// import { ref, set } from "firebase/database";
// import { auth, db } from "../../firebaseConfig";
// import { Checkbox } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// // Only main categories (no subcategories or nested services)
// const servicesCategories = [
//   "Haircut",
//   "Hairstyling",
//   "Hair Treatments",
//   "Hair Color",
//   "Beard",
//   "Shaving",
//   "Facial",
//   "Skin Care",
//   "Massage",
//   "Makeup & Grooming"
// ];

// // Price range options
// const priceRanges = [
//   { label: "500 to 3000", value: "500-3000" },
//   { label: "3000 to 5000", value: "3000-5000" },
//   { label: "5000 to 8000", value: "5000-8000" },
//   { label: "8000+", value: "8000+" },
// ];

// const MaleQuestionnaire = () => {
//   const navigation = useNavigation();
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [salonType, setSalonType] = useState("Home Salon");
//   const [selectedPriceRange, setSelectedPriceRange] = useState("500-3000"); // Default price range

//   const toggleService = (service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
//     );
//   };

//   const handleSave = async () => {
//     if (selectedServices.length === 0) {
//       Alert.alert("Please select at least one service");
//       return;
//     }
//     try {
//       const user = auth.currentUser;
//       if (!user) {
//         Alert.alert("User not logged in");
//         return;
//       }

//       const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
//       await set(userPreferenceRef, {
//         userId: user.uid,
//         gender: "Male",
//         selectedServices,
//         salonType,
//         priceRange: selectedPriceRange, // Save selected price range
//         questionnaireCompleted: true, // Set to true after saving
//         timestamp: new Date().toISOString(),
//       });

//       await AsyncStorage.setItem("userGender", "Male");
//       Alert.alert("Preferences saved successfully!");
//       navigation.navigate("MaleHomeScreen");
//     } catch (error) {
//       Alert.alert("Error saving data", error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Tailor Your Grooming Experience</Text>
//       <ScrollView style={styles.scrollContainer}>
//         {servicesCategories.map((category, index) => (
//           <View key={index} style={styles.checkboxContainer}>
//             <Checkbox
//               status={selectedServices.includes(category) ? "checked" : "unchecked"}
//               onPress={() => toggleService(category)}
//             />
//             <Text style={styles.serviceText}>{category}</Text>
//           </View>
//         ))}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Service Type:</Text>
//           <View style={styles.inputField}>
//             <Picker
//               selectedValue={salonType || "Home Salon"}
//               onValueChange={(itemValue) => setSalonType(itemValue)}
//             >
//               <Picker.Item label="Home Salon" value="Home Salon" />
//               <Picker.Item label="In Salon" value="In Salon" />
//               <Picker.Item label="Both" value="Both" />
//             </Picker>
//           </View>
//         </View>

//         {/* Price Range Section */}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Price Range:</Text>
//           <View style={styles.inputField}>
//             <Picker
//               selectedValue={selectedPriceRange}
//               onValueChange={(itemValue) => setSelectedPriceRange(itemValue)}
//             >
//               {priceRanges.map((range, index) => (
//                 <Picker.Item key={index} label={range.label} value={range.value} />
//               ))}
//             </Picker>
//           </View>
//         </View>
//       </ScrollView>
//       <TouchableOpacity onPress={handleSave} style={styles.button}>
//         <Text style={styles.buttonText}>Save Preferences</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "white",
//     backgroundColor: "#004D40",
//     padding: 15,
//     textAlign: "center",
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   scrollContainer: {
//     flex: 1,
//     marginBottom: 20,
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: "#e0f2f1",
//     borderRadius: 8,
//   },
//   serviceText: {
//     fontSize: 16,
//     color: "#004D40",
//     marginLeft: 10,
//   },
//   formGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#004D40",
//     marginBottom: 8,
//   },
//   inputField: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//   },
//   button: {
//     backgroundColor: "#004D40",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default MaleQuestionnaire;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from "firebase/database";
import { auth, db } from "../../firebaseConfig";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const servicesCategories = [
  "Haircut",
  "Hairstyling",
  "Hair Treatments",
  "Hair Color",
  "Beard",
  "Shaving",
  "Facial",
  "Skin Care",
  "Massage",
  "Makeup & Grooming"
];

const priceRanges = [
  { label: "500 to 3000", value: "500-3000" },
  { label: "3000 to 5000", value: "3000-5000" },
  { label: "5000 to 8000", value: "5000-8000" },
  { label: "8000+", value: "8000+" },
];

const MaleQuestionnaire = () => {
  const navigation = useNavigation();
  const [selectedServices, setSelectedServices] = useState([]);
  const [salonType, setSalonType] = useState("Home Salon");
  const [selectedPriceRange, setSelectedPriceRange] = useState("500-3000");

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSave = async () => {
    if (selectedServices.length === 0) {
      Alert.alert("Please select at least one service");
      return;
    }
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert("User not logged in");
        return;
      }

      const userPreferenceRef = ref(db, `userPreferences/${user.uid}`);
      await set(userPreferenceRef, {
        userId: user.uid,
        gender: "Male",
        selectedServices,
        salonType,
        priceRange: selectedPriceRange,
        questionnaireCompleted: true,
        timestamp: new Date().toISOString(),
      });

      await AsyncStorage.setItem("userGender", "Male");
      Alert.alert("Preferences saved successfully!");
      navigation.navigate("MaleHomeScreen");
    } catch (error) {
      Alert.alert("Error saving data", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tailor Your Grooming Experience</Text>
      <ScrollView style={styles.scrollContainer}>
        {servicesCategories.map((category, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <Checkbox
              status={selectedServices.includes(category) ? "checked" : "unchecked"}
              onPress={() => toggleService(category)}
            />
            <Text style={styles.serviceText}>{category}</Text>
          </View>
        ))}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Service Type:</Text>
          <View style={styles.inputField}>
            <Picker
              selectedValue={salonType}
              onValueChange={(itemValue) => setSalonType(itemValue)}
            >
              <Picker.Item label="Home Salon" value="Home Salon" />
              <Picker.Item label="In Salon" value="In Salon" />
              <Picker.Item label="Both" value="Both" />
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Price Range:</Text>
          <View style={styles.inputField}>
            <Picker
              selectedValue={selectedPriceRange}
              onValueChange={(itemValue) => setSelectedPriceRange(itemValue)}
            >
              {priceRanges.map((range, index) => (
                <Picker.Item key={index} label={range.label} value={range.value} />
              ))}
            </Picker>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Save Preferences</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#004D40",
    padding: 15,
    textAlign: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  scrollContainer: { flex: 1, marginBottom: 20 },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#e0f2f1",
    borderRadius: 8,
  },
  serviceText: { fontSize: 16, color: "#004D40", marginLeft: 10 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", color: "#004D40", marginBottom: 8 },
  inputField: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  button: {
    backgroundColor: "#004D40",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default MaleQuestionnaire;
