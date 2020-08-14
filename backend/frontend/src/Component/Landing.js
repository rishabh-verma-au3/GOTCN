import React from 'react'
import "./Landing.css"
import Img1 from "../Images/got1.jpg"
export default function Landing() {
    return (
        <div>

             <div className="front-Land">
                       <img src={Img1} className="Landing-pic" alt=""/>
                       <div className="desc">
                           <p className="third">
                                    <a className="btn btn-info" href="/dashboard">Let's Start</a>
                           </p>
                       </div>
             </div>




        </div>
    )
}
