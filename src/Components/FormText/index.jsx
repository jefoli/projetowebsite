import { GenericButton } from '../Buttons/GenericButton';
import * as Styled from './styles';

export const FormText = () => {
  return (
    <Styled.Container>
      <Styled.LabelText>
        Nome:
        <Styled.InputArea
          type="text"
          name="nome"
          placeholder="digite seu email"
        ></Styled.InputArea>
      </Styled.LabelText>

      <Styled.LabelText>
        Sobrenome:
        <Styled.InputArea
          type="text"
          name="sobrenome"
          placeholder="digite seu sobrenome"
        ></Styled.InputArea>
      </Styled.LabelText>

      <Styled.LabelText>
        Email:
        <Styled.InputArea
          type="email"
          name="email"
          placeholder="digite seu email"
        ></Styled.InputArea>
      </Styled.LabelText>

      <Styled.LabelText>
        Telefone:
        <Styled.InputArea
          type="tel"
          name="tel"
          placeholder="digite seu telefone"
        ></Styled.InputArea>
      </Styled.LabelText>

      <Styled.LabelText>
        Dúvidas, Sugestões, Reclamações:
        <Styled.InputBox
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
