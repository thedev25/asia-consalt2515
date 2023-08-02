import React from "react";
import "./About.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/director.jpg";
import img3 from "../../assets/diyor.jpg";
import img4 from "../../assets/founder.jpg";
import MainForm from "../../components/MainForm/MainForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  return (
    <div>
      <main>
        <section class="about container-fluid">
          <div class="content col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <h1>Биз ҳақимизда</h1>

            <p class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              Бизнинг компания 2019 йилда фаолиятини бошлаган. Йилдан-йилга
              турли ёшдаги минглаб инсонларга МДҲ давлатларидаги нуфузли
              университетларда олий таълим олишига ёрдам берамиз. Биз ишонч
              билан хорижий таълим соҳасида хизмат кўрсатувчи компаниялар
              рейтингида етакчи ўринларни ушлаб турипмиз.
            </p>

            <p class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              Бизга мурожаат қилишнинг муҳим афзаллиги, хорижий университетда
              таҳсил учун харажатларини оптималлаштириш қобилиятларини
              мукаммаллаштириш қобилиятидир. Биз билан сиз стипендия ёки грант
              олиш имконияти ҳақида енг сўнгги ва енг ишончли маълумотни
              олишингиз мумкин, бу охир-оқибат фирма хизматлари нархини
              оқлабгина қолмай, балки кичик фойда келтириши ҳам мумкин.
            </p>
          </div>
        </section>

        <section class="high-edu container-fluid">
          <div class="content col-xl-10 col-lg-10 col-md-12">
            <div class="img col-md-6 col-sm-6 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={8000}
                src={img1}
                alt="first"
              />
            </div>

            <div class="desc col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <h2>Чегарасиз олий таълим</h2>

              <p>
                Дастур танлаш, ҳужжатларни тўғри рўйхатлаш, университет билан
                ёзишмалар, рўйхатга олиш ва тасдиқлаш, виза олиш – барча бу вақт
                талаб етади. Бу занжирдаги енг кичик муваффақияцизлик сарфланган
                кучнинг нотўғри бўлишига олиб келади. Марказимизга мурожаат
                қилиб, вахтингизни яна беҳуда кетказмаслигингизга амин
                бўлишингиз мумкин.
              </p>
            </div>
          </div>
        </section>

        <section class="quote container-fluid">
          <p>
            Бизнинг вазифамиз - бу дунёда янги имкониятларни кашф етиш, юқори
            сифатли, қизиқарли ва замонавий хорижий таълим олиш, жаҳон
            ҳамжамиятининг тўлақонли иштирокчисига айланиш ва уларнинг
            келажакдаги истиқболлари чегараларини кенгайтириш.
          </p>
        </section>

        <section class="team container-fluid">
          <div class="content col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div class="owner director col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={8000}
                src={img2}
                alt="fourth"
              />
              <div class="text">
                <p>Begimqulov I.A.</p>
                <span>Бош директор</span>
              </div>
            </div>
            <div class="owner col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={8000}
                src={img4}
                alt="fourth"
              />
              <div class="text">
                <p>Urunov U.S.</p>
                <span>Компаниянинг асосчиси</span>
              </div>
            </div>
          </div>
          <div class="content col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div class="team col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h3>Бизнинг жамоа</h3>
              <p>
                Бизнинг жамоа юқори малакали мутахассислардан иборат ва ҳар бири
                Россиянинг етакчи университетларида таълим олган. Бундан
                ташқари, компаниямизнинг ҳар бир ходими ташқи таълим бозоридаги
                сўнгги воқеа ва тенденсиялардан хабардор еканлиги катта
                афзалликдир.
              </p>
            </div>
            <div class="owner col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
              <LazyLoadImage
                effect="blur"
                delayTime={8000}
                src={img3}
                alt="fourth"
              />
              <div class="text">
                <p>Diyor Ilkuziyev</p>
                <span>Молия болими рахбари</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
    </div>
  );
}

export default About;
