import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title: 'Vohidjon To`lqinov',
      count: 0,
      width: 100,
      height: 100,
    }
  }
  render() {
    const change =()=>{
      this.setState({title: 'To`lqinov Vohidjon' });
    };
    const plus =()=>{
      if(this.state.count<10)
      this.setState({count: this.state.count+1})
      if(this.state.count===10)
      this.setState({count: 0})
    }
    const minus =()=>{
      if(this.state.count>0)
      this.setState({count: this.state.count-1})
    }
    const titlechange=(e)=>{
      console.log(e.target.value);

    }
    const onHeight=(e)=>{
      this.setState({height: e.target.value})
    };
    const onWidth=(e)=>{
      this.setState({width: e.target.value})
    };
    return (
      <div>
        <h1>{this.state.title}{this.state.count}</h1>
        <hr/>
        <input type="text" onChange={titlechange} />
        <button onClick={change}>change</button>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <hr />
        <input onChange={onWidth} type="text" placeholder='width' />
        <input onChange={onHeight} type="text" placeholder='heigth' />
        <hr />
        <div style={{width:`${this.state.width}px`,height:`${this.state.height}px`}} className="box">box</div>
        <hr />
      </div>
    )
  }
}
