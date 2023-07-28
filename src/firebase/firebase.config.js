// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNXkigHKiPQHdgwR9y0RxE2-zsPk1B98Q",
  authDomain: "general-news-portal.firebaseapp.com",
  projectId: "general-news-portal",
  storageBucket: "general-news-portal.appspot.com",
  messagingSenderId: "943258354487",
  appId: "1:943258354487:web:7ac9e6554f66fd4a6350b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;