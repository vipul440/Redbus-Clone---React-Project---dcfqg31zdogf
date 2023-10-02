
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../images/banner.jpg";
import search from "./SearchBus.css"; // Make sure to import your CSS properly
import AvailableBuses from "../container/AvailableBuses.jsx";

const SearchBus = ({ onSearch }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch({ source, destination, date });
  };

  return (
    <div className="search-container">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="search-form">
        <input
          className="input-field"
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Desrination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          className="input-field"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search Buses
        </button>
      </div>
    </div>
  );
};

export default SearchBus;
