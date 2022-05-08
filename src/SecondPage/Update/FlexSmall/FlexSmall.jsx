import React from "react";
import "./FlexSmall.css";
import imgOne from "../../../Car/1.webp";
import imgOTwo from "../../../Car/2.jpg";

function FlexSmall() {
  return (
    <>
      <div className="flexElement">
        <div className="contentOne">
          <div className="photoElementOne">
            <img src={imgOne} alt="first" />
            <div className="headingElement">
              <a href="blank"> Aston Martin Valkyrie </a>
              <p className="text-black">Limited editions and innovations</p>
            </div>
          </div>
        </div>
        <div className="contentTwo">
          <div className="photoElementTwo">
            <img src={imgOTwo} alt="second" />
            <div className="headingElement">
              <a href="blank">Special Project</a>
              <p className="text-black">Limited editions and innovations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexSmall;
