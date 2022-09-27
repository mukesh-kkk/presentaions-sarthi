import React, { useState,useCallback,useEffect } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';
export default function CallBackParent() {
   const[buckets,setBuckets]= useState(1);
   const [fruits,setFruits]=useState(10);

   const increaseBuckets=()=> {
    setBuckets(buckets+1);}
   
   const increaseFruits=()=> {
    setFruits(fruits+10);
   };
 
  

  return (
    <div>
        <Title/>
        <Count text={"Buckets"} count={buckets}/>
        <Button incrementFun={increaseBuckets} >Increase Bucket</Button>
        <Count text={"Fruits"} count={fruits}/>
        <Button incrementFun={increaseFruits} >Increase Fruits</Button>
    </div>
  )
}
