

import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSq22B0EGii-MJaol2OB312bk61KKzzU8",
  authDomain: "gantt-chart-68458.firebaseapp.com",
  projectId: "gantt-chart-68458",
  storageBucket: "gantt-chart-68458.firebasestorage.app",
  messagingSenderId: "29991334340",
  appId: "1:29991334340:web:69af9bb3196ef28d9b3491",
  measurementId: "G-XECTYYL0Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, collection, getDocs, addDoc, setDoc, doc };
