import React from 'react'

let bool=false
function ConditionalRendering() {
    if(bool)
    {
  return (
    <div>HELOW WORLD</div>
  )
}
    else
    {
        return(
            <div>this is the else block that is being exicuted
            </div>
        )
    }
}

export default ConditionalRendering