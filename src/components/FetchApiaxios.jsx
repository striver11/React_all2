import React from "react";

import axios from "axios"
import { useState } from "react";

const FetchApiaxios=()=>{
    let[state,setState]=useState([])
    function fetchApiDate()
    {
        // axios.get("https://akabab.github.io/superhero-api/api/all.json")
        axios.get("https://api.github.com/users")
        // axios.get("https://official-joke-api.appspot.com/jokes/programming/random")
        // axios.get("https://api.weatherbit.io/v2.0/current?lat=35.7721&lon=-78.63861&key=XXX&units=I")
        .then(api_data=>console.log(api_data.data))
    }
    fetchApiDate()

    return(
        <>
        <h1>slfkjd</h1>
        <ol>
            {
                state.map((user)=>{
                    return <li>{user.login}</li>
                })
            }
        </ol>
        </>
    )
}

export default FetchApiaxios