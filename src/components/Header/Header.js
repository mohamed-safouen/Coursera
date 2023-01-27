import logo from "../../images/Header/Logo.svg"
import  { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import useScroll from "../../hooks/useScroll";

const Header=(props)=>{
  const [isOpen, setIsOpen] = useState(false);
const Scrolling = useScroll()
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
    const handleClick = (a) => () => {
      const element = document.getElementById(a);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
      }
      
      handleHamburger();
    };
    return (
      <div id="home" className={`Header ${Scrolling === "down" ? "" : "scroll"}`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={handleHamburger}
          aria-label="menu">
          <span className={isOpen ? "bar_close_1" : "bar"}></span>
          <span className={isOpen ? "bar_close_2" : "bar"}></span>
          <span className={isOpen ? "bar_close_3" : "bar"}></span>
        </button>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/" href="#home-section" onClick={handleClick("home")}>
            Home
          </Link>
          {(props.name)?(
          <a
            href={`#${props.name}-section`}
            aria-label={props.name}
            onClick={handleClick(props.name)}>
           {props.name}
          </a>):("")}
          <Link to="/Menu" aria-label="Menu">
            Menu
          </Link>
          <Link to="/Reservation" aria-label="Reservation">
            Reservation
          </Link>
          <a href="/Order" aria-label="Order">
            Order Online
          </a>
          <Link to="/Login" aria-label="Login">
            Login
          </Link>
        </nav>
      </div>
    );
}
export default Header;