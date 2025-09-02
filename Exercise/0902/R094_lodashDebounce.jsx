import { debounce } from 'lodash';
import React, { Component } from 'react';

class App extends Component {
  f01 = debounce(() => {
    console.log('debounce API call');
  }, 1000);

  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={() => { this.f01() }}>버튼1</button>
        <input type='text' onChange={() => { this.f01() }} />
      </div>
    );
  }
}

export default App;