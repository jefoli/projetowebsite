import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { LogoComponent } from '../LogoComponent';
import { MenuIcons } from '../MenuIcons';
import { SearchContainer } from '../../Pages/Posts/styles';
import P from 'prop-types';

export default function NavBar({ link, newTab = false }) {
  const target = newTab ? '_blank' : '_self';
  return (
    <SearchContainer>
      <Styled.Container href={link} target={target}>
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
    </SearchContainer>
  );
}

NavBar.propTypes = {
  //children: P.node.isRequired,
  link: P.string,
  newTab: P.bool,
};
