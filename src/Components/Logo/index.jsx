import { Link } from 'react-router-dom';
import logoPng from '../../assets/images/logo.png';
import P from 'prop-types';

export const Logo = ({ link }) => {
  return (
    <Link to={link}>
      <img src={logoPng} alt="logoexample" />;
    </Link>
  );
};

Logo.propTypes = {
  link: P.string,
};
