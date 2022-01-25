import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import "./about-us.css";
import gaminghouse from "./gaminghouse.jpg";
import gamingHouse2 from "./gamingHouse2.jpg";
import gamingHouse3 from "./gamingHouse3.jpeg";

export function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  function next() {
    setActiveIndex(activeIndex + 1);
  }

  function back() {
    setActiveIndex(activeIndex - 1);
  }

  return (
    <section className="about-us">
      <div className="quienes-somos">
        <h1>Quienes Somos</h1>
      </div>
      <div className="gaming-house">
        <div className="button" onClick={next}></div>

        <div className="button2" onClick={back}></div>

        <div className="uno">
          <img
            src={gaminghouse}
            style={{
              transform: `translateX(${activeIndex * 100}%)`,
              transition: "transform 2s",
            }}
          />
        </div>

        <div
          className="dos"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            transition: "transform 2s",
          }}
        >
          <img src={gamingHouse2} />
        </div>

        <div
          className="tres"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            transition: "transform 2s",
          }}
        >
          <img src={gamingHouse3} />
        </div>

        <div
          className="cuatro"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
            transition: "transform 2s",
          }}
        >
          <img src={gaminghouse} />
        </div>
      </div>
      <div className="nosotros">
        <p>
          <h1>Organizadores de Eventos</h1>
          <span>
            Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
            dolor velit incididunt. Ea occaecat est magna ad nostrud magna
            consequat officia esse commodo ut commodo.
          </span>
        </p>
        <p>
          <h1>Comunidad</h1>
          <span>
            Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
            dolor velit incididunt. Ea occaecat est magna ad nostrud magna
            consequat officia esse commodo ut commodo.
          </span>
        </p>
        <p>
          <h1>Organizadores de Eventos</h1>
          <span>
            Mollit mollit non enim esse et. Commodo cillum do aute Lorem non
            dolor velit incididunt. Ea occaecat est magna ad nostrud magna
            consequat officia esse commodo ut commodo.
          </span>
        </p>
      </div>
    </section>
  );
}
