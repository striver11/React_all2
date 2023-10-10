import React from "react";
import { useState } from "react";

const SubmitEvent=()=>{
    let[state,setState]=useState("")
    function handleSubmit(e){
        setState(e.target[0].value);
        console.log(e.target[0].value)
        e.preventDefault()
    }

    return(
        <>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter name"/>
            <button type="submit">submit</button>
        </form>
        <h1>username:{state}</h1>
        </>
    )
}

export default SubmitEvent