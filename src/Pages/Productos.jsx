import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProducto from "../components/CardProducto";

const Productos = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const url = categoria
      ? `https://dummyjson.com/products/category/${categoria}`
      : `https://dummyjson.com/products`;
    axios.get(url)
      .then(res => setProductos(res.data.products))
      .catch(err => console.error(err));
  }, [categoria]);

  return (
    <section className="productos-grid">
      {productos.map((prod) => (
        <CardProducto key={prod.id} producto={prod} />
      ))}
    </section>
  );
};

export default Productos;