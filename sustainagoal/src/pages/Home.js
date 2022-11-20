import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Charityinfo from "../Components/Charityinfo";
import { Container } from "react-bootstrap";


export const Home = () => {
  return (
    <Container className="home">
      <div className="py-3" />
      <div className="row">
        <div className="col">
          <img
            className="rounded mx-auto d-block"
            src="https://c4.wallpaperflare.com/wallpaper/603/977/81/forest-pretty-picture-background-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="col align-self-center">
          <p className="homeDesc">
            Sustainagoal is an online habit building platform that helps you stay 
            healthy and sustainable through an innovative incentive model. Set monthly 
            goals for various metrics such as a water consumption goal or a sleep goal. 
            At the end of each month, if your goals are incomplete, a subscription 
            payment will be donated to a charity of your choice; otherwise, the app
            remains free to use! What are you waiting for? Start building your habits today.
          </p>
        </div>
      </div>
      <div className="py-3" />
      <div className="row partTwo">
        <div className="col align-self-center">
          <p className="homeDesc">
            Did you know that 77% of people only keep their new habits for a week and only
            19% of people keep their habits for over two years? Self-motivation and consistency 
            are extremely difficult. That's why Sustainagoal is here to help! Through our platform 
            you can develop habits month by month that will last a lifetime. Remember, your subscription 
            is renewed every month you complete your goals. Even if you don't, your fee is sent straight
            to charity to help support others in need for a win-win scenario!
          </p>
        </div>
        <div className="col">
          <img
            className="rounded mx-auto d-block"
            src="https://brocku.ca/brock-news/wp-content/uploads/2022/09/GettyImages-1181366400-1600x1067.jpg?x70330"
            alt=""
          />
        </div>
      </div>
      <div className="py-3" />
      <div className="row">
        <Charityinfo />
      </div>
      <div className="py-3" />
    </Container>
  );
};
