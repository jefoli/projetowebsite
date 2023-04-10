import * as Styled from './styles';
import P from 'prop-types';

export const DefaultContainer = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

DefaultContainer.propTypes = {
  children: P.node.isRequired,
};
