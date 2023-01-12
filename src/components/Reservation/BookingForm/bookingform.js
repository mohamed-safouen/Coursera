import './bookingform.css';
export function BookingForm(){
    return (
      <div className="booking">
        <div class="left">
          <h1>Make Your reservation</h1>
        </div>
        <div class="right">
          <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <button
              className="button_Y"
              type="submit"
            >
            Make Your Reservation
            </button>
          </form>
        </div>
      </div>
    );
}