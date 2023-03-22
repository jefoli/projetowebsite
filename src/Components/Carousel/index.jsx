import { useState } from 'react';
import { SliderData } from './SlidersData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import * as Styled from './styles';
import P from 'prop-types';

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
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.ArrowCarouselLeft>
          <FaArrowAltCircleLeft onClick={prevSlide} />
        </Styled.ArrowCarouselLeft>

        <Styled.ArrowCarouselRight>
          <FaArrowAltCircleRight onClick={nextSlide} />
        </Styled.ArrowCarouselRight>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="text" className="image" />
              )}
            </div>
          );
        })}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

ComponentCarousel.propTypes = {
  slides: P.array.isRequired,
};
