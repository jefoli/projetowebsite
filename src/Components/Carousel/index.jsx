/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { SliderData } from './SlidersData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const ComponentCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <SectionContainer>
      <Styled.Container>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && <img src={slide.image} alt="text" className="image" />}
            </div>
          );
        })}
      </Styled.Container>
    </SectionContainer>
  );
};
