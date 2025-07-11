import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
          <div className="flexColStart f-right">
            <span className="primaryTextg">Information</span>
            <span className="secondaryText">145 New York, FL 4571, USA</span>
            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
