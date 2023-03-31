import * as Styled from './styles';
import P from 'prop-types';

export const IconButton = ({ title, ariaLabel, icon }) => {
  return (
    <Styled.Container title={title} aria-label={ariaLabel}>
      {icon}
    </Styled.Container>
  );
};

IconButton.propTypes = {
  href: P.string,
  title: P.string,
  ariaLabel: P.string,
  icon: P.element,
};
