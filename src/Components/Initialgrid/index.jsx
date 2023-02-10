import * as Styled from './styles';
import P from 'prop-types';
export const InitialGrid = () => {
  return (
    <Styled.Container>
      <div className="container">
        <h1 className="title">Mais facilidade para acesso ao crédito</h1>

        <img
          className="image"
          src="https://nubank.com.br/images-cms/1663260349-uvdesk.jpg?w=1152&dpr=2&auto=compress&fm=webp"
          alt="imagem de uma mulher vestida de roxo"
        />
      </div>
    </Styled.Container>
  );
};

InitialGrid.propTypes = {
  children: P.node.isRequired,
};
