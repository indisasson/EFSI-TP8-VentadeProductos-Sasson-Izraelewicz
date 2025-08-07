import CardProducto from "../components/CardProducto";

const Carrito = ({ carrito }) => {
  return (
    <>
      <h1>Mi carrito</h1>
      <section className="productos-grid">
        {carrito.length > 0 ? (
          carrito.map((c) => (
            <CardProducto key={c.id} producto={c} />
          ))
        ) : (
          <p>No tenés ningún elemento en el carrito</p>
        )}
      </section>
    </>
  );
};

export default Carrito;
