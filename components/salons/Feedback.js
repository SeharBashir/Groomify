// // // // // import React from 'react';
// // // // // import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// // // // // import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
// // // // // import { useNavigation } from '@react-navigation/native';

// // // // // const Feedback = () => {
// // // // //     const navigation = useNavigation();
// // // // //   // Sample feedback data
// // // // //   const feedbackData = Array(20).fill({
// // // // //     userName: 'Sehar Bashir',
// // // // //     email: 'john@example.com',
// // // // //     service: 'Haircut',
// // // // //     rating: 4,
// // // // //     comment: 'Great service, very professional staff!',
// // // // //   }).map((item, index) => ({
// // // // //     ...item,
// // // // //     userName: `${item.userName} ${index + 1}`,
// // // // //     email: `john${index + 1}@example.com`,
// // // // //   }));

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       {/* Header */}
// // // // //       <View style={styles.header}>
// // // // //   <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // //     <Icon name="arrow-back" size={24} color="#fff" />
// // // // //   </TouchableOpacity>
// // // // //   <Text style={styles.headerTitle}>Feedback and Ratings</Text>
// // // // // </View>

// // // // //       {/* Scrollable Content */}
// // // // //       <ScrollView style={styles.scrollView}>
// // // // //         {feedbackData.map((feedback, index) => (
// // // // //           <View key={index} style={styles.card}>
// // // // //             <View style={styles.userInfo}>
// // // // //               <Icon name="person" size={24} color="#00665C" />
// // // // //               <View style={styles.userDetails}>
// // // // //                 <Text style={styles.userName}>{feedback.userName}</Text>
// // // // //                 <Text style={styles.email}>{feedback.email}</Text>
// // // // //               </View>
// // // // //             </View>
// // // // //             <Text style={styles.service}>Service: {feedback.service}</Text>
// // // // //             <View style={styles.ratingContainer}>
// // // // //               <Text style={styles.ratingText}>Rating: </Text>
// // // // //               {[...Array(5)].map((_, i) => (
// // // // //                 <Icon
// // // // //                   key={i}
// // // // //                   name="star"
// // // // //                   size={20}
// // // // //                   color={i < feedback.rating ? '#FFD700' : '#ccc'}
// // // // //                 />
// // // // //               ))}
// // // // //             </View>
// // // // //             <Text style={styles.comment}>Comment: {feedback.comment}</Text>
// // // // //           </View>
// // // // //         ))}
// // // // //       </ScrollView>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#EAF4F4',
// // // // //   },
// // // // //   header: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     backgroundColor: '#00665C',
// // // // //     padding: 15,
// // // // //     paddingTop: 70,
// // // // //   },
// // // // //   headerTitle: {
// // // // //     color: '#fff',
// // // // //     fontSize: 40,
// // // // //     fontWeight: 'bold',
// // // // //     marginLeft: 8,
// // // // //   },
// // // // //   scrollView: {
// // // // //     flex: 1,
// // // // //     padding: 15,
// // // // //   },
// // // // //   card: {
// // // // //     borderWidth: 5,
// // // // //     borderColor: '#00665C',
// // // // //     borderRadius: 8,
// // // // //     padding: 15,
// // // // //     marginBottom: 15,
// // // // //   },
// // // // //   userInfo: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   userDetails: {
// // // // //     marginLeft: 10,
// // // // //   },
// // // // //   userName: {
// // // // //     fontSize: 16,
// // // // //     fontWeight: 'bold',
// // // // //     color: '#333',
// // // // //   },
// // // // //   email: {
// // // // //     fontSize: 14,
// // // // //     color: '#666',
// // // // //   },
// // // // //   service: {
// // // // //     fontSize: 14,
// // // // //     color: '#333',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   ratingContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     marginBottom: 10,
// // // // //   },
// // // // //   ratingText: {
// // // // //     fontSize: 14,
// // // // //     color: '#333',
// // // // //     marginRight: 5,
// // // // //   },
// // // // //   comment: {
// // // // //     fontSize: 14,
// // // // //     color: '#333',
// // // // //   },
// // // // // });

// // // // // export default Feedback;
// // // // import React, { useEffect, useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   ScrollView,
// // // //   StyleSheet,
// // // //   TouchableOpacity,
// // // //   ActivityIndicator,
// // // // } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // // import { useNavigation } from '@react-navigation/native';
// // // // import { db, auth } from '../../firebaseConfig';
// // // // import { ref, onValue, off, get } from 'firebase/database';

// // // // const Feedback = () => {
// // // //   const navigation = useNavigation();
// // // //   const [feedbackData, setFeedbackData] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [userNames, setUserNames] = useState({});

// // // //   useEffect(() => {
// // // //     const user = auth.currentUser;
// // // //     if (!user) {
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     const reviewsRef = ref(db, 'reviews');

// // // //     const listener = onValue(reviewsRef, async (snapshot) => {
// // // //       if (snapshot.exists()) {
// // // //         const data = snapshot.val();
// // // //         let reviewsArray = Object.entries(data)
// // // //           .map(([key, value]) => ({
// // // //             id: key,
// // // //             ...value,
// // // //           }))
// // // //           .filter((review) => review.ownerId === user.uid);

