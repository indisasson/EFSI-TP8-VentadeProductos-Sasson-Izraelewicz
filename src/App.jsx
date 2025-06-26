import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx'
import QuienesSomos from './Pages/QuienesSomos.jsx'
import Productos from './Pages/Productos.jsx'
import ProductoDetalle from './Pages/ProductoDetalle.jsx'
import Contacto from './Pages/Contacto.jsx'
import Notfound from './Pages/Notfound.jsx'

function App() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setProductos(response.data.products);
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    };

    fetchProductos();
  }, []);


  return (
    <>
      <h1>Hola Gente de 5b!!!</h1>
      <div>

      
      
          <HashRouter>
            <Routes>
              <Route path="/" element={<MainLayout productos={productos}/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/quienes-somos" element={<QuienesSomos />}></Route>
                <Route path="/productos" element={<Productos />}></Route>
                <Route path="/productoDetalle" element={<ProductoDetalle />}></Route>
                <Route path="/contacto" element={<Contacto />}></Route>
                <Route path="*" element={<Notfound />}></Route>

              </Route>
            </Routes>
          </HashRouter>

          <ul> {productos.map((p) => (<li>{" "} {p.title} {p.price}{" "}</li>))}</ul>

      </div>
    </>
  );
}

export default App;