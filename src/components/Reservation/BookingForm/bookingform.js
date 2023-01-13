import { useState,useEffect } from "react";
import { useFormik } from "formik";

import "./bookingform.css";

export function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([]);
 const formik = useFormik({
    initialValues: { date:"", guest: "", Occasion:""},
    onSubmit: (values,helper) => {
    
     helper.resetForm() 
    }
  });
  return (
    <div className="banner">
      <h2>BOOK YOUR TABLE NOW</h2>
      <div className="card-container">
        <div className="card-img"></div>
        <div className="card-content">
          <h3>Reservation</h3>
          <form>
            <div className="form-row">
              <input
                name="date"
                type="Date"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
              <select>
                {availableTimes.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <input
                value={formik.values.guest}
                onChange={formik.handleChange}
                name="guest"
                type="number"
                placeholder="Guests"
                min="1"
              />
              <select
                onChange={formik.handleChange}
                value={formik.values.Occasion}
                name="Occasion">
                <option value="hour-select">Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="form-row">
              <input type="submit" value="BOOK TABLE" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
