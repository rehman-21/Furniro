import {SignUp, Login,  Home,Shop, About, Contact  } from "../src/pages/pages";
import {  } from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

