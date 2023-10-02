import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Help from "./container/Help";
import AvailableBuses from "./container/AvailableBuses.jsx";
import SearchBus from "./Components/SearchBus";
import Navbar from "./Components/Navbar";
import { auth } from "./Firebase/FirebaseAuth.js";
import { UserAuthContextProvider } from "./Firebase/UserAuthContext";
import PassengerDetailsModal from "./Components/PassengerDetailsModal";
import PaymentStatus from "./Components/PaymentStatus";
import ShowTicket from "./Components/ShowTicket";
import { useBookedTickets } from "./Components/useBookedTickets";

import AboutUs from "./container/AboutUs";

import TrainTicket from "./Components/TrainTicket";
import CabTicket from "./Components/CabTicket";
import UserTicketProvider  from "./Components/UserTicket"


const App = () => {

  const [username, setUserName] = useState("");
 const [bookedTickets, setBookedTickets] = useState(() => {
   const storedTickets =
     JSON.parse(localStorage.getItem("bookedTickets")) || [];
   return storedTickets;
 });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  const [value, setValue] = useState("");

  const getData = (data) => {
    setValue(data);
  };
  return (
    <>
      <UserAuthContextProvider>
        <UserTicketProvider>
          <BrowserRouter>
            <Navbar onSubmit={getData} userName={username} />
            <Routes>
              <Route path="/" element={<Home name={username} />}></Route>
              <Route
                path="/available-buses"
                element={<AvailableBuses />}
              ></Route>
              <Route path="/paymentstatus" element={<PaymentStatus />}>
                {" "}
              </Route>

              {/* <Route path="/show-ticket" element={<ShowTicket />} /> */}
              <Route path="//cab-rental" element={<CabTicket />} />
              <Route path="/train-ticket" element={<TrainTicket />} />
              <Route
                path="/show-ticket"
                element={
                  <ShowTicket
                    bookedTickets={bookedTickets}
                    setBookedTickets={setBookedTickets}
                  />
                }
              />
              <Route path="/help" element={<Help />} />
              <Route path="/aboutus" element={<AboutUs />}/>
            </Routes>
          </BrowserRouter>
        </UserTicketProvider>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
