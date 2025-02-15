
// import 'react-native-gesture-handler';


// import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);
import 'react-native-gesture-handler'; // Ensures gesture handler is initialized before anything else

import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json'; // Ensure appName is correctly imported

// Debugging: Check if App is correctly imported
console.log('Registering App Component:', App);

// Ensure the app is registered properly
registerRootComponent(App);

// Explicitly register with AppRegistry to prevent "main" error
AppRegistry.registerComponent('groomify', () => App); // Ensure 'groomify' matches app.json

// Debugging: Confirm component registration
console.log('App Component Registered as:', 'groomify');
