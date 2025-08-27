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
      num : 200,
      name : props.tiger
    };
    console.log('생성자 call2');  
    console.log(props);  
  }
  func01() {
    console.log('func01 call');
    this.num++;
    this.forceUpdate();
  }
  func02() {
    // this.state.num++;
    this.setState({
      num : this.state.num + 1
    });
  }
  num = 999;
  func03() {
    // setState() 함수는 비동기함수이다
    // 비동기함수 : 프로그램의 실행순서를 지키지 않는 함수
    // 1 
    this.setState({
      num : this.state.num + 100
    }, ()=> {
      // 3
      console.log(this.state.num);}
    )
    // 대기 상태로 있다면
    // 2
    console.log(this.state.num);

    // console.log(1);
    // console.log(2);
    // console.log(3); // 만약 이 함수가 비동기함수라면
    // console.log(4);
    // console.log(5);
    
    
    
  }
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
        <button onClick={()=> {this.func03()}}>버튼3</button><br/>
        <p>{this.num}</p>
      </div>
    );
  }
}
export default App;