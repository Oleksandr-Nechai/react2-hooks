import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, handleButtonClick }) {
  return (
    <div className={s.container}>
      {options.map(keyState => (
        <button
          type="button"
          key={keyState}
          onClick={() => handleButtonClick(keyState)}
          className={s.button}
        >
          {keyState}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
