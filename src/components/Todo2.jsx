import React,{useState} from "react";

const Todo2=()=>{
    let[state,setState]=useState("")
    let[newstate,setNewState]=useState([])

    function handleChange(e)
    {
        setState(e.target.value)

    }
    function handleSubmit(e)
    {
        setNewState((preval)=>{
            return [...preval,state]
        })
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
        {/* <li>{newstate}</li> */}

        <ul>
            {
                newstate.map((item)=>{
                return <li key={item.id}>{item}</li>
                })
            }
            
        </ul>
        
        </>
    )
}

export default Todo2