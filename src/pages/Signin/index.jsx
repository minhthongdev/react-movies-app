import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import classes from "./style.module.css";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImg: "./image/bg2.jpg",
    };
  }

  render() {
    return (
      <div
        style={{
          background: `url(${this.state.backgroundImg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="sm">
          <div className={classes.bgLoginSite}>
            <img src="./image/logo.png" className={classes.logo} />
            <div>
              <p>
                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
              </p>
            </div>
            <Grid container>
              <Grid xs={12}>
                <img src="./image/btn-FB.png" className={classes.btnLogin} />
              </Grid>
              <Grid xs={12}>
                <img src="./image/btn-Zalo.png" className={classes.btnLogin} />
              </Grid>
              <Grid xs={12}>
                <img
                  src="./image/btn-Google.png"
                  className={classes.btnLogin}
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signin;
