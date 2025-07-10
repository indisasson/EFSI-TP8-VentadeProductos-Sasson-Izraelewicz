import "../styles/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="qs-container">
      <h1>¿Quiénes somos?</h1>
      <p>
        Somos una empresa comprometida con ofrecer los mejores productos del
        mercado, con una interfaz moderna, rápida y segura.
      </p>
      <div className="qs-mision">
        <h2>Nuestra misión</h2>
        <p>
          Brindar una experiencia de compra online amigable, intuitiva y eficiente, inspirada en las mejores prácticas del e-commerce global.
        </p>
      </div>
      <div className="qs-equipo">
        <h2>El equipo</h2>
        <p>
          Este proyecto fue desarrollado por estudiantes apasionados por la
          tecnología y el diseño, aplicando conocimientos de React y APIs modernas.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;
