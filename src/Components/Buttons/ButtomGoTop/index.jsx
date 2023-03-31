import { CgArrowUpR } from 'react-icons/cg';
import { IconButton } from '../ButtonWithIcon';
import * as Styled from './styles';

export const ButtomGoTop = () => {
  return (
    <Styled.Container href="#">
      <IconButton
        ariaLabel="Go to top"
        title="Go to top"
        icon={<CgArrowUpR />}
      />
    </Styled.Container>
  );
};
