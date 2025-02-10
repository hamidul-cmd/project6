import React, { useState } from "react";
import cird1 from "../assets/cird1.png";
import cird2 from "../assets/cird2.png";
import cird3 from "../assets/cird3.png";
import Slider from "../components/Slider";
import Bottom from "./Bottom";
function PropertiSlider() {
  const cirdData = [
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
  ];
  let [current, setcurent] = useState(0);
  let previse = () => {
    if (current === 0) setcurent(cirdData.length - 3);
    else setcurent(current - 1);
  };
  let next = () => {
    if (current === cirdData.length - 3) setcurent(0);
    else setcurent(current + 1);
  };
  return (
    <>
      <div className="slider__wrapper relative h-[515px] xll:h-[555px] 3xl:h-[700px] overflow-hidden">
        <div
          className={`absolute top-0 left-0 transition-all ease-linear duration-300`}
          style={{
            transform: `translatex(-${current * 530}px)`,
          }}
        >
          <Slider />
        </div>
      </div>
      <Bottom
        next={next}
        previse={previse}
        number={current}
        totall={cirdData.length}
        button="View All Properties"
      />
    </>
  );
}

export default PropertiSlider;
