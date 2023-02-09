import { Link } from 'react-router-dom';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';

export const Login = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>Faça o seu Login abaixo:</h1>
        <h1>Digite seu email:</h1>
        <input type="text" name="username" id="" />
        <h1>Digite sua senha:</h1>
        <input type="password" name="password" id="" />
        <button type="submit">Logar</button>
        <br />
        <p>Você é novo por aqui?</p>
        <Link to="/register">clique aqui</Link> para se cadastrar!
      </Styled.Container>
    </SectionContainer>
  );
};
