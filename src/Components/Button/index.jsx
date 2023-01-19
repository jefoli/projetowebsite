import * as Styled from './styles.js';

import P from 'prop-types';

export const Button = ({ text, onClick, disabled }) => {
  return (
    <Styled.Container>
      <button onClick={onClick} className="button" disabled={disabled}>
        {text}
      </button>
    </Styled.Container>
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
