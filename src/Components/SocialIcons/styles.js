import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    padding: ${theme.spacings.small} ${theme.spacings.huge};

    a:hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
      background: none;
    }

    .menu-icon {
      display: flex;
      color: ${theme.colors.white};
      font-size: ${theme.spacings.large};
      padding-left: ${theme.spacings.xsmall};
    }

    @media ${theme.media.lteMedium} {
      flex-flow: nowrap;
      justify-content: center;
    }
  `}
`;
