import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";

const ADMIN_EMAIL = "kvaghasiya705@gmail.com";
const ADMIN_PASSWORD = "7874982802Krish";

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    return { user, isAdmin };
  } catch (error) {
    throw error;
  }
};