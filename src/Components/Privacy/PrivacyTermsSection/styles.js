import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: justify;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.black};
  `}
`;

export const Title = styled.h2`
${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.black};
  `}
`;
