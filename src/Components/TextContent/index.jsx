/* eslint-disable no-unused-vars */
import { FaCloudversify } from 'react-icons/fa';
import { ImageGrid } from '../ImageGrid';
import { RotateImage } from '../RotateImg';
import { SectionContainer } from '../SectionContainer';
import { TextGrid } from '../TextGrid';
import * as Styled from './styles';
export const TextContent = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>BEM VINDO AO FUTURO</h1>
        <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
        <RotateImage />
        <TextGrid />
        <Styled.GridContent>
          <FaCloudversify size={300} />
          <FaCloudversify size={300} />
          <TextGrid />
          <TextGrid />
          <ImageGrid />
          <TextGrid />
        </Styled.GridContent>
      </Styled.Container>
    </SectionContainer>
  );
};
