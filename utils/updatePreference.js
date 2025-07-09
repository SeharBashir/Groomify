// // // // // import { db } from "../firebaseConfig";
// // // // // import { ref, get, set } from "firebase/database";

// // // // // export const updatePreference = async (userId, serviceName, rating) => {
// // // // //   try {
// // // // //     const prefRef = ref(db, `users/${userId}/preferences`);
// // // // //     const snapshot = await get(prefRef);

// // // // //     let prefs = snapshot.exists() ? snapshot.val() : {};

// // // // //     let oldScore = prefs[serviceName] || 0.5;
// // // // //     let reward = rating / 5;
// // // // //     let learningRate = 0.1;

// // // // //     let newScore = oldScore + learningRate * (reward - oldScore);

// // // // //     newScore = Math.max(0, Math.min(1, newScore));

// // // // //     prefs[serviceName] = newScore;

// // // // //     await set(prefRef, prefs);
// // // // //     console.log("✅ Preferences updated in Firebase");
// // // // //   } catch (error) {
// // // // //     console.error("❌ Error updating preferences:", error);
// // // // //   }
// // // // // };
// // // // // import { db } from "../firebaseConfig";
// // // // // import { ref, get, set } from "firebase/database";

// // // // // export const updatePreference = async (userId, serviceName, rating) => {
// // // // //   try {
// // // // //     const prefRef = ref(db, `users/${userId}/preferences`);
// // // // //     const snapshot = await get(prefRef);

// // // // //     let prefs = snapshot.exists() ? snapshot.val() : {};

// // // // //     let oldScore = prefs[serviceName] || 0.5; // Default score if none
// // // // //     let reward = rating / 5; // Normalize to 0-1
// // // // //     let learningRate = 0.1;

// // // // //     let newScore = oldScore + learningRate * (reward - oldScore);
// // // // //     newScore = Math.max(0, Math.min(1, newScore));

// // // // //     prefs[serviceName] = newScore;

// // // // //     await set(prefRef, prefs);
// // // // //     console.log("✅ Preferences updated in Firebase (reinforcement table)");
// // // // //   } catch (error) {
// // // // //     console.error("❌ Error updating preferences:", error);
// // // // //   }
// // // // // };
// // // // import { db } from "../firebaseConfig";
// // // // import { ref, get, set } from "firebase/database";

// // // // export const updatePreference = async (userId, serviceName, rating) => {
// // // //   try {
// // // //     // Get preferences
// // // //     const prefRef = ref(db, `users/${userId}/preferences`);
// // // //     const snapshot = await get(prefRef);

// // // //     let prefs = snapshot.exists() ? snapshot.val() : {};
// // // //     let scores = prefs.scores || {};
// // // //     let selectedServices = prefs.selectedServices || [];

// // // //     // Previous score
// // // //     let oldScore = scores[serviceName] || 0.5; // Default
// // // //     let reward = rating / 5; // Normalize
// // // //     let learningRate = 0.1;

// // // //     // New score
// // // //     let newScore = oldScore + learningRate * (reward - oldScore);
// // // //     newScore = Math.max(0, Math.min(1, newScore));

// // // //     // Update score object
// // // //     scores[serviceName] = newScore;

// // // //     // ✅ Check threshold (example: 0.7)
// // // //     const threshold = 0.4;
// // // //     if (newScore >= threshold && !selectedServices.includes(serviceName)) {
// // // //       selectedServices.push(serviceName);
// // // //     }

// // // //     // Save back
// // // //     await set(prefRef, {
// // // //       scores,
// // // //       selectedServices,
// // // //       priceRange: prefs.priceRange || "500-3000", // Keep old price range if exists
// // // //     });

// // // //     console.log("✅ Preferences & selectedServices updated in Firebase (reinforcement table)");
// // // //   } catch (error) {
// // // //     console.error("❌ Error updating preferences:", error);
// // // //   }
// // // // };
// // import { db } from "../firebaseConfig";
// // import { ref, get, set } from "firebase/database";

// // export const updatePreference = async (userId, serviceName, rating) => {
// //   try {
// //     const prefRef = ref(db, `users/${userId}/preferences`);
// //     const snapshot = await get(prefRef);

// //     let prefs = snapshot.exists() ? snapshot.val() : {};
// //     let scores = prefs.scores || {};
// //     let selectedServices = prefs.selectedServices || [];

// //     const cleanServiceName = serviceName.trim();

// //     let oldScore = scores[cleanServiceName] || 0.5;
// //     let reward = rating / 5;
// //     let learningRate = 0.1;

// //     let newScore = oldScore + learningRate * (reward - oldScore);
// //     newScore = Math.max(0, Math.min(1, newScore));

// //     scores[cleanServiceName] = newScore;

