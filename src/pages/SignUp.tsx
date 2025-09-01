import React from "react";

export const  SignUp=()=> {
  return (
    <div className="flex h-screen items-center justify-center bg-yellow-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Furniro
        </h1>

        {/* Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-700">
          Create Your Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
