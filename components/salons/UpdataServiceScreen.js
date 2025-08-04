// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import { ref, update } from 'firebase/database';
// // import { getAuth } from 'firebase/auth';
// // import { db } from '../../firebaseConfig';
// // import * as ImagePicker from 'expo-image-picker';
// // import { Picker } from '@react-native-picker/picker';
// // import { Ionicons } from 'react-native-vector-icons';
// // import axios from 'axios';

// // const UpdateServiceScreen = ({ route }) => {
// //   const navigation = useNavigation();
// //   const { service } = route.params || {};
// //   const [serviceName, setServiceName] = useState(service?.serviceName || '');
// //   const [price, setPrice] = useState(service?.price || '');
// //   const [additionalCharges, setAdditionalCharges] = useState(service?.additionalCharges || '');
// //   const [serviceType, setServiceType] = useState(service?.serviceType || 'Home Salon');
// //   const [serviceDescription, setServiceDescription] = useState(service?.serviceDescription || '');
// //   const [images, setImages] = useState(service?.images || []);
// //   const auth = getAuth();
// //   const user = auth.currentUser;

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     if (!result.canceled) {
// //       setImages([result.assets[0].uri]);
// //     }
// //   };

// //   const uploadImageToCloudinary = async (imageUri) => {
// //     const data = new FormData();
// //     data.append('file', {
// //       uri: imageUri,
// //       type: 'image/jpeg',
// //       name: 'updated_service_image.jpg',
// //     });
// //     data.append('upload_preset', 'Groomify');

// //     try {
// //       const response = await axios.post('https://api.cloudinary.com/v1_1/der7nytc0/image/upload', data, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       return response.data.secure_url;
// //     } catch (error) {
// //       console.error('Cloudinary upload error', error);
// //       throw new Error('Failed to upload image to Cloudinary');
// //     }
// //   };

// //   const updateService = async () => {
// //     if (!serviceName || !price || !serviceDescription) {
// //       Alert.alert('Error', 'Please fill in all fields.');
// //       return;
// //     }

// //     if (!user) {
// //       Alert.alert('Error', 'User not authenticated.');
// //       return;
// //     }

// //     try {
// //       let uploadedImageUrls = images;

// //       if (images.length === 1 && !images[0].startsWith('https')) {
// //         uploadedImageUrls = await Promise.all(images.map(uploadImageToCloudinary));
// //       }

// //       const updatedServiceData = {
// //         serviceName,
// //         price,
// //         additionalCharges,
// //         serviceType,
// //         serviceDescription,
// //         images: uploadedImageUrls,
// //         ownerId: user.uid,
// //       };

// //       update(ref(db, `services/${service.serviceId}`), updatedServiceData)
// //         .then(() => {
// //           Alert.alert('Success', 'Service updated successfully!');
// //           navigation.goBack();
// //         })
// //         .catch((error) => {
// //           Alert.alert('Error', 'Failed to update service: ' + error.message);
// //         });
// //     } catch (error) {
// //       Alert.alert('Error', 'Image upload failed: ' + error.message);
// //     }
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
// //         <Ionicons name="arrow-back" size={24} color="black" />
// //       </TouchableOpacity>

// //       <Text style={styles.header}>Update Service</Text>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Service Name</Text>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Enter Service Name"
// //           value={serviceName}
// //           onChangeText={setServiceName}
// //         />
// //       </View>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Price (in Rupees)</Text>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Enter Price"
// //           value={price}
// //           onChangeText={setPrice}
// //           keyboardType="numeric"
// //         />
// //       </View>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Additional Charges</Text>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Enter Additional Charges"
// //           value={additionalCharges}
// //           onChangeText={setAdditionalCharges}
// //           keyboardType="numeric"
// //         />
// //       </View>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Service Type</Text>
// //         <View style={styles.pickerContainer}>
// //           <Picker selectedValue={serviceType} onValueChange={(itemValue) => setServiceType(itemValue)}>
// //             <Picker.Item label="Home Salon" value="Home Salon" />
// //             <Picker.Item label="In Salon" value="In Salon" />
// //           </Picker>
// //         </View>
// //       </View>

// //       <View style={styles.inputContainer}>
// //         <Text style={styles.label}>Service Description</Text>
// //         <TextInput
// //           style={[styles.input, { height: 80 }]}
// //           placeholder="Enter Service Description"
// //           value={serviceDescription}
// //           onChangeText={setServiceDescription}
// //           multiline
// //         />
// //       </View>

// //       <Text style={styles.label}>Upload Image</Text>
// //       <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
// //         <Text style={styles.addImageButtonText}>
// //           {images.length ? 'Replace Image' : '+ Add Image'}
// //         </Text>
// //       </TouchableOpacity>

// //       <View style={styles.imageContainer}>
// //         {images.map((image, index) => (
// //           <Image key={index} source={{ uri: image }} style={styles.image} />
// //         ))}
// //       </View>

// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
// //           <Text style={styles.buttonText}>Cancel</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.saveButton} onPress={updateService}>
// //           <Text style={styles.buttonText}>Update Service</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     backgroundColor: '#EAF4F4',
  
  
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     top: 40,
// //     left: 8,
// //     zIndex: 10,
// //   },
// //   header: {
// //     fontSize: 40,
// //     fontWeight: 'bold',
// //     marginBottom: 30,
// //     textAlign: 'center',
// //     color: '#00665C',
// //     marginTop: 30,
// //   },
// //   inputContainer: {
// //     marginBottom: 16,
// //   },
// //   label: {
// //     fontSize: 16,
// //     marginBottom: 8,
// //     color: '#333',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     paddingLeft: 8,
// //     backgroundColor: '#fff',
// //   },
// //   pickerContainer: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     borderRadius: 8,
// //     backgroundColor: '#fff',
// //   },
// //   addImageButton: {
// //     backgroundColor: '#00665C',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   addImageButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   imageContainer: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     marginBottom: 16,
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //     marginRight: 8,
// //     marginBottom: 8,
// //     borderRadius: 8,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   cancelButton: {
// //     backgroundColor: '#ccc',
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     marginRight: 8,
// //     alignItems: 'center',
// //   },
// //   saveButton: {
// //     backgroundColor: '#00665C',
// //     padding: 12,
// //     borderRadius: 8,
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });

