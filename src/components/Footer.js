import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Paypal from "../assets/PayPal.png";
import Visa from "../assets/visa.png";
import Stripe from "../assets/stripe.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="quicks">
          <h3>Quick Links</h3>
          <div className="quicks-links links">
            <Link to="#">Blog</Link>
            <Link to="#">Join Our Team</Link>
            <Link to="#">About Us</Link>
          </div>
        </div>

        <div className="abouts">
          <h3>About</h3>
          <div className="abouts-links links">
            <Link to="#">Market Place</Link>
            <Link to="#">Services</Link>
            <Link to="#">Seller</Link>
          </div>
        </div>

        <div className="services">
          <h3>Services</h3>
          <div className="service-links links">
            <Link to="#">Tiling</Link>
            <Link to="#">Auto-Mechanics</Link>
            <Link to="#">Landscaping</Link>
            <Link to="#">Sewing</Link>
          </div>
        </div>

        <div className="help">
          <h3>Help</h3>
          <div className="help-links links">
            <Link to="#">Get Help</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Self Help</Link>
          </div>
        </div>

        <div className="socials">
          <h3>Socials</h3>
          <div className="socials-links links">
            <Link to="#">
              <FaTwitter size={30} style={{ color: "#fff" }} />
            </Link>
            <Link to="#">
              <FaInstagram size={30} style={{ color: "#fff" }} />
            </Link>
            <Link to="#">
              <FaFacebook size={30} style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>
            &copy; All right reserved by <span>MyGuy</span>
          </p>
        </div>

        <div className="payments">
          <Link to="#">
            <img src={Paypal} alt="Paypal logo" />
          </Link>
          <Link to="#">
            <img src={Visa} alt="visa logo" />
          </Link>
          <Link to="#">
            <img src={Stripe} alt="stripe logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
