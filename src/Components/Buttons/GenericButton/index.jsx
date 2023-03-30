import { Link } from 'react-router-dom';
import * as Styled from './styles';
import P from 'prop-types';

export const GenericButton = ({ link, text, onClick, disabled = false }) => {
  return (
    <Link to={link}>
      <Styled.Button onClick={onClick} disabled={disabled}>
        {text}
      </Styled.Button>
    </Link>
  );
};

GenericButton.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  onClick: P.func,
  disabled: P.bool,
};
