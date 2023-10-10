import React from 'react'
import { useState } from 'react'

const StateEx=() =>
{
    let [bool,setBool]=useState(true)

    function changeText()
    {
        setBool(!bool)
    }
    return (
        <div>
            <button onClick={changeText}>
                {bool?"ON":"OFF"}
            </button>
        </div>
    )

}

export default StateEx