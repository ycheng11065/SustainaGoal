import React from "react";
import "./Charityinfo.css";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { IoWaterOutline } from "react-icons/io5";
import { Container } from "react-bootstrap";

const Charityinfo = () => {
  return (
    <Container>
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <div class="row">
            <div class="col">
              <CImage
                className="charityLogo rounded mx-auto d-block"
                src="https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"
                alt=""
              />
            </div>
            <div class="col">
                <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                UNICEF helps hundreds of millions of out-of-school children continue their education — through community-based schools, both in-person and remote learning support and other programs — reaching more children than ever.
                <br></br>
                <a href="https://www.unicefusa.org/">Click here to learn more</a>
                </p>
                
                </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div class="row">
            <div class="col">
              <CImage
                className="charityLogo rounded mx-auto d-block"
                src="https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"
                alt=""
              />
            </div>
            <div class="col">
                <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div class="row">
            <div class="col">
              <CImage
                className="charityLogo rounded mx-auto d-block"
                src="https://www.un.org/youthenvoy/wp-content/uploads/2014/09/unicef_twitter1.png"
                alt=""
              />
            </div>
            <div class="col">
                <div className="descriptionContainer">
                <h3 className="charityTitle">UNICEF USA</h3>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </Container>
  );
};

export default Charityinfo;
