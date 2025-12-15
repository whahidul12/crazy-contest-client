import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      {!noHeaderFooter && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
