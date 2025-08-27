import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log('render call1')
    return (
      <div>
        <p>호랑이</p>
        <Bpp/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    console.log('render call2')
    return (
      <div>
        <p>호랑이2</p>
      </div>
    );
  }
}

export default App;