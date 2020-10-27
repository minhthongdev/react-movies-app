/*
Ngày bắt đầu làm: T2 21/9/2020
Người khởi tạo: Quách Diệu Khánh
*/
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "../../components/Carousel"
import Footer from "../../components/Footer/footer";
import AppCarousel from "../../components/AppCarousel/AppCarousel";
import SimpleTabs from '../../components/News'
import Header from "../../components/Header";
// import PhoneSlider from "../../components/PhoneSlider";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CarouselComponent />
        {/* <PhoneSlider /> */}
        <SimpleTabs/>
        <AppCarousel/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
