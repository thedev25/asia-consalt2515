import React from "react";
import arrow from "../../assets/arrow-btn-w.svg";
import "./MainForm.css";

function MainForm() {
  return (
    <div>
      <section className="leaveapp container-fluid">
        <h2>Мурожаат юборинг</h2>

        <p>
          Қабул саволларига оид ёрдам олиш учун, бизнинг веб-сайтда мурожаат
          қолдиринг. Бизнинг менежер сизга қайтиб қўнғироқ қилади ва маслаҳат
          беради.
        </p>

        <a href="form.html" className="btn-default">
          <img src={arrow} alt="arrow" />

          <p>Мурожаат юбориш</p>
        </a>
      </section>
    </div>
  );
}

export default MainForm;
