import logo from "../../images/Logo.svg";
import'./Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer-row" >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tex-footer">
          <nav className="nav-footer">
            <a href="#HOME">Home</a>
            <a href="#ABOUT">About</a>
            <a href="#MENU">Menu</a>
            <a href="#RESERVZTIONS">Reservations</a>
            <a href="#ORDER">Order Online</a>
            <a href="#LOGIN">Login</a>
          </nav>
          <div className="contact">
            <h4>Contact</h4>
            <ul>
              <li>Adresse</li>
              <li>Phone number</li>
              <li>email</li>
            </ul>
          </div>
          <div className="socials">
            <h4>socials</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h5>© 2023 Little Lemon Restaurant. All rights reserved</h5>
      </div>
    </>
  );
};
export default Footer;
