import { useState,useReducer} from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { BookingForm } from "./BookingForm/bookingform";
import { fetchAPI } from "../../router/API";



export function Reservation() {
  const updateTimes =(date)=>{
return(fetchAPI(date))
  }
  
  const initializeTimes = fetchAPI(new Date());
  
  const [AvailableTimes, dispatch] = useReducer(updateTimes, initializeTimes)
  console.log(AvailableTimes);
  return (
    <>
      <Header />
      <BookingForm
      AvailableTimes={AvailableTimes} updateTimes={dispatch}
      />
      <Footer />
    </>
  );
}
