
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { ref, set, push } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Checkbox } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons"; // For Go Back Icon

const servicesList = [
  "Haircut", "Facial", "Manicure", "Pedicure", "Hair Coloring", "Waxing",
  "Makeup", "Threading", "Massage", "Beard Trim", "Hair Spa", "Scalp Treatment",
  "Keratin Treatment", "Shaving", "Eyebrow Shaping", "Bridal Makeup", "Groom Makeup",
  "Mehendi", "Nail Art", "Body Scrub", "Tanning", "Hair Extensions", "Lash Lifting",
  "Detox Facial", "Hot Oil Treatment","Hair Rebonding",
];

const priceRanges = [
  "Below 500 PKR", "500 - 1000 PKR", "1000 - 2000 PKR", "2000 - 5000 PKR", "5000+ PKR",
];

const BeautyQuestionnaire = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("Male");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [salonType, setSalonType] = useState("Home Salon");

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
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

      // Conditional navigation based on gender
      navigation.navigate(gender === "Male" ? "MaleHomeScreen" : "UserHomeScreen");
    } catch (error) {
      Alert.alert("Error saving data", error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#EAF4F4',marginTop:25 }}>
     <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
  {/* Go Back Button */}
  <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons name="arrow-back" size={30} color="#00665C" />
  </TouchableOpacity>

  {/* Heading */}
  <Text style={{ fontSize: 24, fontWeight: "bold", color: "#00665C", textAlign: "center", flex: 1 }}>
    Beauty Questionnaire
  </Text>
</View>

      {/* Introduction Section */}
      <View style={{ padding: 15, backgroundColor: "#00665C", borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Customize Your Beauty Preferences</Text>
        <Text style={{ fontSize: 18, color: "white", marginTop: 5 }}>
          Select your preferred services, price range, and salon type to get a personalized experience.
        </Text>
      </View>

      {/* Gender Selection */}
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00665C" }}>Select Gender:</Text>
      <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      {/* Services Selection (Two Columns) */}
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00665C", marginTop: 10 }}>Select Services:</Text>
      <FlatList
        data={servicesList}
        numColumns={2}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleService(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: selectedServices.includes(item) ? "#EAF4F4" : "transparent",
              padding: 5,
              borderRadius: 5,
              margin: 5,
              flex: 1,
            }}
          >
            <Checkbox
              status={selectedServices.includes(item) ? "checked" : "unchecked"}
              onPress={() => toggleService(item)}
              color="#00665C"
            />
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Price Range Selection */}
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00665C", marginTop: 10 }}>Price Range (PKR):</Text>
      {priceRanges.map((range, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => togglePriceRange(range)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: selectedPriceRange === range ? "#EAF4F4" : "transparent",
            padding: 5,
            borderRadius: 5,
            marginBottom: 5,
          }}
        >
          <Checkbox
            status={selectedPriceRange === range ? "checked" : "unchecked"}
            onPress={() => togglePriceRange(range)}
            color="#00665C"
          />
          <Text>{range}</Text>
        </TouchableOpacity>
      ))}

      {/* Service Type Selection */}
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00665C", marginTop: 10 }}>Service Type:</Text>
      <Picker selectedValue={salonType} onValueChange={(itemValue) => setSalonType(itemValue)}>
        <Picker.Item label="Home Salon" value="Home Salon" />
        <Picker.Item label="In Salon" value="In Salon" />
      </Picker>

      {/* Save Preferences Button */}
      <TouchableOpacity
        onPress={handleSave}
        style={{
          marginTop: 2,
          backgroundColor: "#00665C",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginBottom:50
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Save Preferences</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BeautyQuestionnaire;