// // // //         // Sort reviews by latest
// // // //         reviewsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

// // // //         // Fetch user names for each userId
// // // //         const namesObj = {};
// // // //         await Promise.all(
// // // //           reviewsArray.map(async (review) => {
// // // //             if (review.userId && !namesObj[review.userId]) {
// // // //               try {
// // // //                 const userRef = ref(db, `users/${review.userId}`);
// // // //                 const userSnap = await get(userRef);
// // // //                 if (userSnap.exists()) {
// // // //                   namesObj[review.userId] = userSnap.val().name || "Anonymous";
// // // //                 } else {
// // // //                   namesObj[review.userId] = "Anonymous";
// // // //                 }
// // // //               } catch (error) {
// // // //                 console.error('Error fetching user name:', error);
// // // //                 namesObj[review.userId] = "Anonymous";
// // // //               }
// // // //             }
// // // //           })
// // // //         );

// // // //         setUserNames(namesObj);
// // // //         setFeedbackData(reviewsArray);
// // // //       } else {
// // // //         setFeedbackData([]);
// // // //       }
// // // //       setLoading(false);
// // // //     });

// // // //     return () => {
// // // //       off(reviewsRef, 'value', listener);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // //           <Icon name="arrow-back" size={24} color="#fff" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>Feedback and Ratings</Text>
// // // //       </View>

// // // //       {loading ? (
// // // //         <View style={styles.loader}>
// // // //           <ActivityIndicator size="large" color="#00665C" />
// // // //         </View>
// // // //       ) : (
// // // //         <ScrollView style={styles.scrollView}>
// // // //           <Text style={styles.reviewCountText}>
// // // //             Total Reviews: {feedbackData.length}
// // // //           </Text>

// // // //           {feedbackData.length === 0 ? (
// // // //             <View style={styles.emptyContainer}>
// // // //               <Icon name="feedback" size={60} color="#00665C" />
// // // //               <Text style={styles.emptyText}>No reviews yet</Text>
// // // //             </View>
// // // //           ) : (
// // // //             feedbackData.map((feedback) => (
// // // //               <View key={feedback.id} style={styles.card}>
// // // //                 <View style={styles.userInfo}>
// // // //                   <Icon name="person" size={24} color="#00665C" />
// // // //                   <View style={styles.userDetails}>
// // // //                     <Text style={styles.userName}>
// // // //                       {userNames[feedback.userId] || 'Anonymous'}
// // // //                     </Text>
// // // //                     <Text style={styles.email}>
// // // //                       Service: {feedback.serviceName}
// // // //                     </Text>
// // // //                   </View>
// // // //                 </View>
// // // //                 <View style={styles.ratingContainer}>
// // // //                   <Text style={styles.ratingText}>Rating: </Text>
// // // //                   {[...Array(5)].map((_, i) => (
// // // //                     <Icon
// // // //                       key={i}
// // // //                       name="star"
// // // //                       size={20}
// // // //                       color={i < feedback.rating ? '#FFD700' : '#ccc'}
// // // //                     />
// // // //                   ))}
// // // //                 </View>
// // // //                 <Text style={styles.comment}>Comment: {feedback.review}</Text>
// // // //                 <Text style={styles.timestamp}>
// // // //                   {feedback.timestamp
// // // //                     ? new Date(feedback.timestamp).toLocaleString()
// // // //                     : 'No Date'}
// // // //                 </Text>
// // // //               </View>
// // // //             ))
// // // //           )}
// // // //         </ScrollView>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: '#EAF4F4' },
// // // //   header: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     backgroundColor: '#00665C',
// // // //     padding: 15,
// // // //     paddingTop: 70,
// // // //   },
// // // //   headerTitle: {
// // // //     color: '#fff',
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     marginLeft: 8,
// // // //   },
// // // //   scrollView: { flex: 1, padding: 15 },
// // // //   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// // // //   emptyContainer: {
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     marginTop: 50,
// // // //   },
// // // //   emptyText: {
// // // //     fontSize: 18,
// // // //     color: '#00665C',
// // // //     marginTop: 15,
// // // //     fontWeight: '500',
// // // //   },
// // // //   reviewCountText: {
// // // //     fontSize: 16,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 10,
// // // //     color: '#333',
// // // //   },
// // // //   card: {
// // // //     borderWidth: 2,
// // // //     borderColor: '#00665C',
// // // //     borderRadius: 8,
// // // //     padding: 15,
// // // //     marginBottom: 15,
// // // //     backgroundColor: '#fff',
// // // //   },
// // // //   userInfo: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 10,
// // // //   },
// // // //   userDetails: { marginLeft: 10 },
// // // //   userName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
// // // //   email: { fontSize: 14, color: '#666' },
// // // //   ratingContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     marginBottom: 10,
// // // //   },
// // // //   ratingText: { fontSize: 14, color: '#333', marginRight: 5 },
// // // //   comment: { fontSize: 14, color: '#333', marginBottom: 5 },
// // // //   timestamp: { fontSize: 12, color: '#999', marginTop: 5 },
// // // // });

