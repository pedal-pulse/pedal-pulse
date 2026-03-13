// ============================================================
//  PEDALPULSE — Firebase Configuration
//  
//  SETUP INSTRUCTIONS:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project (e.g. "pedalpulse-nairobi")
//  3. Click ⚙️ Project Settings → General → Your Apps → </> Web
//  4. Register the app, then copy the config values below
//  5. Replace each placeholder value with your actual values
// ============================================================

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kfVEVecrur9lD3SKxg7Jzk6Efx9VgyI",
  authDomain: "pedalpulse-nairobi.firebaseapp.com",
  projectId: "pedalpulse-nairobi",
  storageBucket: "pedalpulse-nairobi.firebasestorage.app",
  messagingSenderId: "931537382883",
  appId: "1:931537382883:web:76828d48105109682e04d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export for use in index.html and admin.html
// (Both files import this script before their own logic)
window.FIREBASE_CONFIG = firebaseConfig;
