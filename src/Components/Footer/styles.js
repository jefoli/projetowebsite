import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    padding: 15px;
  `}
`;
