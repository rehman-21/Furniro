import { SignUp, Login, Home, Shop, About, Contact, SingleProduct } from "../src/pages/pages";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single-product" element={<SingleProduct />} />
      </Route>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

