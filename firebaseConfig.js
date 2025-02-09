import { initializeApp } from "firebase/app"; // ✅ Import Firebase Core
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAI0Y3juLp_42C_Hyh2umQDL9N2nKgLAWo",
  authDomain: "groomify-aa6f8.firebaseapp.com",
  databaseURL: "https://groomify-aa6f8-default-rtdb.firebaseio.com", // ✅ Verified Database URL
  projectId: "groomify-aa6f8",
  storageBucket: "groomify-aa6f8.appspot.com", // ✅ Fixed Storage Bucket
  messagingSenderId: "12531587521",
  appId: "1:12531587521:web:9b52fa83dd2904eff33740",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app); // ✅ Initialize Storage

export { auth, db, storage }; // ✅ Export Everything
