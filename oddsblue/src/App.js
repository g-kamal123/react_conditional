import './App.css';

import React, { Component } from 'react'
import ChangeColor from './ChangeColor';

export class App extends Component {
  state ={
    input:0
  }
  inputHandler=(event)=>{
    var inp = event.target.value
    this.setState({
      input:inp
    })
  }
  
  render() {
    return (
      <div className="App">
        <input type='number' onChange={this.inputHandler} value={this.state.input}/>
        <ChangeColor val={this.state.input}/>
      </div>
    );
  }
}

export default App
