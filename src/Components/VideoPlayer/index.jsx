import * as Styled from './styles';
import video from './video-test.mp4';

export const VideoPlayer = () => {
  return (
    <Styled.VideoContent preload="auto" loop muted autoPlay>
      <source src={video} type="video/mp4" />
    </Styled.VideoContent>
  );
};
