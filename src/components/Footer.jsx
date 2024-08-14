import "./styles/Footer.css";

const Footer = () => {
    return (
    <footer>
        
        <section className="footer-top">
            <h1>@QUISTESTARLOV</h1>
            <div className="social-icons">
                <a
                    href="https://www.instagram.com/quistestarlov"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-instagram" style={{ color: "#E1306C" }}></i>
                </a>
                <a
                    href="https://www.twitter.com/quistestarlov"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter" style={{ color: "#1DA1F2" }}></i>
                </a>
                <a
                    href="https://www.facebook.com/quistestarlovyamigos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-facebook-f" style={{ color: "#1877F2" }}></i>
                </a>
            </div>
        </section>

        <section className="footer-info">

                <div className="left">
                    <a href="/" className="enlace">INICIO</a>
                    <a href="/#¿quienes-somos?" className="enlace">SOBRE NOSOTROS</a>
                    <a href="/acciones-realizadas" className="enlace">ACTIVIDADES REALIZADAS</a>
                    <a href="/asociaciones-colaboradoras" className="enlace">ASOCIACIONES COLABORADORAS</a>
                    <a href="/fuentes-informacion" className="enlace">FUENTES DE INFORMACIÓN</a>
                </div>

                <img src="./LOGO.png" alt="Logo de la asociación" />

                <div className="right">
                    <a href="/contacto" className="enlace">CONTACTO</a>
                    <a href="/colabora" className="enlace">COLABORA</a>
                    <a href="/colabora" className="enlace">HAZTE SOCIO</a>
                    <a href="/colabora" className="enlace">DONACIONES</a>
                    <a href="/colabora" className="enlace">TEAMING</a>
                    <a href="/novedades" className="enlace">NOVEDADES</a>
                </div>

            </section>


        <section className="cookies-privacity">
            <p>2024 @QUISTESTARLOV</p>
            <a href="" className="enlace">Política de cookies</a>
            <a href="" className="enlace">Política de privacidad</a>
            <a href="/asociaciones-colaboradoras"><img src="./colaboradores.png" alt="Logo de la asociación" /></a>
        </section>

    </footer>
    );
};

export default Footer;