import React from 'react';
//import logo from '../resources/images/mt_logo_white.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
          <img src="/resources/images/mt_logo_white.png" alt="logo" width="100px" height="100px" />
          <div>
            <h3>SMS Texting from Computer ↔ Mobile using your own number</h3>
          </div>
        </div>

        <div className="main-content">
          <p>
            With chat based apps taking over the conventional SMS we have decided to shutdown Mobitexter.
            What started as a side project soon acquired a userbase of 1.5 lakh users. 
          </p>
          <p>
            We will always be thankful for the love and appreciation our users showed over time.
          </p>
          <p>
            Thanks to all the people who were a part of our journey.
          </p>  
        </div>

        <div className="end-content">
          <div>
            -- <br>
            </br>MobiTexter Team 
          </div>
          <div>
            Adarsh Kumar <br></br>
            Devashish Mamgain <br></br>
            Noushad Siddiqui <br></br>
            and Team
          </div>
        </div>

      </header>



    </div>
  );
}

export default App;
