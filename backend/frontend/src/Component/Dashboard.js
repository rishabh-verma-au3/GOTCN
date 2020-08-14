import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import "./Dashboard.css"
import Dashboard1 from './Dashboard1';

function Dashboard() {
    return (
        <div>



               <nav className="navbar navbar-expand-lg myNav">
               <a className="navbar-brand logo" href="/dashboard">BattleField</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"><i className="fa fa-bars bars"></i></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto  linkList">
                     <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                     </li>



                 </ul>


                 </div>
             </nav>

             <Router>
                     <Route exact path="/dashboard" component={Dashboard1}></Route>

               </Router>




        </div>
    )
}

export default Dashboard
