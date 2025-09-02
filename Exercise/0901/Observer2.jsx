import React, { Component } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';

class Timer {
  secondPassed = 0;
  constructor() {
    // makeObservable(
    //   this,
    //   {
    //     secondPassed: observable,
    //     increase: action,
    //   }
    // );
    makeAutoObservable(this);
  }
  increase() {
    console.log('increase call');
    this.secondPassed += 1;
  }
    decrease() {
    console.log('decrease call');
    this.secondPassed -= 1;
  }
}
const myTimer = new Timer();
class App extends Component {
  render() {
    return (
      <div>
        <p>App</p>
        <p>{myTimer.secondPassed}</p>
        <button onClick={()=>{myTimer.increase()}}>증가</button><br/>
        <button onClick={()=>{myTimer.decrease()}}>감소</button><br/>
        <Bpp/>
      </div>
    );
  }
}

// autorun / computed
class Bpp extends Component {
  render() {
    return (
      <div>
        <p>Bpp</p>
        <p>{myTimer.secondPassed}</p>
        <button onClick={()=>{myTimer.increase()}}>증가</button><br/>
        <button onClick={()=>{myTimer.decrease()}}>감소</button><br/>
        <Cpp/>
      </div>
    );
  }
}

observer(Bpp)

class Cpp extends Component {
  render() {
    return (
      <div>
        <p>Cpp</p>
        <p>{myTimer.secondPassed}</p>
        <button onClick={()=>{myTimer.increase()}}>증가</button><br/>
        <button onClick={()=>{myTimer.decrease()}}>감소</button><br/>
      </div>
    );
  }
}

export default App;
