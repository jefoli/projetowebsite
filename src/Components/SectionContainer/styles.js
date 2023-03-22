import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
    color: white;
    background: #080c26;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
