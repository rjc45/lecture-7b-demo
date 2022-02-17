// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyXX5OwVQk0F2k9loOoGK_p1sHplyreVg",
  authDomain: "lecture7b-demo.firebaseapp.com",
  projectId: "lecture7b-demo",
  storageBucket: "lecture7b-demo.appspot.com",
  messagingSenderId: "88221443159",
  appId: "1:88221443159:web:3c9b3cc13c177d705eaf12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };