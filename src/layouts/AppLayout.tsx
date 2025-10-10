import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Commons/Navbar";
import { HomeFooter } from "../components/Commons/HomeFooter";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import Spinner from "../components/Commons/Spinner";

const AppLayout = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size={64} strokeWidth={6} />
      </div>
    );
  }
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


