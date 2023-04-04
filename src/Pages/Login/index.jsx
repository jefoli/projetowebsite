import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { validateUser } from '../../utils/validateUser';
import { InputWithPlaceholder } from '../../Components/Inputs/InputWithPlaceholder';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (!validateUser(email, password)) {
      return;
    }
    toast.success('Dados corretos!');
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
