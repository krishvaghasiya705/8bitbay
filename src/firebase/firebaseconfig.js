import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnrXTCbGUDE9ITVDjhgwggmETEgQoVwmo",
  authDomain: "bitbay-411ae.firebaseapp.com",
  projectId: "bitbay-411ae",
  storageBucket: "bitbay-411ae.firebasestorage.app",
  messagingSenderId: "955904966165",
  appId: "1:955904966165:web:fd0e78f894b9a587d5981c",
  measurementId: "G-EDLDTW5VCK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
