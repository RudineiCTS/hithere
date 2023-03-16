import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

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
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export default firebase;
