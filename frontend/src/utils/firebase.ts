import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB0-Fg9SE5_8Z5XGJz4M4o4ZzFv_oMs36c",
    authDomain: "leetcode-clone-bc7b2.firebaseapp.com",
    projectId: "leetcode-clone-bc7b2",
    storageBucket: "leetcode-clone-bc7b2.appspot.com",
    messagingSenderId: "202951349093",
    appId: "1:202951349093:web:77fc25a74b8c2e6019878c",
    measurementId: "G-27DTP3DKSX"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);