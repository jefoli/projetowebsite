import { Link } from 'react-router-dom';
import * as Styled from './styles';
export const ButtonLogin = () => {
  return (
    <Styled.Container>
      <Link to="/login">
        <Styled.BtnLogin>Login</Styled.BtnLogin>
      </Link>
    </Styled.Container>
  );
};
