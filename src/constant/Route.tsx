import { Home } from "pages/Home";
import { Routes, Route } from "react-router-dom";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
