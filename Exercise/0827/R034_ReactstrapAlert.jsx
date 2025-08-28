import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    let ar = [
      <li key='1'>소나무1</li>,
      <li key='2'>중나무1</li>,
      <li key='3'>대나무1</li>
    ];
    let br = ['호랑이', '코끼리', '독수리'];
    return (
      <div>
        <p>App</p>        
        <Alert color="primary">
          Hey! Pay attention.
        </Alert>
        <Bpp ar = {ar} br = {br}/>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    let {ar, br} = this.props;
    return (
      <div>
        <p>Bpp</p>
        <ul>{ar.map( v => v )}</ul>
        <ul>{br.map((v, i)=> <li key={i}>{v}</li>)}</ul>
      </div>
    );
  }
}

export default App;
