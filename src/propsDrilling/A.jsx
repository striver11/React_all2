import React from 'react'
import B from './B'
import { createContext } from 'react'


const A = () => {
    let tech="salman sir react class"
  return (
    <B tech={tech}/>
  )
}

export default A