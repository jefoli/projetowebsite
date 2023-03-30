import * as Styled from './styles';

import { DataIcons } from './DataIcons';

export const ImageGrid = () => {
  return (
    <Styled.Wrapper>
      <Styled.BoxContent>
        <Styled.Title>Tecnologias utilizadas</Styled.Title>
        <Styled.Container>
          {DataIcons.map((icon, index) => (
            <Styled.StyleCircle key={index} src={icon.icons} alt={icon.alt} />
          ))}
        </Styled.Container>
      </Styled.BoxContent>
    </Styled.Wrapper>
  );
};
