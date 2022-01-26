import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import "./about-us.css";
import gaminghouse from "./gaminghouse.jpg";
import gamingHouse2 from "./gamingHouse2.jpg";
import gamingHouse3 from "./gamingHouse3.jpg";
import foto4 from "./foto4.jpg";
import foto5 from "./foto5.jpg";
import foto6 from "./Foto6.jpg";
import foto7 from "./foto7.jpg";
import foto8 from "./foto8.jpg";
import foto9 from "./foto9.jpg";

import backArrow from "./backArrow.png";

export function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(-0.3);
  const imageArr = [
    gaminghouse,
    gamingHouse2,
    gamingHouse3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
  ];

  function next() {
    let images = imageArr.length;

    if (activeIndex <= -0.29 - 1.1 * (images - 1)) {
      return;
    }
    setActiveIndex(activeIndex - 1.1);

    console.log(activeIndex);
  }

  function back() {
    if (activeIndex >= -0.31111) {
      return;
    }
    setActiveIndex(activeIndex + 1.1);

    console.log(activeIndex);
  }

  console.log(activeIndex);

  let imageCreator = (image) => {
    return (
      <div>
        <img
          src={image}
          style={{
            transform: `translateX(${activeIndex * 100 + 20}%)`,
            transition: "transform 1s",
          }}
        />
      </div>
    );
  };

  return (
    <section className="about-us">
      <div className="quienes-somos">
        <h1>Somos la comunidad mas grande de toda CentroAmerica</h1>
      </div>
      <div className="gaming-house">
        <a className="buttonBack arrowButton" onClick={back}>
          <img src={backArrow} />
        </a>

        <div className="imgContainer">
          {imageArr.map((r) => imageCreator(r))}
        </div>
        <a className="buttonNext arrowButton" onClick={next}>
          <img src={backArrow} />
        </a>
      </div>
      <div className="nosotros">
        <div>
          <h1>Organizadores de Eventos</h1>
          <span>
            Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
            dolor velit incididunt. Ea occaecat est magna ad nostrud magna
            consequat officia esse commodo ut commodo.
          </span>
        </div>
        <div>
          <h1>Comunidad</h1>
          <span>
            Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
            dolor velit incididunt. Ea occaecat est magna ad nostrud magna
            consequat officia esse commodo ut commodo.
          </span>
          </div>
            <div>
              <h1>Organizadores de Eventos</h1>
              <span>
                Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
                dolor velit incididunt. Ea occaecat est magna ad nostrud magna
                consequat officia esse commodo ut commodo.
              </span>
            </div>
      </div>
    </section>
  );
}
