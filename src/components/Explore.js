import React from "react";
import { Link } from "react-router-dom";
import HappyCustomers from "../assets/Happy-customers.png";
import Welder from "../assets/welder.png";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore">
      <div className="heading">
        <h2>
          Explore the largest digital marketplace to discover the perfect craft
          skills.
        </h2>
      </div>
      <div className="bottom">
        <div className="reasons">
          <ul>
            <li>Over 200 Services</li>
            <li>Choose Area</li>
            <li>Access to Services globally</li>
            <li>Safe and largest marketplace</li>
            <li>Happy customers</li>
          </ul>
          <Link to="/">
            <button className="explore-btn">Download to get started</button>
          </Link>
        </div>

        <img src={HappyCustomers} alt="" className="btm-img" />
        <img src={Welder} alt="a welder doing his job" className="welder" />
      </div>
    </div>
  );
};

export default Explore;
