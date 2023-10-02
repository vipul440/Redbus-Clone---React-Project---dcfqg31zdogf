import React from 'react'
import vipp from "../images/vipp.png";
import  "../container/AboutUs.css"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import redbus from "../images/redbus.png";

function AboutUs() {
  return (
    <>
      <div className="full">
        <div className="about">
          <h3 className="headings">About Us</h3>
          <p className="detail">
            redBus is India’s largest online bus ticketing platform that has
            transformed bus travel in the country by bringing ease and
            convenience to millions of Indians who travel using buses. Founded
            in 2006, redBus is part of India’s leading online travel company
            MakeMyTrip Limited (NASDAQ: MMYT). By providing widest choice,
            superior customer service, lowest prices and unmatched benefits,
            redBus has served over 18 million customers. redBus has a global
            presence with operations across Indonesia, Singapore, Malaysia,
            Colombia and Peru apart from India.
          </p>
          <h3 className="headings">Manged And Manitained By</h3>
          <img className="vip" src={vipp} alt="vipul" />
          <p className="detail">
            This website is redBus clone Which is Maintained by{" "}
            <b> Mr. Vipul Kumar </b> 
              and It can be only used for Booking redBus Ticket.Through This
            Websie You can Provide Source , Destination and Date and Booked Your
            Ticket after filling The Passenger Information with Payment mode i.e
            Via any card.All The card Will be Acceptable For Payment.If You are
            not willing to Travell After Booking your Ticket You can Cancel Your
            Ticket Freely and the Money will be get backed autometically after
            cancelling The Ticket and If any Query related to booking You are
            free to call on Provided number or You can mail on given mail ID By
            going into Help Section of the Website.
          </p>
        </div>
        <div className="im">
          <div className="ri">
            <img className="redb" src={redbus} alt="redBus Logo" />
            <p className="para">
              redBus is the world's largest online bus ticket booking service
              trusted by over 25 million happy customers globally. redBus offers
              bus ticket booking through its website, iOS and Android mobile
              apps for all major routes.
            </p>
            <div className="lin">
              <a className="fbc" href="https://www.facebook.com/redBus.in/">
                <img src={facebook} alt="Facebook" style={{ height: "30px" }} />
              </a>
              <a
                className="twitt"
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FredBus_in%2F"
              >
                <img src={twitter} alt="Twitter" style={{ height: "34px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs