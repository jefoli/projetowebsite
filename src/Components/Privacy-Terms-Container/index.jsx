import { DefaultContainer } from '../DefaultContainer';
import * as Styled from './styles';
import P from 'prop-types';

export const PrivacyTermsContainer = ({ title, children }) => {
  return (
    <DefaultContainer>
      <Styled.Wrapper>
        <h1>{title}</h1>
        <Styled.Container>{children}</Styled.Container>
      </Styled.Wrapper>
    </DefaultContainer>
  );
};

PrivacyTermsContainer.propTypes = {
  title: P.string,
  children: P.any,
};
