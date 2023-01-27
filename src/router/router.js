import {Home} from"../components/Home";
import { Route,Routes } from "react-router-dom";
import {Menu} from "../components/Menu";
import {Reservation} from "../components/Reservation";
import { ConfirmerdBooking } from "../components/Reservation/BookingForm/confirmedBooking";
import {Order} from "../components/order";
import {Login} from "../components/login";
import { CircleLoader } from "react-spinners";


export function Router() {
let [loading, setLoading] = useState(true);
  return (
    <>
      <CircleLoader loading={loading} color="#495e57" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Confirmation" element={<ConfirmerdBooking />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}


