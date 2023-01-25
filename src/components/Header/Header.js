import logo from "../../images/Header/Logo.svg"
import  { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={handleClick}
          aria-label="menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <a href="#ABOUT" aria-label="About">
            About
          </a>
          <Link to="/Menu" aria-label="Menu">
            Menu
          </Link>
          <Link to="/Reservation" aria-label="Reservation">
            Reservation
          </Link>
          <a href="#ORDER" aria-label="Order">
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