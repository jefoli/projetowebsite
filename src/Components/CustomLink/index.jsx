import { Link } from 'react-router-dom';
import P from 'prop-types';
import * as Styled from './styles';

export const CustomLink = ({ to, name }) => {
  return (
    <Styled.Container>
      <Link to={to}>{name}</Link>
    </Styled.Container>
  );
};

CustomLink.propTypes = {
  to: P.string.isRequired,
  name: P.string.isRequired,
};
