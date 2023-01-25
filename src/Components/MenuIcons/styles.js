import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.primaryColor};

    a:hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
      background: none;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
