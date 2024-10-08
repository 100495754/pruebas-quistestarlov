import PropTypes from "prop-types";
import { useState } from "react";
import NavButton from "./NavButton";
import HiddenDisplay from "./HiddenDisplay"; // Import the HiddenDisplay component
import "./styles/Navbar.css";

const displayData1 = [
  {
    image: "./display-icons/bombilla-removebg-preview.png",
    text: "¿De dónde venimos?",
    reference: "/#¿quienes-somos?",
  },
  {
    image: "./display-icons/tasks-removebg-preview.png",
    text: "Nuestros Objetivos",
    reference: "/#nuestros-objetivos",
  },
  {
    image: "./display-icons/personas-removebg-preview.png",
    text: "Junta Directiva",
    reference: "/#junta-directiva",
  },
  {
    image: "./display-icons/biceps-removebg-preview.png",
    text: "Nuestros Esfuerzos",
    reference: "/#nuestros-esfuerzos",
  },
  {
    image: "./display-icons/girasol-removebg-preview.png",
    text: "Somos Girasoles",
    reference: "/#nuestros-esfuerzos",
  },
];

const displayData2 = [
  {
    image: "./display-icons/interrogante-removebg-preview.png",
    text: "¿Qué Son?",
    reference: "/que-son-los-quistes-de-tarlov#¿que-son-los-quistes-de-tarlov",
  },
  {
    image: "./display-icons/objetivos-removebg-preview.png",
    text: "Sintomatología",
    reference: "/que-son-los-quistes-de-tarlov#sintomatologia",
  },
  {
    image: "./display-icons/puzzle-removebg-preview.png",
    text: "Causas",
    reference: "/que-son-los-quistes-de-tarlov#causas",
  },
  {
    image: "./display-icons/diagnostico-removebg-preview.png",
    text: "Diagnóstico",
    reference: "/que-son-los-quistes-de-tarlov#diagnostico",
  },
  {
    image: "./display-icons/enfermera-removebg-preview.png",
    text: "Especialistas Implicados",
    reference: "/que-son-los-quistes-de-tarlov#especialistas-implicados",
  },
];

const displayData3 = [
  {
    image: "./display-icons/corazon-removebg-preview.png",
    text: "Quistes de Tarlov y Sexualidad",
    reference: "/consejos#quistes-tarlov-sexualidad",
  },
  {
    image: "./display-icons/calendario-removebg-preview.png",
    text: "El día a día",
    reference: "/consejos#dia-a-dia",
  },
  {
    image: "./display-icons/adn-removebg-preview.png",
    text: "Síndrome de exitación sexual persistente",
    reference: "/consejos#sindrome-exitacion-sexual-persistente",
  },
];

function Display({ array, onMouseLeave }) {
  return (
    <>
      <div className="display" onMouseLeave={onMouseLeave}>
        {array.map((item, index) => (
          <HiddenDisplay
            key={index}
            image={item.image}
            text={item.text}
            reference={item.reference}
          />
        ))}
      </div>
    </>
  );
}
Display.propTypes = {
  array: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <i
        className={`fas fa-bars ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></i>
      {isOpen && (
        <div className="nav-buttons-bars">
          <NavButton text="¿QUIÉNES SOMOS?" buttonpath="/#¿quienes-somos?" />
          <NavButton
            text="¿QUÉ SON LOS QUISTES DE TARLOV?"
            buttonpath="/que-son-los-quistes-de-tarlov"
          />
          <NavButton text="NOVEDADES" buttonpath="/novedades" />
          <NavButton text="CONSEJOS PRÁCTICOS" buttonpath="/consejos" />
          <NavButton text="CONTACTO" buttonpath="/contacto" />
        </div>
      )}
    </div>
  );
};

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/logo_sin_fondo.png" alt="logo"></img>
          <h1>QuistesTarlov</h1>
        </div>
        <div className="sides">
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(true);
              props.setIsHover2(false);
              props.setIsHover3(false);
            }}
            text="¿QUIÉNES SOMOS?"
            handleClick={props.handleClick}
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
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(false);
              props.setIsHover3(false);
            }}
            text="NOVEDADES"
            buttonpath="/novedades"
          />
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(false);
              props.setIsHover3(true);
            }}
            text="CONSEJOS PRÁCTICOS"
            buttonpath="/consejos"
          ></NavButton>
          <NavButton
            onMouseEnter={() => {
              props.setIsHover(false);
              props.setIsHover2(false);
              props.setIsHover3(false);
            }}
            text="CONTACTO"
            buttonpath="/contacto"
          ></NavButton>
        </div>

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

        <HamburgerMenu />
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
  handleClick: PropTypes.func,
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

export default Navbar;
