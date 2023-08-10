import React from "react";
import "./Form.css";
import img from "../../assets/arrow-btn-w.svg";
function Form() {
  return (
    <div className="forms">
      <div class="form col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12">
        <h3>Мурожаат қолдиринг</h3>

        <p>
          Қабул саволларига оид ёрдам олиш учун, бизнинг веб-сайтда мурожаат
          қолдиринг. Бизнинг менежер сизга қайтиб қўнғироқ қилади ва маслаҳат
          беради.
        </p>

        <form>
          <input name="web_page" value="Asia Consult" />

          <input
            id="username"
            name="user_name"
            type="text"
            required
            placeholder="Исмингиз"
          />

          <input
            id="userphone"
            name="user_phone"
            type="text"
            required
            placeholder="Телефон рақамингиз"
          />

          <input
            id="usermail"
            name="user_email"
            type="email"
            placeholder="Электрон почтангиз (шарт эмас)"
          />

          <textarea
            name="user_text"
            placeholder="Қўшимча ҳабарингиз..."
          ></textarea>

          <button type="submit" className="btn-default">
            <img src={img} alt="arrow" />

            <p>Юбориш</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
