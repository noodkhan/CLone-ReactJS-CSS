import React from "react";
import "./FlexSmall.css";
import imgOne from "../../../newImg/9.jpg";
import imgOTwo from "../../../newImg/1.jpg";

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
