import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.small};
    width: ${theme.spacings.xxhuge};
  `}
`;
export const ImgStyle = styled.img`
  ${({ theme }) => css`
    width: calc(${theme.spacings.xhuge} * 3);
    border-right: solid rgb(160, 121, 24);
    border-left: solid ${theme.colors.mediumGray};
    border-radius: ${theme.fonts.sizes.medium};
    margin: 0 ${theme.spacings.xxsmall};
    gap: ${theme.spacings.small};
  `}
`;
