import { useState } from "react";
import { motion } from "framer-motion";
import { JPG } from "../constant/Constant";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  CustomInput,
  HeadingTitle,
  LabelComp,
} from "../components/components";
import { useAuth } from "../context/AuthContext";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(formData.email, formData.password);
      navigate("/home");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to login");
      }
    } finally {
      setSubmitting(false);
    }
  };

  //===================> { Input animations } ===============>
  const inputVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    hiddenUp: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${JPG.BG_2})` }}
      />
      <div className="absolute inset-0 bg-yellow-100 opacity-50" />

      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <HeadingTitle
          title="Furniro"
          className="text-center text-2xl font-bold text-gray-800 mb-6"
        />
        <HeadingTitle
          className="mb-6 text-center text-2xl font-semibold text-gray-700"
          title="Login to Your Account"
        />

        {error && <p className="mb-3 text-sm text-red-600 text-center">{error}</p>}

        {/* ====================> { Form } =====> */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <motion.div initial="hiddenLeft" animate="visible" variants={inputVariants}>
            <LabelComp htmlFor="email" LabelTag="Email" />
            <CustomInput
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500 placeholder:italic placeholder-gray-400"
            />
          </motion.div>

          {/* Password */}
          <motion.div initial="hiddenRight" animate="visible" variants={inputVariants}>
            <LabelComp htmlFor="password" LabelTag="Password" />
            <CustomInput
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-yellow-500 focus:ring-yellow-500 placeholder:italic placeholder-gray-400"
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              className="w-full rounded-lg bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition"
              disabled={submitting}
            >
              {submitting ? "Logging in..." : "Login"}
            </Button>
          </motion.div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/" className="text-yellow-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
