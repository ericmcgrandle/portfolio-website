import { useState, Fragment } from 'react';

// components
import IndividualButton from "./IndividualButton";
import ShowEvent from "./ShowEvent";

function Events(props) {

  const [selected, setSelected] = useState({
    title: 'About Me',
    description: `My name is Eric. I'm 21. From a very young age I was the person to go to when you had technology problems. In elementary school teachers would find me when they couldn't get their projectors to work. In ICT class in highschool I would write 4 different solutions to coding problems
                  in the first 15 minutes of class so that me and my buddies could play games together for the rest of the class. I genuinely love to program. I, as strange as it may sounds, love to get stuck on a problem. Getting stuck provides an opportunity to find better
                  solutions, faster code, a new approach that I never thought of before. I love to learn and no matter how long you have been programming for, there is always something new to learn. This excites me and I am looking forward to starting my career in the
                  Tech industry.`
  });

  const updateSelected = (id, position) => {
    // update selected state to show summary of event
    setSelected(events[id - 1]);
    // update progress bar to correct event
    props.setProgressBar(position)
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
      title: 'Buying an Ambulance',
      date: { year: 2018, month: 6 },
      description: "With dreams of road-tripping to Mexico I bought a retired BC ambulance!",
    },
    {
      id: 5,
      title: 'Leslie Forest Products',
      date: { year: 2018, month: 7 },
      description: `While trying to save up for my next trip I looked for a job with higher pay. I am not someone who shys away from hard work, and it would be an understatement to say the
                    work at Leslie Forest was tough manual labour. The work was incredibly fast paced and I applaud everyone who works there. Unfortunately, after only a few months four people            
                    with the lowest seniority, me being one of them, were laid off.`,
    },
    {
      id: 6,
      title: 'Pacific Coast Marine Windshields',
      date: { year: 2018, month: 10 },
      description: "I'm back! Needing just a little bit more money before setting off again, I was fortunate enough to get my postion at PCMW back. The next 4 months was spent working at PCMW, building out my ambulance and trying to get some sleep every night.",
    },
    {
      id: 7,
      title: 'Second Extended Trip',
      date: { year: 2019, month: 2 },
      description: `After completing my home on wheels, I set off at the beginning of February. This trip took me down the west coast of the United States and throughout the majority of Mexico.
                    Ask me about the time I rotated my tires, on a 10,000lbs, dually, ambulance, in the middle of the desert with only a bottle jack and some 4x4's. Or about the time I crashed a drone into a
                    cliffside, tried to recover it, got stuck in a very precarious location, and needed rescuing from some friendly Mexican cowboys.`,
    },
    {
      id: 8,
      title: 'Pacific Coast Marine Windshields',
      date: { year: 2020, month: 1 },
      description: `PCMW part 3. This time PCMW was moving buildings and needed someone to get their new building ready. Without an abundance of time to hire someone, and needing someone who was going to
                    get the job done right but also get it done quickly they contacted me.`,
    },
    {
      id: 9,
      title: "Microsoft's Learn To Program In Java",
      date: { year: 2020, month: 6 },
      description: `Starting in June I got serious about pursuing an education. I strongly believe in learning by doing and did not feel that university was the education I wanted. As such, I began looking
                    into Massive Open Online Courses (MOOCs). I found several great resources that linked to courses which, after completing all of them, would provide the equivalent to a complete Computer
                    Science degree. Learn To Program In Java was the first course that I took in this journey.`
    },
    {
      id: 10,
      title: "Duke's Solving Problems With Software",
      date: { year: 2020, month: 7 },
      description: `Duke's Solving Problems With Software was the second course I took in my journey to a CS degree. During this time I started to contemplate whether employers would take me seriously
                    considering I wasn't getting any formal certification for my classes. I, personally, believe that the only thing that should matter is the knowledge that I possess, however,
                    I recognized the immense difficulty I was going to face when I reached the job hunting phase.`,
    },
    {
      id: 11,
      title: "Harvard's Computer Science 50",
      date: { year: 2020, month: 8 },
      description: `This was by far the best class I have ever taken. At the start of the course the instructor described the class as if you were 'drinking from a firehose'. The idiom was spot on as the class was a nonstop spray of knowledge.`,
    },
    {
      id: 12,
      title: "Lighthouse Lab's Web Development Bootcamp",
      date: { year: 2020, month: 9 },
      description: `After coming to the realization that I was going to need some tangible evidence that I indeed know what I know I decided to research bootcamps. When I first read Lighthouse Labs' website I knew I had found the one. 
                    "We'll always show you the hard way to do something first, and then give you an easier way, so that you appreciate why the easier way is actually easier and better for your app". Lighthouse Labs taught me a lot of things,
                    but the most important lesson I took away from it, is that learning to code is easier, and faster than I initially thought. I am genuinely able to learn, not master, but learn how to program in a new language or framework
                    in a matter of days.`,
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