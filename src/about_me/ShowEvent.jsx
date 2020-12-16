import { useState, useEffect } from 'react';

function ShowEvent(props) {

  // Set initial value to first character in description
  const [desc, setDesc] = useState(props.description[0]);
  const [index, setIndex] = useState(1);

  // Reset states if user clicks on a new event
  useEffect(() => {
    setDesc(props.description[0]);
    setIndex(1);
  }, [props.description])

  // setInterval to 'type' each character in description
  // clearInterval when index matches description length
  useEffect(() => {
    // Dynamic delay
    let delay = 30;
    if (props.description.length > 600) {
      delay = 10
    } else if (props.description.length > 400) {
      delay = 15;
    } else if (props.description.length > 200) {
      delay = 20
    }

    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
      setDesc(prev => `${prev}${props.description[index]}`);
    }, delay);

    if (index === props.description.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [index]);

  // Format date
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[props.date.month - 1];
  const date = `${month}, ${props.date.year}`;


  return (
    <div className="about-event">
      <h2 className="event-title">{props.title}</h2>
      <h3 className="event-date">{date}</h3>
      <p className="event-description">{desc}</p>
    </div>   
  )     
}

export default ShowEvent;
