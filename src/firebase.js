import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

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
export const auth = getAuth(app)
export const storage = getStorage(app)