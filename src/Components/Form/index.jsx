import { GenericButton } from '../Buttons/GenericButton';
import { InputBox } from '../InputBox';
import * as Styled from './styles';

export const Form = () => {
  return (
    <Styled.Container>
      <Styled.LabelText>Nome:</Styled.LabelText>
      <InputBox type="text" name="firstname" placeholder="digite seu nome" />

      <Styled.LabelText>Sobrenome:</Styled.LabelText>
      <InputBox
        type="text"
        name="lastname"
        placeholder="digite seu sobrenome"
      />
      <Styled.LabelText>Email:</Styled.LabelText>
      <InputBox type="email" name="email" placeholder="digite seu email" />

      <Styled.LabelText>Telefone:</Styled.LabelText>
      <InputBox type="tel" name="tel" placeholder="digite seu telefone" />

      <Styled.LabelText>Dúvidas, Sugestões, Reclamações:</Styled.LabelText>
      <InputBox
        type="text"
        name="box"
        className="input"
        placeholder="digite sua dúvida, sugestão, reclamação, etc..."
      />
      <Styled.BtnSubmit>
        <GenericButton text="Enviar" type="submit" />
      </Styled.BtnSubmit>
    </Styled.Container>
  );
};
