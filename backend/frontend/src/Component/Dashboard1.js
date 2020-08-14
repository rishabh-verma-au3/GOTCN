import React from 'react'
import "./Dashboard1.css"

import Img4 from "../Images/got4.jpg"
import Img3 from "../Images/got3.jpg"
import GetForm from './GetForm';
import GetList from './GetList';

function Dashboard1() {




    return (
        <div>

             <div className="container-fluid">
                 <div className="row">
                     <div className="col-12 col-lg-6 first">
                              <img src={Img3} className="rightImage" alt=""/>
                              <div className="dashFirstDesc">
                                          <GetList/>

                              </div>
                     </div>
                     <div className="col-12 col-lg-6 second">
                              <img src={Img4} className="rightImage" alt=""/>
                              <div className="dashSecondDesc">
                                          <GetForm/>
                              </div>
                     </div>
                 </div>
             </div>


        </div>
    )
}

export default Dashboard1
