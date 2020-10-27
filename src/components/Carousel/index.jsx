import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

// import {Carousel} from 'react-bootstrap';
class CarouselComponent extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_2.png"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/phim_2.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
