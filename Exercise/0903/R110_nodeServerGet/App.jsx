import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  f01() {
    console.log('Call1');
    axios.get('/api/users')
      .then((res) => {
        console.log(res.data);
      })
  }

  f02() {
    console.log('Call2');
    axios.get('/api/tiger')
      .then((res) => {
        console.log(res.data);
      })
  }

  f03() {
    console.log('Call3');
    axios.post('/api/tiger')
      .then((res) => {
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <p>App</p>
        <button onClick={() => { this.f01() }}>버튼1</button><br />
        <button onClick={() => { this.f02() }}>버튼2</button><br />
        <button onClick={() => { this.f03() }}>버튼3</button><br />
      </div>
    );
  }
}

export default App;
