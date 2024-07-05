// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "avenue-theblogapp.firebaseapp.com",
  projectId: "avenue-theblogapp",
  storageBucket: "avenue-theblogapp.appspot.com",
  messagingSenderId: "897681681364",
  appId: "1:897681681364:web:cf11b15e9114504b9b0441"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);