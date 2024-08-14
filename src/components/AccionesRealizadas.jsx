
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

import "./styles/AccionesRealizadas.css";

const actividades2122 = [
  "Comienzo de actividad como Asociación en Enero de 2021",
  "FebreroRaro 2021 y 2022",
  "Participación en charlas a alumnos de 3º de Enfermería de la Universidad Europea de Madrid",
  "Intervenciones en «El podcast del Paciente» de la Asociación FFPaciente",
  "Entrevista para «La Gaceta Médica»",
  "Artículo periodístico en «El Diario de Córdoba»",
  "Entrevista con Camurati Engelman",
  "Intervención con alumnos de Fisioterapia de la Universidad de La Laguna en Tenerife",
  "Apoyo en el Día Mundial de la Enfermedad Inflamatoria Intestinal",
  "Mes de sensibilización con testimonios de pacientes",
  "Publicaciones de imágenes de Resonancias e información con artículos científicos",
  "Comenzamos la actividad entre soci@s de «Café Girasol», cada primer lunes de mes",
  "Apoyo a la Universidad Rey Juan Carlos, en el Curso de Paciente Experto en DOLOR",
];
const actividades1920 = [
    "Información Mapa Carlos III y aclaración sobre Incapacidad y Discapacidad",
    "Barómetro ESCrónicos de FEDER",
    "Participación en la 8ª Carrera por la Discapacidad Asociación Dedines",
    "#TestimoniosTarlov",
    "Participación y apoyo en: Día Nacional de Cáncer de Tiroides, Síndrome de Marfan, Día Internacional de la Discapacidad, Día Nacional de la Esclerosis Múltiple, #JuntosPorelCáncer, Día Mundial del Cerebro (SEDENE), #DaleLaVueltaAlaELA, Día Internacional contra la Migraña, Día de la Hipertensión Intracraneal Idiopática, Personas Ostomizadas, Día Mundial Contra el Dolor, Semana Concienciación del Cannabis, (S) Campaña de Visibilización Síndrome de Camurati Engelmann",
    "Nacimiento #GirasolesTQ con el 17 octubre Día Mundial del Dolor, Día Mundial del Lupus",
    "Participación en el Decálogo del Paciente Activo de FFPaciente",
    "Participación en #CaféTabú",
    "Docencia a alumnos de 3º Enfermería sobre Dolor y QT en Universidad Europea",
    "Podcast Quistes de Tarlov, Escuela Andaluza de Pacientes",
    "Entrevista en Saludesfera",
    "Asistencia a los Premios Enfermería en Desarrollo 19",
    "Concurso y Asistencia a Premios Enfermeriinova 19",
    "Formación a Grupo Scout Acroux",
    "Participación en la Carrera Solidaria organizada por AFACyL",
    "Participación en la Carrera Solidaria “Palencia en marcha”, AECC",
    "Participación y asistencia al VII Congreso de la Escuela de Pacientes de Andalucía",
    "Entrevista para TV3",
    "Participación en la Tele Marató de TV3",
    "Premio I4Impact",
    "#FebreroRaro2020",
    "Celebración Día Mundial de las EERR en Gimnasios INACUA con QUISTESTARLOV",
    "Podcast Covid19 y Enfermedades Raras, Escuela Andaluza de Pacientes",
    "Asistencia al Congreso “Somos 300 millones” organizado por CREER (Burgos)",
    "Colaboraciones con la Asociación de Autoinmunes de Andalucía",
    "Participación en el curso “El dolor lumbar: Mucho más que un dolor” URJC",
    "Participación online Congreso Internacional Enfermedades Raras CIBERER ISCIII",
    "Docencia Alumnos de Enfermería Universidad Europea online EERR y Dolor",
    "#MeQuedoCon de FFPaciente",
    "Asistencia telemática a la mesa de pacientes del I Congreso de SINUG"
];
const actividades1819 = [
    "Informaciones varias sobre la patología y Mapa Carlos III",
    "I encuentro Pacientes Blogueros de FFPaciente",
    "III Jornadas Promoción Autonomía Personal en Enfermedades Raras",
    "Asistencia a la Jornada 'House' de OpenReuma (investigación, diagnóstico, rehabilitación y psicología del dolor)",
    "Intervención en #100dolor Twitter",
    "Intervención en 7ª Carrera Asociación Dedines Getafe",
    "Asistencia a I Congreso #NoHayDolor de la Sociedad Española del Dolor",
    "Intervención 17 octubre Día Mundial del Dolor. Asistencia a I Jornada Nacional",
    "Asistencia a las VII Jornadas de Somos Pacientes organizado por Farmaindustria",
    "Asistencia a las III Jornadas de 'Promoción para la Autonomía Personal en Enfermedades Raras' CREER (Burgos)",
    "Asociación de Técnicos de Enfermería, Emergencias, Sanitarios y Sociosanitarios (AETESYS)",
    "Apoyo a diversas patologías en redes: Cáncer de Mama, Síndrome de dolor regional simpático reflejo, Dolor Infantil, Síndrome de Marfan, Día internacional de la Discapacidad, Disfagia con SEDENE, MOVEMBER, #JuntosPorElCáncer, Endometriosis, Día Mundial de La Salud, #RetoEstírate Ehlers Danlos, Día Mundial del Lupus",
    "Formación en Habilidades Digitales para pacientes de FFPaciente y Universidad Europea",
    "Participación en 5º Aniversario Tu Vida Sin Dolor",
    "Charla Coloquio ELA y QUISTES DE TARLOV en Palencia (Colaboración del Ayuntamiento de Palencia)",
    "Participación 4ª Edición Paciente Experto en Enfermedades Crónicas de la Universidad Rey Juan Carlos",
    "#FEBRERORARO Por la Inversión e Investigación en Enfermedades Raras",
    "Asistencia VIII edición de la Jornada CIBERER «Investigar es Avanzar»",
    "Participación 10ª Carrera de La Esperanza de FEDER",
    "Participación Congreso Síndrome Antifosfolípido",
    "Participación en Cronichat",
    "Asistencia al I Encuentro de Pacientes con Hipoparatiroidismo"
];

