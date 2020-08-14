import React from 'react'

import Axios from "axios"
import {useState,useEffect} from "react"

function FormSearch() {
        const [results, setResults] = useState([])

   useEffect(() => {
    var temp=Array(localStorage.getItem("bulkStore").split(","))
    Axios.get(`/search?king=${temp[0][0]}&location=${temp[0][2]}&type=${temp[0][1]}`).then(b=>{
      //  console.log(b)
        setResults(b.data)
    })

   }, [])


    return (
        <div>
         <div className="fixed-top">
           <a className="btn btn-primary rounded-circle mt-2 ml-2 " href="/dashboard">&larr;</a>
         </div>
           {results.length===0?"Loading...":
         results.map((item,index)=>(
            <div key={index}class="card text-center py-3 my-3 crd1">
            <div class="card-header">
              {index+1}.  {item.location}  </div>
            <div class="card-body">
              <div className="container">
                <div className="row">
                     <div className="col-12">
                       Attacker King: {item.attacker_king}
                     </div>
                     <div className="col-12 col-lg-3">
                           Attacker 1: {item.attacker_1}
                           </div>
                           <div className="col-12 col-lg-3">
                          Attacker 2: {item.attacker_2}
                           </div>
                           <div className="col-12 col-lg-3">
                           Attacker 3: {item.attacker_3}
                           </div>
                           <div className="col-12 col-lg-3">
                           Attacker 4: {item.attacker_4}
                           </div>
                   <div className="col-12">
                    Attacker Commander: {item.attacker_commander}

                   </div>

                   <div className="col-12">
                      Battle Name: {item.name}
                   </div>
                   <div className="col-12 col-lg-6">
                      Region: {item.region}
                   </div>
                   <div className="col-12 col-lg-6">
                      Year: {item.year}    <span>Battle No: {item.battle_number}</span>
                   </div>
                   <div className="col-6 ">
                   Outcome: {item.attacker_outcome}
                   </div>
                   <div className="col-6 ">
                   <span>Battle Type: {item.battle_type}</span>
                   </div>

                  </div>
                </div>
            </div>
            <div class="card-footer text-muted">
            <div className="container">
                <div className="row">
                     <div className="col-12">
                       Defender King: {item.defender_king}
                     </div>
                     <div className="col-12 col-lg-3">
                         Defender 1: {item.defender_1}
                           </div>
                           <div className="col-12 col-lg-3">
                           Defender 2: {item.defender_2}
                           </div>
                           <div className="col-12 col-lg-3">
                           Defender 3: {item.defender_3}
                           </div>
                           <div className="col-12 col-lg-3">
                           Defender 4: {item.defender_4}
                           </div>
                   <div className="col-12">
                   Defender Commander: {item.defender_commander}

                   </div>


                  </div>
                </div>
            </div>
          </div>
        ))



        }

        </div>
    )
}

export default FormSearch
