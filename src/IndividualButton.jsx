function IndividualButton(props) {

  const findPosition = (date) => {
    // Timeline of 4 years = 48 months --> 100% / 48months = 2.08%/month
    return ((date.month + ((date.year - 2017) * 12)) * 2.08);
  };

  const position = findPosition(props.date);

  return (
      <button onClick={ () => { props.handleClick(props.id, position) } } className="timeline-button" style={ { left: `${position}%` } } >
      </button>
  )     
}

export default IndividualButton;
