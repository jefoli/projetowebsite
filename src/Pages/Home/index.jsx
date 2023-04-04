import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitial } from '../../Components/TextGridInitial';
import { VideoPlayer } from '../../Components/VideoPlayer';
import * as Styled from './styles';

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
