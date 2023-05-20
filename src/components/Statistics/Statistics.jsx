import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  arrayFeedbackOptions,
  arrayFeedbackValues,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.list}>
      {arrayFeedbackOptions.map((keyState, index) => (
        <li key={keyState} className={s.item}>
          <span>{keyState}:</span>
          <span className={s.element}>{arrayFeedbackValues[index]}</span>
        </li>
      ))}
      <li className={s.item}>
        <span>total:</span>
        <span className={s.element}>{total}</span>
      </li>
      <li className={s.item}>
        <span>positive feedback:</span>
        <span className={s.element}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  arrayFeedbackOptions: PropTypes.arrayOf(PropTypes.string.isRequired)
    .isRequired,
  arrayFeedbackValues: PropTypes.arrayOf(PropTypes.number.isRequired)
    .isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
