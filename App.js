



import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/common/SplashScreen';
import OnboardingScreen from './components/common/OnboardingScreen';
import RoleSelectionScreen from './components/common/RoleSelectionScreen';
import UserSignupScreen from './components/users/userSignupScreen';
import UserLoginScreen from './components/users/UserLoginScreen'
import ForgotPassword from './components/users/ForgotPassword'
import UserHomeScreen from './components/users/UserHomeScreen'
import MaleHomeScreen from './components/users/MaleHomeScreen'
import Haircut from './components/users/Haircut'
import UserProfile from './components/users/UserProfile'
import SalonList from './components/users/SalonsList'
import SalonsScreen from './components/users/SalonsScreen'
import UserService from './components/users/UserService'
import BookService from './components/users/BookService'
import SalonSignupScreen from './components/salons/SalonSignupScreen'
import SalonLoginForm from './components/salons/SalonLoginForm'
import SalonHomeScreen from './components/salons/SalonHomeScreen'
import AddServices from './components/salons/AddServices'
import MyServices from './components/salons/MyServices'

import Profile from './components/salons/Profile'
import Chatbot from './components/users/Chatbot'
import ServiceDetails from './components/salons/ServiceDetails';
import UpdateServiceScreen from './components/salons/UpdataServiceScreen';
import BeautyQuestionnaire from './components/users/BeautyQuestionnaire';
// import Appointments from './components/salons/Appointments';








const Stack = createNativeStackNavigator();

const App = ({email,setEmail,password,setPassword}) => {
  return (
    <NavigationContainer> {/* Wrap your Stack.Navigator in NavigationContainer */}
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />
        <Stack.Screen name="UserSignupScreen" component={UserSignupScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
        <Stack.Screen name="MaleHomeScreen" component={MaleHomeScreen} />
        <Stack.Screen name="Haircut" component={Haircut} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="SalonSignupScreen" component={SalonSignupScreen} />
        <Stack.Screen name="SalonLoginForm" component={SalonLoginForm} />
        <Stack.Screen name="SalonHomeScreen" component={SalonHomeScreen} />
        <Stack.Screen name="AddServices" component={AddServices} />
        <Stack.Screen name="MyServices" component={MyServices} />
        <Stack.Screen name="Profile" component={Profile} /> 
        <Stack.Screen name="SalonList" component={SalonList} /> 
        <Stack.Screen name="SalonsScreen" component={SalonsScreen} /> 
        <Stack.Screen name="UserService" component={UserService} /> 
        <Stack.Screen name="BookService" component={BookService} /> 
        <Stack.Screen name="Chatbot" component={Chatbot} /> 
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="UpdateServiceScreen" component={UpdateServiceScreen} />
        <Stack.Screen name="BeautyQuestionnaire" component={BeautyQuestionnaire} />
        {/* <Stack.Screen name="Appointments" component={Appointments} /> */}
        



        {/* Add other screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;