// // // // export default Feedback;
// // // import React, { useEffect, useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   ScrollView,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ActivityIndicator,
// // //   Animated,
// // //   Easing
// // // } from 'react-native';
// // // import Icon from 'react-native-vector-icons/MaterialIcons';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { db, auth } from '../../firebaseConfig';
// // // import { ref, onValue, off, get } from 'firebase/database';

// // // const Feedback = () => {
// // //   const navigation = useNavigation();
// // //   const [feedbackData, setFeedbackData] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const fadeAnim = new Animated.Value(0);
// // //   const headerTranslateY = new Animated.Value(-50);

// // //   useEffect(() => {
// // //     // Header animation
// // //     Animated.timing(headerTranslateY, {
// // //       toValue: 0,
// // //       duration: 500,
// // //       easing: Easing.out(Easing.back(1.7)),
// // //       useNativeDriver: true
// // //     }).start();

// // //     // Content fade-in animation
// // //     Animated.timing(fadeAnim, {
// // //       toValue: 1,
// // //       duration: 800,
// // //       useNativeDriver: true
// // //     }).start();

// // //     const user = auth.currentUser;
// // //     if (!user) {
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const reviewsRef = ref(db, 'reviews');

// // //     const listener = onValue(reviewsRef, async (snapshot) => {
// // //       if (snapshot.exists()) {
// // //         const data = snapshot.val();
// // //         const reviewsArray = Object.entries(data)
// // //           .map(([key, value]) => ({
// // //             id: key,
// // //             ...value,
// // //           }))
// // //           .filter((review) => review.ownerId === user.uid);

// // //         const userNames = {};
// // //         await Promise.all(
// // //           reviewsArray.map(async (review) => {
// // //             if (!userNames[review.userId]) {
// // //               try {
// // //                 const userRef = ref(db, `users/${review.userId}`);
// // //                 const userSnap = await get(userRef);
// // //                 if (userSnap.exists()) {
// // //                   const userData = userSnap.val();
// // //                   userNames[review.userId] = userData.fullName || 'Anonymous';
// // //                 } else {
// // //                   userNames[review.userId] = 'Anonymous';
// // //                 }
// // //               } catch (error) {
// // //                 console.error('Error fetching user name:', error);
// // //                 userNames[review.userId] = 'Anonymous';
// // //               }
// // //             }
// // //           })
// // //         );

// // //         const reviewsWithNames = reviewsArray.map((review) => ({
// // //           ...review,
// // //           userName: userNames[review.userId] || 'Anonymous',
// // //         }));

// // //         reviewsWithNames.sort(
// // //           (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
// // //         );

// // //         setFeedbackData(reviewsWithNames);
// // //       } else {
// // //         setFeedbackData([]);
// // //       }
// // //       setLoading(false);
// // //     });

// // //     return () => {
// // //       off(reviewsRef, 'value', listener);
// // //     };
// // //   }, []);

// // //   const renderFeedbackCard = (feedback, index) => {
// // //     const cardOpacity = new Animated.Value(0);
// // //     const cardTranslateY = new Animated.Value(30);
    
// // //     Animated.sequence([
// // //       Animated.delay(index * 100),
// // //       Animated.parallel([
// // //         Animated.timing(cardOpacity, {
// // //           toValue: 1,
// // //           duration: 500,
// // //           useNativeDriver: true
// // //         }),
// // //         Animated.timing(cardTranslateY, {
// // //           toValue: 0,
// // //           duration: 400,
// // //           easing: Easing.out(Easing.back(1)),
// // //           useNativeDriver: true
// // //         })
// // //       ])
// // //     ]).start();

// // //     return (
// // //       <Animated.View 
// // //         key={feedback.id}
// // //         style={[
// // //           styles.card,
// // //           {
// // //             opacity: cardOpacity,
// // //             transform: [{ translateY: cardTranslateY }]
// // //           }
// // //         ]}
// // //       >
// // //         <View style={styles.cardHeader}>
// // //           <View style={styles.userInfo}>
// // //             <View style={styles.avatar}>
// // //               <Text style={styles.avatarText}>
// // //                 {feedback.userName.charAt(0).toUpperCase()}
// // //               </Text>
// // //             </View>
// // //             <View style={styles.userDetails}>
// // //               <Text style={styles.userName}>{feedback.userName}</Text>
// // //               <Text style={styles.serviceName}>Service: {feedback.serviceName}</Text>
// // //             </View>
// // //           </View>
// // //           <View style={styles.ratingContainer}>
// // //             {[...Array(5)].map((_, i) => (
// // //               <Icon
// // //                 key={i}
// // //                 name={i < Math.floor(feedback.rating) ? 'star' : 'star-border'}
// // //                 size={18}
// // //                 color={i < feedback.rating ? '#FFD700' : '#E0E0E0'}
// // //               />
// // //             ))}
// // //           </View>
// // //         </View>
        
