import styled, { css } from 'styled-components';

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
