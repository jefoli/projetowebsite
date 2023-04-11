import { useEffect, useState } from 'react';
import * as Styled from './styles';
import P from 'prop-types';

export const TypewriterEffect = ({ title, typingSpeed }) => {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex >= title.length) {
      return;
    }

    const timer = setTimeout(() => {
      setText(text + title[charIndex]);
      setCharIndex(charIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, charIndex, title, typingSpeed]);

  return <Styled.Container>{text}</Styled.Container>;
};

TypewriterEffect.propTypes = {
  title: P.string.isRequired,
  typingSpeed: P.number,
};
