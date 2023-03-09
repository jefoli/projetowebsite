import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import * as Styled from './styles';
import { SliderData } from '../../Components/Carousel/SlidersData';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitialTwo } from '../../Components/TextGridInitialTwo';
import { TextGridInitial } from '../../Components/TextGridInitial';
import { SectionContainer } from '../../Components/SectionContainer';
import { TextGridContentFinal } from '../../Components/TextGridContentFinal';

export const Home = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <TextGridInitial />
        <TextGridInitialTwo />
        <ComponentCarousel slides={SliderData} />
        <InitialGrid />
        <GridMenuIcons />
        <ImageGrid />
        <TextGridContentFinal />
      </Styled.Container>
    </SectionContainer>
  );
};
