import styled, { css } from 'styled-components';

export const ContainerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }

  `}
`;
