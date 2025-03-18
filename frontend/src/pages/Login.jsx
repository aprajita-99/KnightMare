



import React from "react";
import { useNavigate } from "react-router";

const Login = () => {

    const navigate=useNavigate();


    const handleLogin = () => {
        
        navigate("/homeuser");
      };
    
    
  return (
    <div
      style={{
        backgroundImage: "url('/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex justify-center items-center h-126 bg-black text-white"
    >
      <div className="w-80 p-5 shadow-lg rounded-lg  backdrop-blur-lg  relative" >
        <h2 className="text-3xl font-semibold  pb-2 text-center text-white neon-text">Welcome</h2>
        <p className="text-sm text-center">Sign in to your account</p>
        <form className="mt-3">
          <div className="mb-3">
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white-500"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleLogin} className="mt-2 w-full py-2 bg-black hover:bg-gray-900 rounded-md text-white font-semibold shadow-md">
            Login
          </button>
        </form>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">OR</p>
          <div className="mt-4 space-y-3">
            <button className="w-full flex items-center justify-center py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white">
              <img
                src="googlebg.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
          <p className="text-center text-gray-200 mt-4">
            Don't have an account? <a href="/register" className="text-gray-900 hover:underline">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;