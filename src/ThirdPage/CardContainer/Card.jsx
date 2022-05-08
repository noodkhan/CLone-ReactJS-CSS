import React from "react";
import "./Card.css";
import imgFour from "../../newImg/21.jpg";
import imgFive from "../../newImg/33.jpg";
import imgSiz from "../../newImg/logo3.jpg";
import imgSeven from "../../newImg/30.jpg";
import CardElement from "./CardElement";

//           Aston Martin teams field strongest Daytona line-up in bid for 2022 Rolex 24 Hours glory
//  image, Alt, Pdude, Hdude, link }

function Card() {
  return (
    <>
      <div className="bigContact">
        <CardElement
          image={imgFour}
          Alt={"four"}
          Pdude={"24 Jan 2022"}
          Hdude={
            "Aston Martin teams field strongest Daytona line-up in bid for 2022 Rolex 24 Hours glory"
          }
          link={"blank"}
        ></CardElement>

        <CardElement
          image={imgFive}
          Alt={"fifth"}
          Pdude={"18 Nov 2021"}
          Hdude={
            "V12 Vantage Experience the beauty of Aston Martin in the most exhilarating way possible"
          }
          link={"blank"}
        />
        <CardElement
          image={imgSiz}
          Alt={"six"}
          Pdude={"18 Nov 2021"}
          Hdude={
            " Adam Chamberlain appointed President of Aston Martin The Americas"
          }
          link={"blank"}
        />
        <CardElement
          image={imgSeven}
          Alt={"seven"}
          Pdude={"24 Jan 2022"}
          Hdude={
            "Aston Martin Vantage wins className in Petit Le Mans With The Heart of Racing"
          }
          link={"blank"}
          />
          </div>
        {/* <div className="seeAllContent">
              <div className="buttonAll">
                <a href="blank">
                  See all news <i className="bx bxs-cheese"></i>
                </a>
              </div>
            </div> */}
    </>
  );
}

export default Card;
