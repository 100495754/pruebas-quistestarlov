import "./App.css";
import Navbar from "./components/Navbar";

import BodyBG from "./components/BodyBG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";
import SaberMas from "./components/SaberMas";
import JuntaYDia from "./components/JuntaYDia";
import QueSon from "./components/QueSon";
import Objetivos from "./components/Objetivos";
import Esfuerzos from "./components/Esfuerzos";
import Presentacion from "./components/Presentacion";
import PropTypes from 'prop-types';
import Footer from "./components/Footer";
import Consejos from "./components/Consejos";
import FuentesInfo from "./components/FuentesInfo";
import Colabora from "./components/Colabora";


const mainArrow = () => {
  window.addEventListener("scroll", function () {
    const scrollDown = document.querySelector(".arrow");
    if (window.scrollY > 100) {
      scrollDown.classList.add("hidden");
    } else {
      scrollDown.classList.remove("hidden");
    }
  });
};


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
};*/

const revealWithInterval = {
  distance: "100px",
  interval: 100,
};
const revealFromLeft = {
  origin: "left",
  distance: "100px",
};
const revealFromRight= {
  origin: "right",
  distance: "100px",
};



Home.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

function Home({isHover, setIsHover, isHover2, setIsHover2, isHover3, setIsHover3}) {
  
  const saberMasRef = useRef(null);
  const handleClickScroll = () => {
    //Función para hacer scroll hasta saber mas
    if (saberMasRef.current) {
      saberMasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <section className="arrow">
        <FontAwesomeIcon icon={faChevronDown} />
      </section>
      <Navbar {...navProps} handleClickScroll={handleClickScroll}></Navbar>
      <BodyBG handleClick={handleClickScroll}></BodyBG>
      <SaberMas SaberMasRef={saberMasRef}></SaberMas>
      <Presentacion></Presentacion>
      <div className="scroll-animation"><JuntaYDia></JuntaYDia></div>
      <div className="scroll-animation"><Objetivos></Objetivos></div>
      <div className="scroll-animation"><Esfuerzos></Esfuerzos></div>
      <Footer></Footer>      
    </>
  );

}

function App() {
  const [currentPath] = useState(window.location.pathname);
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false); 
  const [isHover3, setIsHover3] = useState(false);

  
  const homeProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };

  useEffect(() => {
    mainArrow();

    // ScrollReveal  
    sr.reveal(".body-bg .content", {interval: 100, reset: false});
    sr.reveal(".body-bg .colaboradores img", revealWithInterval, {interval: 700, reset: false});
    sr.reveal(".saber-mas .content section", revealWithInterval, {interval: 700, reset: false});
    sr.reveal(".dia", revealFromLeft);
    sr.reveal(".junta", revealFromRight);
    sr.reveal(".objetivos", {interval: 100});
    sr.reveal(".flor-div", revealFromLeft);
    sr.reveal(".esfuerzos .content", revealFromRight);

    return () => {
      window.removeEventListener("scroll", mainArrow);
    };
    
  }, []);

  
  return (
    <>
    {currentPath === "/" && <Home {...homeProps} />}
    {currentPath === "/que-son-los-quistes-de-tarlov" && <QueSon/>}
    {currentPath === "/consejos" && <Consejos/>}  
    {currentPath === "/fuentes-informacion" && <FuentesInfo/>}  
    {currentPath === "/colabora" && <Colabora/>}  
      
    </>
  );
}

export default App;
