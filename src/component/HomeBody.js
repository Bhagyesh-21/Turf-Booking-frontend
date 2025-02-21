import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBody.css';


const HomeBody = () => {
    return (
        <div>
            <strong id='hb-strong'>Let's Select your Game</strong>
            <nav className="homeBody-nav">
                <Link id='homeBody-a' to="/cricket">Cricket</Link>
                <Link id='homeBody-a' to="/football">Football</Link>
                <Link id='homeBody-a' to="/badminton">Badminton</Link>
             </nav>

             <div>
              <button id='homeBody-btn' onClick={() => window.location.href='https://www.swiggy.com/instamart/'}>Refreshment</button>
              {/* <button id='homeBody-btn2' to="/view-turf">View Turf</button> */}
              <Link to="/view-turf" >
                    <button id='homeBody-btn2'>View Turf</button>
                </Link>
          </div>
        </div>
        
      
    );
}

export default HomeBody;
