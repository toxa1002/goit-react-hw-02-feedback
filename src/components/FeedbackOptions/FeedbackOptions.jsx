import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../Button';


function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={s.buttomList}>
            {options.map(buttton => (
                <li key={buttton} className={s.item}>
                    <Button
                        buttonName={buttton}
                        onClick={()=>onLeaveFeedback(buttton)}
                    ></Button>
                </li>
            ))}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    buttonName: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
