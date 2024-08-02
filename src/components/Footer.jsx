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
                    <a href="" className="enlace">INICIO</a>
                    <a href="" className="enlace">SOBRE NOSOTROS</a>
                    <a href="" className="enlace">ACTIVIDADES REALIZADAS</a>
                    <a href="" className="enlace">ASOCIACIONES COLABORADORAS</a>
                    <a href="" className="enlace">FUENTES DE INFORMACIÓN</a>
                </div>

                <img src="../public/LOGO.png" alt="Logo de la asociación" />

                <div className="right">
                    <a href="/" className="enlace">CONTACTO</a>
                    <a href="" className="enlace">COLABORA</a>
                    <a href="" className="enlace">HAZTE SOCIO</a>
                    <a href="" className="enlace">DONACIONES</a>
                    <a href="" className="enlace">TEAMING</a>
                    <a href="" className="enlace">REDES SOCIALES</a>
                </div>

            </section>


        <section className="cookies-privacity">
            <p>2024 @QUISTESTARLOV</p>
            <a href="" className="enlace">Política de cookies</a>
            <a href="" className="enlace">Política de privacidad</a>
            <img src="../public/colaboradores.png" alt="Logo de la asociación" />
        </section>

    </footer>
    );
};

export default Footer;