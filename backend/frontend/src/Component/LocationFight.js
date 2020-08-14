import React from 'react'
import {useState,useEffect} from "react"
import Axios from "axios"
import "./LocationFight.css"
import Fields from './Fields';
function LocationFight() {
    console.log(localStorage.getItem('locationFight'))

      const [res,setRes]=useState([])

    useEffect(()=>{
        console.log(localStorage.getItem('locationFight'))
        Axios.get("/search?location="+localStorage.getItem('locationFight')).then((b)=>{
                setRes(b.data)
               // console.log(b.data)

        })
    },[])

    return (
        <div className="first">

                {res.length===0?"Loading...":<Fields className="last"res={res}/>}


        </div>
    )
}

export default LocationFight
