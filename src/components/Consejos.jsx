import './styles/Consejos.css';
import Navbar from './Navbar';
import AnimatedText from './AnimatedText';
import Footer from './Footer';
function Consejos() {
    return (
        <>
        <Navbar></Navbar>
        <div className="consejos">
            
            <div className="contenido">
                <h1>CONSEJOS PRÁCTICOS</h1>
                <div className="container">
                    <AnimatedText
                    as={"h2"} text={"En caso de intervención..."}>

                    </AnimatedText>
                    <p>Actualmente no disponemos de un consenso acerca de las indicaciones en el caso de que se tenga que realizar una operación, por lo que se debe de estudiar <b>individualmente</b> cada caso, preferiblemente de <b>manera multidisciplinar.</b></p>
                    <br />
                    <p>Según distintos casos que han sido publicados por equipos neuroquirúrgicos aislados, recomiendan <b>operar cada caso con distintos criterios.</b> </p>
                    <br />
                    <p>Por lo que, las recomendaciones se deberán de interpretar con precaución ya que <b>cada caso es individual</b> al ser las <b>muestras de los pacientes muy pequeñas y nada comparables entre sí.</b></p>
                    <br />
                </div>

                <div className="container">
                    <AnimatedText
                    as={"h2"} text={"Y si he sido diagnosticado, ¿qué puedo hacer?..."}>

                    </AnimatedText>
                    <div className="card">
                        <img src="/zen.png" alt="" />
                        <p><b>Mantener la calma.</b> Es lo más importante, ya que alterarnos o estar hecho un manojo de nervios no servirá de nada. </p>
                    </div>
                    <div className="card">
                        <img src="/pautas.png" alt="" />
                        <p>Una vez que hayas sido diagnosticado, el especialista que te esté viendo te tendrá que derivar a la <b>UDO (Unidad del Dolor)</b> para que pauten un tratamiento.</p>
                    </div>
                    <div className="card">
                        <img src="/personitas-verdes.png" alt="" />
                        <p><b>Conoce y conecta con otros pacientes con la misma patología.</b> Por experiencia, encontrar personas con un mismo diagnóstico y compartir las inquitudes es algo muy positivo para el paciente. Un buen método de apoyo y conocimiento lo puedes encontrar en las Asociaciones y en las RRSS.</p>
                    </div>
                    <div className="card">
                        <img src="/www.png" alt="" />
                        <p><b>NO BUSCAR INFORMACIÓN EN INTERNET</b>,  a no ser que sean fuentes fiables. Si no sabemos donde buscar información, es mejor no hacerlo ya que puedes encontrar información errónea y que te llevarán a sacar conclusiones que distan de la realidad.</p>
                    </div>
                </div>


                <section className="sexualidad">
                    <div className="title">
                        <img src="/display-icons/corazon-removebg-preview.png" alt="" />
                        <h1>QUISTES DE TARLOV Y SEXUALIDAD</h1>
                    </div>
                    <p>La sexualidad es un aspecto a tener en cuenta en esta patología hay que incidir de manera especial, ya que puede existir una afectación nerviosa de los órganos pélvicos y es un aspecto que se ve modificado y mermado.</p><br />
                        <p>La vida sexual requiere de movimientos con la zona pélvica y los miembros inferiores que son un verdadero ejercicio físico.
                        </p><br />
                        <p><b>Tras mantener relaciones sexuales, puede ocurrir que se incrementen los dolores, incluso durante varios días.</b></p><br />
                        <p>Todo esto <b>es un tema a tratar a nivel pareja,</b> además de <b>exponerlo claramente a los médicos que nos tratan,</b> porque la sexualidad es un aspecto de nuestra vida que nos proporciona sentimientos tan potentes, como para evitar dejarla de lado.</p>
                    
                </section>


                <section className="pudendo">
                    <div className="title">
                        <h1>NEURALGÍA DE PUDENDO</h1>
                        <img src="/display-icons/neurona-removebg-preview.png" alt="" />
                    </div>
                        <p>La denervación del nervio pudendo no se da en todos los pacientes, ya que cada paciente es único.</p><br />
                        <p>El dolor, la irritación, la quemazón, los calambres y latigazos en la zona genital, el simple roce de la ropa interior… impiden en ocasiones, plantearse tener relaciones sexuales cuando estos nervios se ven afectados por la compresión.
                        </p><br />
                        <p><b>Ser claro, </b>
                        abordar sin miedo la realidad de lo que se está viviendo, resulta fundamental para superar esta situación. Igual que expresamos el dolor sacro, debemos expresar el dolor genital, si sucede.</p><br />                
                </section>


                <section className="SESP">
                    <div className="title">
                        <img src="/display-icons/adn-removebg-preview.png" alt="" />
                        <h1>SINDROME DE EXCITACIÓN SEXUAL PERSISTENTE</h1>
                    </div>
                        <p>Este síndrome se trata de una <b>excitación genital persistente no provocada,</b> que puede estar asociada a un grado de angustia importante, a la clínica de dolor genital y la neuralgia de pudendo. Puede establecerse durante unas horas o durar todo un día.</p><br />
                        
                    
                </section>
            </div>


        </div>

        <Footer></Footer>
        </>
    );
}

Consejos.propTypes = {
    
};

export default Consejos;