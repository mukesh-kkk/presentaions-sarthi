import React from 'react'
import App from './App'
import { useState } from 'react';

function AppWithTimeOut() {
  const [hide, setHide] = useState();
    
  return (
<>
    {!hide&&<App/>}
    <button onClick={()=>setHide(!hide)}>UnMount</button>
    </>
  )
}

export default AppWithTimeOut