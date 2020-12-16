import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Helper Functions
import preloadImages from '../helper_functions/preloadImages'

// styling
import './styling/landing_page.scss';

// images
import symposium from '../projects/images/Symposium-homepage.png'

function LandingPage() {

  useEffect(() => {
    preloadImages();
  }, []);

  const history = useHistory();

  const routeChange = (path) =>{ 
    let newPath = `/${path}`; 
    history.push(newPath);
  }

  return (
    <div className="main">

      <div className="name">
        <p className="full-name">Eric McGrandle</p>
        <p className="title">Full Stack Developer</p>
      </div>

      <div className="buttons">
        <button onClick={() => routeChange('about')}>About</button>
        <button onClick={() => routeChange('projects')}>View My Work</button>
        <button onClick={() => routeChange('contact')}>Contact Me</button>
      </div>

      <div className="project-container">
        <p className="title">Latest Project</p>
        <div className="image">
          <img src={symposium} alt="Symposium" />
        </div>
        <div className="links">
          <a href="https://github.com/ericmcgrandle/symposium" target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href="https://the-symposium.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Version</a>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
