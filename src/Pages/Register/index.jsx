import { Link } from 'react-router-dom';
import * as Styled from './styles';
import pngIMG from '../../Components/Logo/logoexample.png';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutComponentsLogin-Register';
import { isEmail, isStrongPassword } from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleclick(e) {
    e.preventDefault();

    if (name.length < 3 || name.length > 50) {
      toast.error('Digite o nome e o sobrenome');
    }

    if (!isEmail(email)) {
      toast.error('Digite um e-mail válido');
    }

    if (password.length <= 8) {
      toast.error('Use 8 caracteres ou mais para sua senha');
    } else if (!isStrongPassword(password)) {
      toast.error(
        'Escolha uma senha mais segura. Use uma combinação de letras maíusculas e mínusculas, números e símbolos',
      );
    }
  }

  return (
    <Styled.Container>
      <LayoutComponents>
        <span className="login-form-title">Cadastre-se aqui</span>
        <span className="login-form-title">
          <img src={pngIMG} alt="logoexample" />
        </span>
        <div className="wrap-input">
          <input
            className={name !== '' ? 'has-val input' : 'input'}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome Completo"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== '' ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div className="container-login-form-btn">
          <button className="login-form-btn" onClick={handleclick}>
            continuar
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já é cadastrado?</span>
          <Link className="txt2" to="/login">
            clique aqui
          </Link>
        </div>
        <ToastContainer />
      </LayoutComponents>
    </Styled.Container>
  );
};
