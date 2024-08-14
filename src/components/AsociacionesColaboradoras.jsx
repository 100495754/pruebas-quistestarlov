import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "./styles/AsociacionesColaboradoras.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  reset: false,
});

const revealFromLeft = {
  origin: "left",
  distance: "100px",
};
const revealFromRight = {
  origin: "right",
  distance: "100px",
};

const AsociacionesColaboradoras = ({
  isHover,
  setIsHover,
  isHover2,
  setIsHover2,
  isHover3,
  setIsHover3,
}) => {
    useEffect(() => {
    sr.reveal(".asociacion .ass-card img", revealFromLeft);
    sr.reveal(".asociacion .ass-card p", revealFromRight);
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
    <div className="asociaciones-colaboradoras">
      <Navbar {...navProps}></Navbar>
      <div className="content">
        <h1>ASOCIACIONES COLABORADORAS</h1>
        <p>
          Estamos orgullosos de poder colaborar con asociaciones estupendas
          como:
        </p>
        <section className="asociaciones">
          <div className="asociacion">
            <h2>ANSEDH</h2>
            <div className="ass-card">
              <img src="/ansedh.png" alt="Asociacion 1" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                distinctio similique molestias, dolores optio corporis, tenetur
                eius officia vel sunt laboriosam. Optio consectetur vero animi
                nam maxime excepturi quod sunt.
              </p>
            </div>
          </div>
          <div className="asociacion">
            <h2>FEDER</h2>
            <div className="ass-card">
              <img src="/feder.jpg" alt="Asociacion 2" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                distinctio similique molestias, dolores optio corporis, tenetur
                eius officia vel sunt laboriosam. Optio consectetur vero animi
                nam maxime excepturi quod sunt.
              </p>
            </div>
          </div>
          <div className="asociacion">
            <h2>ADOPEC</h2>
            <div className="ass-card">
              <img src="/adopec.jpg" alt="Asociacion 3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                distinctio similique molestias, dolores optio corporis, tenetur
                eius officia vel sunt laboriosam. Optio consectetur vero animi
                nam maxime excepturi quod sunt.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

AsociacionesColaboradoras.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

export default AsociacionesColaboradoras;
