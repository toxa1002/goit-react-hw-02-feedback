import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import Button from '../Button';


function FeedbackOptions({ buttonNames, onLeaveFeedback }) {
    return (
        <ul className={s.buttomList}>
            {buttonNames.map(buttton => (
                <li key={buttton} className={s.item}>
                    <Button
                        buttonName={buttton}
                        onClick={onLeaveFeedback}
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
