import React, { Component } from 'react';

class App extends Component {
  f01() {
    new Promise((resolve)=>{
      console.log(1);
      resolve(1000);
    })
    .then((result)=>{
      console.log(result);
      return {name:'tiger', age:2000};
    })
    .then((result)=>{
      console.log(result.name, result.age);
    });
   }

  f02() {
    // setTimeout(()=>{}, ms단위의 시간); // 1000ms = 1초
    // setTimeout은 비동기 함수
    setTimeout(()=>{
      console.log('call');
    }, 3000); // 3초 뒤에 람다함수를 실행하세요
    console.log(99999); 
  }

  f03() {
    new Promise((r)=>{
      setTimeout(()=>{
        console.log('tiger');
        r();
      }, 3000);
      console.log('sample');
    })
    .then(()=>{
      console.log('lion');
    })
    .then(()=>{});
  }

  render() {
    return (
      <div>
        <button onClick={()=> {this.f01()}}>버튼1</button><br/>
        <button onClick={()=> {this.f02()}}>버튼2</button><br/>
        <button onClick={()=> {this.f03()}}>버튼3</button><br/>
      </div>
    );
  }
}

export default App;