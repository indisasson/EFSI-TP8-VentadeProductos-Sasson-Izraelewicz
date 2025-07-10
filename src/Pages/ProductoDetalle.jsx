import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProducto(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.thumbnail} alt={producto.title} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
    </div>
  );
};

export default ProductoDetalle;
