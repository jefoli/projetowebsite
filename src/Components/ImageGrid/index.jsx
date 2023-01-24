import * as Styled from './styles';
import { FaReact } from 'react-icons/fa';
import { useState } from 'react';

export const ImageGrid = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeImgColor = () => {
    if (window.scrollX) {
      setColorchange(true);
    } else {
      colorChange(false);
    }
  };

  window.addEventListener('scroll', changeImgColor);

  return (
    <Styled.Container>
      <FaReact size={300} className={colorChange ? 'colorChange' : 'navbar'} />
    </Styled.Container>
  );
};
