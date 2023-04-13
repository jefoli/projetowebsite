import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
    display: flex;
    border-bottom: ${theme.spacings.xxxsmall} solid ${theme.colors.colorTitle};
    width: 100%;
    min-height: 80vh;
    background: ${theme.colors.primaryColor};
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    padding: ${theme.spacings.small};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }
  `}
`;

export const SectionWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    font-size: calc(${theme.fonts.sizes.medium} - 0.2rem);
    padding: ${theme.spacings.xsmall};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const StyleGrid = styled.div`
${({ theme }) => css`
  display: grid;
  max-width: 100%;
  max-height: 100%;
  gap: ${theme.spacings.medium};
  grid-template-columns: repeat(4, 1fr);

  @media ${theme.media.lteMedium} {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
  }
`}
`;

export const TextContent = styled.h3`
  ${({ theme }) => css`
    max-width: 75%;
    font-size: ${theme.fonts.sizes.large};
    padding: ${theme.spacings.small};
    line-height: ${theme.fonts.sizes.xxlarge};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;
