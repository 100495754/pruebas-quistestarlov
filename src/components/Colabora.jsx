
import AnimatedText from './AnimatedText';
const Colabora = () => {
    return (
        <div>
            <AnimatedText as={"h1"} text={"¿QUIERES COLABORAR?"}></AnimatedText>
            <div className="colabora">
                <div className="colabora-text">
                    <p>Quistes Tarlov es una asociación sin ánimo de lucro. Trabaja para destinar los fondos recaudados a la investigación de la patología.</p>
                    <p>No obstante, trabajamos para mantener a nuestras socias y socios informados sobre las últimas publicaciones científicas y sus respectivos estudios y avances sobre la enfermedad.</p>
                </div>
            </div>
        
        </div>
    );
};

export default Colabora;