/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const ImgStyle = styled.img`
${({ theme }) => css`
    width: 175px;
    border-right: solid rgb(160, 121, 24);
    border-left: solid ${theme.colors.mediumGray};
    border-radius: 30px;
    padding: 10px 0;
    margin: 0 5px;
    gap: 10px;
  `}
`;

export const Wrapper = styled.div`
${({ theme }) => css`
  display: flex;
  padding: 10px;
  width: 175px;
  `}
`;
