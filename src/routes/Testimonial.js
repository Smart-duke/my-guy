import React from "react";
import "./Testimonial.css";
import CeoImg from "../assets/ceo.png";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <img src={CeoImg} alt="the CEO MyGuy" className="ceo-img" />
      <div className="testimonial-text">
        <h3>What our customers are saying</h3>
        <p className="testimony">
          Our success is determined not only by what we achieve but also by the
          satisfaction and trust of our valued customers.
        </p>
        <div className="down">
          <p className="testifier">Afekhare Paul</p>
          <div>
          <FaStar size={10} style={{ color: "#047711" }} className="star" />
          <FaStar size={10} style={{ color: "#047711" }} className="star" />
          <FaStar size={10} style={{ color: "#047711" }} className="star" />
          <FaStar size={10} style={{ color: "#047711" }} className="star" />
          <FaStar size={10} style={{ color: "#047711" }} className="star" />
          </div>
          <p className="post">CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
