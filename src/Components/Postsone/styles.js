import styled from 'styled-components';

export const Container = styled.div`
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
  }
`;
