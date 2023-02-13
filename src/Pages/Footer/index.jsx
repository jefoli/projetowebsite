import * as Styled from './styles';
import { TextAdress } from '../../Components/TextAdress';
import { MenuIcons } from '../../Components/MenuIcons';
export const Footer = () => {
  return (
    <Styled.Container>
      <MenuIcons />
      <TextAdress />
      <p>Desenvolvido por Jeferson de Oliveira</p>
    </Styled.Container>
  );
};
