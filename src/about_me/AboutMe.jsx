import { useState, Fragment } from 'react';

// Components
import Title from "./Title";
import Events from "./Events";
import NavBar from "../nav_bar/NavBar";

// Styling
import './styling/timeline.scss';

function AboutMe() {

  const [progressBar, setProgressBar] = useState(0);

  return (
    <Fragment>
      <NavBar />
      
      <div className="about-me-main">
        <Title />

        <div className="timeline">
          <div className="timeline-progress" style={ { width: `${progressBar}%` } }></div>

          <div className="timeline-items">

            {/* Start */}
            <div className="timeline-ends"></div>

            {/* Individual events */}
            <Events 
              setProgressBar={setProgressBar}
            />

            
            {/* End */}
            <div className="timeline-ends timeline-end"></div>

          </div>
        </div>
      </div>
    </Fragment>  
  );
}

export default AboutMe;
