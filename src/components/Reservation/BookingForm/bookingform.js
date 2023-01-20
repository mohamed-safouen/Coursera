import { useState, } from "react";
import { useFormik } from "formik";

import "./bookingform.css";

export function BookingForm(props) {
  
  const [date,setDate]=useState(new Date().toISOString().slice(0,10))   
   function handleDateChange(e) {
     setDate(e.target.value);
     const date = new Date(e.target.value);
     props.updateTimes(date);
    
     
   }
           
 const formik = useFormik({
    initialValues: { guest:1, Occasion:""},
    onSubmit: (values,helper) => {
    props.setAvailableTimes(values)
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
                value={date}
                onChange={handleDateChange}
              />
              <select>
                {props.AvailableTimes.map((times) => (
                  <option key={times} value={times}>
                    {times}
                  </option>
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
                max="10"
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
