import * as Styled from './styles';

export const FormText = () => {
  return (
    <Styled.Container>
      <label>
        Nome:
        <input type="text" name="nome" placeholder="digite seu email"></input>
      </label>
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" placeholder="digite seu sobrenome"></input>
      </label>
      <label>
        Email:
        <input type="email" name="email" placeholder="digite seu email"></input>
      </label>
      <label>
        Telefone:
        <input type="tel" name="tel" placeholder="digite seu telefone"></input>
      </label>
      <label>
        Dúvidas, Sugestões, Reclamações:
        <Styled.InputBox
          type="text"
          name="box"
          placeholder="digite sua dúvida, sugestão, reclamação, etc..."
        ></Styled.InputBox>
        <button type="submit">Enviar</button>
      </label>
    </Styled.Container>
  );
};
