import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Charityinfo from "../Components/Charityinfo";
import Flickity from "react-flickity-component";
import { Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Container className="home">
      <div className="py-3" />
      <div className="row">
        <div className="col">
          <img
            className="rounded mx-auto d-block"
            src="https://brocku.ca/brock-news/wp-content/uploads/2022/09/GettyImages-1181366400-1600x1067.jpg?x70330"
          />
        </div>
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
      <div className="py-3" />
      <div className="row partTwo">
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
        <div className="col">
          <img
            className="rounded mx-auto d-block"
            src="https://brocku.ca/brock-news/wp-content/uploads/2022/09/GettyImages-1181366400-1600x1067.jpg?x70330"
          />
        </div>
      </div>
      <div className="py-3" />
      <div className="row">
        <Charityinfo />
      </div>
    </Container>
  );
};
