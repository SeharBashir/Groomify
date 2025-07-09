// // import React, { useState } from 'react';
// // import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
// // import { db } from '../../firebaseConfig';
// // import { ref, push } from 'firebase/database';
// // import { getAuth } from 'firebase/auth';
// // import { Ionicons } from '@expo/vector-icons';
// // import { updatePreference } from "../../utils/preferenceService";


// // const AddReviewRating = ({ route, navigation }) => {
// //   const { serviceId, salonId, ownerId, serviceName } = route.params;

// //   const [rating, setRating] = useState(0);
// //   const [review, setReview] = useState('');
// //   const [hoverRating, setHoverRating] = useState(0);

// //   const auth = getAuth();
// //   const currentUser = auth.currentUser;
// //   const uid = currentUser ? currentUser.uid : null;

// //   const handleSubmit = async () => {
// //     if (!uid) {
// //       Alert.alert('Error', 'User not logged in');
// //       return;
// //     }
// //     if (!rating || rating === 0) {
// //       Alert.alert('Error', 'Please select a rating');
// //       return;
// //     }
// //     if (!review) {
// //       Alert.alert('Error', 'Please enter your review');
// //       return;
// //     }

// //     try {
// //       const reviewsRef = ref(db, 'reviews');
// //       await push(reviewsRef, {
// //         userId: uid,
// //         serviceId,
// //         salonId,
// //         ownerId,
// //         serviceName,
// //         rating: Number(rating),
// //         review,
// //         timestamp: new Date().toISOString(),
// //       });
// //       Alert.alert('Success', 'Review submitted successfully');
// //       navigation.goBack();
// //     } catch (error) {
// //       Alert.alert('Error', 'Something went wrong');
// //       console.error('Error submitting review:', error);
// //     }
// //   };

// //   const renderStars = () => {
// //     return (
// //       <View style={styles.starContainer}>
// //         {[1, 2, 3, 4, 5].map((star) => (
// //           <TouchableOpacity
// //             key={star}
// //             onPress={() => setRating(star)}
// //             onPressIn={() => setHoverRating(star)}
// //             onPressOut={() => setHoverRating(0)}
// //           >
// //             <Ionicons
// //               name={star <= (hoverRating || rating) ? 'star' : 'star-outline'}
// //               size={40}
// //               color={star <= (hoverRating || rating) ? '#FFD700' : '#ccc'}
// //             />
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     );
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.scrollContainer}>
// //       <View style={styles.container}>
// //         <Text style={styles.header}>Rate Your Experience</Text>
// //         <Text style={styles.subHeader}>How was your {serviceName} service?</Text>
        
// //         <View style={styles.ratingSection}>
// //           <Text style={styles.ratingText}>Your Rating:</Text>
// //           {renderStars()}
// //           <Text style={styles.ratingValue}>
// //             {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Not rated yet'}
// //           </Text>
// //         </View>

// //         <View style={styles.reviewSection}>
// //           <Text style={styles.sectionTitle}>Write Your Review</Text>
// //           <TextInput
// //             style={styles.reviewInput}
// //             placeholder="Share details about your experience..."
// //             placeholderTextColor="#888"
// //             multiline
// //             numberOfLines={5}
// //             value={review}
// //             onChangeText={setReview}
// //           />
// //         </View>

// //         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //           <Text style={styles.submitButtonText}>Submit Review</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   scrollContainer: {
// //     flexGrow: 1,
// //     paddingTop: 50,
// //     paddingBottom: 30,
// //   },
// //   container: {
// //     flex: 1,
// //     padding: 25,
// //     backgroundColor: '#fff',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   subHeader: {
// //     fontSize: 16,
// //     color: '#666',
// //     marginBottom: 30,
// //     textAlign: 'center',
// //   },
// //   ratingSection: {
// //     marginBottom: 30,
// //     alignItems: 'center',
// //   },
// //   ratingText: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#444',
// //     marginBottom: 15,
// //   },
// //   starContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginBottom: 10,
// //   },
// //   ratingValue: {
// //     fontSize: 16,
// //     color: '#888',
// //     fontStyle: 'italic',
// //   },
// //   reviewSection: {
// //     marginBottom: 30,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#444',
// //     marginBottom: 15,
// //   },
// //   reviewInput: {
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 12,
// //     padding: 15,
// //     height: 150,
// //     textAlignVertical: 'top',
// //     backgroundColor: '#f9f9f9',
// //     fontSize: 16,
// //     color: '#333',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   submitButton: {
// //     backgroundColor: '#00665C',
// //     padding: 16,
// //     borderRadius: 12,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   submitButtonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 18,
// //   },
// // });

// // export default AddReviewRating;
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import { db } from '../../firebaseConfig';
// import { ref, push } from 'firebase/database';
// import { getAuth } from 'firebase/auth';
// import { Ionicons } from '@expo/vector-icons';
// import { updatePreference } from "../../utils/preferenceService"; // ✅ Correct import

// const AddReviewRating = ({ route, navigation }) => {
//   const { serviceId, salonId, ownerId, serviceName } = route.params;

//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');
//   const [hoverRating, setHoverRating] = useState(0);

//   const auth = getAuth();
//   const currentUser = auth.currentUser;
//   const uid = currentUser ? currentUser.uid : null;

