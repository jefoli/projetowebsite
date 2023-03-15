import * as Styled from './styles';
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';
export const MenuIcons = () => {
  return (
    <Styled.Container>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebookSquare className="menu-icon" />
      </a>

      <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
        <FaWhatsappSquare className="menu-icon" />
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <FaInstagramSquare className="menu-icon" />
      </a>

      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <FaLinkedin className="menu-icon" />
      </a>
    </Styled.Container>
  );
};
