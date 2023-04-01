import { CgArrowUpR } from 'react-icons/cg';
import { GenericButtonWithIcon } from '../GenericButtonWithIcon';
import * as Styled from './styles';

export const ButtonGoTop = () => {
  return (
    <Styled.Container href="#">
      <GenericButtonWithIcon
        ariaLabel="Go to top"
        title="Go to top"
        icon={<CgArrowUpR />}
      />
    </Styled.Container>
  );
};
