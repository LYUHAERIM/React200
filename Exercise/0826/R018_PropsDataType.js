import React, { Component } from 'react';

class App extends Component {
f01() { }
render() {
    return (
      <div>
        <p>App</p>
        <Bpp 
        tiger={'호랑이'}
        lion={10}
        a = {1000}
        b = {'string'}
        c = {true}
        d = { [1, 2, 3] }
        e = { {k1:1, k2:2}}
        f = {()=>{ console.log('람다'); }}
        />
        </div>
    );
  }
}

// props
// 1. 상위컴이 하위컴에 데이터를 전달할 때 사용
// 2. props 변수(속성)은 읽기 전용이다
//    - this.props.tiger = '사자'; (x)
// 3. 1개 이상 전달할 수 있다
// 4. 전달된 값은 {}로 받아서 사용된다

class Bpp extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log('생성자1:', props);
    console.log('생성자2:', this.props);
    
  }
f01() { }
render() {
  console.log('모든 것', this.props.f());
  
  let {tiger, lion} = this.props;
  console.log('비구조화할당', tiger, lion);
  // this.props.tiger = '사자';  
    return (
      <div>
        <p>Bpp</p>
        <h3>{tiger}</h3>
        <h3>{lion}</h3>
        </div>
    );
  }
}

export default App;