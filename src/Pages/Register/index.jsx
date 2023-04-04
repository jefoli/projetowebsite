import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { toast } from 'react-toastify';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { InputWithPlaceholder } from '../../Components/Inputs/InputWithPlaceholder';
import { validateUser } from '../../utils/validateUser';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();
    if (!validateUser(name, email, password)) {
      return;
    }
    toast.success('Cadastro criado com sucesso');
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
          value={name}
          type="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome Completo"
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
        <GenericButton text="continuar" link="/login" onClick={handleClick} />
      </LayoutAuthForm>
    </SectionContainer>
  );
};