// // //         {feedback.review && (
// // //           <View style={styles.commentContainer}>
// // //             <Text style={styles.comment}>
// // //               <Icon name="format-quote" size={16} color="#00665C" style={{ opacity: 0.5 }} />{' '}
// // //               {feedback.review}
// // //             </Text>
// // //           </View>
// // //         )}
        
// // //         <Text style={styles.timestamp}>
// // //           <Icon name="access-time" size={12} color="#00665C" />{' '}
// // //           {feedback.timestamp
// // //             ? new Date(feedback.timestamp).toLocaleDateString('en-US', {
// // //                 year: 'numeric',
// // //                 month: 'short',
// // //                 day: 'numeric',
// // //                 hour: '2-digit',
// // //                 minute: '2-digit'
// // //               })
// // //             : 'No Date'}
// // //         </Text>
// // //       </Animated.View>
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Animated.View 
// // //         style={[
// // //           styles.header,
// // //           { transform: [{ translateY: headerTranslateY }] }
// // //         ]}
// // //       >
// // //         <TouchableOpacity 
// // //           onPress={() => navigation.goBack()}
// // //           style={styles.backButton}
// // //         >
// // //           <Icon name="arrow-back" size={24} color="#fff" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Feedback and Ratings</Text>
// // //       </Animated.View>

