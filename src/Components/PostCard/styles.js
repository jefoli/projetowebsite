import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
      background: ${theme.colors.white};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 100ms ease-in-out;
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.black};
    }

    &:hover {
      transform: scale(1.05);
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.xsmall};
      text-align: center;
    }
  `};
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.fonts.sizes.large};

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.xsmall};
      text-align: center;
    }
  `};
`;

export const PostTitle = styled.h2`
${({ theme }) => css`
    font-weight: 500;
    padding: ${theme.fonts.sizes.xxsmall} 0;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;

    @media ${theme.media.lteMedium} {
      width: 100%;
      padding: ${theme.spacings.xsmall};
      text-align: center;
    }
  `}
`;

export const PostImage = styled.img`
max-width: 100%;
`;
