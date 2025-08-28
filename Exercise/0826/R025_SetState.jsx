import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num : 100,
    };
    console.log('생성자 call1');  
  }
  render() {
    console.log(this.state);
    let {num} = this.state;
    return (
      <div>
        <p>App</p>
        <h3>{this.state.num}</h3>
        <h3>{num}</h3>
        <Bpp tiger={'호랑이'}/>
        </div>
    );
  }
}

class Bpp extends Component {
  constructor(props) {
    super();
    this.state = {
      num : 300,
      name : props.tiger
    };
    console.log('생성자 call2');  
    console.log(props);  
  }
  func01() {
    console.log('func01 call');
    this.num++;
  }
  func02() {
    // this.state.num++;
    this.setState({
      num : this.state.num + 1
    });
  }
  num = 999;
  render() {  
    // 반드시 setState() 함수를 이용해서 수정해야 한다
    console.log('render');
    // this.state.num = 300 (x)
    return (
      <div>
        <p>Bpp</p>
        <p>{this.state.num}</p>
        <p>{this.state.name}</p>
        <button onClick={()=> {this.func01()}}>버튼1</button><br/>
        <button onClick={()=> {this.func02()}}>버튼2</button><br/>
        <p>{this.num}</p>
      </div>
    );
  }
}
export default App;