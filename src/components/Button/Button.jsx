import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ buttonName, onClick }) {
    return (
        <button className={s.button} onClick={onClick} type="button">
            {buttonName}
        </button>
    );
}

Button.propTypes = {
    buttonName: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
