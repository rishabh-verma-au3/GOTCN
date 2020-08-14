


import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom"
import Landing from "./Landing";
import Dashboard from "./Dashboard"

import LocationFight from "./LocationFight";
import FormSearch from "./FormSearch";
const App = () => {

  return (
    <div className="topDiv">
      <Router>
         <Route exact path="/" component={Landing}/>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/locationFight" component={LocationFight}></Route>
         <Route exact path="/formSearch" component={FormSearch}></Route>

      </Router>
    </div>
  );
};

export default App;
