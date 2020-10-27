import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  withStyles,
  withTheme,
} from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="static"
        className={this.props.classes.backgroundColorDefault}
      >
        <Toolbar>
          <Link to="/">
            <Button>
              <img
                src="./image/web-logo.png"
                className={this.props.classes.img}
              />
            </Button>
          </Link>

          <Container maxWidth="sm">
            <Button className={this.props.classes.toolBarText}>
              Lịch chiếu
            </Button>
            <Button className={this.props.classes.toolBarText}>Cụm rạp</Button>
            <Button className={this.props.classes.toolBarText}>Tin tức</Button>
            <Button className={this.props.classes.toolBarText}>Ứng dụng</Button>
          </Container>
          <Link to="/signin">
            <img src="./image/avatar.png" className={this.props.classes.img} />
            <Button className={this.props.classes.loginButton}>
              Đăng nhập
            </Button>
          </Link>

          {/* DROPDOWN  */}
          <Button className={this.props.classes.loginButton}>Chọn vị trí</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
