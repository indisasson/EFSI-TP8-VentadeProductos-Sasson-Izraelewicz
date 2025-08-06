import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = ({ categorias }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Nosotros</Link>
        <div className="dropdown">
          <span>Productos ▾</span>
          <div className="dropdown-content">
  <Link to="/productos">Ver todos</Link>

  {categorias.length > 0 ? (
    categorias.map((cat, i) => (
      <Link key={i} to={`/productos/${cat.slug}`}>
        {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
      </Link>
    ))
  ) : (
    <p>Cargando...</p>
  )}
</div>
        </div>
        <Link to="/contacto">Contacto</Link>
      </div>
    </header>
  );
};

export default Navbar;
