// Estilos y Librerías Externas
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

// Librerías de React
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar';
import BodyBG from './components/BodyBG';
import SaberMas from './components/SaberMas';
import JuntaYDia from './components/JuntaYDia';
import QueSon from './components/QueSon';
import Objetivos from './components/Objetivos';
import Esfuerzos from './components/Esfuerzos';
import Presentacion from './components/Presentacion';
import Footer from './components/Footer';
import Consejos from './components/Consejos';
import FuentesInfo from './components/FuentesInfo';
import Colabora from './components/Colabora';
import Posts from './components/Posts';
import Contacto from './components/Contacto';


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


const sr = ScrollReveal({origin: "bottom", distance: "60px", duration: 2000, reset: false});

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
  const navigate = useNavigate();
  const handleClickId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  const handleClickNavigate = (id) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    mainArrow();
    return () => {
      window.removeEventListener("scroll", mainArrow);
    };
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
      <section className="arrow">
        <FontAwesomeIcon icon={faChevronDown} />
      </section>
      <Navbar {...navProps} handleClick={() => handleClickId("¿quienes-somos?")}></Navbar>
      <BodyBG handleClick={() => handleClickId("¿quienes-somos?")}></BodyBG>
      <SaberMas handleClick={() => handleClickId("nuestros-objetivos")} ></SaberMas>
      <Presentacion></Presentacion>
      <JuntaYDia></JuntaYDia>
      <Objetivos></Objetivos>
      <Esfuerzos handleClick={() => {
        handleClickNavigate("colabora");
      }}></Esfuerzos>
      <Footer></Footer>      
    </>
  );

}

/*
TAREAS POR HACER:
- Crear componente acciones realizadas, fuentes de información, asociaciones colaboradoras
- Lo de la privacidad y las Cookies
- Repasar las imagenes
- Repasar responsive Footer
*/

function App() {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false); 
  const [isHover3, setIsHover3] = useState(false);

  
  const navProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };

  useEffect(() => {

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
      
    };
    
  }, []);

  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home {...navProps} />} />
        <Route path="/que-son-los-quistes-de-tarlov" element={<QueSon {...navProps}/>} />
        <Route path="/consejos" element={<Consejos {...navProps}/>} />
        <Route path="/fuentes-informacion" element={<FuentesInfo {...navProps}/>} />
        <Route path="/colabora" element={<Colabora {...navProps}/>} />
        <Route path="/contacto" element={<Contacto {...navProps}/>} />
        <Route path="/novedades" element={<Posts {...navProps}/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
