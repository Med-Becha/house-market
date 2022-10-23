// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnPifuBwe0bjo2xRD5vwsPSF8qANNGSWk",
  authDomain: "house-market-4e78f.firebaseapp.com",
  projectId: "house-market-4e78f",
  storageBucket: "house-market-4e78f.appspot.com",
  messagingSenderId: "859483699004",
  appId: "1:859483699004:web:731dd6fc2746fddcf01039",
  measurementId: "G-22NXD73496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()