import React from "react";
import redbus from "../images/redbus.png";
import train from "../images/rail-vertical.jpg";
import ride from "../images/ryde.png";
import userIcon from "../images/userIcon.png";
import helpIcon from "../images/helpIcon.png";
import navbar from "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import { Link } from "react-router-dom";
import { useUserAuth } from "../Firebase/UserAuthContext";
import Help from "../container/Help";
import TrainTicket from "./TrainTicket.jsx";
import CabTicket from "./CabTicket";

const Navbar = ({ backgroundColor }) => {
  const [search, setSearch] = useState("");
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openLoginModal = () => {
    setModalOpen(true);
  };
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img className="navbarlogoimg" src={redbus} alt="Rebus Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="middle">
            <img className="redebuse" src={redbus} alt="Redbus Logo" />
            <span>Bus Ticket</span>
          </Link>
          <Link
            to="/cab-rental"
            className="middle"
            style={{ marginTop: "5px" }}
          >
            <img className="cabLogo" src={ride} alt="Cab Logo" />
            <span>Cab Rental</span>
          </Link>
          <Link
            to="/train-ticket"
            className="middle"
            style={{ marginTop: "3px" }}
          >
            <img className="trainLogo" src={train} alt="Train Logo" />
            <span>Train Ticket</span>
          </Link>

          <Link to="/help" className="right" style={{ marginTop: "8px" }}>
            <img className="help" src={helpIcon} alt="Help" />
            <span style={{ marginTop: "5px" }}>Help</span>
          </Link>

          <div className="navbar-account right" style={{ marginLeft: "40px" }}>
            <img className="userIcon" src={userIcon} alt="Account" />
            <br />
            <span className="acc">Account</span>
            <div className="dropdown-content">
              {/* <Link to="/show-ticket">CancelTicket</Link> */}
              <Link to="/show-ticket">Show My Ticket</Link>
              {!user ? (
                <Link onClick={openModal}>Login/SignUp</Link>
              ) : (
                <Link onClick={handleLogout}>Sign Out</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
