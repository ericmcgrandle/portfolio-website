import { useState, useEffect } from 'react';

function ShowEvent(props) {

  // Set initial value to first character in description
  const [desc, setDesc] = useState(props.description[0]);
  const [index, setIndex] = useState(1);

  // Reset states if user clicks on a new event
  useEffect(() => {
    setDesc(props.description[0]);
    setIndex(1);
  }, [props.title])

  // setInterval to 'type' each character in description
  // clearInterval when index matches description length
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
      setDesc(prev => `${prev}${props.description[index]}`);
    }, 10);

    if (index === props.description.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [index]);
  

  return (
    <div className="about-event">
      <h3 className="event-title">{props.title}</h3>
      <p className="event-description">{desc}</p>
    </div>   
  )     
}

export default ShowEvent;
