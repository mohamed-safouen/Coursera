import { Link } from "react-router-dom";

import logo from "./../../images/Header/footer-logo.png";
import { SocialIcon } from "react-social-icons";

import "./Footer.css";

const Footer = () => {
      const handleClick = (a) => () => {
        const element = document.getElementById(a);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
     
      };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>
        <div className="footer-nav-container">
          <nav className="footer-nav">
            <Link to="/" href="#home-section" onClick={handleClick("home")}>
              Home
            </Link>
            <a
              href="#about-section"
              aria-label="about"
              onClick={handleClick("about")}>
              About
            </a>
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
        <div className="footer-contact-container">
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span>Adresse :</span> 5848 w irvink park rd apt 1r Chicago il
                60634-2625 USA
              </li>
              <li>
                <span>Phone number :</span> +1 312 111 111
              </li>
              <li>
                <span>Email :</span> info@littlelemon.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social-container">
          <div className="footer-social">
            <h4>Socials</h4>
            <ul className="footer-social-list">
              <li>
                <SocialIcon
                  url="https://facebook.com"
                  bgColor="grey"
                  style={{ height: 30, width: 30 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="https://instagram.com/"
                  bgColor="grey"
                  style={{ height: 30, width: 30 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="https://twitter.com"
                  bgColor="grey"
                  style={{ height: 30, width: 30 }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <h5>© 2023 Little Lemon Restaurant. All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
