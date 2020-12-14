import { useHistory } from "react-router-dom";

import './styling/navbar.scss'

function NavBar() {

  const history = useHistory();
  const routeChange = (path) =>{ 
    let newPath = `/${path}`; 
    history.push(newPath);
  }

  return (
    <ul className="nav-bar">
      <li onClick={() => routeChange('about')}>About Me</li>
      <li onClick={() => routeChange('projects')}>My Work</li>
      <li onClick={() => routeChange('contact')}>Contact Me</li>
    </ul>
     
  )     
}

export default NavBar;
