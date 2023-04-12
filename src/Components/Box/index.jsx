import * as Styled from './styles';
import { BsArrowRightShort } from 'react-icons/bs';
import P from 'prop-types';
import { Link } from 'react-router-dom';

export const Box = ({ menuText, ParagraphText, icons, menuLink }) => {
  return (
    <Styled.Container>
      <Styled.BoxStyled>
        <Styled.StyleIcons>{icons}</Styled.StyleIcons>
        <Styled.TitleBox>{menuText}</Styled.TitleBox>
        {ParagraphText}
        <Link to={menuLink}>
          <Styled.LinkStyled>
            Saiba mais
            <Styled.StyleIcons>
              <BsArrowRightShort />
            </Styled.StyleIcons>
          </Styled.LinkStyled>
        </Link>
      </Styled.BoxStyled>
    </Styled.Container>
  );
};

Box.propTypes = {
  menuText: P.string.isRequired,
  ParagraphText: P.string.isRequired,
  icons: P.element.isRequired,
  menuLink: P.string.isRequired,
};
