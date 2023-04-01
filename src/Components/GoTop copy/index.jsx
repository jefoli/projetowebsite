import { CgArrowUpR } from 'react-icons/cg';
import { IconButton } from '../Buttons/GenericButtonWithIcon';

export const GoTop = () => {
  return (
    <IconButton
      href="#"
      ariaLabel="Go to top"
      title="Go to top"
      icon={<CgArrowUpR />}
    />
  );
};
