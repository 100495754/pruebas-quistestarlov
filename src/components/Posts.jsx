import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Posts.css";

const Posts = () => {
  const cards = Array(6).fill(0); 
  return (
    <div className="posts">
      <Navbar />
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

export default Posts;
