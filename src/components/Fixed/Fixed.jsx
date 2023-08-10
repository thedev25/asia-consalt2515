import React from "react";
import "./Fixed.css";
import { Link, NavLink } from "react-router-dom";
import phone from "../../assets/phone-alt-solid.png";

function Fixed() {
  return (
    <div>
      <div class="button-info" id="telegram_manager">
        <a href="#" class="button-info__element">
          <img src={phone} alt="phone" />
        </a>

        <a href="tel:+998555031010" class="button-info__element">
          <img src="../assets/icons/phone-volume-solid.svg" alt="phone" />
        </a>
        <a
          href="https://t.me/joinchat/AAAAAE74dwZTQUya8l4WhA"
          class="button-info__element"
        >
          <img src="../assets/icons/telegram_manager.svg" alt="phone" />
        </a>
        <a
          href="https://www.instagram.com/asiaconsult.uz/"
          class="button-info__element"
        >
          <img src="../assets/icons/instagram-brands.svg" alt="phone" />
        </a>
      </div>

      <div id="fixed_leaveapp">
        <Link to="/form">Мурожаат юбориш</Link>
      </div>
    </div>
  );
}

export default Fixed;
