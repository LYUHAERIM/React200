import React, { Component } from 'react';

class App extends Component {
  // 1. 멤버 변수 정의
  count = 100;

  //2. 생성자 정의
  constructor() {
    super();
    this.state = {}; // {키: 값, ......} 객체
    console.log('1. 생성자 call');
  }
  // 3. 멤버 함수 정의
  myFunc() {
    console.log('4. 함수콜:', this.count);
    
  }

  static getDerivedStateFromProps(a, b) {
    console.log('2. getDerivedStateFromProps 콜', a, b)
    return {};
  }

  componentDidMount() {
   
    console.log('5. componentDidMount');
  }
  func01() {
    console.log('func01 call');
  }
  func02() {
    console.log(1, 'func02 call');
    let aa = 'Tiger', bb = 1234;
    console.log(aa, bb);
    console.log(2, '이름은', aa, '나이는', bb, '입니다');
    console.log(3, '이름은 aa이고 나이는 bb입니다');
    console.log(4, `이름은 ${aa}이고 나이는 ${bb}입니다`);
  }

  shouldComponentUpdate(a, b) {
    console.log('shouldComponentUpdate', a, b);
    return false;   // True/False;
  }

  render() {
    console.log('3. render call')
    this.myFunc();
    return (
      <div>
        <p>호랑이</p>
        <button onClick={ ()=>{this.func01()} }>버튼1</button><br/>
        <button onClick={ ()=>{this.func01()} }>버튼2</button><br/>
        <button onClick={ ()=>{this.setState({})} }>버튼3</button>
      </div>
    );
  }
}

export default App;