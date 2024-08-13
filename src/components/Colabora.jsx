import AnimatedText from "./AnimatedText";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import "./styles/Colabora.css";

const Colabora = () => {
  return (
    <div className="colabora">
      <Navbar></Navbar>
      <AnimatedText as={"h1"} text={"¿QUIERES COLABORAR?"}></AnimatedText>
      <div className="content">
        <div className="presentation">
          <div className="colabora-text">
            <p>
              Quistes Tarlov es una <b>asociación sin ánimo de lucro</b>.
              Trabaja para destinar los fondos recaudados a la investigación de
              la patología.
            </p>
            <br />
            <p>
              No obstante, trabajamos para mantener a nuestras socias y socios
              informados sobre las últimas publicaciones científicas y sus
              respectivos estudios y avances sobre la enfermedad.
            </p>
          </div>
          <img src="/manos.png" alt="" />
        </div>

        <section className="why">
          <h2>¿POR QUÉ AYUDAR?</h2>
          <p>
            En nuestra página podrás encontrar muchas razones por las que
            ayudar, pero no la que verdaderamente importa, el <b>agradecimiento</b> y
            el <b>reconocimiento</b> de cada una de las personas afectadas por esta
            “oculta” patología. <br />
            La aportación de tu granito al montón de arena, nos permite
            continuar ayudando e investigando acerca de los quistes, darlos a
            conocer y que se le de a esta patología la importancia que
            verdaderamente se merece
          </p>
        </section>

        <section className="como-ayudar">
          <h2>¿CÓMO PUEDES AYUDAR?</h2>
          <h3>HAZTE SOCIA/O</h3>
          <div className="como-ayudar-text">
            <p>
              Puedes hacerte socia/o de Quistes Tarlov independientemente de si
              eres un paciente, un familiar de un paciente o simplemente quieres
              colaborar con nosotros.
            </p>{" "}
            <br />
            <p>
              <b>
                La cuota es de 50 euros anuales, que podrás abonar en 1 o dos
                plazos.
              </b>
            </p>{" "}
            <br />
            <p>
              Para ello, te animamos a hacerte socio de Quistes Tarlov.
              Solicítanos un formulario con la Ficha de Socia/o, que puedes
              cumplimentar para inscribirte y te la haremos llegar a la cuenta
              de e-mail de la Asociación. quistestarlov@gmail.com .
            </p>
          </div>

          <h3>DONACIONES</h3>
          <div className="como-ayudar-text">
            <p>
              Todas las ayudas que consigamos son bienvenidas, por este motivo,
              estaríamos muy agradecidos si decides hacer una donación. No hace
              falta que sean cantidades altas, ¡Todo suma!
            </p>{" "}
            <br />
            <p>
              Así, aceptamos recaudaciones benéficas o simplemente una pequeña
              donación porque sí, porque te apetezca colaborar.
            </p>
          </div>

          <h3>TEAMING</h3>
          <div className="como-ayudar-text">
            <p>
              Teaming es una herramienta online para recaudar fondos para causas
              sociales como la nuestra a través de micro donaciones de 1€ al
              mes.
            </p>{" "}
            <br />
            <p>
              <b>
                La filosofía de Teaming se basa en la idea de que con 1€,
                nosotros solos no podemos hacer mucho pero si nos unimos,
                podemos conseguir grandes cosas.
              </b>
            </p>{" "}
            <br />
            <p>
              Y en esa idea de muchos pocos nos vemos reflejados ya que por poca
              que pienses que sea tu aportación, para nosotros es fundamental
              para avanzar en la investigación y visibilidad de nuestra
              enfermedad rara.
            </p>
          </div>
        </section>
        <div className="card">
          <p className="card-header">
            ¿Quieres ayudarme con 1 € al mes? Únete a mi Grupo
          </p>
          <div className="card-body">
            <img
              src="logo_sin_fondo.png"
              alt="Logo del Grupo"
              className="card-image"
            />
            <div className="card-content">
              <h3>Asociación Quistes de Tarlov</h3>
              <p>
                Quistes Tarlov es una asociación de pacientes y familiares, que
                nace con la idea de ser fuente de apoyo, orientación e
                información en referencia a esta patología. Nuestro objetivo
                principal es conseguir la inv...
                <a href="/">Leer más...</a>
              </p>
              <p className="teamers-count">
                <span className="teamers-number">41</span> Teamers
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://www.teaming.net/quistesdetarlov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Únete a mi Grupo"></Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Colabora;
