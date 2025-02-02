



import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/common/SplashScreen';
import OnboardingScreen from './components/common/OnboardingScreen';
import RoleSelectionScreen from './components/common/RoleSelectionScreen';
import UserSignupScreen from './components/users/UserSignupScreen';
import SalonSignupScreen from './components/salons/SalonSignupScreen';


const Stack = createNativeStackNavigator();

const App = ({email,setEmail,password,setPassword}) => {
  return (
    <NavigationContainer> {/* Wrap your Stack.Navigator in NavigationContainer */}
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
        <Stack.Screen name="UserSignupScreen" component={UserSignupScreen} />
        <Stack.Screen name="SalonSignupScreen" component={SalonSignupScreen} />
        {/* Add other screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;