import * as Styled from './styles';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { MenuLink } from '../MenuLink';
import { GenericButton } from '../Buttons/GenericButton';
import logoPng from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

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
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <AiOutlineMenuFold aria-label="Close menu" />
        ) : (
          <AiOutlineMenuUnfold aria-label="Open menu" />
        )}
      </Styled.Button>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.MenuContainer
          className={`navbar ${isScrolled ? 'scroll' : ''}`}
        >
          <Link to="/">
            <img src={logoPng} alt="logoexample" />
          </Link>
          <MenuLink />
          <GenericButton text={'Login'} link={'/login'} aria-label="Login" />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};
