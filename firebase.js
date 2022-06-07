// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'twitter-clone-1aa8c.firebaseapp.com',
  projectId: 'twitter-clone-1aa8c',
  storageBucket: 'twitter-clone-1aa8c.appspot.com',
  messagingSenderId: '129040925375',
  appId: '1:129040925375:web:1fbde0c5cdfe905ba8fc0a',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
