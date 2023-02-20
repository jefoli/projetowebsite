import { Link } from 'react-router-dom';
import * as Styled from './styles';
import pngIMG from '../../Components/Logo/logoexample.png';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutComponentsLogin-Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleclick(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      toast.error('Email inválido');
    }

    if (!isStrongPassword(password)) {
      toast.error('Senha inválida');
    }
  }

  return (
    <Styled.Container>
      <div className="container">
        <LayoutComponents>
          <span className="login-form-title">Faça seu login</span>

          <span className="login-form-title">
            <img src={pngIMG} alt="logoexample" />
          </span>

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
              Login
            </button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta?</span>
            <Link className="txt2" to="/register">
              clique aqui
            </Link>
          </div>
        </LayoutComponents>
      </div>
      <ToastContainer />
    </Styled.Container>
  );
};
