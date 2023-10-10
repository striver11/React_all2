import React from "react";
import { useState } from "react";

const ChangeEvent =()=>{
    let [state,setState] =useState("");
    function handleChange(e)
    {
        setState(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
        <div> 
            <input type="text" value={state} onChange={handleChange} placeholder="Enter place"/>
            <h1>Destination:{state}</h1>
        </div>
        </>
    )
}

export default ChangeEvent