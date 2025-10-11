// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiYvV9D_2x6P2SNGCv_PvtvRTjJIhOYH4",
  authDomain: "aliyasin---portfolio-36d00.firebaseapp.com",
  projectId: "aliyasin---portfolio-36d00",
  storageBucket: "aliyasin---portfolio-36d00.firebasestorage.app",
  messagingSenderId: "980768393199",
  appId: "1:980768393199:web:6c5489171e98036433181a",
  measurementId: "G-N3Y6D2WY1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);