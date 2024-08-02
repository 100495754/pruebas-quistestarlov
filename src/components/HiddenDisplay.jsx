import "./styles/HiddenDisplay.css";

import PropTypes from 'prop-types';

function HiddenDisplay(props) {
    return (
        <div className='hidden-display'>
            <img src={props.image} alt="" style={{ objectFit: 'contain', maxHeight: '100px' }} />
            <a href={props.reference}>{props.text}</a>
        </div>
    );
}

HiddenDisplay.propTypes = {
    image: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default HiddenDisplay;