import React from "react";
import AppleImg from "../assets/apple.png";
import GoogleImg from "../assets/google.png";
import "./Hero1.css";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="texts">
        <h2>
          Explore our marketplace, your go-to hub for finding talented artisans
          nearby.
        </h2>
        <p>
          MyGuy is where you can easily find and connect with talented craftsmen
          and women who are located nearby.
        </p>
      </div>
      <div className="search">
        <form>
          <input
            type="search"
            placeholder="What kind of service are you searching for?"
          />
          <button type="submit">Search</button>
        </form>
        <p>
          In-demand: Metalworking Plumbing Painting Tailoring Washing services
        </p>
      </div>
      <div className="download">
        <Link to="url" className="Ios icon-box">
          <div className="icon">
            <img src={AppleImg} alt="" />
          </div>
          <div className="download-texts">
            <p className="light">Download On</p>
            <h3 className="bold">App Store</h3>
          </div>
        </Link>

        <Link to="url" className="google icon-box">
          <div className="icon">
            <img src={GoogleImg} alt="" />
          </div>
          <div className="download-texts">
            <p className="light">GET ON</p>
            <h3 className="bold">Google Play</h3>
          </div>
        </Link>
        <div className="google"></div>
      </div>
      <Link to="https://mailchi.mp/d4f765590832/smatrrt" target="_Blank">
        <button className="wait-btn">Join Our Waitlist</button>
      </Link>
    </div>
  );
};

export default Hero1;
