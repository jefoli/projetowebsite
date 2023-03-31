import * as Styled from './styles';
import { TextAdress } from '../../Components/TextAdress';
import { SocialIcons } from '../../Components/SocialIcons';
export const Footer = () => {
  return (
    <Styled.Container>
      <SocialIcons />
      <TextAdress />
      <p>Desenvolvido por Jeferson de Oliveira</p>
    </Styled.Container>
  );
};
