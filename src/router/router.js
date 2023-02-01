import { useState,useEffect } from "react";
import {Home} from"../components/Home";
import { Route,Routes } from "react-router-dom";
import {Menu} from "../components/Menu";
import {Reservation} from "../components/Reservation";
import { ConfirmerdBooking } from "../components/Reservation/BookingForm/confirmedBooking";
import {Order} from "../components/order";
import {Login} from "../components/login";
import { CircleLoader } from "react-spinners";

import "../App.css"
import { About } from "../components/Home/About/About";


export function Router() {
let [loading, setLoading] = useState(true);
useEffect(() => {
  setLoading(false);
}, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <CircleLoader loading={loading} color="#495e57" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Confirmation" element={<ConfirmerdBooking />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}


