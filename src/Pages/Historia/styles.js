import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 120rem;
    height: 900px;
    margin: 15px auto;
    padding: ${theme.spacings.large};
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
