import * as Styled from './styles';

import { Link } from 'react-router-dom';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/historia">História</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/post">Posts</Link>
    </Styled.Container>
  );
};
