import React from "react";
import "./FirstPage.css";
import "./firstPagePhone.css";
import MenuSection from "./Menusection/MenuSection";
// import BackgroundPhoto from "../Car/Background.webp";
import BarPhoto from "../newImg/po2.jpg";
import NewbackGround from "../newImg/background.jpg";
// import MenuTest from "./MenuTest/MenuTest";

function FirstPage() {
  let Heading = (
    <div className="headingSection" id="heading">
      <div className="pTag">
        <p>Otherworldy Performance</p>
      </div>
      <div className="hTag">
        <h2>Aston Martin</h2>
        <h2>Valkyrie</h2>
      </div>
    </div>
  );

  let Selector = (
    <div className="selector">
      <ul>
        <li>
          <a href="blank">Coupe</a>
        </li>
        <li>
          <a href="blank">Amr pro</a>
        </li>
        <li>
          <a href="blank">spider</a>
        </li>
      </ul>
    </div>
  );

  let SpecPhoto = (
    <div className="specPhoto">
      <img src={BarPhoto} alt="bar" />
    </div>
  );

  // let BarContent = (
  //   <div className="barContent">
  //     <div className="barSpec">
  //       <p>Top Speed / Km/Hr</p>
  //       <div className="barOne"></div>
  //     </div>
  //     <div className="barSpec">
  //       <p>Power /BpH</p>
  //       <div className="barOne"></div>
  //     </div>
  //   </div>
  // );

  const BarSpec = (
    <div className="infoSection">
      {Selector}
      {SpecPhoto}
      {/* {BarContent} */}
    </div>
  );

  // const Menu = <MenuTest/>

  return (
    <>
      <div className="wallpaper" id="wallpaper">
        <div className="photoBackground" id="photo">
          <img src={NewbackGround} alt="Background" />
          <MenuSection />
        </div>
          {Heading}
        {BarSpec}
      </div>
    </>
  );
}

export default FirstPage;
