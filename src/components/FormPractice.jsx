import React from 'react'
import { useState } from 'react'

const FormPractice=()=>{
    let[state,setState]=useState({name:"",age:""});
    let[newstate,setNewState]=useState(state)
    setState((prevState)=>{
            if(e.target.name==="name")
            {
                return{...prevState,name:e.target.value}
            }
            else if(e.target.name==="age")
            {
                return(...prevState,age:e.target.value)
            }
    })

    function habdleSubmit(e)
    {
        setNewState

    }

    return(
        <>
        <form action="" className='reg-form' onSubmit={habdleSubmit}>
        <div>
            <div>
                <input type="text" name="name" value={state} placeholder='name'/>

            </div>
            <div>
                <input type="text" name="age" value={state} placeholder='age'/>

            </div>
            <div>
                <button type='submit' className='reg-btm'>Submit</button>
            </div>

        </div>
        </form>
        
        </>
    );

};


export default FormPractice