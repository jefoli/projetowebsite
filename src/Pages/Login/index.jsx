/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail, isStrongPassword } from 'validator';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { Logo } from '../../Components/Logo';
import { validateUser } from '../../Components/FormValidator';

export const Login = () => {
  return (
    <SectionContainer>
      <LayoutAuthForm
        title="Faça seu login"
        titleTextButton="Não possui conta?"
        textButton="clique aqui"
      />
    </SectionContainer>
  );
};
