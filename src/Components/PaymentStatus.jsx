import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./PaymentStatus.css";

const PaymentStatus = () => {
  const location = useLocation();
  const { passengerDetails, selectedBus } = location.state || {};
  console.log(passengerDetails.name);
  console.log(selectedBus.id);
  const navigate = useNavigate();

  const handleProceedToShowTicket = () => {
    navigate("/show-ticket", {
      state: { passengerDetails, selectedBus },
    });
  };

  return (
    <div className="payment-status-container">
      <div className="payment-success">
        <p>Your Ticket is Booked! Thankyou for booking.</p>
        <p>Visit again</p>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <button onClick={handleProceedToShowTicket}>
          Proceed to Show Ticket
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;


