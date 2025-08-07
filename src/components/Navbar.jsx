import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = ({ categorias }) => {
  return (
    <header className="navbar">
      <nav className="navbar-left" aria-label="Main navigation">
        <Link to="/" className="navbar-logo-link" aria-label="Inicio">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/quienes-somos" className="navbar-link">Nosotros</Link>

        <div className="dropdown" tabIndex={0} aria-haspopup="true" aria-expanded="false">
          <span className="dropdown-toggle">
            Productos <span className="arrow-down" aria-hidden="true">▾</span>
          </span>
          <div className="dropdown-content" role="menu" aria-label="Categorías de productos">
            <Link to="/productos" className="dropdown-item" role="menuitem">Ver todos</Link>

            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/productos/${cat.slug}`}
                  className="dropdown-item"
                  role="menuitem"
                >
                  {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                </Link>
              ))
            ) : (
              <span className="dropdown-loading">Cargando...</span>
            )}
          </div>
        </div>

        <Link to="/contacto" className="navbar-link">Contacto</Link>
        
        <Link to="/carrito" className="navbar-link">🛒</Link>
      </nav>
    </header>
  );
};

export default Navbar;
