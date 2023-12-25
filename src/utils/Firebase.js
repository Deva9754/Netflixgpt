// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnWRaQBn08JTwIGGcQFKGnfhQYrBta-HE",
  authDomain: "netflixgpt-14130.firebaseapp.com",
  projectId: "netflixgpt-14130",
  storageBucket: "netflixgpt-14130.appspot.com",
  messagingSenderId: "522621476259",
  appId: "1:522621476259:web:4eab6f15dce907d9520e16"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth();