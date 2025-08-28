import React, { Component } from 'react';

class App extends Component {
  f01() {
    console.log(1);
    this.f02(
      1,            //  
      'string',     // 
      [],           // 
      {},           // 
      true,         // 
      function(){
        console.log('tiger');
      }, // 
      ()=>{
        console.log('lion');
      });      // 
  }
  f02(a, b, c, d, e, f01, f02) {
    console.log(2);
    f01();
    f02();
  }

  f03() {
    this.f04(()=>{console.log('앙고빵을 생산한다');});
    this.f04(()=>{console.log('크림빵을 생산한다');});
  }

  f04(callback) { // callback, delegate, proxy
    console.log('기계를 작동시킨다');
    callback(); // 관점 지향 프로그램: AOP
    console.log('기계를 멈춘다..');
    
  }

  render() {
    return (
      <div>
        <button onClick={()=> {this.f01()}}>버튼1</button><br/>
        <button onClick={()=> {this.f02()}}>버튼2</button><br/>
        <button onClick={()=> {this.f03()}}>버튼3</button><br/>
        <button onClick={()=> {this.f04()}}>버튼4</button><br/>
      </div>
    );
  }
}

export default App;