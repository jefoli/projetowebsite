import * as Styled from './styles';
import { LogoComponent } from '../LogoComponent';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { MenuLink } from '../../MenuLink';
import { MenuIcons } from '../MenuIcons';

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <AiOutlineMenuFold aria-label="Close menu" /> : <AiOutlineMenuUnfold aria-label="Open menu" />}
      </Styled.Button>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoComponent />
            <MenuLink />
            <MenuIcons />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}
