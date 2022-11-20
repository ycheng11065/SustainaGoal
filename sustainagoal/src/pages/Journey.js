import React from "react";
import Carousell from "../Components/Carousel";
import { Container } from "react-bootstrap";
import "./Journey.css";

const Journey = () => {
  return (
    <Container>
      <div class="py-3" />
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Water Intake</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Water Cups Drank Today"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Another label</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
              />
            </div>
            <div class="py-3" />
            <button class="btn submitBtn align-items-end" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Journey;
