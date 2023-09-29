import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database"

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
export const db = getDatabase(app)