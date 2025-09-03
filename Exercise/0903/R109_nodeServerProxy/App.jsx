import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  f01() {
    console.log('Call');
    axios.get('/api/users')
      .then((res) => {
        console.log(res.data);

      })
  }

  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={() => { this.f01() }}>버튼1</button>
      </div>
    );
  }
}

export default App;
