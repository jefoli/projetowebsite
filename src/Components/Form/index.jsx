import { GenericButton } from '../Buttons/GenericButton';
import { InputBox } from '../Input';
import * as Styled from './styles';

export const Form = () => {
  return (
    <Styled.Container>
      <Styled.LabelText>
        Nome:
        <InputBox type="text" name="firstname" placeholder="digite seu nome" />
      </Styled.LabelText>

      <Styled.LabelText>
        Sobrenome:
        <InputBox
          type="text"
          name="lastname"
          placeholder="digite seu sobrenome"
        />
      </Styled.LabelText>

      <Styled.LabelText>
        Email:
        <InputBox type="email" name="email" placeholder="digite seu email" />
      </Styled.LabelText>

      <Styled.LabelText>
        Telefone:
        <InputBox type="tel" name="tel" placeholder="digite seu telefone" />
      </Styled.LabelText>

      <Styled.LabelText>
        Dúvidas, Sugestões, Reclamações:
        <InputBox
          type="text"
          name="box"
          className="input"
          placeholder="digite sua dúvida, sugestão, reclamação, etc..."
        />
        <Styled.BtnSubmit>
          <GenericButton text="Enviar" type="submit" />
        </Styled.BtnSubmit>
      </Styled.LabelText>
    </Styled.Container>
  );
};
