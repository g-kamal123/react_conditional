import React, { Component } from 'react'

export class ChangeColor extends Component {
  render() {
    console.log(this.props.val)
    if(this.props.val==='')
    return(
        <div className='color'></div>
    )
    if((this.props.val%2)===0)
    return(
        <div className='color' style={{backgroundColor:'red'}}>Even</div>
    )
    else 
    return(
        <div className='color' style={{backgroundColor:'blue'}}>Odd</div>
    )
  }
}

export default ChangeColor