import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
