import "./styles/Footer.css";

const Footer = () => {
    return (
    <footer>
        
        <section className="footer-top">
            <h1>@QUISTESTARLOV</h1>
            <section className="social-media">
                    <div className="ig">
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="linkedin">
                        <i className="fab fa-linkedin"></i>
                    </div>
            </section>
        </section>

        <section className="footer-info">

                <div className="left">
                    <a href="/" className="enlace">INICIO</a>
                    <a href="/#¿quienes-somos?" className="enlace">SOBRE NOSOTROS</a>
                    <a href="" className="enlace">ACTIVIDADES REALIZADAS</a>
                    <a href="" className="enlace">ASOCIACIONES COLABORADORAS</a>
                    <a href="/fuentes-informacion" className="enlace">FUENTES DE INFORMACIÓN</a>
                </div>

                <img src="./LOGO.png" alt="Logo de la asociación" />

                <div className="right">
                    <a href="/contacto" className="enlace">CONTACTO</a>
                    <a href="/colabora" className="enlace">COLABORA</a>
                    <a href="" className="enlace">HAZTE SOCIO</a>
                    <a href="" className="enlace">DONACIONES</a>
                    <a href="" className="enlace">TEAMING</a>
                    <a href="" className="enlace">NOVEDADES</a>
                </div>

            </section>


        <section className="cookies-privacity">
            <p>2024 @QUISTESTARLOV</p>
            <a href="" className="enlace">Política de cookies</a>
            <a href="" className="enlace">Política de privacidad</a>
            <img src="./colaboradores.png" alt="Logo de la asociación" />
        </section>

    </footer>
    );
};

export default Footer;