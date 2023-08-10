import React from "react";
import "./News.css";
import img1 from "../../assets/asianews_1.jpg";
import img2 from "../../assets/asianews_2.jpg";
import img3 from "../../assets/asianews_3 (1).jpg";
import img4 from "../../assets/asianews_4.jpg";
import ocloc from "../../assets/clock-grey.svg";
import MainForm from "../../components/MainForm/MainForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function News() {
  return (
    <div>
      <main>
        <section class="news container-fluid p-0">
          <h2>Янгиликлар</h2>

          <div class="news_row">
            <div class="item col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <Link to="/form">
                <div class="img">
                  <LazyLoadImage src={img1} alt="news-post-first" />

                  <div class="date">
                    <img src={ocloc} alt="clock" />

                    <p className="bot">16. 08. 2021</p>
                  </div>
                </div>

                <h3>💯Xarajatsiz ta’lim endi savsata emas !!!</h3>

                <p>
                  💥Asia Consult kompaniyasi barcha abiturentlar uchun mutloq
                  bepul ta’limni taklif etadi. Jahonning eng ulug’ va katta
                  mamlakatida ta’lim oling. Suhbat asosida talaba bo’ling.
                </p>

                <button class="link">Батафсил</button>
              </Link>
            </div>
            <div class="item col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <Link to="/form">
                <div class="img">
                  <LazyLoadImage src={img2} alt="news-post-first" />

                  <div class="date">
                    <img src={ocloc} alt="clock" />

                    <p className="bot">16. 08. 2021</p>
                  </div>
                </div>

                <h3>💥Asia Consultda ilk bor yangilik !!!</h3>

                <p className="top">
                  Kompaniyamizga murojaat qiling va Amerika davlatining eng
                  taniqli va mashhur shtatlarida ta’lim oling.
                </p>

                <button class="link">Батафсил</button>
              </Link>
            </div>
            <div class="item col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <Link to="/form">
                <div class="img">
                  <LazyLoadImage src={img3} alt="news-post-first" />

                  <div class="date">
                    <img src={ocloc} alt="clock" />

                    <p className="bot">26. 08. 2021</p>
                  </div>
                </div>

                <h3>Rossiyaga sayohat. Asia News 2</h3>

                <p className="top">
                  O'zbekistonlik yurtdoshlarimizni Rossiyaning nufuzli
                  oliygoxiga Asia Consult kompaniyasi tantanali ravishda kuzatdi
                  😍
                </p>

                <button className="link">Батафсил</button>
              </Link>
            </div>
            <div className="item col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
              <Link to="/form">
                <div className="img">
                  <LazyLoadImage src={img4} alt="news-post-first" />

                  <div className="date">
                    <img src={ocloc} alt="clock" />

                    <p className="bot">18. 08. 2021</p>
                  </div>
                </div>

                <h3>
                  Asia Consult talabalar uchun Singapurda ta’lim olish
                  imkoniyatini beradi !
                </h3>

                <p>
                  ✅ Amerikada o’qish ✅ O’zbekistonga imtihonsiz kirish ✅
                  Daromadli ish kasbdori bo’lish ✅ Yevropa davlatlariga yo’l
                  olish
                </p>

                <button class="link">Батафсил</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
    </div>
  );
}

export default News;
