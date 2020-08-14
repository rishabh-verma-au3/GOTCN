import React from 'react'
import Axios from "axios"
import {useState,useEffect} from "react"

function GetForm(props) {

const [king, setKing] = useState([])
const [location, setLocation] = useState([])
const [type, setType] = useState([])




     useEffect(() => {
                 Axios.get("/type").then(b=>{
                     //console.log(b)
                           setType(b)
                 })

                 Axios.get("/king").then(b=>{
                     //console.log(b)
                       setKing(b)
                 })

                 Axios.get("/list").then(b=>{
                     //console.log(b)
                        setLocation(b)
                 })

     }, [])



     const searchIt=(e)=>{
                  var k=document.getElementById("king").value
                   var t=document.getElementById("type").value
                   var l=document.getElementById("location").value
                   localStorage.setItem("bulkStore",[k,t,l])


     }


    return (



            <form className="form-group">
                <h5 style={{color:"white",textShadow:"2px 2px 2px red",textDecoration:"underline"}}>Let's search Battles</h5>
            <select className="form-control rounded-pill w-100 mt-2 " id="king">
                <option selected disabled value="">King </option>
                {king.length===0?"":king.data.list.map((item,index)=>(
                       <option value={item} key={index} >{item}</option>
                ))}

            </select>
            <select className="form-control rounded-pill w-100 mt-2" id="location">
                <option selected disabled value="">Location</option>
                {location.length===0?"":location.data.list.map((item,index)=>(
                       <option value={item} key={index} >{item}</option>
                ))}

            </select>

            <select className="form-control rounded-pill w-100 mt-2" id="type">
                <option selected disabled value="">Type</option>
                {type.length===0?"":type.data.list.map((item,index)=>(
                       <option value={item} key={index} >{item}</option>
                ))}

            </select>
            <a className="btn btn-primary rounded-pill w-100 mt-2" type="submit" onClick={searchIt} href="/formSearch">Submit</a>
            </form>








    )
}

export default GetForm
