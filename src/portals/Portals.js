import React from 'react';
import ReactDOM  from 'react-dom';

function Portals() {
  return ReactDOM.createPortal(
  <div><h1>It's Portals</h1></div>,
  document.getElementById("portal-root"));
    
  
}

export default Portals

// https://codesandbox.io/s/00254q4n6p?file=/src/index.js