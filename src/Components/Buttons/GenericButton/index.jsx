import { Link } from 'react-router-dom';
import * as Styled from './styles';
import P from 'prop-types';

export const GenericButton = ({
  link,
  text,
  onClick,
  disabled = false,
  backgroundButton,
}) => {
  return (
    <Link to={link}>
      <Styled.Button
        onClick={onClick}
        disabled={disabled}
        backgroundButton={backgroundButton}
      >
        {text}
      </Styled.Button>
    </Link>
  );
};

GenericButton.propTypes = {
  text: P.string.isRequired,
  link: P.string,
  onClick: P.func,
  disabled: P.bool,
  backgroundButton: P.any,
};
