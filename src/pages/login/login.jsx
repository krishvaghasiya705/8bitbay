import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseconfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ADMIN_EMAIL = "kvaghasiya705@gmail.com";
const ADMIN_PASSWORD = "7874982802Krish";

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    return { user, isAdmin };
  } catch (error) {
    console.error("Login Error:", error.message);
    if (error.code === "auth/user-not-found") {
      throw new Error("No user found with this email.");
    } else if (error.code === "auth/wrong-password") {
      throw new Error("Incorrect password. Please try again.");
    } else if (error.code === "auth/invalid-email") {
      throw new Error("Invalid email format.");
    } else {
      throw new Error("Login failed. Please try again.");
    }
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const { user, isAdmin } = await login(email, password);
      if (isAdmin) {
        toast.success("Welcome, Admin!");
        window.location.href = "/admin";
      } else {
        toast.success(`Welcome back, ${user.email}!`);
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName}!`);
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      toast.error("Please enter your email to reset your password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-darkBg to-pixelBlue p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-cardGrey rounded-xl shadow-pixel p-8 flex flex-col gap-6 border-4 border-pixelRed"
        >
          <h2 className="text-3xl font-pixel text-center text-pixelBlue">
            Login
          </h2>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pixelBlue bg-darkBg text-white w-full"
            />
            {emailError && (
              <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                {emailError}
              </span>
            )}
          </div>

          <div className="relative">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pixelBlue bg-darkBg text-white w-full"
              />
              <span
                className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && (
              <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                {passwordError}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-pixelBlue text-darkBg py-3 rounded-lg font-pixel shadow-pixel hover:bg-pixelYellow hover:text-darkBg transition w-full"
          >
            🚀 Log In
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={handlePasswordReset}
              className="text-pixelYellow hover:underline text-sm mt-2"
            >
              Forgot Password? Reset Here
            </button>
          </div>

          <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
            <span>or</span>
          </div>

          <NavLink to={"/signup"}>
            <button
              type="button"
              className="bg-darkBg text-neon py-3 rounded-lg font-pixel shadow-pixel hover:bg-pixelRed transition w-full"
            >
              🌟 Sign Up
            </button>
          </NavLink>

          <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
            <span>or</span>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black transition bg-darkBg text-white"
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
