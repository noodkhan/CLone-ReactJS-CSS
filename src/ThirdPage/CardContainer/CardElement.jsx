import React from "react";
import './CardElement.css';

function CardElement({ image, alt, Pdude, Hdude, link }) {
  return (
    <>
      <div className="cardContent">
        <div className="bigPhoto">
          <img src={image} alt={alt}></img>
        </div>
        <div className="bigHeading">
          <p>{Pdude}</p>
          <h2>{Hdude}</h2>
          <a href={link}>
            Read More <i className="bx bxs-cheese"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default CardElement;
