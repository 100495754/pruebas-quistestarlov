import "./styles/QueSon.css";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedText";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



const avatars_diagnosis = [
  {
    src: "./rmn.png",
    alt: "Avatar",
    size: "30vh",
    name: "Resonancia Magnética (RMN)",
    text: "Indoloro y sin radiación. Duración aproximada de 30 minutos.",
  },
  {
    src: "./tac.png",
    alt: "Avatar",
    size: "30vh",
    name: "Tomografía Axial Computarizada (TAC)",
    text: "Se utiliza como complemento a la RMN. Es un método indoloro pero con radiación.",
  },
  {
    src: "./emg.png",
    alt: "Avatar",
    size: "30vh",
    name: "Electromiografía (EMG)",
    text: "Descargas eléctricas para comprobar la comunicación. Duración entre 30-40 minutos, siendo ésta una prueba tolerable.",
  },
  {
    src: "./mielografia.png",
    alt: "Avatar",
    size: "30vh",
    name: "Mielografía",
    text: "Se utiliza este método para saber si los quistes están comprimiendo las raíces nerviosas, con rayos X y contraste.",
  },
];

const sr = ScrollReveal({origin: "bottom", distance: "60px", duration: 2000, reset: true});

/* const revealFromTop = {
  origin: "top",
};
const revealWithShortDistance = {
  distance: "60px",
};
const revealWithDelay = {
  distance: "100px",
  delay: 400,
};

const revealWithInterval = {
  distance: "100px",
  interval: 100,
};*/

const revealFromLeft = {
  origin: "left",
  distance: "100px",
};
const revealFromRight= {
  origin: "right",
  distance: "100px",
};

QueSon.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

function QueSon({isHover, setIsHover, isHover2, setIsHover2, isHover3, setIsHover3}) {
  const [size, setSize] = useState(getInitialSize());
  function getInitialSize() {
    if (window.innerWidth < 600) {
      return '190px';
    } else if (window.innerWidth < 1400) {
      return '250px';
    }else if (window.innerWidth < 2000) {
      return '30vh';
    } else {
      return '35vh';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSize('190px');
      } else if (window.innerWidth < 1400) {
        setSize('250px');
      }
      else if (window.innerWidth < 2000) {
        setSize('30vh');
      } else {
        setSize('35vh');
      }
    };

    // Añade el event listener
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    sr.reveal(".presentation .avatar", revealFromLeft);
    sr.reveal(".presentation .content p", revealFromRight);
    sr.reveal(".especialistas .container .card img", revealFromLeft);
    sr.reveal(".especialistas .container .card p", revealFromRight);
  }, []);


  const navProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };


  return (
    <>
      
      <div className="que-son">
      <Navbar {...navProps}/>
        <AnimatedText as="h1" text="¿QUÉ SON LOS QUISTES DE TARLOV?" />
        <section className="presentation" id="#¿que-son-los-quistes-de-tarlov">
          <Avatar
            src="/isadore-tarlov.jpg"
            alt="Avatar"
            size={size}
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
            </p>
            <p>Resulta que un día de 1938, mientras realizaba una autopsia, me
              encontré con un quiste en la raíz nerviosa de un paciente. Pero,
              ¡ese no era el único! Encontré más quistes en otros pacientes(15
              de 30 autopsias).</p>
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
              <div className="">
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
                <br />
                <h3>No es considerada una enfermedad rara desde 2024, pero sí poco frecuente</h3>
              </div>
              <img src="/radiografia.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="symptoms" id="#sintomatologia">
          <h3>Síntomas</h3>
          <div className="content">
            
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
          </div>
        </section>

        <section className="symptoms" >
          <h3> Otros Síntomas</h3>
          <div className="content">
          <ul>
            <li>Dolor crónico lumbar, sacro, coccígeo y radicular.</li>
            <li>Hormigueos o sensaciones anómalas en las piernas.</li>
            <li>Dolor o sensaciones anómalas en la zona pélvica o perineal</li>
            <li>Falta de fuerza en las piernas</li>
            <li>Disfunción sexual, urinaria o defecatoria.</li>
            <li>Infecciones de orina</li>
            <li>Dificultad en la continencia gaseosa.</li>
            <li>Signos de hipotensión del líquido cefalorraquídeo (dolor de cabeza que aparece cuando el paciente se pone de pie).</li>
            <li>Dolor en bipedestación (de pie), sedestación (sentado), o caminando</li>
            <li>Dolor pélvico</li>
            <li>Dolor en relaciones sexuales (dispareunia)</li>
          </ul>

          </div>
        </section>

        <section className="causas" id="#causas">
          <h3> Causas</h3>
          <div className="content">
            <p><b>Actualmente se desconocen las causas,</b> aunque se barajan varias hipótesis: <br /></p>
          <ul>
            <li>Dolor crónico lumbar, sacro, coccígeo y radicular.</li>
            <li>Hormigueos o sensaciones anómalas en las piernas.</li>
            <li>Dolor o sensaciones anómalas en la zona pélvica o perineal</li>
            <li>Falta de fuerza en las piernas</li>
          </ul>
          <p>Surgen por el aumento de la presión del líquido cefalorraquídeo junto con un fenómeno valvular anómalo que permite el no retorno del líquido que se encuentra dentro del quiste.</p>

          </div>
        </section>

        <section className="diagnosis" id="#diagnostico">
          <h3>
            Diagnóstico
          </h3>

          <div className="content"> 
              {avatars_diagnosis.map((avatar, index) => (
              <div className={`display${index}`} key={index}>
                <div className="circle">
                  <Avatar
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  size={size}
                  delay={index * 500}
                  
                  />
                  <p>{avatar.text}</p>
                </div>

                <div className="diagnosis-title">
                <h3>{avatar.name}</h3></div>
            
              </div>
              ))}
        

          </div>

        </section>

        <section className="especialistas" id="#especialistas">
          <h3> Especialistas</h3>
          <div className="content">
          <p>
          Hoy en día, no existe una especialidad médica concreta que permita diagnosticar y asumir esta patología.
          Sin embargo, <b>ciertos especialistas podrían llevar a cabo el diagnóstico,</b> tales como:
          </p>
          <div className="container">
            <h4>RADIOLOGÍA</h4>
            <div className="card">
              <img src="/radiologia.png" alt="" />
              <p>El buen trabajo y reconocimientos de los especialistas implicados resulta fundamental a la hora de informar la RMN o TAC.</p>
            </div>
          </div>
          <div className="container">
            <h4>NEUROCIRUGÍA</h4>
            <div className="card">
              <img src="/neurologia.png" alt="" />
              <p>Desde nuestra experiencia, <b>la Neurocirugía parece la especialidad idónea</b> para hacer un seguimiento y tratamiento quirúrgico si procede.</p>
            </div>
          </div><div className="container">
            <h4>UROLOGÍA</h4>
            <div className="card">
              <img src="/urologia.png" alt="" />
              <p>Sería recomendable el seguimiento por parte de <b>Urología</b>, especializada en nervio pudendo.</p>
            </div>
          </div><div className="container">
            <h4>UNIDAD DEL DOLOR</h4>
            <div className="card">
              <img src="/dolor.png" alt="" />
              <p><b>La Unidad del Dolor,</b> resulta pieza clave para el control y tratamiento del síntoma principal, con tratamientos de menos a más invasivos. </p>
            </div>
          </div>
          </div>
        </section>

      </div>

      <Footer></Footer>
    </>
  );
}

export default QueSon;
