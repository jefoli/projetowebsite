import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ text, onClick, disabled = false }) => (
  <Styled.Container onClick={onClick} disabled={disabled}>
    {text}
  </Styled.Container>
);

Button.DefaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
