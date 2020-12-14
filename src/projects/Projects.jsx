import { Fragment } from 'react';

// components
import NavBar from '../nav_bar/NavBar'

// styling
import './styling/projects.scss'

// images
import symposium from './images/Symposium-homepage.png';
import goodAFPizza from './images/GoodAFPizza-menu.png';
import scheduler from './images/Scheduler-homepage.png';
import jungle from './images/Jungle-homepage.png';


function Projects() {

  return (
    <Fragment>
      <NavBar />

      <div className="projects-main">

        <div className="top-half">
          <div className="project first-project">
            <p className="title">Symposium</p>
            <div className="image">
              <img src={symposium} alt="Symposium" />
            </div>
            <div className="links">
              <a href="https://github.com/ericmcgrandle/symposium" target="_blank" rel="noopener noreferrer">Source Code</a>
              <a href="https://the-symposium.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Version</a>
            </div>
          </div>

          <div className="project second-project">
            <p className="title">Good AF Pizzeria</p>
            <div className="image">
              <img src={goodAFPizza} alt="Symposium" />
            </div>
            <div className="links">
              <a href="https://github.com/ericmcgrandle/kpe" target="_blank" rel="noopener noreferrer">Source Code</a>
              <a href="https://good-af-pizza.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Version</a>
            </div>
          </div>

        </div>

        <div className="bottom-half">
          <div className="project third-project">
            <p className="title">Scheduler</p>
            <div className="image">
              <img src={scheduler} alt="Scheduler" />
            </div>
            <div className="links">
              <a href="https://github.com/ericmcgrandle/scheduler" target="_blank" rel="noopener noreferrer">Source Code</a>
              <a href="https://loving-panini-03a52b.netlify.app/" target="_blank" rel="noopener noreferrer">Live Version</a>
            </div>
          </div>

          <div className="project fourth-project">
            <p className="title">Jungle</p>
            <div className="image">
              <img src={jungle} alt="Jungle" />
            </div>
            <div className="links">
              <a href="https://github.com/ericmcgrandle/jungle-rails" target="_blank" rel="noopener noreferrer">Source Code</a>
              <a href="https://github.com/ericmcgrandle/jungle-rails" target="_blank" rel="noopener noreferrer">Unavailable</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>  
  )
}

export default Projects;