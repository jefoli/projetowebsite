/* eslint-disable prettier/prettier */
import { GenericButtonWithIcon } from '../GenericButtonWithIcon';
import P from 'prop-types';
import * as Styled from './styles';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const ButtonOpenCloseMenu = ({ visible, onClick }) => {
  return (
    <Styled.Button visible={visible} onClick={onClick}
    >
      <GenericButtonWithIcon ariaLabel="Open/Close Menu" title="Go to top" />{visible ? (
          <AiOutlineMenuFold aria-label="Close menu" />
        ) : (
          <AiOutlineMenuUnfold aria-label="Open menu" />
        )}
    </Styled.Button>
  );
};

ButtonOpenCloseMenu.propTypes = {
  icon: P.element,
  visible: P.bool,
  onClick: P.func,
};
