// // import React, { useState } from "react";
// // import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
// // import { Picker } from "@react-native-picker/picker";
// // import { useNavigation } from "@react-navigation/native";
// // import { ref, set, push } from "firebase/database";
// // import { db } from "../../firebaseConfig";
// // import { Checkbox } from "react-native-paper";
// // import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// // const servicesList = [
// //   "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing",
// //   "Makeup", "Threading", "Massage",  "Hair Spa", "Scalp Treatment",
// //   "Keratin Treatment",  "Eyebrow Shaping", "Bridal Makeup",
// //   "Mehendi", "Nail Art", "Body Scrub", "Tanning",
// //   "Hair Extensions", "Lash Lifting", "Detox Facial", "Hot Oil Treatment"
// // ];

// // const FemaleQuestionaaire = () => {
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
// //       Alert.alert("Error", "Please select at least one service.");
// //       return;
// //     }
// //     try {
// //       const newPreferenceRef = push(ref(db, "userPreferences"));
// //       await set(newPreferenceRef, {
// //         gender: "Female", // Hardcoded as Female since this is the FemaleQuestionaaire
// //         selectedServices,
// //         salonType,
// //         timestamp: new Date().toISOString(),
// //       });

// //       await AsyncStorage.setItem("userGender", "Female"); // Save gender in AsyncStorage
// //       Alert.alert("Success", "Preferences saved successfully!");

// //       // Navigate to the home screen after saving
// //       navigation.navigate("UserHomeScreen");
// //     } catch (error) {
// //       Alert.alert("Error", error.message);
// //     }
// //   };

// //   return (
// //     <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
// //       <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
// //         Beauty Preferences
// //       </Text>

// //       <Text style={{ fontSize: 18, marginTop: 10 }}>Select Services:</Text>
// //       {servicesList.map((service, index) => (
// //         <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
// //           <Checkbox
// //             status={selectedServices.includes(service) ? "checked" : "unchecked"}
// //             onPress={() => toggleService(service)}
// //           />
// //           <Text>{service}</Text>
// //         </View>
// //       ))}

// //       <Text style={{ fontSize: 18, marginTop: 10 }}>Service Type:</Text>
// //       <Picker selectedValue={salonType} onValueChange={(itemValue) => setSalonType(itemValue)}>
// //         <Picker.Item label="Home Salon" value="Home Salon" />
// //         <Picker.Item label="In Salon" value="In Salon" />
// //       </Picker>

// //       <TouchableOpacity
// //         onPress={handleSave}
// //         style={{ marginTop: 20, backgroundColor: "#ff6f61", padding: 15, borderRadius: 5 }}
// //       >
// //         <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
// //           Save Preferences
// //         </Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // export default FemaleQuestionaaire;
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { useNavigation } from "@react-navigation/native";
// import { ref, set } from "firebase/database";
// import { db } from "../../firebaseConfig";
// import { Checkbox } from "react-native-paper";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const servicesList = [
//   "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing",
//   "Makeup", "Threading", "Massage", "Hair Spa", "Scalp Treatment",
//   "Keratin Treatment", "Eyebrow Shaping", "Bridal Makeup",
//   "Mehendi", "Nail Art", "Body Scrub", "Tanning",
//   "Hair Extensions", "Lash Lifting", "Detox Facial", "Hot Oil Treatment"
// ];

// const priceRanges = [
//   { label: "500 to 3000", value: "500-3000" },
//   { label: "3000 to 5000", value: "3000-5000" },
//   { label: "5000 to 8000", value: "5000-8000" },
//   { label: "8000+", value: "8000+" },
// ];

// const FemaleQuestionaaire = () => {
//   const navigation = useNavigation();
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [salonType, setSalonType] = useState("Home Salon");
//   const [selectedPriceRange, setSelectedPriceRange] = useState("500-3000");

//   const toggleService = (service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
//     );
//   };

//   const handleSave = async () => {
//     if (selectedServices.length === 0) {
//       Alert.alert("Error", "Please select at least one service.");
//       return;
//     }
//     try {
//       const userId = await AsyncStorage.getItem("userId");
//       if (!userId) {
//         throw new Error("User ID not found.");
//       }
//       const userPreferenceRef = ref(db, `userPreferences/${userId}`);
//       await set(userPreferenceRef, {
//         gender: "Female",
//         selectedServices,
//         salonType,
//         priceRange: selectedPriceRange,
//         questionnaireCompleted: true,
//         timestamp: new Date().toISOString(),
//       });
//       await AsyncStorage.setItem("userGender", "Female");
//       await AsyncStorage.setItem("questionnaireCompleted", "true");
//       Alert.alert("Success", "Preferences saved successfully!");
//       navigation.navigate("UserHomeScreen");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Beauty Preferences</Text>
//       <ScrollView style={styles.scrollContainer}>
//         {servicesList.map((service, index) => (
//           <View key={index} style={styles.checkboxContainer}>
//             <Checkbox
//               status={selectedServices.includes(service) ? "checked" : "unchecked"}
//               onPress={() => toggleService(service)}
//             />
//             <Text style={styles.serviceText}>{service}</Text>
//           </View>
//         ))}
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Service Type:</Text>
//           <View style={styles.inputField}>
//             <Picker selectedValue={salonType} onValueChange={(itemValue) => setSalonType(itemValue)}>
//               <Picker.Item label="Home Salon" value="Home Salon" />
//               <Picker.Item label="In Salon" value="In Salon" />
              
//             </Picker>
//           </View>
//         </View>
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
//     width: "100%", // Full width
//     alignSelf: "stretch", // Ensure it stretches full width
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

// export default FemaleQuestionaaire;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const servicesList = [
  "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing",
  "Makeup", "Threading", "Massage", "Hair Spa", "Scalp Treatment",
  "Keratin Treatment", "Eyebrow Shaping", "Bridal Makeup",
  "Mehendi", "Nail Art", "Body Scrub", "Tanning",
  "Hair Extensions", "Lash Lifting", "Detox Facial", "Hot Oil Treatment"
];

const priceRanges = [
  { label: "500 to 3000", value: "500-3000" },
  { label: "3000 to 5000", value: "3000-5000" },
  { label: "5000 to 8000", value: "5000-8000" },
  { label: "8000+", value: "8000+" },
];

const FemaleQuestionaaire = () => {
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
      Alert.alert("Error", "Please select at least one service.");
      return;
    }
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID not found.");
      }
      const userPreferenceRef = ref(db, `userPreferences/${userId}`);
      await set(userPreferenceRef, {
        gender: "Female",
        selectedServices,
        salonType,
        priceRange: selectedPriceRange,
        questionnaireCompleted: true,
        timestamp: new Date().toISOString(),
      });
      await AsyncStorage.setItem("userGender", "Female");
      await AsyncStorage.setItem("questionnaireCompleted", "true");
      Alert.alert("Success", "Preferences saved successfully!");
      navigation.navigate("UserHomeScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beauty Preferences</Text>
      <ScrollView style={styles.scrollContainer}>
        {servicesList.map((service, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <Checkbox
              status={selectedServices.includes(service) ? "checked" : "unchecked"}
              onPress={() => toggleService(service)}
            />
            <Text style={styles.serviceText}>{service}</Text>
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#004D40",
    padding: 15,
    textAlign: "center",
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
    alignSelf: "stretch",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#e0f2f1",
    borderRadius: 8,
  },
  serviceText: {
    fontSize: 16,
    color: "#004D40",
    marginLeft: 10,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#004D40",
    marginBottom: 8,
  },
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
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FemaleQuestionaaire;