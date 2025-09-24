import { useState } from "react";
import { motion } from "framer-motion";
import { JPG } from "../constant/Constant";
import { Link } from "react-router-dom";
import {
  Button,
  CustomInput,
  HeadingTitle,
  LabelComp,
} from "../components/components";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  //===================> { Input animations }==============>
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
          style={{ backgroundImage: `url(${JPG.BG_2})` }}
        ></div>
        <div className="absolute inset-0 bg-yellow-100 opacity-50"></div>
        <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <HeadingTitle
            title="  Furniro"
            className="text-center text-2xl font-bold text-gray-800 mb-6"
          />
          <HeadingTitle
            className="mb-6 text-center text-2xl font-semibold text-gray-700"
            title="Login to Your Account"
          />
        //~  {/* ====================> { Form } =====> */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial="hiddenLeft"
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
              initial="hiddenRight"
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
              <Button
                children="Login"
                className="w-full rounded-lg bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition"
              />
            </motion.div>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              to="/"
              className="text-yellow-600 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
