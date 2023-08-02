import React from "react";
import "./Carousel.css";
import s1 from "./2.jpg";
import s2 from "./3.jpg";
import s3 from "./4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Carousel() {
  return (
    <div>
      <div className="izoh">
        <section class="feedbacks container-fluid p-0">
          <div class="feedbacks-carousel owl-carousel">
            <Swiper className="mySwiper">
              <SwiperSlide>
                <div class="item">
                  <div class="img col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <img src={s1} alt="student" />
                  </div>

                  <div class="desc col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                    <span>Москва тадбиркорлик академиясининг талабаси</span>

                    <h3>Жавохир Шукуров</h3>

                    <p>
                      Мен Москвада ўқишни бошлаганим учун Asia Consult
                      ходимларига миннатдорчилик билдирмоқчиман. Мен танловдан
                      мамнун бўлдим. Ўқиш дастурга келсак - камчиликлар мавжуд
                      эмас, аксинча ўқитувчилар яхши ва ўқув шароитлари ажойиб.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="img col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <img src={s2} alt="student" />
                  </div>

                  <div class="desc col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                    <span>Қозоқ педагогика институти талабаси</span>

                    <h3>Мадина Холматова</h3>

                    <p>
                      Салом! Қозоғистонда шундай ажойиб университетни танлашда
                      кўрсатган ёрдамингиз учун катта раҳмат. Мен талабалар
                      шаҳарчасида жуда яхши жойлашдим ва менга таълим шароитлари
                      жуда ёқди.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="item">
                  <div class="img col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <img src={s3} alt="student" />
                  </div>

                  <div class="desc col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                    <span>
                      Бобожон Ғофуров номидаги Хужанд университети талабаси
                    </span>

                    <h3>Абдурауф Исмоилов</h3>

                    <p>
                      Мен азалдан Хужанда ўқишни орзу қилардим! Лекин бу менга
                      имконсиз туюлар эди, чунки Бунинг учун ҳужжатлар тўплаш
                      улкан масъулият талаб қилишини тушунардим. Олти ой олдин
                      сайтингизга кириб, сиз тақдим этаёдган таклифлар билан
                      қизиқдим. Компания бир қатор мамлакатларда малака оширишни
                      (ўқишни) ташкил қилишда ёрдам беришга ваъда берди. Мен
                      рози болдиму, лекин барибир шубҳаларим бор эди.
                      Охир-оқибат офисга келишга қарор қилганимда, бу менинг
                      вазиятимдаги энг тўғри қадам эканлигини англадим!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Carousel;
