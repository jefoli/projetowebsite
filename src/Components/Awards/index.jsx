import * as Styled from './styles';
import { dataAwards } from './dataAwards';

export const Awards = () => {
  return (
    <>
      {dataAwards.map((data, index) => {
        return (
          <Styled.Wrapper key={index}>
            <Styled.ImgStyle key={index} src={data.award} />
          </Styled.Wrapper>
        );
      })}
    </>
  );
};
