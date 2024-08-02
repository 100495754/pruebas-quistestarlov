import PropTypes from "prop-types";
import NavButton from "./NavButton";
import HiddenDisplay from "./HiddenDisplay"; // Import the HiddenDisplay component
import "./styles/Navbar.css";

const displayData1 = [
    {
        image: "./public/display-icons/bombilla-removebg-preview.png",
        text: "¿De dónde venimos?",
        reference: "#¿quienes-somos?",
    },
    {
        image: "./public/display-icons/tasks-removebg-preview.png",
        text: "Nuestros Objetivos",
        reference: "#nuestros-objetivos",
    },
    {
        image: "./public/display-icons/personas-removebg-preview.png",
        text: "Junta Directiva",
        reference: "#junta-directiva",
    },
    {
        image: "./public/display-icons/biceps-removebg-preview.png",
        text: "Nuestros Esfuerzos",
        reference: "#nuestros-esfuerzos",
    },
    {
        image: "./public/display-icons/girasol-removebg-preview.png",
        text: "Somos Girasoles",
        reference: "#nuestros-esfuerzos",
    },
];

const displayData2 = [
    {
        image: "./public/display-icons/interrogante-removebg-preview.png",
        text: "¿Qué Son?",
        reference: "/que-son-los-quistes-de-tarlov#¿que-son-los-quistes-de-tarlov",
    },
    {
        image: "./public/display-icons/objetivos-removebg-preview.png",
        text: "Sintomatología",
        reference: "/que-son-los-quistes-de-tarlov#sintomatologia",
    },
    {
        image: "./public/display-icons/puzzle-removebg-preview.png",
        text: "Causas",
        reference: "/que-son-los-quistes-de-tarlov#causas",
    },
    {
        image: "./public/display-icons/diagnostico-removebg-preview.png",
        text: "Diagnóstico",
        reference: "/que-son-los-quistes-de-tarlov#diagnostico",
    },
    {
        image: "./public/display-icons/enfermera-removebg-preview.png",
        text: "Especialistas Implicados",
        reference: "/que-son-los-quistes-de-tarlov#especialistas-implicados",
    },
];

const displayData3 = [
        {
            image: "./public/display-icons/corazon-removebg-preview.png",
            text: "Quistes de Tarlov y Sexualidad",
            reference: "#quistes-tarlov-sexualidad",
        },
        {
            image: "./public/display-icons/calendario-removebg-preview.png",
            text: "El día a día",
            reference: "#dia-a-dia",
        },
        {
            image: "./public/display-icons/adn-removebg-preview.png",
            text: "Síndrome de exitación sexual persistente",
            reference: "#sindrome-exitacion-sexual-persistente",
        },
];

function Display({ array, onMouseLeave }) {
  return (
    <>
      <div className="display" onMouseLeave={onMouseLeave}>
        {array.map((item, index) => (
          <HiddenDisplay key={index} image={item.image} text={item.text} reference={item.reference} />
        ))}
      </div>
    </>
  );
}
Display.propTypes = {
  array: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="sides">
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(true);
              props.setIsHover2(false);
              props.setIsHover3(false);
            }}
            text="¿QUIÉNES SOMOS?"
            handleClick={props.handleClickScroll}
            buttonpath="/#¿quienes-somos?"
          ></NavButton>

          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(true);
              props.setIsHover3(false);
            }}
            text="¿QUÉ SON LOS QUISTES DE TARLOV?"
            buttonpath="/que-son-los-quistes-de-tarlov"
          ></NavButton>
        </div>
        <h1>QUISTES TARLOV</h1>
        <div className="sides">
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(false);
              props.setIsHover3(true);
            }}
            text="CONSEJOS PRÁCTICOS"
          ></NavButton>
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(false);
              props.setIsHover3(false);
            }}
            text="CONTACTO"
          ></NavButton>
        </div>
      </div>
      {props.isHover === true && (
        <Display
          array={displayData1}
          onMouseEnter={() => {
            props.setIsHover(true);
            props.setIsHover2(false);
            props.setIsHover3(false);
          }}
          onMouseLeave={() => props.setIsHover(!props.isHover)}
        />
      )}
      {props.isHover2 === true && (
        <Display
          array={displayData2}
          onMouseLeave={() => props.setIsHover2(!props.isHover2)}
        />
      )}
      {props.isHover3 === true && (
        <Display
          array={displayData3}
          onMouseLeave={() => props.setIsHover3(!props.isHover3)}
        />
      )}
    </>
  );
}

Navbar.propTypes = {
  handleClickScroll: PropTypes.func.isRequired,
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

export default Navbar;
