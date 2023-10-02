import React from "react";
import cabimg from "../images/cabimg.png";
import "../Components/CabTicket.css";

function CabTicket() {
  console.log("cab");
  return (
    <div className="cabFirst">
      <h3 className="cabSecond">
        Booking Of Cab Facility will Be Available Soon
      </h3>
      <img className="cabThird" src={cabimg} />
    </div>
  );
}

export default CabTicket;
