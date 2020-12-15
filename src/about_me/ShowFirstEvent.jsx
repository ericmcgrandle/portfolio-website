function ShowFirstEvent(props) {

  return (
    <div className="about-event">
      <h2 className="event-title">{props.title}</h2>
      <p className="event-description">{props.description}</p>
    </div>   
  )     
}

export default ShowFirstEvent;
