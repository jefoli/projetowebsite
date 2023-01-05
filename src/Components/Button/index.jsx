import './styles.css';

import P from 'prop-types';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <div className="button-container">
      <button onClick={onClick} className="button" disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

Button.DefaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
