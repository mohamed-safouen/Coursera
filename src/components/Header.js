import logo from "../images/Logo.svg"
const Header=()=>{
    return (
      <>
        <img src={logo} alt="logo" />
        <ul>
          <a href="#HOME">
            <li>HOME</li>
          </a>
          <a href="#ABOUT">
            <li>ABOUT</li>
            <a href="#MENU">
              <li>MENU</li>
            </a>
            <a href="#RESERVZTIONS">
              <li>RESERVATIONS</li>
            </a>
            <a href="#ORDER">
              <li>ORDER ONLINE</li>
            </a>
            <a href="#LOGIN">
              <li>LOGIN</li>
            </a>
          </a>
        </ul>
      </>
    );
}
export default Header;