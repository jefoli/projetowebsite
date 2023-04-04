/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from '../../Components/Logo';
//import P from 'prop-types';

export const LayoutAuthForm = ({
  children,
  title,
  titleTextButton,
  textButton,
  to,
}) => {
  return (
    <Styled.Container2>
      <Styled.Container>
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <Styled.LoginFormTitle>{title}</Styled.LoginFormTitle>
              <Logo />
              {children}
              <Styled.ContainerTextCenter>
                <span>{titleTextButton}</span>
                <Link to={to}>{textButton}</Link>
              </Styled.ContainerTextCenter>
            </form>
          </div>
        </div>
        <ToastContainer />
      </Styled.Container>
    </Styled.Container2>
  );
};
