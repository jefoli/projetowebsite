import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import P from 'prop-types';
import * as Styled from './styles';

export const Logo = ({ link }) => {
  return (
    <Link to={link}>
      <Styled.Img src={logoPng} alt="logoexample" />
    </Link>
  );
};

Logo.propTypes = {
  link: P.string,
};
