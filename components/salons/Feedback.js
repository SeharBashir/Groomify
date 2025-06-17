import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
import { useNavigation } from '@react-navigation/native';

const Feedback = () => {
    const navigation = useNavigation();
  // Sample feedback data
  const feedbackData = Array(20).fill({
    userName: 'Sehar Bashir',
    email: 'john@example.com',
    service: 'Haircut',
    rating: 4,
    comment: 'Great service, very professional staff!',
  }).map((item, index) => ({
    ...item,
    userName: `${item.userName} ${index + 1}`,
    email: `john${index + 1}@example.com`,
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Icon name="arrow-back" size={24} color="#fff" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Feedback and Ratings</Text>
</View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        {feedbackData.map((feedback, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.userInfo}>
              <Icon name="person" size={24} color="#00665C" />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{feedback.userName}</Text>
                <Text style={styles.email}>{feedback.email}</Text>
              </View>
            </View>
            <Text style={styles.service}>Service: {feedback.service}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Rating: </Text>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  size={20}
                  color={i < feedback.rating ? '#FFD700' : '#ccc'}
                />
              ))}
            </View>
            <Text style={styles.comment}>Comment: {feedback.comment}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00665C',
    padding: 15,
    paddingTop: 70,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  card: {
    borderWidth: 5,
    borderColor: '#00665C',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  service: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  comment: {
    fontSize: 14,
    color: '#333',
  },
});

export default Feedback;