import React from 'react'
import { Autocomplete } from './Autocomplete';
// import Autocomplete from './Autocomplete';
import {useState,useEffect} from "react"
import Axios from "axios"
function GetList() {


    const [lst,setLst]=useState([])
    const [num,setNum]=useState(0)

       useEffect(()=>{
             Axios.get("/list").then(b=>{
              //  console.log(b)
                setLst(b.data.list)
              }
             )

             Axios.get("/count").then(b=>{
                // console.log(b.data.total)
                 setNum(b.data.total)
               }
              )





       },[])
    return (
        <div>

                                        <p className="d-none d-md-block nameBattle1">
                                            Are you a Real Warrior?
                                        </p>
                                        <p className="d-block d-md-none nameBattle1">
                                            A Real Warrior?
                                        </p>

                                        <p className="nameBattle3">Let's search  BattleField.</p>
                                        <p className=" mt-1">{num} Fought till now.</p>
                                          <Autocomplete options={lst}/>



        </div>
    )
}

export default GetList
