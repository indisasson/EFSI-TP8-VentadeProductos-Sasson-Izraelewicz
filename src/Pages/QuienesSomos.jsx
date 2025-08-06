import "../styles/QuienesSomos.css";
import teamPhoto from "../assets/team-photo.jpg"; // Pon una foto de equipo o relacionada en assets

const QuienesSomos = () => {
  return (
    <section className="qs-container" aria-labelledby="qs-title">
      <h1 id="qs-title">¿Quiénes somos?</h1>

      <div className="qs-intro">
        <p>
          Somos una empresa dedicada a brindar soluciones tecnológicas de
          vanguardia, comprometida con la calidad y la satisfacción total de
          nuestros clientes. Nuestra plataforma combina modernidad, rapidez y
          seguridad para ofrecer una experiencia de compra online inigualable.
        </p>
      </div>

      <div className="qs-mision" aria-labelledby="mision-title">
        <h2 id="mision-title">Nuestra misión</h2>
        <p>
          Proveer una experiencia de e-commerce innovadora, eficiente y
          amigable, basada en las mejores prácticas globales y el compromiso
          constante con la mejora continua y el respeto al cliente.
        </p>
      </div>

      <div className="qs-equipo" aria-labelledby="equipo-title">
        <h2 id="equipo-title">Nuestro equipo</h2>
        <p>
          Contamos con un equipo multidisciplinario de profesionales apasionados
          por la tecnología, el diseño y la innovación. Este proyecto es el
          resultado del esfuerzo conjunto de estudiantes y expertos que aplican
          tecnologías modernas como React, APIs avanzadas y metodologías ágiles.
        </p>
      </div>

      <div className="qs-image-container" aria-hidden="true">
        <img
          src={teamPhoto}
          alt="Equipo de desarrollo trabajando en proyecto"
          className="qs-image"
        />
      </div>

      <div className="qs-valores" aria-labelledby="valores-title">
        <h2 id="valores-title">Nuestros valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Buscamos siempre las mejores tecnologías y prácticas para ofrecer productos únicos.</li>
          <li><strong>Calidad:</strong> Seleccionamos cuidadosamente cada producto para garantizar la máxima satisfacción.</li>
          <li><strong>Confianza:</strong> Trabajamos con transparencia y compromiso para que te sientas seguro en cada compra.</li>
          <li><strong>Sostenibilidad:</strong> Apostamos por procesos responsables que cuidan el medio ambiente.</li>
          <li><strong>Servicio:</strong> Atención personalizada y soporte dedicado para acompañarte siempre.</li>
        </ul>
      </div>
    </section>
  );
};

export default QuienesSomos;
