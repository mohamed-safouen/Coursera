import {Home} from"../components/Home";
import { Route,Routes } from "react-router-dom";
import {Menu} from "../components/Menu";
import {Reservation} from "../components/Reservation";
import { ConfirmerdBooking } from "../components/Reservation/BookingForm/confirmedBooking";
import Order from "../components/order/order";
import Login from "../components/login/login";

export function Router() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Confirmation" element={<ConfirmerdBooking />} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
}


