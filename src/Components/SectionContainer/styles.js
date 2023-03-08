import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
    color: white;
    background: -webkit-linear-gradient(to top, #003c58, #111);
    background: -o-linear-gradient(to top, #003c58, #111);
    background: -moz-linear-gradient(to top, #003c58, #111);
    background: linear-gradient(to top, #003c58, #111);

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
