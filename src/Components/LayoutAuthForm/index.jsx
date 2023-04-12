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
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.WrapperLogin>
          <Styled.LoginFormTitle>{title}</Styled.LoginFormTitle>
          <Logo />
          {children}
          <Styled.ContainerTextCenter>
            <span>{titleTextButton}</span>
            <Link to={to}>{textButton}</Link>
          </Styled.ContainerTextCenter>
        </Styled.WrapperLogin>
      </Styled.Container>

      <ToastContainer />
    </Styled.Wrapper>
  );
};
