import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num : 100,
    };
    console.log('생성자 call1');  
  }
  render() {
    console.log(this.state);
    let {num} = this.state;
    return (
      <div>
        <p>App</p>
        <h3>{this.state.num}</h3>
        <h3>{num}</h3>
        <Bpp tiger={'호랑이'}/>
        </div>
    );
  }
}

class Bpp extends Component {
  constructor(props) {
    super();
    this.state = {
      num : 200,
      name : props.tiger
    };
    console.log('생성자 call2');  
    console.log(props);  
  }
  render() {
    return (
      <div>
        <p>Bpp</p>
        <p>{this.state.num}</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default App;