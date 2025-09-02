import { debounce, throttle } from 'lodash';
import React, { Component } from 'react';

class App extends Component {
  f01 = debounce(() => {
    console.log('debounce API call');
  }, 1000);

  f02 = throttle(() => {
    console.log('throttle API call');
  }, 1000);

  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={() => { this.f01() }}>버튼1</button>
        <input type='text' onChange={() => { this.f01() }} />
        <button onClick={() => { this.f02() }}>버튼2</button>
      </div>
    );
  }
}

export default App;