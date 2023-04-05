import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { InputWithPlaceholder } from '../../Components/Inputs/InputWithPlaceholder';
import { validateEmail } from '../../Auth/validateEmail';
import { validatePasswordStrength } from '../../Auth/validatePasswordStrength';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();
    !validateEmail(email) || !validatePasswordStrength(password)
      ? false
      : (toast.success('Login realizado com sucesso'), true);
  }

  return (
    <SectionContainer>
      <LayoutAuthForm
        title="Faça seu login"
        titleTextButton="Não possui conta?"
        textButton="clique aqui"
        to={'/register'}
      >
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
      </LayoutAuthForm>
    </SectionContainer>
  );
};