// // export default UpdateServiceScreen;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { ref, update } from 'firebase/database';
// import { getAuth } from 'firebase/auth';
// import { db } from '../../firebaseConfig';
// import * as ImagePicker from 'expo-image-picker';
// import { Picker } from '@react-native-picker/picker';
// import { Ionicons } from 'react-native-vector-icons';
// import axios from 'axios';

// const UpdateServiceScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const { service } = route.params || {};
//   const [serviceName, setServiceName] = useState(service?.serviceName || '');
//   const [price, setPrice] = useState(service?.price || '');
//   const [additionalCharges, setAdditionalCharges] = useState(service?.additionalCharges || '');
//   const [serviceType, setServiceType] = useState(service?.serviceType || 'Home Salon');
//   const [serviceDescription, setServiceDescription] = useState(service?.serviceDescription || '');
//   const [images, setImages] = useState(service?.images || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImages([result.assets[0].uri]);
//     }
//   };

//   const uploadImageToCloudinary = async (imageUri) => {
//     const data = new FormData();
//     data.append('file', {
//       uri: imageUri,
//       type: 'image/jpeg',
//       name: 'updated_service_image.jpg',
//     });
//     data.append('upload_preset', 'Groomify');

//     try {
//       const response = await axios.post('https://api.cloudinary.com/v1_1/der7nytc0/image/upload', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data.secure_url;
//     } catch (error) {
//       console.error('Cloudinary upload error', error);
//       throw new Error('Failed to upload image to Cloudinary');
//     }
//   };

//   const updateService = async () => {
//     if (!serviceName || !price || !serviceDescription) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     if (!user) {
//       Alert.alert('Error', 'User not authenticated.');
//       return;
//     }

//     try {
//       let uploadedImageUrls = images;

//       if (images.length === 1 && !images[0].startsWith('https')) {
//         uploadedImageUrls = await Promise.all(images.map(uploadImageToCloudinary));
//       }

//       const updatedServiceData = {
//         serviceName,
//         price,
//         additionalCharges,
//         serviceDescription,
//         images: uploadedImageUrls,
//         ownerId: user.uid,
//       };

//       // Determine the service types to update
//       const serviceTypesToUpdate = serviceType === 'Both' ? ['Home Salon', 'In Salon'] : [serviceType];

//       // Update the service for each selected type
//       const updatePromises = serviceTypesToUpdate.map((type) => {
//         const serviceDataWithType = {
//           ...updatedServiceData,
//           serviceType: type,
//         };

//         // Use a unique key for each service type
//         const serviceKey = serviceType === 'Both' ? `${service.serviceId}_${type}` : service.serviceId;

//         return update(ref(db, `services/${serviceKey}`), serviceDataWithType);
//       });

//       await Promise.all(updatePromises);

//       Alert.alert('Success', 'Service updated successfully!');
//       navigation.goBack();
//     } catch (error) {
//       Alert.alert('Error', 'Failed to update service: ' + error.message);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Ionicons name="arrow-back" size={24} color="black" />
//       </TouchableOpacity>

