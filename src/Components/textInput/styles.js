/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fonts.sizes.medium};
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  `}
`;
