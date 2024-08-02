import "./styles/QueSon.css";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";
import Footer from "./Footer";

function QueSon() {
  return (
    <>
      <Navbar />
      <div className="que-son">
        <AnimatedText as="h1" text="¿QUÉ SON LOS QUISTES DE TARLOV?" />
        <section className="presentation" id="#¿que-son-los-quistes-de-tarlov">
          <Avatar
            src="../src/assets/isadore-tarlov.jpg"
            alt="Avatar"
            size="30vh"
          />
          <div className="content">
            <AnimatedText
              as="h3"
              text="¡Hola! Soy el Dr. Isadore Tarlov"
            ></AnimatedText>
            <p>
              Yo fui quien descubrió accidentalmente los quistes de tarlov.{" "}
              <br />
              <br />
              Resulta que un día de 1938, mientras realizaba una autopsia, me
              encontré con un quiste en la raíz nerviosa de un paciente. Pero,
              ¡ese no era el único! Encontré más quistes en otros pacientes(15
              de 30 autopsias).
            </p>
          </div>
        </section>
        <section className="explanation">
          <h3>¿Qué son?</h3>
          <div className="content">
            <p>
              Los quistes de Tarlov, también conocidos como quistes perineurales
              o perridiculares,{" "}
              <b>
                son dilataciones aracnoideas de la médula espinal ocupadas por
                líquido cefalorraquídeo.
              </b>
              <br />
              <br />
            </p>
            <div className="layout">
              <p>
                Se pueden dar a cualquier nivel de la columna vertebral,
                normalmente entre las dos de las tres meninges que recubren la
                médula espinal, aunque es frecuente que su localización sea en
                la zona sacra. <br />
                <br />
                <b>
                  Es habitual su presencia en la población general, aunque se
                  estima que solo entre un 5 y un 9% de la población presenta
                  síntomas relacionados con los mismos.
                </b>
              </p>
              <img src="../src/assets/radiografia.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="symptoms" id="#sintomatologia">
          <h3>Síntomas</h3>
          <div className="content">
            <div className="left">
              <p>
                {" "}
                <b>Los síntomas no tienen por qué darse a la vez,</b> aunque
                pueden ser progresivos y prolongados además de causar daños
                neurológicos y una remodelación ósea irreversible.
                <br />
                Estos síntomas son causados por irritación de la zona por:
              </p>
              <ul>
                <li>Compresión de las raíces nerviosas</li>
                <li>Compresión de los nervios</li>
              </ul>
            </div>
            <ul>
              <li>Dolor neuropático</li>
              <li>Lumbalgia</li>
              <li>Ciatalgia</li>
              <li>Dolor genital</li>
              <li>Incontinencia urinaria</li>
              <li>Alteraciones intestinales</li>
              <li>Hormigueo</li>
              <li>Sensación de calambre</li>
              <li>Dolor de cabeza</li>
              <li>Impotencia funcional de los miembros</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default QueSon;
