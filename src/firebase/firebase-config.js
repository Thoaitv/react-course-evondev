// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtkzlJUVXv-dOw-YOxRQ1wCBJb7vHlJG8',
  authDomain: 'learn-firebase-7eac3.firebaseapp.com',
  projectId: 'learn-firebase-7eac3',
  storageBucket: 'learn-firebase-7eac3.appspot.com',
  messagingSenderId: '223902659361',
  appId: '1:223902659361:web:7b9bd3fde9aaa37b570460',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init service
export const db = getFirestore(app);
