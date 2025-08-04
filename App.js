import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

// Common Screens
import SplashScreen from './components/common/SplashScreen';
import OnboardingScreen from './components/common/OnboardingScreen';
import RoleSelectionScreen from './components/common/RoleSelectionScreen';

// User Screens
import userSignupScreen from './components/users/userSignupScreen';
import UserLoginScreen from './components/users/UserLoginScreen';
import ForgotPassword from './components/users/ForgotPassword';
import UserHomeScreen from './components/users/UserHomeScreen';
import MaleHomeScreen from './components/users/MaleHomeScreen';
import UserProfile from './components/users/UserProfile';
import SalonList from './components/users/SalonsList';
import SalonsScreen from './components/users/SalonsScreen';
import UserService from './components/users/UserService';
import BookService from './components/users/BookService';
import Chatbot from './components/users/Chatbot';
import HistoryScreen from './components/users/HistoryScreen';
import AddReviewRating from './components/users/AddreviewRating';

// Female User Services
import Haircut from './components/users/Haircut';
import Nails from './components/users/Nails';
import Facial from './components/users/Facial';
import Coloring from './components/users/Coloring';
import Waxing from './components/users/Waxing';
import Makeup from './components/users/Makeup';
import Massage from './components/users/Massage';
import Spa from './components/users/Spa';
import femaleQuestionaaire from './components/users/femaleQuestionaaire';
import FemaleRecommendedScreen from './components/users/FemaleRecommendedScreen';

// Male User Services
import MaleQuestionaaire from './components/users/MaleQuestionaaire';
import RecommendedScreen from './components/users/RecommendedScreen';
import MaleFacial from './components/users/MaleFacial';
import Malehaircut from './components/users/Malehaircut';
import Malehaircolor from './components/users/Malehaircolor';
import MaleShaving from './components/users/MaleShaving';
import Malebeard from './components/users/Malebeard';
import MaleMassage from './components/users/MaleMassage';
import MalebookingScreen from './components/users/MalebookingScreen';

// Salon Screens
import SalonSignupScreen from './components/salons/SalonSignupScreen';
import SalonLoginForm from './components/salons/SalonLoginForm';
import SalonHomeScreen from './components/salons/SalonHomeScreen';
import AddServices from './components/salons/AddServices';
import MyServices from './components/salons/MyServices';
import Profile from './components/salons/Profile';
import ServiceDetails from './components/salons/ServiceDetails';
import UpdateServiceScreen from './components/salons/UpdataServiceScreen';
import AppointmentsScreen from './components/salons/AppointmentsScreen';
import Feedback from './components/salons/Feedback';


LogBox.ignoreLogs([
  'TNodeChildrenRenderer: Support for defaultProps will be removed from function components',
  'MemoizedTNodeRenderer: Support for defaultProps will be removed from memo components',
  'TRenderEngineProvider: Support for defaultProps will be removed from function components'
]);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        {/* Common Screens */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="RoleSelectionScreen" component={RoleSelectionScreen} />

        {/* User Authentication Screens */}
        <Stack.Screen name="userSignupScreen" component={userSignupScreen} />
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        {/* User Main Screens */}
        <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
        <Stack.Screen name="MaleHomeScreen" component={MaleHomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="SalonList" component={SalonList} />
        <Stack.Screen name="SalonsScreen" component={SalonsScreen} />
        <Stack.Screen name="UserService" component={UserService} />
        <Stack.Screen name="BookService" component={BookService} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
            <Stack.Screen name="AddReviewRating" component={AddReviewRating} />

        {/* Female User Services */}
        <Stack.Screen name="Haircut" component={Haircut} />
        <Stack.Screen name="Nails" component={Nails} />
        <Stack.Screen name="Facial" component={Facial} />
        <Stack.Screen name="Coloring" component={Coloring} />
        <Stack.Screen name="Waxing" component={Waxing} />
        <Stack.Screen name="Makeup" component={Makeup} />
        <Stack.Screen name="Massage" component={Massage} />
        <Stack.Screen name="Spa" component={Spa} />
        <Stack.Screen name="femaleQuestionaaire" component={femaleQuestionaaire} />
        <Stack.Screen name="FemaleRecommendedScreen" component={FemaleRecommendedScreen} />

        {/* Male User Services */}
        <Stack.Screen name="MaleQuestionaaire" component={MaleQuestionaaire} />
        <Stack.Screen name="RecommendedScreen" component={RecommendedScreen} />
        <Stack.Screen name="MaleFacial" component={MaleFacial} />
        <Stack.Screen name="Malehaircut" component={Malehaircut} />
        <Stack.Screen name="Malehaircolor" component={Malehaircolor} />
        <Stack.Screen name="MaleShaving" component={MaleShaving} />
        <Stack.Screen name="Malebeard" component={Malebeard} />
        <Stack.Screen name="MaleMassage" component={MaleMassage} />
        <Stack.Screen name="MalebookingScreen" component={MalebookingScreen} />

        {/* Salon Screens */}
        <Stack.Screen name="SalonSignupScreen" component={SalonSignupScreen} />
        <Stack.Screen name="SalonLoginForm" component={SalonLoginForm} />
        <Stack.Screen name="SalonHomeScreen" component={SalonHomeScreen} />
        <Stack.Screen name="AddServices" component={AddServices} />
        <Stack.Screen name="MyServices" component={MyServices} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="UpdateServiceScreen" component={UpdateServiceScreen} />
        <Stack.Screen name="AppointmentsScreen" component={AppointmentsScreen} />
        <Stack.Screen name="Feedback" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;