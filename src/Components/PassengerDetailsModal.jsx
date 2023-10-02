import React, { useState } from "react";
import "./PassengerDetailsModal.css";
import debit from "../images/debit.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { useTicket } from "./UserTicket";
import { useChangeTicket } from "./UserTicket";

const PassengerDetailsModal = ({ bus, onClose, onBookTicket }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCVVNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    cvvNumber: "",
  });
  const changeTicket = useChangeTicket();
  // console.log(changeTicket);

  const navigate = useNavigate();

  const validateFields = () => {
    let valid = true;
    const newErrorMessage = {};

    if (!name) {
      newErrorMessage.name = "Please fill  Name field";
      valid = false;
    }
    if (!age || !age < 0) {
      newErrorMessage.age = "Please fill  age field";
      valid = false;
    }
    if (!email || !email.includes("@") || !email.endsWith(".com")) {
      newErrorMessage.email = "Please fill  email field";
      valid = false;
    }
    if (!phoneNumber) {
      newErrorMessage.phoneNumber = "Please fill  PhoneNumber";
      valid = false;
    }
    if (!cardNumber || cardNumber.length !== 16) {
      newErrorMessage.cardNumber = "Please fill right Card Number";
      valid = false;
    }
    if (!cvvNumber || cvvNumber.length !== 3) {
      newErrorMessage.cvvNumber = "Please fill right cvv Number";
      valid = false;
    }
    setErrorMessage(newErrorMessage);
    return valid;
  };
  const handleSubmit = () => {
    if (validateFields()) {
      const passengerDetails = {
        name,
        age,
        email,
        phoneNumber,
        cardNumber,
        cvvNumber,
        busName: bus.busName,
        source: bus.source,
        destination: bus.destination,
        date: bus.date,
        arrivalTime: bus.arrivalTime,
        departureTime: bus.departureTime,
        ticketPrice: bus.ticketPrice,
        id: bus.id,
      };
      onBookTicket({ passengerDetails, selectedBus: bus });
      onClose();

      changeTicket.bookTicket(passengerDetails);
      // console.log(passengerDetails);
      //   console.log(bus);
      navigate("/paymentstatus", {
        state: { passengerDetails, selectedBus: bus },
      });
    }
  };
  return (
    <div className="modalBackdrop" style={{ transform: "translate(5%, 30%)" }}>
      <div className="passengerDetailsModal">
        <h2 className="mod">Passenger Details</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Passenger name"
        />
        {errorMessage.name && <p className="errorText">{errorMessage.name}</p>}
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Passenger age"
        />
        {errorMessage.age && <p className="errorText">{errorMessage.age}</p>}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errorMessage.email && (
          <p className="errorText">{errorMessage.email}</p>
        )}
        <label>Phone Number:</label>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone number"
        />
        {errorMessage.phoneNumber && (
          <p className="errorText">{errorMessage.phoneNumber}</p>
        )}
        <label>Card Number:</label>
        <input
          className="cardNumber"
          type="number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="All card  Accepted"
        />
        {errorMessage.cardNumber && (
          <p className="errorText">{errorMessage.cardNumber}</p>
        )}
        <label>CVV Number:</label>
        <input
          className="cvv"
          type="number"
          value={cvvNumber}
          onChange={(e) => setCVVNumber(e.target.value)}
          placeholder="CVV number"
        />
        {errorMessage.cvvNumber && (
          <p className="errorText">{errorMessage.cvvNumber}</p>
        )}
        <button onClick={handleSubmit}>Proceed With Payment</button>

        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PassengerDetailsModal;
