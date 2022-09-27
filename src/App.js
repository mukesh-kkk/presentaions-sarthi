import react, { useState, useEffect } from "react";
//functional component
function App() {
  // console.log("TOP");
  const [count, setCount] = useState(0);
  // console.log(count,"SEC");
  var x;
  function inc(e) {
    setCount(count + 1);
    x = setTimeout(() => {
      console.log("I AM STILL ALIVE", count);
    }, 2000);
  }
  

  return (
    <>
      {
        <>
          <h1 style={{ textAlign: "center" }}>{count}</h1>
          <button onClick={inc}>INCREMENT FN</button>
        </>
      }
    </>
  );
}
export default App;

// import {BarChart} from "./dthree/DThree";
// const data=[
//   {sales:30000,year:2001},
//   {sales:25010,year:2002},
//   {sales:20010,year:2003},
//   {sales:21010,year:2004},
//   {sales:20010,year:2005},
//   {sales:20010,year:2006},
//   {sales:20301,year:2007},
//   {sales:20010,year:2008},
//   {sales:20010,year:2009},
//   {sales:27010,year:2010},
//   {sales:29010,year:2011},
//   {sales:20590,year:2012},
//   {sales:20700,year:2023},
// ]
{
  /* <BarChart data={data}/> */
}
{
  /* <HorizontalBC data={data}/>  */
}
{
  /* <PieChart data= */
}
