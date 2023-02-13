import { ComponentCarousel } from '../../Components/Carousel';
import { ImageGrid } from '../../Components/ImageGrid';
import * as Styled from './styles';
import { TextGrid } from '../../Components/TextGrid';
import { SliderData } from '../../Components/Carousel/SlidersData';
import { InitialGrid } from '../../Components/Initialgrid';
import { GridMenuIcons } from '../../Components/GridMenuIcons';
import { TextGridInitialTwo } from '../../Components/TextGridInitialTwo';
import { TextGridInitial } from '../../Components/TextGridInitial';
import { SectionContainer } from '../../Components/SectionContainer';

export const Home = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextGridInitial />
        <TextGridInitialTwo />
        <ComponentCarousel slides={SliderData} />
        <InitialGrid />
        <GridMenuIcons />
        <ImageGrid />
        <Styled.GridContent>
          <TextGrid />
          <img src="http://source.unsplash.com/random/360x360?r=1" alt="random image from unsplash" className="img" />
        </Styled.GridContent>
      </SectionContainer>
    </Styled.Container>
  );
};
