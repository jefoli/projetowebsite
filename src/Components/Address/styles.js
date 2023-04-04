import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.medium};
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 500;
  `}
`;
