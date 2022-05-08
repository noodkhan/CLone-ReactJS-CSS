import React from "react";
import "./SecondPage.css";
import "./SecondPagePhone.css";
import FlexBig from "./Update/FlexBIg/FlexBig";
import FlexSmall from "./Update/FlexSmall/FlexSmall";

function SecondPage() {
  return (
    <>
      <div className="wallpaperTwo" id="wallpaperTwo">
        <div className="test" id="test">
          <div className="section">
            <FlexSmall></FlexSmall>
            <FlexBig></FlexBig>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
