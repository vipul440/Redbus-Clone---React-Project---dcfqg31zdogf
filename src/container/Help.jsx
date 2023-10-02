import React from "react";
import Navbar from "../Components/Navbar.jsx";
import helpImg from "../images/helpImg.jpg";
import redbus from "../images/redBus.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import "./Help.css"

const Help = () => {
  return (
    <>
      <div className="body-container">
        <div className="item" style={{ marginLeft: "30%", marginTop: "90px" }}>
          <h1 className="hel" style={{ marginTop: "150px" }}>redBus Help</h1>
          <img className="centered-image" src={helpImg} alt="Help Image" />
          <h2 className="twenty">24 / 7 Customer Support</h2>
          <h3>HelpLine Number : 02243569856 , 02163985312</h3>
          <h3>email us : redbus1@gmail.com , redbus2@gmail.com</h3>
        </div>
        <div className="im">
          <div className="ri">
            <img className="redb" src={redbus} alt="redBus Logo" />
            <p className="para">
              redBus is the world's largest{" "}
              online bus ticket booking 
              service trusted by over 25 million happy customers globally.
              redBus offers bus ticket booking through its website, iOS and
              Android mobile apps for all major routes.
            </p>
            <div className="lin">
              <a className="fbc" href="https://www.facebook.com/redBus.in/">
                <img src={facebook} alt="Facebook" style={{height:"30px"}} />
              </a>
              <a
                className="twitt"
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FredBus_in%2F"
              >
                <img src={twitter} alt="Twitter" style={{height:"34px"}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Help;
