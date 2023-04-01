import * as Styled from './styles';
import P from 'prop-types';

export const GenericButtonWithIcon = ({ title, ariaLabel, icon }) => {
  return (
    <Styled.Container title={title} aria-label={ariaLabel}>
      {icon}
    </Styled.Container>
  );
};

GenericButtonWithIcon.propTypes = {
  href: P.string,
  title: P.string,
  ariaLabel: P.string,
  icon: P.element,
};
