import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "./firebase";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    const oobCode = queryParams.get("oobCode");
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert("Password has been reset!");
      navigate("/signin"); // Navigate to Sign In page after resetting the password
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="input-group flex items-center bg-gray-100 rounded-lg p-2 mb-4">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-transparent flex-grow outline-none pl-2 text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
