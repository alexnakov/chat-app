import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPvzERZhakvi9Hc1QKYJNpQ6Yl7FXAlM4",
  authDomain: "chat-app-f6256.firebaseapp.com",
  projectId: "chat-app-f6256",
  storageBucket: "chat-app-f6256.appspot.com",
  messagingSenderId: "451943981537",
  appId: "1:451943981537:web:7fa98b7b5c98a69047f2a0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)