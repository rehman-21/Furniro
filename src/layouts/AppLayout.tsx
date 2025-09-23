import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Commons/Navbar";
import { HomeFooter } from "../components/Commons/HomeFooter";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <HomeFooter />
    </div>
  );
};

export default AppLayout;


