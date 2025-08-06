import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css"; // Asegúrate de tener este archivo

function Home() {
  const [productos, setProductos] = useState([]);

  // Slider imágenes fijas o destacadas
  const fotos = [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Fetch de productos
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=6") // limitamos a 6 destacados
      .then((res) => setProductos(res.data.products))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <div className="home-container">
      <h1>¡Bienvenidos!</h1>
      <p>
        Somos una plataforma online con una amplia gama de productos pensados
        para todo tipo de necesidades. Desde lo práctico hasta lo inesperado, en
        un solo lugar encontrás calidad, accesibilidad y diseño. Navegá, elegí y
        recibí, sin moverte de donde estás.
      </p>

      <Slider {...settings}>
        {fotos.map((foto, i) => (
          <div key={i} className="slider-image-container">
            <img src={foto} alt={`Foto ${i + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>

      <h3>Productos destacados</h3>
      <div className="cards-container">
        {productos.map((producto) => (
          <div key={producto.id} className="celular-card">
            <img
              src={producto.thumbnail}
              alt={producto.title}
              className="celular-img"
            />
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <strong>${producto.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
