import logo from "../../images/Logo.svg";
const Footer = () => {
  return (
    <>
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tex-footer">
          <nav className="navigation">
            <h4>navigation</h4>
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
