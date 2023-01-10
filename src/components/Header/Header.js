import"./Header.css"
import logo from "../../images/Logo.svg"
const Header=()=>{
    return (
      <div className="Header">
        <img src={logo} alt="logo" />
        <nav className="nav">
          <a href="#HOME">
            Home
          </a>
          <a href="#ABOUT">
            About
            </a>
            <a href="#MENU">
              Menu
            </a>
            <a href="#RESERVZTIONS">
              Reservations
            </a>
            <a href="#ORDER">
              Order Online
            </a>
            <a href="#LOGIN">
              Login
            </a>
        </nav>
      </div>
    );
}
export default Header;