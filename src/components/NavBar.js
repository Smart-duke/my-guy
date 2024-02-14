import { Link, NavLink } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import logoImg from "../assets/image.png";
import settingsImg from "../assets/Vector.png";

const NavBar = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logoImg} alt="logo" className="logo-img" />
      </Link>
      <div className="nav-container">
        <ul className="nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>

          <li>
            <Link to={"/testimonials"}>Testimaonial</Link>
          </li>
          <li>
            <Link to={"/become"}>Become a seller</Link>
          </li>
        </ul>
      </div>
      <div className="sign">
        <NavLink to="/">
          <img src={settingsImg} alt="" className="set-img" />
        </NavLink>
        <NavLink to="/" className="sign-in">
          Sign In
        </NavLink>
        <NavLink to="/">
          <button className="join-btn">Join</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
