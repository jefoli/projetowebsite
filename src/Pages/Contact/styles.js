import styled, { css } from 'styled-components';
import { Button as ButtonStyle } from '../../Components/Buttons/GenericButton/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: ${theme.spacings.small} auto;
    text-align: center;
    border-radius: ${theme.fonts.sizes.xxsmall};
    min-height: 80vh;
    font-size: ${theme.fonts.sizes.small};
    max-width: 1310px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
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
