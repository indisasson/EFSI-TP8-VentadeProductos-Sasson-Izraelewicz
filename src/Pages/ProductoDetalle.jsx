import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/Detalle.css'

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="detalle-container">
      <img src={producto.thumbnail} alt={producto.title} />
      <div className="detalle-info">
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p className="price">Precio: ${producto.price}</p>
        <p>Categoría: {producto.category}</p>
      </div>
    </div>
  );
};

export default ProductoDetalle;
