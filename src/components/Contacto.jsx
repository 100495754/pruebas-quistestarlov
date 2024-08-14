import { useState } from "react";
import "./styles/Contacto.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log("Form data:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tu nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Tu correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tu mensaje (opcional)</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="privacy-policy"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
          />
          <label htmlFor="privacy-policy">
            He leído y acepto la política de privacidad de esta web.
          </label>
        </div>

        <div className="form-group">
          <button type="submit" className="btn-submit">
            ENVIAR
          </button>
        </div>
      </form>

      <div className="privacy-note">
        <p>
          Necesitamos que confirmes que la aceptas haciendo un tic. De esta
          manera nos darás
          <strong> consentimiento expreso</strong> para utilizar tus datos
          personales de contacto (Nombre, email e IP) para responderte (
          <strong>Finalidad</strong>). El{" "}
          <strong>responsable de su tratamiento</strong> será la junta directiva
          de la asociación Quistes de Tarlov. La información que nos facilitas
          quedará registrada en los servidores de Raiola Networks. La
          conservaremos hasta que nos pidas que la eliminemos o cierre esta web.
          Puedes ejercer tus derechos de acceso, rectificación, limitación o
          eliminación de esta información mandándonos este mismo formulario.
          Tienes más información en
          <a href="#"> la página de nuestra política de privacidad</a>.
        </p>
      </div>
    </div>
  );
};

const Contacto = ({isHover, setIsHover, isHover2, setIsHover2, isHover3, setIsHover3}) => {
  const navProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };
  return (
    <div className="contacto">
      <Navbar {...navProps}></Navbar>
      <div className="content">
        <h1>¿Necesitas ayuda?</h1>
        <p>
          Puedes ponerte en contacto a través de las redes sociales o
          mandándonos el formulario. Trataremos de contestarte lo antes posible
        </p>
        <Formulario></Formulario>
      </div>
      <Footer></Footer>
    </div>
  );
};

Contacto.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

export default Contacto;
