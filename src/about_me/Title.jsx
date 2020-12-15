import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
 
const years = [
  "1999's", "2000's", "2001's", "2002's", "2003's", "2004's", "2005's", "2006's", "2007's", "2008's", "2009's", "2010's", "2011's", "2012's", "2013's", "2014's", "2015's", "2016's", "2017's", "2018's", "2019's", "2020's", "2021's", "Years"
];

function Title() {

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() =>
      setIndex(index => index + 1),
      130
    );

    // Stops interval when it reaches "Years"
    if (index === years.length - 1) {
      clearInterval(interval)
    }
    // Prevents duplicate intervals from being created
    return () => clearInterval(interval);
  }, [index]);
 
  return (
    <p className="title">Through The  
      <TextTransition
        text={ years[index % years.length] }
        spring={presets.gentle}
        style={{ margin: "0 10px" }}
        inline
        overflow
      />
    </p>
  );
};

export default Title;