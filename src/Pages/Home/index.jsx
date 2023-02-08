import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import { RotateImage } from '../../Components/RotateImg';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { TextInitialHome } from '../../Components/TextInitialHome';
import { TextGrid } from '../../Components/TextGrid';
import { SliderData } from '../../Components/Carousel/SlidersData';

export const Home = () => {
  return (
    <SectionContainer>
      <TextInitialHome />
      <TextGrid />
      <ComponentCarousel slides={SliderData} />
      <TextGrid />
      <RotateImage />
      <Styled.GridContent>
        <TextGrid />
        <TextGrid />
        <ImageGrid />
        <TextGrid />
      </Styled.GridContent>
    </SectionContainer>
  );
};
