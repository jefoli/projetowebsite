import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
      background: ${theme.colors.white};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 100ms ease-in-out;
      font-size: ${theme.fonts.sizes.small};
      color: #000;
      font-family: 'Rubik', sans-serif;
    }

    &:hover {
      transform: scale(1.05);
    }

    & img {
      max-width: 100%;
    }

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
    }
  `};
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
      padding: ${theme.fonts.sizes.large};

    }

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
    }

  `}
`;
