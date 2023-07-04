// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHj3d3G-EdGECDAVvVnPHRPsFkfzjLFCU",
  authDomain: "aaryan-demo-portfolio.firebaseapp.com",
  projectId: "aaryan-demo-portfolio",
  storageBucket: "aaryan-demo-portfolio.appspot.com",
  messagingSenderId: "916345934540",
  appId: "1:916345934540:web:208f08d0746f56f7c22869"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()