import * as Styled from './styles';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { MenuLink } from '../../MenuLink';
import { ButtonLogin } from '../Buttons/ButtonLogin';
import logoPng from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [visible, setVisible] = useState(false);

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
        <Styled.MenuContainer>
          <Link to="/">
            <img src={logoPng} alt="logoexample" />
          </Link>
          <MenuLink />
          <ButtonLogin aria-label="Login" />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};
