import { Link } from 'react-router-dom';
import * as Styled from './styles';
export const ButtonLogin = () => {
  return (
    <Styled.Container>
      <Link to="/login">
        <button className="login-form-btn">Login</button>
      </Link>
    </Styled.Container>
  );
};
