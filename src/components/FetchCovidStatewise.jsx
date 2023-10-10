import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const FetchCovidStatewise = () => {
   
    let [state,setState]=useState([])
    console.log(state)

    useEffect(()=>
    {
        axios.get("https://data.covid19india.org/data.json")
        .then(res=>setState(res.data.statewise))
    },[])

  return (
    <>
    <h1 style={{textAlign:"center",padding:"20px"}}>STATE WISE COVID19 DETAILS</h1>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto ",rowGap:"30px"}}>
    {
            state.map((user,i)=>{
               return <StateWise key={i} user={user}/>
            })
        }



    </div>
    </>
  )
}



export default FetchCovidStatewise

export function StateWise(props){
  let{state,active,confirmed,deaths,deltaconfirmed,deltadeaths,deltarecovered,lastupdatedtime,migratedother,recovered,statecode}=props.user
  return(
      <div className='card text-center' style={{width:"18rem"}}>
      {/* <img src={state} className='card-img-top' alt="" /> */}
      <div className='card-body'>
          {/* <h6 className='card-title' style={{textTransform:"uppercase"}}>{state}</h6> */}
          {
            <table className="table table-dark">
              <thead >
                <td colSpan="2" className="table-active"><h5>{state}</h5></td>
              </thead>
              <tbody>
                <tr>
                  <td>active:</td>
                  <td>{active}</td>
                </tr>
                <tr>
                  <td>confirmed:</td>
                  <td>{confirmed}</td>
                </tr>
                <tr>
                  <td>deaths:</td>
                  <td>{deaths}</td>
                </tr>
                <tr>
                  <td>deltaconfirmed:</td>
                  <td>{deltaconfirmed}</td>
                </tr>
                <tr>
                  <td>deltadeaths:</td>
                  <td>{deltadeaths}</td>
                </tr>
                <tr>
                  <td>deltarecovered:</td>
                  <td>{deltarecovered}</td>
                </tr>
                <tr>
                  <td>lastupdatedtime:</td>
                  <td>{lastupdatedtime}</td>
                </tr>
                <tr>
                  <td>migratedother:</td>
                  <td>{migratedother}</td>
                </tr>
                <tr>
                  <td>recovered:</td>
                  <td>{recovered}</td>
                </tr>
                <tr>
                  <td>statecode:</td>
                  <td>{statecode}</td>
                </tr>
               
                
              </tbody>

            </table>
          }
            
      </div>

  </div>


  )
}