// // //       {loading ? (
// // //         <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
// // //           <ActivityIndicator size="large" color="#00665C" />
// // //           <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>
// // //             Loading feedback...
// // //           </Animated.Text>
// // //         </Animated.View>
// // //       ) : (
// // //         <Animated.ScrollView 
// // //           style={[styles.scrollView, { opacity: fadeAnim }]}
// // //           contentContainerStyle={feedbackData.length === 0 && styles.emptyScrollView}
// // //         >
// // //           {feedbackData.length === 0 ? (
// // //             <Animated.View style={[styles.emptyContainer, { opacity: fadeAnim }]}>
// // //               <Animated.View 
// // //                 style={[
// // //                   styles.emptyIconCircle,
// // //                   { 
// // //                     transform: [{
// // //                       rotate: fadeAnim.interpolate({
// // //                         inputRange: [0, 1],
// // //                         outputRange: ['-15deg', '0deg']
// // //                       })
// // //                     }] 
// // //                   }
// // //                 ]}
// // //               >
// // //                 <Icon name="feedback" size={60} color="#00665C" />
// // //               </Animated.View>
// // //               <Animated.Text style={[styles.emptyTitle, { opacity: fadeAnim }]}>
// // //                 No Reviews Yet
// // //               </Animated.Text>
// // //               <Animated.Text style={[styles.emptySubtitle, { opacity: fadeAnim }]}>
// // //                 Your customer feedback will appear here
// // //               </Animated.Text>
// // //             </Animated.View>
// // //           ) : (
// // //             feedbackData.map((feedback, index) => renderFeedbackCard(feedback, index))
// // //           )}
// // //         </Animated.ScrollView>
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: { 
// // //     flex: 1, 
// // //     backgroundColor: '#EAF4F4' 
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     backgroundColor: '#00665C',
// // //     padding: 15,
// // //     paddingTop: 70,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 5,
// // //     elevation: 8,
// // //     zIndex: 10,
// // //   },
// // //   backButton: {
// // //     padding: 5,
// // //     borderRadius: 20,
// // //     backgroundColor: 'rgba(255,255,255,0.2)',
// // //   },
// // //   headerTitle: {
// // //     color: '#fff',
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     marginLeft: 8,
// // //     textShadowColor: 'rgba(0,0,0,0.2)',
// // //     textShadowOffset: { width: 1, height: 1 },
// // //     textShadowRadius: 3,
// // //   },
// // //   scrollView: { 
// // //     flex: 1, 
// // //     padding: 15 
// // //   },
// // //   emptyScrollView: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   loader: { 
// // //     flex: 1, 
// // //     justifyContent: 'center', 
// // //     alignItems: 'center' 
// // //   },
// // //   loadingText: {
// // //     marginTop: 15,
// // //     color: '#00665C',
// // //     fontSize: 16,
// // //     fontWeight: '500',
// // //   },
// // //   emptyContainer: {
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginTop: 50,
// // //   },
// // //   emptyIconCircle: {
// // //     backgroundColor: 'rgba(0, 102, 92, 0.1)',
// // //     width: 100,
// // //     height: 100,
// // //     borderRadius: 50,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   emptyTitle: {
// // //     fontSize: 22,
// // //     color: '#00665C',
// // //     fontWeight: '600',
// // //     marginBottom: 8,
// // //   },
// // //   emptySubtitle: {
// // //     fontSize: 16,
// // //     color: '#78909C',
// // //     textAlign: 'center',
// // //     maxWidth: 250,
// // //   },
// // //   card: {
// // //     borderWidth: 2,
// // //     borderColor: '#00665C',
// // //     borderRadius: 12,
// // //     padding: 20,
// // //     marginBottom: 20,
// // //     backgroundColor: '#fff',
// // //     shadowColor: '#00665C',
// // //     shadowOffset: { width: 0, height: 3 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 5,
// // //     elevation: 3,
// // //   },
// // //   cardHeader: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     marginBottom: 15,
// // //   },
// // //   userInfo: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     flex: 1,
// // //   },
// // //   avatar: {
// // //     backgroundColor: '#00665C',
// // //     width: 40,
// // //     height: 40,
// // //     borderRadius: 20,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginRight: 12,
// // //   },
// // //   avatarText: {
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //     fontSize: 16,
// // //   },
// // //   userDetails: {
// // //     flex: 1,
// // //   },
// // //   userName: { 
// // //     fontSize: 16, 
// // //     fontWeight: 'bold', 
// // //     color: '#333',
// // //     marginBottom: 2,
// // //   },
// // //   serviceName: { 
// // //     fontSize: 14, 
// // //     color: '#666',
// // //     fontStyle: 'italic',
// // //   },
// // //   ratingContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginLeft: 10,
// // //   },
// // //   commentContainer: {
// // //     backgroundColor: 'rgba(0, 102, 92, 0.03)',
// // //     borderRadius: 8,
// // //     padding: 15,
// // //     marginBottom: 15,
// // //     borderLeftWidth: 3,
// // //     borderLeftColor: 'rgba(0, 102, 92, 0.2)',
// // //   },
// // //   comment: { 
// // //     fontSize: 14, 
// // //     color: '#333',
// // //     lineHeight: 20,
// // //   },
// // //   timestamp: { 
// // //     fontSize: 12, 
// // //     color: '#00665C',
// // //     alignSelf: 'flex-end',
// // //   },
// // // });

// // // export default Feedback;
// // import React, { useEffect, useState, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ActivityIndicator,
// //   Animated,
// //   Easing
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';
// // import { useNavigation } from '@react-navigation/native';
// // import { db, auth } from '../../firebaseConfig';
// // import { ref, onValue, off, get } from 'firebase/database';

// // const Feedback = () => {
// //   const navigation = useNavigation();
// //   const [feedbackData, setFeedbackData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const fadeAnim = useRef(new Animated.Value(0)).current;
// //   const headerTranslateY = useRef(new Animated.Value(-50)).current;
// //   const cardAnimations = useRef([]).current;

// //   useEffect(() => {
// //     Animated.timing(headerTranslateY, {
// //       toValue: 0,
// //       duration: 500,
// //       easing: Easing.out(Easing.back(1.7)),
// //       useNativeDriver: true
// //     }).start();

// //     Animated.timing(fadeAnim, {
// //       toValue: 1,
// //       duration: 800,
// //       useNativeDriver: true
// //     }).start();

// //     const user = auth.currentUser;
// //     if (!user) {
// //       setLoading(false);
// //       return;
// //     }

// //     const reviewsRef = ref(db, 'reviews');

// //     const listener = onValue(reviewsRef, async (snapshot) => {
// //       if (snapshot.exists()) {
// //         const data = snapshot.val();
// //         const reviewsArray = Object.entries(data)
// //           .map(([key, value]) => ({ id: key, ...value }))
// //           .filter((review) => review.ownerId === user.uid);

// //         const userNames = {};
// //         await Promise.all(
// //           reviewsArray.map(async (review) => {
// //             if (!userNames[review.userId]) {
// //               try {
// //                 const userRef = ref(db, `users/${review.userId}`);
// //                 const userSnap = await get(userRef);
// //                 if (userSnap.exists()) {
// //                   const userData = userSnap.val();
// //                   userNames[review.userId] = userData.fullName || 'Anonymous';
// //                 } else {
// //                   userNames[review.userId] = 'Anonymous';
// //                 }
// //               } catch (error) {
// //                 console.error('Error fetching user name:', error);
// //                 userNames[review.userId] = 'Anonymous';
// //               }
// //             }
// //           })
// //         );

// //         const reviewsWithNames = reviewsArray.map((review) => ({
// //           ...review,
// //           userName: userNames[review.userId] || 'Anonymous',
// //         }));

// //         reviewsWithNames.sort(
// //           (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
// //         );

// //         cardAnimations.length = reviewsWithNames.length;
// //         for (let i = 0; i < reviewsWithNames.length; i++) {
// //           cardAnimations[i] = {
// //             opacity: new Animated.Value(0),
// //             translateY: new Animated.Value(30),
// //           };
// //         }

// //         reviewsWithNames.forEach((_, i) => {
// //           Animated.sequence([
// //             Animated.delay(i * 100),
// //             Animated.parallel([
// //               Animated.timing(cardAnimations[i].opacity, {
// //                 toValue: 1,
// //                 duration: 500,
// //                 useNativeDriver: true
// //               }),
// //               Animated.timing(cardAnimations[i].translateY, {
// //                 toValue: 0,
// //                 duration: 400,
// //                 easing: Easing.out(Easing.back(1)),
// //                 useNativeDriver: true
// //               })
// //             ])
// //           ]).start();
// //         });

// //         setFeedbackData(reviewsWithNames);
// //       } else {
// //         setFeedbackData([]);
// //       }
// //       setLoading(false);
// //     });

// //     return () => {
// //       off(reviewsRef, 'value', listener);
// //     };
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Icon name="arrow-back" size={24} color="#fff" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Feedback and Ratings</Text>
// //       </Animated.View>

// //       {loading ? (
// //         <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
// //           <ActivityIndicator size="large" color="#00665C" />
// //           <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>Loading feedback...</Animated.Text>
// //         </Animated.View>
// //       ) : (
// //         <Animated.ScrollView style={[styles.scrollView, { opacity: fadeAnim }]}>
// //           {feedbackData.length === 0 ? (
// //             <View style={styles.emptyContainer}>
// //               <View style={styles.emptyIconCircle}>
// //                 <Icon name="feedback" size={60} color="#00665C" />
// //               </View>
// //               <Text style={styles.emptyTitle}>No Reviews Yet</Text>
// //               <Text style={styles.emptySubtitle}>Your customer feedback will appear here</Text>
// //             </View>
// //           ) : (
// //             feedbackData.map((feedback, index) => (
// //               <Animated.View
// //                 key={feedback.id}
// //                 style={[
// //                   styles.card,
// //                   {
// //                     opacity: cardAnimations[index]?.opacity,
// //                     transform: [{ translateY: cardAnimations[index]?.translateY }],
// //                   },
// //                 ]}
// //               >
// //                 <View style={styles.cardHeader}>
// //                   <View style={styles.userInfo}>
// //                     <View style={styles.avatar}>
// //                       <Text style={styles.avatarText}>{feedback.userName.charAt(0).toUpperCase()}</Text>
// //                     </View>
// //                     <View style={styles.userDetails}>
// //                       <Text style={styles.userName}>{feedback.userName}</Text>
// //                       <Text style={styles.serviceName}>Service: {feedback.serviceName}</Text>
// //                     </View>
// //                   </View>
// //                   <View style={styles.ratingContainer}>
// //                     {[...Array(5)].map((_, i) => (
// //                       <Icon
// //                         key={i}
// //                         name={i < Math.floor(feedback.rating) ? 'star' : 'star-border'}
// //                         size={18}
// //                         color={i < feedback.rating ? '#FFD700' : '#E0E0E0'}
// //                       />
// //                     ))}
// //                   </View>
// //                 </View>
// //                 {feedback.review && (
// //                   <View style={styles.commentContainer}>
// //                     <Text style={styles.comment}><Icon name="format-quote" size={16} color="#00665C" style={{ opacity: 0.5 }} /> {feedback.review}</Text>
// //                   </View>
// //                 )}
// //                 <Text style={styles.timestamp}>
// //                   <Icon name="access-time" size={12} color="#00665C" />{' '}
// //                   {feedback.timestamp ? new Date(feedback.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'No Date'}
// //                 </Text>
// //               </Animated.View>
// //             ))
// //           )}
// //         </Animated.ScrollView>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#EAF4F4' },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#00665C',
// //     padding: 15,
// //     paddingTop: 70,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 5,
// //     elevation: 8,
// //     zIndex: 10,
// //   },
// //   backButton: {
// //     padding: 5,
// //     borderRadius: 20,
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //   },
// //   headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 8 },
// //   scrollView: { flex: 1, padding: 15 },
// //   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// //   loadingText: { marginTop: 15, color: '#00665C', fontSize: 16, fontWeight: '500' },
// //   emptyContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 50 },
// //   emptyIconCircle: {
// //     backgroundColor: 'rgba(0, 102, 92, 0.1)',
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   emptyTitle: { fontSize: 22, color: '#00665C', fontWeight: '600', marginBottom: 8 },
// //   emptySubtitle: { fontSize: 16, color: '#78909C', textAlign: 'center', maxWidth: 250 },
// //   card: {
// //     borderWidth: 2,
// //     borderColor: '#00665C',
// //     borderRadius: 12,
// //     padding: 20,
// //     marginBottom: 20,
// //     backgroundColor: '#fff',
// //   },
// //   cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// //   userInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
// //   avatar: {
// //     backgroundColor: '#00665C',
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
// //   userDetails: { flex: 1 },
// //   userName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 2 },
// //   serviceName: { fontSize: 14, color: '#666', fontStyle: 'italic' },
// //   ratingContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
// //   commentContainer: {
// //     backgroundColor: 'rgba(0, 102, 92, 0.03)',
// //     borderRadius: 8,
// //     padding: 15,
// //     marginBottom: 15,
// //     borderLeftWidth: 3,
// //     borderLeftColor: 'rgba(0, 102, 92, 0.2)',
// //   },
// //   comment: { fontSize: 14, color: '#333', lineHeight: 20 },
// //   timestamp: { fontSize: 12, color: '#00665C', alignSelf: 'flex-end' },
// // });

// // export default Feedback;
// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Animated,
//   Easing
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db } from '../../firebaseConfig';
// import { ref, onValue, off, get } from 'firebase/database';

