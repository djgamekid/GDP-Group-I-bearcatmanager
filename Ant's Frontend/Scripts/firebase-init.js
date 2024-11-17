// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUkF0UxSM1vYwamXGJSEUYtMtRysAj4D4",
  authDomain: "bearcat-event-manager.firebaseapp.com",
  projectId: "bearcat-event-manager",
  storageBucket: "bearcat-event-manager.appspot.com",
  messagingSenderId: "514151994430",
  appId: "1:514151994430:web:6e5960295b129819be2d6f",
  measurementId: "G-TYFTHGCBK3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();  // Get Firestore reference
const auth = firebase.auth();  // Get Auth reference

// Make Firebase objects accessible globally
window.db = db;
window.auth = auth;

console.log("Firebase initialized successfully");