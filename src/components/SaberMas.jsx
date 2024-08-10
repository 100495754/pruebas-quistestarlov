import PropTypes from 'prop-types';
import Button from "./Button";
import './styles/SaberMas.css'

function SaberMas(props) {
    return(
        <section className="saber-mas" ref={props.SaberMasRef} id='¿quienes-somos?'>
          <div className="content">
            <section className="quienes-somos">
              <h1>¿Quiénes somos?</h1>
              <p>
                Somos una asociación de pacientes y familiares, con el sueño de
                brindar apoyo, orientación e información en relación a esta
                patología.
              </p>
              <Button text="NUESTROS OBJETIVOS"></Button>
            </section>

            <section className="girasol">
              <img src="./girasol.png" alt="Imagen de un girasol" />
            </section>

            <section className="donde">
              <h1>¿De dónde venimos?</h1>
              <p>
                En 2018, tres pacientes de quistes de Tarlov se unieron con el
                sueño de ayudar a aquellas personas que sufren del mismo
                diagnóstico y que viven la misma incertidumbre, el desconocimiento
                y falta de ayuda.
              </p>
              <p>
                De esta gran ilusión, nace el usuario <b>“@quistestarlov”</b> en
                redes sociales con el fin de{" "}
                <b>informar, divulgar y demandar más investigación.</b>
              </p>
            </section>
          </div>
      </section>
    )
}

SaberMas.propTypes = {
    SaberMasRef: PropTypes.object
}

export default SaberMas