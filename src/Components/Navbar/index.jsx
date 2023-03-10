import * as Styled from './styles';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { MenuLink } from '../../MenuLink';
import { ButtonLogin } from '../Buttons/ButtonLogin';
import logoPng from '../../assets/images/logo.png';

export const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <AiOutlineMenuFold aria-label="Close menu" /> : <AiOutlineMenuUnfold aria-label="Open menu" />}
      </Styled.Button>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <Styled.MenuContainer>
          <img src={logoPng} alt="logoexample" />
          <MenuLink />
          <ButtonLogin aria-label="Login" />
        </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};
