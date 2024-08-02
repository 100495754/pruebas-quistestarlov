import './styles/NavButton.css'
import PropTypes from 'prop-types';


function NavButton(props) {
  
  return (
    
    <>
      <div className={props.name} onMouseEnter={props.onMouseEnter}>
        <a className='nav-btn' 
        onMouseLeave={props.onMouseLeave}
        onClick={props.handleClick} href={props.buttonpath}>
            {props.text}
        </a>
      </div>
    </>
  )
}

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonpath: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    name: PropTypes.string
};

export default NavButton