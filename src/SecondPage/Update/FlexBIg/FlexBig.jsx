import React from "react";
import "./FlexBig.css";
import imgThree from "../../../Car/3.jpg";

function FlexBig() {
  return (
    <>
      <div className="flexElementTwo">
        <div className="contentThree">
          <div className="photoElementThree">
            <img src={imgThree} alt="third" />
          </div>
          <div className="headingElementThree">
            <p>Timeless</p>
            <a href="blank">Pre-owned by Aston Martin </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexBig;
