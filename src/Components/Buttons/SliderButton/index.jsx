import { GenericButtonWithIcon } from '../GenericButtonWithIcon';
import * as Styled from './styles';
import P from 'prop-types';

export const SliderButton = ({ icon, onClick }) => {
  return (
    <Styled.Container onClick={onClick}>
      <GenericButtonWithIcon icon={icon} />
    </Styled.Container>
  );
};

SliderButton.propTypes = {
  onClick: P.func,
  icon: P.element,
};