// const Feedback = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { salon } = route.params || {};

//   const [feedbackData, setFeedbackData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const headerTranslateY = useRef(new Animated.Value(-50)).current;
//   const cardAnimations = useRef([]).current;

//   useEffect(() => {
//     Animated.timing(headerTranslateY, {
//       toValue: 0,
//       duration: 500,
//       easing: Easing.out(Easing.back(1.7)),
//       useNativeDriver: true
//     }).start();

//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 800,
//       useNativeDriver: true
//     }).start();

//     if (!salon || !salon.ownerId) {
//       setLoading(false);
//       return;
//     }

//     const reviewsRef = ref(db, 'reviews');

//     const listener = onValue(reviewsRef, async (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();

//         // Filter reviews by ownerId passed via params
//         const reviewsArray = Object.entries(data)
//           .map(([key, value]) => ({ id: key, ...value }))
//           .filter(review => review.ownerId === salon.ownerId);

//         // Fetch usernames for each review
//         const userNames = {};
//         await Promise.all(
//           reviewsArray.map(async (review) => {
//             if (!userNames[review.userId]) {
//               try {
//                 const userRef = ref(db, `users/${review.userId}`);
//                 const userSnap = await get(userRef);
//                 if (userSnap.exists()) {
//                   const userData = userSnap.val();
//                   userNames[review.userId] = userData.fullName || 'Anonymous';
//                 } else {
//                   userNames[review.userId] = 'Anonymous';
//                 }
//               } catch (error) {
//                 console.error('Error fetching user name:', error);
//                 userNames[review.userId] = 'Anonymous';
//               }
//             }
//           })
//         );

