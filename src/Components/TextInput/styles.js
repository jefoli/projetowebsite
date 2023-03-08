import styled, { css } from 'styled-components';
export const Container = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 15px;
  `}
`;
