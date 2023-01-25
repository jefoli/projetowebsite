import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';

import { Container as Navbar } from '../Navbar/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};

    transition: all 300ms ease-in-out; // com isso daqui, a partir do momento que mudou o estado do componente (hidden + opacity) o menu irá sofrar uma alteração até chegar na opacidade

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Navbar} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible(theme)} //precisamos setar essa visibilidade no botão

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Navbar} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0; //pading para o topo e para baixo
    }
  `}
`;
