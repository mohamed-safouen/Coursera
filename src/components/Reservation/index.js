import {useReducer} from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { BookingForm } from "./BookingForm/bookingform";
import { fetchAPI,submitAPI } from "../../router/API";



export function Reservation() {
  const updateTimes = (date) => {
    return fetchAPI(date);
  };
  const initializeTimes = fetchAPI(new Date());
  const [AvailableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function submitForm(formData) {
    return submitAPI(formData)
    }
    console.log(AvailableTimes);
  return (
    <div className="container">
      <Header />
      <BookingForm AvailableTimes={AvailableTimes} updateTimes={dispatch} submit={submitForm} />
      <Footer />
    </div>
  );
}
