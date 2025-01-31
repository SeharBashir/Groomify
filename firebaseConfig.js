


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI0Y3juLp_42C_Hyh2umQDL9N2nKgLAWo",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://groomify-aa6f8-default-rtdb.firebaseio.com/",  // 👈 Realtime Database URL
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // 👈 Realtime Database

export { auth, db };

