import './styling/landing_page.scss';

function LandingPage() {
  return (
    <div className="main">

      <div className="name">
        <p className="full-name">Eric McGrandle</p>
        <p className="title">Full Stack Developer</p>
        <p className="summary">I Strongly Believe In Learning By Doing</p>
      </div>

      <div className="buttons">
        <button>About Me</button>
        <button>View My Work</button>
        <button>Contact Me</button>
      </div>
      
    </div>
  );
}

export default LandingPage;
