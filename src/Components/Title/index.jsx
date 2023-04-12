import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    color: ${theme.colors.colorTitle};
    padding: 15px;
    text-transform: uppercase;
    font-weight: 400;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;
