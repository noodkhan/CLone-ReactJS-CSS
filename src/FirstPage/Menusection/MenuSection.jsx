import React from "react";
import MenuOne from "./MenuOne/MenuOne";
import "./MenuSection.css";
import MenuTwo from "./MenuTwo/MenuTwo";


let LogoMenu = (
  <>
    <div className="astonMartin">
      <div className="svgMartin">
        <a href="blank" className="logoMartin">
          <h2>
            Aston<span>Martin</span>
          </h2>
        </a>
      </div>
    </div>
  </>
);


function MenuSection() {
  return (
    <>
      <div className="menuSection">
        <MenuOne />
        {LogoMenu}
        <MenuTwo />
      </div>
    </>
  );
}

export default MenuSection;
