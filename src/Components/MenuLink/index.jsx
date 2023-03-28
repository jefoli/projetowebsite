import * as Styled from './styles';

import { Link } from 'react-router-dom';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <Styled.LiContent>
        <Link to="/">Home</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/about">Sobre</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/services">Serviços</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/contact">Contato</Link>
      </Styled.LiContent>

      <Styled.LiContent>
        <Link to="/posts">Posts</Link>
      </Styled.LiContent>
    </Styled.Container>
  );
};
