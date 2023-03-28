/* eslint-disable react/prop-types */
import * as Styled from './styles';
import { BsArrowRightShort, BsInfoSquare } from 'react-icons/bs';
import P from 'prop-types';
import { Link } from 'react-router-dom';

export const Box = ({ menuText, ParagraphText }) => {
  const text = 'Saiba mais';

  return (
    <Styled.Container>
      <div className="StyledGridItem">
        <Styled.BoxStyled>
          <div className="styledBox">
            <Styled.StyleIcons>
              <BsInfoSquare className="style-icons" />
            </Styled.StyleIcons>
            <h3>{menuText}</h3>
            <p>{ParagraphText}</p>
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
        </Styled.BoxStyled>
      </div>
    </Styled.Container>
  );
};

Box.propTypes = {
  menuText: P.string.isRequired,
  ParagraphText: P.string.isRequired,
};
