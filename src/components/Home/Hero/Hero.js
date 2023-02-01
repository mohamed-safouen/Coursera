import { Link } from "react-router-dom";
import food from "./../../../images/Home/Hero/restauranfood.jpg";
import "./Hero.css"
export function Hero()  {
  return (
    <div className="Hero">
      <div className="Hero_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <Link to="/Reservation" aria-label="Reservation">
          <button className="button_Y">Reserve a Table</button>
        </Link>
      </div>
      <div className="Rest_img">
        <img src={food} alt="restaurant" />
      </div>
    </div>
  );
};

