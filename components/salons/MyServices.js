// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert, Modal, TextInput, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import { getDatabase, ref, onValue, remove, update } from "firebase/database";
// import { Ionicons } from "@expo/vector-icons";

// const MyServices = () => {
//   const navigation = useNavigation();
//   const db = getDatabase();
  
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     const fetchServices = () => {
//       const servicesRef = ref(db, "services");
//       onValue(servicesRef, (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const servicesArray = Object.keys(data).map((key) => ({
//             id: key,
//             ...data[key],
//           }));
//           setServices(servicesArray);
//         } else {
//           setServices([]);
//         }
//         setLoading(false);
//       });
//     };
//     fetchServices();
//   }, []);

//   const openUpdateModal = (service) => {
//     setSelectedService(service);
//     setModalVisible(true);
//   };

//   const deleteService = (id) => {
//     Alert.alert("Confirm Delete", "Are you sure you want to delete this service?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "Delete",
//         onPress: () => {
//           remove(ref(db, `services/${id}`))
//             .then(() => Alert.alert("Deleted!", "Service removed successfully."))
//             .catch((error) => Alert.alert("Error", error.message));
//         },
//         style: "destructive",
//       },
//     ]);
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     if (!result.cancelled) {
//       setSelectedService({ ...selectedService, image: result.uri });
//     }
//   };

//   const updateService = () => {
//     update(ref(db, `services/${selectedService.id}`), {
//       serviceName: selectedService.serviceName,
//       price: selectedService.price,
//       image: selectedService.image,
//     }).then(() => {
//       setModalVisible(false);
//       Alert.alert("Success", "Service updated successfully");
//     }).catch((error) => Alert.alert("Error", error.message));
//   };

//   const renderService = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image || "https://via.placeholder.com/150" }} style={styles.image} />
//       <Text style={styles.title}>{item.serviceName}</Text>
//       <Text style={styles.price}>{item.price} PKR</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.updateButton} onPress={() => openUpdateModal(item)}>
//           <Text style={styles.buttonText}>Update</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.deleteButton} onPress={() => deleteService(item.id)}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
//         <Ionicons name="arrow-back" size={24} color="black" />
//       </TouchableOpacity>
//       <Text style={styles.header}>My Services</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
//       ) : (
//         <FlatList
//           data={services}
//           keyExtractor={(item) => item.id}
//           renderItem={renderService}
//           ListEmptyComponent={<Text style={styles.emptyMessage}>No services added yet.</Text>}
//         />
//       )}
//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalCard}>
//             <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//               <Ionicons name="close" size={24} color="black" />
//             </TouchableOpacity>
//             <TextInput value={selectedService?.serviceName} onChangeText={(text) => setSelectedService({ ...selectedService, serviceName: text })} style={styles.input} placeholder="Service Name" />
//             <TextInput value={selectedService?.price} onChangeText={(text) => setSelectedService({ ...selectedService, price: text })} style={styles.input} placeholder="Price" keyboardType="numeric" />
//             <TouchableOpacity onPress={pickImage} style={styles.uploadButton}><Text style={styles.buttonText}>Upload Image</Text></TouchableOpacity>
//             <TouchableOpacity onPress={updateService} style={styles.updateButton}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
//   header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
//   card: { backgroundColor: "white", borderRadius: 10, padding: 15, marginBottom: 15, elevation: 5 },
//   image: { width: "100%", height: 150, borderRadius: 10 },
//   title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
//   price: { fontSize: 16, color: "#ff5733", fontWeight: "bold" },
//   buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
//   input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
//   updateButton: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5 },
//   deleteButton: { backgroundColor: "#F44336", padding: 10, borderRadius: 5 },
//   uploadButton: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, marginBottom: 10 },
//   buttonText: { color: "white", fontSize: 14, textAlign: "center" },
// });

// export default MyServices;
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, Alert, Modal, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import { Ionicons } from "@expo/vector-icons";

const MyServices = () => {
  const navigation = useNavigation();
  const db = getDatabase();
  
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = () => {
      const servicesRef = ref(db, "services");
      onValue(servicesRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const servicesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setServices(servicesArray);
        } else {
          setServices([]);
        }
        setLoading(false);
      });
    };
    fetchServices();
  }, []);

  const openUpdateModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const deleteService = (id) => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this service?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => {
          remove(ref(db, `services/${id}`))
            .then(() => Alert.alert("Deleted!", "Service removed successfully."))
            .catch((error) => Alert.alert("Error", error.message));
        },
        style: "destructive",
      },
    ]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setSelectedService({ ...selectedService, image: result.uri });
    }
  };

  const updateService = () => {
    update(ref(db, `services/${selectedService.id}`), {
      serviceName: selectedService.serviceName,
      price: selectedService.price,
      image: selectedService.image,
    }).then(() => {
      setModalVisible(false);
      Alert.alert("Success", "Service updated successfully");
    }).catch((error) => Alert.alert("Error", error.message));
  };

  const renderService = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image || "https://via.placeholder.com/150" }} style={styles.image} />
      <Text style={styles.title}>{item.serviceName}</Text>
      <Text style={styles.price}>{item.price} PKR</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.updateButton} onPress={() => openUpdateModal(item)}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteService(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>My Services</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ff5733" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          renderItem={renderService}
          ListEmptyComponent={<Text style={styles.emptyMessage}>No services added yet.</Text>}
        />
      )}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <TextInput value={selectedService?.serviceName} onChangeText={(text) => setSelectedService({ ...selectedService, serviceName: text })} style={styles.input} placeholder="Service Name" />
            <TextInput value={selectedService?.price} onChangeText={(text) => setSelectedService({ ...selectedService, price: text })} style={styles.input} placeholder="Price" keyboardType="numeric" />
            <TouchableOpacity onPress={pickImage} style={styles.uploadButton}><Text style={styles.buttonText}>Upload Image</Text></TouchableOpacity>
            <TouchableOpacity onPress={updateService} style={styles.updateButton}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "white", borderRadius: 10, padding: 15, marginBottom: 15, elevation: 5 },
  image: { width: "100%", height: 150, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 16, color: "#ff5733", fontWeight: "bold" },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
  updateButton: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: "#F44336", padding: 10, borderRadius: 5 },
  uploadButton: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, marginBottom: 10 },
  buttonText: { color: "white", fontSize: 14, textAlign: "center" },
});

export default MyServices;
