import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    display: flex;

    a:hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
      background: none;
    }

    @media ${theme.media.lteMedium} {
      flex-flow: nowrap column;
      justify-content: center;
    }
  `}
`;
