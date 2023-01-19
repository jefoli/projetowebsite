/* eslint-disable no-unused-vars */
import { ImageGrid } from '../ImageGrid';
import { SectionContainer } from '../SectionContainer';
import { TextGrid } from '../TextGrid';
import * as Styled from './styles';
//import P from 'prop-types';
export const TextContent = () => {
  return (
    <Styled.Container>
      <h1>BEM VINDO AO FUTURO</h1>
      <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
      <SectionContainer>
        <Styled.Image>
          <ImageGrid />
        </Styled.Image>
        <TextGrid />
      </SectionContainer>
    </Styled.Container>
  );
};
