import React, { useState } from "react";
import { signup } from "../../utility/authenticationlogic";
import { toast } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebaseconfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = async (e) => {
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
      const user = await signup(email, password);
      toast.success("User signed up successfully!");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
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

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-darkBg to-pixelRed p-4">
        <form
          onSubmit={handleSignup}
          className="w-full max-w-md bg-cardGrey rounded-xl shadow-pixel p-8 flex flex-col gap-6 border-4 border-pixelYellow"
        >
          <h2 className="text-3xl font-pixel text-center text-pixelYellow">
            Create Account
          </h2>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pixelYellow bg-darkBg text-white w-full"
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
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pixelYellow bg-darkBg text-white w-full"
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
            className="bg-pixelYellow text-darkBg py-3 rounded-lg font-pixel shadow-pixel hover:bg-pixelRed hover:text-white transition"
          >
            🌟 Sign Up
          </button>

          <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
            <span>or</span>
          </div>

          <NavLink to={"/login"}>
            <button
              type="button"
              className="bg-darkBg text-neon py-3 rounded-lg font-pixel shadow-pixel hover:bg-pixelBlue transition w-full"
            >
              🚀 Log In
            </button>
          </NavLink>

          <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
            <span>or</span>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-black  transition bg-darkBg text-white"
            onClick={handleGoogleSignup}
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
