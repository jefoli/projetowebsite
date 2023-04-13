import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small};
    width: calc(${theme.spacings.xxxhuge} * 3);
  `}
`;
export const ImgStyle = styled.img`
  ${({ theme }) => css`
    width: calc(${theme.spacings.xxxhuge} * 2);
    border-right: solid rgb(160, 121, 24);
    border-left: solid ${theme.colors.mediumGray};
    border-radius: ${theme.fonts.sizes.medium};
    gap: ${theme.spacings.xxxhuge};
  `}
`;
