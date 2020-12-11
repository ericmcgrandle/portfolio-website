import './styling/timeline.scss';

function AboutMe() {
  return (
    <div className="main">
      <p className="title">Through The Years</p>

      <div className="timeline">
        <div className="timeline-progress"></div>

        <div className="timeline-items">

          {/* Start */}
          <div className="timeline-ends"></div>

          {/* Individual events */}
          <button className="timeline-button">
          </button>

          <button className="timeline-button">
          </button>
          
          <button className="timeline-button">
          </button>

          
          {/* End */}
          <div className="timeline-ends"></div>

        </div>
      </div>

      <div className="about-event">
        <h3 className="event-title">Graduated LightHouse Labs Web Development</h3>
        <p className="event-description">After completing two solid presentations of my final project, that was it! I have successfully completed Lighthouse Lab's Web Development bootcamp. Over 800 hours of programming later I am a Full Stack Developer</p>
      </div>
    </div>
  );
}

export default AboutMe;
