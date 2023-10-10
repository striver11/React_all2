import React,{useState} from "react";

const Todo=()=>{
    let[state,setState]=useState("")
    let[newstate,setNewState]=useState("")

    function handleChange(e)
    {
        setState(e.target.value)

    }
    function handleSubmit(e)
    {
        setNewState(state)
        setState("")
        e.preventDefault()

    }

    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input value={state} onChange={handleChange} placeholder="enter a to do" type="text"/>
                    
                <button>Add Todo</button>
                
                
            </div>
        </form>
        <li>{newstate}</li>
        
        </>
    )
}

export default Todo