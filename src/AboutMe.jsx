// Components
import Events from "./Events";

// Styling
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
          <Events />

          
          {/* End */}
          <div className="timeline-ends timeline-end"></div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
