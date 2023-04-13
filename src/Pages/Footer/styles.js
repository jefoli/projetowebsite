import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    text-align: center;
    font-size: calc(${theme.fonts.sizes.xsmall} + 0.3rem);
  `}
`;

export const FlexContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${theme.fonts.sizes.xxxsmall} solid ${theme.colors.boxColor};

    > a {
      font-size: calc(${theme.fonts.sizes.xsmall} + 0.4rem);
      padding: ${theme.spacings.medium} ${theme.spacings.xxxhuge};
      color: ${theme.colors.white};
      font-weight: 700;

    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      flex-direction: column;
    }
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

export const FooterAuthor = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`;
