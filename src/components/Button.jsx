import './styles/Button.css'
import PropTypes from 'prop-types';


function Button(props) {
  return (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func
};

export default Button