import "../styles/Contacto.css"

const Contacto = () => {
    return(
        <>
            <h1>Contactanos!</h1>
            <form>
                <p>Nombre completo</p>
                <input type="text" name="nombre"/>

                <p>Correo electrónico</p>
                <input type="email" name="email"/>

                <p>Teléfono</p>
                <input type="tel" name="telefono"/>

                <p>Mensaje o consulta</p>
                <textarea name="mensaje" rows="5"></textarea>

                <input type="checkbox" name="terminos"/> Acepto la política de privacidad
                <button type="submit">Enviar mensaje</button>
            </form>
        </>
    )
}

export default Contacto;