function ListaAcciones({array}) {
  return (
    <ul className="lista">
      {array.map((item, index) => (
        <li key={index} className="item">
          {item}
        </li>
      ))}
    </ul>
  );
}
ListaAcciones.propTypes = {
    array: PropTypes.array.isRequired,
};

const AccionesRealizadas = ({
  isHover,
  setIsHover,
  isHover2,
  setIsHover2,
  isHover3,
  setIsHover3,
}) => {
  const navProps = {
    isHover: isHover,
    setIsHover: setIsHover,
    isHover2: isHover2,
    setIsHover2: setIsHover2,
    isHover3: isHover3,
    setIsHover3: setIsHover3,
  };
  return (
    <div className="acciones-realizadas">
      <Navbar {...navProps}></Navbar>
      <div className="content">
        <h1>Actividades 2021 y 2022</h1>
        <ListaAcciones array={actividades2122}></ListaAcciones>
        <h1>Actividades 2019 y 2020</h1>
        <ListaAcciones array={actividades1920}></ListaAcciones>
        <h1>Actividades 2018 y 2019</h1>
        <ListaAcciones array={actividades1819}></ListaAcciones>
      </div>
      <Footer></Footer>
    </div>
  );
};

AccionesRealizadas.propTypes = {
  isHover: PropTypes.bool.isRequired,
  setIsHover: PropTypes.func.isRequired,
  isHover2: PropTypes.bool.isRequired,
  setIsHover2: PropTypes.func.isRequired,
  isHover3: PropTypes.bool.isRequired,
  setIsHover3: PropTypes.func.isRequired,
};

export default AccionesRealizadas;
