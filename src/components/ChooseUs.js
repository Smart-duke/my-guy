import React from 'react'
import PainterImg from "../assets/painter.png"
import EngineerImg from "../assets/engineer.png"
import CarpenterImg from "../assets/carpenter.png"
import { Link } from 'react-router-dom'
import "./ChooseUs.css"

const ChooseUs = () => {
  return (
    <div className='choose-us'>
        <h2 className='header'>Why you should <span> choose MyGuy?</span></h2>
        <p>MyGuy offers you access to skills and businesses right at your fingertips with personalized strategies. Opt for MyGuy!</p>
        <div className="careers">
            <div className="painter career-box" >
                <img src={PainterImg} alt="a painter" />
                <Link to="/"><button className='career-btn'>Painter</button></Link>
            </div>
            <div className="engineer career-box" >
                <img src={EngineerImg} alt="an engineer" />
                <Link to="/"><button className='career-btn'>Engineer</button></Link>
            </div>
            <div className="carpenter career-box" >
                <img src={CarpenterImg} alt="a carpenter" />
                <Link to="/"><button className='career-btn'>Carpenter</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs