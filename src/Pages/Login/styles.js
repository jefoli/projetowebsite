import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;

    margin-top: 50px;
    padding: ${theme.spacings.huge};
    color: ${theme.colors.white};

    min-height: 120vh;
    border-radius: ${theme.fonts.sizes.xxsmall};
    font-size: ${theme.fonts.sizes.xsmall};
    width: 100%;
    align-items: center;
  `}
`;
