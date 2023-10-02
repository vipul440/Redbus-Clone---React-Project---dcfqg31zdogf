import React, { useEffect, useState } from "react";
import SearchBus from "../Components/SearchBus.jsx";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import PassengerDetailsModal from "../Components/PassengerDetailsModal.jsx";
import "./AvailableBuses.css";
import ShowTicket from "../Components/ShowTicket.jsx";

const AvailableBuses = ({ buses }) => {
  const location = useLocation();
  const [selectedBus, setSelectedBus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate = useNavigate();
  
  const handleBookTicket = (bus) => {
    setSelectedBus(bus);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBus(null);
    setIsModalOpen(false);
  };
  return (
    <div className="availableBuses">
      <h2 className="top">Available Buses</h2>
      <div className="contentBuses">

        <ul>
          {location?.state?.buses?.map((bus, index) => (
            <li key={index} className="busItem">
              <h3 className="busId">Bus ID: {bus.id}</h3>
              <p>Bus Name: {bus.busName}</p>
              <p>Ticket Price: {bus.ticketPrice}</p>
              <p>Date: {bus.date}</p>
              <p>Arrival Time: {bus.arrivalTime}</p>
              <p>Departure Time: {bus.departureTime}</p>
              <p>Source: {bus.source}</p>
              <p>Destination: {bus.destination}</p>
              <button onClick={() => handleBookTicket(bus)}>Book Ticket</button>
            </li>
          ))}
        </ul>

      </div>
      {isModalOpen && (
        <PassengerDetailsModal
          bus={selectedBus}
          onClose={handleCloseModal}
          onBookTicket={(passengerDetails) => {
            console.log("Passenger details:", passengerDetails);
            setSelectedBus(null);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AvailableBuses;
