import { useState,useReducer} from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { BookingForm } from "./BookingForm/bookingform";



export function Reservation() {
  const [AvailableTimes,setAvailableTimes]=useState([])
  
  return (
    <>
      <Header />
      <BookingForm
      AvailableTimes={AvailableTimes} setAvailableTimes={setAvailableTimes}
      />
      <Footer />
    </>
  );
}
