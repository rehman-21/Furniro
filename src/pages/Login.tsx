import React from "react";

export const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Furniro
        </h1>

        {/* Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-700">
          Login to Your Account
        </h2>

        {/* Form */}
        <form className="space-y-5">
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
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-yellow-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
