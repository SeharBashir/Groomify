// // // // import React from 'react';
// // // // import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// // // // import Icon from 'react-native-vector-icons/FontAwesome';

// // // // const GroomifyChatbot = () => {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={styles.header}>
// // // //         <Text style={styles.headerText}>Groomify Chatbot</Text>
// // // //       </View>

// // // //       <View style={styles.content}>
// // // //         <Text style={styles.welcomeText}>Your grooming assistant!</Text>
// // // //         <Text style={styles.instructionText}>
// // // //           Upload an image for personalized makeup and hairstyle suggestions or ask beauty and skincare queries for instant expert advice.
// // // //         </Text>
// // // //         <TouchableOpacity style={styles.uploadButton}>
// // // //           <Icon name="upload" size={20} color="#fff" />
// // // //           <Text style={styles.uploadButtonText}>Upload Image</Text>
// // // //         </TouchableOpacity>
// // // //       </View>

// // // //       <View style={styles.footer}>
// // // //         <TouchableOpacity style={styles.footerButton}>
// // // //           <Icon name="home" size={20} color="#000" />
// // // //           <Text style={styles.footerButtonText}>Home</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.footerButton}>
// // // //           <Icon name="scissors" size={20} color="#000" />
// // // //           <Text style={styles.footerButtonText}>Salon</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.footerButton}>
// // // //           <Icon name="calendar" size={20} color="#000" />
// // // //           <Text style={styles.footerButtonText}>Booking</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.footerButton}>
// // // //           <Icon name="comments" size={20} color="#000" />
// // // //           <Text style={styles.footerButtonText}>AI Chatbot</Text>
// // // //         </TouchableOpacity>
// // // //         <TouchableOpacity style={styles.footerButton}>
// // // //           <Icon name="user" size={20} color="#000" />
// // // //           <Text style={styles.footerButtonText}>Profile</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //   },
// // // //   header: {
// // // //     padding: 20,
// // // //     backgroundColor: '#f8f8f8',
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#ddd',
// // // //   },
// // // //   headerText: {
// // // //     fontSize: 22,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   content: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     padding: 20,
// // // //   },
// // // //   welcomeText: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 10,
// // // //   },
// // // //   instructionText: {
// // // //     fontSize: 14,
// // // //     textAlign: 'center',
// // // //     marginBottom: 20,
// // // //   },
// // // //   uploadButton: {
// // // //     flexDirection: 'row',
// // // //     backgroundColor: '#007bff',
// // // //     padding: 10,
// // // //     borderRadius: 5,
// // // //     alignItems: 'center',
// // // //   },
// // // //   uploadButtonText: {
// // // //     color: '#fff',
// // // //     marginLeft: 10,
// // // //   },
// // // //   footer: {
// // // //     flexDirection: 'row',
// // // //     justifyContent: 'space-around',
// // // //     padding: 10,
// // // //     borderTopWidth: 1,
// // // //     borderTopColor: '#ddd',
// // // //   },
// // // //   footerButton: {
// // // //     alignItems: 'center',
// // // //   },
// // // //   footerButtonText: {
// // // //     fontSize: 12,
// // // //     marginTop: 5,
// // // //   },
// // // // });

// // // // export default GroomifyChatbot;


// // // import React from "react";
// // // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons";

// // // export default function ChatScreen() {
// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.header}>
// // //         <Text style={styles.headerText}>Groomify Chatbot</Text>
// // //       </View>
// // //       <Text style={styles.title}>What can I help with?</Text>
// // //       <Text style={styles.description}>
// // //         Your grooming assistant! Upload an image for personalized makeup and hairstyle
// // //         suggestions or ask beauty and skincare queries for instant expert advice.
// // //       </Text>
// // //       <View style={styles.inputContainer}>
// // //         <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
// // //         <TouchableOpacity style={styles.sendButton}>
// // //           <Ionicons name="send" size={20} color="gray" />
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, padding: 20, backgroundColor: "white" },
// // //   header: { backgroundColor: "#0E626D", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
// // //   headerText: { color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" },
// // //   title: { fontSize: 22, fontWeight: "bold", marginTop: 20, textAlign: "center" },
// // //   description: { textAlign: "center", color: "gray", marginTop: 10, fontSize: 14 },
// // //   inputContainer: { flexDirection: "row", alignItems: "center", marginTop: 20, borderColor: "gray", borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 },
// // //   input: { flex: 1, height: 40, color: "black" },
// // //   sendButton: { padding: 10 },
// // // });




// // import React from "react";
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";

