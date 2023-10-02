import React from "react";
import redbus from "../images/redbus.png";
import footer from "./Footer.css";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";
import AboutUs from "../container/AboutUs";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="firs">
          <div className="ime">
            <img className="redebus" src={redbus} alt="redBus Logo" />
            <p className="firstp">
              redBus is the world's largest online bus ticket booking service
              trusted by over 25 million happy customers globally. redBus offers
              bus ticket booking through its website, iOS and Android mobile
              apps for all major routes.
            </p>
          </div>

          <div className="firsdiv">
            <h3>About redBus</h3>
            <p>
              <Link to="./AboutUs">About Us</Link>
            </p>
            <p>
              <Link to="/help">Help</Link>
            </p>
          </div>

          <div className="firsdiv">
            <h3>Top Bus Routes</h3>
            <p>Jaipur to Delhi</p>
            <p>Hyderabad to VijayWada</p>
            <p>Lucknow to Kanpur</p>
            <p>Pune to Mumbai</p>
          </div>

          <div className="firsdiv">
            <h3>Top Cities</h3>
            <p>Delhi</p>
            <p>Jaipur</p>
            <p>Lucknow</p>
            <p>Mumbai</p>
          </div>

          <div className="firsdiv">
            <h3>Different Buses Type</h3>
            <p>Luxury</p>
            <p>Express</p>
            <p>Royal</p>
            <p>Super Fast</p>
          </div>
        </div>
      </section>
      <hr
        style={{
          width: "100%",
          margin: "0px",
          maxWidth: "0%",
          justifyContent: "center",
        }}
      />
      <section className="foot">
        <p className="footerp">
          Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved
        </p>
        <div className="footerThing">
          <a href="https://www.facebook.com/redBus.in/">
            <img className="footerimages" src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/redbus_2/?originalSubdomain=in">
            <img className="footerimages" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FredBus_in%2F">
            <img className="footerimages" src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/redbusindia/">
            <img className="footerimages" src={instagram} alt="Instagram" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
