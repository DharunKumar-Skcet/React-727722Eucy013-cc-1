import React, { Component } from 'react'
import './App.css';
export default class 
 extends Component {
        constructor(props){
            super(props);
            this.state={count:0};
    }
    increment=()=>
    {
        this.setState(prevState=>({count:prevState.count+1}));
    }
  render() {
    return (
      <div>
      <p>Count:{this.state.count}</p>
      <button className="a3" onClick={this.increment}><h3 className="a2"> Increment </h3></button>
      </div>
    )
  }
}
