import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Posts.css";
import PropTypes from "prop-types";


const Posts = ({isHover, setIsHover, isHover2, setIsHover2, isHover3, setIsHover3}) => {
  const cards = Array(6).fill(0); 

  const navProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };

  return (
    <div className="posts">
      <Navbar {...navProps}/>
      <h1 className="title">NOTICIAS</h1>
      <div className="content">
        <div className="card-container">
          {cards.map((_, index) => (
            <div className="card" key={index}>
              <img
                src="/logo_sin_fondo.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

Posts.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};


export default Posts;
