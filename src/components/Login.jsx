import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("maxi@gmail.com");
  const [password, setPassword] = useState("Maxi@123");

  const handelLoginClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/bg-login.png')",
      }}
    >
      <div className="max-w-lg w-full rounded-lg shadow-lg p-8 space-y-6 bg-base-200 ">
        <div className="flex justify-center cursor-pointer">
          <span className="text-xl font-mono text-cyan-500">
            &lt;&#9679;&gt;
          </span>
          <span className="ml-2 text-xl font-semibold text-white">
            Connect.<span className="text-cyan-500">dev</span>
          </span>
        </div>

        <h2 className="my-10 text-center text-3xl font-bold text-white">
          Log in to your account
        </h2>

        <form className="space-y-4 my-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              id="email"
              type="email"
              autoComplete="off"
              required
              className="mt-1 w-full px-4 py-2 bg-base-200 rounded-md"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a href="#" className="text-sm text-cyan-500 hover:underline">
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 bg-base-200 rounded-md "
              placeholder="••••••••"
            />
          </div>

          <button
            className="cursor-pointer w-full py-2.5 px-4 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all"
            onClick={handelLoginClick}
          >
            Log in
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2">
          <span className="border-b w-1/5 border-gray-300"></span>
          <span className="text-md text-gray-500">or continue with</span>
          <span className="border-b w-1/5 border-gray-300"></span>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button className="flex items-center justify-center w-[50%] h-10 px-4 py-2 rounded-md cursor-pointer border-2 border-gray-800 hover:bg-base-100 transition">
            <i className="ri-google-fill mr-2 text-lg"></i>Log in with Google
          </button>

          <button className="flex items-center justify-center w-[50%] h-10 px-4 py-2 rounded-md cursor-pointer border-2 border-gray-800 hover:bg-base-100 transition">
            <i className="ri-github-fill mr-2 text-lg"></i>Log in with Github
          </button>
        </div>

        <p className="text-center text-md text-gray-600">
          Are you new here?{" "}
          <a href="#" className="text-cyan-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
