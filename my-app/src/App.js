import React from 'react';
//import logo from '../resources/images/mt_logo_white.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
       {/** 
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

       */}

      <div className="container-lg px-3">
        <header className="py-6">
          <div className="pb-0 pt-md-4 py-lg-6">
            <div className="d-md-flex flex-md-items-center flex-md-row-reverse flex-md-justify-center gutter-md-spacious">
              <div className="col-md-8 text-center text-md-left">
                <h1 className="alt-h2 text-uppercase lh-condensed text-brand-blue">MobiTexter</h1>
                <h2 className="alt-h2 lh-condensed">
                  MobiTexter is shutting down
                </h2>
                <p className="alt-lead text-gray-light mt-2 lh-condensed">
                  With chat based apps taking over the conventional SMS we have decided to shutdown Mobitexter.
                  What started as a side project soon acquired a userbase of 1.5 lakh users. 
                  We will always be thankful for the love and appreciation our users showed over time.
                  Thanks to all the people who were a part of our journey.
                </p>

                <p className="alt-lead text-gray-light mt-2 lh-condensed">
                  <hr/>
                  MobiTexter team<br/>
                  <a href="https://www.linkedin.com/in/akumar001/" target="_blank" rel="noopener noreferrer">Adarsh Kumar</a><br/>
                  <a href="https://www.linkedin.com/in/devashish-mamgain-1a639320/" target="_blank" rel="noopener noreferrer">Devashish Datt Mamgain</a><br/>
                  <a href="https://www.linkedin.com/in/noushadsiddiqui/" target="_blank" rel="noopener noreferrer">Noushad Alam Siddiqui</a><br/>
                </p>
              </div>
              <div class="col-3 mx-auto mx-md-0 offset-md-1 text-center text-md-right">
                <img src="/resources/images/mt_logo_white.png" className="width-fit" alt="Probot logo"/>
              </div>
            </div>
          </div>
        </header>
      </div>


        </div>

      </header>



    </div>
  );
}

export default App;
