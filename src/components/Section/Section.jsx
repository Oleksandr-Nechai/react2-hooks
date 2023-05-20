import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children, header }) {
  return (
    <div className={s.section}>
      {header ? <h1>{title}</h1> : <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
};
