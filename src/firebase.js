import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMRASP0ZnWNDnp0XI_sz_1ysWgDtn2WA0",
  authDomain: "ui-ux-portfolio-714b4.firebaseapp.com",
  projectId: "ui-ux-portfolio-714b4",
  storageBucket: "ui-ux-portfolio-714b4.firebasestorage.app",
  messagingSenderId: "583556246369",
  appId: "1:583556246369:web:ada2063f129c1cccb0b320",
  measurementId: "G-QDJ59W0TET",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🔥 FIX: store analytics promise safely
let analyticsInstance = null;

isSupported().then((supported) => {
  if (supported) {
    analyticsInstance = getAnalytics(app);
  }
});

// 🔥 SAFE TRACKER
export const trackEvent = (name, params = {}) => {
  console.log("EVENT:", name, params);

  if (!analyticsInstance) return;

  logEvent(analyticsInstance, name, params);
};
