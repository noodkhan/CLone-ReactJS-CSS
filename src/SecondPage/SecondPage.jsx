import React from "react";
import "./SecondPage.css";
import FlexBig from "./Update/FlexBIg/FlexBig";
import FlexSmall from "./Update/FlexSmall/FlexSmall";

function SecondPage() {
  return (
    <>
      <div className="wallpaperTwo" id="wallpaperTwo">
        <div className="test" id="test">
            <FlexSmall></FlexSmall>
            <FlexBig></FlexBig>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
