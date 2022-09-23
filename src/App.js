import react from "react";
import {BarChart} from "./dthree/DThree";
const data=[
  {sales:30000,year:2001},
  {sales:25010,year:2002},
  {sales:20010,year:2003},
  {sales:21010,year:2004},
  {sales:20010,year:2005},
  {sales:20010,year:2006},
  {sales:20301,year:2007},
  {sales:20010,year:2008},
  {sales:20010,year:2009},
  {sales:27010,year:2010},
  {sales:29010,year:2011},
  {sales:20590,year:2012},
  {sales:20700,year:2023},
]
function App(){
  return<>
  
  <BarChart data={data}/>
  {/* <HorizontalBC data={data}/>  */}
  {/* <PieChart data= */}
  </>
}
export default App;