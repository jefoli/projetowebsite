import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { TextGrid } from '../../Components/TextGrid';
import { SliderData } from '../../Components/Carousel/SlidersData';
import { InitialGrid } from '../../Components/Initialgrid';
import { ContainerTextGrid } from '../../Components/ContainerTextGrid';
import { ContainerTextGrid2 } from '../../Components/ContainerTextGrid2';

export const Home = () => {
  return (
    <SectionContainer>
      <ContainerTextGrid />
      <ContainerTextGrid2 />
      <ComponentCarousel slides={SliderData} />
      <TextGrid />
      <InitialGrid />
      <ImageGrid />
      <Styled.GridContent>
        <TextGrid />
        <img src="http://source.unsplash.com/random/360x360?r=1" alt="random image from unsplash" />
      </Styled.GridContent>
    </SectionContainer>
  );
};
