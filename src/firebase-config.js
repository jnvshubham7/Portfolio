import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBAsejOE5FRdY5iiXjKrzBGE61U48HDhSY",
  authDomain: "my-applications-6e2ea.firebaseapp.com",
  projectId: "my-applications-6e2ea",
  storageBucket: "my-applications-6e2ea.appspot.com",
  messagingSenderId: "751858337368",
  appId: "1:751858337368:web:5dd690de486c39ce60ac2d",
  measurementId: "G-DZN8ESH8XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
