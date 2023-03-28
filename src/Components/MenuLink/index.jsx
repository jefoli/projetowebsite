import * as Styled from './styles';

import { Link } from 'react-router-dom';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <Styled.LiContent>
        <Link to="/">Home</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/sobre">Sobre</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/servicos">Serviços</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/contato">Contato</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/post">Posts</Link>
      </Styled.LiContent>
    </Styled.Container>
  );
};