// //     const threshold = 0.4;
// //     if (newScore >= threshold && !selectedServices.includes(cleanServiceName)) {
// //       selectedServices.push(cleanServiceName);
// //     }

// //     await set(prefRef, {
// //       scores,
// //       selectedServices,
// //       priceRange: prefs.priceRange || "500-3000",
// //     });

// //     console.log("✅ Preferences & selectedServices updated in Firebase (reinforcement table)");
// //   } catch (error) {
// //     console.error("❌ Error updating preferences:", error);
// //   }
// // };
// // // import { db } from "../firebaseConfig";
// // // import { ref, get, set } from "firebase/database";

// // // export const updatePreference = async (userId, serviceName, rating) => {
// // //   try {
// // //     const prefRef = ref(db, `users/${userId}/preferences`);
// // //     const snapshot = await get(prefRef);

// // //     let prefs = snapshot.exists() ? snapshot.val() : {};
// // //     let scores = prefs.scores || {};

// // //     const cleanServiceName = serviceName.trim();

// // //     let oldScore = scores[cleanServiceName] || 0.5;
// // //     let reward = rating / 5;
// // //     let learningRate = 0.1;

// // //     let newScore = oldScore + learningRate * (reward - oldScore);
// // //     newScore = Math.max(0, Math.min(1, newScore));

// // //     scores[cleanServiceName] = newScore;

// // //     const threshold = 0.4;
// // //     let selectedServices = [];

// // //     // Only keep services above threshold
// // //     for (let key in scores) {
// // //       if (scores[key] >= threshold) {
// // //         selectedServices.push(key);
// // //       }
// // //     }

// // //     await set(prefRef, {
// // //       scores,
// // //       selectedServices,
// // //       priceRange: prefs.priceRange || "500-3000",
// // //     });

// // //     console.log("✅ Preferences & selectedServices updated and replaced in Firebase");
// // //   } catch (error) {
// // //     console.error("❌ Error updating preferences:", error);
// // //   }
// // // };
// import { ref, get, set } from "firebase/database";
// import { db } from "../firebaseConfig";

// export const updatePreference = async (userId, serviceName, rating) => {
//   try {
//     const prefRef = ref(db, `users/${userId}/preferences`);
//     const snapshot = await get(prefRef);

//     let prefs = snapshot.exists() ? snapshot.val() : {};
//     let scores = prefs.scores || {};
//     let selectedServices = prefs.selectedServices || [];

//     const cleanServiceName = serviceName.trim();

//     let oldScore = scores[cleanServiceName] || 0.5;
//     let reward = rating / 5;
//     let learningRate = 0.1;

//     let newScore = oldScore + learningRate * (reward - oldScore);
//     newScore = Math.max(0, Math.min(1, newScore));

//     scores[cleanServiceName] = newScore;

//     const threshold = 0.4;
//     if (newScore >= threshold && !selectedServices.includes(cleanServiceName)) {
//       selectedServices.push(cleanServiceName);
//     }

//     // ❌ REMOVE this line! Ye line old scores hata deti thi
//     // scores = {};

//     await set(prefRef, {
//       scores,
//       selectedServices,
//       priceRange: prefs.priceRange || "500-3000",
//     });

//     console.log("✅ Preferences updated, old scores intact!");
//   } catch (error) {
//     console.error("❌ Error updating preferences:", error);
//   }
// };
import { ref, get, set } from "firebase/database";
import { db } from "../firebaseConfig";

export const updatePreference = async (userId, serviceName, rating) => {
  try {
    if (!userId || !serviceName || rating === undefined) {
      throw new Error("Missing required parameters");
    }

    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      throw new Error("User not found");
    }

    const userData = snapshot.val();
    const preferences = userData.preferences || {};
    const scores = preferences.scores || {};
    let selectedServices = preferences.selectedServices || [];

    const cleanServiceName = serviceName.trim().toLowerCase();

    // Initialize score if it doesn't exist
    if (typeof scores[cleanServiceName] !== "number") {
      scores[cleanServiceName] = 0.5;
    }

    // Update score
    const oldScore = scores[cleanServiceName];
    const reward = rating / 5;
    const learningRate = 0.1;
    let newScore = oldScore + learningRate * (reward - oldScore);
    newScore = Math.max(0, Math.min(1, newScore));
    scores[cleanServiceName] = newScore;

    // Update selected services if threshold met
    const threshold = 0.4;
    if (newScore >= threshold && !selectedServices.includes(cleanServiceName)) {
      selectedServices = [...selectedServices, cleanServiceName];
    }

    // Update database
    await set(ref(db, `users/${userId}/preferences`), {
      scores,
      selectedServices,
      priceRange: preferences.priceRange || "500-3000",
    });

    console.log(`✅ Updated preference for ${cleanServiceName} to ${newScore}`);
    return true;
  } catch (error) {
    console.error("❌ Error updating preferences:", error);
    return false;
  }
};
