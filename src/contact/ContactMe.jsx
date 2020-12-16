import { Fragment } from 'react';

// components
import NavBar from '../nav_bar/NavBar'

import './styling/contact_me.scss'

// Icons
import github from './images/github_128px.png';
import linkedin from './images/linkedin_128px.png';
import gmail from './images/mail_128px.png';

function ContactMe() {

  return (
    <Fragment>
      <NavBar />

      <div className="contact-me-main">
        <div className="icons">

          <div className="icon">
            <a href="https://github.com/ericmcgrandle" target="_blank" rel="noopener noreferrer"> <img src={github} alt="GitHub" className="img" /> </a>
            <a href="https://github.com/ericmcgrandle" target="_blank" rel="noopener noreferrer" className="contact-text">Visit My GitHub</a>
          </div>

          <div className="icon email-icon">
            <a href="mailto:ericmcgrandle@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={gmail} alt="Gmail" /> </a>
            <a href="mailto:ericmcgrandle@gmail.com" className="contact-text email-text">Send Me An Email</a>
          </div>

          <div className="icon">
            <a href="https://www.linkedin.com/in/ericmcgrandle" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="LinkedIn" /> </a>
            <a href="https://www.linkedin.com/in/ericmcgrandle" target="_blank" rel="noopener noreferrer" className="contact-text">Visit My LinkedIn</a>
          </div>

        </div>
      </div>

    </Fragment>
  )
}

export default ContactMe;
