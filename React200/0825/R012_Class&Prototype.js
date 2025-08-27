import React, { Component } from 'react';

class App extends Component {
  // 일반 함수
  fun01(a, b) {
    console.log(a, b, typeof this.fun02);
  }

  // 람다 함수
  fun02 = (a, b)=>{
    console.log(a, b);
  }
  fun03 = (num)=>{
    return num * 10;
  }
  fun05 = num=>{ // 인수 전달이 1개 일때만 () 생략 가능
    return num * 10;
  }
  // 실행 문장이 return 문장 일때
  // {}와 return 키워드를 생략할 수 있다
  fun06 = num=> num * 10;

  // 함수에서 모든 타입을 인수 전달할 수 있고
  // 모든 타입을 리턴할 수 있다

  fun04() {
    console.log(this.fun03(3));  
    console.log(this.fun05(4));  
    console.log(this.fun06(5));  
  }
  fun07() {
    console.log(typeof 3);
    console.log(typeof 3.14);
    console.log(typeof true);
    console.log(typeof '');
    console.log(typeof []);
    console.log(typeof {});
    console.log(typeof this.fun04);
    console.log(typeof this.fun02);
    
  }

  fun08 = ()=> ({ a:1, b:2, })
  
  fun09 = (a) => {
    return (b) => {
      return a * b;
    };
  }
  fun11 = a => b => a * b;
  
  fun10() {
    let test = this.fun09(3);
    console.log(typeof test);
    console.log(this.fun09(3)(4));
  }
  
  render() {
    return (
      <div>
        <p>08/25</p>
        <button onClick={()=> this.fun01(1, 'tiger')}>버튼1</button><br/>
        <button onClick={()=> this.fun02(2, 'lion')}>버튼2</button><br/>
        <button onClick={()=> this.fun03()}>버튼3</button><br/>
        <button onClick={()=> this.fun04()}>버튼4</button><br/>
        <button onClick={()=> this.fun07()}>버튼7</button><br/>
        <button onClick={()=> this.fun10()}>버튼10</button><br/>
      </div>
    );
  }
}

export default App;
