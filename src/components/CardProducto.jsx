import { Link } from "react-router-dom";
import "../styles/CardProducto.css";

const CardProducto = ({ producto }) => {
  return (
    <div className="product-card">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/productoDetalle/${producto.id}`} className="btn">Ver más</Link>
    </div>
  );
};

export default CardProducto;