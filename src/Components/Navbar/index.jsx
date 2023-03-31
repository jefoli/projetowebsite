/* eslint-disable no-unused-vars */
import * as Styled from './styles';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { MenuLink } from '../MenuLink';
import { GenericButton } from '../Buttons/GenericButton';
import { Logo } from '../Logo';
import { ButtonOpenCloseMenu } from '../Buttons/ButtonOpenCloseMenu';

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      <ButtonOpenCloseMenu
        visible={visible}
        icon={<AiOutlineMenuFold />}
        onClick={() => setVisible(true)}
      />
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.MenuContainer
          className={`navbar ${isScrolled ? 'scroll' : ''}`}
        >
          <Logo link="/" />
          <MenuLink />
          <GenericButton text={'Login'} link={'/login'} aria-label="Login" />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};