//       <Text style={styles.header}>Update Service</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Service Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Service Name"
//           value={serviceName}
//           onChangeText={setServiceName}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Price (in Rupees)</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Price"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Additional Charges</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Additional Charges"
//           value={additionalCharges}
//           onChangeText={setAdditionalCharges}
//           keyboardType="numeric"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Service Type</Text>
//         <View style={styles.pickerContainer}>
//           <Picker selectedValue={serviceType} onValueChange={(itemValue) => setServiceType(itemValue)}>
//             <Picker.Item label="Home Salon" value="Home Salon" />
//             <Picker.Item label="In Salon" value="In Salon" />
//             <Picker.Item label="Both" value="Both" />
//           </Picker>
//         </View>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Service Description</Text>
//         <TextInput
//           style={[styles.input, { height: 80 }]}
//           placeholder="Enter Service Description"
//           value={serviceDescription}
//           onChangeText={setServiceDescription}
//           multiline
//         />
//       </View>

//       <Text style={styles.label}>Upload Image</Text>
//       <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
//         <Text style={styles.addImageButtonText}>
//           {images.length ? 'Replace Image' : '+ Add Image'}
//         </Text>
//       </TouchableOpacity>

//       <View style={styles.imageContainer}>
//         {images.map((image, index) => (
//           <Image key={index} source={{ uri: image }} style={styles.image} />
//         ))}
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.saveButton} onPress={updateService}>
//           <Text style={styles.buttonText}>Update Service</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#EAF4F4',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 8,
//     zIndex: 10,
//   },
//   header: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: '#00665C',
//     marginTop: 30,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingLeft: 8,
//     backgroundColor: '#fff',
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   addImageButton: {
//     backgroundColor: '#00665C',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   addImageButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 8,
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cancelButton: {
//     backgroundColor: '#ccc',
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     marginRight: 8,
//     alignItems: 'center',
//   },
//   saveButton: {
//     backgroundColor: '#00665C',
//     padding: 12,
//     borderRadius: 8,
//     flex: 1,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default UpdateServiceScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ref, update } from 'firebase/database';
import { db } from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const UpdateServiceScreen = ({ route }) => {
  const navigation = useNavigation();
  const { service } = route.params || {};

  const [serviceName, setServiceName] = useState(service?.serviceName || '');
  const [price, setPrice] = useState(service?.price || '');
  const [additionalCharges, setAdditionalCharges] = useState(service?.additionalCharges || '');
  const [serviceType, setServiceType] = useState(service?.serviceType || 'Home Salon');
  const [serviceDescription, setServiceDescription] = useState(service?.serviceDescription || '');
  const [images, setImages] = useState(service?.images || []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([result.assets[0].uri]);
    }
  };

  const uploadImageToCloudinary = async (imageUri) => {
    const data = new FormData();
    data.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'updated_service_image.jpg',
    });
    data.append('upload_preset', 'Groomify');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/der7nytc0/image/upload',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  };

  const updateService = async () => {
    if (!serviceName || !price || !serviceDescription) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    try {
      let uploadedImageUrls = images;

      if (images.length === 1 && !images[0].startsWith('https')) {
        uploadedImageUrls = await Promise.all(images.map(uploadImageToCloudinary));
      }

      const updatedServiceData = {
        serviceName,
        price,
        additionalCharges,
        serviceType,
        serviceDescription,
        images: uploadedImageUrls,
        ownerId: service.ownerId, // Use ownerId from service
      };

      await update(ref(db, `services/${service.serviceId}`), updatedServiceData);

      Alert.alert('Success', 'Service updated successfully!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update service: ' + error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Update Service</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Service Name"
          value={serviceName}
          onChangeText={setServiceName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price (in Rupees)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Additional Charges</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Additional Charges"
          value={additionalCharges}
          onChangeText={setAdditionalCharges}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={serviceType}
            onValueChange={(itemValue) => setServiceType(itemValue)}
          >
            <Picker.Item label="Home Salon" value="Home Salon" />
            <Picker.Item label="In Salon" value="In Salon" />
            <Picker.Item label="Both" value="Both" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Service Description</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Enter Service Description"
          value={serviceDescription}
          onChangeText={setServiceDescription}
          multiline
        />
      </View>

      <Text style={styles.label}>Upload Image</Text>
      <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
        <Text style={styles.addImageButtonText}>
          {images.length ? 'Replace Image' : '+ Add Image'}
        </Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={updateService}>
          <Text style={styles.buttonText}>Update Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#EAF4F4' },
  backButton: { position: 'absolute', top: 40, left: 8, zIndex: 10 },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#00665C',
    marginTop: 30,
  },
  inputContainer: { marginBottom: 16 },
  label: { fontSize: 16, marginBottom: 8, color: '#333' },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addImageButton: {
    backgroundColor: '#00665C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addImageButtonText: { color: '#fff', fontSize: 16 },
  imageContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  image: {
    width: 100,
    height: 100,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#00665C',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default UpdateServiceScreen;
