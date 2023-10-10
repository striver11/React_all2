import React from 'react'
import B1 from './B1'
import { createContext } from 'react'

export let mycontext =createContext()

const A1 = () => {
    let tech="salman sir react class"
  return (
    <mycontext.Provider value={"salman sir react class"}>
        <B1/>
    </mycontext.Provider>
  )
}

export default A1