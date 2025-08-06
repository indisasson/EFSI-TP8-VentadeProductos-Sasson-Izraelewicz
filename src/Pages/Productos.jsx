import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProducto from "../components/CardProducto";

const Productos = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then(res => setProductos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  // Comparamos todo en minúsculas para evitar errores por mayúsculas
  const productosFiltrados = categoria
    ? productos.filter(p => p.category.toLowerCase() === categoria.toLowerCase())
    : productos;

  const formatearCategoria = (cat) => {
    if (!cat) return '';
    return cat
      .split('-')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  };

  return (
    <>
      <h1>{categoria ? `Productos en categoría: ${formatearCategoria(categoria)}` : 'Todos nuestros productos'}</h1>
      <section className="productos-grid">
        {productosFiltrados.map(prod => (
          <CardProducto key={prod.id} producto={prod} />
        ))}
      </section>
    </>
  );
};

export default Productos;
