import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

// styling
import './styling/side_arrows.scss'

// images
import leftArrow from './images/left_64px.png'


function LeftArrow() {

  // Handle the navigation to different pages
  const history = useHistory();
  const routeChange = () => {
    const currentPath = window.location.pathname;
    let newPath = '/';
    
    if (currentPath === '/contact') {
      newPath = '/projects'
    } else if (currentPath === '/projects') {
      newPath = '/about'
    } else if (currentPath === '/about') {
      newPath = '/contact'
    } else {
      console.log('Something went wrong!');
    }
    
    history.push(newPath);
  }

  // Handle the ability to use arrows to navigate pages
  useKeyPress('ArrowLeft');
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
    <img src={leftArrow} alt="Left Arrow" className="left-arrow" onClick={() => routeChange()}/> 
  )     
}

export default LeftArrow;
