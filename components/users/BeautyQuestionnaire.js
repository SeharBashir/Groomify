// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { useNavigation } from "@react-navigation/native";
// import { ref, push } from "firebase/database";
// import { db } from '../../firebaseConfig';
// import { Checkbox } from "react-native-paper";

// const servicesList = [
//   "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing", "Makeup", "Threading", "Massage",
//   "Beard Trim", "Hair Spa", "Scalp Treatment", "Keratin Treatment", "Shaving", "Eyebrow Shaping", "Bridal Makeup",
//   "Groom Makeup", "Mehendi", "Nail Art", "Body Scrub", "Tanning", "Hair Extensions", "Lash Lifting", "Detox Facial",
//   "Hot Oil Treatment"
// ];

// const BeautyQuestionnaire = () => {
//   const navigation = useNavigation();
//   const [gender, setGender] = useState("Male");
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [priceRange, setPriceRange] = useState("");
//   const [salonType, setSalonType] = useState("Home Salon");

//   const toggleService = (service) => {
//     setSelectedServices(prev =>
//       prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
//     );
//   };

//   const handleSave = async () => {
//     if (selectedServices.length === 0 || !priceRange) {
//       Alert.alert("Please fill all fields");
//       return;
//     }
//     try {
//       const newPreferenceRef = push(ref(db, "userPreferences"));
//       await newPreferenceRef.set({
//         gender,
//         selectedServices,
//         priceRange,
//         salonType,
//         timestamp: new Date().toISOString(),
//       });
//       Alert.alert("Preferences saved successfully!");
//       navigation.navigate("Home");
//     } catch (error) {
//       Alert.alert("Error saving data", error.message);
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Beauty Preferences</Text>
      
//       <Text style={{ fontSize: 18 }}>Select Gender:</Text>
//       <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
//         <Picker.Item label="Male" value="Male" />
//         <Picker.Item label="Female" value="Female" />
//       </Picker>
      
//       <Text style={{ fontSize: 18, marginTop: 10 }}>Select Services:</Text>
//       {servicesList.map((service, index) => (
//         <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
//           <Checkbox
//             status={selectedServices.includes(service) ? "checked" : "unchecked"}
//             onPress={() => toggleService(service)}
//           />
//           <Text>{service}</Text>
//         </View>
//       ))}
      
//       <Text style={{ fontSize: 18, marginTop: 10 }}>Price Range ($):</Text>
//       <TextInput
//         placeholder="e.g., 20-50"
//         style={{ borderWidth: 1, padding: 10, marginTop: 5, borderRadius: 5 }}
//         keyboardType="numeric"
//         value={priceRange}
//         onChangeText={setPriceRange}
//       />
      
//       <Text style={{ fontSize: 18, marginTop: 10 }}>Service Type:</Text>
//       <Picker selectedValue={salonType} onValueChange={(itemValue) => setSalonType(itemValue)}>
//         <Picker.Item label="Home Salon" value="Home Salon" />
//         <Picker.Item label="In Salon" value="In Salon" />
//       </Picker>
      
//       <TouchableOpacity
//         onPress={handleSave}
//         style={{ marginTop: 20, backgroundColor: "#ff6f61", padding: 15, borderRadius: 5 }}
//       >
//         <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>Save Preferences</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default BeautyQuestionnaire;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { ref, set, push } from "firebase/database";
import { db } from '../../firebaseConfig';
import { Checkbox } from "react-native-paper";

const servicesList = [
  "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing", "Makeup", "Threading", "Massage",
  "Beard Trim", "Hair Spa", "Scalp Treatment", "Keratin Treatment", "Shaving", "Eyebrow Shaping", "Bridal Makeup",
  "Groom Makeup", "Mehendi", "Nail Art", "Body Scrub", "Tanning", "Hair Extensions", "Lash Lifting", "Detox Facial",
  "Hot Oil Treatment"
];

const priceRanges = [
  "Below 500 PKR", "500 - 1000 PKR", "1000 - 2000 PKR", "2000 - 5000 PKR", "5000+ PKR"
];

const BeautyQuestionnaire = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("Male");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [salonType, setSalonType] = useState("Home Salon");

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRange(range === selectedPriceRange ? "" : range);
  };

  const handleSave = async () => {
    if (selectedServices.length === 0 || !selectedPriceRange) {
      Alert.alert("Please fill all fields");
      return;
    }
    try {
      const newPreferenceRef = push(ref(db, "userPreferences"));
      await set(newPreferenceRef, {
        gender,
        selectedServices,
        priceRange: selectedPriceRange,
        salonType,
        timestamp: new Date().toISOString(),
      });
      Alert.alert("Preferences saved successfully!");
      navigation.navigate("UserHomeScreen");
    } catch (error) {
      Alert.alert("Error saving data", error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Beauty Preferences</Text>
      
      <Text style={{ fontSize: 18 }}>Select Gender:</Text>
      <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>Select Services:</Text>
      {servicesList.map((service, index) => (
        <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={selectedServices.includes(service) ? "checked" : "unchecked"}
            onPress={() => toggleService(service)}
          />
          <Text>{service}</Text>
        </View>
      ))}
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>Price Range (PKR):</Text>
      {priceRanges.map((range, index) => (
        <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={selectedPriceRange === range ? "checked" : "unchecked"}
            onPress={() => togglePriceRange(range)}
          />
          <Text>{range}</Text>
        </View>
      ))}
      
      <Text style={{ fontSize: 18, marginTop: 10 }}>Service Type:</Text>
      <Picker selectedValue={salonType} onValueChange={(itemValue) => setSalonType(itemValue)}>
        <Picker.Item label="Home Salon" value="Home Salon" />
        <Picker.Item label="In Salon" value="In Salon" />
      </Picker>
      
      <TouchableOpacity
        onPress={handleSave}
        style={{ marginTop: 20, backgroundColor: "#ff6f61", padding: 15, borderRadius: 5 }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>Save Preferences</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BeautyQuestionnaire;