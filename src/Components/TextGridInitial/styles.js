import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1310px;
    margin: 60px 0;
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;
