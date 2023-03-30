import { Link } from 'react-router-dom';
import * as Styled from './styles';
import P from 'prop-types';

export const GenericButton = ({ link, text, onClick }) => {
  return (
    <Styled.Container>
      <Link to={link}>
        <Styled.Button onClick={onClick}>{text}</Styled.Button>
      </Link>
    </Styled.Container>
  );
};

GenericButton.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  onClick: P.func,
};
