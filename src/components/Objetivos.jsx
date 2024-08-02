
import './styles/Objetivos.css';

function OrderedList() {
    return (
        <div className="content" id='#nuestros-objetivos'>
            <div>
                <h2>1</h2>
                <p><b>Investigar</b> buscando la causa y alternativas seguras de tratamiento.</p>
            </div>
            <div>
                <h2>2</h2>
                <img src="./assets/porta-numeros-girasoles" alt="" />
                <p><b>Visibilizar</b> la patología</p>
            </div>
            <div>
                <h2>3</h2>
                <img src="./assets/porta-numeros-girasoles" alt="" />
                <p><b>Proporcionar</b> Información y Orientación (SIO)</p>
            </div>
            <div>
                <h2>4</h2>
                <img src="./assets/porta-numeros-girasoles" alt="" />
                <p><b>Lograr Centros, Servicios y Unidades de Referencia (CSUR)</b>
                a nivel nacional a través del Sistema de Información de Fondo de Cohesión SIFCO del Ministerio de Sanidad.</p>
            </div>
            <div>
                <h2>5</h2>
                <img src="./assets/porta-numeros-girasoles" alt="" />
                <p><b>Priorizar</b>las consultas sanitarias y revisiones en CSUR y especialistas que corresponda.</p>
            </div>
        </div>
    );
}



function Objetivos() {
    return (
        <div className='objetivos'>
            <h1>NUESTROS OBJETIVOS</h1>
            <section className="container">
                <OrderedList></OrderedList>
                <div className="flor-div">
                    <img src="./src/assets/flor-2.png" alt="Flor" className="flor" />
                </div>
            </section>
        </div>
    );
}

Objetivos.propTypes = {
    
};

export default Objetivos;