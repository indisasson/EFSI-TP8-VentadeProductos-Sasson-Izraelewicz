import { Outlet, Link } from "react-router-dom";

const MainLayout = (props) => {
    const [categoriaAnterior, setCategoriaAnterior] = useState();

    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/quienes-somos">Nosotros</Link>
          
          <div className="dropdown">
                    <span className="dropdown-title">Productos ▾</span>
                    <div className="dropdown-content">
                        <Link to="/productos">Ver todos</Link>
                        {props.productos.map((prod, i) => (
                            if(i >= 1) setCategoriaAnterior(prop.category[i-1])

                            if(categoriaAnterior != prop.categroy){
                               <Link key={i} to={`/productos/${prod.category}`}>  /*VER PORQUE LINK NO FUCNIONA DENTRO DEL IF. LO QUE HCIE ES QUE SETEO LA CATEGRORIA ANTERIOR PARA QUE NO ME APAREZCA  UN BOTON NUEVO CADA VEZ QUE SE REPITE UNA CATGORIA*/ 
                                {prod.category}
                                </Link>
                            }
                            
                        ))}
                    </div>
                </div>

          <Link to="/contacto">Contacto</Link>
        </header>

        <Outlet></Outlet>

        <footer></footer>
      </>
    );

}

export default MainLayout;