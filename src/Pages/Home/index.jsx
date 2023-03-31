import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import * as Styled from './styles';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitial } from '../../Components/TextGridInitial';
import { VideoPlayer } from '../../Components/VideoPlayer';

export const Home = () => {
  return (
    <>
      <Styled.Container>
        <VideoPlayer />
        <TextGridInitial />
      </Styled.Container>
      <InitialGrid />
      <GridMenuIcons />
      <ComponentCarousel />
      <ImageGrid />
    </>
  );
};
