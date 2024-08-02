//import Button from "./Button";
import "./styles/Presentacion.css";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import AnimatedText from "./AnimatedText";
import { useEffect,useRef, useState } from "react"; // Add this line to import useEffect and useState

function AvatarCard({ src, alt, size, name, role, delay}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();
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

const avatars = [
  {
    src: "../public/ana-jose.png",
    alt: "Avatar",
    size: "35vh",
    name: "Ana José",
    role: "Presidenta",
  },
  {
    src: "../public/elena.png",
    alt: "Avatar",
    size: "35vh",
    name: "Elena",
    role: "Vocal",
  },
  {
    src: "../public/isabel.png",
    alt: "Avatar",
    size: "35vh",
    name: "Isabel",
    role: "Tesorera",
  },
  {
    src: "../public/ziortza.png",
    alt: "Avatar",
    size: "35vh",
    name: "Ziortza",
    role: "Vocal",
  },
  {
    src: "../public/nuria.png",
    alt: "Avatar",
    size: "35vh",
    name: "Nuria",
    role: "Secretaria",
  },
];
const avatars2 = [
  {
    src: "../public/ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/ana-jose.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/elena.png",
    alt: "Avatar",
    size: "20vh",
  },
  {
    src: "../public/isabel.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/ziortza.png",
    alt: "Avatar",
    size: "20vh",

  },
  {
    src: "../public/nuria.png",
    alt: "Avatar",
    size: "20vh",
  },
];

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

/**function Presentacion() {
    return (
        <section className="presentacion">
            <h1>NUESTRA JUNTA DIRECTIVA</h1>
            <div className="container">
                <div className="avatar-card">
                <Avatar
                src="../public/ana-jose.png"
                alt="Avatar"
                onAvatarHover={() => {
                    const displayAna = document.querySelector(".display-ana");
                    displayAna.classList.remove("display-ana");
                    displayAna.classList.add("display-ana-active");
                }}
                onAvatarUnHover={() => {
                    const displayAna = document.querySelector(".display-ana-active");
                    displayAna.classList.remove("display-ana-active");
                    displayAna.classList.add("display-ana");
                }}
                size="35vh"
                ></Avatar>
                <div className="display-ana">
                    <h3>Ana José</h3>
                    <p>Presidenta</p>
                </div>
                </div>

                <div className="avatar-card">
                <Avatar src="../src/assets/elena.png" alt="Avatar" 
                onAvatarHover={() => {
                    const displayElena = document.querySelector(".display-elena");
                    displayElena.classList.remove("display-elena");
                    displayElena.classList.add("display-elena-active");
                }}
                onAvatarUnHover={() => {
                    const displayElena = document.querySelector(".display-elena-active");
                    displayElena.classList.remove("display-elena-active");
                    displayElena.classList.add("display-elena");
                }} 
                size="35vh"></Avatar>
                <div className="display-elena">
                    <h3>Ana José</h3>
                    <p>Presidenta</p>
                </div>
                </div>

                <div className="avatar-card">
                <Avatar src="../src/assets/nuria.png" alt="Avatar" 
                onAvatarHover={() => {
                    const displayNuria = document.querySelector(".display-nuria");
                    displayNuria.classList.remove("display-nuria");
                    displayNuria.classList.add("display-nuria-active");
                }}
                onAvatarUnHover={() => {
                    const displayNuria = document.querySelector(".display-nuria-active");
                    displayNuria.classList.remove("display-nuria-active");
                    displayNuria.classList.add("display-nuria");
                }} 
                size="35vh"></Avatar>
                <div className="display-nuria">
                    <h3>Ana José</h3>
                    <p>Presidenta</p>
                </div>
                </div>

                <div className="avatar-card">
                <Avatar src="../src/assets/isabel.png" alt="Avatar" 
                onAvatarHover={() => {
                    const displayIsabel = document.querySelector(".display-isabel");
                    displayIsabel.classList.remove("display-isabel");
                    displayIsabel.classList.add("display-isabel-active");
                }}
                onAvatarUnHover={() => {
                    const displayIsabel = document.querySelector(".display-isabel-active");
                    displayIsabel.classList.remove("display-isabel-active");
                    displayIsabel.classList.add("display-isabel");
                }} 
                size="35vh"></Avatar>
                <div className="display-isabel">
                    <h3>Ana José</h3>
                    <p>Presidenta</p>
                </div>
                </div>

                <div className="avatar-card">
                <Avatar src="../src/assets/ziortza.png" alt="Avatar"
                onAvatarHover={() => {
                    const displayZiortza = document.querySelector(".display-ziortza");
                    displayZiortza.classList.remove("display-ziortza");
                    displayZiortza.classList.add("display-ziortza-active");
                }}
                onAvatarUnHover={() => {
                    const displayZiortza = document.querySelector(".display-ziortza-active");
                    displayZiortza.classList.remove("display-ziortza-active");
                    displayZiortza.classList.add("display-ziortza");
                }} 
                size="35vh"></Avatar>
                <div className="display-ziortza">
                    <h3>ziortza José</h3>
                    <p>Presidenta</p>
                </div>
                </div>
            </div>


        </section>
        );
} */
