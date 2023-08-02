import React from "react";
import "./Contacts.css";
import { YMaps, Map } from "react-yandex-maps";

function Contacts() {
  return (
    <div>
      <h2>Bizning Manzil!</h2>
      <YMaps>
        <div className="box">
          <Map defaultState={{ center: [41.31579, 69.241127], zoom: 10 }} />
        </div>
      </YMaps>
    </div>
  );
}

export default Contacts;
