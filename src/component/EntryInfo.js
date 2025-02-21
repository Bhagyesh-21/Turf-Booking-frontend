import React from 'react'
// import ball from "../images/ball.png"
import { Link } from 'react-router-dom'
import './EntryInfo.css'
import { jImages } from '../shared/constantData/staticData'

const EntryInfo = () => {

  return (
    <div id='homeBody'>
        {/* <div > */}
           <img id='ballImg' src={jImages.Ball} alt="" />
        {/* </div> */}
        <div id='ballingText'>
            <p id='bodyheading'>FIND AND BOOK YOUR NEAREST{" "}
            <span style={{ color: "red" }}>TURF</span> JUST A CLICK AWAY!</p>
            <p id='bodyHeading2'>
            WHEN YOU BOOK YOUR GROUND ONLINE WITH US, YOU GET TO PAY WITH CREDIT CARD, DEBIT CARD, NET BANKING OR 
            WITH DIGITAL WALLET TO. WITH TURFZ YOU ENJOY THE PROCESS OF GROUND BOOKING AS MUCH AS YOU ENJOY THE GAME
            </p>
            {/* <Link to={"/login"}>
            <button id='loginBtn'>LOGIN/SIGNUP</button>
            </Link> */}
        </div>
    </div>
  )
}
export default EntryInfo;
