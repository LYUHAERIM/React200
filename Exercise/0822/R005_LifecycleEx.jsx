import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {}; // {키: 값, ......} 객체
    console.log('생성자 call')  
  }

  render() {
    console.log('render call')
    return (
      <div>
        <p>호랑이</p>
      </div>
    );
  }
}

export default App;