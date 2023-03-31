import * as Styled from './styles';
import { CustomLink } from '../CustomLink';

export const MenuLink = () => {
  return (
    <Styled.Container>
      <CustomLink to={'/'} name="Home" />

      <CustomLink to={'/about'} name="About" />

      <CustomLink to={'/services'} name="Services" />

      <CustomLink to={'/contact'} name="Contact" />

      <CustomLink to={'/posts'} name="Posts" />
    </Styled.Container>
  );
};
