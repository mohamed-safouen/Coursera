import"./Header.css"
import logo from "../../images/Header/Logo.svg"
import { Link } from "react-router-dom";
const Header=()=>{
    return (
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#ABOUT">About</a>
          <Link to="/Menu">Menu</Link>
          <Link to="/Reservation">Reservation</Link>
          <a href="#ORDER">Order Online</a>
          <Link to="/Login">Login</Link>
        </nav>
      </div>
    );
}
export default Header;