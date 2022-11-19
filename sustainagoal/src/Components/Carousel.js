import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { IoWaterOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";

const Carousel = () => {
  return (
    <Container>
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <IoWaterOutline className="headerLink"/>
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/images/vue.jpg"
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="/images/angular.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </Container>
  );
};

export default Carousel;
