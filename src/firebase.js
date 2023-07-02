// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPpBjwSf9DGLV5UcFTTNl1vgn8DpMX6Og", 
  authDomain: "netflixclone-6f045.firebaseapp.com", 
  projectId: "netflixclone-6f045",  
  storageBucket: "netflixclone-6f045.appspot.com", 
  messagingSenderId: "441854052057",  
  appId: "1:441854052057:web:d2b0b12b93e83847cae0c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
