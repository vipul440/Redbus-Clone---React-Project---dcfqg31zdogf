import React from 'react'
import train from "../images/trainbg.png";
import "../Components/TrainTicket.css";

function TrainTicket() {
  
  return (
    <div
      className="TrainTicketFirst">
      <h3
        className="TrainTicketSecond">
        Booking Of Train Ticket Facility will Be Available Soon
      </h3>

      <img
        className="TrainTicketThird"
        src={train}/>
        
    </div>
  );
}

export default TrainTicket