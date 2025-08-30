import { Home } from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

