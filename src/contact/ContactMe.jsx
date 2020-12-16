import { Fragment } from 'react';
import {useSpring, animated} from 'react-spring'

// components
import NavBar from '../nav_bar/NavBar'

import './styling/contact_me.scss'

// Icons
import github from './images/github_64px_v2.png';
import linkedin from './images/linkedin_64px_v2.png';
import gmail from './images/mail_64px.png';

function ContactMe() {
  console.log('render');

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0.05 },
    config: {mass:50, tension:25, friction:1}
  });

  return (
    <Fragment>
      <NavBar />

      <div className="contact-me-main">
        <div className="icons">

          <animated.div style={animation} className="icon">
            <a href="https://github.com/ericmcgrandle" target="_blank" rel="noopener noreferrer"> <img src={github} alt="GitHub" className="img" /> </a>
            <a href="https://github.com/ericmcgrandle" target="_blank" rel="noopener noreferrer" className="contact-text">Visit My GitHub</a>
          </animated.div>

          <animated.div style={animation} className="icon">
            <a href="mailto:ericmcgrandle@gmail.com" target="_blank" rel="noopener noreferrer"> <img src={gmail} alt="Gmail" /> </a>
            <a href="mailto:ericmcgrandle@gmail.com" className="contact-text">Send Me An Email</a>
          </animated.div>

          <animated.div style={animation} className="icon">
            <a href="https://www.linkedin.com/in/ericmcgrandle" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="LinkedIn" /> </a>
            <a href="https://www.linkedin.com/in/ericmcgrandle" target="_blank" rel="noopener noreferrer" className="contact-text">Visit My LinkedIn</a>
          </animated.div>

        </div>
      </div>

    </Fragment>
  )
}

export default ContactMe;
