import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../components/userSlice";

const AuthCard = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        addUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
      dispatch(
        addUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: username,
          photoURL: userCredential.user.photoURL,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email to reset the password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative w-full max-w-md flex flex-col justify-center min-h-screen">
        {/* Sign In Form */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isSignUp ? "opacity-0 z-0" : "opacity-100 z-10"
          } transform ${isSignUp ? "-translate-x-full" : "translate-x-0"}`}
        >
          <div className="bg-white m-14 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign In</h2>
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div className="input-group flex items-center bg-gray-100 rounded-lg p-2">
                <FaEnvelope className="text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
                  required
                />
              </div>
              <div className="input-group flex items-center bg-gray-100 rounded-lg p-2">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <p className="mt-2 text-center text-gray-600">
              <button
                onClick={handleForgotPassword}
                className="text-green-500 font-semibold"
              >
                Forgot Password?
              </button>
            </p>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-green-500 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>

        {/* Sign Up Form */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"
          } transform ${isSignUp ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="bg-white m-14 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign Up</h2>
            <form className="space-y-4" onSubmit={handleSignUp}>
              <div className="input-group flex items-center bg-gray-100 rounded-lg p-2">
                <FaUser className="text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
                  required
                />
              </div>
              <div className="input-group flex items-center bg-gray-100 rounded-lg p-2">
                <FaEnvelope className="text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
                  required
                />
              </div>
              <div className="input-group flex items-center bg-gray-100 rounded-lg p-2">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-green-500 font-semibold"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
