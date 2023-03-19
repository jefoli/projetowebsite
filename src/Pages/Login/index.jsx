import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutComponentsLogin-Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';
import { SectionContainer } from '../../Components/SectionContainer';
import logoPng from '../../assets/images/logo.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleclick(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      toast.error('Email inválido');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.error('Senha inválida');
      return;
    }

    toast.success('Dados corretos!');
  }

  return (
    <SectionContainer>
      <Styled.Container>
        <LayoutComponents>
          <Styled.LoginFormTitle>Faça seu login</Styled.LoginFormTitle>

          <Styled.LoginFormTitle>
            <img src={logoPng} alt="logoexample" />
          </Styled.LoginFormTitle>

          <Styled.WrapInput>
            <Styled.FocusInput
              className={email !== '' ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </Styled.WrapInput>

          <Styled.WrapInput>
            <Styled.FocusInput
              className={password !== '' ? 'has-val input' : 'input'}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </Styled.WrapInput>

          <Styled.ContainerBtnEnter>
            <Styled.BtnEnter onClick={handleclick}>Login</Styled.BtnEnter>
          </Styled.ContainerBtnEnter>

          <Styled.ContainerTextCenter>
            <span>Não possui conta?</span>
            <Link to="/register">clique aqui</Link>
          </Styled.ContainerTextCenter>
        </LayoutComponents>

        <ToastContainer />
      </Styled.Container>
    </SectionContainer>
  );
};
