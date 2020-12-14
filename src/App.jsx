import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./landing_page/LandingPage";
import AboutMe from "./about_me/AboutMe";
import ContactMe from "./contact/ContactMe";

export default function App() {
  return (
     <BrowserRouter>
       <Switch>
         <Route path="/" exact component={LandingPage} />
         <Route path="/about" exact component={AboutMe} />
         <Route path="/contact" exact component={ContactMe} />
       </Switch>
     </BrowserRouter>
  );
}