// // export default function ChatScreen() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerText}>Groomify Chatbot</Text>
// //       </View>
// //       <Text style={styles.title}>What can I help with?</Text>
// //       <Text style={styles.description}>
// //         Your grooming assistant! Upload an image for personalized makeup and hairstyle
// //         suggestions or ask beauty and skincare queries for instant expert advice.
// //       </Text>
// //       <View style={styles.inputContainer}>
// //         <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
// //         <TouchableOpacity style={styles.sendButton}>
// //           <Ionicons name="send" size={20} color="gray" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: "white" },
// //   header: { backgroundColor: "#0E626D", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
// //   headerText: { color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" },
// //   title: { fontSize: 22, fontWeight: "bold", marginTop: 20, textAlign: "center", marginBottom: 80 },  // Zyada gap ke liye
// //   description: { textAlign: "center", color: "gray", fontSize: 14, marginBottom: 80 },  // Neeche zyada gap ke liye
// //   inputContainer: { 
// //     flexDirection: "row", 
// //     alignItems: "center", 
// //     marginTop: 300,  // Input field ko neeche move karne ke liye
// //     borderColor: "gray", 
// //     borderWidth: 1, 
// //     borderRadius: 10, 
// //     paddingHorizontal: 10 
// //   },
// //   input: { flex: 1, height: 40, color: "black" },
// //   sendButton: { padding: 10 },
// // });



// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export default function ChatScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Upper Section with Sea Green Background */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>Groomify Chatbot</Text>
//       </View>

//       {/* Lower Section with White Background */}
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>What can I help with?</Text>
//         <Text style={styles.description}>
//           Your grooming assistant! Upload an image for personalized makeup and hairstyle
//           suggestions or ask beauty and skincare queries for instant expert advice.
//         </Text>
//       </View>

//       {/* Input Field Fixed at Bottom */}
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
//         <TouchableOpacity style={styles.sendButton}>
//           <Ionicons name="send" size={20} color="gray" />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "white" },
  
//   // Upper Sea Green Section (Less than half screen)
//   headerContainer: { 
//     backgroundColor: "#00665C", 
//     paddingVertical: 60, 
//     alignItems: "center", 
//     borderBottomLeftRadius: 30, 
//     borderBottomRightRadius: 30 
//   },
//   headerText: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },

//   // Lower White Section
//   contentContainer: { padding: 40, flex: 1 },
//   title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#333" },
//   description: { textAlign: "center", color: "gray", fontSize: 16, marginBottom: 80 },

//   // Input Field at Bottom
//   inputContainer: { 
//     flexDirection: "row", 
//     alignItems: "center", 
//     borderColor: "gray", 
//     borderWidth: 1, 
//     borderRadius: 10, 
//     paddingHorizontal: 20, 
//     backgroundColor: "white",
//     position: "absolute",
//     bottom: 30,
//     left: 20,
//     right: 20
//   },
//   input: { flex: 1, height: 40, color: "black" },
//   sendButton: { padding: 10 },
// });
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Section with Sea Green Background */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Groomify Chatbot</Text>
      </View>

      {/* Lower Section with White Background (Content Centered) */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>What can I help with?</Text>
        <Text style={styles.description}>
          Your grooming assistant! Upload an image for personalized makeup and hairstyle
          suggestions or ask beauty and skincare queries for instant expert advice.
        </Text>
      </View>

      {/* Input Field Fixed at Bottom with Image and Send Icon */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="image-outline" size={24} color="gray" style={styles.icon} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Type a message" placeholderTextColor="#aaa" />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  
  // Upper Sea Green Section (Less than half screen)
  headerContainer: { 
    backgroundColor: "#00665C", 
    paddingVertical: 60, 
    alignItems: "center", 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30 
  },
  headerText: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center" },

  // Lower White Section (Content Centered)
  contentContainer: { flex: 1, paddingHorizontal: 40, justifyContent: "center" }, // Centered content
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10, color: "#333" },
  description: { textAlign: "center", color: "gray", fontSize: 16, marginBottom: 20 },

  // Input Field at Bottom with More Padding and Image Icon
  inputContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    borderColor: "gray", 
    borderWidth: 1, 
    borderRadius: 10, 
    paddingVertical: 15, // Increased Padding
    paddingHorizontal: 20, // Increased Padding
    backgroundColor: "white",
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20
  },
  icon: { marginRight: 10 }, // Space between icon and input field
  input: { flex: 1, height: 40, color: "black" },
  sendButton: { padding: 10 },
});
