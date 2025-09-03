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

  f04() {
    console.log('Call4');
    axios.post('/api/tiger01')
      .then((res) => {
        console.log(res.data);
      })
  }
  f05(data) {
    console.log('Call5');
    axios.get(`/api/tiger02/?valueKey=${data}`)
      .then((res) => {
        console.log(res.data);
      })
  }

  f06() {
    console.log('Call6');
    axios.get('/api/tiger03/baby')
      .then((res) => {
        console.log(res.data);
      })
  }

  f07(data) {
    console.log('Call7');
    axios.get('/api/tiger03/baby' + data)
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
        <button onClick={() => { this.f04() }}>버튼4</button><br />
        <button onClick={() => { this.f05(1) }}>버튼5-1</button><br />
        <button onClick={() => { this.f05(2) }}>버튼5-2</button><br />
        <button onClick={() => { this.f06() }}>버튼6</button><br />
        <button onClick={() => { this.f07(1) }}>버튼7-1</button><br />
        <button onClick={() => { this.f07(2) }}>버튼7-2</button><br />
      </div>
    );
  }
}

export default App;