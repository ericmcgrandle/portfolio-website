import { Fragment, useState } from 'react';

import ShowSummary from './ShowSummary';

function IndividualButton(props) {

  const [summary, setSummary] = useState();

  const findPosition = (date) => {
    // Timeline of 4 years = 48 months --> 100% / 48months = 2.08%/month
    return ((date.month + ((date.year - 2017) * 12)) * 2.08);
  };

  const position = findPosition(props.date);

  return (
    <Fragment>
      <button 
        onClick={ () => { props.handleClick(props.id, position) } } 
        onMouseEnter={ () => setSummary(props.id) }
        onMouseLeave={ () => setSummary() }
        className="timeline-button" 
        style={ { left: `${position}%` } } 
      />
      {summary && <ShowSummary 
        title={props.title}
        date={props.date}
        position={position}
      />}
    </Fragment>

  )     
}

export default IndividualButton;
