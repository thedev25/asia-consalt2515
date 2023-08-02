import React from "react";
import btnw from "../../assets/arrow-btn-w.svg";
import asiamap from "../../assets/karta-asia-consult.jpg";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Footer() {
  return (
    <div>
      <div className="foot">
        <section className="contact container-fluid p-0">
          <div className="maps">
            <div className="map col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={10000}
                src={asiamap}
                alt="maps img"
              />
            </div>

            <div className="content col-xl-4 col-lg-5 col-md-8 col-sm-12 col-12">
              <span>18</span>
              <p className="title">Ўзбекистон бўйлаб филиаллар</p>
              <p>
                Саволларингизга жавоб олиш учун сизга қулай бўлган
                филиалларимиздан бирига мурожаат қилишингиз мумкин
              </p>

              <NavLink to="/contacts" className="btn-default">
                <img src={btnw} alt="arrow" />
                <p>барча филиаллар</p>
              </NavLink>
            </div>
          </div>

          <div className="contacts col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="content">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 social">
                <h3>Ижтимоий тармоқлар</h3>

                <div className="socials">
                  <a
                    href="https://t.me/joinchat/AAAAAE74dwZTQUya8l4WhA"
                    target="_blank"
                  >
                    <i className="fa-brands fa-telegram"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/asiaconsult.uz/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/Asia-consalt-centre-100927561665008/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>

                  <a href="mailto:asia_consalt_centr@mail.ru" target="_blank">
                    <i className="fa-brands fa-google"></i>
                  </a>

                  <a href="https://wa.me/998909696624" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
