import PropTypes from 'prop-types';
import Button from "./Button";
import './styles/BodyBG.css'

function BodyBG(props) {
    return(
        <div className='body-bg'>
            <div className="content">
                <h1>Juntos podemos ayudarte a mejorar la calidad de vida</h1>
                <h5>Porque todos merecemos una vida plena</h5>
                <Button text="SABER MÁS" handleClick={props.handleClick}></Button>
            </div>
            <div className="colaboradores">
                <img src="/adopec.jpg" alt="" />
                <img src="/ansedh.png" alt="" />
                <img src="/feder.jpg" alt="" />
            </div>
        </div>
    )
}

BodyBG.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default BodyBG