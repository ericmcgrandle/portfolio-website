import github from './images/github_64px.png';
import linkedin from './images/linkedin_64px.png';
import gmail from './images/gmail_64px.png';

function ContactMe() {

  return (
    <div className="icons">
      <div className="github-icon">
        <img src={github} alt="GitHub" />
      </div>
      <div className="github-icon">
        <img src={linkedin} alt="GitHub" />
      </div>
      <div className="github-icon">
        <img src={gmail} alt="GitHub" />
      </div>
    </div>
  )
}

export default ContactMe;
