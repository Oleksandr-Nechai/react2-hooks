import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
