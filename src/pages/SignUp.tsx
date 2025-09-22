import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HeadingTitle,
  Button,
  CustomInput,
  LabelComp,
} from "../components/components";
import { JPG } from "../constant/Constant";
import { Link } from "react-router-dom";

export const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const inputVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    hiddenUp: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${JPG.BG_1})` }}
        ></div>

        <div className="absolute inset-0 bg-yellow-100 opacity-50"></div>

        <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Furniro
          </h1>

          <HeadingTitle
            className="mb-6 text-center text-xl font-semibold text-gray-700"
            title="Create Your Account"
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial="hiddenLeft"
              animate="visible"
              variants={inputVariants}
            >
               <LabelComp 
            htmlFor="name" 
            LabelTag="Full Name" />
              <CustomInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500
                placeholder:italic placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              initial="hiddenRight"
              animate="visible"
              variants={inputVariants}
            >
              <LabelComp htmlFor="email" LabelTag="Email" />
              <CustomInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500 placeholder:italic placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              initial="hiddenUp"
              animate="visible"
              variants={inputVariants}
            >
              <LabelComp htmlFor="password" LabelTag="Password" />
              <CustomInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500 placeholder:italic placeholder-gray-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button className="w-full rounded-lg bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition">
                <Link to="/home" className="w-full block text-center">
                  Sign Up
                </Link>
              </Button>
            </motion.div>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
