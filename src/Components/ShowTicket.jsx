import React from "react";
import { useTicket } from "./UserTicket";
import { useChangeTicket } from "./UserTicket";
import "./ShowTicket.css";
import ticketlogo from "../images/ticketlogo.png";

const ShowTicket = () => {
  const tickets = useTicket();
  const changeTicket = useChangeTicket();

  const handleCancelTicket = (id) => {
    changeTicket.cancelTicket(id);
  };

  return (
    <div
      className="render"
      style={{
        marginTop: "90px",
        color: "white",
      }}
    >
      {tickets.length === 0 ? (
        <h2 className="tic">Please Book Ticket First ! </h2>
      ) : (
        <>
          <h2 className="tic">All Booked Ticket Details </h2>
          {tickets.map((ticket) => {
            const {
              id,
              age,
              arrivalTime,
              busName,
              date,
              departureTime,
              destination,
              email,
              name,
              phoneNumber,
              source,
              ticketPrice,
            } = ticket;
            return (
              <div className="tickete" key={busName}>
                <img
                  src={ticketlogo}
                  style={{ height: "50px", width: "80px"}}
                />
                <p className="boo">Bus Id: {id}</p>
                <p className="boo">Travel Date: {date}</p>
                <p className="boo">Bus Name: {busName}</p>
                <p className="boo">Passenger Name: {name}</p>
                <p className="boo">Phone Number: {phoneNumber}</p>
                <p className="boo">
                  Source: {source} ({departureTime})
                </p>
                <p className="boo">
                  Destination: {destination} ({arrivalTime})
                </p>
                <p className="boo">Ticket Price: {ticketPrice}</p>
                <button onClick={() => handleCancelTicket(id)} className="canc">
                  Cancel Ticket
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ShowTicket;
