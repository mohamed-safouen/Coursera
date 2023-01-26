import food from "./../../../images/Home/restauranfood.jpg";
import "./Hero.css"
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero_description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          
        </p>
        <button className="button_Y">Reserve a Table</button>
      </div>
      <div className="Rest_img">
        <img src={food} alt="restaurant" />
      </div>
    </div>
  );
};
export default Hero;
