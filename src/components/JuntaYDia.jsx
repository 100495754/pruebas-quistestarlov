
import Button from "./Button";
import './styles/JuntaYDia.css'

function JuntaYDia() {
    return(
        <section className="juntaYdia">
        <div className="dia">
          <div className="container">
            <h1>Día de @quistestarlov</h1>
            <h1>24 JUNIO</h1>
          </div>
          <div>
            <Button text="ACCIONES REALIZADAS"></Button>
          </div>
        </div>

        <div className="junta">
          <div className="container">
            <h1>JUNTA DIRECTIVA</h1>
            <p>
              Somos una asociación compuesta por un grupo de personas, con valores
              y que busca, ante todo, ayudar a los demás.{" "}
            </p>
            <p>Nuestra Junta Directiva está compuesta por:</p>
            <ul>
              <li>Ana José Bravo Bazaga (Presidenta)</li>

              <li>Nuria Sánchez-Torija Gutiérrez (Secretaria)</li>
              

              <li>Isabel Otxandorena Juanena (Tesorera)</li>

              <li>Purificación M Hernández Alarcón (Vocal)</li>

               <li>Elena Almalé Laste (Vocal)</li>
              
            </ul>
            <p>
              Miembros de la Asociación (todos aquellos socios que comparten
              espíritu de equipo y de ilusión por avanzar en esta patología)
            </p>
            <p>
              Transparencia y estatutos: Esta asociación se enmarca en la Ley
              Orgánica 1/2002, de 22 de marzo, estando sus actividades reguladas
              por dicha ley.
            </p>
          </div>
        </div>
      </section>
    )
}


export default JuntaYDia