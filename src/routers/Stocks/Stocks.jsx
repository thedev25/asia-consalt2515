import React from "react";
import "./Stocks.css";
import img from "../../assets/stock.jpg";
import MainForm from "../../components/MainForm/MainForm";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Stocks() {
  return (
    <div>
      <main>
        <section class="stocks container-fluid">
          <h2>Акция ва чегирмалар</h2>

          <div class="stocks_row">
            <div class="item col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="content">
                <LazyLoadImage src={img} alt="stock-first" />

                <h3>Абитуриентлар учун янги имкониятлар</h3>

                <p>
                  Ўқиш мамлакат танлаш бўйича тўлиқ маслаҳат, таълим муассасаси,
                  дастури ва тайёрлаш қиймати. Танлаган университетларингизнинг
                  кириш талаблари ҳақида сизни хабардор қилиш. Ўқиш мамлакат
                  танлаш бўйича тўлиқ маслаҳат, таълим муассасаси, дастури ва
                  тайёрлаш қиймати.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
    </div>
  );
}

export default Stocks;
