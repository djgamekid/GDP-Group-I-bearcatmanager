import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUkF0UxSM1vYwamXGJSEUYtMtRysAj4D4",
    authDomain: "bearcat-event-manager.firebaseapp.com",
    projectId: "bearcat-event-manager",
    storageBucket: "bearcat-event-manager.firebasestorage.app",
    messagingSenderId: "514151994430",
    appId: "1:514151994430:web:6e5960295b129819be2d6f",
    measurementId: "G-TYFTHGCBK3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

// Export the services (optional, if used in other files)
export { app, db, auth };

