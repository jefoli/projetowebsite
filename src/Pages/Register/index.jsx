import { Link } from 'react-router-dom';
import * as Styled from './styles';
// import pngIMG from '../../Components/Logo/logoexample.png';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutComponentsLogin-Register';
import { isEmail, isStrongPassword } from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionContainer } from '../../Components/SectionContainer';
import logoPng from '../../assets/images/logo.png';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleclick(e) {
    e.preventDefault();

    if (name.length < 3 || name.length > 50) {
      toast.error('Digite o nome e o sobrenome');
      return;
    }

    if (!isEmail(email)) {
      toast.error('Digite um e-mail válido');
      return;
    }

    if (password.length <= 8) {
      toast.error('Use 8 caracteres ou mais para sua senha');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.error(
        'Escolha uma senha mais segura. Use uma combinação de letras maíusculas e mínusculas, números e símbolos',
      );
      return;
    }
  }

  return (
    <SectionContainer>
      <Styled.Container>
        <LayoutComponents>
          <Styled.LoginFormTitle>Cadastre-se aqui</Styled.LoginFormTitle>

          <Styled.LoginFormTitle>
            <img src={logoPng} alt="logoexample" />
          </Styled.LoginFormTitle>

          <Styled.WrapInput>
            <Styled.FocusInput
              className={name !== '' ? 'has-val input' : 'input'}
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span
              className="focus-input"
              data-placeholder="Nome Completo"
            ></span>
          </Styled.WrapInput>

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

          <div className="container-login-form-btn">
            <Styled.BtnEnter onClick={handleclick}>continuar</Styled.BtnEnter>
          </div>

          <Styled.ContainerTextCenter>
            <span>Já é cadastrado?</span>
            <Link to="/login">clique aqui</Link>
          </Styled.ContainerTextCenter>

          <ToastContainer />
        </LayoutComponents>
      </Styled.Container>
    </SectionContainer>
  );
};
