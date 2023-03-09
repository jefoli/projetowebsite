import { TextGrid } from '../TextGrid';
import * as Styled from './styles';

export const TextGridContentFinal = () => {
  return (
    <Styled.Container>
      <TextGrid />
      <img src="http://source.unsplash.com/random/360x360?r=1" alt="random image from unsplash" className="img" />
    </Styled.Container>
  );
};
