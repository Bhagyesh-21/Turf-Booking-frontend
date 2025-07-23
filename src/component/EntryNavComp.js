import React from "react";
import "./EntryNavComp.css";
import { Typewriter } from "react-simple-typewriter";

const EntryNavComp = () => {
  return (
    <div className="entry-nav">
      <div className="logo-container">
        <h1>LetsPLAY</h1>
      </div>
      <div className="buttons-container">
        <a href="/login">User Login</a>
        <a href="/admin">Admin Login</a>
        <a href="/about">About us</a>
      </div>

      <div id="homeTxt">
        <h2
          style={{
            color: "#fff",
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "150px", // Adjust this to move the text down
          }}
        >
          <Typewriter
            words={[
              "Unleash Your Inner Athlete!",
              "Book Your Turf in Seconds!",
              "Every Game Begins with a Click!",
              "Play, Compete, Win!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </div>
  );
}

export default EntryNavComp;