//         const reviewsWithNames = reviewsArray.map((review) => ({
//           ...review,
//           userName: userNames[review.userId] || 'Anonymous',
//         }));

//         // Sort descending by timestamp
//         reviewsWithNames.sort(
//           (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
//         );

//         // Setup card animations
//         cardAnimations.length = reviewsWithNames.length;
//         for (let i = 0; i < reviewsWithNames.length; i++) {
//           cardAnimations[i] = {
//             opacity: new Animated.Value(0),
//             translateY: new Animated.Value(30),
//           };
//         }

//         reviewsWithNames.forEach((_, i) => {
//           Animated.sequence([
//             Animated.delay(i * 100),
//             Animated.parallel([
//               Animated.timing(cardAnimations[i].opacity, {
//                 toValue: 1,
//                 duration: 500,
//                 useNativeDriver: true
//               }),
//               Animated.timing(cardAnimations[i].translateY, {
//                 toValue: 0,
//                 duration: 400,
//                 easing: Easing.out(Easing.back(1)),
//                 useNativeDriver: true
//               })
//             ])
//           ]).start();
//         });

//         setFeedbackData(reviewsWithNames);
//       } else {
//         setFeedbackData([]);
//       }
//       setLoading(false);
//     });

//     return () => {
//       off(reviewsRef, 'value', listener);
//     };
//   }, [salon]);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Icon name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Feedback and Ratings</Text>
//       </Animated.View>

//       {loading ? (
//         <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
//           <ActivityIndicator size="large" color="#00665C" />
//           <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>Loading feedback...</Animated.Text>
//         </Animated.View>
//       ) : (
//         <Animated.ScrollView style={[styles.scrollView, { opacity: fadeAnim }]}>
//           {feedbackData.length === 0 ? (
//             <View style={styles.emptyContainer}>
//               <View style={styles.emptyIconCircle}>
//                 <Icon name="feedback" size={60} color="#00665C" />
//               </View>
//               <Text style={styles.emptyTitle}>No Reviews Yet</Text>
//               <Text style={styles.emptySubtitle}>Your customer feedback will appear here</Text>
//             </View>
//           ) : (
//             feedbackData.map((feedback, index) => (
//               <Animated.View
//                 key={feedback.id}
//                 style={[
//                   styles.card,
//                   {
//                     opacity: cardAnimations[index]?.opacity,
//                     transform: [{ translateY: cardAnimations[index]?.translateY }],
//                   },
//                 ]}
//               >
//                 <View style={styles.cardHeader}>
//                   <View style={styles.userInfo}>
//                     <View style={styles.avatar}>
//                       <Text style={styles.avatarText}>{feedback.userName.charAt(0).toUpperCase()}</Text>
//                     </View>
//                     <View style={styles.userDetails}>
//                       <Text style={styles.userName}>{feedback.userName}</Text>
//                       <Text style={styles.serviceName}>Service: {feedback.serviceName}</Text>
//                     </View>
//                   </View>
//                   <View style={styles.ratingContainer}>
//                     {[...Array(5)].map((_, i) => (
//                       <Icon
//                         key={i}
//                         name={i < Math.floor(feedback.rating) ? 'star' : 'star-border'}
//                         size={18}
//                         color={i < feedback.rating ? '#FFD700' : '#E0E0E0'}
//                       />
//                     ))}
//                   </View>
//                 </View>
//                 {feedback.review && (
//                   <View style={styles.commentContainer}>
//                     <Text style={styles.comment}>
//                       <Icon name="format-quote" size={16} color="#00665C" style={{ opacity: 0.5 }} /> {feedback.review}
//                     </Text>
//                   </View>
//                 )}
//                 <Text style={styles.timestamp}>
//                   <Icon name="access-time" size={12} color="#00665C" />{' '}
//                   {feedback.timestamp
//                     ? new Date(feedback.timestamp).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'short',
//                         day: 'numeric',
//                         hour: '2-digit',
//                         minute: '2-digit',
//                       })
//                     : 'No Date'}
//                 </Text>
//               </Animated.View>
//             ))
//           )}
//         </Animated.ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#EAF4F4' },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#00665C',
//     padding: 15,
//     paddingTop: 70,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 8,
//     zIndex: 10,
//   },
//   backButton: {
//     padding: 5,
//     borderRadius: 20,
//     backgroundColor: 'rgba(255,255,255,0.2)',
//   },
//   headerTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 8 },
//   scrollView: { flex: 1, padding: 15 },
//   loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   loadingText: { marginTop: 15, color: '#00665C', fontSize: 16, fontWeight: '500' },
//   emptyContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 50 },
//   emptyIconCircle: {
//     backgroundColor: 'rgba(0, 102, 92, 0.1)',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   emptyTitle: { fontSize: 22, color: '#00665C', fontWeight: '600', marginBottom: 8 },
//   emptySubtitle: { fontSize: 16, color: '#78909C', textAlign: 'center', maxWidth: 250 },
//   card: {
//     borderWidth: 2,
//     borderColor: '#00665C',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
//   userInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   avatar: {
//     backgroundColor: '#00665C',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
//   userDetails: { flex: 1 },
//   userName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 2 },
//   serviceName: { fontSize: 14, color: '#666', fontStyle: 'italic' },
//   ratingContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: 10 },
//   commentContainer: {
//     backgroundColor: 'rgba(0, 102, 92, 0.03)',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     borderLeftWidth: 3,
//     borderLeftColor: 'rgba(0, 102, 92, 0.2)',
//   },
//   comment: { fontSize: 14, color: '#333', lineHeight: 20 },
//   timestamp: { fontSize: 12, color: '#00665C', alignSelf: 'flex-end' },
// });

