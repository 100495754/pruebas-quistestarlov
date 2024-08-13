import './styles/Button.css'
import PropTypes from 'prop-types';


function Button(props) {
  return (
    <button onClick={props.handleClick} href={props.buttonpath} >
        {props.text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    buttonpath: PropTypes.string
};

export default Button