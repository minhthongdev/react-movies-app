import React, { Component } from "react";



import VIETTINBANK from "../../images/img/contact/VIETTINBANK.png";
import cinestar from "../../images/img/contact/cinestar.png";
import cnx from "../../images/img/contact/cnx.jpg";
import dcine from "../../images/img/contact/dcine.png";
import dongdacinema from "../../images/img/contact/dongdacinema.png";
import galaxycine from "../../images/img/contact/galaxycine.png";
import megags from "../../images/img/contact/megags.png";
import payoo from "../../images/img/contact/payoo.jpg";
import starlight from "../../images/img/contact/STARLIGHT.png";
import TOUCH from "../../images/img/contact/TOUCH.png";
import VCB from "../../images/img/contact/VCB.png";
import zalopay_icon from "../../images/img/contact/zalopay_icon.png";

// import logo2 from "../../../public/image/web-logo.jpg";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="footer_info col-9 container">
            <div className="main__footer row container">
              <div className="main__footer_column col-2" id="about_tix">
                <h3>TIX</h3>
                <div className="main__footer_column_textlink">
                  <p>
                    <a href="#">FAQ</a>
                  </p>
                  <p>
                    <a href="#">Brand Guidelines</a>
                  </p>
                </div>
              </div>
              <div className="main__footer_column col-xl-2 col" id="policy_tix">
                <h3 className="chinhsach-hidden">CHÍNH SÁCH</h3>
                <div className="main__footer_column_textlink">
                  <p>
                    <a href="#">Thỏa thuận sử dụng</a>
                  </p>
                  <p>
                    <a href="#">Chính sách bảo mật</a>
                  </p>
                </div>
              </div>
              <div className="main__footer_column col-4" id="doitac">
                <h3>ĐỐI TÁC</h3>
                <div className="main__footer_column_supvisor">
                  <div className="supvisor_01">
                    <a href="#" className="cicrle-logo">
                      <img src={VIETTINBANK} alt />
                    </a>
                    <a href="#">
                      <img src={cinestar} alt />
                    </a>
                    <a href="#">
                      <img src={cnx} alt />
                    </a>
                    <a href="#">
                      <img src={dcine} alt />
                    </a>
                    <a href="#">
                      <img src={dongdacinema} alt />
                    </a>
                  </div>
                  <div className="supvisor_01">
                    <a href="#" className="cicrle-logo">
                      <img src={galaxycine} alt />
                    </a>
                    <a href="#">
                      <img src={megags} alt />
                    </a>
                    <a href="#">
                      <img src={payoo} alt />
                    </a>
                    <a href="#">
                      <img src={starlight} alt />
                    </a>
                    <a href="#">
                      <img src={TOUCH} alt />
                    </a>
                  </div>
                  <div className="supvisor_01">
                    <a href="#">
                      <img src={VCB} alt />
                    </a>
                    <a href="#">
                      <img src={starlight} alt />
                    </a>
                    <a href="#">
                      <img src={zalopay_icon} alt />
                    </a>
                    <a href="#">
                      <img src={zalopay_icon} alt />
                    </a>
                    <a href="#">
                      <img src={zalopay_icon} alt />
                    </a>
                  </div>
                  <div className="supvisor_01">
                    <a href="#">
                      <img src={zalopay_icon} alt />
                    </a>
                    <a href="#">
                      <img src={zalopay_icon} alt />
                    </a>
                    <a href="#">
                      <img src={TOUCH}  alt />
                    </a>
                    <a href="#">
                      <img src={TOUCH}  alt />
                    </a>
                    <a href="#">
                      <img src={TOUCH}  alt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main__footer_column col-2" id="app_tix">
                <h3>MOBILE APP</h3>
                <div className="main__footer_column_app">
                  <a href="#">
                    <img src={TOUCH}  alt />
                  </a>
                  <a href="#">
                    <img src={TOUCH}  alt />
                  </a>
                </div>
              </div>
              <div className="main__footer_column col-xl-2 col" id="social_tix">
                <h3>SOCIAL</h3>
                <div className="main__footer_column_social">
                  <a href="#">
                    <img src={VCB} alt />
                  </a>
                  <a href="#">
                    <img src={starlight} alt />
                  </a>
                </div>
              </div>
            </div>
            <hr className="col-xl-10 col-12" />
            <div className="sub__footer row container">
              <div className="sub__footer_logo col-2">
                <img src={cinestar} alt />
              </div>
              <div className="sub__footer_text col-md-8 col-12">
                <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                <p>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p>
                  Email: <a href="support@tix.vn">support@tix.vn</a>
                </p>
              </div>
              <div className="sub__footer_certificate col-2">
                <a href="#">
                  <img src={zalopay_icon} alt />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
