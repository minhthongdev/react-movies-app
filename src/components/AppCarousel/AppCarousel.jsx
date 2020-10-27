

import React, { Component } from "react";

import mobile from "../../images/img/app/mobile.png";
import slide1 from "../../images/img/app/slide1.jpg";
import slide2 from "../../images/img/app/slide2.jpg";
import slide3 from "../../images/img/app/slide3.jpg";
import slide5 from "../../images/img/app/slide5.jpg";
import slide6 from "../../images/img/app/slide6.jpg";
import slide7 from "../../images/img/app/slide7.jpg";
import slide8 from "../../images/img/app/slide8.jpg";
import slide10 from "../../images/img/app/slide9.jpg";
import slide11 from "../../images/img/app/slide10.jpg";
import slide12 from "../../images/img/app/slide11.jpg";
import slide13 from "../../images/img/app/slide12.jpg";
import slide15 from "../../images/img/app/slide13.jpg";
import slide16 from "../../images/img/app/slide14.jpg";

import { Carousel } from "react-bootstrap";


export default class AppCarousel extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    return (
      <React.Fragment>
        <section className="ng-scope" name="test10">
          <div className="row" style={{ marginRight: 0 }}>
            <div className="col-xs-12" id="homeApp">
              <div className="mainMaxWidth">
                <div className="row">
                  <div className="col-md-6 left text-left">
                    <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                    <p className="textLeft">người yêu điện ảnh</p>
                    <br />
                    <p className="textSmallLeft">
                      {" "}
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                    <button
                      className="buttonLeft"
                      onclick="window.open('https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8','_blank');"
                    >
                      App miễn phí - Tải về ngay!
                    </button>
                    <p className="textAppUnder">
                      CINEMAX có hai phiên bản
                      <a
                        className="tagA"
                        style={{ width: 25 }}
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                      >
                        iOS
                      </a>
                      &amp;
                      <a
                        className="tagA"
                        style={{ width: 56 }}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                      >
                        Android
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 right-App">
                    <img
                      src={mobile}
                      alt=""
                      className="img-responsive phone-img"
                    />
                    <div className="sliderScreen">
                    <Carousel> 
                    <Carousel.Item>
                        <div>
                          <img  src={slide1} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide2} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide3} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide5} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide6} alt=""/>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide7} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide8} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide10} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide11} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide12} alt=""/>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide13} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide15} alt="" />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div>
                          <img src={slide16} alt="" />
                        </div>
                        </Carousel.Item>
                      
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>

        

    );
  }
}
