import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { LogoComponent } from '../LogoComponent';
import { MenuIcons } from '../MenuIcons';

export default function NavBar() {
  return (
    <Styled.Container>
      <LogoComponent />
      <Link to="/"></Link>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/historia">História</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/post">Posts</Link>
      <MenuIcons />
    </Styled.Container>
  );
}
