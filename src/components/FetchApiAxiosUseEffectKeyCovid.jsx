import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";

const FetchApiAxiosUseEffectKeyCovid = () => {
    let [state,setState]=useState({})
    console.log(state)
    // let[deltastate,setDeltaState]=useState({})
   
    useEffect(()=>{
        axios.get("https://data.covid19india.org/data.json")
        .then(res=>setState(res.data.statewise[0]))
        
    },[])
  return (
    
        <>
        <h1 className='text-center py-5'>INDIA COVID 19 CASE DETAILS</h1>
        <div style={{display:'flex',justifyContent:"space-between"}}>
            <CovidCard covid={state.active} h="ACTIVE CASES"/>
            <CovidCard covid={state.confirmed} h="CONFIRMED CASES"/>
            <CovidCard covid={state.deaths} h="DEATHS CASES"/>
            <CovidCard covid={state.recovered} h="RECOVERED CASES"/>
            
        </div>

        <div  style={{display:'flex',justifyContent:"space-between"}}>
        <CovidCard covid={state.deltaconfirmed} h="deltaconfirmed CASES"/>
            <CovidCard covid={state.deltadeaths} h="deltadeaths CASES"/>
            <CovidCard covid={state.deaths} h="DEATHS CASES"/>
        </div>
        </>
    
  )
}

export default FetchApiAxiosUseEffectKeyCovid

export const CovidCard=(props)=>{
    let{covid,h}=props
    return(
        <div className='card text-center text-bg-primary mb-3' style={{maxWidth:'500px'}}>
            <h3 className='card-header'>{h}</h3>
            <div className='card-body'>
                <h1 className='card-title'>{covid}</h1>
            </div>

        </div>
    )
}

export const DeltaCard=(props)=>{
    let{covid,h}=props
    return(
        <div className='card text-center text-bg-primary mb-3' style={{maxWidth:'500px'}}>
            <h3 className='card-header'>{h}</h3>
            <div className='card-body'>
                <h1 className='card-title'>{covid}</h1>
            </div>

        </div>
    )
}