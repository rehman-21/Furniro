import { SignUp, Login, Home, Shop, About, Contact } from "../src/pages/pages";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

