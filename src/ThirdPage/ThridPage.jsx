import React from "react";
import "./ThridPage.css";
import './ThridPagePhone.css';
import Card from "./CardContainer/Card";

function ThridPage() {
  return (
    <>
      <div className="contactSection">
        <div className="headingContact">
          <p>News</p>
          <h2>The latest from Aston Martin</h2>
        </div>
        <Card></Card>
      </div>
    </>
  );
}

export default ThridPage;
