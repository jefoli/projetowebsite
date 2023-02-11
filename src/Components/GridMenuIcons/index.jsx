import * as Styled from './styles';
import { BsFilePost } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';
import { MdOutlineHistoryEdu, MdMiscellaneousServices } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

export const GridMenuIcons = () => {
  return (
    <Styled.Container>
      <div className="section-wrapper">
        <div className="styleGrid">
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <FcAbout />
                <h3>Sobre nós</h3>
                <p>Escolha o Visa com as vantagens que mais combinam com você.</p>
                <span>Saiba mais</span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <MdMiscellaneousServices />
                <h3>Nossos serviços</h3>
                <p>Escolha o Visa com as vantagens que mais combinam com você.</p>
                <span>Saiba mais</span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <MdOutlineHistoryEdu />
                <h3>Nossa história</h3>
                <p>Escolha o Visa com as vantagens que mais combinam com você.</p>
                <span>Saiba mais</span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <GrContactInfo />
                <h3>Entre em contato</h3>
                <p>Escolha o Visa com as vantagens que mais combinam com você.</p>
                <span>Saiba mais</span>
              </div>
            </div>
          </div>
          <div className="StyledGridItem">
            <div className="styledBox">
              <div className="styledBox">
                <BsFilePost />
                <h3>Nossos Posts</h3>
                <p>Escolha o Visa com as vantagens que mais combinam com você.</p>
                <span>Saiba mais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};
