import { getDatabase, ref, push } from "firebase/database";
import { db } from "../firebaseConfig"; // ✅ Tumhara correct path

export function saveUserAction(userId, serviceId, serviceName, category, actionType, reward = 0) {
  const actionData = {
    serviceId,
    serviceName,
    category,
    actionType,
    reward,
    timestamp: new Date().toISOString(),
  };

  push(ref(db, 'userActions/' + userId), actionData)
    .then(() => {
      console.log("✅ Action saved successfully:", actionData);
    })
    .catch((error) => {
      console.error("❌ Error saving action:", error);
    });
}
