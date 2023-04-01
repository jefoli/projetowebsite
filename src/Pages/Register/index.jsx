import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutComponentsLogin-Register';
import { isEmail, isStrongPassword } from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { Logo } from '../../Components/Logo';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();

    if (name.length < 3 || name.length > 50) {
      toast.error('Digite o nome e o sobrenome');
      console.log('teste');
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
    toast.success('Cadastro criado com sucesso');
  }

  return (
    <SectionContainer>
      <Styled.Container>
        <LayoutComponents>
          <Styled.LoginFormTitle>Cadastre-se aqui</Styled.LoginFormTitle>
          <Logo />
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

          <GenericButton text="continuar" link="/login" onClick={handleClick} />

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
