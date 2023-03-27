import * as Styled from './styles';
import { BsFilePost, BsArrowRightShort, BsInfoSquare } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdMiscellaneousServices } from 'react-icons/md';

import { Link } from 'react-router-dom';
export const GridMenuIcons = () => {
  const text = 'Saiba Mais';

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <h1>Explore o site com facilidade usando nossos links rápidos.</h1>
      </Styled.Wrapper>
      <Styled.BoxTextContent>
        <h3>
          Com apenas um clique, você pode acessar as informações mais
          importantes sobre a nossa empresa, incluindo nossa história, serviços
          oferecidos, opções de contato e as últimas novidades em nosso blog.
        </h3>
      </Styled.BoxTextContent>
      <div className="section-wrapper">
        <div className="styleGrid">
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <Styled.StyleIcons>
                  <BsInfoSquare className="style-icons" />
                </Styled.StyleIcons>
                <h3>Sobre nós</h3>
                <p>conheça um pouco sobre nossa trajetória.</p>
                <div className="styledBox">
                  <Link to="/sobre">
                    <Styled.LinkStyled>
                      {text}
                      <Styled.StyleIcons>
                        <BsArrowRightShort />
                      </Styled.StyleIcons>
                    </Styled.LinkStyled>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <Styled.StyleIcons>
                  <MdMiscellaneousServices />
                </Styled.StyleIcons>

                <h3>Nossos serviços</h3>
                <p>Conheça na integra sobre todos nossos serviços.</p>
                <Link to="/sobre">
                  <Styled.LinkStyled>
                    {text}
                    <Styled.StyleIcons>
                      <BsArrowRightShort />
                    </Styled.StyleIcons>
                  </Styled.LinkStyled>
                </Link>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <Styled.StyleIcons>
                  <RiContactsLine />
                </Styled.StyleIcons>
                <h3>Entre em contato</h3>
                <p>Fale conosco, pois queremos te ouvir.</p>
                <Link to="/sobre">
                  <Styled.LinkStyled>
                    {text}
                    <Styled.StyleIcons>
                      <BsArrowRightShort />
                    </Styled.StyleIcons>
                  </Styled.LinkStyled>
                </Link>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <Styled.StyleIcons>
                  <BsFilePost />
                </Styled.StyleIcons>
                <h3>Nossos Posts</h3>
                <p>Leia sobre as principais novidades e lançamentos.</p>
                <Link to="/sobre">
                  <Styled.LinkStyled>
                    {text}
                    <Styled.StyleIcons>
                      <BsArrowRightShort />
                    </Styled.StyleIcons>
                  </Styled.LinkStyled>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};
