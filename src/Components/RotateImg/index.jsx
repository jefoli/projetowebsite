/* eslint-disable no-undef */
import * as Styled from './styles';
import { GiEmptyHourglass } from 'react-icons/gi';
import { useState } from 'react';

export const RotateImage = () => {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <Styled.Container>
      <GiEmptyHourglass className={`img App-logo ${reverseClass}`} onClick={handleClick} />
    </Styled.Container>
  );
};
