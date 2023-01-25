import {useReducer} from "react";

import Header from "../Header/header";
import Footer from "../Footer/footer";
import { BookingForm } from "./BookingForm/bookingform";
import { fetchAPI,submitAPI } from "../../router/API";

export const updateTimes = (date) => {
  return fetchAPI(date);
};
export const initializeTimes = fetchAPI(new Date());
console.log(initializeTimes);

export function Reservation() {
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
