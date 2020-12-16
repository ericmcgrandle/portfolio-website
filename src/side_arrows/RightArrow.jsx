import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

// styling
import './styling/side_arrows.scss'

// images
import rightArrow from './images/right_64px.png'

function RightArrow() {
  const history = useHistory();
  const routeChange = () => {
    const currentPath = window.location.pathname;
    let newPath = '/';
    
    if (currentPath === '/contact') {
      newPath = '/about'
    } else if (currentPath === '/about') {
      newPath = '/projects'
    } else if (currentPath === '/projects') {
      newPath = '/contact'
    } else {
      console.log('Something went wrong!');
    }
    
    history.push(newPath);
  }

  useKeyPress('ArrowRight');

  // Hook
  function useKeyPress(targetKey) {
    function downHandler({ key }) {
      if (key === targetKey) {
        routeChange();
      }
    }

    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
      };
    }, []);
  }

  return (
    <img src={rightArrow} alt="Right Arrow" className="right-arrow" onClick={() => routeChange()}/> 
  )     
}

export default RightArrow;
