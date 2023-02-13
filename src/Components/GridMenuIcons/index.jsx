import * as Styled from './styles';
import { BsFilePost, BsArrowRightShort, BsInfoSquare } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdMiscellaneousServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
export const GridMenuIcons = () => {
  return (
    <Styled.Container>
      <div className="section-wrapper">
        <div className="styleGrid">
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <BsInfoSquare className="style-icons" />
                <h3>Sobre nós</h3>
                <p>conheça um pouco sobre nossa trajetória.</p>
                <div className="styledBox">
                  <span>
                    <Link to="/sobre">
                      <p className="link-style">
                        Saiba mais <BsArrowRightShort className="style-icons" />
                      </p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <MdMiscellaneousServices className="style-icons" />
                <h3>Nossos serviços</h3>
                <p>Conheça na integra sobre todos nossos serviços.</p>
                <span>
                  <Link to="/sobre">
                    <p className="link-style">
                      Saiba mais <BsArrowRightShort className="style-icons" />
                    </p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <RiContactsLine className="style-icons" />
                <h3>Entre em contato</h3>
                <p>Fale conosco, pois queremos te ouvir.</p>
                <span>
                  <Link to="/sobre">
                    <p className="link-style">
                      Saiba mais <BsArrowRightShort className="style-icons" />
                    </p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <BsFilePost className="style-icons" />
                <h3>Nossos Posts</h3>
                <p>Leia sobre as principais novidades e lançamentos.</p>
                <span>
                  <Link to="/sobre">
                    <p className="link-style">
                      Saiba mais <BsArrowRightShort className="style-icons" />
                    </p>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};
