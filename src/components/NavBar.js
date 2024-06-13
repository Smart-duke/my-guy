import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logoImg from "../assets/image.png";
import settingsImg from "../assets/Vector.png";
import { useState } from "react";

const NavBar = () => {
  const [navDrop, setNavDrop] = useState(true);
  const handleDrop = () => setNavDrop(!navDrop);

  return (
    <nav className="headerr">
      <Link to="/">
        <img src={logoImg} alt="logo" className="logo-img" />
      </Link>
      <div className={navDrop ? "nav-container" : "nav-container navshow"}>
        <ul className={navDrop ? "nav-list" : "nav-list navshow"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/become">Become a seller</Link>
          </li>
        </ul>
      </div>
      <div className="sign">
        <NavLink to="/">
          <img src={settingsImg} alt="settings" className="set-img" />
        </NavLink>
        <NavLink to="/" className="sign-in">
          Sign In
        </NavLink>
        <NavLink to="/">
          <button className="join-btn">Join</button>
        </NavLink>
      </div>
      <div className="hamburger" onClick={handleDrop}>
        {navDrop ? (
          <FaBars size={20} style={{ color: "#050D56" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#050D56" }} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
