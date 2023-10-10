import React from 'react'
let bool=true
function ConditionalRenderingUsingTernary() {
  return (
   <>
   {
    bool?<h1>this is conditional rendering using the ternary  operator if true</h1>:<h1>this is conditional rendering using ternary operator if false</h1>
   }
   </>
  )
}

export default ConditionalRenderingUsingTernary