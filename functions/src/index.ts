import { onCall } from "firebase-functions/v2/https";
exports.test = onCall((request) => {
  console.log("Recibida llamada");
  return { message: "Hello from Firebase!" };
});
