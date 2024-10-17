import { initializeApp } from "firebase/app";
import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

// Firease config
const firebaseConfig = {
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef",
};

// Firebase init
const app = initializeApp(firebaseConfig);

// Get functions ref
const functions = getFunctions(app);

// Connect with emulator
connectFunctionsEmulator(functions, "127.0.0.1", 5001);

// Call function
const myFunction = httpsCallable(functions, "test");

myFunction({ some: "data" })
  .then((result: any) => {
    console.log(result.data);
  })
  .catch((error: any) => {
    console.error("Error calling function:", error);
  });
