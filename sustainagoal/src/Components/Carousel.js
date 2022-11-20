import React from "react";
import { useState, useRef } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Container } from "react-bootstrap";
import "./Carousel.scss";
import User from "../src_js/User";
import Payment from '../Components/Payment'

const Carousel = () => {
  const [clicked, setClicked] = useState(false);
  const waterRef = useRef(null);

  function setWaterGoal() {
    User.addWaterGoal(waterRef.waterGoal);
    console.log(waterRef.current.value);
  }

  function addProgress() {
    User.addProgress("water", 2);
    console.log(User.waterGoal.progress);
    // let x =  User.checkGoals();
    // // console.log(x);
    // User.waterGoal.day = 19;
    // console.log(User.waterGoal.day);
    // console.log(User.waterGoal.done);
  }

  return (
    <Container>
      <CCarousel
        transition="crossfade"
        interval={false}
        controls
        indicators
        dark
      >
        <CCarouselItem>
          <div class="py-3" />
          {console.log(User.waterGoal)}
          <Container>
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
                    Lorem ipsum dolor sit amet, cconsectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col" />
                <div class="col">
                  <form class="form-inline bottom">
                    <div class="form-group form-inline mx-sm-3 mb-2">
                      <input
                        ref={waterRef}
                        type="number"
                        class="form-control inputBox"
                        id="inputPassword2"
                        placeholder="Daily Goal"
                      />
                      <button
                        type="submit"
                        onClick={setWaterGoal}
                        class="btn submitBtn form-inline"
                      >
                        {" "}
                        Set Goal{" "}
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col" />
              </div>
            </div>
          </Container>
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
    </Container>
  );
};

export default Carousel;
