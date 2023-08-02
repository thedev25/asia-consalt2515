import React from "react";
import "./Universts.css";
import img1 from "./Images/U1.jpg";
import img2 from "./Images/U2.jpg";
import img3 from "./Images/U3.jpg";
import img4 from "./Images/U4.jpg";
import img5 from "./Images/U5.jpg";
import img6 from "./Images/U6.jpg";
import img7 from "./Images/U7.jpg";
import img8 from "./Images/U8.jpg";
import img9 from "./Images/U9.jpg";
import img10 from "./Images/U10.jpg";
import img11 from "./Images/U11.jpg";
import img12 from "./Images/U12.jpg";
import img13 from "./Images/U13.jpg";
import arrow from "./Images/arrow-btn-w.svg";
import MainForm from "../../components/MainForm/MainForm";
import Footer from "../../components/Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Universts() {
  return (
    <div>
      <main>
        <h2 className="warning_univer">
          Bu sahifadagi universitetlar haqidagi ma'lumotlar aniq emas, aniq
          ma'lumot uchun bizning raqamimizga qo'ng'iroq qiling yoki zayavka
          qoldiring, biz tez orada siz bilan bog'lanamiz.
        </h2>

        <section className="universities container-fluid">
          <div className="filter">
            <p>Страны:</p>
            <div className="select-holder">
              <div id="country_select" class="select">
                <ul>
                  <li data-filter="all" class="active">
                    Все страны
                  </li>
                  <li data-filter="russia">Россия</li>
                  <li data-filter="kazak">Казахстан</li>
                  <li data-filter="tajik">Таджикистан</li>
                  <li data-filter="kirgiz">Киргизстан</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="universities_row">
            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="russia"
            >
              <div class="content">
                <LazyLoadImage src={img1} alt="university-omks" />
                <h3>Омская гуманитарная академия</h3>
                <span>Россия, Омск</span>
                <a
                  href="innerpages/universities/ru001.html"
                  class="btn-default"
                >
                  <LazyLoadImage src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="russia"
            >
              <div class="content">
                <LazyLoadImage src={img2} alt="university-moscow" />
                <h3>Московская академия предпринимательства</h3>
                <span>Россия, Москва</span>
                <a
                  href="innerpages/universities/ru002.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="russia"
            >
              <div class="content">
                <LazyLoadImage src={img3} alt="university-synergy" />
                <h3>Университет Синергия</h3>
                <span>Россия, Москва</span>
                <a
                  href="innerpages/universities/ru003.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="russia"
            >
              <div class="content">
                <LazyLoadImage src={img4} alt="university-tomsk" />
                <h3>Томский Государственный университет</h3>
                <span>Россия, Томск</span>
                <a
                  href="innerpages/universities/ru004.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="russia"
            >
              <div class="content">
                <LazyLoadImage src={img5} alt="university-tomsk" />
                <h3>Российский университет дружбы народов</h3>
                <span>Россия, Москва</span>
                <a
                  href="innerpages/universities/ru005.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kirgiz"
            >
              <div class="content">
                <LazyLoadImage src={img6} alt="university-osh" />
                <h3>Ошский гомунитарно - педагогический институт</h3>
                <span>Киргизстан, г. Ош</span>
                <a
                  href="innerpages/universities/kg001.html"
                  class="btn-default"
                >
                  <LazyLoadImage src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kirgiz"
            >
              <div class="content">
                <LazyLoadImage src={img7} alt="university-tech" />
                <h3>Международный университет иновационных технологий</h3>
                <span>Киргизстан, Бишкек</span>
                <a
                  href="innerpages/universities/kg002.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="tajik"
            >
              <div class="content">
                <LazyLoadImage src={img8} alt="university-tajik" />
                <h3>Таджиксий университет права, бизнеса и политики</h3>
                <span>Таджикистан, Хучанд</span>
                <a
                  href="innerpages/universities/tj001.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="tajik"
            >
              <div class="content">
                <LazyLoadImage src={img9} alt="university-husand" />
                <h3>Худжандский университет имени Бободжона Гафурова</h3>
                <span>Таджикистан, Худжанд</span>
                <a
                  href="innerpages/universities/tj002.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kazak"
            >
              <div class="content">
                <LazyLoadImage src={img10} alt="university-southkz" />
                <h3>Южно - Казахстанский университет имени М. Ауэзова</h3>
                <span>Казахстан, Шымкент</span>
                <a
                  href="innerpages/universities/kz001.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kazak"
            >
              <div class="content">
                <LazyLoadImage src={img11} alt="university-ped" />
                <h3>Южно - Казахстанский педагогический университет</h3>
                <span>Казахстан, Шымкент</span>
                <a
                  href="innerpages/universities/kz002.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kazak"
            >
              <div class="content">
                <LazyLoadImage src={img12} alt="university-abay" />
                <h3>Казахский педагогический университет имени Абая</h3>
                <span>Казахстан, Алматы</span>
                <a
                  href="innerpages/universities/kz003.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>

            <div
              class="item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
              data-filter="kazak"
            >
              <div class="content">
                <LazyLoadImage src={img13} alt="university-yassawi" />
                <h3>
                  Международный казахско - турецкий Университет Ахмеда - Ясави
                </h3>
                <span>Казахстан, Туркестан</span>
                <a
                  href="innerpages/universities/kz004.html"
                  class="btn-default"
                >
                  <img src={arrow} alt="arrow" />
                  <p>Подробнее</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
      <Footer />
    </div>
  );
}

export default Universts;
