import * as Styled from './styles';
import { CgArrowUpR } from 'react-icons/cg';
export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <CgArrowUpR />
    </Styled.Container>
  );
};
