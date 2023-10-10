import React, { useEffect} from "react";

import axios from "axios"
import { useState } from "react";

const FetchApiAxiosUseEffect=()=>{
    const headingStyle = {
        color: "blue", // Set your desired color here
        textAlign:"center"
      };
      const type = {
        color: "green", // Set your desired color here
        textAlign:"center"
      };
      const setup = {
        color: "red", // Set your desired color here
        textAlign:"center"
      };
      const punchline = {
        color: "brown", // Set your desired color here
        textAlign:"center"
      };
 let[state,setState]=useState([])

 useEffect(()=>{
    axios.get("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(api_data=>setState(api_data.data))
 },[])

    return(
        <>
        <h1 style={headingStyle} >Random Programming jokes</h1>
        <ol>
            {
                state.map((user)=>{
                    return (
                    
                        <div>
                            <div><h1 style={type}>type: {user.type}</h1></div>
                            <div><h1 style={setup}>Setup: {user.setup}</h1></div>
                            <div><h1 style={punchline}>Pucnline:{user.punchline}</h1></div>
                        </div>
                    
                )})
            }
        </ol>
        </>
    )
}

export default FetchApiAxiosUseEffect