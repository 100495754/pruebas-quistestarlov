import PropTypes from 'prop-types';
import './styles/AnimatedText.css';

const AnimatedText = ({ as: Element,text }) => {
  return (
    <Element className="animated-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Element>
  );
};

AnimatedText.propTypes = {
  as: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AnimatedText;