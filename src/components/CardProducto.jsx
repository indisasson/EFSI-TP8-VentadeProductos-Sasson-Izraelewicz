import { Link } from "react-router-dom";
import "../styles/CardProducto.css";



const CardProducto = ({ producto, setCarrito, carrito }) => {

  const agregarAlCarrito = ({ prod }) => {
    setCarrito([...carrito, prod]);
    alert("tu producto se agregó correctamente")
  }

  return (
    <div className="product-card">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/productoDetalle/${producto.id}`} className="btn">Ver más</Link>
      <button className="btn" onClick={() => agregarAlCarrito({ prod: producto })}>Agregar al carrito</button>
    </div>
  );
};

export default CardProducto;