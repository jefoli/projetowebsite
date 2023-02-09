/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    padding: ${theme.spacings.large};
    color: ${theme.colors.white};
    width: 100%;
    height: 900px;
    text-align: center;
    border-radius: ${theme.fonts.sizes.xxsmall};
    max-width: 120rem;
    margin: 15px auto;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
