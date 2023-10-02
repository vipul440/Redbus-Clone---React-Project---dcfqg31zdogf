import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Trending from "./TrendingOffer.css";
import first from "../images/first.png";
import superhit from "../images/superhit.png";
import bus200 from "../images/bus200.png";
import rb from "../images/rb.png";
import rb2 from "../images/rb2.png";
import rb3 from "../images/rb3.png";
import ButtonInstructionBox from "./ButtonInstructionBox";

function TrendingOffer() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="crousal">
      <h1 className="title">TRENDING OFFERS</h1>
      <Carousel responsive={responsive}>
        {trendingCards.map((card, index) => (
          <div
            className="card"
            style={{ backgroundColor: card.backgroundColor }}
            key={index}
          >
            <h3 className="bus">BUS</h3>
            <img src={card.icon} className="icon" alt={`Card ${index + 1}`} />
            <h4 className="offer">{card.offerText}</h4>
            <h5 className="valid">Valid till {card.validTill}</h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const trendingCards = [
  {
    backgroundColor: "#1D5D9B",
    icon: first,
    offerText: "Save up to 250 on bus tickets",
    validTill: "31 Jul",
  },
  {
    backgroundColor: "#088395",
    icon: superhit,
    offerText: "Save up to 300 on bus tickets",
    validTill: "31 Jul",
  },
  {
    backgroundColor: "#E74646",
    icon: bus200,
    offerText: "Save up to 200 in Gujrat and MP",
    validTill: "31 Jul",
  },
  {
    backgroundColor: "#159895",
    icon: rb,
    offerText: "Save up to 200 in Delhi, Rajasthan",
    validTill: "31 Jul",
  },
  {
    backgroundColor: "#05BFDB",
    icon: rb2,
    offerText: "Save up to 250 on bus tickets",
    validTill: "31 Jul",
  },
  {
    backgroundColor: "#F7C04A",
    icon: rb3,
    offerText: "Save up to 250 on TSRTC bus tickets",
    validTill: "31 Jul",
  },
];

export default TrendingOffer;
