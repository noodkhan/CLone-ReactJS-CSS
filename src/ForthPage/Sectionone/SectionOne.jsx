import React from "react";
import "./SectionOne.css";

function SectionOne() {
  return (
    <div className="sectionOne">
      <div className="titleFirst">
        <h2>Financial Services</h2>
        <p>
          Find a package that suits you with competitive offers from Aston
          Martin Financial Services.
        </p>
        <a href="blank">
          Find out More <i className="bx bxs-cheese"></i>
        </a>
      </div>

      <div className="titleFirst">
        <h2>Configurator</h2>
        <p>
          Fully configure our entire range of Aston Martin models to create
          models to create a vehicle that is unique to you.
        </p>
        <a href="blank">
          Model Configurator<i className="bx bxs-cheese"></i>
        </a>
      </div>

      <div className="titleFirst">
        <h2>Enquire</h2>
        <p>
          Contact Aston Martin and a member of our customer team will be in
          touch shortly.
        </p>
        <a href="blank">
          Make an enquiry <i className="bx bxs-cheese"></i>
        </a>
      </div>

      <div className="titleFirst">
        <h2>Dealers</h2>
        <p>Find and contact your nearest Aston Martin dealer.</p>
        <a href="blank">
          Find a dealer <i className="bx bxs-cheese"></i>
        </a>
      </div>
    </div>
  );
}

export default SectionOne;
