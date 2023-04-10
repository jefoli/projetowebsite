import * as Styled from './styles';
import { useState } from 'react';
import { MenuLink } from '../MenuLink';
import { GenericButton } from '../Buttons/GenericButton';
import { Logo } from '../Logo';
import { ButtonOpenCloseMenu } from '../Buttons/ButtonOpenCloseMenu';
import { useHideOnScroll } from '../../utils/hide-scroll';

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const isScrolled = useHideOnScroll();

  return (
    <Styled.Container className={` ${isScrolled ? 'scroll' : ''}`}>
      <ButtonOpenCloseMenu visible={visible} onClick={() => setVisible(true)} />
      <Styled.Wrapper visible={visible} onClick={() => setVisible(false)}>
        <Styled.MenuContainer>
          <Logo link="/" />
          <MenuLink />
          <GenericButton
            text={'Login'}
            link={'/login'}
            backgroundButton={'backgroundGradientLeft'}
            aria-label="Login"
          />
        </Styled.MenuContainer>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
