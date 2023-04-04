import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
  `}
`;

export const Container = styled.div`
${({ theme }) => css`
    display: flex;
    flex-direction: row;

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      max-width: 100%;
    }
  `}
`;

export const FooterAuthor = styled.h1`
  ${({ theme }) => css`
    font-weight: 400;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`;
