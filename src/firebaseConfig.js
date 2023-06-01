// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0-HWB81AfC_VoXrOzLL4AtA2zMaFxM-8",
  authDomain: "my-expo-chat-5c27e.firebaseapp.com",
  projectId: "my-expo-chat-5c27e",
  storageBucket: "my-expo-chat-5c27e.appspot.com",
  messagingSenderId: "872753577754",
  appId: "1:872753577754:web:a256fe32f04120942776a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app;
