import React from "react";
import rasm1 from "../../assets/forabitImg1.jpg";
import rasm2 from "../../assets/forabitImg2.jpg";
import rasm3 from "../../assets/forabitImg3.jpg";
import arrow from "../../assets/arrow-btn-w.svg";
import "./Forabits.css";
import MainForm from "../../components/MainForm/MainForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function Forabits() {
  return (
    <div>
      <main>
        <section className="support choosing-support container-fluid p-0">
          <div className="d-flex">
            <div className="img col-xl-6 col-lg-6 col-md-5 col-sm-5 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={5000}
                src={rasm1}
                alt="forabits"
              />
            </div>

            <div className="desc col-xl-6 col-lg-6 col-md-7 col-sm-7 col-12">
              <span className="count">01</span>

              <h2>Университет танлашда ёрдам</h2>

              <ul>
                <li>
                  Ҳар бир талаба учун ўқув юртини танлаш, жорий таълим
                  тизимлари, кейинги иш билан таъминлаш истиқболлари, аниқ
                  таълим муассасасини танлаш, ўқув дастури ва йўналиши бўйича
                  individual маслаҳат
                </li>

                <li>
                  Талабанинг талаблари ва молиявий имкониятларига жавоб
                  берадиган университетни танлаш
                </li>

                <li>
                  Кириш имтиҳонлари ва керакли ҳужжатлар ҳақида маълумот бериш
                </li>
              </ul>

              <Link to="/form" class="btn-default">
                <LazyLoadImage
                  effect="blur"
                  delayTime={5000}
                  src={arrow}
                  alt="arrow"
                />

                <p>Консультация</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="support strategy-support container-fluid p-0">
          <div className="d-flex">
            <div className="desc col-xl-6 col-lg-6">
              <span className="counts">02</span>

              <h2>Қабул стратегияси</h2>

              <ul>
                <li>
                  Талаба танлаган университетга қабул қилиш стратегиясини ишлаб
                  чиқиш
                </li>

                <li>
                  Мотивацион хат ва ариза шаклини ёзиш ва тақдим етиш учун
                  ҳужжатларни тўплашда ёрдам бериш
                </li>
              </ul>

              <Link to="/form" className="btn-default">
                <LazyLoadImage
                  effect="blur"
                  delayTime={5000}
                  src={arrow}
                  alt="arrow"
                />

                <p>Консультация</p>
              </Link>
            </div>

            <div className="img col-xl-6 col-lg-6">
              <img src={rasm2} alt="forabits" />
            </div>
          </div>
        </section>

        <section className="support applying-support container-fluid p-0">
          <div className="d-flex">
            <div className="img col-xl-6 col-lg-6">
              <LazyLoadImage
                effect="blur"
                delayTime={5000}
                src={rasm3}
                alt="forabits"
              />
            </div>

            <div className="desc col-xl-6 col-lg-6">
              <span className="count">03</span>

              <h2>Кириш жараёнида ёрдам</h2>

              <ul>
                <li>Тақдим етиш учун ҳужжатлар тўлиқ мажмуини тайёрлаш</li>

                <li>
                  Ариза бланкларини тўлдириш, университетларга ҳужжат топшириш
                </li>

                <li>Омонатни тўлаш</li>

                <li>Талабалик визасига аризаси</li>

                <li>Турар жой билан боғлиқ бўлган харажатларни ҳисоблаш</li>
              </ul>

              <Link to="/form" className="btn-default">
                <LazyLoadImage
                  effect="blur"
                  delayTime={5000}
                  src={arrow}
                  alt="arrow"
                />

                <p>Консультация</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
    </div>
  );
}

export default Forabits;
