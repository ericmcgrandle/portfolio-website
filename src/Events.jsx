import { useState, Fragment } from 'react';

// components
import IndividualButton from "./IndividualButton";
import ShowEvent from "./ShowEvent";

function Events() {

  const [selected, setSelected] = useState({
    title: 'About Me',
    description: 'Graduated with Honour Roll Recognition. Completed two International Baccalaureate programs, English and Psychology.'
  });

  const updateSelected = (id) => {
    setSelected(events[id - 1]);
  }

  const events = [
    {
      id: 1,
      title: 'Graduate Highschool',
      date: { year: 2017, month: 6 },
      description: 'Graduated with Honour Roll Recognition. Completed two International Baccalaureate programs, English and Psychology.',
    },
    {
      id: 2,
      title: 'First Extended Trip',
      date: { year: 2017, month: 9 },
      description: `This was my first trip after graduating highschool. In total I was gone for 6 months, starting in Australia for a month before flying to South-East Asia for another 5 months. 
                    This was an education unlike any other and I would highly recommend anyone, especially young people to travel while they can. Ask me how I was able to visit 7 countries on $1000 a month. Or, ask me about the time my motorcycle was stolen in Vietnam!`,
    },
    {
      id: 3,
      title: 'Pacific Coast Marine Windshields',
      date: { year: 2018, month: 4 },
      description: "After getting home from my trip I jumped right back into work. At PCMW I was the 'Gate Master', in charge of building gates for all of the windshields we manufactured.",
    },
    {
      id: 4,
      title: 'Leslie Forest Products',
      date: { year: 2018, month: 7 },
      description: "",
    },
    {
      id: 5,
      title: 'Pacific Coast Marine Windshields',
      date: { year: 2018, month: 10 },
      description: "",
    },
    {
      id: 6,
      title: 'Second Extended Trip',
      date: { year: 2019, month: 2 },
      description: "",
    },
    {
      id: 7,
      title: 'Pacific Coast Marine Windshields',
      date: { year: 2020, month: 1 },
      description: "",
    },
    {
      id: 8,
      title: "Microsoft's Learn To Program In Java",
      date: { year: 2020, month: 7 },
      description: "",
    },
    {
      id: 9,
      title: "Duke's Solving Problems With Software",
      date: { year: 2020, month: 7 },
      description: "",
    },
    {
      id: 10,
      title: "Harvard's Computer Science 50",
      date: { year: 2020, month: 8 },
      description: "",
    },
    {
      id: 11,
      title: "Lighthouse Lab's Web Development Bootcamp",
      date: { year: 2020, month: 9 },
      description: "",
    },
  ];


  return (
    <Fragment>
        { mapEvents(events, updateSelected) }

        <ShowEvent 
          title={selected.title}
          description={selected.description}
        />
    </Fragment>
  )    
};

const mapEvents = (events, updateSelected) => {

  const eventsElement = events.map(event => {
    return ( 
      <IndividualButton 
        key={event.id}
        id={event.id}
        title={event.title}
        date={event.date}
        handleClick={ updateSelected }
      />
    )
  });
  return eventsElement;
};

export default Events;