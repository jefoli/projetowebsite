import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    background: ${theme.colors.primaryColor};
    grid-template-columns: 280px 280px 280px;
    justify-content: space-between;
    width: 100%;
    justify-content: space-around;
    padding: 20px;
    text-align: center;
    color: ${theme.colors.white};
    @media: ${theme.media.lteMedium};
  `}
`;
