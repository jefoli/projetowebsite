import * as Styled from './styles';

export const ImageGrid = () => {
  return (
    <Styled.Container>
      <img src="http://source.unsplash.com/random/360x360?r=1" alt="random image from unsplash" />
      <img src="http://source.unsplash.com/random/360x360?r=2" alt="random image from unsplash" />
      <img src="http://source.unsplash.com/random/360x360?r=3" alt="random image from unsplash" />
      <img src="http://source.unsplash.com/random/360x360?r=4" alt="random image from unsplash" />
    </Styled.Container>
  );
};
