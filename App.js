// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Sehar</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/common/SplashScreen';
import OnboardingScreen from './components/common/OnboardingScreen';
import RoleSelectionScreen from './components/common/RoleSelectionScreen';
import UserSignupScreen from './components/users/UserSignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer> {/* Wrap your Stack.Navigator in NavigationContainer */}
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
        <Stack.Screen name="UserSignupScreen" component={UserSignupScreen} />
        {/* Add other screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;