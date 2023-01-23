/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: 30px;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    min-height: 100px;
    display: flex;
    align-items: flex-end;
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 30px;
  `}

  > h1 {
    margin-bottom: 30px;
  }
`;
