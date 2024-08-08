
import './styles/Esfuerzos.css';
import Button from './Button'; // Assuming the Button component is located in the same directory as 'Esfuerzos.jsx' or in a subdirectory.


function Esfuerzos() {
    return (
        <div className='esfuerzos' id='#nuestros-esfuerzos'>
            <section className="container">
                
                <div className="flor-div">
                    <h3>¿Por qué somos 
                    girasoles?</h3>
                    <p>Cuando no hay sol, los girasoles se miran unos a otros para compartir su energía.<br /><br />
                    La asociación está gestionada por pacientes y profesionales de la salud, en muchos casos expertos en la patología, lo que puede serte de gran ayuda si necesitas más información. </p>
                    <Button text='¿QUIERES COLABORAR?' handleClick={() => {}}></Button>
                </div>
                <div className="content">
                    <h2 className="title">Nuestros esfuerzos...</h2>
                    <p className="text">Comprometidos a:</p>
                    <ul>
                        <li><b>Promover</b> acciones de apoyo mutuo entre pacientes y sus familias para conseguir, entre todos, una mejora física, psíquica y social. </li>
                        <li><b>Reclamar</b> más recursos sanitarios especializados para el tratamiento de los Quistes de Tarlov en España</li>
                        <li><b>Apoyar</b> los proyectos de investigación sobre los Quistes de Tarlov
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

Esfuerzos.propTypes = {
    
};

export default Esfuerzos;