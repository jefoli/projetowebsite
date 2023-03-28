import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import * as Styled from './styles';
import { SliderData } from '../../Components/Carousel/SlidersData';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitial } from '../../Components/TextGridInitial';

import Video from './video-test.mp4';

export const Home = () => {
  return (
    <>
      <Styled.Container>
        <Styled.VideoContent preload="auto" loop muted autoPlay>
          <source src={Video} type="video/mp4" />
        </Styled.VideoContent>
        <TextGridInitial />
      </Styled.Container>
      <InitialGrid />
      <GridMenuIcons />
      <ComponentCarousel slides={SliderData} />
      <ImageGrid />
    </>
  );
};
