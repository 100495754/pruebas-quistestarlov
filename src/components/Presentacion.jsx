//import Button from "./Button";
import "./styles/Presentacion.css";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import AnimatedText from "./AnimatedText";
import { useEffect,useRef, useState } from "react"; // Add this line to import useEffect and useState


const avatars = [
  {
    src: "./ana-jose.png",
    alt: "Avatar",
    name: "Ana José",
    role: "Presidenta",
  },
  {
    src: "./elena.png",
    alt: "Avatar",
    name: "Elena",
    role: "Vocal",
  },
  {
    src: "./isabel.png",
    alt: "Avatar",
    name: "Isabel",
    role: "Tesorera",
  },
  {
    src: "./ziortza.png",
    alt: "Avatar",
    name: "Ziortza",
    role: "Vocal",
  },
  {
    src: "./nuria.png",
    alt: "Avatar",
    name: "Nuria",
    role: "Secretaria",
  },
];
const avatars2 = [
  {
    src: "./ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "./isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "./nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
];


function AvatarCard({ src, alt, name, role, delay}) {
  const [isVisible, setIsVisible] = useState(false);
  const [size, setSize] = useState(getInitialSize());
  const cardRef = useRef();
  function getInitialSize() {
    if (window.innerWidth < 600) {
      return '190px';
    } else if (window.innerWidth < 1400) {
      return '400px';
    }else if (window.innerWidth < 2000) {
      return '30vh';
    } else {
      return '35vh';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSize('190px');
      } else if (window.innerWidth < 1400) {
        setSize('400px');
      }
      else if (window.innerWidth < 2000) {
        setSize('30vh');
      } else {
        setSize('35vh');
      }
    };

    // Añade el event listener
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
              observer.unobserve(cardRef.current);
            }
          });
        },
        { threshold: 0.1 } // Ajusta este valor según sea necesario
      )

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  return (
    <div ref={cardRef} className={`avatar-card ${isVisible ? "visible" : ""}`}>
      <Avatar src={src} alt={alt} size={size} />
      <div className="display-card">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

AvatarCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};



function MembersCard() {
  return (
    <div className="miembros">
      <div className="miembros-inner">
        {avatars2.map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            size={avatar.size}
          />
        ))}
      </div>
    </div>
  );
}

function Presentacion() {
  
  return (
    <section className="presentacion" id="#junta-directiva">
      <AnimatedText as="h1" text="NUESTRA JUNTA DIRECTIVA" />
      <div className="container">
        {avatars.map((avatar, index) => (
          <AvatarCard
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            size={avatar.size}
            name={avatar.name}
            role={avatar.role}
            delay={index * 500}
          />
        ))}
      </div>
      <AnimatedText as="h3" text="Y no estamos solas..." />
      <MembersCard/>
    </section>
  );
}

export default Presentacion;

