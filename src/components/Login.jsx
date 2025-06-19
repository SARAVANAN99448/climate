import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import icon from "../assets/Login.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminEmail = "admin@example.com"; // Change to your actual admin email

  const loginWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === adminEmail) {
        navigate("/home");
      } else {
        alert("Access denied. Only admin can log in.");
        await signOut(auth);
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-[#305680] p-8 rounded shadow-md w-96 space-y-4">
        <div className="">
        <img src={icon} alt="" />
      </div>
        <h2 className="text-2xl text-white font-bold text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Username"
          className="w-full px-2 py-3 rounded-[15px] bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-2 py-3  bg-white rounded-lg "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={loginWithEmail}
          className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded flex items-center justify-center space-x-2"
        >
          <span>Sign In </span>
        </button>
        
      </div>
    </div>
  );
};

export default Login;
