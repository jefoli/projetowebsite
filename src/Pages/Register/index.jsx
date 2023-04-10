import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { toast } from 'react-toastify';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { InputWithPlaceholder } from '../../Components/Inputs/InputWithPlaceholder';
import { validateUser } from '../../Auth/validateUser';
import { validatePasswordStrength } from '../../Auth/validatePasswordStrength';
import { validateCpf } from '../../Auth/validateCpf';
import { validateEmail } from '../../Auth/validateEmail';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();
    !validateUser(firstName, lastName) ||
    !validateCpf(cpf) ||
    !validateEmail(email) ||
    !validatePasswordStrength(password, repeatPassword, firstName, lastName)
      ? false
      : (toast.success('Cadastro criado com sucesso'), true);
  }

  return (
    <SectionContainer>
      <LayoutAuthForm
        title="Cadastre-se aqui"
        titleTextButton="Já é cadastrado?"
        textButton="clique aqui"
        to={'/login'}
      >
        <InputWithPlaceholder
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Nome"
        />

        <InputWithPlaceholder
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Sobrenome"
        />

        <InputWithPlaceholder
          value={cpf}
          type="text"
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
        />

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

        <InputWithPlaceholder
          value={repeatPassword}
          type="password"
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Confirme seu Password"
        />
        <GenericButton
          text="continuar"
          link="/login"
          onClick={handleClick}
          backgroundButton={'backgroundGradientLeft'}
        />
      </LayoutAuthForm>
    </SectionContainer>
  );
};
