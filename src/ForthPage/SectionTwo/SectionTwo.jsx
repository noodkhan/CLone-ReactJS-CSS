import React from "react";
import "./SectionTwo.css";
import Logo from "../../Car/logo.png";

function SectionTwo() {
  return (
    <div className="sectionTwo">
      <ul>
        <li>
          <a href="blank">Corporate</a>
        </li>
        <li>
          <a href="blank">Media</a>
        </li>
        <li>
          <a href="blank">Contact Us</a>
        </li>
        <li>
          <a href="blank">Conditions</a>
        </li>
      </ul>

      <div className="martinRoyal">
        <img src={Logo} alt="logo"></img>
        <a href="blank">Aston Martin</a>
      </div>

      <ul>
        <li>
          <a href="blank">Privacy</a>
        </li>
        <li>
          <a href="blank">Cookies</a>
        </li>
        <li>
          <a href="blank">Careers</a>
        </li>
        <li>
          <a href="blank">International</a>
        </li>
      </ul>
    </div>
  );
}

export default SectionTwo;
