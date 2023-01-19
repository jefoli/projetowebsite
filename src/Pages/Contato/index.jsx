import { Container } from '../../Styles/GlobalStyles';
import './styled';
import { Div, Form } from './styled';

export default function Contato() {
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(e);
  }
  return (
    <Container>
      <h1>CONTATO</h1>
      <h4> Seu contato é muito importante para aprimorarmos nossos serviços!</h4>

      <Div>
        <label>
          Nome:
          <input type="text" className="input-name" name="nome" placeholder="digite seu email"></input>
        </label>
        <label>
          Sobrenome:
          <input type="text" className="input-sobrenome" name="sobrenome" placeholder="digite seu sobrenome"></input>
        </label>
        <label>
          Email:
          <input type="email" className="input-email" name="email" placeholder="digite seu email"></input>
        </label>
        <label>
          Dúvidas, Sugestões, Reclamações:
          <input
            type="text"
            className="input-box"
            name="box"
            placeholder="digite sua dúvida, sugestão, reclamação, etc..."
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
        </label>
        <h2>ENDEREÇOS</h2>
      </Div>
      <Form>
        <div className="grid-content">
          <h3>São Paulo</h3>
          Rua Teste, 000, bairro Teste, CEP 00000-000
        </div>
        <div className="grid-content">
          <h3>Sorocaba</h3>
          Rua Teste, 000, bairro Teste, CEP 00000-000
        </div>
        <div className="grid-content">
          <h3>Votorantim</h3>
          Rua Teste, 000, bairro Teste, CEP 00000-000
        </div>
      </Form>
    </Container>
  );
}
