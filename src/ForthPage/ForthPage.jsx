import React from "react";
import "./ForthPage.css";
import "./ForthPagePhone.css";
import SectionOne from "./Sectionone/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";
import SectionFour from "./SectionFour/SectionFour";

function ForthPage() {
  return (
    <>
      <div className="wallpaperThree">
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
      </div>
    </>
  );
}

export default ForthPage;
