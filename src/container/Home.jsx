import React from "react";
import webreferal from "../images/webreferal.png";
import TrendingOffer from "../Components/TrendingOffer.jsx";
import visa from "../images/visa.jpg";
import sponsured from "../images/sponsured.png";
import index from "./Home.css";
import Download from "../Components/Download";
import primoBanner from "../images/primoBanner.png";
import quality from "../images/quality.png";
import pref from "../images/pref.png";
import travell from "../images/travell.png";
import DifferentTabOption from "../Components/DifferentTabOption.jsx";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar.jsx";
import SearchBus from "../Components/SearchBus";
import AvailableBuses from "./AvailableBuses";

import { Routes, Route, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const Home = () => {
  const [buses, setBuses] = useState([]);
  const [datacame, setDataCame] = useState(false);

  const navigate = useNavigate();

  const fetchBuses = async (searchParams) => {
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${searchParams.source}&destination=${searchParams.destination}&date=${searchParams.date}`
    );

    const data = await response.json();
    setBuses((prevdata) => data);
    setDataCame(true);
  };
  useEffect(() => {
    if (datacame)
      navigate("/available-buses", {
        state: { buses },
      });
  }, [datacame]);
  return (
    <>
      <body className="allContent" >
        <section className="main-section">
          <SearchBus onSearch={fetchBuses} />
          <section >
            <TrendingOffer />
          </section>

          <div className="center-container">
            <section className="visa">
              <img src={webreferal} className="visa-container" alt="Visa" />
            </section>
          </div>

          <Download />
        </section>

        <section className="imge" style={{ marginTop: "680px" }}>
          <div className="prim" style={{ backgroundcolor: " #f5f5f5" }}>
            <div className="primobann">
              <img className="clc" src={primoBanner} alt="Primo Banner" />
            </div>
            <div className="candy">
              <div className="cart">
                <img
                  className="im"
                  src={quality}
                  alt="Quality Icon"
                  style={{ height: "80px", width: "80px" }}
                />
                <div className="text">
                  <p className="higine">1 of 5 buses quality</p>
                  <p className="hypo">
                    Primo’s strict safety qualification ensures a safer travel
                    for you
                  </p>
                </div>
              </div>
              <div className="cart">
                <img
                  className="im"
                  src={pref}
                  alt="Preferred Icon"
                  style={{ height: "80px", width: "80px" }}
                />
                <div className="text">
                  <p className="higine">Preferred by 90%</p>
                  <p className="hypo">
                    90% of travelers re-book Primo buses for its punctuality and
                    comfort
                  </p>
                </div>
              </div>
              <div className="cart">
                <img
                  className="im"
                  src={travell}
                  alt="Travel Icon"
                  style={{ height: "80px", width: "80px" }}
                />
                <div className="text">
                  <p className="higine">9 Lac+ monthly travelers</p>
                  <p className="hypo">
                    In 2022, 9 Lac+ people traveled with Primo every month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Question" style={{ backgroundColor: "#f0f0f0" }}>
          <h2 className="frequentlyQuestion">FREQUENTY ASKED QUESTIONS</h2>
          <DifferentTabOption />
        </section>

        <hr
          style={{
            width: "100%",
            margin: "0px",
            maxWidth: "80%",
            justifyContent: "center",
            marginLeft: "10%",
          }}
        />
        <section style={{ maxWidth: "100%" }}>
          <Footer />
        </section>
      </body>
    </>
  );
};

export default Home;
