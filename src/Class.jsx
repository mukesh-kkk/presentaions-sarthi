import React, { Component } from 'react'

export default class Classed extends Component {
  
    
    constructor(props){
        super(props);
        this.state={count:0}
        this.inc=this.inc.bind(this);
      
    }

   inc(e) {
    this.setState(prev=>{return {
        ...prev,
        count:prev.count+1}})
        setTimeout(()=>{
            console.log("I AM STILL ALIVE",this.state.count);
          },5000);
   }


  render() {
    return (<>
      <h1 style={{textAlign:"center"}}>{this.state.count}</h1>
      <button onClick={this.inc}>INCREMENT CL</button>
      </>
    )
  }
}
