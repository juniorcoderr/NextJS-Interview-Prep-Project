import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_F_u6B67eMEAP_BwTbXLRj2kBaWrjSUE",
  authDomain: "interview-prep-001.firebaseapp.com",
  projectId: "interview-prep-001",
  storageBucket: "interview-prep-001.firebasestorage.app",
  messagingSenderId: "183169233285",
  appId: "1:183169233285:web:40712d2959ba67aaa3d4ec",
  measurementId: "G-KTJC3S83HP",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
