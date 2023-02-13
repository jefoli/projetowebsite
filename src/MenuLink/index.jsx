import * as Styled from './styles';

import { Link } from 'react-router-dom';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <li className="navbar-li">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-li">
        <Link to="/sobre">Sobre</Link>
      </li>
      <li className="navbar-li">
        <Link to="/servicos">Serviços</Link>
      </li>
      <li className="navbar-li">
        <Link to="/contato">Contato</Link>
      </li>
      <li className="navbar-li">
        <Link to="/post">Posts</Link>
      </li>
    </Styled.Container>
  );
};
