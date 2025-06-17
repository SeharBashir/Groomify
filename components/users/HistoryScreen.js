
import React, { useEffect, useState } from "react";
import { 
  View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Modal, Alert 
} from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, remove } from "firebase/database";
import { auth, db } from "../../firebaseConfig";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';  // Use moment.js to format the date

const HistoryScreen = () => {
  const navigation = useNavigation();
  const [bookings, setBookings] = useState([]);  // Store bookings
  const [loading, setLoading] = useState(true);  // Handle loading state
  const [selectedBooking, setSelectedBooking] = useState(null);  // Store the selected booking for modal
  const [modalVisible, setModalVisible] = useState(false);  // Control modal visibility

  useEffect(() => {
    const fetchBookings = async () => {
      const user = auth.currentUser;  // Get the current user
      if (user) {
        const bookingsRef = ref(db, `bookings/`);  // Reference to the bookings node
        try {
          const snapshot = await get(bookingsRef);
          if (snapshot.exists()) {
            const data = snapshot.val();
            
            // Log all bookings fetched from Firebase
            console.log("All Bookings from Firebase:", data);

            // Extract the bookings and ensure we include the bookingId
            const userBookings = Object.entries(data)
              .filter(([key, booking]) => booking.userId === user.uid)  // Filter bookings for the current user
              .map(([key, booking]) => ({ bookingId: key, ...booking }));  // Add bookingId to each booking object

            // Log the filtered bookings for the current user
            console.log("Filtered User Bookings:", userBookings);

            setBookings(userBookings);  // Update the state with user-specific bookings
          } else {
            console.log("No bookings found.");
          }
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
      setLoading(false);  // Set loading to false once the data is fetched
    };

    fetchBookings();  // Call the function to fetch bookings
  }, []);

  useEffect(() => {
    console.log("Bookings State Updated:", bookings);  // Log the updated bookings state
  }, [bookings]);

  const openModal = (booking) => {
    setSelectedBooking(booking);  // Set the selected booking
    setModalVisible(true);  // Show the modal
  };

  const closeModal = () => {
    setModalVisible(false);  // Close the modal
    setSelectedBooking(null);  // Reset selected booking
  };

  // Handle cancel booking
  const handleCancelBooking = async (bookingId) => {
    try {
      const bookingRef = ref(db, `bookings/${bookingId}`);
      await remove(bookingRef);  // Remove the booking from Firebase
      Alert.alert("Success", "Booking canceled successfully!");

      // Update the bookings state to remove the canceled booking
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.bookingId !== bookingId));
    } catch (error) {
      console.error("Error canceling booking:", error);
      Alert.alert("Error", "Failed to cancel booking. Please try again.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E8B57" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking History</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* FlatList to display the bookings with Service Name, Salon Name, Date, and Time */}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.bookingId}  // Use bookingId as keyExtractor
        style={styles.flatList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.bookingCard} 
            onPress={() => openModal(item)}  // Open modal on item click
          >
            <Text style={styles.bookingText}>Salon: {item?.salonName || 'N/A'}</Text>
            <Text style={styles.bookingText}>Service: {item?.serviceName || 'N/A'}</Text>
            <Text style={styles.bookingText}>Date: {moment(item?.date).format("D MMMM YYYY")}</Text>
            <Text style={styles.bookingText}>Time: {item?.time || 'N/A'}</Text>
            <Text style={[styles.bookingText, { color: "#2A7B6D" }]}>Status: {item?.status || 'N/A'}</Text>

            {/* Cancel Booking Button */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => handleCancelBooking(item.bookingId)}
            >
              <Text style={styles.cancelButtonText}>Cancel Booking</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* Modal for showing all details of the booking */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Icon in the top-right corner */}
            <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
              <FontAwesome name="times" size={24} color="#2A7B6D" />
            </TouchableOpacity>

            {selectedBooking && (
              <>
                <Text style={[styles.modalText, styles.boldText, { color: "#2A7B6D", fontSize: 20 }]}>{selectedBooking?.salonName || 'N/A'}</Text>
                <Text style={styles.modalText}>Service: {selectedBooking?.serviceName || 'N/A'}</Text>
                <Text style={styles.modalText}>Description: {selectedBooking?.description || 'N/A'}</Text>
                <Text style={styles.modalText}>Date: {moment(selectedBooking?.date).format("D MMMM YYYY")}</Text>
                <Text style={styles.modalText}>Time: {selectedBooking?.time || 'N/A'}</Text>
                <Text style={[styles.modalText, { color: "#2A7B6D" }]}>
                  Status: {selectedBooking?.status || 'N/A'}
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white", 
    paddingHorizontal: -10, 
    paddingTop: 0, 
    alignItems: "center",
  },
  loadingContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#white" 
  },
  header: {
    width: "100%", 
    height: 200, 
    backgroundColor: "#00665C", 
    paddingVertical: 15, 
    alignItems: "center", 
    justifyContent: "center", 
    borderBottomLeftRadius: 60, 
    borderBottomRightRadius: 60,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 5,
  },
  headerText: { 
    color: "white", 
    fontSize: 35, 
    fontWeight: "bold", 
    marginBottom:40
  },
  backButton: { 
    position: "absolute", 
    top: 60, 
    left: 20, 
    padding: 10, 
    borderRadius: 10 
  },
  flatList: {
    width: "80%",
    marginTop: 20,
  },
  bookingCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
    borderWidth:3,
    borderColor:'#00665C'
  },
  bookingText: {
    fontSize: 16,
    color: "#2A7B6D",
    marginBottom: 8,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    
  },
  cancelButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    maxHeight: "70%",
    paddingBottom: 30,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 15,  // Added margin-right to close icon
  },
});

export default HistoryScreen;