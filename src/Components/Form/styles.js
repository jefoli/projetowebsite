import styled, { css } from 'styled-components';
import { Button as ButtonStyle } from '../Buttons/GenericButton/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
    margin-top: ${theme.spacings.xxlarge};
    background: none;
  `}
`;

export const BtnSubmit = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-width: calc(${theme.spacings.huge} + 0.6rem);

    & ${ButtonStyle}{
      &:focus {
        background: gray;
        transition: all 50ms;
      }
    }
  `}
`;
