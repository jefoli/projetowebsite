import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const LogoComponent = () => {
  return (
    <Styled.Container>
      <Link to="/">
        <img src="./logoexample.png" alt="" />
      </Link>
    </Styled.Container>
  );
};
