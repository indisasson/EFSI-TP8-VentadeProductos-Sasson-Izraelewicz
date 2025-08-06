import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";

function Home() {
  const [productos, setProductos] = useState([]);

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
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=6")
      .then((res) => setProductos(res.data.products))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);

  return (
    <main className="home-container">
      <section className="hero">
        <h1 className="hero-title">¡Bienvenidos a CeluStar!</h1>
        <p className="hero-subtitle">
          Descubrí productos variados con diseño, calidad y tecnología al alcance de un clic.
          Explora nuestra selección exclusiva pensada para vos.
        </p>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {fotos.map((foto, i) => (
              <div key={i} className="slider-image-container">
                <img src={foto} alt={`Foto ${i + 1}`} className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="productos-destacados">
        <h2 className="section-title">Productos destacados</h2>
        <div className="cards-container">
          {productos.map((producto) => (
            <article key={producto.id} className="producto-card" tabIndex="0" aria-label={producto.title}>
              <img
                src={producto.thumbnail}
                alt={producto.title}
                className="producto-img"
                loading="lazy"
              />
              <div className="producto-info">
                <h3 className="producto-title">{producto.title}</h3>
                <p className="producto-description">{producto.description}</p>
                <span className="producto-price">${producto.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
