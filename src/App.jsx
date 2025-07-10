import { useEffect, useState } from "react";
import axios from 'axios';
import "./styles/App.css";
import MainLayout from "./Layout/MainLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx'
import QuienesSomos from './Pages/QuienesSomos.jsx'
import Productos from './Pages/Productos.jsx'
import ProductoDetalle from './Pages/ProductoDetalle.jsx'
import Contacto from './Pages/Contacto.jsx'
import Notfound from './Pages/Notfound.jsx'

function App() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then(res => setCategorias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout categorias={categorias} />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:categoria" element={<Productos />} />
          <Route path="productoDetalle/:id" element={<ProductoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;