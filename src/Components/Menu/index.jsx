import * as Styled from './styles';
import P from 'prop-types';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { LogoComponent } from '../LogoComponent';
import NavBar from '../Navbar';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <AiOutlineMenuFold aria-label="Close menu" /> : <AiOutlineMenuUnfold aria-label="Open menu" />}
      </Styled.Button>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoComponent {...logoData} />
            <NavBar links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = { ...NavBar.propTypes, logoData: P.shape(LogoComponent.propTypes).isRequired };
