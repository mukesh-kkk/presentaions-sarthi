import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Classed from './Class';
import CallBackParent from './callBack/CallBackParent';
import Portals from './portals/Portals';
import AppWithTimeOut from './AppWithTimeOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   
   <>
   {/* <App/> */}
   <AppWithTimeOut/>
   {/* <Classed/> */}


   {/* <CallBackParent/> */}
   {/* <Portals/> */}


   </>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
