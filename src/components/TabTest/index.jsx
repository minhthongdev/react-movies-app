import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import  classes  from "./style.module.css";
class CarouselComponentAA extends Component {
  render() {
    return (
      <div>
        <Carousel className={classes.adjust}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className={classes.colorChange}>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponentAA;
