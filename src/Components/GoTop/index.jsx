import * as Styled from './styles';
import { BsArrowUpCircle } from 'react-icons/bs';
export const GoTop = () => {
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <BsArrowUpCircle />
    </Styled.Container>
  );
};
