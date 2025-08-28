import React, { Component } from 'react';

class App extends Component {
  f01(e) {
    console.log(e);
  }

  f02(e) {
    console.log('f02', e);
  }

  render() {
    return (
      <div>
        <button onClick={ event => {
          // console.log(event);
          this.f01(event)
          }}>버튼1</button><br/>
      <h1 onClick={()=>{this.f01}}>호랑이</h1>
      <button onClick={this.f02}>호랑이</button>
      </div>
    );
  }
}

export default App;