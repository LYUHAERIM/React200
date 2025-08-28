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

  // try catch : 사용하지 않았을 때 >> Exception이 발생하면 >> 프로그램 중단
  // try catch : 사용했을 때       >> Exception이 발생하면 >> 프로그램 진행
  
  f04(a, b) {
    // Promise >> then >> then >> ...... >> catch
    // new Promise((resolve, reject)=>{
    new Promise((r1, r2)=>{
      a > b ? r1() : r2();
    })
    .then(()=>{
      console.log('then');
      
    })
    .catch(()=>{
      console.log('catch');
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={()=> {this.f01()}}>버튼1</button><br/>
        <button onClick={()=> {this.f02()}}>버튼2</button><br/>
        <button onClick={()=> {this.f03()}}>버튼3</button><br/>
        <button onClick={()=> {this.f04(3, 4)}}>버튼41</button><br/>
        <button onClick={()=> {this.f04(4, 3)}}>버튼42</button><br/>
      </div>
    );
  }
}

export default App;