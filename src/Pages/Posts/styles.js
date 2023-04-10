import styled, { css } from 'styled-components';
import { Button as ButtonStyle } from '../../Components/Buttons/GenericButton/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.large};
    border-radius: ${theme.fonts.sizes.xxsmall};
    max-width: 120rem;
    margin: ${theme.spacings.small} auto;

    @media ${theme.media.lteMedium} {
      align-items: center;
      max-width: 100%;
    }
  `}
`;

export const StyledButton = styled.div`
  ${({ theme }) => css`
  width: 100%;
  padding: ${theme.spacings.small};

  > ${ButtonStyle} {
    display: flex;
    background: ${theme.colors.backgroundGradientLeft};

    &:disabled {
      background: ${theme.colors.mediumGray};
      cursor: not-allowed;
    }
  `}
  }
`;
