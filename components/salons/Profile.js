import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";

const Profile = () => {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const salonsRef = ref(db, "salons"); // Fetch all salons

    const unsubscribe = onValue(salonsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const salonList = Object.keys(data).map((key) => ({
          id: key,
          salonName: data[key].salonName || "N/A",
          ownerName: data[key].ownerName || "N/A",
          email: data[key].email || "N/A",
          phoneNumber: data[key].phoneNumber || "N/A",
          address: data[key].address || "N/A",
          salonLogo: data[key].salonLogo || null,
          authDocument: data[key].authDocument || null,
          salonType: data[key].salonType || "N/A",
        }));
        setSalons(salonList);
      } else {
        setSalons([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#054D44" />
      ) : (
        <FlatList
          data={salons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {item.salonLogo && <Image source={{ uri: item.salonLogo }} style={styles.image} />}
              <Text style={styles.salonName}>{item.salonName}</Text>
              <Text style={styles.info}>Owner: {item.ownerName}</Text>
              <Text style={styles.info}>Email: {item.email}</Text>
              <Text style={styles.info}>Phone: {item.phoneNumber}</Text>
              <Text style={styles.info}>Address: {item.address}</Text>
              <Text style={styles.info}>Salon Type: {item.salonType}</Text>
              {item.authDocument && <Text style={styles.documentLink}>📄 View Authentication Document</Text>}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, elevation: 3 },
  salonName: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  info: { fontSize: 16, color: "#555" },
  image: { width: 80, height: 80, borderRadius: 10, marginBottom: 10 },
  documentLink: { color: "blue", marginTop: 10 },
});

export default Profile;
