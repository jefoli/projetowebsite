import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.sizes.medium};
    padding: 0rem ${theme.spacings.small};
    width: auto;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
      padding: ${theme.spacings.large} 0rem;
    }
  `};
`;
