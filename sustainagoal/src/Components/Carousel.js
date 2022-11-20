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
        <div class="py-3" />
        <div className="row">
          <div className="col">
          <CImage
            className="mx-auto d-block h-10"
            src={"https://img.icons8.com/plasticine/512/plastic.png"}
            alt="slide 1"
          />
          </div>
          <div className="col">
          <div className="col align-self-center">
          <p className="homeDesc">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
          </div>
        </div>
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