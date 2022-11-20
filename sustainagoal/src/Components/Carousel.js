import React from "react";
import { useState } from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Container } from "react-bootstrap";
import "./Carousel.scss";
import User from "../src_js/User";

const Carousel = () => {
  const [clicked, setClicked] = useState(false);
  function onClick() {
    // console.log(User.waterGoal.goalAmount);
    // User.addProgress("water", 2);
    // console.log(User.waterGoal.goalProgress);
    setClicked(!clicked);
  }

  function addWaterGoal() {
    User.addWaterGoal(5);
  }

  function addProgress() {
    User.addProgress("water", 2);
    console.log(User.waterGoal.goalProgress);
  }

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
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                Lorem ipsum dolor sit amet, cconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
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
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
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
              <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
      {/* {clicked ? <a href="#" class="btn submitBtn active" onClick={onClick}role="button" aria-pressed="true">Add Goal</a> :       <a href="#" class="btn submitBtn disabled" onClick={onClick}role="button" aria-pressed="true">Goal Added  </a>} */}
      <a href="#" class="btn submitBtn" onClick={addWaterGoal}role="button" aria-pressed="true">Add Goal</a>
      <a href="#" class="btn submitBtn" onClick={addProgress}role="button" aria-pressed="true">Add Progress</a>
    </Container>
  );
};

export default Carousel;
