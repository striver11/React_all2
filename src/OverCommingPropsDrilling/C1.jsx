import React from 'react'
import { mycontext } from './A1'
import { useContext } from 'react'

const C1 = (props) => {
    let data=useContext(mycontext)
   
  return (
   <>
  <h1>Component C1</h1>
  {/* <mycontext.Consumer>
    {
        (tech)=>{
            return <h1>{tech}</h1>
        }
    }

  </mycontext.Consumer> */}

  <h1>{data}</h1>


   </>
  )
}

export default C1