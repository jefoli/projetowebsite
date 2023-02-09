import { Link } from 'react-router-dom';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
export const Register = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>Faça seu cadastro abaixo:</h1>
        <label className="wrap-input">
          <span className="focus-input">Email</span>

          <input className="input" type="text" name="username" id="" />
        </label>
        <label className="wrap-input">
          <span className="focus-input">Password</span>

          <input className="input" type="text" name="lastname" id="" />
        </label>

        <div className="container-login-btn">
          <button className="login-form-btn" type="submit"></button>
        </div>

        <Link to="/login">clique aqui!</Link>
      </Styled.Container>
    </SectionContainer>
  );
};
