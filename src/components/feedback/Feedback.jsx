import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ onLeavefeedback, options }) => {
  return (
    <div className={css.wrap}>
      {options.map((name, i) => {
        return (
          <button
            key={i + 1}
            className={css[name]}
            // При кліку виклик функції яка передає назву відгуку як аргумент
            onClick={() => {
              onLeavefeedback(name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
