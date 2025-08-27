import React, { Component } from 'react';

class App extends Component {
  fun01() {
    console.log('fun01 call');
    let ar = [1, 2]; // 일반배열. , object.
    let br = [3, 4];
    let cr = ar.concat(br);
    let dr = [...ar, ...br]; // 전개 연산자
    console.log(cr);
    console.log(dr);   
  }
  fun02() {
    let ar = [1, 2, 3, 4];
    // 비 구조화 할당
    let [a, b, ...c] = ar;
    console.log(a, b, c);
    
  }
  fun03() {
    let obj1 = {
      a: 1, 
      b: 2, // 콤마를 붙이고 끝낸다
    };
    let obj2 = {
      c: 3, 
      d: 4, // 콤마를 붙이고 끝낸다
    };
    let obj3 = Object.assign(obj1, obj2);
    let obj4 = {...obj1, ...obj2};
    console.log(obj3, obj4);
    // [] = [], {} + {}
  }
  fun04() {
    let ar = [1, 2];
    let br = [3, 4];
    let cr = [...ar, ...br];
    this.fun05(ar, br);
    console.log(cr);
  }

  fun05(a, b) {
    console.log(a, b);
    
  }
  render() {
    return (
      <div>
        <p>08/25</p>
        <button onClick={()=> this.fun01()}>버튼1</button><br/>
        <button onClick={()=> this.fun02()}>버튼2</button><br/>
        <button onClick={()=> this.fun03()}>버튼3</button><br/>
        <button onClick={()=> this.fun03()}>버튼4</button><br/>
      </div>
    );
  }
}

export default App;