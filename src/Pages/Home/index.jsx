import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import { RotateImage } from '../../Components/RotateImg';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { TextInitialHome } from '../../Components/TextInitialHome';
import { TextGrid } from '../../Components/TextGrid';
import { SliderData } from '../../Components/Carousel/SlidersData';
import { InitialGrid } from '../../Components/Initialgrid';

export const Home = () => {
  return (
    <SectionContainer>
      <TextInitialHome />
      <ComponentCarousel slides={SliderData} />
      <TextGrid />
      <InitialGrid />

      <ImageGrid />

      <Styled.GridContent>
        <TextGrid />
        <RotateImage />
      </Styled.GridContent>
    </SectionContainer>
  );
};
