// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbKB0gf9zh67Pyw_rnNSfGKJi4Qjn4BXA",
  authDomain: "hithere-2e5a8.firebaseapp.com",
  projectId: "hithere-2e5a8",
  storageBucket: "hithere-2e5a8.appspot.com",
  messagingSenderId: "962184435725",
  appId: "1:962184435725:web:b292d170fb206dc41c1d44",
  measurementId: "G-5T15W8CPQP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);