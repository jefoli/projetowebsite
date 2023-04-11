import { DefaultContainer } from '../../DefaultContainer';
import { SectionContainer } from '../../SectionContainer';
import * as Styled from './styles';
import P from 'prop-types';

export const PrivacyTermsContainer = ({ title, children }) => {
  return (
    <SectionContainer>
      <DefaultContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </DefaultContainer>
    </SectionContainer>
  );
};

PrivacyTermsContainer.propTypes = {
  title: P.string,
  children: P.any,
};
