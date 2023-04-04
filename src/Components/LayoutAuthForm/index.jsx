/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useState } from 'react';
import { LayoutComponents } from '../../Components/LayoutAuthForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { Logo } from '../../Components/Logo';
import { validateUser } from '../../Components/FormValidator';
import P from 'prop-types';
import { InputWithPlaceholder } from '../Inputs/InputWithPlaceholder';

export const LayoutAuthForm = ({
  title,
  titleTextButton,
  textButton,
  onClick,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (validateUser(email, password)) {
      toast.success('Dados corretos!');
    }
  }

  return (
    <Styled.Container2>
      <Styled.Container>
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <Styled.LoginFormTitle>{title}</Styled.LoginFormTitle>
              <Logo />

              <InputWithPlaceholder
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <InputWithPlaceholder
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <GenericButton text="entre" link="/login" onClick={handleClick} />

              <Styled.ContainerTextCenter>
                <span>{titleTextButton}</span>
                <Link to="/register">{textButton}</Link>
              </Styled.ContainerTextCenter>
            </form>
          </div>
        </div>
      </Styled.Container>
    </Styled.Container2>
  );
};
