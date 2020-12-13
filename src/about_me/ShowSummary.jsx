function ShowSummary(props) {
  console.log('rendering showSummary');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[props.date.month - 1];

  return (
    <div className="summary-event" style={ { left: `${props.position}%` } } >
      <p className="summary-event-title">{props.title}</p>
      <p className="summary-event-date">{month}, {props.date.year}</p>
    </div>   
  )     
}

export default ShowSummary;
