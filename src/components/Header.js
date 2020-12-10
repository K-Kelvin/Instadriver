import "./header.css";
import logo from "../images/Instadriver.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="..." />
          Insta<span className="driver">driver</span>
        </div>
        <div className="right">
          <ul className="links">
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#social">Get Social</a>
            </li>
            <li className="active">
              <a href="#james">James Keem</a>
            </li>
          </ul>
          <div className="Menu">
            Menu <span class="material-icons">menu</span>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </header>
  );
}
