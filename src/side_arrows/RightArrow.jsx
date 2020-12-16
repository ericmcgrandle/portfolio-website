import { useHistory } from "react-router-dom";

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

  return (
    <img src={rightArrow} alt="Right Arrow" className="right-arrow" onClick={() => routeChange()}/> 
  )     
}

export default RightArrow;
