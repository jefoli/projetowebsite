import * as Styled from './styles';
import { Link } from 'react-router-dom';

import imgPng from './logoexample.png';

export const LogoComponent = () => {
  return (
    <Styled.Container>
      <Link to="/">
        <img className="logo" src={imgPng} alt="" />
      </Link>
    </Styled.Container>
  );
};
