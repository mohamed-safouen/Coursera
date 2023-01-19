import {Home} from"../components/Home";
import { Route,Routes } from "react-router-dom";
import {Menu} from "../components/Menu";
import {Reservation} from "../components/Reservation";

export function Router() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </>
  );
}


