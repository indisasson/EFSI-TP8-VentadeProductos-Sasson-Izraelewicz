import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "../styles/Layout.css";

const MainLayout = ({ categorias }) => {
  return (
    <div className="layout-container">
      <Navbar categorias={categorias} />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;