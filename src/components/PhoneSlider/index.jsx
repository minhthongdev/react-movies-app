import { Container } from "@material-ui/core";
import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import classes from "./style.module.css";

class PhoneSlider extends Component {
  render() {
    return (
      <div className={classes.aa}>
        
        <Carousel controls={false} indicators={false} className={classes.slide}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phone_slide_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phone_slide_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phone_slide_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phone_slide_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <div>
          <img src="./image/mobile.png" className={classes.phone} />
        </div>
      </div>
    );
  }
}

export default PhoneSlider;
