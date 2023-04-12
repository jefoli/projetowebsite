import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import * as Styled from './styles';
import P from 'prop-types';
import { loadPosts } from '../../utils/load-posts';
import { SliderButton } from '../Buttons/SliderButton';
import { Title } from '../Title';

export const ComponentCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const posts = await loadPosts();
      setSlides(posts);
    };
    fetchSlides();
  }, []);

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
      <Styled.DefaultContainer>
        <div>
          <Title>Carousel de destaque de Imagens</Title>
          <Styled.TextContent>
            Explore nossas fotos com um slider interativo
          </Styled.TextContent>
        </div>

        <Styled.Container>
          <SliderButton icon={<FaArrowAltCircleLeft />} onClick={prevSlide} />

          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.cover} alt={slide.title} />
                )}
              </div>
            );
          })}
          <SliderButton icon={<FaArrowAltCircleRight />} onClick={nextSlide} />
        </Styled.Container>
      </Styled.DefaultContainer>
    </Styled.Wrapper>
  );
};

ComponentCarousel.propTypes = {
  slides: P.arrayOf(
    P.shape({
      cover: P.string.isRequired,
      title: P.string.isRequired,
    }),
  ),
};
