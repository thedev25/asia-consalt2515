import bg from "../../assets/asia-main-small.jpg";
import arrow from "../../assets/arrow-big.svg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import sq1 from "../../assets/img-sq-1.png";
import sq2 from "../../assets/img-sq-2.jpg";
import sq3 from "../../assets/img-sq-3.jpg";
import newsimg1 from "../../assets/asianews_1.jpg";
import newsimg2 from "../../assets/asianews_2.jpg";
import newsimg3 from "../../assets/asianews_3.jpg";
import newsimg4 from "../../assets/asianews_4.jpg";
import oclock from "../../assets/clock-red.svg";
import { Rotate, Zoom } from "react-reveal";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import "./Animation.css";
import "./Main.css";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
function Main() {
  const { t } = useTranslation();
  return (
    <div className="all">
      <div className="intro">
        <section className="introduction container-fluid">
          <div className="mobile-img">
            <LazyLoadImage src={bg} effect="blur" delayTime={6000} />
          </div>

          <div className="desc col-xl-5 col-lg-5 col-md-6 col-sm-10">
            <h1>{t("header.h1")}</h1>

            <p>{t("header.p")}</p>

            <ul>
              <li>{t("header.ul.l1")}</li>

              <li>{t("header.ul.l2")}</li>

              <li>{t("header.ul.l3")}</li>

              <li>{t("header.ul.l4")}</li>
            </ul>
            <div className="phone-complaint">
              <p>{t("header.phone.phonetext")}</p>
              <a href="tel:+998908070094">+998(90)807-00-94</a>
            </div>
          </div>

          <a href="#about" className="next">
            <img src={arrow} alt="arrow" />
          </a>
        </section>
      </div>

      <div className="mainSupport">
        <section class="support container-fluid">
          <h2>{t("header.mainSupport.h2")}</h2>
          <div className="items col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="item">
              <Reveal effect="animChap" duration="2000">
                <div className="desc col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <span>1/4</span>
                  <h3>Консультация</h3>
                  <p>
                    Олий ўқув юрти, таълим муассасалари, дастурлар, ва ўқув
                    тўловлари бўйича тўлиқ маслаҳат. Танлаган
                    университетларингизнинг кириш талаблари ҳақида сизни
                    хабардор қилиш.
                  </p>
                </div>
              </Reveal>

              <Reveal effect="animOng" duration="2000">
                <div className="img col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <div className="holder">
                    <LazyLoadImage
                      effect="blur"
                      delayTime={6000}
                      src={img1}
                      alt="support-first"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="item">
              <Reveal effect="animOng2" duration="2000">
                <div className="img col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <div class="holder">
                    <LazyLoadImage
                      effect="blur"
                      delayTime={6000}
                      src={img3}
                      alt="support-second"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal effect="animChap2" duration="2000">
                <div className="desc col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <span>2/4</span>

                  <h3>Қабул стратегияси</h3>

                  <p>
                    Талаба танлаган университетга қабул қилиш стратегиясини
                    ишлаб чиқиш, Мотивацион хат ва ариза шаклини ёзиш ва тақдим
                    етиш учун ҳужжатларни тўплашда ёрдам бериш
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="item">
              <Reveal effect="animOng2" duration="2000">
                <div className="desc col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <span>3/4</span>

                  <h3>Кириш жараёнида ёрдам</h3>

                  <p>
                    Тақдим етиш учун ҳужжатларни тўлиқ тайёрлаш, Ариза шаклини
                    тўлдириш, университетларга ҳужжат топшириш, Талабалик
                    визасига аризаси, Турар жой билан боғлиқ бўлган харажатларни
                    ҳисоблаш.
                  </p>
                </div>
              </Reveal>
              <Reveal effect="animChap2" duration="2000">
                <div className="img col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <div className="holder">
                    <LazyLoadImage
                      effect="blur"
                      delayTime={6000}
                      src={img2}
                      alt="support-third"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="item">
              <Reveal effect="animChap" duration="2000">
                <div className="img col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <div className="holder">
                    <LazyLoadImage
                      effect="blur"
                      delayTime={6000}
                      src={img4}
                      alt="support-fourth"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal effect="animOng" duration="2000">
                <div className="desc col-xl-6 col-lg-6 col-md-6 col-sm-10">
                  <span>4/4</span>

                  <h3>Ўқув жараёнида қўллаб-қувватлаш</h3>

                  <p>
                    Имтиҳонлар ва ўқув жараёнида талабаларга ёрдам ва маслаҳат
                    бериш.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <section class="statistics container-fluid">
        <div className="content col-xl-10 col-lg-10 col-md-10">
          <div className="item">
            <div className="text">
              <span>2019</span>

              <p>йилда фаолиятини бошлаган</p>
            </div>
            <Zoom bottom duration={1500}>
              <div class="img">
                <LazyLoadImage
                  effect="blur"
                  delayTime={6000}
                  src={sq1}
                  alt="statistics"
                />
              </div>
            </Zoom>
          </div>

          <div className="item">
            <Rotate bottom right duration={1500}>
              <div className="img">
                <LazyLoadImage
                  effect="blur"
                  delayTime={6000}
                  src={sq2}
                  alt="statistics-second"
                />
              </div>
            </Rotate>

            <div className="text">
              <span>8140</span>

              <p>дан зиёд талабалар</p>
            </div>
          </div>

          <div className="item">
            <div className="text">
              <span>50+</span>

              <p>дан зиёд ўқув муассасалари</p>
            </div>
            <Rotate bottom left duration="1500">
              <div className="img">
                <LazyLoadImage
                  effect="blur"
                  delayTime={6000}
                  src={sq3}
                  alt="statistics-third"
                />
              </div>
            </Rotate>
          </div>
        </div>
      </section>
      <Carousel />
      <section className="news container-fluid">
        <h2>Марказимиз янгиликари</h2>

        <div className="news_row col-xl-10 col-lg-12 col-md-12 col-sm-12">
          <div className="left">
            <div className="news-item">
              <LazyLoadImage src={newsimg1} alt="news-img-first" />

              <div className="desc">
                <div className="date">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={oclock}
                    alt="clock"
                  />

                  <p>16. 08. 2021</p>
                </div>

                <h3>💯Xarajatsiz ta’lim endi savsata emas !!!</h3>

                <a href="./form.html">Батафсил</a>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="news-item">
              <LazyLoadImage
                className="news-item__small"
                src={newsimg2}
                alt="news-img-third"
              />

              <div className="desc">
                <div className="date">
                  <LazyLoadImage src={oclock} alt="clock" />

                  <p>16. 08. 2021</p>
                </div>

                <h3>
                  🇸🇬 Asia Consult talabalar uchun Singapurda ta’lim olish
                  imkoniyatini beradi !
                </h3>

                <p>
                  Ўқув юртини танлаш бўйича тўлиқ маслаҳат, таълим муассасаси,
                  дастури ва тайёрлаш қиймати. Танлаган университетларингизнинг
                  кириш талаблари ҳақида сизни хабардор қилиш.
                </p>

                <a href="./form.html">Батафсил</a>
              </div>
            </div>

            <div className="news-item">
              <LazyLoadImage
                class="news-item__small"
                src={newsimg3}
                alt="news-img-third"
              />

              <div className="desc">
                <div className="date">
                  <LazyLoadImage src={oclock} alt="clock" />
                  <p>26. 08. 2021</p>
                </div>

                <h3>Rossiyaga sayohat. Asia News 2</h3>

                <p>
                  Ўқув юртини танлаш бўйича тўлиқ маслаҳат, таълим муассасаси,
                  дастури ва тайёрлаш қиймати. Танлаган университетларингизнинг
                  кириш талаблари ҳақида сизни хабардор қилиш.
                </p>

                <a href="./form.html">Батафсил</a>
              </div>
            </div>

            <div className="news-item">
              <LazyLoadImage
                className="news-item__small"
                src={newsimg4}
                alt="news-img-third"
              />

              <div className="desc">
                <div className="date">
                  <LazyLoadImage src={oclock} alt="clock" />

                  <p>18. 08. 2021</p>
                </div>

                <h3>
                  🇺🇸Kompaniyamizga murojaat qiling va Amerika davlatining eng
                  taniqli va mashhur shtatlarida ta’lim oling.
                </h3>

                <a href="./form.html">Батафсил</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dreamcomestrue container-fluid">
        <div className="content col-xl-8 col-lg-10 col-md-10">
          <h2>
            Biz <span> сизнинг </span>
            <span>орзуларингизни</span> ушалишига ёрдам берамиз
          </h2>

          <p>
            Хорижий университетлар илмий ва маданий ресурсларга киришни очиб,
            уфқларни кенгайтириш ва қарор қабул қилишда мустақилликни
            ривожлантиришга ёрдам беради, бебаҳо тажриба ва билимга ега, бутун
            дунёда тан олинган диплом, муваффақиятли иш билан таъминлаш
            имкониятини катталаштиради. Хорижда олий маълумот олгач, карерангиз
            сари илк қадамни ташлайсиз
          </p>

          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qKHE4m5M0S4"
              frameborder="0"
            ></iframe>
          </div>

          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uTHpNcLawjE"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
