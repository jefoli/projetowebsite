import * as Styled from './styles';

export const ImageGrid = () => {
  return (
    <Styled.Wrapper>
      <Styled.BoxContent>
        <Styled.Title>Tecnologias utilizadas</Styled.Title>
        <Styled.Container>
          <Styled.StyleCircle>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
              alt="html image icon"
            />
          </Styled.StyleCircle>
          <Styled.StyleCircle>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
              alt="css image icon"
            />
          </Styled.StyleCircle>
          <Styled.StyleCircle>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              alt="javascript image icon"
            />
          </Styled.StyleCircle>
          <Styled.StyleCircle>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="react image icon"
            />
          </Styled.StyleCircle>
          <Styled.StyleCircle>
            <img
              src="https://styled-components.com/logo.png"
              alt="styled-components image icon"
            />
          </Styled.StyleCircle>
        </Styled.Container>
      </Styled.BoxContent>
    </Styled.Wrapper>
  );
};
