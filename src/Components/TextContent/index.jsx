/* eslint-disable no-unused-vars */
import { ImageGrid } from '../ImageGrid';
import { RotateImage } from '../RotateImg';
import { SectionContainer } from '../SectionContainer';
import { TextGrid } from '../TextGrid';
import * as Styled from './styles';
export const TextContent = () => {
  return (
    <Styled.Container>
      <h1>BEM VINDO AO FUTURO</h1>
      <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
      <SectionContainer>
        <RotateImage />
        <TextGrid />
        <Styled.GridContent>
          <ImageGrid />
          <ImageGrid />
          <TextGrid />
          <TextGrid />
          <ImageGrid />
          <TextGrid />
        </Styled.GridContent>
      </SectionContainer>
    </Styled.Container>
  );
};
