import { GenericButton } from '../Buttons/GenericButton';
import { ContactFormInput } from '../ContactFormInput';
import * as Styled from './styles';

export const Form = () => {
  return (
    <Styled.Container>
      <ContactFormInput
        labelText="Nome"
        type="text"
        name="firstname"
        placeholder="digite seu nome"
      />

      <ContactFormInput
        labelText="Sobrenome"
        type="text"
        name="lastname"
        placeholder="digite seu sobrenome"
      />

      <ContactFormInput
        labelText="Email"
        type="email"
        name="email"
        placeholder="digite seu email"
      />

      <ContactFormInput
        labelText="Telefone"
        type="tel"
        name="tel"
        placeholder="digite seu telefone"
      />

      <ContactFormInput
        labelText="Dúvidas, Sugestões, Reclamações"
        type="text"
        name="box"
        placeholder="digite sua dúvida, sugestão, reclamação, etc..."
      />
      <Styled.BtnSubmit>
        <GenericButton text="Enviar" type="submit" />
      </Styled.BtnSubmit>
    </Styled.Container>
  );
};
