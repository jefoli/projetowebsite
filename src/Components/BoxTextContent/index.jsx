import * as Styled from './styles';
import P from 'prop-types';

export const BoxTextContent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

BoxTextContent.propTypes = {
  children: P.string,
};
