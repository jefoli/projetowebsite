import { useState } from 'react';
import { LayoutAuthForm } from '../../Components/LayoutAuthForm';
import { isEmail, isStrongPassword } from 'validator';
import { toast } from 'react-toastify';
import { SectionContainer } from '../../Components/SectionContainer';
import { GenericButton } from '../../Components/Buttons/GenericButton';
import { InputWithPlaceholder } from '../../Components/Inputs/InputWithPlaceholder';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(e) {
    e.preventDefault();

    if (name.length < 3 || name.length > 50) {
      toast.error('Digite o nome e o sobrenome');
      console.log('teste');
      return;
    }

    if (!isEmail(email)) {
      toast.error('Digite um e-mail válido');
      return;
    }

    if (password.length <= 8) {
      toast.error('Use 8 caracteres ou mais para sua senha');
      return;
    }

    if (!isStrongPassword(password)) {
      toast.error(
        'Escolha uma senha mais segura. Use uma combinação de letras maíusculas e mínusculas, números e símbolos',
      );
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
          value={password}
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
