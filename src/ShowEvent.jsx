function ShowEvent(props) {

  return (
    <div className="about-event">
      <h3 className="event-title">{props.title}</h3>
      <p className="event-description">{props.description}</p>
    </div>   
  )     
}

export default ShowEvent;
