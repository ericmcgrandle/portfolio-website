import react from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutMe from "./about_me/AboutMe";
import LandingPage from "./landing_page/LandingPage";

export default function App() {
  return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={LandingPage} />
         <Route path="/about" exact component={AboutMe} />
       </Switch>
     </BrowserRouter>
  );
}