// export default Feedback;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FeedbackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const salon = route.params?.salon;

  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getDatabase();

  useEffect(() => {
    if (!salon || !salon.ownerId) {
      Alert.alert("Error", "Salon details missing.");
      setLoading(false);
      return;
    }

    const reviewsRef = ref(db, "reviews/");

    const unsubscribe = onValue(reviewsRef, async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let reviewsArray = [];

        // Filter reviews for this salon owner only
        Object.entries(data).forEach(([reviewId, review]) => {
          if (review.ownerId === salon.ownerId) {
            reviewsArray.push({ id: reviewId, ...review });
          }
        });

        // Fetch usernames for each review.userId
        // Use Promise.all to wait for all usernames fetched
        const userNames = {};
        await Promise.all(
          reviewsArray.map(async (review) => {
            if (!userNames[review.userId]) {
              try {
                const userRef = ref(db, `users/${review.userId}`);
                const userSnap = await get(userRef);
                if (userSnap.exists()) {
                  userNames[review.userId] = userSnap.val().fullName || "Anonymous";
                } else {
                  userNames[review.userId] = "Anonymous";
                }
              } catch (error) {
                userNames[review.userId] = "Anonymous";
              }
            }
          })
        );

        // Attach userName to each review
        reviewsArray = reviewsArray.map((r) => ({
          ...r,
          userName: userNames[r.userId] || "Anonymous",
        }));

        // Sort by latest timestamp first
        reviewsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        setFeedbackList(reviewsArray);
      } else {
        setFeedbackList([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [salon]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.userName.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.serviceName}>Service: {item.serviceName}</Text>
        </View>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name={i < Math.floor(item.rating) ? "star" : "star-border"}
              size={18}
              color={i < item.rating ? "#FFD700" : "#E0E0E0"}
            />
          ))}
        </View>
      </View>
      {item.review ? (
        <Text style={styles.comment}>
          <Icon
            name="format-quote"
            size={16}
            color="#00665C"
            style={{ opacity: 0.5 }}
          />{" "}
          {item.review}
        </Text>
      ) : null}
      <Text style={styles.timestamp}>
        <Icon name="access-time" size={12} color="#00665C" />{" "}
        {item.timestamp
          ? new Date(item.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "No Date"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback & Ratings</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#00665C" style={{ marginTop: 20 }} />
      ) : feedbackList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="feedback" size={60} color="#00665C" />
          <Text style={styles.emptyTitle}>No Reviews Yet</Text>
          <Text style={styles.emptySubtitle}>
            Your customer feedback will appear here
          </Text>
        </View>
      ) : (
        <FlatList
          data={feedbackList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 15 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EAF4F4" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00665C",
    padding: 15,
    paddingTop: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  backBtn: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#00665C",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: "#00665C",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  serviceName: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  ratingContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  comment: {
    fontSize: 14,
    color: "#333",
    fontStyle: "normal",
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: "#00665C",
    alignSelf: "flex-end",
  },
  emptyContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 22,
    color: "#00665C",
    fontWeight: "600",
    marginTop: 20,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#78909C",
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});

export default FeedbackScreen;
