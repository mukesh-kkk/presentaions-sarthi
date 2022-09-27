import React from 'react'

export default  function Button({incrementFun,children}) {
    console.log("%c"+ children+" Button Rendered","color:blue")
  return (
    <button onClick={incrementFun}
    >{children}
    </button>
  )
}
