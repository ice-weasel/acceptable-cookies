// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBt8x01Su-LjY75CS4UYgn3cPuGYHaVzI",
  authDomain: "travel-safe-35aeb.firebaseapp.com",
  projectId: "travel-safe-35aeb",
  storageBucket: "travel-safe-35aeb.appspot.com",
  messagingSenderId: "599726184491",
  appId: "1:599726184491:web:bea96ceeeb0ac52a31b26e",
  measurementId: "G-GFYLJ5L3YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);