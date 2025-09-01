import {SignUp, Login } from "../src/pages/pages";
import {  Home } from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

