import React from "react";
import "./MenuTest.css";

function MenuTest() {
  return (
    <>
      <div className="menuSection">
        <div className="firstMenu">
          <ul>
            <li>
              <a href="blank">
                <span>Our</span>World
              </a>
            </li>
            <li>
              <a href="blank">Models</a>
            </li>
            <li>
              <a href="blank">Owners</a>
            </li>
            <li>
              <a href="blank">
                <span>F1</span>team
              </a>
            </li>
          </ul>
        </div>
        <div className="astonMartin">
          <div className="svgMartin">
            <a href="blank" className="logoMartin">
              <h2>
                Aston<span>Martin</span>
              </h2>
            </a>
          </div>
        </div>
        <div className="secondMenu">
          <ul>
            <li>
              <a href="blank">
                Store<span>&</span>Lifestyle
              </a>
            </li>
            <li>
              <a href="blank">Enquiry</a>
            </li>
            <li>
              <a href="blank">Dealers</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuTest;
