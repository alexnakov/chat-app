import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRQLiyUN-wPbJgnA7VjncroX_5eAsBvvI",
  authDomain: "chat-app-ccfde.firebaseapp.com",
  projectId: "chat-app-ccfde",
  storageBucket: "chat-app-ccfde.appspot.com",
  messagingSenderId: "677925212972",
  appId: "1:677925212972:web:c9d1eda69564ddb27a5289",
  measurementId: "G-ND49N3B3JN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

const analytics = getAnalytics(app);