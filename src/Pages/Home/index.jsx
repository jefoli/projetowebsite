import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitial } from '../../Components/TextGridInitial';

export const Home = () => {
  return (
    <>
      <TextGridInitial />
      <InitialGrid />
      <GridMenuIcons />
      <ComponentCarousel />
      <ImageGrid />
    </>
  );
};