//   const handleSubmit = async () => {
//     if (!uid) {
//       Alert.alert('Error', 'User not logged in');
//       return;
//     }
//     if (!rating || rating === 0) {
//       Alert.alert('Error', 'Please select a rating');
//       return;
//     }
//     if (!review) {
//       Alert.alert('Error', 'Please enter your review');
//       return;
//     }

//     try {
//       const reviewsRef = ref(db, 'reviews');
//       await push(reviewsRef, {
//         userId: uid,
//         serviceId,
//         salonId,
//         ownerId,
//         serviceName,
//         rating: Number(rating),
//         review,
//         timestamp: new Date().toISOString(),
//       });

//       // ✅ Call updatePreference after review is saved
//       await updatePreference(uid, serviceName, Number(rating));

//       Alert.alert('Success', 'Review submitted and preferences updated!');
//       navigation.goBack();
//     } catch (error) {
//       Alert.alert('Error', 'Something went wrong');
//       console.error('Error submitting review:', error);
//     }
//   };

//   const renderStars = () => {
//     return (
//       <View style={styles.starContainer}>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <TouchableOpacity
//             key={star}
//             onPress={() => setRating(star)}
//             onPressIn={() => setHoverRating(star)}
//             onPressOut={() => setHoverRating(0)}
//           >
//             <Ionicons
//               name={star <= (hoverRating || rating) ? 'star' : 'star-outline'}
//               size={40}
//               color={star <= (hoverRating || rating) ? '#FFD700' : '#ccc'}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <Text style={styles.header}>Rate Your Experience</Text>
//         <Text style={styles.subHeader}>How was your {serviceName} service?</Text>
        
//         <View style={styles.ratingSection}>
//           <Text style={styles.ratingText}>Your Rating:</Text>
//           {renderStars()}
//           <Text style={styles.ratingValue}>
//             {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Not rated yet'}
//           </Text>
//         </View>

//         <View style={styles.reviewSection}>
//           <Text style={styles.sectionTitle}>Write Your Review</Text>
//           <TextInput
//             style={styles.reviewInput}
//             placeholder="Share details about your experience..."
//             placeholderTextColor="#888"
//             multiline
//             numberOfLines={5}
//             value={review}
//             onChangeText={setReview}
//           />
//         </View>

//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitButtonText}>Submit Review</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     paddingTop: 50,
//     paddingBottom: 30,
//   },
//   container: {
//     flex: 1,
//     padding: 25,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//     textAlign: 'center',
//   },
//   subHeader: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   ratingSection: {
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   ratingText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#444',
//     marginBottom: 15,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   ratingValue: {
//     fontSize: 16,
//     color: '#888',
//     fontStyle: 'italic',
//   },
//   reviewSection: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#444',
//     marginBottom: 15,
//   },
//   reviewInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     padding: 15,
//     height: 150,
//     textAlignVertical: 'top',
//     backgroundColor: '#f9f9f9',
//     fontSize: 16,
//     color: '#333',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   submitButton: {
//     backgroundColor: '#00665C',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default AddReviewRating;
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { db } from '../../firebaseConfig';
import { ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import { updatePreference } from "../../utils/updatePreference"; // ✅ Correct import

const AddReviewRating = ({ route, navigation }) => {
  const { serviceId, salonId, ownerId, serviceName } = route.params;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  const auth = getAuth();
  const currentUser = auth.currentUser;
  const uid = currentUser ? currentUser.uid : null;

  const handleSubmit = async () => {
    if (!uid) {
      Alert.alert('Error', 'User not logged in');
      return;
    }
    if (!rating || rating === 0) {
      Alert.alert('Error', 'Please select a rating');
      return;
    }
    if (!review) {
      Alert.alert('Error', 'Please enter your review');
      return;
    }

    try {
      const reviewsRef = ref(db, 'reviews');
      await push(reviewsRef, {
        userId: uid,
        serviceId,
        salonId,
        ownerId,
        serviceName,
        rating: Number(rating),
        review,
        timestamp: new Date().toISOString(),
      });

      // ✅ Call updatePreference after review is saved
      await updatePreference(uid, serviceName, Number(rating));

      Alert.alert('Success', 'Review submitted and preferences updated!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.error('Error submitting review:', error);
    }
  };

  const renderStars = () => {
    return (
      <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
            onPressIn={() => setHoverRating(star)}
            onPressOut={() => setHoverRating(0)}
          >
            <Ionicons
              name={star <= (hoverRating || rating) ? 'star' : 'star-outline'}
              size={40}
              color={star <= (hoverRating || rating) ? '#FFD700' : '#ccc'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Rate Your Experience</Text>
        <Text style={styles.subHeader}>How was your {serviceName} service?</Text>
        
        <View style={styles.ratingSection}>
          <Text style={styles.ratingText}>Your Rating:</Text>
          {renderStars()}
          <Text style={styles.ratingValue}>
            {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Not rated yet'}
          </Text>
        </View>

        <View style={styles.reviewSection}>
          <Text style={styles.sectionTitle}>Write Your Review</Text>
          <TextInput
            style={styles.reviewInput}
            placeholder="Share details about your experience..."
            placeholderTextColor="#888"
            multiline
            numberOfLines={5}
            value={review}
            onChangeText={setReview}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  ratingSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  ratingValue: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
  },
  reviewSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    height: 150,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButton: {
    backgroundColor: '#00665C',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AddReviewRating;
