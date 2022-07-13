import './App.css';

import React, { Component } from 'react'
import { clear } from '@testing-library/user-event/dist/clear';

export class App extends Component {
  state={
    text:'',
    color:''
  }
  interval = this.interval
  buttonHandler = (event)=>{
    clearInterval(this.interval)
    event.target.parentElement.childNodes[2].disabled= false
    var txt = event.target.innerText
    this.setState({
      text:txt,
    })
  }
  partyHandler = (event)=>{
    this.interval=setInterval(()=>{this.display(event)},500)
    
  }
  display = (event)=>{
    event.target.disabled= true
    var txt = event.target.innerText
    var colors = ['#ff0000', '#00ff00', '#0000ff','#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
    ];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      text:txt,
      color:random_color
    })
  }
  render() {
    if(this.state.text==='')
    return (
      <div className='main'>
        <button onClick={this.buttonHandler}>DARK</button>
        <button onClick={this.buttonHandler}>LIGHT</button>
        <button onClick={this.partyHandler}>PARTY</button>
      </div>
    )
    if(this.state.text==='DARK')
    return (
      <div className='main' style={{backgroundColor:'black'}}>
        <button onClick={this.buttonHandler}>DARK</button>
        <button onClick={this.buttonHandler}>LIGHT</button>
        <button onClick={this.partyHandler}>PARTY</button>
      </div>
    )
    if(this.state.text==='LIGHT')
    return (
      <div className='main' style={{backgroundColor:'white'}}>
        <button onClick={this.buttonHandler}>DARK</button>
        <button onClick={this.buttonHandler}>LIGHT</button>
        <button onClick={this.partyHandler}>PARTY</button>
      </div>
    )
    if(this.state.text==='PARTY')
    return (
      <>
      <marquee>DJ Akash</marquee>
      <img className='michael' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b55b465457013.5af49e368e588.gif' alt=''/>
      <div className='main' style={{backgroundColor:`${this.state.color}`}}>
        <button onClick={this.buttonHandler}>DARK</button>
        <button onClick={this.buttonHandler}>LIGHT</button>
        <button onClick={this.partyHandler}>PARTY</button>
        <img src='https://bestanimations.com/media/dancers/1920214489dancing-baby2.gif' alt='' />
      </div>
      </>
    )
  }
}

export default App