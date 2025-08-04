import { initializeApp } from "firebase/app"; // ✅ Import Firebase Core
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// ⚠️ SECURITY WARNING: In production, these should be environment variables
// For development only - move to .env file for production
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "AIzaSyAI0Y3juLp_42C_Hyh2umQDL9N2nKgLAWo",
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "groomify-aa6f8.firebaseapp.com",
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL || "https://groomify-aa6f8-default-rtdb.firebaseio.com",
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "groomify-aa6f8",
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "groomify-aa6f8.appspot.com",
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "12531587521",
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "1:12531587521:web:9b52fa83dd2904eff33740",
};

// Validate required configuration
const requiredKeys = ['apiKey', 'authDomain', 'projectId'];
for (const key of requiredKeys) {
  if (!firebaseConfig[key]) {
    throw new Error(`Firebase configuration missing required key: ${key}`);
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };
