import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const ComponentCarousel = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <img className="d-block w-100" src="http://source.unsplash.com/random/900x360?=r1" alt="Image One" />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src="http://source.unsplash.com/random/900x360?r2" alt="Image Two" />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src="http://source.unsplash.com/random/900x360?=r3" alt="Image Two" />
            <Carousel.Caption>
              <h3>Label for Three slide</h3>
              <p>Sample Text for Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Styled.Container>
    </SectionContainer>
  );
};
